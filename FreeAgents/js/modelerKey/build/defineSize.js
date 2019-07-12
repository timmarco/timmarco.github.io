/* jshint esversion:6 */
ModelerKey.prototype.defineSize = function(options) {
  const key = this;
  let size = defaulter(options.size,{});

  size.height = defaulter(size.height,20);
  size.width = defaulter(size.width,525);

  return size;

  function defaulter(value,defaultValue) {
    return value === undefined ? defaultValue : value;
  }
};
