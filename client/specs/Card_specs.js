var assert = require('chai').assert;
var Card = require('../src/models/Card');

describe("a card", function(){
  var petersCard;
  beforeEach(function(){
    petersCard = new Card("Peter", false);
  });
  it('shoud have a name', function(){
    assert.equal('Peter', petersCard.name);
  });
  it('shoud not have glasses', function(){
    assert.equal(false, petersCard.hasGlasses);
  });
  it('shoud have a get name', function(){
      assert.equal("Peter", petersCard.getName());
  });
});