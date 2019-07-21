/* jshint esversion:6 */
Projection.prototype.getFWarSimilarPlayersMean = function() {
  const projection = this;
  let meanValues = [];

  Object.keys(projection.fWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.fWar = d3.mean(projection.fWarSimilarPlayersRawData[key]);
    meanValues.push(season);
  });

  meanValues.shift();
  meanValues.unshift({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  return meanValues;
};
