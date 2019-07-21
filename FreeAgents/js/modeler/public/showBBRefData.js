/* jshint esversion:6 */
Modeler.prototype.showBBRefData = function() {
  const modeler = this;

  modeler.chart
    .showBBRefData();

  if(modeler.projectionParameters) {
    modeler
      .calculateContractValues();
  }

  return modeler;
}
