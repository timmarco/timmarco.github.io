DetailsBox.prototype.addSubtitleDiv = function() {
  const box = this;
  return box.contentDiv
    .append("div")
    .classed("details_subtitle",true);
}
