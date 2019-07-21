/* jshint esversion:6 */
WinChart.prototype.updateAAVFromYears = function() {
  const chart = this;

  if(chart.aavSlider !== undefined) {
    let totalValue = 0;
    chart.data.forEach((datum,index) => {
      if(index < chart.currentYears) {
        totalValue += datum;
      }
    });

    let averageValue = totalValue / chart.currentYears;

    chart.aavSlider
      .updateValue(averageValue);

    chart.totalValueDisplay
      .text("$" + totalValue.toFixed(2) + "MM");

  }

  return chart;
}
