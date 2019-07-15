/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMin = function() {
  const projection = this;
  let minValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.bWar = d3.min(projection.bWarSimilarPlayersRawData[key]);
    minValues.push(season);
  });

  minValues.shift();

  minValues.unshift({
    "age":projection.data["2018"].age,
    "bWar":projection.data["2018"].bWar
  });
  
  return minValues;
};
