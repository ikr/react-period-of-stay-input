export default function (): boolean {
    if (!document) {
        return false
    }

    const input = document.createElement('input')
    input.setAttribute('type', 'date')

    const notADateValue = 'not-a-date'
    input.setAttribute('value', notADateValue)

    return input.value !== notADateValue
}
