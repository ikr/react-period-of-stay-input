import * as assert from 'assert'
import Model from '../src/Model'
import Environment from '../src/Environment'
import Day from '../src/Day'

function assertValue(model: Model, checkInDate: string, checkOutDate: string) {
    assert.deepEqual(
        { checkInDate: model.checkInDate.toString(), checkOutDate: model.checkOutDate.toString() },
        { checkInDate: checkInDate, checkOutDate: checkOutDate }
    )
}

describe('Model', () => {
    it('can be constructed', () => {
        assertValue(
            new Model(new Day('2018-07-26'), new Day('2018-07-27')), '2018-07-26', '2018-07-27')
    })

    it('throws when check-out is before check-in', () => {
        assert.throws(() => { new Model(new Day('2018-07-26'), new Day('2018-07-25')) }, /before/i)
    })
})

describe('Model::newCheckIn', () => {
    describe('when zero nights aren\'t allowed', () => {
        const m = new Model(new Day('2014-09-24'), new Day('2014-09-30'))
        const e = new Environment(false, new Day('2014-09-24'))

        it('works in identity case', () => {
            assertValue(m.newCheckIn('2014-09-24', e), '2014-09-24', '2014-09-30')
        })

        it('on value after check-out moves the check-out', () => {
            assertValue(m.newCheckIn('2014-10-01', e), '2014-10-01', '2014-10-02')
        })

        it('on check-out value moves the check-out', () => {
            assertValue(m.newCheckIn('2014-09-30', e), '2014-09-30', '2014-10-01')
        })

        it('rejects the change when the value is in the past', () => {
            assertValue(m.newCheckIn('2014-09-01', e), '2014-09-24', '2014-09-30')
        })
    })

    describe('when zero nights are allowed', () => {
        const m = new Model(new Day('2014-09-24'), new Day('2014-09-30'))
        const e = new Environment(true, new Day('2014-09-24'))

        it('allows check-out value', () => {
            assertValue(m.newCheckIn('2014-09-30', e), '2014-09-30', '2014-09-30')
        })

        it('reverts the change if the value is before min checkout', () => {
            assertValue(m.newCheckIn('2014-09-23', e), '2014-09-24', '2014-09-30')
        })
    })

    describe('for longger stays', () => {
        const m = new Model(new Day('2014-09-24'), new Day('2014-09-30'))
        const e = new Environment(false, new Day('2014-08-01'))

        it('allows 27 nights stay', () => {
            assertValue(m.newCheckIn('2014-09-03', e), '2014-09-03', '2014-09-30')
        })

        it('moves the check-out if the stay is 28 nights', () => {
            assertValue(m.newCheckIn('2014-09-02', e), '2014-09-02', '2014-09-03')
        })
    })
})
