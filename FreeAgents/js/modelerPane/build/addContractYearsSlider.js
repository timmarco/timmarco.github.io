/* jshint esversion:6 */
ModelerPane.prototype.addContractYearsSlider = function() {
  const pane = this;

  let slider;
  // TODO: REVIEW SLIDER OBJECT AND POPULATE

  slider = new Slider({
    "where":pane.group,
    "coordinates":pane.referencePoints.overlayContractSliderCoordinates,
    "label":"Contract Years",
    "domain":[1,15],
    "defaultValue":pane.contractValues.contractLength,
    "significantDigits":0,
    "size":{
      "width":pane.referencePoints.overlayColumnWidth
    }
  }).setDragCallback((newValue) => {
    pane.killAllGlows();
    pane.contractValues.contractLength = +newValue.toFixed(0);
    pane.updateContractYears();
    pane.hasDragged = true;
  })
  .runGlow();

  slider.circleMouseover = pane.hintMouseover();
  slider.circleMouseout = pane.hintMouseout();

  return slider;
};
