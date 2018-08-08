import * as assert from 'assert'
import * as api from '../src/index'
import css from '../src/css'
import Model from '../src/Model'
import Environment from '../src/Environment'
import PeriodOfStayInput from '../src/PeriodOfStayInput'

describe('top-level API', () => {
    it('exposes the css submodule', () => {
        assert.strictEqual(api.css, css)
    })

    it('exposes the main React component', () => {
        assert.strictEqual(api.PeriodOfStayInput, PeriodOfStayInput)
    })

    it('exposes the Model', () => {
        assert.strictEqual(api.Model, Model)
    })

    it('exposes the Environment', () => {
        assert.strictEqual(api.Environment, Environment)
    })
})
