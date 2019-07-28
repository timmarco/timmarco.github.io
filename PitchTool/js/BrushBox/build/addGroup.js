/* jshint esversion:6 */
BrushBox.prototype.addGroup = function() {
  const box = this;

  let group = box.where
    .append("g")
    .attr("transform","translate("+box.coordinates.x+","+box.coordinates.y+")")
    .attr("cursor","all-scroll")
    .call(box.drag);


  return group;
}
