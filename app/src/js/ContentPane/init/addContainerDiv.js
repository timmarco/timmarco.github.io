ContentPane.prototype.addContainerDiv = function() {
  const pane = this;
  return d3.select("body")
    .append("div")
    .classed("item-overlay",true);

}
