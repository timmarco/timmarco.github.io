RadialGroup.prototype.reset = function() {
  const radial = this;
  return () => {
    if(radial.state !== "active") { return }
    radial.state = "transitionOut";

    radial.wedges
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",() => {
        radial.state = "active";
      });
  }
}
