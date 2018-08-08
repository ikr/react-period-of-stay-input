import * as moment from 'moment'
import { Moment } from 'moment'

export const FORMAT = 'YYYY-MM-DD'

function isValidDate(stringValue: string): boolean {
    return /^\d{4}-\d{2}-\d{2}$/.test(stringValue) && moment.utc(stringValue, FORMAT).isValid()
}

export default class Day {
    private stringValue: string

    constructor(value: string | Moment) {
        if (typeof value === 'string') {
            if (!isValidDate(value)) {
                throw new Error(`${value} isn't a valid ISO 8601 date literal`)
            }

            this.stringValue = value
        } else {
            this.stringValue = value.format(FORMAT)
        }
    }

    toString(): string {
        return this.stringValue
    }

    toMoment(): moment.Moment {
        return moment(this.stringValue)
    }

    next(): Day {
        return new Day(this.toMoment().add(1, 'days'))
    }

    previous(): Day {
        return new Day(this.toMoment().subtract(1, 'days'))
    }
}
