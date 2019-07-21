/* jshint esversion:6 */
function WinChart(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.data = options.data;
    chart.domain = options.domain;
    chart.changeCallback = (() => { });

    chart.styles = chart.defineStyles(options);
    chart.size = chart.defineSize(options);
    chart.margins = chart.defineMargins(options);

    chart.referencePoints = chart.defineReferencePoints();
    chart.scales = chart.defineScales();
    chart.lineGenerator = chart.createLineGenerator();

    chart.group = chart.addGroup(options.where);
    chart.layers = chart.addLayers();

    chart.axes = chart.addAxes();
    chart.line = chart.addLine();
    chart.circles = chart.addCircles();

    chart.yearHighlight = chart.addYearHighlight();

    chart.dragLock = false;

  }
}
