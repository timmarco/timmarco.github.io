/* jshint esversion:6 */
ModelSlider.prototype.defineCoordinates = function(options) {
  const slider = this;

  let coordinates = defaulter(options.coordinates,{});
  coordinates.x = defaulter(coordinates.x,0);
  coordinates.y = defaulter(coordinates.y,0);

  return coordinates;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}
