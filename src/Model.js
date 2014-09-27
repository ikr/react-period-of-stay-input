(function () {
    'use strict';

    var moment = require('moment'),

        Model = function (checkInDate, checkOutDate) {
            this.checkInDate = checkInDate;
            this.checkOutDate = checkOutDate;
        },

        maxNightsCount = function () {
            return 27;
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
            mCheckIn;

        if (moment(checkInDate, 'YYYY-MM-DD').isValid()) {
            mCheckIn = moment(checkInDate, 'YYYY-MM-DD');

            if (mCheckOut.isBefore(mCheckIn)) {
                return new Model(checkInDate, mCheckIn.add(this.nightsCount(), 'days'));
            }

            return new Model(checkInDate, this.checkOutDate);
        }

        return this;
    };

    Model.prototype.newCheckOut = function (checkOutDate, environment) {
        var mCheckIn = moment(this.checkInDate, 'YYYY-MM-DD'),
            mCheckOut,
            v;

        if (moment(checkOutDate, 'YYYY-MM-DD').isValid()) {
            mCheckOut = moment(checkOutDate, 'YYYY-MM-DD');
            v = validate(mCheckIn, mCheckOut, environment);

            if (v[0]) {
                return new Model(this.checkInDate, checkOutDate);
            }
            else {
                return new Model(
                    mCheckOut.subtract(1, 'days').format('YYYY-MM-DD'), checkOutDate, v[1]);
            }
        }

        return new Model(this.checkInDate, this.checkOutDate, 'Invalid check-out day replaced');
    };

    Model.prototype.newNights = function (count, environment) {
        var mCheckIn,
            mCheckOut,
            v;

        if (Number.isInteger(count) && (Math.abs(count) < 10000)) {
            mCheckIn = moment(this.checkInDate, 'YYYY-MM-DD');
            mCheckOut = moment(this.checkInDate, 'YYYY-MM-DD').add(count, 'days');
            v = validate(mCheckIn, mCheckOut, environment);

            if (v[0]) {
                return new Model(this.checkInDate, mCheckOut.format('YYYY-MM-DD'));
            }
            else {
                return new Model(this.checkInDate, this.checkOutDate, v[1]);
            }
        }

        return new Model(this.checkInDate, this.checkOutDate, 'Invalid nights count replaced');
    };

    Model.prototype.nightsCount = function () {
        return moment(this.checkOutDate, 'YYYY-MM-DD').diff(
            moment(this.checkInDate, 'YYYY-MM-DD'),
            'days'
        );
    };

    module.exports = Model;
}());
