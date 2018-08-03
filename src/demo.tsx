import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import insertCss from 'insert-css'
import { css } from './index'

class Container extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <DatePicker onChange={() => null} />
            </div>
        )
    }
}

insertCss(css)

ReactDOM.render(
    <Container />,
    document.getElementById('root')
)
