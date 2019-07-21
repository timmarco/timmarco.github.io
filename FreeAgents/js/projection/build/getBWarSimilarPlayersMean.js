/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMean = function() {
  const projection = this;
  let meanValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.bWar = d3.mean(projection.bWarSimilarPlayersRawData[key]);
    meanValues.push(season);
  });

  meanValues.shift();
  meanValues.unshift({
    "age":projection.data.stats["2018"].age,
    "bWar":projection.data.stats["2018"].bWar
  });

  return meanValues;
};
