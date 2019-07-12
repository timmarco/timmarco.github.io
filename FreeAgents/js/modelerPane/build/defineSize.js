/* jshint esversion:6 */
ModelerPane.prototype.defineSize = function(options) {
  const pane = this;
  let size = defaulter(options.size,{});

  size.height = defaulter(size.height,500);
  size.width = defaulter(size.width,800);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};
