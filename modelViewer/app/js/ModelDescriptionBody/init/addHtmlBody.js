ModelDescriptionBody.prototype.addHtmlBody = function() {
  const body = this;
  const htmlBody = body.foreignObject
    .append("xhtml:body")
    .append("xhtml:body")
    .style("width","100%")
    .style("height","100%")
    .style("margin",0)
    .style("padding",0);

  return htmlBody;
}
