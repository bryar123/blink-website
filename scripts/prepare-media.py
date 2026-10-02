"""Prepare portfolio media without changing the originals.

Requires Pillow and FFmpeg with libx264 (or --encoder h264_nvenc).
Example: python scripts/prepare-media.py --ffmpeg /path/to/ffmpeg
Use --force to rebuild derivatives; --only-previews leaves full films untouched.
"""
from pathlib import Path
import argparse
import json
import subprocess
from fractions import Fraction
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--ffmpeg', default='ffmpeg')
parser.add_argument('--encoder', choices=['libx264', 'h264_nvenc'], default='libx264')
parser.add_argument('--force', action='store_true')
parser.add_argument('--only-previews', action='store_true')
parser.add_argument('--projects', nargs='+', help='Rebuild only these catalog project IDs')
parser.add_argument('--ffprobe', help='Defaults to ffprobe next to the FFmpeg executable')
args = parser.parse_args()
catalog = json.loads((ROOT / 'assets/portfolio.json').read_text(encoding='utf-8'))
(ROOT / 'assets/portfolio').mkdir(exist_ok=True)

def encode_options(preview=False):
    if args.encoder == 'libx264':
        return ['-c:v', 'libx264', '-preset', 'medium', '-crf', '27' if preview else '22']
    return ['-c:v', 'h264_nvenc', '-preset', 'p6', '-rc', 'vbr', '-cq', '29' if preview else '25', '-b:v', '0']

def run(command):
    subprocess.run([args.ffmpeg, '-hide_banner', '-loglevel', 'error', '-y'] + command, check=True)

def needed(path):
    return args.force or not path.exists()

def display_size(source, max_width, max_height):
    """Normalize display geometry before discarding non-square pixel metadata."""
    probe = args.ffprobe or str(Path(args.ffmpeg).with_name('ffprobe' + Path(args.ffmpeg).suffix))
    data = json.loads(subprocess.check_output([probe, '-v', 'error', '-select_streams', 'v:0', '-show_streams', '-of', 'json', str(source)]))['streams'][0]
    sar = data.get('sample_aspect_ratio', '1:1')
    sar = Fraction(sar.replace(':', '/')) if sar not in ('N/A', '0:1') else Fraction(1)
    aspect = Fraction(data['width'], data['height']) * sar
    height = data['height']
    rotation = next((s.get('rotation', 0) for s in data.get('side_data_list', []) if 'rotation' in s), 0)
    if abs(rotation) % 180 == 90:
        height = data['width'] * sar
        aspect = 1 / aspect
    # Keep the exact display ratio and even H.264 dimensions without upscaling.
    multiple = int(min(max_width / aspect.numerator, max_height / aspect.denominator, height / aspect.denominator)) // 2 * 2
    if multiple >= 2:
        return aspect.numerator * multiple, aspect.denominator * multiple
    height = int(min(height, max_height, max_width / aspect)) // 2 * 2
    return max(2, round(height * aspect / 2) * 2), max(2, height)

for p in catalog['projects'] + catalog['studio']:
    if args.projects and p['id'] not in args.projects:
        continue
    source = ROOT / p['source']
    if p['video']:
        full, preview = ROOT / p['full'], ROOT / p['preview']
        if not args.only_previews and needed(full):
            w, h = display_size(source, 1920, 1920)
            scale = f'scale={w}:{h},setsar=1'
            run(['-i', str(source), '-map', '0:v:0', '-map', '0:a?', '-vf', scale] + encode_options() + ['-maxrate', '4M', '-bufsize', '8M', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', str(full)])
        if needed(preview):
            w, h = display_size(source, 960, 720)
            scale = f'scale={w}:{h},setsar=1'
            run(['-ss', str(p['previewStart']), '-i', str(source), '-t', '5', '-an', '-vf', scale] + encode_options(True) + ['-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(preview)])
    if args.only_previews:
        continue
    thumb = ROOT / p['thumbnail']
    if needed(thumb):
        if p['video']:
            # Decode one PNG through stdout; no intermediate source edits.
            from io import BytesIO
            w, h = display_size(source, 1280, 1280)
            data = subprocess.check_output([args.ffmpeg, '-hide_banner', '-loglevel', 'error', '-ss', str(p['posterTime']), '-i', str(source), '-vf', f'scale={w}:{h},setsar=1', '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'])
            image = Image.open(BytesIO(data)).convert('RGB')
        else:
            image = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
        limit = 1280 if p['video'] else 1000
        image.thumbnail((limit, limit), Image.Resampling.LANCZOS)
        image.save(thumb, 'WEBP', quality=85 if p['video'] else 88, method=6)

# A separate opening excerpt avoids placing the film's end-card text behind the headline.
hero = catalog['hero']
if not args.projects and needed(ROOT / hero['preview']):
    w, h = display_size(ROOT / hero['source'], 1440, 1440)
    run(['-ss', str(hero['start']), '-i', str(ROOT / hero['source']), '-t', '8', '-an', '-vf', f'scale={w}:{h},setsar=1'] + encode_options(True) + ['-maxrate', '2500k', '-bufsize', '5M', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(ROOT / hero['preview'])])
if not args.projects and not args.only_previews and needed(ROOT / hero['thumbnail']):
    from io import BytesIO
    w, h = display_size(ROOT / hero['source'], 1280, 1280)
    data = subprocess.check_output([args.ffmpeg, '-hide_banner', '-loglevel', 'error', '-ss', str(hero['posterTime']), '-i', str(ROOT / hero['source']), '-frames:v', '1', '-vf', f'scale={w}:{h},setsar=1', '-f', 'image2pipe', '-vcodec', 'png', '-'])
    Image.open(BytesIO(data)).save(ROOT / hero['thumbnail'], 'WEBP', quality=85, method=6)
print('Portfolio media prepared. Original files preserved.')
