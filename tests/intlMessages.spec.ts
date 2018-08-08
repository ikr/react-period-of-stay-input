import * as assert from 'assert'
import Locale from '../src/Locale'
import intlMessages from '../src/intlMessages'

describe('intlMessages', () => {
    it('is a function', () => {
        assert.strictEqual(typeof intlMessages, 'function')
    })

    describe('react-star-rating-input namespace', () => {
        [Locale.EN, Locale.DE, Locale.ZH].forEach(locale => {
            ['period', 'checkInDay', 'checkOutDay'].forEach(messageName => {
                const key = ['react-period-of-stay-input', messageName].join('.')

                it(`defines ${key} for locale ${locale}`, () => {
                    assert(intlMessages()[locale][key].length > 0)
                })
            })
        })
    })
})
