IosAudioSlider.prototype.addSliderGroup = function() {
  const slider = this;
  return slider.sketch.svg
    .append("g")
    .attr("transform","translate(-10,0)")
    .attr("clip-path","url(#screenClip)");
}
