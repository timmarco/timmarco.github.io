/* jshint esversion:6 */
ModelerPane.prototype.addWinValueSliders = function() {
  const pane = this;

  let sliders = [];
  d3.range(0,16).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let slider;

    slider = new Slider({
      "where":pane.group,
      "coordinates":{"x":pane.referencePoints.centerX,"y":125 + yearIndex * pane.referencePoints.tableRowHeight},
      "label":"",
      "domain":[8,25],
      "defaultValue":pane.contractValues.winValue[yearIndex],
      "significantDigits":2,
      "size":{
        "width":275
      }
    }).setDragCallback(function(newValue) {
      pane.contractValues.winValue[yearIndex] = newValue;

      slider.valueLabel
        .updateText("$" + newValue.toFixed(2) + "mm");

      pane
        .updateContractValue();

      pane
        .killAllGlows();

      pane.hasDragged = true;
    })
    .runGlow();

    slider.circleMouseover = pane.hintMouseover();
    slider.circleMouseout = pane.hintMouseout();


    sliders.push(slider);
  });

  return sliders;

  function sliderUpdate(newValue,yearIndex) {
    pane.contractValues.winValue[yearIndex] = newValue;
  }

};
