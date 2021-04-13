ContentPane.prototype.transitionOut = function() {
  const pane = this;

  pane.containerDiv
    .transition()
    .duration(500)
    .style("top",window.innerHeight + "px")
    .on("end",() => {
      pane.containerDiv
        .style("display","none")
        .html("");
    });

  return pane;
}
