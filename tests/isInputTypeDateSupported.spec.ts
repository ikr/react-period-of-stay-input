import * as assert from 'assert'
import isInputTypeDateSupported from '../src/isInputTypeDateSupported'

describe('isInputTypeDateSupported', () => {
    it('is a function', () => {
        assert.strictEqual(typeof isInputTypeDateSupported, 'function')
    })

    it('does not explode', () => {
        assert(isInputTypeDateSupported() || !isInputTypeDateSupported())
    })
})
