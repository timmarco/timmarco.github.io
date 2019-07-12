/* jshint esversion:6 */
Button.prototype.defineSize = function(options) {
  const button = this;
  let size = defaulter(options.size,{});
  size.width = defaulter(size.width,100);
  size.height = defaulter(size.height,50);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue : defaultValue;
  }
};
