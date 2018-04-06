describe('PeriodOfStayInput', function () {
    const assert = require('assert')
    const sinon = require('sinon')
    const React = require('react')
    const TestUtils = require('react/addons').addons.TestUtils
    const massert = require('./helpers/massert')
    const PeriodOfStayInput = require('../src/PeriodOfStayInput')
    const intlMessages = require('../src/intlMessages')
    const Environment = require('../src/Environment')
    const Model = require('../src/Model')

    ;['environment', 'model', 'onChange'].forEach(function (p) {
        it('declares the ' + p + ' property', function () {
            assert(PeriodOfStayInput.propTypes[p])
        })
    })

    describe('HTML for 1+ nights', function () {
        let component

        function props () {
            return {
                model: new Model('2014-09-26', '2014-09-27'),
                environment: new Environment(false, '2014-09-26'),
                className: 'ad-hoc',
                messages: intlMessages().en
            }
        }

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            )
        })

        it('has the root element\'s static class assigned', function () {
            massert.cssClass(component.getDOMNode(), 'period-of-stay-input')
        })

        it('has the root element\'s configurable class assigned', function () {
            massert.cssClass(component.getDOMNode(), 'ad-hoc')
        })

        it('contains check-in date input', function () {
            assert.strictEqual(
                component.getDOMNode().querySelector(
                    '.period-of-stay-check-in input'
                ).getAttribute('type'),

                'date'
            )
        })

        it('assignes the check-in input reference', function () {
            assert.strictEqual(
                component.getDOMNode().querySelector(
                    '.period-of-stay-check-in input'
                ).getAttribute('data-reactid'),

                component.refs.checkIn.getDOMNode().getAttribute('data-reactid')
            )
        })

        it('contains check-out date input', function () {
            assert.strictEqual(
                component.getDOMNode().querySelector(
                    '.period-of-stay-check-out input'
                ).getAttribute('type'),

                'date'
            )
        })

        it('assignes the check-out input reference', function () {
            assert.strictEqual(
                component.getDOMNode().querySelector(
                    '.period-of-stay-check-out input'
                ).getAttribute('data-reactid'),

                component.refs.checkOut.getDOMNode().getAttribute('data-reactid')
            )
        })

        it('contains the nights count span', function () {
            assert.strictEqual(
                component.getDOMNode().querySelectorAll('span.period-of-stay-nights').length, 1)
        })

        describe('wrt model values', function () {
            it('contains the check-in value', function () {
                assert.strictEqual(component.refs.checkIn.getDOMNode().value, '2014-09-26')
            })

            it('contains the check-out value', function () {
                assert.strictEqual(component.refs.checkOut.getDOMNode().value, '2014-09-27')
            })

            it('contains the derived nights value', function () {
                assert.strictEqual(
                    component.getDOMNode().querySelector(
                        'span.period-of-stay-nights'
                    ).textContent.trim(),

                    '1 night'
                )
            })
        })
    })

    describe('HTML for 0 nights', function () {
        let component

        let props = function () {
            return {
                model: new Model('2014-09-26', '2014-09-26'),
                environment: new Environment(true, '2014-09-26'),
                messages: intlMessages().en
            }
        }

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            )
        })

        it('displays the 0 nights count', function () {
            assert.strictEqual(
                component.getDOMNode().querySelector(
                    'span.period-of-stay-nights'
                ).textContent.trim(),

                'Single day'
            )
        })
    })

    describe('HTML for 0+ nights', function () {
        let component

        function props () {
            return {
                model: new Model('2014-09-26', '2014-09-28'),
                environment: new Environment(true, '2014-09-26'),
                messages: intlMessages().en
            }
        }

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            )
        })

        it('displays the 2 nights count', function () {
            assert.strictEqual(
                component.getDOMNode().querySelector(
                    'span.period-of-stay-nights'
                ).textContent.trim(),

                '2 nights'
            )
        })
    })

    describe('HTML for russian translations', function () {
        let component

        function props () {
            return {
                model: new Model('2014-09-26', '2014-09-28'),
                environment: new Environment(true, '2014-09-26'),
                locale: 'ru',
                messages: {
                    'react-period-of-stay-input': {
                        period: '{count, plural, =0 {Один день} =1 {1 ночь} =2 {2 ночи} other {# ночей}}',
                        checkInDay: 'День заселения',
                        checkOutDay: 'День выселения'
                    }
                }
            }
        }

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            )
        })

        it('displays the 2 nights count in russian', function () {
            assert.strictEqual(
                component.getDOMNode().querySelector(
                    'span.period-of-stay-nights'
                ).textContent.trim(),

                '2 ночи'
            )
        })
    })

    describe('interactions', function () {
        describe('dealing with value changes', function () {
            let model
            let onChange

            beforeEach(function () {
                model = new Model('2014-10-01', '2014-10-03')

                sinon.spy(model, 'newCheckIn')
                sinon.spy(model, 'newCheckOut')

                onChange = sinon.spy()
            })

            describe('notifications', function () {
                const environment = new Environment(false, '2014-09-26')
                let component

                beforeEach(function () {
                    component = TestUtils.renderIntoDocument(
                        React.createElement(PeriodOfStayInput, {
                            model: model,
                            environment: environment,
                            onChange: onChange,
                            messages: intlMessages().en
                        })
                    )
                })

                describe('when check-in changes', function () {
                    beforeEach(function () {
                        TestUtils.Simulate.change(
                            component.refs.checkIn.getDOMNode(), {target: {value: '2014-10-02'}})
                    })

                    it('start with delegation to model', function () {
                        assert(model.newCheckIn.calledWith('2014-10-02', environment))
                    })

                    it('get to onChange', function () {
                        assert(onChange.calledOnce)
                        assert(onChange.args[0][0].checkOutDate)
                    })
                })

                describe('when check-out changes', function () {
                    beforeEach(function () {
                        TestUtils.Simulate.change(
                            component.refs.checkOut.getDOMNode(), {target: {value: '2014-10-07'}})
                    })

                    it('start with delegation to model', function () {
                        assert(model.newCheckOut.calledWith('2014-10-07', environment))
                    })

                    it('get to onChange', function () {
                        assert(onChange.calledOnce)
                        assert(onChange.args[0][0].checkInDate)
                    })
                })
            })
        })
    })
})
