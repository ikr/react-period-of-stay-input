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
        };

    Model.prototype.newCheckIn = function (checkInDate, environment) {
        var mCheckOut = moment(this.checkOutDate, fmt()),
            mCheckIn;

        if (moment(checkInDate, fmt()).isValid()) {
            mCheckIn = moment(checkInDate, fmt());

            if (
                mCheckOut.isBefore(mCheckIn) ||
                (!environment.zeroNightsAllowed && mCheckIn.isSame(mCheckOut, 'day')) ||
                (mCheckOut.diff(mCheckIn, 'days') > maxNightsCount())
            ) {
                return new Model(checkInDate, mCheckIn.add(1, 'days').format(fmt()));
            }

            if (mCheckIn.isBefore(moment(environment.today, fmt()))) {
                return this;
            }

            return new Model(checkInDate, this.checkOutDate);
        }

        return this;
    };

    Model.prototype.newCheckOut = function (checkOutDate) {
        var mCheckIn = moment(this.checkInDate, fmt()),
            mCheckOut;

        if (moment(checkOutDate, fmt()).isValid()) {
            mCheckOut = moment(checkOutDate, fmt());

            if (mCheckOut.isBefore(mCheckIn)) {
                return new Model(mCheckOut.subtract(this.nightsCount(), 'days'), checkOutDate);
            }

            return new Model(this.checkInDate, checkOutDate);

        }

        return new Model(this.checkInDate, this.checkOutDate);
    };

    Model.prototype.nightsCount = function () {
        return moment(this.checkOutDate, fmt()).diff(
            moment(this.checkInDate, fmt()),
            'days'
        );
    };

    module.exports = Model;
}());
