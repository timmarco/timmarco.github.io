/* jshint esversion:6 */
BrushBox.prototype.defineCoordinates = function(options) {
  const box = this;

  let coordinates = defaulter(options.coordinates,{});
  coordinates.x = defaulter(coordinates.x,0);
  coordinates.y = defaulter(coordinates.y,0);

  return coordinates;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};
