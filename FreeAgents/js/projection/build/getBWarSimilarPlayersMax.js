/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMax = function() {
  const projection = this;
  let maxValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
      let season = {};
      season.age = key;
      season.bWar = d3.max(projection.bWarSimilarPlayersRawData[key]);
      maxValues.push(season);
  });

  maxValues.shift();

  maxValues.unshift({
    "age":projection.data["2018"].age,
    "bWar":projection.data["2018"].bWar
  });

  return maxValues;
};
