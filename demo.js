(function () {
    'use strict';

    var React = require('react'),
        moment = require('moment'),
        api = require('./index'),

        Container = React.createClass({
            render: function () {
                return api.Klass({
                    model: new api.Model(
                        moment().format('YYYY-MM-DD'),
                        moment().add(1, 'days').format('YYYY-MM-DD')
                    ),

                    environment: new api.Environment(true, moment().format('YYYY-MM-DD'))
                });
            }
        });

    React.renderComponent(Container(), global.document.body);
}());
