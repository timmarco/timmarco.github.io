/* jshint esversion:6 */
WinChart.prototype.defineMargins = function(options) {
  const chart = this;

  let margins = defaulter(options.margins,{});
  margins.left = defaulter(margins.left,30);
  margins.right = defaulter(margins.right,10);
  margins.top = defaulter(margins.top,10);
  margins.bottom = defaulter(margins.bottom,30);

  return margins;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}
