/* jshint esversion:6 */
Player.prototype.addFilterTables = function() {
  const player = this;

  let filterTables = {};

  filterTables.battingSide = new FilterTable({
    "name":"Batting Side",
    "values":player.filterPossibleValues.battingSide,
    "type":"unique"
  });

  filterTables.breakAngle = new FilterTable({
    "name":"Break Angle",
    "values":player.filterPossibleValues.breakAngle,
    "type":"extent"
  });

  filterTables.breakLength = new FilterTable({
    "name":"Break Length",
    "values":player.filterPossibleValues.breakLength,
    "type":"extent"
  });

  filterTables.countBalls = new FilterTable({
    "name":"Balls For",
    "values":player.filterPossibleValues.countBalls,
    "type":"unique"
  });

  filterTables.countStrikes = new FilterTable({
    "name":"Strikes Against",
    "values":player.filterPossibleValues.countStrikes,
    "type":"unique"
  });

  filterTables.date = new FilterTable({
    "name":"Game Date",
    "values":player.filterPossibleValues.date,
    "type":"unique"
  });

  filterTables.endSpeed = new FilterTable({
    "name":"End Speed",
    "values":player.filterPossibleValues.endSpeed,
    "type":"extent"
  });

  filterTables.location = new FilterTable({
    "name":"Home / Away",
    "values":player.filterPossibleValues.location,
    "type":"unique"
  });

  filterTables.opponent = new FilterTable({
    "name":"Opponent",
    "values":player.filterPossibleValues.opponent,
    "type":"unique"
  });

  filterTables.pitchResultCode = new FilterTable({
    "name":"Pitch Result",
    "values":player.filterPossibleValues.pitchResultCode,
    "type":"unique"
  });

  filterTables.pitchType = new FilterTable({
    "name":"Pitch Type",
    "values":player.filterPossibleValues.pitchType,
    "type":"unique"
  });

  filterTables.pitcherName = new FilterTable({
    "name":"Opponent Pitcher",
    "values":player.filterPossibleValues.pitcherName,
    "type":"unique"
  });

  filterTables.playResult = new FilterTable({
    "name":"Play Result",
    "values":player.filterPossibleValues.playResult,
    "type":"unique"
  });

  filterTables.realAtBatIndex = new FilterTable({
    "name":"At Bat Index",
    "values":player.filterPossibleValues.realAtBatIndex,
    "type":"unique"
  });

  filterTables.spinDirection = new FilterTable({
    "name":"Spin Direction",
    "values":player.filterPossibleValues.spinDirection,
    "type":"extent"
  });

  filterTables.spinRate = new FilterTable({
    "name":"Spin Rate",
    "values":player.filterPossibleValues.spinRate,
    "type":"extent"
  });

  filterTables.startSpeed = new FilterTable({
    "name":"Pitch Start Speed (MPH)",
    "values":player.filterPossibleValues.startSpeed,
    "type":"extent"
  });

  return filterTables;
};
