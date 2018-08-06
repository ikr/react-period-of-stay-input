import * as React from 'react'
import DatePicker from 'react-datepicker'
import Model from './Model'
import Environment from './Environment'

export default class PeriodOfStayInput extends React.Component<Props> {
    render() {
        const className = 'period-of-stay-input' + (
            this.props.className ? ` ${this.props.className}` : ''
        )

        const mCheckIn = this.props.model.checkInDate.toMoment()
        const mCheckOut = this.props.model.checkOutDate.toMoment()

        return (
            <div {...{ className }}>
                <DatePicker
                    selected={mCheckIn}
                    selectsStart
                    startDate={mCheckIn}
                    endDate={mCheckOut}
                    onChange={() => 0} />

                <DatePicker
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
    model: Model,
    environment: Environment,
    className?: string
}
