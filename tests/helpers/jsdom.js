const {JSDOM} = require('jsdom')
require('raf/polyfill')

const jsdom = new JSDOM('<html><body><div id="main"></div></body></html>')

global.window = jsdom.window
global.document = jsdom.window.document
global.navigator = jsdom.window.navigator
