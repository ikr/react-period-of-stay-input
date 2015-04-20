describe('PeriodOfStayInput', function () {
    'use strict';

    var assert = require('assert'),
        sinon = require('sinon'),
        bro = require('jsdom-test-browser'),
        React = require('react'),
        TestUtils = require('react/addons').addons.TestUtils,
        PeriodOfStayInput = require('../src/PeriodOfStayInput'),
        Environment = require('../src/Environment'),
        Model = require('../src/Model');

    before(function (done) { bro.jQueryify(done); });

    ['environment', 'model', 'onChange'].forEach(function (p) {
        it('declares the ' + p + ' property', function () {
            assert(PeriodOfStayInput.propTypes[p]);
        });
    });

    describe('HTML for 1+ nights', function () {
        var component,

            props = function () {
                return {
                    model: new Model('2014-09-26', '2014-09-27'),
                    environment: new Environment(false, '2014-09-26'),
                    className: 'ad-hoc'
                };
            };

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            );
        });

        it('has the root element\'s static class assigned', function () {
            assert(bro.$(component.getDOMNode()).hasClass('period-of-stay-input'));
        });

        it('has the root element\'s configurable class assigned', function () {
            assert(bro.$(component.getDOMNode()).hasClass('ad-hoc'));
        });

        it('contains check-in date input', function () {
            assert.strictEqual(
                bro.$('.period-of-stay-check-in input', component.getDOMNode()).attr('type'),
                'date'
            );
        });

        it('assignes the check-in input reference', function () {
            assert.strictEqual(
                bro.$('.period-of-stay-check-in input', component.getDOMNode()).attr('data-reactid'),
                component.refs.checkIn.getDOMNode().getAttribute('data-reactid')
            );
        });

        it('contains check-out date input', function () {
            assert.strictEqual(
                bro.$('.period-of-stay-check-out input', component.getDOMNode()).attr('type'),
                'date'
            );
        });

        it('assignes the check-out input reference', function () {
            assert.strictEqual(
                bro.$('.period-of-stay-check-out input', component.getDOMNode()).attr('data-reactid'),
                component.refs.checkOut.getDOMNode().getAttribute('data-reactid')
            );
        });

        it('contains the nights count span', function () {
            assert.strictEqual(bro.$('span.period-of-stay-nights', component.getDOMNode()).size(), 1);
        });

        describe('wrt model values', function () {
            it('contains the check-in value', function () {
                assert.strictEqual(component.refs.checkIn.getDOMNode().value, '2014-09-26');
            });

            it('contains the check-out value', function () {
                assert.strictEqual(component.refs.checkOut.getDOMNode().value, '2014-09-27');
            });

            it('contains the derived nights value', function () {
                assert.strictEqual(
                    bro.$('span.period-of-stay-nights', component.getDOMNode()).text(), '1 night');
            });
        });
    });

    describe('HTML for 0 nights', function () {
        var component,

            props = function () {
                return {
                    model: new Model('2014-09-26', '2014-09-26'),
                    environment: new Environment(true, '2014-09-26')
                };
            };

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            );
        });

        it('displays the 0 nights count', function () {
            assert.strictEqual(
                bro.$('span.period-of-stay-nights', component.getDOMNode()).text(), 'Single day');
        });
    });

    describe('HTML for 0+ nights', function () {
        var component,

            props = function () {
                return {
                    model: new Model('2014-09-26', '2014-09-28'),
                    environment: new Environment(true, '2014-09-26')
                };
            };

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            );
        });

        it('displays the 2 nights count', function () {
            assert.strictEqual(
                bro.$('span.period-of-stay-nights', component.getDOMNode()).text(), '2 nights');
        });
    });

    describe('HTML for russian translations', function () {
        var component,

            props = function () {
                return {
                    model: new Model('2014-09-26', '2014-09-28'),
                    environment: new Environment(true, '2014-09-26'),
                    lang: 'ru',
                    messages: {
                        period: {
                            singleDay: 'Один день',
                            oneNight: '1 ночь',
                            xNights: '{count, plural, =2 {# ночи} =5 {# ночей}}'
                        },
                        checkInDay: 'День заселения',
                        checkOutDay: 'День выселения'
                    }
                };
            };

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(
                React.createElement(PeriodOfStayInput, props())
            );
        });

        it('displays the 2 nights count in russian', function () {
            assert.strictEqual(
                bro.$('span.period-of-stay-nights', component.getDOMNode()).text(), '2 ночи');
        });
    });

    describe('interactions', function () {
        describe('dealing with value changes', function () {
            var model,
                onChange;

            beforeEach(function () {
                model = new Model('2014-10-01', '2014-10-03');

                sinon.spy(model, 'newCheckIn');
                sinon.spy(model, 'newCheckOut');

                onChange = sinon.spy();
            });

            describe('notifications', function () {
                var environment = new Environment(false, '2014-09-26'),
                    component;

                beforeEach(function () {
                    component = TestUtils.renderIntoDocument(
                        React.createElement(PeriodOfStayInput, {
                            model: model,
                            environment: environment,
                            onChange: onChange
                        })
                    );
                });

                describe('when check-in changes', function () {
                    beforeEach(function () {
                        TestUtils.Simulate.change(
                            component.refs.checkIn.getDOMNode(), {target: {value: '2014-10-02'}});
                    });

                    it('start with delegation to model', function () {
                        assert(model.newCheckIn.calledWith('2014-10-02', environment));
                    });

                    it('get to onChange', function () {
                        assert(onChange.calledOnce);
                        assert(onChange.args[0][0].checkOutDate);
                    });
                });

                describe('when check-out changes', function () {
                    beforeEach(function () {
                        TestUtils.Simulate.change(
                            component.refs.checkOut.getDOMNode(), {target: {value: '2014-10-07'}});
                    });

                    it('start with delegation to model', function () {
                        assert(model.newCheckOut.calledWith('2014-10-07', environment));
                    });

                    it('get to onChange', function () {
                        assert(onChange.calledOnce);
                        assert(onChange.args[0][0].checkInDate);
                    });
                });
            });
        });
    });
});
