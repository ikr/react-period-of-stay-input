(function () {
    'use strict';

    var React = require('react'),
        DateInput = require('./DateInput'),
        Environment = require('./Environment'),
        Model = require('./Model'),
        ReactIntl = require('react-intl'),
        FormattedMessage = ReactIntl.FormattedMessage,
        IntlMixin = ReactIntl.IntlMixin,

        nightsText = function (count) {
            switch (count) {
            case 0:
                return FormattedMessage({message: this.getIntlMessage('period.singleDay')});

            case 1:
                return FormattedMessage({message: this.getIntlMessage('period.oneNight')});

            default:
                return FormattedMessage({message: this.getIntlMessage('period.xNights'), count: count});
            }
        },
        enMessages = function () {
            return {
                period: {
                    singleDay: 'Single day',
                    oneNight: '1 night',
                    xNights: '{count} nights'
                },
                checkInDay: 'Check-in day',
                checkOutDay: 'Check-out day'
            };
        },

        PeriodOfStayInput;

    PeriodOfStayInput = React.createClass({
        mixins: [IntlMixin],
        propTypes: {
            environment: React.PropTypes.instanceOf(Environment),
            model: React.PropTypes.instanceOf(Model),
            onChange: React.PropTypes.func
        },

        render: function () {
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

                    React.DOM.label({}, FormattedMessage({message: this.getIntlMessage('checkInDay')})),

                    React.createElement(DateInput, {
                        ref: 'checkIn',
                        value: m.checkInDate,
                        onChange: this.handleCheckInChange
                    }),

                    React.DOM.i({className:'fa fa-calendar calendar-icon'}, '')

                ),

                React.DOM.div(
                    {className: 'period-of-stay-check-out', key: 'k1'},

                    React.DOM.label({}, FormattedMessage({message: this.getIntlMessage('checkOutDay')})),

                    React.createElement(DateInput, {
                        ref: 'checkOut',
                        value: m.checkOutDate,
                        onChange: this.handleCheckOutChange
                    }),

                    React.DOM.i({className:'fa fa-calendar calendar-icon'}, '')
                ),

                React.DOM.span(
                    {className: 'period-of-stay-nights', key: 'k2'},
                    nightsText.call(this, m.nightsCount())
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

    module.exports = React.createClass({
        render: function () {
            var props = this.props;

            props.lang = this.props.lang || 'en';
            props.messages = this.props.messages || enMessages();

            return React.createElement(PeriodOfStayInput, props);
        }
    });
}());
