/* jshint esversion:6 */
BrushBox.prototype.defineCallbacks = function(options) {
  const box = this;
  let callbacks = defaulter(options.callbacks,{});

  callbacks.dragStart = defaulter(callbacks.dragStart,() => {  });
  callbacks.dragging = defaulter(callbacks.dragging,() => {  });
  callbacks.dragEnd = defaulter(callbacks.dragEnd,() => {  });
  callbacks.mouseover = defaulter(callbacks.mouseover,() => {  });
  callbacks.mouseout = defaulter(callbacks.mouseout,() => {  });
  callbacks.valueChanged = defaulter(callbacks.valueChanged,(attributes) => {  });

  return callbacks;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};
