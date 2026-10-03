"""High fidelity, silent exhibition clips made from untouched originals.

Run with --ffmpeg and --ffprobe if they are not on PATH. Existing outputs are
reused. Display aspect ratios (including non-square source pixels) are preserved.
"""
from pathlib import Path
from fractions import Fraction
import argparse
import json
import subprocess

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--ffmpeg', default='ffmpeg')
parser.add_argument('--ffprobe', default='ffprobe')
parser.add_argument('--encoder', choices=['libx264', 'h264_nvenc'], default='libx264')
args = parser.parse_args()
codec = ['-c:v', 'h264_nvenc', '-preset', 'p7', '-rc', 'vbr', '-cq', '19', '-b:v', '0'] if args.encoder == 'h264_nvenc' else ['-c:v', 'libx264', '-preset', 'fast', '-crf', '19']
root = Path(__file__).resolve().parents[1]
catalog_path = root / 'assets/portfolio.json'
catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
folder = root / 'assets/experience/media'
folder.mkdir(exist_ok=True)

def dimensions(source, limit):
    stream = json.loads(subprocess.check_output([args.ffprobe, '-v', 'error', '-select_streams', 'v:0', '-show_streams', '-of', 'json', str(source)]))['streams'][0]
    sar = stream.get('sample_aspect_ratio', '1:1')
    sar = Fraction(sar.replace(':', '/')) if sar not in ('N/A', '0:1') else Fraction(1)
    aspect = Fraction(stream['width'], stream['height']) * sar
    height = stream['height']
    rotation = next((s.get('rotation', 0) for s in stream.get('side_data_list', []) if 'rotation' in s), 0)
    if abs(rotation) % 180 == 90:
        height = stream['width'] * sar
        aspect = 1 / aspect
    multiple = int(min(limit / aspect.numerator, limit / aspect.denominator, height / aspect.denominator)) // 2 * 2
    if multiple >= 2:
        return aspect.numerator * multiple, aspect.denominator * multiple
    h = int(min(height, limit, limit / aspect)) // 2 * 2
    return max(2, round(h * aspect / 2) * 2), max(2, h)

def run(opts, target):
    if not target.exists():
        subprocess.run([args.ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', *opts, str(target)], check=True)

for project in catalog['projects']:
    if not project['video']:
        continue
    source = root / project['source']
    w, h = dimensions(source, 1920)
    poster = folder / (project['id'] + '.jpg')
    run(['-ss', str(project['posterTime']), '-i', str(source), '-vf', f'scale={w}:{h},setsar=1', '-frames:v', '1', '-q:v', '2'], poster)
    w, h = dimensions(source, 1920)
    preview = folder / (project['id'] + '.mp4')
    run(['-ss', str(project['previewStart']), '-i', str(source), '-t', '6', '-an', '-vf', f'scale={w}:{h},setsar=1', *codec, '-pix_fmt', 'yuv420p', '-movflags', '+faststart'], preview)
    project['exhibitionPoster'] = poster.relative_to(root).as_posix()
    project['exhibitionPreview'] = preview.relative_to(root).as_posix()
    print(project['id'], w, h, flush=True)

hero = root / 'assets/site/hero-mobile.mp4'
run(['-i', str(root / 'assets/forest-flight-original.mp4'), '-t', '14.5', '-an', '-vf', 'scale=1280:720,setsar=1,fps=30', *codec, '-profile:v', 'main', '-level:v', '3.1', '-maxrate', '3M', '-bufsize', '6M', '-pix_fmt', 'yuv420p', '-movflags', '+faststart'], hero)
catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print('Exhibition media and mobile hero ready. Originals unchanged.')
