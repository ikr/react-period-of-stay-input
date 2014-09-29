describe.only('DateInput instance', function () {
    'use strict';

    var assert = require('assert'),
        sinon = require('sinon'),
        jsdom = require('jsdom'),
        TestUtils = require('react/addons').addons.TestUtils,
        DateInput = require('../src/DateInput'),

        $;

    this.timeout(8000);

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

    describe('HTML', function () {
        var element;

        beforeEach(function () {
            element = TestUtils.renderIntoDocument(DateInput({value: '2014-09-29'})).getDOMNode();
        });

        it('is an input', function () {
            assert.strictEqual(element.tagName, 'INPUT');
        });

        it('input type is date', function () {
            assert.strictEqual(element.getAttribute('type'), 'date');
        });

        it('renders the property value passed on construction', function () {
            assert.strictEqual(element.getAttribute('value'), '2014-09-29');
        });

        it('has no error class', function () {
            assert(!$(element).hasClass('error'));
        });
    });

    describe('draft value', function () {
        var component,
            onChange;

        beforeEach(function () {
            onChange = sinon.spy();

            component = TestUtils.renderIntoDocument(
                DateInput({value: '2014-09-29', onChange: onChange}));

            TestUtils.Simulate.change(component.getDOMNode(), {target: {value: '2014-09-2'}});
        });

        it('is saved in the .state', function () {
            assert.strictEqual(component.state.draftValue, '2014-09-2');
        });

        it('gets rendered', function () {
            assert.strictEqual(component.getDOMNode().getAttribute('value'), '2014-09-2');
        });

        it('doesn\'t trigger onChange', function () {
            assert(!onChange.called);
        });

        it('sets the error class', function () {
            assert($(component.getDOMNode()).hasClass('error'));
        });

        describe('when finalized', function () {
            beforeEach(function () {
                TestUtils.Simulate.change(component.getDOMNode(), {target: {value: '2014-09-20'}});
            });

            it('triggers onChange', function () {
                assert(onChange.calledWith('2014-09-20'));
            });

            it('resets the internal state', function () {
                assert.strictEqual(component.state.draftValue, null);
            });
        });
    });
});
