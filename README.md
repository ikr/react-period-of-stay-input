[![Build Status](https://travis-ci.org/ikr/react-period-of-stay-input.svg?branch=master)](https://travis-ci.org/ikr/react-period-of-stay-input)

# About

React.js component for entering a period of stay in a hotel: check-in day and check-out day. See
[the demo.](http://ikr.su/h/react-period-of-stay-input/demo.html) In case when a native
`<input type="date">` implementation is not available, it's "polyfilled" with a
[jQuery UI datepicker](http://jqueryui.com/datepicker/) (English only).

# Installation

Made for [Browserify.](http://browserify.org/)

    npm install --save react-period-of-stay-input

# Usage

See [the code](https://github.com/ikr/react-period-of-stay-input/blob/master/demo.js) of the demo
mentioned above. The _polyfilling_ part is visible
[here.](https://github.com/ikr/react-period-of-stay-input/blob/master/www/demo.html)

## Internationalization

[react-intl](https://github.com/yahoo/react-intl)-based. To translate the component, please pass the
`messages` property, containing:

```js
{
    'react-period-of-stay-input': {
        period: '{count, plural, =0 {Single day} =1 {1 night} other {# nights}}',
        checkInDay: 'Check-in day',
        checkOutDay: 'Check-out day'
    }
}
```

`react-intl` allows using `react-period-of-stay-input` uniformly in bigger applications, and passing
all the namespaced translations, from the root, down the React components hierarchy, --
automatically, with the help of `IntlMixin`.

Please note, that `react-intl` depends on global `Intl` object. You can polyfill it with
[intl](https://github.com/andyearnshaw/Intl.js) package:

```js
if (!global.Intl) {
    require('intl');
}
```
