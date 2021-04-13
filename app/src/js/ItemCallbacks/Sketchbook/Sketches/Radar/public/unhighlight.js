RadarSketch.prototype.unhighlight = function() {
  const radar = this;
  return () => {
    radar.rotateGroup
      .interrupt();

    radar.bogeyGroup
      .selectAll("circle")
      .remove();

    radar.rotateGroup
      .attr("transform","rotate(0)");

    radar.bogeys = radar.addBogeys();
  }
}
