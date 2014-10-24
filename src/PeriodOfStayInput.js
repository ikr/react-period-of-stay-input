(function () {
    'use strict';

    var React = require('react'),
        DateInput = require('./DateInput'),
        Environment = require('./Environment'),
        Model = require('./Model'),

        nightsText = function (count) {
            switch (count) {
            case 0:
                return 'Single day';

            case 1:
                return '1 night';

            default:
                return count + ' nights';
            }
        };

    module.exports = React.createClass({
        propTypes: {
            environment: React.PropTypes.instanceOf(Environment),
            model: React.PropTypes.instanceOf(Model),
            onChange: React.PropTypes.func
        },

        render: function () {
            return React.DOM.div(
                {className: 'srch-form__form-group form-group--period-of-stay-input'},
                this.valueInputs()
            );
        },

        valueInputs: function () {
            var m = this.props.model;

            return [
                React.DOM.div(
                    {className: 'period-of-stay-check-in', key: 'k0'},

                    React.DOM.label({}, 'Check-in day'),

                    DateInput({
                        ref: 'checkIn',
                        value: m.checkInDate,
                        onChange: this.handleCheckInChange
                    }),

                    React.DOM.i({className:'fa fa-calendar calendar-icon'}, '')

                ),

                React.DOM.div(
                    {className: 'period-of-stay-check-out', key: 'k1'},

                    React.DOM.label({}, 'Check-out day'),

                    DateInput({
                        ref: 'checkOut',
                        value: m.checkOutDate,
                        onChange: this.handleCheckOutChange
                    }),

                    React.DOM.i({className:'fa fa-calendar calendar-icon'}, '')
                ),

                React.DOM.span(
                    {className: 'period-of-stay-nights', key: 'k2'},
                    nightsText(m.nightsCount())
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
