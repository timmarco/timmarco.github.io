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

  let salarySize = modeler.salaryButton
    .select("text")
    .node()
    .getBBox();

  modeler.salaryButton
    .select("rect")
    .attr("width",salarySize.width * 1.25)
    .attr("height",salarySize.height * 1.1)
    .attr("x",-5)
    .attr("y",-10)
    .attr("fill","#ed553b");

  let winButtonSize = modeler.winValueButton
    .select("text")
    .node()
    .getBBox();

  modeler.winValueButton
    .select("rect")
    .attr("width",winButtonSize.width * 1.1)
    .attr("height",winButtonSize.height * 1.1)
    .attr("x",-5)
    .attr("y",-10)
    .attr("fill","white");

  return modeler;
};
