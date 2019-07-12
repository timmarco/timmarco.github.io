/* jshint esversion:6 */
Button.prototype.addGroup = function(where) {
  const button = this;
  let group;

  group = where
    .append("g")
    .attr("cursor","pointer")
    .on('mouseover',function() { button.mouseover(); })
    .on('mouseout',function() { button.mouseout(); })
    .on('click',function() { button.mouseclick(); });

  return group;
};
