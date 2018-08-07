import Locale from './Locale'

export default function (): { [locale in Locale]: { [key: string]: string } } {
    return {
        [Locale.EN]: {
            'react-period-of-stay-input.period': '{count, plural, =0 {Single day} =1 {1 night} other {# nights}}',
            'react-period-of-stay-input.checkInDay': 'Check-in day',
            'react-period-of-stay-input.checkOutDay': 'Check-out day'
        },

        [Locale.DE]: {
            'react-period-of-stay-input.period': '{count, plural, =0 {Ein Tag} =1 {1 Nacht} other {# Nächte}}',
            'react-period-of-stay-input.checkInDay': 'Anreise',
            'react-period-of-stay-input.checkOutDay': 'Abreise'
        },
        [Locale.ZH]: {
            'react-period-of-stay-input.period': '{count, plural, =0 {一晚} =1 {1 晚} other {# 晚}}',
            'react-period-of-stay-input.checkInDay': '入住日期',
            'react-period-of-stay-input.checkOutDay': '退房日期'
        }
    }
}
