describe.only('Model', function () {
    'use strict';

    var assert = require('assert'),
        Model = require('../src/Model'),
        Environment = require('../src/Environment'),

        assertValue = function (model, checkInDate, checkOutDate) {
            assert.deepEqual(
                {checkInDate: model.checkInDate, checkOutDate: model.checkOutDate},
                {checkInDate: checkInDate, checkOutDate: checkOutDate}
            );
        };

    it('is a constructor', function () {
        var m = new Model('2014-09-24', '2014-09-25');
        assert.strictEqual(m.checkInDate, '2014-09-24');
        assert.strictEqual(m.checkOutDate, '2014-09-25');
    });

    describe('.prototype', function () {
        describe('.newCheckIn', function () {
            describe('when zero nights aren\'t allowed', function () {
                var m = new Model('2014-09-24', '2014-09-30'),
                    e = new Environment(false, '2014-09-24');

                it('on empty value refuses the change', function () {
                    assertValue(m.newCheckIn('', e), '2014-09-24', '2014-09-30');
                });

                it('works in identity case', function () {
                    assertValue(m.newCheckIn('2014-09-24', e), '2014-09-24', '2014-09-30');
                });

                it('on value after check-out moves the check-out', function () {
                    assertValue(m.newCheckIn('2014-10-01', e), '2014-10-01', '2014-10-02');
                });

                it('on check-out value moves the check-out', function () {
                    assertValue(m.newCheckIn('2014-09-30', e), '2014-09-30', '2014-10-01');
                });
            });

            describe('when zero nights are allowed', function () {
                var m = new Model('2014-09-24', '2014-09-30'),
                    e = new Environment(true, '2014-09-24');

                it('allows check-out value', function () {
                    assertValue(m.newCheckIn('2014-09-30', e), '2014-09-30', '2014-09-30');
                });

                it('reverts the change if the value is before today', function () {
                    assertValue(m.newCheckIn('2014-09-23', e), '2014-09-24', '2014-09-30');
                });
            });

            describe('for longger stays', function () {
                var m = new Model('2014-09-24', '2014-09-30'),
                    e = new Environment(false, '2014-08-01');

                it('allows 27 nights stay', function () {
                    assertValue(m.newCheckIn('2014-09-03', e), '2014-09-03', '2014-09-30');
                });

                it('moves the check-out if the stay is 28 nights', function () {
                    assertValue(m.newCheckIn('2014-09-02', e), '2014-09-02', '2014-09-03');
                });
            });
        });

        describe('.newCheckOut', function () {
            describe('when zero nights aren\'t allowed', function () {
                var m = new Model('2014-09-24', '2014-09-30'),
                    e = new Environment(false, '2014-09-20');

                it('yeilds a new check-out day in a valid case', function () {
                    assertValue(m.newCheckOut('2014-09-25', e), '2014-09-24', '2014-09-25');
                });

                it('on invalid input ignores the suggested change', function () {
                    assertValue(m.newCheckOut('2015-02-30', e), '2014-09-24', '2014-09-30');
                });

                it('on value too far in the future moves the check-in', function () {
                    assertValue(m.newCheckOut('2016-09-01', e), '2016-08-31', '2016-09-01');
                });

                it('on value before the check-in moves the check-in', function () {
                    assertValue(m.newCheckOut('2014-09-23', e), '2014-09-22', '2014-09-23');
                });

                it('on check-in value moves the check-in', function () {
                    assertValue(m.newCheckOut('2014-09-24', e), '2014-09-23', '2014-09-24');
                });
            });

            describe('when zero nights are allowed', function () {
                var m = new Model('2014-09-24', '2014-09-30'),
                    e = new Environment(true, '2014-09-24');

                it('allows the check-in value', function () {
                    assertValue(m.newCheckOut('2014-09-24', e), '2014-09-24', '2014-09-24');
                });
            });
        });

        describe('.nightsCount', function () {
            it('returns the difference between the check-in and check-out', function () {
                var m = new Model('2014-09-24', '2014-09-30');
                assert.strictEqual(m.nightsCount(), 6);
            });
        });
    });
});
