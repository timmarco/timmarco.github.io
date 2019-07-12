/* jshint esversion:6 */
Slider.prototype.addSlidingCircle = function() {
  const slider = this;

  let circle = slider.layers.circle
    .append("circle")
    .attr("cx",slider.scale(slider.currentValue))
    .attr("cy",slider.referencePoints.circleCenterY)
    .attr("r",slider.styles.circleRadius)
    .attr("fill",slider.styles.circleFill)
    .attr("stroke",slider.styles.circleStroke)
    .attr("stroke-width",slider.styles.circleStrokeWidth)
    .attr("cursor","pointer")
    .call(d3.drag().on("start",slider.dragFunctions.start).on("drag",slider.dragFunctions.drag).on("end",slider.dragFunctions.end))
    .on('mouseover',function() {
      let element = d3.select(this);

      element
        .transition()
        .duration(125)
        .attr("fill",slider.styles.highlightFillColor)
        .attr("stroke",slider.styles.highlightStrokeColor)
        .attr("stroke-width",slider.styles.highlightFillStrokeWidth)
        .attr("radius",slider.styles.highlightCircleRadius);

      slider
        .circleMouseover();
    })
    .on('mouseout',function() {
      let element = d3.select(this);

      if(!slider.dragLock) {
        element
          .transition()
          .duration(125)
          .attr("fill",slider.styles.circleFill)
          .attr("stroke",slider.styles.circleStroke)
          .attr("stroke-width",slider.styles.circleStrokeWidth)
          .attr("radius",slider.styles.circleRadius);
      }

      slider
        .circleMouseout();


    });

  return circle;
};
