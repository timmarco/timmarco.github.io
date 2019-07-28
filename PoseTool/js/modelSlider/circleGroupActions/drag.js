/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDrag = function(d,i) {
  const slider = this;

  return function() {
    let xPosition,
      xValue;

    xPosition = d3.event.x;
    xValue = slider.scale.invert(xPosition);
    xValue = xValue < slider.domain[0] ? slider.domain[0] : xValue;
    xValue = xValue > slider.domain[1] ? slider.domain[1] : xValue;

    slider.circleGroup
      .attr("transform","translate("+slider.scale(xValue)+",0)");

    slider.activeTrack
      .attr("width",slider.scale(xValue) - slider.referencePoints.xMin);

    slider.labelGhost
      .text(slider.formatter(xValue));

    slider.labelText
      .text(slider.formatter(xValue));

    slider.callbacks
      .change(xValue);

    slider.currentValue = xValue;

  }
}
