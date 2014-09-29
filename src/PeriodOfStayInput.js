(function () {
    'use strict';

    var React = require('react'),

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

                    React.DOM.input({
                        type: 'date',
                        ref: 'checkIn',
                        value: m.checkInDate,
                        onChange: this.handleCheckInChange
                    })
                ),

                React.DOM.label(
                    {className: 'period-of-stay-check-out', key: 1},
                    'Check-out day',

                    React.DOM.input({
                        type: 'date',
                        ref: 'checkOut',
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

        handleCheckInChange: function (event) {
            var m = this.props.model.newCheckIn(event.target.value, this.props.environment);

            if (this.props.model.isSame(m)) {
                return;
            }

            this.props.onChange(m);
        },

        handleCheckOutChange: function (event) {
            var m = this.props.model.newCheckOut(event.target.value, this.props.environment);

            if (this.props.model.isSame(m)) {
                return;
            }

            this.props.onChange(m);
        }
    });
}());
