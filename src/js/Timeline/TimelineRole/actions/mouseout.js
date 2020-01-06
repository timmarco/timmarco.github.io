TimelineRole.prototype.mouseout = function() {
  const role = this;

  return () => {
    role.backgroundRect.attr("fill","#984BA3");
  }

}
