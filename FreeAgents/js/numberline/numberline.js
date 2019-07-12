/* jshint esversion:6 */

function Numberline(options) {
  let chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.options = options;

    chart.size = chart.defaultSize(options);
    chart.margins = chart.defaultMargins(options);
    chart.styles = chart.defaultStyles(options);
    chart.referencePoints = chart.defineReferencePoints();
    chart.svg = chart.addSvg(options.where);
    chart.layers = chart.addLayers(chart.svg);
    chart.scale = chart.defineScale(options);

    chart.backgroundCircleMouseover = () => {  };
    chart.backgroundCircleMouseout = () => {  };

    chart.handleBackgroundCircleMouseover = function(datum) { chart.backgroundCircleMouseover(d3.select(this),datum); };
    chart.handleBackgroundCircleMouseout = function(datum) { chart.backgroundCircleMouseout(d3.select(this),datum); };

  }


}
