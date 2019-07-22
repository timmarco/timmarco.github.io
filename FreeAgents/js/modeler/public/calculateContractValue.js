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
    .on('mouseover',function(d,i)  {
      let element = d3.select(this);

      element
        .attr("fill","#ed553b");


      let projectedWins = modeler.chart.projectionLine.data()[0].filter((a) => { return a.age === d.age; })[0];
      let yearValue = (projectedWins[modeler.chart.currentWARType] * d.winValue).toFixed(2);
      let surplus = (yearValue - d.salary).toFixed(2);
      let surplusColor = surplus >= 0 ? "green" : "red";


      let table = "<table>";
      table += "<tr><td style='text-align:right'>Age:</td><td style='text-align:center'>" + d.age +"</td>";
      table += "<tr><td style='text-align:right'>Projected WAR:</td><td style='text-align:center'>" + projectedWins[modeler.chart.currentWARType].toFixed(2) + "</td></tr>";
      table += "<tr><td style='text-align:right'>Cost / WAR</td><td style='text-align:center'>$" + d.winValue.toFixed(2) + "mm</td></tr>";
      table += "<tr><td style='text-align:right'>Projected Value</td><td style='text-align:center'>$" + yearValue + "mm</td></tr>";
      table += "<tr><td style='text-align:right;border-bottom:1px solid black'>Proposed Salary</td><td style='text-align:center; border-bottom:1px solid black'>$"+d.salary.toFixed(2)+"mm</td></tr>";
      table += "<tr style='font-weight:bold; color:"+surplusColor+"'><td style='text-align:right'>Year Surplus:</td><td style='text-align:center'>$"+ surplus +"mm</td></tr>";
      table += "</table>";

      modeler.tooltip
        .update(table)
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
