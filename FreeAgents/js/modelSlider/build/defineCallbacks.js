/* jshint esversion:6 */
ModelSlider.prototype.defineCallbacks = function(options) {
  const slider = this;

  callbacks = defaulter(options.callbacks,{});
  callbacks.groupMouseover = defaulter(callbacks.groupMouseover,() => {});
  callbacks.groupMouseout = defaulter(callbacks.groupMouseout,() => {});
  callbacks.circleGroupMouseover = defaulter(callbacks.circleGroupMouseover,() => {});
  callbacks.circleGroupMouseout = defaulter(callbacks.circleGroupMouseout,() => {});
  callbacks.dragStart = defaulter(callbacks.dragStart,() => {});
  callbacks.dragEnd = defaulter(callbacks.dragEnd,() => {});
  callbacks.change = defaulter(callbacks.change,() => {});

  return callbacks;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}
