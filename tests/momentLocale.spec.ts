import * as assert from 'assert'
import Locale from '../src/Locale'
import momentLocale from '../src/momentLocale'

describe('momentLocale', () => {
    it('is a function', () => {
        assert.strictEqual(typeof momentLocale, 'function')
    });

    [[Locale.EN, 'en-ie'], [Locale.DE, 'de-ch'], [Locale.ZH, 'zh-cn']].forEach(([ownL, momL]) => {
        it(`is ${momL} on ${ownL}`, () => {
            assert.strictEqual(momentLocale(ownL), momL)
        })
    })
})