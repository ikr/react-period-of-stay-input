import * as assert from 'assert'
import Day from '../src/Day'
import ZeroNightsPolicy from '../src/ZeroNightsPolicy'
import Environment from '../src/Environment'

describe('Environment', () => {
    it('is kind of a record constructor', () => {
        const env = new Environment(ZeroNightsPolicy.ALLOW, new Day('2014-09-24'))
        assert.strictEqual(env.zeroNightsAllowed, true)
        assert.strictEqual(env.minCheckInDate.toString(), '2014-09-24')
    })
})
