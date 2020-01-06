function ScrollManager(options) {
  const manager = this;
  init(options);
  return manager;

  function init(options) {
    manager.parent = options.parent;

    manager.attachResizeListener();
    manager.scrollOffset = manager.defineOffset();
    manager.triggerPoints = manager.defineTriggerPoints();
    manager.scrollEvents = manager.defineEvents();
    manager.attachScrollListener();

  }
}
