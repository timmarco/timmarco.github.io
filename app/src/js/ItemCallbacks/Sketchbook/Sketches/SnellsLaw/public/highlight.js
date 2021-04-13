SnellsLaw.prototype.highlight = function() {
  const snells = this;

  return () => {
    snells.source
      .transition()
      .duration(1000)
      .ease(d3.easeBackOut.overshoot(6))
      .attr("r",8);

    const incidentLength = snells.incidentRay
      .node()
      .getTotalLength();

    snells.incidentRay
      .attr("stroke-dashoffset",incidentLength)
      .transition()
      .duration(50000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset",0);

    const refractedLength = snells.refractedRay
      .node()
      .getTotalLength();

    snells.refractedRay
      .attr("stroke-dashoffset",refractedLength)
      .transition()
      .duration(50000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset",0);

  }
}
