describe('public browser API', function () {
    const assert = require('assert')
    const api = require('../index')
    const browserApi = require('../browser')

    describe('just as the full API', function () {
        it('provides the React class', function () {
            assert.strictEqual(browserApi.Klass, api.Klass)
        })

        it('provides the model class', function () {
            assert.strictEqual(browserApi.Model, api.Model)
        })

        it('provides the environment class', function () {
            assert.strictEqual(browserApi.Environment, api.Environment)
        })
    })

    it('exports no intlMessages', function () {
        assert.strictEqual(typeof browserApi.intlMessages, 'undefined')
    })
})
