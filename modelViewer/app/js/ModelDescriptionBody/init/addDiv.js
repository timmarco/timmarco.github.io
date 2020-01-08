ModelDescriptionBody.prototype.addDiv = function() {
  const body = this;
  const div = body.htmlBody
    .append("div")
    .style("padding-left","0.5em")
    .style("padding-right","0.5em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("border-left","1px solid orange")
    .html(body.text);

  return div;
}
