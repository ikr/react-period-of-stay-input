describe('PeriodOfStayInput instance', function () {
    'use strict';

    var assert = require('assert'),
        sinon = require('sinon'),
        jsdom = require('jsdom'),
        TestUtils = require('react/addons').addons.TestUtils,
        PeriodOfStayInput = require('../src/PeriodOfStayInput'),
        Environment = require('../src/Environment'),
        Model = require('../src/Model'),

        $;

    this.timeout(4000);

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

    describe('HTML for 1+ nights', function () {
        var component,

            props = function () {
                return {
                    model: new Model('2014-09-26', '2014-09-27'),
                    environment: new Environment(false, '2014-09-26')
                };
            };

        beforeEach(function () {
            component = TestUtils.renderIntoDocument(PeriodOfStayInput(props()));
        });

        it('has the root element\'s class assigned', function () {
            assert($(component.getDOMNode()).hasClass('period-of-stay-input'));
        });

        it('contains labelled check-in input', function () {
            assert.strictEqual(
                $('label.period-of-stay-check-in input', component.getDOMNode()).attr('type'),
                'date'
            );
        });

        it('assignes the check-in input reference', function () {
            assert.strictEqual(
                $('label.period-of-stay-check-in input', component.getDOMNode()).attr('data-reactid'),
                component.refs.checkIn.getDOMNode().getAttribute('data-reactid')
            );
        });

        it('contains labelled check-out input', function () {
            assert.strictEqual(
                $('label.period-of-stay-check-out input', component.getDOMNode()).attr('type'),
                'date'
            );
        });

        it('assignes the check-out input reference', function () {
            assert.strictEqual(
                $('label.period-of-stay-check-out input', component.getDOMNode()).attr('data-reactid'),
                component.refs.checkOut.getDOMNode().getAttribute('data-reactid')
            );
        });

        it('contains the nights count span', function () {
            assert.strictEqual($('span.period-of-stay-nights', component.getDOMNode()).size(), 1);
        });

        it('doesn\'t contain the "1-day stay" link', function () {
            assert.strictEqual(
                $('a.period-of-stay-one-day', component.getDOMNode()).size(),
                0
            );
        });

        it('doesn\'t contain the "Overnight stay" link', function () {
            assert.strictEqual(
                $('a.period-of-stay-overnight', component.getDOMNode()).size(),
                0
            );
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
                    $('span.period-of-stay-nights', component.getDOMNode()).text(), '1 night');
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
            component = TestUtils.renderIntoDocument(PeriodOfStayInput(props()));
        });

        it('contains the "Overnight stay" link', function () {
            assert.strictEqual(
                $('a.period-of-stay-overnight', component.getDOMNode()).text(),
                'Overnight stay'
            );
        });

        it('assignes the "Overnight stay" link reference', function () {
            assert.strictEqual(
                $('a.period-of-stay-overnight', component.getDOMNode()).attr('data-reactid'),
                component.refs.overnight.getDOMNode().getAttribute('data-reactid')
            );
        });

        it('displays the 0 nights count', function () {
            assert.strictEqual(
                $('span.period-of-stay-nights', component.getDOMNode()).text(), 'Single day');
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
            component = TestUtils.renderIntoDocument(PeriodOfStayInput(props()));
        });

        it('contains the "1-day stay" link', function () {
            assert.strictEqual(
                $('a.period-of-stay-one-day', component.getDOMNode()).text(),
                '1-day stay'
            );
        });

        it('assignes the "1-day" link reference', function () {
            assert.strictEqual(
                $('a.period-of-stay-one-day', component.getDOMNode()).attr('data-reactid'),
                component.refs.oneDay.getDOMNode().getAttribute('data-reactid')
            );
        });

        it('displays the 2 nights count', function () {
            assert.strictEqual(
                $('span.period-of-stay-nights', component.getDOMNode()).text(), '2 nights');
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
                    component = TestUtils.renderIntoDocument(PeriodOfStayInput({
                        model: model,
                        environment: environment,
                        onChange: onChange
                    }));
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
