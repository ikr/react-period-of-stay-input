const jsdom = require('jsdom').jsdom
const doc = jsdom('<html><body></body></html>')
const win = doc.defaultView

/* global global */

global.window = win
global.document = win.document
global.navigator = win.navigator
