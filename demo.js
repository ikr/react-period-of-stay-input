(function () {
    'use strict';

    var React = require('react'),
        PeriodOfStayInput = require('./index'),

        Container = React.createClass({
            render: function () {
                return PeriodOfStayInput({});
            }
        });

    React.renderComponent(Container(), global.document.body);
}());
