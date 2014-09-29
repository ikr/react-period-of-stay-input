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
        },

        isValidDate = function (str) {
            return (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(str) && moment(str, fmt()).isValid());
        };

    Model.prototype.newCheckIn = function (checkInDate, environment) {
        var mCheckOut = moment(this.checkOutDate, fmt()),
            mCheckIn;

        if (isValidDate(checkInDate)) {
            mCheckIn = moment(checkInDate, fmt());

            if (itsOk(mCheckIn, mCheckOut, environment)) {
                return new Model(checkInDate, mCheckIn.add(1, 'days').format(fmt()));
            }

            if (mCheckIn.isBefore(moment(environment.today, fmt()))) {
                return this;
            }

            return new Model(checkInDate, this.checkOutDate);
        }

        return this;
    };

    Model.prototype.newCheckOut = function (checkOutDate, environment) {
        var mCheckIn = moment(this.checkInDate, fmt()),
            mCheckOut;

        if (isValidDate(checkOutDate)) {
            mCheckOut = moment(checkOutDate, fmt());

            if (itsOk(mCheckIn, mCheckOut, environment)) {
                return new Model(mCheckOut.subtract(1, 'days').format(fmt()), checkOutDate);
            }

            if (
                !environment.zeroNightsAllowed &&
                !mCheckOut.isAfter(moment(environment.today, fmt()))
            ) {
                return this;
            }

            return new Model(this.checkInDate, checkOutDate);
        }

        return this;
    };

    Model.prototype.nightsCount = function () {
        return moment(this.checkOutDate, fmt()).diff(
            moment(this.checkInDate, fmt()),
            'days'
        );
    };

    Model.prototype.isSame = function (otherModel) {
        return (
            this.checkInDate === otherModel.checkInDate &&
            this.checkOutDate === otherModel.checkOutDate
        );
    };

    module.exports = Model;
}());
