function ThreeContainer(options) {
  const container = this;
  init(options);
  return container;

  function init(options) {
    container.parent = options.parent;
    container.constants = container.defineConstants();
    container.layout = container.defineLayout();
    container.loader = container.defineGltfLoader();

    container.scene = container.addScene();
    container.camera = container.addCamera();
    container.renderer = container.addRenderer();
    container.lights = container.addLights();
    container.empty = container.addEmpty();
    container.orbitControls = container.addOrbitControls();

    container.currentObject;

    container
      .update();

  }
}
