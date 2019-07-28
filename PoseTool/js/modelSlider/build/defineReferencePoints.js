/* jshint esversion:6 */
ModelSlider.prototype.defineReferencePoints = function() {
  const slider = this;

  let referencePoints = {};
  
  referencePoints.xMin = slider.margins.left;
  referencePoints.xMax = slider.size.width - slider.margins.right;

  referencePoints.effectiveWidth = slider.size.width - slider.margins.right - slider.margins.left;

  return referencePoints;
}
