ThreeContainer.prototype.addRenderer = function() {
  const container = this;

  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(container.layout.size.width,container.layout.size.height);
  renderer.gammaFactor = container.constants.GAMMA_FACTOR;
  renderer.gammaOutput = container.constants.GAMMA_OUTPUT;
  renderer.exposure = container.constants.EXPOSURE;
  renderer.physicallyCorrectLights = container.constants.PHYSICALLY_CORRECT_LIGHTS;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xcccccc );

  const canvas = document.querySelector("#threeContainer")
    .appendChild(renderer.domElement);

  canvas.style.position = "absolute";
  canvas.style.left = 0;
  canvas.style.top = container.layout.size.height;


  return renderer;
}
