[![Build Status](https://travis-ci.org/ikr/react-period-of-stay-input.svg?branch=master)](https://travis-ci.org/ikr/react-period-of-stay-input)

# About

React.js component for entering a period of stay in a hotel: check-in day and check-out day. See
[the demo.](http://ikr.su/h/react-period-of-stay-input/demo.html) In case when the native `<input
type=date>` implementation is not available, it's “polyfilled” with [the react-datepicker
component](https://github.com/Hacker0x01/react-datepicker).

# Installation

    npm install --save react-period-of-stay-input

# Usage

See [the annotated source code of the
demo](https://github.com/ikr/react-period-of-stay-input/blob/master/src/demo.tsx) mentioned
above.

## Internationalization

The i18n is based on the [react-intl library.](https://github.com/yahoo/react-intl) `react-intl`
facilitates using `react-period-of-stay-input`, and other similarly organized modules, in a large
single-page application (SPA). Its `IntlProvider` wrapper passes all the app translations, for all
the sub-modules, from the root, down the React components hierarchy.

Normally, translations for every supported locale are collected from all the sub-modules, and
pre-compiled into a separate JS bundle, during the SPA build step. Thus, the browser doesn't have to
download the translations for the locales it doesn't display at the moment.
