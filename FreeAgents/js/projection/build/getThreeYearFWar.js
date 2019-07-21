/* jshint esversion:6 */
Projection.prototype.getThreeYearFWar = function() {
  const projection = this;

  let relevantYears,
    rollingAverage;

  relevantYears = [
    projection.data.stats["2016"].fWar,
    projection.data.stats["2017"].fWar,
    projection.data.stats["2018"].fWar
  ];

  rollingAverage = relevantYears.reduce((a,b) => { return a+b; })/3;

  return rollingAverage;

};
