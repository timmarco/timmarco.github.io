/* jshint esversion:6 */
Projection.prototype.getThreeYearBWar = function() {
  const projection = this;

  let relevantYears,
    rollingAverage;

  relevantYears = [
    projection.data["2016"].bWar,
    projection.data["2017"].bWar,
    projection.data["2018"].bWar
  ];

  rollingAverage = relevantYears.reduce((a,b) => { return a+b; })/3;

  return rollingAverage;

};
