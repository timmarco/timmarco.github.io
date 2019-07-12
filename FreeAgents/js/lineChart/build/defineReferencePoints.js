/* jshint esversion:6 */
LineChart.prototype.defineReferencePoints = function() {
  const chart = this;

  let referencePoints = {};

  referencePoints.effectiveWidth = chart.size.width - chart.margins.left - chart.margins.right;
  referencePoints.effectiveHeight = chart.size.height - chart.margins.top - chart.margins.bottom;
  referencePoints.midlineX = (referencePoints.effectiveWidth / 2) + chart.margins.left;
  referencePoints.midlineY = (referencePoints.effectiveHeight / 2) + chart.margins.top;
  referencePoints.xAxisTitleTop = chart.size.height - (chart.margins.bottom / 2);
  referencePoints.titleTopY = chart.margins.top / 2;

  referencePoints.xMin = chart.margins.left;
  referencePoints.xMax = chart.margins.left + referencePoints.effectiveWidth;

  referencePoints.yMin = chart.margins.top + referencePoints.effectiveHeight;
  referencePoints.yMax = chart.margins.top;

  return referencePoints;

};
