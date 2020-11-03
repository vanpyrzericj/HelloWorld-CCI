var assert = require('assert');
var engine = require('../engine');

describe('Default Tests', function() {
  describe('#charactersInName()', function() {
    it('should return 4 for the name Eric', function() {
      assert.strictEqual(4, engine.charactersInName('eric'));
    });
  });
});