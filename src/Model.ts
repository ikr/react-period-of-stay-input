import * as moment from 'moment'
import Day from './Day'
import Environment from './Environment'

const MAX_NIGHTS_COUNT = 27

export default class Model {
    private _checkInDate: Day
    private _checkOutDate: Day

    constructor(checkInDate: Day, checkOutDate: Day) {
        if (checkOutDate.toMoment().isBefore(checkInDate.toMoment())) {
            throw new Error(
                `Check-out date can't be before check-in. Got ${checkInDate}, ${checkOutDate}`
            )
        }

        this._checkInDate = checkInDate
        this._checkOutDate = checkOutDate
    }

    get checkInDate(): Day {
        return this._checkInDate
    }

    get checkOutDate(): Day {
        return this._checkOutDate
    }

    newCheckIn(checkInDate: string, environment: Environment): Model {
        const mCheckOut = this._checkOutDate.toMoment()
        const checkIn = new Day(checkInDate)
        const mCheckIn = checkIn.toMoment()

        if (mCheckIn.isBefore(environment.minCheckInDate.toMoment())) {
            return this
        }

        if (itsOk(mCheckIn, mCheckOut, environment)) {
            return new Model(checkIn, checkIn.next())
        }

        return new Model(checkIn, this._checkOutDate)
    }

    newCheckOut(checkOutDate: string, environment: Environment): Model {
        const mCheckIn = this.checkInDate.toMoment()
        const checkOut = new Day(checkOutDate)
        const mCheckOut = checkOut.toMoment()
        const mMinCheckInDate = environment.minCheckInDate.toMoment()

        if (
            mCheckOut.isBefore(mMinCheckInDate) ||
            (!environment.zeroNightsAllowed && mCheckOut.isSame(mMinCheckInDate, 'day'))
        ) {
            return this
        }

        if (environment.zeroNightsAllowed && mCheckOut.isSame(mMinCheckInDate, 'day')) {
            return new Model(checkOut, checkOut)
        }

        if (itsOk(mCheckIn, mCheckOut, environment)) {
            return new Model(checkOut.previous(), checkOut)
        }

        return new Model(this._checkInDate, checkOut)
    }

    nightsCount(): number {
        return this._checkOutDate.toMoment().diff(this._checkInDate.toMoment(), 'days')
    }
}

function itsOk(mCheckIn: moment.Moment, mCheckOut: moment.Moment, environment: Environment): boolean {
    return (
        mCheckOut.isBefore(mCheckIn) ||
        (!environment.zeroNightsAllowed && mCheckIn.isSame(mCheckOut, 'day')) ||
        (mCheckOut.diff(mCheckIn, 'days') > MAX_NIGHTS_COUNT)
    )
}
