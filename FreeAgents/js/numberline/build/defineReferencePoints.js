/* jshint esversion:6 */
Numberline.prototype.defineReferencePoints = function() {
  const chart = this;
  let referencePoints = {};

  referencePoints.effectiveHeight = chart.size.height - chart.margins.top - chart.margins.bottom;
  referencePoints.midline = chart.margins.top + referencePoints.effectiveHeight / 2;
  referencePoints.bottomBaseline = chart.size.height - chart.margins.bottom;

  return referencePoints;
};
