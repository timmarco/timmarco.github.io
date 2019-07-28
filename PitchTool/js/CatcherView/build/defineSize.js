/* jshint esversion:6 */
CatcherView.prototype.defineSize = function(options) {
  const view = this;
  let size = defaulter(options.size,{});
  size.width = 500;
  size.height = 500;
  return size;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};
