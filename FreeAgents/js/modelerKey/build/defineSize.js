/* jshint esversion:6 */
ModelerKey.prototype.defineSize = function(options) {
  const key = this;
  let size = defaulter(options.size,{});

  size.height = defaulter(size.height,50);
  size.width = defaulter(size.width,433.33);

  return size;

  function defaulter(value,defaultValue) {
    return value === undefined ? defaultValue : value;
  }
};
