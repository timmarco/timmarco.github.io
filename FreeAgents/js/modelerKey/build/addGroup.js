/* jshint esversion:6 */
ModelerKey.prototype.addGroup = function(where) {
  const key = this;
  let group;

  group = where
    .append("g")
    .attr("transform","translate("+key.position.x+","+key.position.y+")");

  return group;
};
