/* jshint esversion:6 */
Modeler.prototype.addContractYearsSlider = function() {
  const modeler = this;
  let slider;

  slider = new Slider({
    "where":modeler.layers.contract,
    "coordinates":{"x":550,"y":50},
    "label":"Contract Length (Seasons)",
    "domain":[1,15],
    "significantDigits":0,
    "defaultValue":modeler.projectionParameters.contractLength
  }).setDragCallback((newValue) => {
    modeler.projectionParameters.contractLength = +newValue.toFixed(0);
    modeler.calculateContractValues();
  });


  return slider;
};
