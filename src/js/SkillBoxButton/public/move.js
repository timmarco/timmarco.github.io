SkillBoxButton.prototype.move = function(coordinates) {
  const button = this;

  button.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return button;
}
