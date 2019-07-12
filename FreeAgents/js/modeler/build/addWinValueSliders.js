/* jshint esversion:6 */
Modeler.prototype.addWinValueSliders = function (yearsToProject) {
  const modeler = this;

  let sliders = [];

  d3.range(0,16).forEach((year,index) => {
    let slider;

    slider = new Slider({
      "where":modeler.layers.contract,
      "size":{"height":25,"width":100},
      "margins":{"top":5,"bottom":5},
      "coordinates":{"x":650,"y":125 + index * 25},
      // "label":2019 + index,
      "domain":[8,25],
      "significantDigits":2,
      "defaultValue":+modeler.projectionParameters.winValue[index].toFixed(2)
    }).setDragCallback((newValue) => {
      modeler.calculateContractValues();
    });

    sliders.push(slider);

  });

  return sliders;
};
