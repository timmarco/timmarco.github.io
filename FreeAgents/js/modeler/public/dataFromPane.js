/* jshint esversion:6 */
Modeler.prototype.dataFromPane = function(data) {
  const modeler = this;

  modeler.chart.projectionLine
    .attr("display","block");

  modeler.rightPane
    .attr("display","block");

  modeler.projectionParameters = data;

  modeler.contractYearsSlider.updateValue(modeler.projectionParameters.contractLength);

  modeler.calculateContractValues();

  modeler.salaryChart = modeler.addSalaryChart()
    .updateYears(modeler.projectionParameters.contractLength);

  modeler.winChart = modeler.addWinChart()
    .updateYears(modeler.projectionParameters.contractLength);

  return modeler;
};
