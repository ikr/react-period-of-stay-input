import Day from './Day'
import ZeroNightsPolicy from './ZeroNightsPolicy'

export default class Environment {
    private _zeroNightsPolicy: ZeroNightsPolicy
    private _minCheckInDate: Day

    constructor(zeroNightsPolicy: ZeroNightsPolicy, minCheckInDate: Day) {
        this._zeroNightsPolicy = zeroNightsPolicy
        this._minCheckInDate = minCheckInDate
    }

    get zeroNightsAllowed(): boolean {
        return this._zeroNightsPolicy === ZeroNightsPolicy.ALLOW
    }

    get minCheckInDate(): Day {
        return this._minCheckInDate
    }
}
