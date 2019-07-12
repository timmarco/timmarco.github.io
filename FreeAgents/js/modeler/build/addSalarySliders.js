/* jshint esversion:6 */
Modeler.prototype.addSalarySliders = function(yearsToProject) {
  const modeler = this;

  let sliders = [];

  d3.range(0,16).forEach((year,index) => {
    let slider;

    slider = new Slider({
      "where":modeler.layers.contract,
      "size":{"height":25,"width":100},
      "margins":{"top":5,"bottom":5},
      "coordinates":{"x":550,"y":125 + index * 25},
      "domain":[2,45],
      "significantDigits":2,
      "defaultValue":+modeler.projectionParameters.salary[index].toFixed(2)
    }).setDragCallback((newValue) => {
      modeler.calculateContractValues();
    });

    sliders.push(slider);

  });

  return sliders;
};
