import * as assert from 'assert'
import * as api from '../src/index'
import css from '../src/css'

describe('top-level API', () => {
    it('exposes the css submodule', () => {
        assert.strictEqual(api.css, css)
    })
})
