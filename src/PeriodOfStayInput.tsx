import * as React from 'react'
import DatePicker from 'react-datepicker'
import { FormattedMessage } from 'react-intl'
import Locale from './Locale'
import momentLocale from './momentLocale'
import Model from './Model'
import Environment from './Environment'

function CalendarIcon() {
    return (
        <i className='fa fa-calendar calendar-icon' />
    )
}

export default class PeriodOfStayInput extends React.Component<Props> {
    render() {
        const className = 'period-of-stay-input' + (
            this.props.className ? ` ${this.props.className}` : ''
        )

        const locale = momentLocale(this.props.locale)
        const mCheckIn = this.props.model.checkInDate.toMoment()
        const mCheckOut = this.props.model.checkOutDate.toMoment()

        return (
            <div {...{ className }}>
                <div className='period-of-stay-check-in'>
                    <label>
                        <FormattedMessage id='react-period-of-stay-input.checkInDay' />
                    </label>

                    <DatePicker
                        locale={locale}
                        selected={mCheckIn}
                        selectsStart
                        startDate={mCheckIn}
                        endDate={mCheckOut}
                        onChange={() => 0} />

                    <CalendarIcon />
                </div>

                <div className='period-of-stay-check-out'>
                    <label>
                        <FormattedMessage id='react-period-of-stay-input.checkOutDay' />
                    </label>

                    <DatePicker
                        locale={locale}
                        selected={mCheckOut}
                        selectsEnd
                        startDate={mCheckIn}
                        endDate={mCheckOut}
                        onChange={() => 0} />

                    <CalendarIcon />
                </div>
            </div>
        )
    }
}

export interface Props {
    className?: string,
    locale: Locale,
    model: Model,
    environment: Environment
}
