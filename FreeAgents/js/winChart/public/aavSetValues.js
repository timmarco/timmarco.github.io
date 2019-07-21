/* jshint esversion:6 */
WinChart.prototype.aavSetValues = function(aav) {
  const chart = this;

  let isIdentical = chart.data.every((value,index,array) => value === array[0]);

  if(isIdentical) {
    chart.data.forEach((datum,index) =>{
      chart.data[index] = aav;
    });
  } else {
    let currentTotal = 0;
    let newTotal = aav * chart.currentYears;
    let difference = 0;
    let annualDifference;

    chart.data.forEach((datum,index) => {
      if(index < chart.currentYears) {
        currentTotal += datum;
      }
    });

    difference = newTotal - currentTotal;
    annualDifference = difference / chart.currentYears;

    chart.data.forEach((datum,index) => {
      if(index < chart.currentYears) {
        chart.data[index] += annualDifference;
      } else {
        chart.data[index] = aav;
      }
    });

  }

  chart.circles
    .attr("transform",(d,i) => { return "translate("+chart.scales.x(chart.data[i])+","+chart.scales.y(2019 + i)+")"});

  chart.circles.each(function(d,i) {
    let element = d3.select(this);
    let text = element.select("text");
    let value = chart.data[i];

    text
      .text((d,i) => { return "$" + value.toFixed(2) + "MM"; });
  });

  let totalValue = 0;
  chart.data.forEach((datum,index) => {
    if(index < chart.currentYears) {
      totalValue += datum;
    }
  });

  chart.totalValueDisplay
    .text("$" + totalValue.toFixed(2) + "MM");
    
  chart
    .defineLineData(chart.currentYears);

  chart
    .changeCallback();
}
