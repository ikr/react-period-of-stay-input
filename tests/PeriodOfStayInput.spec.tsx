import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount, ReactWrapper } from 'enzyme'
import * as moment from 'moment'
import { spy } from 'sinon'
import Day from '../src/Day'
import Locale from '../src/Locale'
import Environment from '../src/Environment'
import Model from '../src/Model'
import intlMessages from '../src/intlMessages'
import PeriodOfStayInput, { Props } from '../src/PeriodOfStayInput'

describe('PeriodOfStayInput for 1+ nights', () => {
    function props(): Props {
        return {
            className: 'ad-hoc',
            locale: Locale.DE,
            model: new Model(new Day('2014-09-26'), new Day('2014-09-27')),
            environment: new Environment(false, new Day('2014-09-26')),
            onChange: () => undefined
        }
    }

    const wrapper = mount(
        <IntlProvider locale='ru' messages={intlMessages().de}>
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

        it('has the locale prop assigned', () => {
            assert.strictEqual(typeof datePickerWrapper.prop('locale'), 'string')
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

    describe('DatePicker for the check-out date', () => {
        const datePickerWrapper = wrapper.find('DatePicker').at(1)

        it('is present', () => {
            assert(datePickerWrapper.exists())
        })

        it('has the locale prop assigned', () => {
            assert.strictEqual(typeof datePickerWrapper.prop('locale'), 'string')
        })

        it('receives the selected value from the model', () => {
            assert.deepStrictEqual(datePickerWrapper.prop('selected'), moment('2014-09-27'))
        })

        it('has the selectsEnd prop set', () => {
            assert.strictEqual(datePickerWrapper.prop('selectsEnd'), true)
        })

        it('receives the startDate value from the model', () => {
            assert.deepStrictEqual(datePickerWrapper.prop('startDate'), moment('2014-09-26'))
        })

        it('receives the endDate value from the model', () => {
            assert.deepStrictEqual(datePickerWrapper.prop('endDate'), moment('2014-09-27'))
        })
    })

    describe('additional markup and i18n', () => {
        describe('for check-in', () => {
            it('contains the label', () => {
                assert.strictEqual(
                    wrapper.find('.period-of-stay-check-in > label').text(), 'Anreise')
            })

            it('contains the calendar icon', () => {
                assert(wrapper.find('.period-of-stay-check-in > CalendarIcon').exists())
            })
        })

        describe('for check-out', () => {
            it('contains the label', () => {
                assert.strictEqual(
                    wrapper.find('.period-of-stay-check-out > label').text(), 'Abreise')
            })

            it('contains the calendar icon', () => {
                assert(wrapper.find('.period-of-stay-check-out > CalendarIcon').exists())
            })
        })

        it('contains the derived nights value', () => {
            assert.strictEqual(wrapper.find('span.period-of-stay-nights').text(), '1 Nacht')
        })
    })
})

describe('PeriodOfStayInput notification', () => {
    function props(model: Model, onChange: (m: Model) => void): Props {
        return {
            locale: Locale.EN,
            model,
            environment: new Environment(false, new Day('2014-09-26')),
            onChange
        }
    }

    let model
    let onChange
    let wrapper: ReactWrapper

    beforeEach(function() {
        model = new Model(new Day('2014-10-01'), new Day('2014-10-03'))

        spy(model, 'newCheckIn')
        spy(model, 'newCheckOut')

        onChange = spy()

        wrapper = mount(
            <IntlProvider locale='ru' messages={intlMessages().en}>
                <PeriodOfStayInput {...props(model, onChange)} />
            </IntlProvider>
        ).find('PeriodOfStayInput')
    })

    describe('wiring', () => {
        let instance: PeriodOfStayInput

        beforeEach(() => {
            instance = wrapper.instance() as PeriodOfStayInput
        })

        it('is done for the check-in', () => {
            assert.strictEqual(
                wrapper.find('DatePicker').at(0).prop('onChange'),
                instance.handleCheckInChange
            )
        })

        it('is done for the check-out', () => {
            assert.strictEqual(
                wrapper.find('DatePicker').at(1).prop('onChange'),
                instance.handleCheckOutChange
            )
        })
    })
})
