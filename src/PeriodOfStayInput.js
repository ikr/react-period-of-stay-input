(function () {
    'use strict';

    var React = require('react'),
        DateInput = require('./DateInput'),

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
        render: function () {
            return React.DOM.div(
                {className: 'period-of-stay-input'},
                this.valueInputs()
            );
        },

        valueInputs: function () {
            var m = this.props.model;

            return [
                React.DOM.label(
                    {className: 'period-of-stay-check-in', key: 0},
                    'Check-in day',

                    DateInput({
                        ref: 'checkIn',
                        id: this.props.checkInInputId,
                        value: m.checkInDate,
                        onChange: this.handleCheckInChange
                    })
                ),

                React.DOM.label(
                    {className: 'period-of-stay-check-out', key: 1},
                    'Check-out day',

                    DateInput({
                        ref: 'checkOut',
                        id: this.props.checkOutInputId,
                        value: m.checkOutDate,
                        onChange: this.handleCheckOutChange
                    })
                ),

                React.DOM.span(
                    {className: 'period-of-stay-nights', key: 2},
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
