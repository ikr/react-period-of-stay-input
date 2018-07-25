import * as assert from 'assert'
import intlMessages from '../src/intlMessages'

describe('intlMessages', () => {
    it('is a function', () => {
        assert.strictEqual(typeof intlMessages, 'function')
    })

    describe('react-star-rating-input namespace', function() {
        ['en', 'de', 'zh'].forEach(function(locale) {
            ['period', 'checkInDay', 'checkOutDay'].forEach(function(messageName) {
                it('defines ' + messageName + ' for ' + locale + ' locale', () => {
                    const key = ['react-period-of-stay-input', messageName].join('.')
                    assert(intlMessages()[locale][key].length > 0)
                })
            })
        })
    })
})
