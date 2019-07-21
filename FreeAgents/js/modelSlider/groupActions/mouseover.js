/* jshint esversion:6 */
ModelSlider.prototype.groupMouseover = function(d,i) {
  const slider = this;

  return function() {

    slider.callbacks
      .groupMouseover();

  }
}
