RadialGroup.prototype.growPreview = function() {
  const radial = this;
  return () => {
    if(radial.state !== "inactive") { return }
    radial.state = "activating";

    radial.wedges
      .transition()
      .duration(500)
      .delay((index) => { return 50 * index})
      .ease(d3.easeBackOut.overshoot(10))
      .attr("d",(index) => {
        const startAngle = index * Math.PI / 5;
        const endAngle = startAngle + Math.PI / 5;
        return d3.arc()
          .innerRadius(radial.radius)
          .outerRadius(radial.outerRadius)
          .startAngle(startAngle)
          .endAngle(endAngle)();
      })
      .on("end",(index) => {
        if(index == 9) {
          radial.state = "active";
        }
      });
  }
}
