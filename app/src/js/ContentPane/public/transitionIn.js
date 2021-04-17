ContentPane.prototype.transitionIn = function(item,instantaneous) {
  const pane = this;

  const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;
  const itemHeight = item.getActiveHeight();
  const paneTop = navbarHeight + itemHeight;
  const paneHeight = window.innerHeight - paneTop;

  pane.containerDiv
    .style("display",'block')
    .style("height",paneHeight + "px");

  pane.containerDiv.node().scrollTop = "0px";

  pane.containerDiv
    .transition()
    .duration(() => { if(instantaneous === true) { return 0;} return 250})
    .ease(d3.easeQuadIn)
    .style("top",paneTop + "px")
    .on("end",() => { item.manifest.loadCallback(pane.parent) })

  const baseUrl =  window.location.href;
  window.location.href = baseUrl.replace(/#(.*)$/, '') + '#' + item.manifest.route;


  if(item.manifest.callback) {
    pane.activeItem = item.manifest
      .callback(pane.containerDiv);
  }


  return pane;
}
