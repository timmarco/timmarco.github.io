ThreeContainer.prototype.update = function() {
  const container = this;
  container.renderer.render(container.scene,container.camera);


  if(container.currentObject !== undefined){
    // container.currentObject.rotation.x += 0.01;
    // container.currentObject.rotation.y += 0.01;
  }

  requestAnimationFrame(() => { container.update() });
}
