import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import insertCss from 'insert-css'
import { IntlProvider } from 'react-intl'
import 'moment/locale/de-ch'
import intlMessages from './intlMessages'
import { css, Locale, Day, Environment, Model, PeriodOfStayInput } from './index'

const environment = new Environment(true, new Day('1979-11-16'))

class Container extends React.Component<{}, State> {
    constructor(props: any) {
        super(props)

        this.state = {
            model: new Model(new Day('1979-11-16'), new Day('1979-11-17'))
        }
    }

    render() {
        return (
            <IntlProvider locale='de' messages={intlMessages().de}>
                <PeriodOfStayInput
                    locale={Locale.DE}
                    environment={environment}
                    model={this.state.model}
                    onChange={model => { this.setState({ model }) }} />
            </IntlProvider>
        )
    }
}

interface State { model: Model }

insertCss(css)

ReactDOM.render(
    <Container />,
    document.getElementById('root')
)
