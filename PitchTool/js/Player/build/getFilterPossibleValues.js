/* jshint esversion:6 */
Player.prototype.getFilterPossibleValues = function() {
  const player = this;

  let possibleValues = {};
  possibleValues.battingSide = uniqueValues("battingSide");
  possibleValues.breakAngle = extent("breakAngle");
  possibleValues.breakLength = extent("breakLength");
  possibleValues.countBalls = uniqueValues("countBalls");
  possibleValues.countStrikes = uniqueValues("countStrikes");
  possibleValues.date = uniqueValues("date");
  possibleValues.endSpeed = extent("endSpeed");
  possibleValues.location = uniqueValues("location");
  possibleValues.opponent = uniqueValues("opponent");
  possibleValues.pitchResultCode = uniqueValues("pitchResultCode");
  possibleValues.pitchType = uniqueValues("pitchType");
  possibleValues.pitcherName = uniqueValues("pitcherName");
  possibleValues.playResult = uniqueValues("playResult");
  possibleValues.realAtBatIndex = extent("realAtBatIndex");
  possibleValues.spinDirection = extent("spinDirection");
  possibleValues.spinRate = extent("spinRate");
  possibleValues.startSpeed = extent("startSpeed");

  return possibleValues;

  function uniqueValues(key) {
    return d3.nest()
        .key((d) => { return d[key]; })
        .rollup((d) => { return d.length; })
        .entries(player.rawData)
        .sort((a,b) => { return b.value - a.value; });
  }

  function extent(key) {
    return d3.extent(player.rawData.map((a) =>{ return +a[key]; }));
  }
};
