/* jshint esversion:6 */
Projection.prototype.getBWarAgingCurveProjection = function() {
  const projection = this;

  let warProjection = [];
  let lastValue;

  lastValue = projection.threeYearBWar;

  warProjection.push({
    "age":projection.data.stats["2018"].age,
    "bWar":projection.data.stats["2018"].bWar
  });

  projection.relevantWarCurveDeltas.forEach((curveDeltaObject) => {
    let season = {};
    season.age = curveDeltaObject.age;
    season.bWar = +(lastValue + curveDeltaObject.delta).toFixed(1);
    lastValue += curveDeltaObject.delta;
    warProjection.push(season);
  });

  return warProjection;
};
