DetailsBox.prototype.addDateDiv = function() {
  const box = this;
  return box.contentDiv
    .append("div")
    .classed("details_date",true);
}
