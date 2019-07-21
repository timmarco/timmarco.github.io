/* jshint esversion:6 */
WinChart.prototype.defineReferencePoints = function() {
  const chart = this;

  let referencePoints = {};

  referencePoints.xMin = chart.margins.left;
  referencePoints.xMax = chart.size.width - chart.margins.right;
  referencePoints.yMin = chart.margins.top;
  referencePoints.yMax = chart.size.height - chart.margins.bottom;

  referencePoints.effectiveWidth = referencePoints.xMax - referencePoints.xMin;
  referencePoints.effectiveHeight = referencePoints.yMax - referencePoints.yMin;

  return referencePoints;
}
