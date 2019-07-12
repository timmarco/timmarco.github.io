/* exported CartesianPlot */
function CartesianPlot(options) {
  let plot = this;

  init(options);

  return plot;

  function init(options) {
    plot.options = options;

    _required();
    _defaults();

    plot
      .addSvg()
      .addGridGroup()
      .addAxisGroup()
      .addFunctionGroup()
      .defineXScale()
      .defineYScale()
      .addXAxis()
      .addYAxis()
      .addGrids();

  }

  function _defaults() {

    plot
      .defaulter("width",500)
      .defaulter("height",500)
      .defaulter("range",[-10,10])
      .defaulter("domain",[-10,10])
      .defaulter("marginLeft",25)
      .defaulter("marginRight",25)
      .defaulter("marginTop",25)
      .defaulter("marginBottom",25)
      .defaulter("xAxisTicks",5)
      .defaulter("yAxisTicks",5)
      .defaulter("plottedFunctions",[])
      .defaulter("sampleResolution",1000);

  }

  function _required() {
    plot.where = plot.options.where;
  }



}
