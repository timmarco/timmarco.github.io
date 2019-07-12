/* jshint esversion:6 */
LineChart.prototype.addAxes = function() {
  const chart = this;

  let axes = {};
  axes.x = chart.addXAxis();
  axes.y = chart.addYAxis();

  return axes;
};
