SkillBoxButton.prototype.highlight = function() {
  const button = this;

  button.highlightLine
    .transition()
    .duration(250)
    .attr("x1",0)
    .attr("x2",button.getSize().width);

  return button;
}
