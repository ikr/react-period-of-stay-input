import * as React from 'react'
import DatePicker from 'react-datepicker'
import Locale from './Locale'
import momentLocale from './momentLocale'
import Model from './Model'
import Environment from './Environment'

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
                <DatePicker
                    locale={locale}
                    selected={mCheckIn}
                    selectsStart
                    startDate={mCheckIn}
                    endDate={mCheckOut}
                    onChange={() => 0} />

                <DatePicker
                    locale={locale}
                    selected={mCheckOut}
                    selectsEnd
                    startDate={mCheckIn}
                    endDate={mCheckOut}
                    onChange={() => 0} />
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
