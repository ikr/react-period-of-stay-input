(function () {
    'use strict';

    var moment = require('moment'),

        Model = function (checkInDate, checkOutDate) {
            this.checkInDate = checkInDate;
            this.checkOutDate = checkOutDate;
        },

        maxNightsCount = function () {
            return 27;
        },

        fmt = function () {
            return 'YYYY-MM-DD';
        },

        itsOk = function (mCheckIn, mCheckOut, environment) {
            return (
                mCheckOut.isBefore(mCheckIn) ||
                (!environment.zeroNightsAllowed && mCheckIn.isSame(mCheckOut, 'day')) ||
                (mCheckOut.diff(mCheckIn, 'days') > maxNightsCount())
            );
        };

    Model.prototype.newCheckIn = function (checkInDate, environment) {
        var mCheckOut = moment(this.checkOutDate, fmt()),
            mCheckIn = moment(checkInDate, fmt());

        if (mCheckIn.isBefore(moment(environment.today, fmt()))) {
            return this;
        }

        if (itsOk(mCheckIn, mCheckOut, environment)) {
            return new Model(checkInDate, mCheckIn.add(1, 'days').format(fmt()));
        }

        return new Model(checkInDate, this.checkOutDate);
    };

    Model.prototype.newCheckOut = function (checkOutDate, environment) {
        var mCheckIn = moment(this.checkInDate, fmt()),
            mCheckOut = moment(checkOutDate, fmt()),
            mToday = moment(environment.today, fmt());

        if (
            mCheckOut.isBefore(mToday) ||
            (!environment.zeroNightsAllowed && mCheckOut.isSame(mToday, 'day'))
        ) {
            return this;
        }

        if (environment.zeroNightsAllowed && mCheckOut.isSame(mToday, 'day')) {
            return new Model(checkOutDate, checkOutDate);
        }

        if (itsOk(mCheckIn, mCheckOut, environment)) {
            return new Model(mCheckOut.subtract(1, 'days').format(fmt()), checkOutDate);
        }

        return new Model(this.checkInDate, checkOutDate);
    };

    Model.prototype.nightsCount = function () {
        return moment(this.checkOutDate, fmt()).diff(
            moment(this.checkInDate, fmt()),
            'days'
        );
    };

    module.exports = Model;
}());
