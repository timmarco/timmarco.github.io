/* jshint esversion:6 */
Modeler.prototype.addWinChart = function() {
  const modeler = this;

  let chart = new WinChart({
    "where":modeler.winChartGroup,
    "domain":[2,40],
    "data":modeler.projectionParameters.winValue
  });

  chart.changeCallback = function() {

    modeler.projectionParameters.winValue = chart.data;
    modeler
      .calculateContractValues();

  }


  return chart;
}
