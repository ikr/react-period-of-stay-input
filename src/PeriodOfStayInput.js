(function () {
    'use strict';

    var React = require('react'),
        DateInput = require('./DateInput'),
        Environment = require('./Environment'),
        Model = require('./Model'),
        ReactIntl = require('react-intl'),
        FormattedMessage = ReactIntl.FormattedMessage,
        IntlMixin = ReactIntl.IntlMixin,

        enMessages = function () {
            return {
                'react-period-of-stay-input': {
                    period: '{count, plural, =0 {Single day} =1 {1 night} other {# nights}}',
                    checkInDay: 'Check-in day',
                    checkOutDay: 'Check-out day'
                }
            };
        };

    module.exports = React.createClass({
        mixins: [IntlMixin],
        propTypes: {
            environment: React.PropTypes.instanceOf(Environment),
            model: React.PropTypes.instanceOf(Model),
            onChange: React.PropTypes.func
        },

        render: function () {
            this.props.messages = this.props.messages || enMessages();

            return React.DOM.div(
                {className: this.props.className + ' period-of-stay-input'},
                this.valueInputs()
            );
        },

        valueInputs: function () {
            var m = this.props.model;

            return [
                React.DOM.div(
                    {className: 'period-of-stay-check-in', key: 'k0'},

                    React.DOM.label({}, React.createElement(
                        FormattedMessage,
                        {message: this.getIntlMessage('react-period-of-stay-input.checkInDay')}
                    )),

                    React.createElement(DateInput, {
                        ref: 'checkIn',
                        value: m.checkInDate,
                        onChange: this.handleCheckInChange
                    }),

                    React.DOM.i({className:'fa fa-calendar calendar-icon'}, '')

                ),

                React.DOM.div(
                    {className: 'period-of-stay-check-out', key: 'k1'},

                    React.DOM.label({}, React.createElement(
                        FormattedMessage,
                        {message: this.getIntlMessage('react-period-of-stay-input.checkOutDay')}
                    )),

                    React.createElement(DateInput, {
                        ref: 'checkOut',
                        value: m.checkOutDate,
                        onChange: this.handleCheckOutChange
                    }),

                    React.DOM.i({className:'fa fa-calendar calendar-icon'}, '')
                ),

                React.DOM.span(
                    {className: 'period-of-stay-nights', key: 'k2'},
                    React.createElement(
                        FormattedMessage,
                        {message: this.getIntlMessage('react-period-of-stay-input.period'), count: m.nightsCount()}
                    )
                )
            ];
        },

        handleCheckInChange: function (value) {
            this.props.onChange(this.props.model.newCheckIn(value, this.props.environment));
        },

        handleCheckOutChange: function (value) {
            this.props.onChange(this.props.model.newCheckOut(value, this.props.environment));
        }
    });
}());
