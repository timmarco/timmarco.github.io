Headline.prototype.addCurtainGroup = function() {
  const headline = this;
  const group = headline.svg
    .append("g")
    .attr("transform","translate(0,0)");

  return group;    
}
