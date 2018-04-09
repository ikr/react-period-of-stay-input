const React = require('react')
const moment = require('moment')

function isValidDate (str) {
    return (
        /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(str) &&
        moment(str, 'YYYY-MM-DD').isValid()
    )
}

function isPolyfilled () {
    return !!window.Modernizr && !window.Modernizr.inputtypes.date
}

module.exports = React.createClass({
    displayName: 'DateInput',

    propTypes: {
        value: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    render () {
        return React.DOM.input({
            type: 'date',
            value: this.valueToRender(),
            onChange: this.handleEdit,
            className: this.classToRender()
        })
    },

    componentDidMount () {
        setTimeout(function () {
            if (isPolyfilled()) {
                window.$(this.getDOMNode()).datepicker({
                    dateFormat: 'yy-mm-dd',
                    firstDay: 1
                }).on('change', this.handleEdit).on('blur', function () {
                    this.setState({draftValue: null})
                }.bind(this))
            }
        }.bind(this), 500)
    },

    componentWillUnmount () {
        if (isPolyfilled()) {
            window.$(this.getDOMNode()).off()
        }
    },

    valueToRender () {
        return (this.isDrafting() ? this.state.draftValue : this.props.value)
    },

    classToRender () {
        return (this.isDrafting() ? 'form-control error' : 'form-control')
    },

    isDrafting () {
        return (this.state && this.state.draftValue !== null)
    },

    handleEdit (event) {
        var v = event.target.value

        if (isValidDate(v)) {
            this.setState({draftValue: null})
            this.props.onChange(v)
        } else {
            this.setState({draftValue: v})
        }
    }
})
