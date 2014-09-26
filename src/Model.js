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

    if (!Number.isInteger) {
        Number.isInteger = function isInteger (nVal) {
            return (
                typeof nVal === 'number' &&
                isFinite(nVal) &&
                nVal > -9007199254740992 &&
                nVal < 9007199254740992 &&
                Math.floor(nVal) === nVal
            );
        };
    }

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

    Model.prototype.newCheckOut = function (checkOutDate, environment) {
        var mCheckIn = moment(this.checkInDate, 'YYYY-MM-DD'),
            mCheckOut,
            message;

        if (moment(checkOutDate, 'YYYY-MM-DD').isValid()) {
            mCheckOut = moment(checkOutDate, 'YYYY-MM-DD');
            message = invalidity(mCheckIn, mCheckOut, environment);

            if (!message) {
                return new Model(this.checkInDate, checkOutDate);
            }
        }
        else {
            message = 'Invalid check-out day replaced';
        }

        return new Model(
            this.checkInDate,
            mCheckIn.add(1, 'days').format('YYYY-MM-DD'),
            message
        );
    };

    Model.prototype.newNights = function (count, environment) {
        var mCheckIn,
            mCheckOut,
            message;

        if (Number.isInteger(count) && (Math.abs(count) < 10000)) {
            mCheckIn = moment(this.checkInDate, 'YYYY-MM-DD');
            mCheckOut = moment(this.checkInDate, 'YYYY-MM-DD').add(count, 'days');
            message = invalidity(mCheckIn, mCheckOut, environment);

            if (!message) {
                return new Model(this.checkInDate, mCheckOut.format('YYYY-MM-DD'));
            }
        }
        else {
            message = 'Invalid nights count replaced';
        }

        return new Model(this.checkInDate, this.checkOutDate, message);
    };

    Model.prototype.nightsCount = function () {
        return moment(this.checkOutDate, 'YYYY-MM-DD').diff(
            moment(this.checkInDate, 'YYYY-MM-DD'),
            'days'
        );
    };

    module.exports = Model;
}());
