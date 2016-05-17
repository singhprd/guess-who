var Card = function(name, hasGlasses, url, hasHat) {
  this.name = name;
  this.hasGlasses = hasGlasses;
  this.imageUrl = url;
  this.hasHat = hasHat;
}

Card.prototype.getName = function() {
  return this.name;
};

module.exports = Card;