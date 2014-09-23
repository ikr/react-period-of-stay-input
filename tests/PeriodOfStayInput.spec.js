describe('PeriodOfStayInput', function () {
    'use strict';

    var assert = require('assert'),
        jsdom = require('jsdom'),
        TestUtils = require('react/addons').addons.TestUtils,
        PeriodOfStayInput = require('../src/PeriodOfStayInput'),

        props = function () {
            return {};
        },

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

    describe('static markup', function () {
        var element;

        beforeEach(function () {
            element = TestUtils.renderIntoDocument(PeriodOfStayInput(props())).getDOMNode();
        });

        it('has the root element\'s class assigned', function () {
            assert($(element).hasClass('period-of-stay-input'));
        });
    });
});
