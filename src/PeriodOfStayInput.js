(function () {
    'use strict';

    var React = require('react');

    module.exports = React.createClass({
        render: function () {
            return React.DOM.div({className: 'period-of-stay-input'}, this.topRow());
        },

        topRow: function () {
            var m = this.props.model,
                e = this.props.environment,

                result = [
                    React.DOM.label(
                        {className: 'period-of-stay-check-in', key: 0},
                        'Check-in day',
                        React.DOM.input({type: 'date', ref: 'checkIn', value: m.checkInDate})
                    ),

                    React.DOM.label(
                        {className: 'period-of-stay-check-out', key: 1},
                        'Check-out day',
                        React.DOM.input({type: 'date', ref: 'checkOut', value: m.checkOutDate})
                    ),

                    React.DOM.label(
                        {className: 'period-of-stay-nights', key: 2},
                        'Nights',

                        React.DOM.input({
                            type: 'number',
                            min: 1,
                            step: 1,
                            max: 27,
                            ref: 'nights',
                            value: m.nightsCount()
                        })
                    )
                ];

            if (e.zeroNightsAllowed) {
                if (m.nightsCount() === 0) {
                    result.push(
                        React.DOM.a(
                            {className: 'period-of-stay-overnight', href: '', key: 3},
                            'Overnight stay'
                        )
                    );
                }
                else {
                    result.push(
                        React.DOM.a(
                            {className: 'period-of-stay-one-day', href: '', key: 3},
                            '1-day stay'
                        )
                    );
                }
            }

            return result;
        }
    });
}());
