/* jshint esversion:6 */
BrushBox.prototype.defineSizeFormatter = function(options) {
  const box = this;

  let formatter = defaulter(options.sizeFormatter,(v) => { return v.toFixed(1); });

  return formatter;

  function defaulter(s,v) {
    return s ? s : v;
  }
}
