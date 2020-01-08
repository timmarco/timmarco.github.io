ThreeContainer.prototype.addOrbitControls = function() {
  const container = this;
  const controls = new THREE.OrbitControls(container.camera,container.renderer.domElement);

  controls.addEventListener("change",function() {
    const rotation = {};
    rotation.x = container.camera.rotation.x;
    rotation.y = container.camera.rotation.y;
    rotation.z = container.camera.rotation.z;
    // console.log(JSON.stringify(container.camera.position));
    // console.log(JSON.stringify(container.camera.rotation));

  });

  return controls;
}
