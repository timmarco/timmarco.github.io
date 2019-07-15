/* jshint esversion:6 */
Modeler.prototype.addContractYearsSlider = function() {
  const modeler = this;
  let slider;

  slider = new Slider({
    "where":modeler.rightPane,
    "coordinates":modeler.referencePoints.rightPaneContractLengthSliderCoordinates,
    "label":"Contract Length (Seasons)",
    "domain":[1,15],
    "significantDigits":0,
    "defaultValue":3,
    "size":{
      "width":300
    }
  }).setDragCallback((newValue) => {
    modeler.projectionParameters.contractLength = +newValue.toFixed(0);
    modeler.calculateContractValues();
  });


  return slider;
};
