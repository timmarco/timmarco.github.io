/* jshint esversion:6 */
Modeler.prototype.addContractAAVSlider = function() {
  const modeler = this;
  let slider;

  slider = new Slider({
    "where":modeler.layers.contract,
    "coordinates":{"x":550,"y":125},
    "label":"Average Annual Value ($MM)",
    "domain":[2,45],
    "significantDigits":0,
    "defaultValue":pane.contractValues.contractLength
  }).setDragCallback((newValue) => {
    modeler.projectionParameters.aav = newValue;
    modeler.calculateContractValues();
  });

  return slider;
};
