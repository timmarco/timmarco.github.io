/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMin = function() {
  const projection = this;
  let minValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key) => {
    let season = {};
    season.age = key;
    season.value = d3.min(projection.bWarSimilarPlayersRawData[key]);
    minValues.push(season);
  });

  return minValues;
};
