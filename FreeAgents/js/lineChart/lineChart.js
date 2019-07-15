/* jshint esversion:6 */
function LineChart(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.where = options.where;
    chart.size = options.size;
    chart.margins = options.margins;
    chart.origin = options.origin;

    chart.styles = chart.defineStyles();
    chart.layers = chart.addLayers();
    chart.referencePoints = chart.defineReferencePoints();

    chart.yAxisTitle = chart.addYAxisTitle();
    chart.xAxisTitle = chart.addXAxisTitle();

    chart.scales = chart.defineScales();

    chart.axes = chart.addAxes();

    chart.lineGenerator = chart.createLineGenerator();
    chart.areaGenerator = chart.createAreaGenerator();

    chart.zeroLine = chart.addZeroLine();
    chart.starterLine = chart.addStarterLine();
    chart.allStarLine = chart.addAllStarLine();
    chart.mvpLine = chart.addMVPLine();

    chart.currentWARType = "bWar";

  }



}
