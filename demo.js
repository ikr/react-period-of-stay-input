const React = require('react')
const IntlMixin = require('react-intl').IntlMixin
const moment = require('moment')
const api = require('./index')
const intlMessages = require('./src/intlMessages')

const Container = React.createClass({
    mixins: [IntlMixin],
    displayName: 'DemoContainer',

    render () {
        return React.createElement(api.Klass, {
            model: this.state.model,
            environment: new api.Environment(true, moment().format('YYYY-MM-DD')),

            onChange: function (model) {
                this.setState({model: model})
            }.bind(this)
        })
    },

    getInitialState () {
        return {
            model: new api.Model(
                moment().format('YYYY-MM-DD'),
                moment().add(1, 'days').format('YYYY-MM-DD')
            )
        }
    }
})

React.render(
    React.createElement(
        Container,
        {messages: intlMessages().en}
    ),
    global.document.body
)
