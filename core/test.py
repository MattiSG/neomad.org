from unittest import TestCase

from .utils import clean_html
from . import helpers


class UtilsTest(TestCase):
    def test_clean_html_default(self):
        self.assertEqual(clean_html('<p>content</p>'), '<p>content</p>')
        self.assertEqual(clean_html('<style>h1{}</style>'), '')
        self.assertEqual(clean_html('<script>alert()</script>'), '')
        self.assertEqual(clean_html('<<script>script> alert() </</script>script>'), '<p>&lt;script&gt;</p>')
        self.assertEqual(clean_html('<h1 class="bigger">title</h1>'), '<p>title</p>')
        self.assertEqual(clean_html('<h2 class="bigger">title</h2>'), '<h2>title</h2>')
        self.assertEqual(clean_html('<p>&nbsp;&nbsp;</p>'), '')

    def test_clean_html_custom(self):
        allowed_tags = {'a': ('href'), 'h3': (), 'img': ('src'),}
        self.assertEqual(clean_html('<p>content</p>', allowed_tags), '<p>content</p>')
        self.assertEqual(clean_html('<h2 class="bigger">title</h2>', allowed_tags), '<p>title</p>')
        self.assertEqual(clean_html('<h3 class="bigger">title</h3>', allowed_tags), '<h3>title</h3>')
        self.assertEqual(clean_html('<img src="/myimage.jpg">', allowed_tags), '<img src="/myimage.jpg"/>')


class HelpersTest(TestCase):
    def test_extract_youtube_id(self):
        youtube_id = helpers.extract_youtube_id(
            'https://www.youtube.com/watch?v=c2rEbbGLPQc')
        self.assertEqual(youtube_id, 'c2rEbbGLPQc')

    def test_extract_youtube_id_with_hyphen(self):
        youtube_id = helpers.extract_youtube_id('https://youtu.be/J2M4coM-u6Y')
        self.assertEqual(youtube_id, 'J2M4coM-u6Y')
