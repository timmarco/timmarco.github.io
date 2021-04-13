RandomWalk.prototype.defineBinnedValues = function() {
  const randomWalk = this;
  const binnedValues = {};
  d3.range(-10,11)
    .forEach((value) => {
      binnedValues[value] = 0;
    });
  return binnedValues;
}
