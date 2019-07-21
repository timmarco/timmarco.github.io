/* jshint esversion:6 */
function Slider(options) {
  const slider = this;

  init(options);

  return slider;

  function init(options) {
    slider.labelText = options.label;
    slider.significantDigits = slider.defaulter(options.significantDigits,2);
    slider.domain = slider.defaulter(options.domain,[0,1]);
    slider.currentValue = slider.defaulter(options.defaultValue,1);
    slider.dragLock = false;

    slider.dragCallback = () => { };

    slider.group = slider.addGroup(options.where);
    slider.layers = slider.addLayers();
    slider.size = slider.defineSize(options.size);
    slider.margins = slider.defineMargins(options.margins);
    slider.layout = slider.defineLayout(options.layout);
    slider.styles = slider.defineStyles();
    slider.referencePoints = slider.defineReferencePoints(options.leftLabel);


    slider.scale = slider.defineScale();

    slider.datum = {"name":"","value":slider.currentValue};

    slider.label = slider.addLabel();
    slider.track = slider.addSliderTrack();
    slider.valueLabel = slider.addValueLabel();

    slider.move(options.coordinates);

    slider.dragFunctions = slider.defineDragFunctions();
    slider.circle = slider.addSlidingCircle();
    slider.glowCircle = slider.addGlowCircle();

    slider.circleMouseover = () => {};
    slider.circleMouseout = () => {};


  }
}
