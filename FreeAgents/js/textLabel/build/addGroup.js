/* jshint esversion:6 */
TextLabel.prototype.addGroup = function(where) {
  const label = this;
  let group;

  group = where
    .append("g")
    .style("display","none")
    .attr("cursor","pointer");

  return group;
};
