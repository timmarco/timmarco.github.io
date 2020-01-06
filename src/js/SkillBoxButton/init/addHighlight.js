SkillBoxButton.prototype.addHighlight = function() {
  const button = this;

  const highlight = button.group
    .append("line")
    .attr("stroke-width",5)
    .attr("stroke","#984BA3");

  return highlight;
}
