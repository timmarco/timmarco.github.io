/* jshint esversion:6 */
Minibar.prototype.addData = function(data) {
  const bar = this;

  bar.data = data;

  bar.scale
    .domain([0,bar.data.max]);

  bar.active
    .attr("width",bar.scale(data.value) - bar.scale(0));

  bar.line
    .attr("x1",bar.scale(data.value))
    .attr("x2",bar.scale(data.value));

  bar.valueLabelGhost
    .attr("x",bar.scale(data.value))
    .text(bar.valueFormatter(data.value));

  bar.valueLabel
    .attr("x",bar.scale(data.value))
    .text(bar.valueFormatter(data.value));

  return bar;
};
