import * as assert from 'assert'
import Model from '../src/Model'
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
