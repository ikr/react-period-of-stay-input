describe('Model', function () {
    'use strict';

    var assert = require('assert'),
        Model = require('../src/Model');

    it('is a constructor', function () {
        var m = new Model('2014-09-24', '2014-09-25');
        assert.strictEqual(m.checkInDate, '2014-09-24');
        assert.strictEqual(m.checkOutDate, '2014-09-25');
    });
});
