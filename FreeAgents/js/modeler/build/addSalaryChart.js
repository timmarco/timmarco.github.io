/* jshint esversion:6 */
Modeler.prototype.addSalaryChart = function() {
  const modeler = this;

  let chart = new WinChart({
    "where":modeler.salaryChartGroup,
    "domain":[2,40],
    "data":modeler.projectionParameters.salary,
    "callbacks":{
      "groupMouseover":(d,i) => { console.log(d); console.log("GROUP MOUSEOVER"); }
    }
  }).addAAVSlider();

  chart.changeCallback = function() {
    modeler.projectionParameters.aav = chart.aavSlider.currentValue;
    modeler.projectionParameters.salary = chart.data;
    modeler
      .calculateContractValues();
  };


  return chart;
};
