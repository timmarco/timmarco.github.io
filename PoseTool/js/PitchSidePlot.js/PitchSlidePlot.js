/* jshint esversion:6 */
function PitchSidePlot(options) {
  const plot = this;
  init(options);
  return plot;

  function init(options) {
    plot.where = options.where;
    plot.pitchData = options.pitchData;

    plot.svg = plot.addSvg();
    plot.layout = plot.defineLayout();
    plot.layers = plot.addLayers();

    plot.batter = plot.addBatter();
    plot.addVisuals();
  }
}
