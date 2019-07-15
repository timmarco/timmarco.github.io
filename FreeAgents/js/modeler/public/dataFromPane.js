/* jshint esversion:6 */
Modeler.prototype.dataFromPane = function(data) {
  const modeler = this;

  modeler.chart.projectionLine
    .attr("display","block");

  modeler.rightPane
    .attr("display","block");

  modeler.projectionParameters = data;

  modeler.calculateContractValues();

  // modeler.contractButton
  //   .hide();
  //
  // modeler.contractCostLabel
  //   .show();
  //
  // modeler.contractCostText
  //   .show();
  //
  // modeler.meanSurplusLabel
  //   .show();
  //
  // modeler.meanSurplusText
  //   .show();
  //
  // modeler.contractCostText
  //   .show();

  return modeler;
};
