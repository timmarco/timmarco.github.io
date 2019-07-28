/* jshint esversion:6 */
Minibar.prototype.defineScales = function() {
  const bar = this;

  let scale = d3.scaleLinear()
    .range([bar.referencePoints.minX,bar.referencePoints.maxX]);

  return scale;
};
