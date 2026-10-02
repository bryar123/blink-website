"""Check display proportions against original media, including non-square pixels."""
import argparse
import json
import subprocess
from fractions import Fraction
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--ffprobe', default='ffprobe')
args = parser.parse_args()

def aspect(path):
    if path.suffix.lower() != '.mp4':
        with Image.open(path) as image:
            image = ImageOps.exif_transpose(image)
            return Fraction(image.width, image.height)
    stream = json.loads(subprocess.check_output([args.ffprobe, '-v', 'error', '-select_streams', 'v:0', '-show_streams', '-of', 'json', str(path)]))['streams'][0]
    # Display aspect, not encoded width/height: anamorphic files can differ drastically.
    sar = stream.get('sample_aspect_ratio', '1:1')
    sar = Fraction(sar.replace(':', '/')) if sar not in ('N/A', '0:1') else Fraction(1)
    ratio = Fraction(stream['width'], stream['height']) * sar
    rotation = next((s['rotation'] for s in stream.get('side_data_list', []) if 'rotation' in s), 0)
    return 1 / ratio if abs(rotation) % 180 == 90 else ratio

catalog = json.loads((ROOT / 'assets/portfolio.json').read_text(encoding='utf-8'))
checks = 0
for project in catalog['projects'] + catalog['studio'] + [dict(catalog['hero'], id='hero')]:
    expected = aspect(ROOT / project['source'])
    actual = {'catalog': Fraction(project['width'], project['height'])} if 'width' in project else {}
    actual.update({key: aspect(ROOT / project[key]) for key in ('full', 'preview', 'thumbnail') if project.get(key)})
    for key, ratio in actual.items():
        error = abs(float(ratio / expected) - 1)
        assert error < .005, f'{project["id"]} {key}: {ratio}, original display ratio {expected}'
        checks += 1
print(f'PASS {checks} display-aspect checks against original media')
