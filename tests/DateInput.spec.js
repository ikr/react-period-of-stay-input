describe('DateInput instance', function () {
    const assert = require('assert')
    const sinon = require('sinon')
    const React = require('react')
    const TestUtils = require('react/addons').addons.TestUtils
    const massert = require('./helpers/massert')
    const DateInput = require('../src/DateInput')

    describe('HTML', function () {
        let element

        beforeEach(function () {
            element = TestUtils.renderIntoDocument(
                React.createElement(DateInput, {value: '2014-09-29', onChange: function () {}})
            ).getDOMNode()
        })

        it('is an input', function () {
            assert.strictEqual(element.tagName, 'INPUT')
        })

        it('input type is date', function () {
            assert.strictEqual(element.getAttribute('type'), 'date')
        })

        it('renders the property value passed on construction', function () {
            assert.strictEqual(element.getAttribute('value'), '2014-09-29')
        })

        it('has no error class', function () {
            massert.noCssClass(element, 'error')
        })

        it('has form-control class', function () {
            massert.cssClass(element, 'form-control')
        })
    })

    describe('draft value', function () {
        let component
        let onChange

        beforeEach(function () {
            onChange = sinon.spy()

            component = TestUtils.renderIntoDocument(
                React.createElement(DateInput, {value: '2014-09-29', onChange: onChange})
            )

            TestUtils.Simulate.change(component.getDOMNode(), {target: {value: '2014-09-2'}})
        })

        it('is saved in the .state', function () {
            assert.strictEqual(component.state.draftValue, '2014-09-2')
        })

        it('gets rendered', function () {
            assert.strictEqual(component.getDOMNode().value, '2014-09-2')
        })

        it('doesn\'t trigger onChange', function () {
            assert(!onChange.called)
        })

        it('sets the error class', function () {
            massert.cssClass(component.getDOMNode(), 'error')
        })

        it('has form-control class', function () {
            massert.cssClass(component.getDOMNode(), 'form-control')
        })

        describe('when finalized', function () {
            beforeEach(function () {
                TestUtils.Simulate.change(component.getDOMNode(), {target: {value: '2014-09-20'}})
            })

            it('triggers onChange', function () {
                assert(onChange.calledWith('2014-09-20'))
            })

            it('resets the internal state', function () {
                assert.strictEqual(component.state.draftValue, null)
            })
        })
    })
})
