from PIL import Image, ImageDraw, ImageFont
 
img = Image.new('RGB', (800,240), color = ("black"))
 
fnt = ImageFont.truetype("cour.ttf", 100)
d = ImageDraw.Draw(img)
d.text((100,30), "Wachs", font=fnt, fill=("red"))
 
img.save('pil_text_font.png')
