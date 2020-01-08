ThreeContainer.prototype.addLights = function() {
  const container = this;
  const lights = {};


  lights.key = new THREE.SpotLight(0xffffff);
  lights.key.position.set(0,5,0);
  lights.key.castShadow = true;
  lights.key.power = 50;

  lights.fill = new THREE.SpotLight(0xffffff);
  lights.fill.position.set(5,0,-2);
  lights.fill.castShadow = true;
  lights.fill.power = 50;

  container.scene.add(lights.key);
  container.scene.add(lights.fill);

  return lights;
}
