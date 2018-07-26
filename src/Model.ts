import Day from './Day'

export default class Model {
    private _checkInDate: Day
    private _checkOutDate: Day

    constructor(checkInDate: Day, checkOutDate: Day) {
        if (checkOutDate.toMoment().isBefore(checkInDate.toMoment())) {
            throw new Error(
                `Check-out date can be before check-in. Got ${checkInDate}, ${checkOutDate}`
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
}
