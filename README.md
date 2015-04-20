[![Build Status](https://travis-ci.org/ikr/react-period-of-stay-input.svg?branch=master)](https://travis-ci.org/ikr/react-period-of-stay-input)

# About

React.js component for entering a period of stay in a hotel: check-in day and check-out day. See
[the demo.](http://ikr.su/h/react-period-of-stay-input/demo.html) In case when a native
`<input type="date">` implementation is not available, it's "polyfilled" with a
[jQuery UI datepicker.](http://jqueryui.com/datepicker/)

# Installation

Made for [Browserify.](http://browserify.org/)

    npm install --save react-period-of-stay-input

# Usage

See [the code](https://github.com/ikr/react-period-of-stay-input/blob/master/demo.js) of the demo
mentioned above. The _polyfilling_ part is visible
[here.](https://github.com/ikr/react-period-of-stay-input/blob/master/www/demo.html)

##I18N

If you need a i18n pass `lang` and `messages` props to component.
Where `lang` it's two-letter language code (`en`, `ru`, `de`, etc.); `messages` it's object with following format:

```js
{
    period: {
        singleDay: 'Single day',
        oneNight: '1 night',
        xNights: '{count} nights'
    },
    checkInDay: 'Check-in day',
    checkOutDay: 'Check-out day'
}
```

Used [react-intl](https://github.com/yahoo/react-intl).
