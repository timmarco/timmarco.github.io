/* jshint esversion:6 */
Modeler.prototype.calculateContractValues = function() {
  const modeler = this;

  let top25Projections = [];
  let meanProjections = [];
  let bottom25Projections = [];
  let meanValueByYear = [];

  let salaryValues = [];
  let winValues = [];
  let ageSeasons = [];

  Object.keys(modeler.projections.mean).forEach((key) => {
    meanProjections.push(modeler.projections.mean[key].bWar);
    ageSeasons.push(modeler.projections.mean[key].age);
  });

  ageSeasons.shift();
  meanValueByYear.shift();
  meanProjections.shift();

  let contractYears = +modeler.contractYearsSlider.currentValue.toFixed(0);

  modeler.salarySliders.forEach((slider,index) => {
    salaryValues.push(slider.currentValue);
    if(index >= contractYears) {
      slider.hide();
    } else {
      slider.show();
    }
  });

  modeler.winValueSliders.forEach((slider,index) => {
    winValues.push(slider.currentValue);
    if(index >= contractYears) {
      slider.hide();
    } else {
      slider.show();
    }
  });

  modeler.projectionParameters.salary = salaryValues;
  modeler.projectionParameters.winValues = winValues;

  let totalContractCost = 0;
  let totalMeanContractValue = 0;

  d3.range(0,contractYears).forEach((year) => {
    totalContractCost += modeler.projectionParameters.salary[year];
    totalMeanContractValue += modeler.projectionParameters.winValues[year] * meanProjections[year];
    meanValueByYear.push({
      "age":ageSeasons[year],
      "bWar":modeler.projectionParameters.salary[year] / modeler.projectionParameters.winValues[year]
    });
  });

  let allValues = {
    "mean":{"yearData":meanValueByYear},
    // "top25":calculateValues(top25Projections),
    // "bottom25":calculateValues(bottom25Projections)
  };

  modeler.chart
    .updateProjectionLines(allValues);



  let meanContractSurplus = totalMeanContractValue - totalContractCost;

  modeler.contractCostText
    .updateText("$" + totalContractCost.toFixed(2) + "mm");

  modeler.meanSurplusText
    .updateText("$" + meanContractSurplus.toFixed(2) + "mm");


  return this;
};
