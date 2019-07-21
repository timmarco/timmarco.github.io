/* jshint esversion:6 */
Projection.prototype.getFWarSimilarPlayersMax = function() {
  const projection = this;
  let maxValues = [];

  Object.keys(projection.fWarSimilarPlayersRawData).forEach((key,index) => {
      let season = {};
      season.age = key;
      season.fWar = d3.max(projection.fWarSimilarPlayersRawData[key]);
      maxValues.push(season);
  });

  maxValues.shift();

  maxValues.unshift({
    "age":projection.data.stats["2018"].age,
    "fWar":projection.data.stats["2018"].fWar
  });

  return maxValues;
};
