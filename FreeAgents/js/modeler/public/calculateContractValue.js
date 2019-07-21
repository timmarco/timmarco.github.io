/* jshint esversion:6 */
Modeler.prototype.calculateContractValues = function() {
  const modeler = this;

  let chartData = [];
  let projectionBasis;
  let contractMarketValue = 0;
  let contractCost = modeler.projectionParameters.aav * modeler.projectionParameters.contractLength;
  let contractSurplus;
  let winKey;

  if(modeler.chart.currentWARType == "bWar") {
    winKey = "bWar";
    if(modeler.chart.currentView == "agingCurve") {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.bWarAgingCurveProjection));
    } else {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.bWarSimilarPlayersMean));
    }
  } else {
    winKey = "fWar";
    if(modeler.chart.currentView == "agingCurve") {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.fWarAgingCurveProjection));
    } else {
      projectionBasis = JSON.parse(JSON.stringify(modeler.chart.projection.fWarSimilarPlayersMean));
    }
  }

  projectionBasis.shift();

  d3.range(0,modeler.projectionParameters.contractLength).forEach((year) => {
    if(projectionBasis.hasOwnProperty(year)) {
      chartData.push({
        "age":projectionBasis[year].age,
        "bWar":modeler.projectionParameters.salary[year] / modeler.projectionParameters.winValue[year],
        "fWar":modeler.projectionParameters.salary[year] / modeler.projectionParameters.winValue[year],
        "salary":modeler.projectionParameters.salary[year],
        "winValue":modeler.projectionParameters.winValue[year],
      });
      contractMarketValue += projectionBasis[year][modeler.chart.currentWARType] * modeler.projectionParameters.winValue[year];
    }
  });

  modeler.chart.contractLine
    .datum(chartData)
    .attr("d",modeler.chart.lineGenerator);

  let circles = modeler.chart.layers.contract
    .selectAll("circle")
    .data(chartData);

  circles
    .attr("cx",(d) => { return modeler.chart.scales.x(d.age); })
    .attr("cy",(d) => { return modeler.chart.scales.y(d[modeler.chart.currentWARType]); });


  circles
    .enter()
    .append("circle")
    .attr("cx",(d) => { return modeler.chart.scales.x(d.age); })
    .attr("cy",(d) => { return modeler.chart.scales.y(d[modeler.chart.currentWARType]); })
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","#ed553b")
    .attr("stroke-width",1)
    .attr("cursor","pointer")
    .on('mouseover',function(d)  {
      let element = d3.select(this);

      element
        .attr("fill","#ed553b");

      let string = "At market rate of $";
      string += d.winValue.toFixed(2);
      string +="mm  per win, the proposed salary of $";
      string += d.salary.toFixed(2);
      string += "mm represents a projected surplus of $XXmm.";

      modeler.tooltip
        .update(string)
        .show()
        .move();
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      element
        .attr("fill","white");

      modeler.tooltip
        .hide();
    })
    .on('mousemove',() => {
      modeler.tooltip
        .move();
    });

  circles
    .exit()
    .remove();


  contractSurplus = contractMarketValue - contractCost;

  let surplusColor = contractSurplus > 0 ? "green" : "red";

  modeler.projectedSurplusValue
    .text("$" + contractSurplus.toFixed(2) + "MM")
    .attr("fill",surplusColor);

  modeler.contractValueLabel
    .text("$" + contractMarketValue.toFixed(2) + "MM");


  modeler.chart.contractText
    .show()
    .move({
      "x":modeler.chart.scales.x(chartData[chartData.length-1].age)  + 5,
      "y":modeler.chart.scales.y(chartData[chartData.length-1][winKey])
    })


  return this;
};
