/* jshint esversion:6 */
ModelSlider.prototype.addHeading = function(labelText) {
  const slider = this;

  let heading;

  header = slider.group
    .append("text")
    .attr("x",slider.margins.left)
    .attr("y",-10)
    .attr("font-size","8pt")
    .attr("text-anchor","start")
    .text(labelText)

  return heading;
}
