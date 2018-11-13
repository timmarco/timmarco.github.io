function display_steps(step,start,stop) {
  d3.select(step)
    .transition()
    .delay(start)
    .attr("style","font-weight:bold")
    .transition()
    .delay(start+stop)
    .attr("style","font-weight:normal");
}
