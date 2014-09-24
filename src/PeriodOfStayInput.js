(function () {
    'use strict';

    var React = require('react');

    module.exports = React.createClass({
        render: function () {
            return React.DOM.div(
                {className: 'period-of-stay-input'},

                React.DOM.label(
                    {className: 'period-of-stay-check-in', key: 0},
                    'Check-in day',
                    React.DOM.input({type: 'date', ref: 'checkIn'})
                ),

                React.DOM.label(
                    {className: 'period-of-stay-check-out', key: 1},
                    'Check-out day',
                    React.DOM.input({type: 'date', ref: 'checkOut'})
                ),

                React.DOM.label(
                    {className: 'period-of-stay-nights', key: 2},
                    'Nights',
                    React.DOM.input({type: 'number', min: 1, step: 1, max: 27, ref: 'nights'})
                )
            );
        }
    });
}());
