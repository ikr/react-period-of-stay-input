import * as assert from 'assert'
import Locale from '../src/Locale'

describe('Locale enum', () => {
    it('contains EN', () => {
        assert.strictEqual(Locale.EN, 'en')
    })

    it('contains DE', () => {
        assert.strictEqual(Locale.DE, 'de')
    })

    it('contains ZH', () => {
        assert.strictEqual(Locale.ZH, 'zh')
    })
})
