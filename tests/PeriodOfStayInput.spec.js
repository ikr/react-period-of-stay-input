describe('PeriodOfStayInput', function () {
    'use strict';

    var assert = require('assert'),
        jsdom = require('jsdom'),
        PeriodOfStayInput = require('../src/PeriodOfStayInput'),

        $;

    beforeEach(function (done) {
        global.document = jsdom.jsdom('<html><body></body></html>', jsdom.level(1, 'core'));
        global.window = global.document.parentWindow;

        jsdom.jQueryify(global.window, 'http://code.jquery.com/jquery-1.11.0.min.js', function () {
            $ = global.window.$;
            done();
        });
    });

    afterEach(function () {
        global.window.close();
    });

    it('is defined', function () {
        assert(PeriodOfStayInput);
    });
});
