/* jshint esversion:6 */
LineChart.prototype.createAreaGenerator = function() {
  const chart = this;
  let generator;

  generator = d3.area()
    .x((d) => { return chart.scales.x(d.age); })
    .y0((d) => { return chart.scales.y(d.top25);})
    .y1((d) => { return chart.scales.y(d.bottom25);});

  return generator;
};
