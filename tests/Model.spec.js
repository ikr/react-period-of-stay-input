describe('Model', function () {
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
            var m = new Model('2014-09-24', '2014-09-30'),
                e = new Environment(false, '2014-09-24');

            it('on empty value yields the day before the check-out', function () {
                assertValue(m.newCheckIn('', e), '2014-09-29', '2014-09-30');
            });

            it('propagates identity', function () {
                assertValue(m.newCheckIn('2014-09-24', e), '2014-09-24', '2014-09-30');
            });

            it('on value after check-out yields the day before the check out', function () {
                assertValue(m.newCheckIn('2014-10-01', e), '2014-09-29', '2014-09-30');
            });

            it('on check-out value yields the day before the check out', function () {
                assertValue(m.newCheckIn('2014-09-30', e), '2014-09-29', '2014-09-30');
            });

            it('allows check-out value when zero nights are allowed', function () {
                assertValue(
                    m.newCheckIn('2014-09-30', new Environment(true, '2014-09-24')),
                    '2014-09-30',
                    '2014-09-30'
                );
            });

            it('yields the day before check-out if the value is before today', function () {
                assertValue(m.newCheckIn('2014-09-23', e), '2014-09-29', '2014-09-30');
            });

            it('allows 27 nights stay', function () {
                assertValue(
                    m.newCheckIn('2014-09-03', new Environment(false, '2014-08-01')),
                    '2014-09-03',
                    '2014-09-30'
                );
            });

            it('yields the day before check-out if the stay is 28 nights', function () {
                assertValue(
                    m.newCheckIn('2014-09-02', new Environment(false, '2014-08-01')),
                    '2014-09-29',
                    '2014-09-30'
                );
            });
        });
    });
});
