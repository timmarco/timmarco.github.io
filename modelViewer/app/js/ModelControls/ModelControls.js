function ModelControls(options) {
  const controls = this;
  init(options);
  return controls;

  function init(options) {
    controls.parent = options.parent;
    controls.layout = controls.defineLayout();
    controls.svg = controls.addSvg();
    controls.zoom = controls.addZoom();
  }
}
