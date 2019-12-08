import base64
import re
from io import BytesIO

from feincms_cleanse import Cleanse
from PIL import Image


def is_base64(data):
    return len(re.findall('^data:\w+/(\w+);base64,', data))


def save_image(data, output, size=None, format='jpeg'):
    image = Image.open(data)
    if size:
        image.thumbnail(size)
    return image.save(output, format=format)


def save_base64_image(data, output, size=None):
    meta, data = data.split(',')
    try:
        format = re.findall('data:\w+/(\w+);base64', meta)[0]
    except KeyError:
        format = 'jpeg'
    image_data = BytesIO(base64.b64decode(data))
    return save_image(image_data, output, size=size, format=format)


def clean_html(html, allowed_tags=None):
    cleaner = Cleanse()
    if allowed_tags:
        cleaner.allowed_tags = allowed_tags
    cleaner.empty_tags = ('br', 'img',)
    return cleaner.cleanse(html)
