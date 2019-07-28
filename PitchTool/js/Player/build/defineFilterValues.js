/* jshint esversion:6 */
Player.prototype.defineFilterValues = function() {
  const player = this;

  let values = {};
  values.battingSide = false;
  values.breakAngle = false;
  values.breakLength = false;
  values.countBalls = false;
  values.countStrikes = false;
  values.date = false;
  values.endSpeed = false;
  values.location = false;
  values.opponent = false;
  values.pitchResultCode = false;
  values.pitchType = false;
  values.pitcherName = false;
  values.playResult = false;
  values.realAtBatIndex = false;
  values.spinDirection = false;
  values.spinRate = false;
  values.startSpeed = false;
  return values;
};
