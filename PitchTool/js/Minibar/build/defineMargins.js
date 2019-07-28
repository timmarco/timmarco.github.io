/* jshint esversion:6 */
Minibar.prototype.defineMargins = function(options) {
  const bar = this;

  let margins = defaulter(options.margins,{});
  margins.left = defaulter(margins.left,100);
  margins.right = defaulter(margins.right,50);
  margins.top = defaulter(margins.top,15);
  margins.bottom = defaulter(margins.bottom,10);

  return margins;

  function defaulter(s,v) {
    return s ? s : v;
  }

};
