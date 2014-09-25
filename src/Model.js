(function () {
    'use strict';

    var moment = require('moment'),

        Model = function (checkInDate, checkOutDate, message) {
            this.checkInDate = checkInDate;
            this.checkOutDate = checkOutDate;
            this.message = message;
        },

        invalidity = function (mCheckIn, mCheckOut, environment) {
            var mToday = moment(environment.today, 'YYYY-MM-DD');

            if (mCheckOut.isBefore(mCheckIn)) {
                return 'Check-out day can\'t be before the check-in';
            }

            if (!environment.zeroNightsAllowed && mCheckIn.isSame(mCheckOut, 'day')) {
                return 'Checking out on the check-in day isn\'t allowed';
            }

            if (mCheckIn.isBefore(mToday)) {
                return 'Can\'t check in earlier than today';
            }

            if (mCheckOut.diff(mCheckIn, 'days') > 27) {
                return 'Period of stay can\'t exceed 27 nights';
            }
        };

    Model.prototype.newCheckIn = function (checkInDate, environment) {
        var mCheckOut = moment(this.checkOutDate, 'YYYY-MM-DD'),
            mCheckIn,
            message;

        if (moment(checkInDate, 'YYYY-MM-DD').isValid()) {
            mCheckIn = moment(checkInDate, 'YYYY-MM-DD');
            message = invalidity(mCheckIn, mCheckOut, environment);

            if (!message) {
                return new Model(checkInDate, this.checkOutDate);
            }
        }
        else {
            message = 'Invalid check-in day replaced';
        }

        return new Model(
            mCheckOut.subtract(1, 'days').format('YYYY-MM-DD'),
            this.checkOutDate,
            message
        );
    };

    module.exports = Model;
}());
