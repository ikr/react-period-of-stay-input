describe('Environment', function () {
    'use strict';

    var assert = require('assert'),
        Environment = require('../src/Environment');

    it('is just a record constructor', function () {
        var env = new Environment(true, '2014-09-24');
        assert.strictEqual(env.zeroNightsAllowed, true);
        assert.strictEqual(env.today, '2014-09-24');
    });
});
