import * as React from 'react'
import DatePicker from 'react-datepicker'
import Model from './Model'
import Environment from './Environment'

export default class PeriodOfStayInput extends React.Component<Props> {
    render() {
        const className = 'period-of-stay-input' + (
            this.props.className ? ` ${this.props.className}` : ''
        )

        return (
            <div {...{ className }}>
                <DatePicker onChange={() => 0} />
            </div>
        )
    }
}

export interface Props {
    model: Model,
    environment: Environment,
    className?: string
}
