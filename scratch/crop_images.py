from PIL import Image
import glob
import os

os.makedirs('assets/images/cropped', exist_ok=True)

for p in glob.glob('assets/images/*.png'):
    if 'cropped' in p:
        continue
    im = Image.open(p)
    print(p, 'orig size:', im.size)
    gray = im.convert('L')
    bbox = gray.point(lambda val: 255 if val > 15 else 0).getbbox()
    print('  bbox:', bbox)
    if bbox:
        # Add slight padding (e.g. 20px)
        w, h = im.size
        pad_x = 24
        pad_y = 20
        x0 = max(0, bbox[0] - pad_x)
        y0 = max(0, bbox[1] - pad_y)
        x1 = min(w, bbox[2] + pad_x)
        y1 = min(h, bbox[3] + pad_y)
        cropped = im.crop((x0, y0, x1, y1))
        cw, ch = cropped.size
        print(f'  cropped size: {cw}x{ch}, aspect ratio: {cw/ch:.2f}')
        base = os.path.basename(p)
        out_path = os.path.join('assets/images', f'cropped-{base}')
        cropped.save(out_path, optimize=True)
        print('  saved:', out_path)
