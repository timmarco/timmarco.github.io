/* jshint esversion:6 */
BrushBoxCorner.prototype.addGroup = function() {
  const corner = this;

  let group = corner.parent.layers.corners
    .append("g")
    .attr("transform","translate("+corner.coordinates.x+","+corner.coordinates.y+")")
    .call(corner.drag)
    .on('mouseover',corner.groupMouseover())
    .on('mouseout',corner.groupMouseout());


  return group;
}
