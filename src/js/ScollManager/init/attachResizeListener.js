ScrollManager.prototype.attachResizeListener = function() {
  const manager = this;

  window.addEventListener("resize",function() {
    manager.parent.examples.forEach((example) => {
      example.resize();
    });
  });
}
