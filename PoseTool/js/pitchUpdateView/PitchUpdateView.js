/* jshint esversion:6 */
function PitchUpdateView(d) {

  d3.select("#playDescription")
    .html(d.description);

  d3.select("#framePlayerName")
    .html(d.name);

  d3.select("#frameOpponentName")
    .html(d.opponent_player);

  d3.select("#frameDate")
    .html(d.date);

  d3.select("#frameOuts")
    .html(d.outs);

  d3.select("#frameInning")
    .html(d.inning);

  d3.select("#frameCount")
    .html(d.count.balls + " - " + d.count.strikes);

  d3.select("#frameOpponentTeam")
    .html(d.opponent_team_name);

  d3.select("#pitchType")
    .html(d.pitchData.pitchType);

  d3.select("#pitchStartVelocity")
    .html(d.pitchData.startSpeed + " MPH");

  d3.select("#pitchEndVelocity")
    .html(d.pitchData.endSpeed + " MPH");

  d3.select("#spinRate")
    .html(d.pitchData.spinRate + " RPM");

  d3.select("#breakAngle")
    .html(d.pitchData.breakAngle);

  d3.select("#breakLength")
    .html(d.pitchData.breakLength + "\"");

  d3.select("#pitchHorizontalMovement")
    .html(d.pitchData.pfxX + "\"");

  d3.select("#pitchVerticalMovement")
    .html(d.pitchData.pfxX + "\"");



}
