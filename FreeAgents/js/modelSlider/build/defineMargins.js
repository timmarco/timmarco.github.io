/* jshint esversion:6 */
ModelSlider.prototype.defineMargins = function(options) {
  const slider = this;

  let margins = defaulter(options.margins,{});
  margins.left = defaulter(margins.left,10);
  margins.right = defaulter(margins.right,10);
  margins.top = defaulter(margins.top,10);
  margins.bottom = defaulter(margins.bottom,10);

  return margins;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }

}
