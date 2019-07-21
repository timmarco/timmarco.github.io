/* jshint esversion:6 */
WinChart.prototype.createLineGenerator = function() {
  const chart = this;

  let generator = d3.line()
      .x((d) => { return chart.scales.x(d);})
      .y((d,i) => { return chart.scales.y(i + 2019);});


  return generator;
}
