/* jshint esversion:6 */
function LineChart(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.where = options.where;
    chart.size = options.size;
    chart.margins = options.margins;

    chart.styles = chart.defineStyles();
    chart.layers = chart.addLayers();
    chart.referencePoints = chart.defineReferencePoints();

    chart.title = chart.addTitle();
    chart.yAxisTitle = chart.addYAxisTitle();
    chart.xAxisTitle = chart.addXAxisTitle();

    chart.scales = chart.defineScales();

    chart.axes = chart.addAxes();

    chart.lineGenerator = chart.createLineGenerator();
    chart.areaGenerator = chart.createAreaGenerator();

    chart.projectionLine = chart.addProjectionLine();
    chart.zeroLine = chart.addZeroLine();
    chart.starterLine = chart.addStarterLine();
    chart.allStarLine = chart.addAllStarLine();
    chart.mvpLine = chart.addMVPLine();

  }



}
