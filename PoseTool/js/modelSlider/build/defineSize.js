/* jshint esversion:6 */
ModelSlider.prototype.defineSize = function(options) {
  const slider = this;

  let size = defaulter(options.size,{});
  size.width = defaulter(size.width,200);
  size.height = defaulter(size.height,20);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}
