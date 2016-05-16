var Card = function(name, hasGlasses, url) {
  this.currrentHint = false;
  this.name = name;
  this.hasGlasses = hasGlasses;
  this.imageUrl = url;
}

Card.prototype.getName = function() {
  return this.name;
};

module.exports = Card;