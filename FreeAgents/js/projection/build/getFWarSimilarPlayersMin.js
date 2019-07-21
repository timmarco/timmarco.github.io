/* jshint esversion:6 */
Projection.prototype.getFWarSimilarPlayersMin = function() {
  const projection = this;
  let minValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.fWar = d3.min(projection.fWarSimilarPlayersRawData[key]);
    minValues.push(season);
  });

  minValues.shift();

  minValues.unshift({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  return minValues;
};
