import * as assert from 'assert'
import * as api from '../src/index'
import * as browserApi from '../src/browser'

describe('top-level browser API', () => {
    it('is the same as the index API, lacking only the intlMessages', () => {
        assert.strictEqual(Object.keys(browserApi).length, Object.keys(api).length - 1)

        Object.keys(api).filter(x => x !== 'intlMessages').forEach(x => {
            assert.strictEqual((api as any)[x], (browserApi as any)[x])
        })
    })
})
