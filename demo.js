(function () {
    'use strict';

    var React = require('react'),
        IntlMixin = require('react-intl').IntlMixin,
        moment = require('moment'),
        api = require('./index'),
        intlMessages = require('./src/intlMessages'),

        Container = React.createClass({
            mixins: [IntlMixin],

            render: function () {
                return React.createElement(api.Klass, {
                    model: this.state.model,
                    environment: new api.Environment(true, moment().format('YYYY-MM-DD')),

                    onChange: function (model) {
                        this.setState({model: model});
                    }.bind(this)
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

    /* eslint react/no-deprecated:0 */
    React.render(
        React.createElement(
            Container,
            {messages: intlMessages().en}
        ),
        global.document.body
    );
}());
