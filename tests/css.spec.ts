import * as assert from 'assert'
import css from '../src/css'

describe('css', () => {
    it('is a string', () => {
        assert.strictEqual(typeof css, 'string')
    })

    it('is over 10K unicode code units long', () => {
        assert(
            css.length > 10_000,
            `Actual CSS length is ${css.length}, while more than 10K expected.`
        )
    })
})
