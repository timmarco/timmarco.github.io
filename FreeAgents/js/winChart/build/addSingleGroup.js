/* jshint esversion:6 */
WinChart.prototype.addSingleGroup = function() {
  const chart = this;

  let group = chart.group
    .append("g");

  return group;
}
