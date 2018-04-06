describe('index (public API)', function () {
    const assert = require('assert')
    const api = require('../index')

    it('provides the React class', function () {
        assert.strictEqual(typeof api.Klass, 'function')
    })

    it('provides the model class', function () {
        assert.strictEqual(typeof api.Model, 'function')
    })

    it('provides the environment class', function () {
        assert.strictEqual(typeof api.Environment, 'function')
    })

    it('exports the intlMessages', function () {
        assert.strictEqual(typeof api.intlMessages, 'function')
    })
})
