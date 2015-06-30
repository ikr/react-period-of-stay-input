describe('DateInput instance', function () {
    'use strict';

    var assert = require('assert'),
        sinon = require('sinon'),
        bro = require('jsdom-test-browser'),
        React = require('react'),
        TestUtils = require('react/addons').addons.TestUtils,
        DateInput = require('../src/DateInput');

    before(function (done) { bro.jQueryify(done); });

    describe('HTML', function () {
        var element;

        beforeEach(function () {
            element = TestUtils.renderIntoDocument(
                React.createElement(DateInput, {value: '2014-09-29'})
            ).getDOMNode();
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
            assert(!bro.$(element).hasClass('error'));
        });

        it('has form-control class', function () {
            assert(bro.$(element).hasClass('form-control'));
        });
    });

    describe('draft value', function () {
        var component,
            onChange;

        beforeEach(function () {
            onChange = sinon.spy();

            component = TestUtils.renderIntoDocument(
                React.createElement(DateInput, {value: '2014-09-29', onChange: onChange})
            );

            TestUtils.Simulate.change(component.getDOMNode(), {target: {value: '2014-09-2'}});
        });

        it('is saved in the .state', function () {
            assert.strictEqual(component.state.draftValue, '2014-09-2');
        });

        it('gets rendered', function () {
            assert.strictEqual(bro.$(component.getDOMNode()).val(), '2014-09-2');
        });

        it('doesn\'t trigger onChange', function () {
            assert(!onChange.called);
        });

        it('sets the error class', function () {
            assert(bro.$(component.getDOMNode()).hasClass('error'));
        });

        it('has form-control class', function () {
            assert(bro.$(component.getDOMNode()).hasClass('form-control'));
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
