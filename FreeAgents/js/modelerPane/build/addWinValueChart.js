/* jshint esversion:6 */
ModelerPane.prototype.addWinValueChart = function() {
  const pane = this;

  let chart = new WinChart({
    "where":pane.winValueGroup,
    "domain":[8,30],
    "size":{
      "width":pane.referencePoints.overlayColumnWidth,
      "height":pane.referencePoints.topThird * 1.5
    },
    "data":pane.contractValues.winValue
  }).updateYears(3);

  return chart;
}
