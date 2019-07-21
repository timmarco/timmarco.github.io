/* jshint esversion:6 */
WinChart.prototype.defineSize = function(options) {
  const chart = this;

  let size = defaulter(options.size,{})

  size.width = defaulter(size.width,200);
  size.height = defaulter(size.height,200);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}
