/* jshint esversion:6 */
Projection.prototype.getRelevantWarCurveDeltas = function() {
  const projection = this;
  let deltas;

  deltas = projection.warCurveDeltas.filter((object) => { return +object.age > projection.baseAge; });

  return deltas;
};
