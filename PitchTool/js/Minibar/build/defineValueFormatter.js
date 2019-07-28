/* jshint esversion:6 */
Minibar.prototype.defineValueFormatter = function(options) {
  const bar = this;
  let formatter = defaulter(options.valueFormatter,(v) => { return v.toFixed(0); });
  return formatter;

  function defaulter(s,v) {
    return s ? s : v;
  }
}
