/* jshint esversion:6 */
Player.prototype.filterByRegion = function(region) {
  const player = this;

  player.filteredData = JSON.parse(JSON.stringify(player.rawData)).filter(regionFilter);

  // TODO: RUN OTHER FILTERS!
  // TODO: MOVE TO SEPARATE FILE!

  let results = {};
  results.totalPitches = player.rawData.length;
  results.pitchesInRegion = player.filteredData.length;
  results.balls = player.filteredData.filter(player.filterRules.balls).length;
  results.swingingStrikes = player.filteredData.filter(player.filterRules.swingingStrikes).length;
  results.inPlayNoOuts = player.filteredData.filter(player.filterRules.inPlayNoOuts).length;
  results.inPlayOuts = player.filteredData.filter(player.filterRules.inPlayOuts).length;
  results.fouls = player.filteredData.filter(player.filterRules.fouls).length;
  results.foulTips = player.filteredData.filter(player.filterRules.foulTips).length;
  results.calledStrikes = player.filteredData.filter(player.filterRules.calledStrikes).length;
  results.swings = results.pitchesInRegion - results.balls - results.calledStrikes;
  results.totalStrikes = results.foulTips + results.fouls + results.swingingStrikes + results.calledStrikes;

  results.homeRuns = player.filteredData.filter(player.filterRules.homeRuns).length;
  results.triples = player.filteredData.filter(player.filterRules.triples).length;
  results.doubles = player.filteredData.filter(player.filterRules.doubles).length;
  results.singles = player.filteredData.filter(player.filterRules.singles).length;

  player.resultsPane
    .updateData(results);

  player.catcherView
    .updateActive(player.filteredData);

  return player;

  function regionFilter(item) {
    return ![+item.pX >= +region.minX,+item.pX <= +region.maxX,+item.pZ >= +region.minY,+item.pZ <= +region.maxY].includes(false);
    }
};
