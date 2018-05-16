module.exports = function () {
    return {
        en: {
            'react-period-of-stay-input': {
                period: '{count, plural, =0 {Single day} =1 {1 night} other {# nights}}',
                checkInDay: 'Check-in day',
                checkOutDay: 'Check-out day'
            }
        },

        de: {
            'react-period-of-stay-input': {
                'period': '{count, plural, =0 {Ein Tag} =1 {1 Nacht} other {# Nächte}}',
                'checkInDay': 'Anreise',
                'checkOutDay': 'Abreise'
            }
        },
        zh: {
            'react-period-of-stay-input': {
                "period": "{count, plural, =0 {一晚} =1 {1 晚} other {# 晚}}",
                "checkInDay": "入住日期",
                "checkOutDay": "退房日期"
            }
        }
    }
}
