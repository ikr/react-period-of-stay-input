import * as assert from 'assert'
import Day from '../src/Day'
import Environment from '../src/Environment'

describe('Environment', () => {
    it('is just a record constructor', () => {
        const env = new Environment(true, new Day('2014-09-24'))
        assert.strictEqual(env.zeroNightsAllowed, true)
        assert.strictEqual(env.minCheckInDate.toString(), '2014-09-24')
    })
})
