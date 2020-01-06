function LineChart(options) {
  const chart = this;
  init(options);
  return chart;

  function init(options) {
    chart.where = options.where;
    chart.container = chart.addContainer();
    chart.svg = chart.addSvg();
    chart.axes = chart.addAxes();
    chart.labels = chart.addLabels();
    chart.grid = chart.addGrid();
    chart.line = chart.addLine();
  }
}
