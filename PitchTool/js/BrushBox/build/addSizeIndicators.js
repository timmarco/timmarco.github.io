/* jshint esversion:6 */
BrushBox.prototype.addSizeIndicators = function() {
  const box = this;

  let indicators = {};

  indicators.left = box.layers.hints
    .append("text")
    .attr("x",-5)
    .attr("y",box.size.height / 2)
    .attr("text-anchor","end")
    .attr("dominant-baseline","middle")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.height));

  indicators.right = box.layers.hints
    .append("text")
    .attr("x",box.size.width + 5)
    .attr("y",box.size.height / 2)
    .attr("text-anchor","start")
    .attr("dominant-baseline","start")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.height));

  indicators.top = box.layers.hints
    .append("text")
    .attr("x",box.size.width / 2)
    .attr("y",-5)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","baseline")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.width));

  indicators.bottom = box.layers.hints
    .append("text")
    .attr("x",box.size.width / 2)
    .attr("y",box.size.height + 5)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","hanging")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.width));


  return indicators;
}
