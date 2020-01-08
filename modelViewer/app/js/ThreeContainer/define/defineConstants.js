ThreeContainer.prototype.defineConstants = function() {
  const container = this;
  const constants = {};

  // Dev / Prod Mode
  constants.IS_LOGGER_ENABLED = true;

  // Camera Setup
  constants.ASPECT_RATIO = constants.WIDTH / constants.HEIGHT;
  constants.CAMERA_START_X = 10;
  constants.CAMERA_START_Y = 1.5;
  constants.CAMERA_START_Z = -5;
  constants.NEAR = 0.001;
  constants.VIEW_ANGLE = 45;

  // Lighting and Views
  constants.PHYSICALLY_CORRECT_LIGHTS = true;
  constants.GAMMA_FACTOR = 2.2;
  constants.GAMMA_OUTPUT = true;
  constants.EXPOSURE = 1;
  constants.AMBIENT_LIGHT_INTENSITY = 1;
  constants.AMBIENT_LIGHT_COLOR = 0xffffff
  constants.DIRECT_LIGHT_INTENSITY = 1;
  constants.DIRECT_LIGHT_COLOR = 0xffffff;


  return constants;
}
