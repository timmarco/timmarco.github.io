/* jshint esversion:6 */
WinChart.prototype.defineLineData = function(years) {
  const chart = this;
  let data = [];

  chart.data.forEach((datum,index) => {
    if(index < years) {
      data.push(datum);
    }
  });

  chart.line
    .datum(data)
    .attr("d",chart.lineGenerator);

  return data;
}
