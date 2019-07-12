/* jshint esversion:6 */
Slider.prototype.defineReferencePoints = function() {
  const slider = this;
  let referencePoints = {};

  referencePoints.labelPosition = {"x":slider.size.width / 2,"y":slider.margins.top};
  referencePoints.verticalCenter = slider.size.height / 2;
  referencePoints.effectiveWidth = slider.size.width - slider.margins.left - slider.margins.right;
  referencePoints.effectiveHeight = slider.size.height - slider.margins.top - slider.margins.bottom;
  referencePoints.sliderTrackVerticalCenter = slider.margins.top + (referencePoints.effectiveHeight / 2);
  referencePoints.trackMin = slider.margins.left;
  referencePoints.trackMax = slider.size.width - slider.margins.right;
  referencePoints.circleCenterY = referencePoints.sliderTrackVerticalCenter + slider.styles.sliderTrackHeight / 2;
  referencePoints.valueLabelCenterX = referencePoints.effectiveWidth + 15;

  return referencePoints;
};
