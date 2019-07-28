/* jshint esversion:6 */
Minibar.prototype.defineReferencePoints = function() {
  const bar = this;
  let referencePoints = {};

  referencePoints.effectiveWidth = bar.size.width - bar.margins.right - bar.margins.left;
  referencePoints.effectiveHeight = bar.size.height - bar.margins.top - bar.margins.bottom;

  referencePoints.minX = bar.margins.left;
  referencePoints.maxX = bar.size.width - bar.margins.right;

  referencePoints.verticalMidline = bar.margins.top + (referencePoints.effectiveHeight / 2);

  return referencePoints;
};
