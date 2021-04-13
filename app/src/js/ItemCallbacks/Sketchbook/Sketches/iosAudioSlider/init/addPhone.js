IosAudioSlider.prototype.addPhone = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("x",50)
    .attr("y",-50)
    .attr("width",500)
    .attr("height",600)
    .attr("stroke-width",25)
    .attr("fill","none")
    .attr("stroke","black");
}
