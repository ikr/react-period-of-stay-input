(function () {
    'use strict';

    var React = require('react'),
        moment = require('moment'),
        api = require('./index'),

        Container = React.createClass({
            render: function () {
                return React.createElement(api.Klass, {
                    model: this.state.model,
                    environment: new api.Environment(true, moment().format('YYYY-MM-DD')),

                    onChange: function (model) {
                        this.setState({model: model});
                    }.bind(this),
                    lang: 'ru',
                    messages: {
                        period: {
                            singleDay: 'Один день',
                            oneNight: '1 ночь',
                            xNights: '{count} ночей'
                        },
                        checkInDay: 'День заселения',
                        checkOutDay: 'День выселения'
                    }
                });
            },

            getInitialState: function () {
                return {
                    model: new api.Model(
                        moment().format('YYYY-MM-DD'),
                        moment().add(1, 'days').format('YYYY-MM-DD')
                    )
                };
            }
        });

    React.render(React.createElement(Container), global.document.body);
}());
