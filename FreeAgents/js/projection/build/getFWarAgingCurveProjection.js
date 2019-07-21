/* jshint esversion:6 */
Projection.prototype.getFWarAgingCurveProjection = function() {
  const projection = this;

  let warProjection = [];
  let lastValue;

  lastValue = projection.threeYearFWar;

  warProjection.push({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  projection.relevantWarCurveDeltas.forEach((curveDeltaObject) => {
    let season = {};
    season.age = curveDeltaObject.age;
    season.fWar = +(lastValue + curveDeltaObject.delta).toFixed(1);
    lastValue += curveDeltaObject.delta;
    warProjection.push(season);
  });

  return warProjection;
};
