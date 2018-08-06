import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import * as moment from 'moment'
import Day from '../src/Day'
import Environment from '../src/Environment'
import Model from '../src/Model'
import intlMessages from '../src/intlMessages'
import PeriodOfStayInput, { Props } from '../src/PeriodOfStayInput'

describe('PeriodOfStayInput for 1+ nights', () => {
    function props(): Props {
        return {
            model: new Model(new Day('2014-09-26'), new Day('2014-09-27')),
            environment: new Environment(false, new Day('2014-09-26')),
            className: 'ad-hoc'
        }
    }

    const wrapper = mount(
        <IntlProvider locale='ru' messages={intlMessages().en}>
            <PeriodOfStayInput {...props()} />
        </IntlProvider>
    ).find('PeriodOfStayInput')

    describe('top-level element', () => {
        const divWrapper = wrapper.childAt(0)

        it('is a div', () => {
            assert.strictEqual(divWrapper.type(), 'div')
        })

        it('has the static class assigned', () => {
            assert(divWrapper.hasClass('period-of-stay-input'))
        })

        it('has the configurable class assigned', () => {
            assert(divWrapper.hasClass('ad-hoc'))
        })
    })

    describe('DatePicker for the check-in date', () => {
        const datePickerWrapper = wrapper.find('DatePicker').at(0)

        it('is present', () => {
            assert(datePickerWrapper.exists())
        })

        it('has the locale-bound date format', () => {
            assert.strictEqual(datePickerWrapper.prop('dateFormat'), 'L')
        })

        it('receives the selected value from the model', () => {
            assert.deepStrictEqual(datePickerWrapper.prop('selected'), moment('2014-09-26'))
        })

        it('has the selectsStart prop set', () => {
            assert.strictEqual(datePickerWrapper.prop('selectsStart'), true)
        })

        it('receives the startDate value from the model', () => {
            assert.deepStrictEqual(datePickerWrapper.prop('startDate'), moment('2014-09-26'))
        })

        it('receives the endDate value from the model', () => {
            assert.deepStrictEqual(datePickerWrapper.prop('endDate'), moment('2014-09-27'))
        })
    })
})
