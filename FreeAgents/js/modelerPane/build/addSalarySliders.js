/* jshint esversion:6 */
ModelerPane.prototype.addSalarySliders = function() {
  const pane = this;

  let label = new TextLabel({
    "where":pane.group,
    "text":"Salary Per Year"
  })
  .show()
  .move({
    "x":pane.referencePoints.rightSixth + 100,
    "y":125
  });

  let sliders = [];

  d3.range(0,16).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let slider;

    slider = new Slider({
      "where":pane.group,
      "coordinates":{"x":pane.referencePoints.rightSixth - 50,"y":125 + yearIndex * pane.referencePoints.tableRowHeight},
      "label":"",
      "domain":[2,40],
      "defaultValue":pane.contractValues.salary[yearIndex],
      "significantDigits":2,
      "size":{
        "width":275
      }
    }).setDragCallback(function(newValue) {
      pane.contractValues.salary[yearIndex] = newValue;
      pane
        .updateContractValue();

      pane
        .killAllGlows();

      slider.valueLabel
        .updateText("$" + newValue.toFixed(2) + "M");

      pane.hasDragged = true;

    })
    .runGlow();

    slider.circleMouseover = pane.hintMouseover();
    slider.circleMouseout = pane.hintMouseout();

    sliders.push(slider);
  });

  return sliders;

  function sliderUpdate(newValue,yearIndex) {
    pane.contractValues.salary[yearIndex] = newValue;
    pane
      .updateContractValue();
  }

};
