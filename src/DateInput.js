/* global window */

(function () {
    'use strict';

    var React = require('react'),
        moment = require('moment'),

        isValidDate = function (str) {
            return (
                /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(str) &&
                moment(str, 'YYYY-MM-DD').isValid()
            );
        },

        isPolyfilled = function () {
            return (window && window.$ && window.$.datepicker);
        };

    module.exports = React.createClass({
        render: function () {
            return React.DOM.input({
                type: 'date',
                value: this.valueToRender(),
                onChange: this.handleEdit,
                className: this.classToRender()
            });
        },

        componentDidMount: function () {
            setTimeout(function () {
                if (isPolyfilled()) {
                    window.$(this.getDOMNode()).datepicker({
                        dateFormat: 'yy-mm-dd',
                        firstDay: 1
                    }).on('change', this.handleEdit).on('blur', function () {
                        this.setState({draftValue: null});
                    }.bind(this));
                }
            }.bind(this), 500);
        },

        componentWillUnmount: function () {
            if (isPolyfilled()) {
                window.$(this.getDOMNode()).off();
            }
        },

        valueToRender: function () {
            return (this.isDrafting() ? this.state.draftValue : this.props.value);
        },

        classToRender: function () {
            return (this.isDrafting() ? 'error' : '');
        },

        isDrafting: function () {
            return (this.state && this.state.draftValue !== null);
        },

        handleEdit: function (event) {
            var v = event.target.value;

            if (isValidDate(v)) {
                this.setState({draftValue: null});
                this.props.onChange(v);
            }
            else {
                this.setState({draftValue: v});
            }
        }
    });
}());
