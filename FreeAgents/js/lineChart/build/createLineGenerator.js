/* jshint esversion:6 */
LineChart.prototype.createLineGenerator = function() {
  const chart = this;
  let generator;

  generator = d3.line()
    .x((d) => { return chart.scales.x(d.age);})
    .y((d) => { return chart.scales.y(d[chart.currentWARType]);});

  return generator;
};
