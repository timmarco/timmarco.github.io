/* jshint esversion:6 */
ModelSlider.prototype.defineFormatter = function(options) {
  const slider = this;

  let formatter = defaulter(options.formatter,(value) => { return value.toFixed(0); });

  return formatter;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}
