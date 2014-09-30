/* global $ */

(function () {
    'use strict';

    $(function () {
        $.datepicker.setDefaults({dateFormat: 'yy-mm-dd'});
        $('#check-in').datepicker();
        $('#check-out').datepicker();
    });
}());
