/* jshint esversion:6 */
BrushBoxCorner.prototype.defineCallbacks = function(options) {
  const corner = this;

  let callbacks = defaulter(options.callbacks,{});
  callbacks.checkBounds = defaulter(callbacks.checkBounds,() =>{  });
  callbacks.moved = defaulter(callbacks.moved,() => {  });
  callbacks.mouseover = defaulter(callbacks.mouseover,() => { });
  callbacks.mouseout = defaulter(callbacks.mouseout,() => { });

  return callbacks;

  function defaulter(s,v) {
    return s ? s : v;
  }
}
