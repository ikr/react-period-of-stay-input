import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import insertCss from 'insert-css'
import * as moment from 'moment'
import 'moment/locale/de-ch'
import { css } from './index'

class Container extends React.Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = { unixSeconds: moment.utc().unix() }
    }

    render() {
        return (
            <div>
                <DatePicker
                    locale='de-ch'
                    selected={moment.unix(this.state.unixSeconds).utc()}
                    onChange={() => null} />
            </div>
        )
    }
}

interface State {
    unixSeconds: number
}

insertCss(css)

ReactDOM.render(
    <Container />,
    document.getElementById('root')
)
