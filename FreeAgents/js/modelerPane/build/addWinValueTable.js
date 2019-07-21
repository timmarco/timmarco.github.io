/* jshint esversion:6 */
ModelerPane.prototype.addWinValueTable = function() {
  const pane = this;


  d3.range(0,16).forEach((number) => {

    let year = number + 2019;

    let slider = new Slider({
      "where":pane.group,
      "label":year,
      "coordinates":{"x":500,"y":75 + (number * pane.referencePoints.overlaySliderHeight)},
      "domain":[8,30],
      "defaultValue":pane.contractValues.winValue[number],
      "significantDigits":0,
      "size":{
        "width":pane.referencePoints.overlayColumnWidth - 10,
        "height":20
      },
      "leftLabel":true
    }).setDragCallback((newValue) => {
      pane.contractValues.winValue[number] = +newValue.toFixed(2);
      pane.killAllGlows();
      pane.updateContractValue();
      pane.hasDragged = true;
    })
    .runGlow();

    pane.winValueSliders.push(slider);
  });

  return pane.winValueSliders;
};
