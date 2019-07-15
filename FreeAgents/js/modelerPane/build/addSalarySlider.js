/* jshint esversion:6 */
ModelerPane.prototype.addSalarySlider = function() {
  const pane = this;

  let slider;
  // TODO: REVIEW SLIDER OBJECT AND POPULATE

  slider = new Slider({
    "where":pane.group,
    "coordinates":pane.referencePoints.overlaySalarySliderCoordinates,
    "label":"AAV",
    "domain":[2,45],
    "defaultValue":pane.contractValues.aav,
    "significantDigits":0,
    "size":{
      "width":pane.referencePoints.overlayColumnWidth
    }
  }).setDragCallback((newValue) => {
    pane.killAllGlows();
    pane.contractValues.aav = +newValue.toFixed(0);
    pane.updateContractYears();
    pane.hasDragged = true;
  })
  .runGlow();

  slider.circleMouseover = pane.hintMouseover();
  slider.circleMouseout = pane.hintMouseout();

  return slider;
};
