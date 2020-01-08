ModelViewer.prototype.addThreeContainer = function() {
  const viewer = this;
  const container = new ThreeContainer({"parent":viewer});
  return container;
}
