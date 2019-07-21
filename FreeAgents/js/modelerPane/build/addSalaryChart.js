/* jshint esversion:6 */
ModelerPane.prototype.addSalaryChart = function() {
  const pane = this;


  let chart = new WinChart({
    "where":pane.salaryGroup,
    "domain":[2,40],
    "size":{
      "width":pane.referencePoints.overlayColumnWidth,
      "height":pane.referencePoints.topThird * 1.5
    },
    "data":pane.contractValues.salary
  }).updateYears(3).addAAVSlider();

  return chart;
}
