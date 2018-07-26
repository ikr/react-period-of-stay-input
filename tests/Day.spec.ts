import * as assert from 'assert'
import Day from '../src/Day'

describe('Day', () => {
    it('stores the vlue assigned on construction', () => {
        const d = new Day('2018-07-26')
        assert.strictEqual(d.toString(), '2018-07-26')
    })

    it('throws on a date literal without separatorts', () => {
        assert.throws(() => { new Day('20180231') }, /valid/i)
    })

    it('throws when a 31st of February is passed in', () => {
        assert.throws(() => { new Day('2018-02-31') }, /valid/i)
    })
})
