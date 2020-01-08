ModelThumbnail.prototype.addHeadlineText = function(where,text) {
  const thumbnail = this;

  const headline = where
    .append("text")
    .attr("fill","white")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","1em")
    .attr("font-family","Oswald")
    .attr("font-weight",500)
    .text(text);

  return headline;
}
