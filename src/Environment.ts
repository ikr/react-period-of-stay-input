import Day from './Day'

export default class Environment {
    private _zeroNightsAllowed: boolean
    private _minCheckInDate: Day

    constructor(zeroNightsAllowed: boolean, minCheckInDate: Day) {
        this._zeroNightsAllowed = zeroNightsAllowed
        this._minCheckInDate = minCheckInDate
    }

    get zeroNightsAllowed(): boolean {
        return this._zeroNightsAllowed
    }

    get minCheckInDate(): Day {
        return this._minCheckInDate
    }
}
