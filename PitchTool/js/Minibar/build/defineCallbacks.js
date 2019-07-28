/* jshint esversion:6 */
Minibar.prototype.defineCallbacks = function(options) {
  const bar = this;

  let callbacks = defaulter(options.callbacks,{});
  callbacks.mouseover = defaulter(callbacks.mouseover,() => {});
  callbacks.mouseout = defaulter(callbacks.mouseout,() => {});

  return callbacks;

  function defaulter(s,v) {
    return s ? s : v;
  }
};
