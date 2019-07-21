/* jshint esversion:6 */
ModelerPane.prototype.addContractYearsSlider = function() {
  const pane = this;

  let slider;
  let maxYears = 40 - pane.parent.player.stats.stats["2018"].age;


  slider = new ModelSlider({
    "where":pane.group,
    "coordinates":pane.referencePoints.overlayContractSliderCoordinates,
    "formatter":(x) => { return x.toFixed(0) + " years" },
    "domain":[1,maxYears],
    "size":{
      "width":200
    },
    "styles":{
      "labelFontFill":"black",
      "labelFontSize":"12pt",
      "labelActiveFontSize":"14pt"
    },
    "callbacks":{
      "change":(newValue) => {
        // pane.killAllGlows();
        pane.contractValues.contractLength = +newValue.toFixed(0);
        pane.updateContractYears();

        pane.winValueChart
          .updateYears(pane.contractValues.contractLength);

        pane.salaryChart
          .updateYears(pane.contractValues.contractLength);

        pane.hasDragged = true;
      }
    }
  }).updateValue(3);


  return slider;
};
