SkillBoxButton.prototype.addText = function(textString) {
  const button = this;

  const text = button.group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-family","Oswald")
    .attr("font-weight",400)
    .attr("font-size","1.25em")
    .attr("fill","white")
    .text(textString);

  return text;
}
