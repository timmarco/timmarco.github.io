/* jshint esversion:6 */
Slider.prototype.defineDragFunctions = function() {
  const slider = this;

  let dragFunctions = {};

  dragFunctions.start = function(d,i) {
    let element = d3.select(this);
    slider.dragLock = true;
  };

  dragFunctions.drag = function(d,i) {
    let element = d3.select(this);
    let xPosition = d3.event.x;

    if(xPosition >= slider.referencePoints.trackMin && xPosition <= slider.referencePoints.trackMax) {
      let newValue;
      newValue = slider.scale.invert(xPosition);

      slider.currentValue = newValue;

      slider.valueLabel
        .updateText(newValue.toFixed(slider.significantDigits));

      slider.dragCallback(newValue);

      element
        .attr("cx",xPosition);
    }
  };


  dragFunctions.end = function(d,i) {
    slider.dragLock = false;

    let element = d3.select(this);

    element
      .transition()
      .duration(125)
      .attr("fill",slider.styles.circleFill)
      .attr("stroke",slider.styles.circleStroke)
      .attr("stroke-width",slider.styles.circleStrokeWidth)
      .attr("radius",slider.styles.circleRadius);

  };

  return dragFunctions;
};
