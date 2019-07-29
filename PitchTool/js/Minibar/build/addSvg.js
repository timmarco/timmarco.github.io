/* jshint esversion:6 */
Minibar.prototype.addSvg = function() {
  const bar = this;

  let svg = bar.where
    .append("svg")
    .attr("width",bar.size.width)
    .attr("height",bar.size.height)
    .attr("cursor","pointer")
    .on('mouseover',function() {
      bar.labels.left
        .attr("font-weight","bold");

      bar.callbacks
        .mouseover();
    })
    .on('mouseout',function() {
      bar.labels.left
        .attr("font-weight","normal");

      bar.callbacks
        .mouseout();
    });

  return svg;
};
