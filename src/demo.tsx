import * as React from 'react'
import * as ReactDOM from 'react-dom'
import insertCss from 'insert-css'
import { IntlProvider, addLocaleData } from 'react-intl'
import de from 'react-intl/locale-data/de'
import 'moment/locale/de-ch'
import intlMessages from './intlMessages'

import {
    css,
    Locale,
    Day,
    Environment,
    Model,
    PeriodOfStayInput,
    isInputTypeDateSupported
} from './index'

addLocaleData(de)
const environment = new Environment(true, new Day('1979-11-16'))

// That function manipulates the DOM, in order to detect the feature, and is therefore slow. You'd
// probably not want to have it called in a render() method.
//
const useInputTypeDate = isInputTypeDateSupported()

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
                    useInputTypeDate={useInputTypeDate}
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
