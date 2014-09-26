(function () {
    'use strict';

    var React = require('react'),
        Model = require('./Model');

    module.exports = React.createClass({
        render: function () {
            return React.DOM.div(
                {className: 'period-of-stay-input'}, this.topRow(), this.bottomRow());
        },

        topRow: function () {
            return React.DOM.div(
                {className: 'period-of-stay-top-row', key: 0},
                this.addModeLinks(this.valueInputs())
            );
        },

        bottomRow: function () {
            var m = this.props.model;

            return React.DOM.div(
                {className: 'period-of-stay-bottom-row', key: 1},

                (
                    m.message ?

                    [
                        React.DOM.span({className: 'period-of-stay-message', key: 0}, m.message),

                        React.DOM.a({
                            className: 'got-it',
                            key: 1,
                            ref: 'gotIt',
                            onClick: this.removeMessage
                        }, 'Got it')
                    ] :

                    undefined
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

                React.DOM.label(
                    {className: 'period-of-stay-nights', key: 2},
                    'Nights',

                    React.DOM.input({
                        type: 'number',
                        min: 1,
                        step: 1,
                        max: 27,
                        ref: 'nights',
                        value: m.nightsCount(),
                        onChange: this.handleNightsChange
                    })
                )
            ];
        },

        addModeLinks: function (componentsArray) {
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

        removeMessage: function (event) {
            var m = this.props.model;

            event.preventDefault();

            this.props.onChange(new Model(m.checkInDate, m.checkOutDate));
        },

        handleCheckInChange: function (event) {
            this.props.model.newCheckIn(event.target.value, this.props.environment);
        },

        handleCheckOutChange: function (event) {
            this.props.model.newCheckOut(event.target.value, this.props.environment);
        },

        handleNightsChange: function (event) {
            this.props.model.newNights(event.target.value, this.props.environment);
        }
    });
}());
