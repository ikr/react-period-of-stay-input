import * as moment from 'moment'

export const FORMAT = 'YYYY-MM-DD'

function isValidDate(stringValue: string): boolean {
    return /^\d{4}-\d{2}-\d{2}$/.test(stringValue) && moment(stringValue, FORMAT).isValid()
}

export default class Day {
    private stringValue: string

    constructor(yyyyDashMmDashDd: string) {
        if (!isValidDate(yyyyDashMmDashDd)) {
            throw new Error(`${yyyyDashMmDashDd} isn't a valid ISO 8601 date literal`)
        }

        this.stringValue = yyyyDashMmDashDd
    }

    toString(): string {
        return this.stringValue
    }

    toMoment(): moment.Moment {
        return moment(this.stringValue, FORMAT)
    }

    next(): Day {
        return new Day(this.toMoment().add(1, 'days').format(FORMAT))
    }

    previous(): Day {
        return new Day(this.toMoment().subtract(1, 'days').format(FORMAT))
    }
}
