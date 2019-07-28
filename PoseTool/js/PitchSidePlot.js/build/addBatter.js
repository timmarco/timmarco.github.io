/* jshint esversion:6 */
PitchSidePlot.prototype.addBatter = function() {
  const plot = this;
  let image;
  image = plot.layers.batter
    .append("image")
    .attr("xlink:href","miniBatter.png")
    .attr("x",370)
    .attr("y",6)
    .attr("height",41)
    .attr("width",27)
    .attr("opacity",0.5);
};
