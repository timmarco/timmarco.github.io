/* jshint esversion:6 */
BrushBox.prototype.addGroundIndicators = function() {
  const box = this;

  let indicators = this;

  indicators.line = box.layers.hints
    .append("line")
    .attr("x1",box.size.width / 2)
    .attr("x2",box.size.width / 2)
    .attr("y1",0)
    .attr("y2",1000)
    .attr("stroke",box.styles.groundIndicator.stroke)
    .attr("stroke-width",0)
    .attr("stroke-dasharray",box.styles.groundIndicator.strokeDashArray);

  indicators.bottomCircle = box.layers.hints
    .append("circle")
    .attr("cx",box.size.width / 2)
    .attr("cy",box.size.height)
    .attr("r",0)
    .attr("stroke",box.styles.groundIndicator.circleStroke)
    .attr("stroke-width",box.styles.groundIndicator.circleStrokeWidth)
    .attr("fill",box.styles.groundIndicator.circleFill);

  indicators.bottomText = box.layers.hints
    .append("text")
    .attr("x",box.size.width/2 + 5)
    .attr("y",box.size.height + 5)
    .attr("text-anchor","start")
    .attr("dominant-baseline","hanging")
    .attr("fill",box.styles.groundIndicator.fontFill)
    .attr("font-size",box.styles.groundIndicator.fontSize)
    .attr("font-family",box.styles.groundIndicator.fontFamily);

  indicators.topCircle = box.layers.hints
    .append("circle")
    .attr("cx",box.size.width / 2)
    .attr("cy",0)
    .attr("r",0)
    .attr("stroke",box.styles.groundIndicator.circleStroke)
    .attr("stroke-width",box.styles.groundIndicator.circleStrokeWidth)
    .attr("fill",box.styles.groundIndicator.circleFill);

  indicators.topText = box.layers.hints
    .append("text")
    .attr("x",box.size.width / 2 + 5)
    .attr("y",-5)
    .attr("text-anchor","start")
    .attr("dominant-baseline","baseline")
    .attr("fill",box.styles.groundIndicator.fontFill)
    .attr("font-size",box.styles.groundIndicator.fontSize)
    .attr("font-family",box.styles.groundIndicator.fontFamily);


  return indicators;
}
