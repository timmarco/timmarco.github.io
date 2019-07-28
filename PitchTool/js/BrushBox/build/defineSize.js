/* jshint esversion:6 */
BrushBox.prototype.defineSize = function(options) {
  const box = this;

  let size = defaulter(options.size,{});
  size.height = defaulter(size.height,100);
  size.width = defaulter(size.width,100);
  return size;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
}
