/* jshint esversion:6 */
ModelerPane.prototype.killAllGlows = function() {
  const modeler = this;

  modeler.contractSlider
    .killGlow();

  modeler.salarySliders.forEach((slider) =>{
    slider
      .killGlow();
  });

  modeler.winValueSliders.forEach((slider) => {
    slider
      .killGlow();
  });

  return modeler;
};
