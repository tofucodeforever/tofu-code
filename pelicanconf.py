#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import datetime

AUTHOR = 'Zeph'
SITENAME = 'TofuCode'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# todo: favico
# search: https://github.com/getpelican/pelican-plugins/tree/master/tipue_search

#### Paths
ARTICLE_PATHS = ['posts']
PAGE_PATHS = ['pages']
# TODO: 404
# TEMPLATE_PAGES = {'404.html': '494.html'}

ARTICLE_URL = 'posts/{slug}.html'
ARTICLE_SAVE_AS = 'posts/{slug}.html'
ARTICLE_LANG_URL = 'posts/{slug}-{lang}.html'
ARTICLE_LANG_SAVE_AS = 'posts/{slug}-{lang}.html'


####
LINK_YOUTUBE = 'https://www.youtube.com/channel/UC_l__vniqJ028Hhee0aR2yg'

#### THEME
THEME = '../Flex-tofu'
PYGMENTS_STYLE = "monokai"
SITETITLE = SITENAME

DISABLE_URL_HASH = True # why even have this ?
# SITESUBTITLE = ''

# upper menu
# MAIN_MENU = True
# MENUITEMS = (
    # ("Categories", "/categories.html"),
#    ("All Questions", "pages/all-questions.html"),
#    ("Tags", "/tags.html"),
# )

# sidebar
DISPLAY_PAGES_ON_MENU = False
LINKS = (
    ("Interview Questions", "/pages/interview-questions.html"),
    ("Recent Questions", "/category/leetcode.html"),
    ("Tags", "/tags.html"),
)

SOCIAL = (
    ("youtube", LINK_YOUTUBE),
)


FOOTER_MESSAGE = 'Eat Tofu and be true'
COPYRIGHT_YEAR = datetime.datetime.now().year
COPYRIGHT_NAME = 'TofuCode.com'
