/* jshint esversion:6 */
Modeler.prototype.addContractYearsSlider = function() {
  const modeler = this;
  let slider;
  let maxYears = 40 - modeler.player.stats.stats["2018"].age;

  slider = new ModelSlider({
    "where":modeler.rightPane,
    "coordinates":modeler.referencePoints.rightPaneContractLengthSliderCoordinates,
    "formatter":(x) => { return x.toFixed(0) + " years" },
    "domain":[1,maxYears],
    "styles":{
      "labelFontFill":"black",
      "labelFontSize":"12pt",
      "labelActiveFontSize":"14pt"
    },
    "size":{
      "width":300,
    },
    "labelText":"Contract Length:",
    "callbacks":{
      "change":(newValue) => {
        modeler.projectionParameters.contractLength = newValue.toFixed(0);
        modeler.calculateContractValues();

        modeler.winChart
          .updateYears(modeler.projectionParameters.contractLength);
        modeler.salaryChart
          .updateYears(modeler.projectionParameters.contractLength);

      }
    }
  });


  return slider;
};
