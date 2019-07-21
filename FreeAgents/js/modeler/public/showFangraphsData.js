/* jshint esversion:6 */
Modeler.prototype.showFangraphsData = function() {
  const modeler = this;

  modeler.chart
    .showFangraphsData();

  if(modeler.projectionParameters) {
    modeler
      .calculateContractValues();
  }


  return modeler;
}
