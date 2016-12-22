var jsdom = require('jsdom').jsdom,
    doc = jsdom('<html><body></body></html>'),
    win = doc.defaultView;

/* global global */

global.window = win
global.document = win.document
global.navigator = win.navigator
