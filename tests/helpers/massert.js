var assert = require('assert')

exports.cssClass = function (element, className) {
    var cn = element.className
    assert(cn.split(' ').indexOf(className) >= 0, '"' + className + '" not found in "' + cn + '"')
}

exports.noCssClass = function (element, className) {
    var cn = element.className;

    assert(
        cn.split(' ').indexOf(className) === -1,
        'Unexpected "' + className + '" in "' + cn + '"'
    )
}
