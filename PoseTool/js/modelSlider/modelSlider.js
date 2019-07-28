/* jshint esversion:6 */
function ModelSlider(options) {
  const slider = this;

  init(options);


  return slider;

  function init(options) {
    slider.domain = options.domain;
    slider.currentValue = options.domain[0];

    slider.callbacks = slider.defineCallbacks(options);
    slider.formatter = slider.defineFormatter(options);
    slider.coordinates = slider.defineCoordinates(options);
    slider.size = slider.defineSize(options);
    slider.margins = slider.defineMargins(options);
    slider.styles = slider.defineStyles(options);

    slider.referencePoints = slider.defineReferencePoints();
    slider.scale = slider.defineScale(options.domain);

    slider.group = slider.addGroup(options.where);
    slider.layers = slider.addLayers();

    slider.track = slider.addTrack();
    slider.activeTrack = slider.addActiveTrack();
    slider.circleGroup = slider.addCircleGroup();
    slider.highlightCircle = slider.addHighlightCircle();
    slider.circle = slider.addCircle();
    slider.labelGhost = slider.addTextGhost();
    slider.labelText = slider.addTextLabel();
    slider.heading = slider.addHeading(options.labelText);

    slider.updateValue(slider.currentValue);

    slider.dragLock = false;

  }
}
