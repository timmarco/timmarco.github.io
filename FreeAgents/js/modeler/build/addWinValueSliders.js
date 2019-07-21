/* jshint esversion:6 */
Modeler.prototype.addWinValueSliders = function (yearsToProject) {
  const modeler = this;

  let sliders = [];

  d3.range(0,16).forEach((year,index) => {
    let slider;

    if(index <= 8) {
      slider = new Slider({
        "where":modeler.rightPane,
        "size":{"height":25,"width":150},
        "margins":{"top":5,"bottom":5},
        "coordinates":{"x":505,"y":200 + index * 25},
        "label":2019 + index,
        "domain":[8,25],
        "significantDigits":2,
        "defaultValue":8,
        "leftLabel":true
        // "defaultValue":+modeler.projectionParameters.winValue[index].toFixed(2)
      }).setDragCallback((newValue) => {
        modeler.calculateContractValues();
      });

      sliders.push(slider);
    } else {
      slider = new Slider({
        "where":modeler.rightPane,
        "size":{"height":25,"width":150},
        "margins":{"top":5,"bottom":5},
        "coordinates":{"x":665,"y":200 + (index - 9) * 25},
        "label":2019 + index,
        "domain":[8,25],
        "significantDigits":2,
        "defaultValue":8,
        "leftLabel":true
        // "defaultValue":+modeler.projectionParameters.winValue[index].toFixed(2)
      }).setDragCallback((newValue) => {
        modeler.calculateContractValues();
      });

      sliders.push(slider);
    }
  });

  return sliders;
};
