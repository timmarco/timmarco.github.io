DetailsBox.prototype.addContentDiv = function() {
  const box = this;
  return box.containerDiv
    .append("div")
    .classed("details_content_div",true);
}
