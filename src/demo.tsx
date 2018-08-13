import * as React from 'react'
import * as ReactDOM from 'react-dom'
import insertCss from 'insert-css'
import { IntlProvider, addLocaleData } from 'react-intl'
import de from 'react-intl/locale-data/de'
import 'moment/locale/de-ch'

import {
    css,
    Locale,
    Day,
    ZeroNightsPolicy,
    Environment,
    Model,
    PeriodOfStayInput,
    isInputTypeDateSupported,
    intlMessages
} from './index'

// In order to display localized messages, react-intl needs the locale definitions data, describing
// the number and date formats, and the pluralization/gender rules.
//
addLocaleData(de)

// The Environment describes the context where the period of stay input is used. The Environment
// determines two things: 1) is the same-day check-out allowed? 2) what's the minimal check-in date?
// Normally, the minimal check-in is the “today” or “tomorrow” date. However, the author had an
// exotic requirement of having the minimal check-in being “yesterday”, in order to allow the
// booking of a 1-night stay for late night (after 00:00:00) passengers whose flight was delayed or
// cancelled.
//
const environment = new Environment(ZeroNightsPolicy.ALLOW, new Day('1979-11-16'))

// That function manipulates the DOM, in order to detect the feature, and is therefore slow. You'd
// probably not want to have it called in a render() method.
//
const useInputTypeDate = isInputTypeDateSupported()

class Container extends React.Component<{}, State> {
    constructor(props: any) {
        super(props)

        // onChange, we'll do a state transition from one model value to the other.
        //
        this.state = {
            model: new Model(new Day('1979-11-16'), new Day('1979-11-17'))
        }
    }

    render() {
        return (
            // In a real application all the intlMessages for a given locale, for all the
            // sub-components would probably be pre-compiled on the server side into a single
            // bundle, and placed into a single global var, like `window['my-app-i18n']`.
            //
            <IntlProvider locale='de' messages={intlMessages().de}>
                <PeriodOfStayInput
                    useInputTypeDate={useInputTypeDate}
                    locale={Locale.DE}
                    environment={environment}
                    model={this.state.model}
                    onChange={(model: Model) => { this.setState({ model }) }} />
            </IntlProvider>
        )
    }
}

interface State { model: Model }

// It's a simple utility that inserts the react-datepicker CSS into the HTML document's <head>
//
insertCss(css)

ReactDOM.render(
    <Container />,
    document.getElementById('root')
)
