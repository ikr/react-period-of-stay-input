import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Container extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root')
)
