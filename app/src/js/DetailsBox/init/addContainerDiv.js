DetailsBox.prototype.addContainerDiv = function() {
  const box = this;
  return d3.select("body")
    .append("div")
    .classed("details_box",true)
}
