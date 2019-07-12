/* jshint esversion:6 */
Modeler.prototype.addWinDollarsSlider = function() {
  const modeler = this;
  let slider;

  slider = new Slider({
    "where":modeler.layers.contract,
    "coordinates":{"x":550,"y":175},
    "label":"Average $MM / Win",
    "domain":[7,25],
    "defaultValue":modeler.projectionParameters.dollarsPerWar,
    "significantDigits":1
  }).setDragCallback((newValue) => {
    modeler.projectionParameters.dollarsPerWar = newValue;
    modeler.calculateContractValues();
  });

  return slider;
};
