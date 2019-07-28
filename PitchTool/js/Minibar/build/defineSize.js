/* jshint esversion:6 */
Minibar.prototype.defineSize = function(options) {
  const bar = this;

  let size = defaulter(options.size,{});
  size.height = defaulter(size.height,35);
  size.width = defaulter(size.width,300);

  return size;

  function defaulter(s,v) {
    return s ? s : v;
  }

};
