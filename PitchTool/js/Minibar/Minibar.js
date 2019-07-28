/* jshint esversion:6 */
function Minibar(options) {
  const bar = this;
  init(options);
  return bar;

  function init(options) {

    bar.where = options.where;

    bar.styles = bar.defineStyles(options);
    bar.size = bar.defineSize(options);
    bar.margins = bar.defineMargins(options);
    bar.valueFormatter = bar.defineValueFormatter(options);

    bar.referencePoints = bar.defineReferencePoints();
    bar.scale = bar.defineScales();
    bar.callbacks = bar.defineCallbacks(options);

    bar.svg = bar.addSvg();

    bar.layers = bar.addLayers();

    bar.track = bar.addTrack();
    bar.active = bar.addActive();
    bar.line = bar.addLine();
    bar.labels = bar.addLabels(options);
    bar.valueLabelGhost = bar.addValueLabelGhost();
    bar.valueLabel = bar.addValueLabel();
    // bar.title = bar.addTitle(options);

  }
}
