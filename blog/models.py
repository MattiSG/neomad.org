import datetime
import hashlib
import os

from bs4 import BeautifulSoup

from core.utils import is_base64, save_base64_image

from core import db, app
from core.helpers import slugify
from user.models import User


class Article(db.Document):
    title = db.StringField(required=True)
    content = db.StringField(required=True)
    creation_date = db.DateTimeField(default=datetime.datetime.utcnow)
    slug = db.StringField(required=True)
    author = db.ReferenceField(User)
    language = db.StringField(min_length=2, max_length=2, default='en')
    images = db.ListField()

    def __str__(self):
        return str(self.title)

    def extract_images(self):
        """
        Extract images from the content, resize and save them locally if they
        are base64 encoded.
        Saves the list of images into the images list property.
        """
        html = BeautifulSoup(self.content, 'html.parser')
        images = []
        try:
            os.makedirs(self.get_images_path())
        except FileExistsError:
            pass
        for img in html.find_all('img'):
            data = img.get('src')
            if is_base64(data):
                m = hashlib.md5()
                m.update(data.encode('utf-8'))
                img_name = m.hexdigest()
                img_path = '{}/{}'.format(self.get_images_path(), img_name)
                img_url = '{}/{}'.format(self.get_images_url(), img_name)
                save_base64_image(data, img_path, (1000, 800))
                img['src'] = img_url
                images.append(img_url)
            else:
                images.append(data)
            self.images = images
        self.content = str(html)

    def get_images_path(self):
        return '{}/{}'.format(app.config['ARTICLE_IMG_PATH'], self.id)

    def get_images_url(self):
        return '{}/{}'.format(app.config['ARTICLE_IMG_URL'], self.id)

    @property
    def image(self):
        if len(self.images):
            return self.images[0]


    def save(self, *args, **kwargs):
        if not self.creation_date:
            self.creation_date = datetime.datetime.utcnow()
        self.slug = slugify(self.title)
        is_new =  not self.id
        # when new, the id must exist before extracting images
        if is_new:
            super(Article, self).save(*args, **kwargs)
        self.extract_images()
        return super(Article, self).save(*args, **kwargs)

    meta = {
        'ordering': ['-creation_date']
    }
