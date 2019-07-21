/* jshint esversion:6 */
WinChart.prototype.groupDrag = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);
    let yPosition = chart.scales.y(index + 2019);
    let xPosition = d3.event.x;
    let xValue = chart.scales.x.invert(xPosition);

    if(xValue <= chart.domain[0]) {
      xValue = chart.domain[0];
      xPosition = chart.referencePoints.xMin;
    }

    if(xValue >= chart.domain[1]) {
      xValue = chart.domain[1];
      xPosition = chart.referencePoints.xMax;
    }

    element
      .attr("transform","translate("+xPosition+","+yPosition+")");

    element.select("text")
      .text("$" + xValue.toFixed(2) + "MM");

    chart.data[index] = xValue;

    chart
      .defineLineData(chart.currentYears);

    chart
      .updateAAVFromYears();

    chart
      .changeCallback();


  }
};
