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

                React.DOM.div(
                    {className: 'period-of-stay-top-row', key: 0},
                    this.addModeLink(this.valueInputs())
                )
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

        addModeLink: function (componentsArray) {
            var m = this.props.model,
                e = this.props.environment,
                result = componentsArray.slice();

            if (e.zeroNightsAllowed) {
                if (m.nightsCount() === 0) {
                    result.push(
                        React.DOM.a({
                            className: 'period-of-stay-overnight',
                            href: '',
                            key: 3,
                            ref: 'overnight'
                        }, 'Overnight stay')
                    );
                }
                else {
                    result.push(
                        React.DOM.a(
                            {className: 'period-of-stay-one-day', href: '', key: 3, ref: 'oneDay'},
                            '1-day stay'
                        )
                    );
                }
            }

            return result;
        },

        handleCheckInChange: function (event) {
            this.props.onChange(
                this.props.model.newCheckIn(event.target.value, this.props.environment));
        },

        handleCheckOutChange: function (event) {
            this.props.onChange(
                this.props.model.newCheckOut(event.target.value, this.props.environment));
        }
    });
}());
