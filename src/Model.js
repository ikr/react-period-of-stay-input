(function () {
    'use strict';

    var moment = require('moment'),

        Model = function (checkInDate, checkOutDate, message) {
            this.checkInDate = checkInDate;
            this.checkOutDate = checkOutDate;
            this.message = message;
        },

        itsOk = function (mCheckIn, mCheckOut, environment) {
            var mToday = moment(environment.today, 'YYYY-MM-DD');

            return (!mCheckIn.isBefore(mToday) && (
                mCheckOut.diff(mCheckIn, 'days') <= 27
            ) && (
                (environment.zeroNightsAllowed && !mCheckOut.isBefore(mCheckIn)) ||
                (!environment.zeroNightsAllowed && mCheckIn.isBefore(mCheckOut))
            ));
        };

    Model.prototype.newCheckIn = function (checkInDate, environment) {
        var mCheckOut = moment(this.checkOutDate, 'YYYY-MM-DD'),
            mCheckIn;

        if (moment(checkInDate, 'YYYY-MM-DD').isValid()) {
            mCheckIn = moment(checkInDate, 'YYYY-MM-DD');

            if (itsOk(mCheckIn, mCheckOut, environment)) {
                return new Model(checkInDate, this.checkOutDate);
            }
        }

        return new Model(
            mCheckOut.subtract(1, 'days').format('YYYY-MM-DD'),
            this.checkOutDate
        );
    };

    module.exports = Model;
}());
