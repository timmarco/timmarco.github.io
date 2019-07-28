/* jshint esversion:6 */
function PitchSmallPlot(options) {
  const plot = this;
  init(options);
  return plot;

  function init(options) {
    plot.where = options.where;
    plot.pitchData = options.pitchData;
    plot.layout = plot.defineLayout();

    plot.svg = plot.addSvg();
    plot.layers = plot.addLayers();
    plot.catcherView = plot.addCatcherView();
  }
}
