/* jshint esversion:6 */
WinChart.prototype.updateYears = function(years) {
  const chart = this;

  chart.currentYears = years;

  chart.scales.y
    .domain([2019,2018 + (+years)]);

  let yAxis = d3.axisLeft(chart.scales.y).tickValues(chart.scales.y.domain()).tickFormat((d) => { return d;});

  chart.axes.y
    .call(yAxis);

  chart.circles
    .attr("transform",(d,i) => { return "translate("+chart.scales.x(chart.data[i])+","+chart.scales.y(2019 + i)+")" ;})
    .attr("display",function(datum,index) {
      if(index +1 <= years) { return "block"; }
      return "none";
    });

  chart
    .defineLineData(years);

  chart
    .updateAAVFromYears();

  return chart;
}
