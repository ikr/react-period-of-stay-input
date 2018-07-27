import * as assert from 'assert'
import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'
import Day from '../src/Day'
import Environment from '../src/Environment'
import Model from '../src/Model'
import intlMessages from '../src/intlMessages'
import PeriodOfStayInput, { Props } from '../src/PeriodOfStayInput'

function props(): Props {
    return {
        model: new Model(new Day('2014-09-26'), new Day('2014-09-27')),
        environment: new Environment(false, new Day('2014-09-26')),
        className: 'ad-hoc'
    }
}

describe('PeriodOfStayInput', () => {
    const wrapper = mount(
        <IntlProvider locale='ru' messages={intlMessages().en}>
            <PeriodOfStayInput {...props()} />
        </IntlProvider>
    ).find('Dropdown')

    it.skip('fails for now', () => {
        assert.fail('!')
    })
})
