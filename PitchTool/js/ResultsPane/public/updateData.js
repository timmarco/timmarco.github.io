/* jshint esversion:6 */
ResultsPane.prototype.updateData = function(data) {
  const pane = this;


  pane.insideRegionOutsideRegion
    .addData({"value":data.pitchesInRegion,"max":data.totalPitches});

  pane.swingsNoSwings
    .addData({"value":data.swings,"max":data.pitchesInRegion});

  pane.totalStrikes
    .addData({"value":data.totalStrikes,"max":data.pitchesInRegion});

  pane.whiffs
    .addData({"value":data.swingingStrikes,"max":data.pitchesInRegion});

  pane.calledStrikes
    .addData({"value":data.calledStrikes,"max":data.pitchesInRegion});

  pane.balls
    .addData({"value":data.balls,"max":data.pitchesInRegion});

  let maxHits = data.homeRuns + data.triples + data.doubles + data.singles;

  pane.homeRuns
    .addData({"value":data.homeRuns,"max":maxHits});

  pane.triples
    .addData({"value":data.triples,"max":maxHits});

  pane.doubles
    .addData({"value":data.doubles,"max":maxHits});

  pane.singles
    .addData({"value":data.singles,"max":maxHits});

  pane.ballsInPlay
    .addData({"value":data.ballsInPlay,"max":data.pitchesInRegion});

  pane.hits
    .addData({"value":data.hits,"max":data.ballsInPlay});

  pane.outs
    .addData({"value":data.outs,"max":data.outs});

  Object.keys(data.pitches).forEach((pitch) => {
    pane.pitches[pitch]
      .addData({"value":data.pitches[pitch],"max":data.pitchesInRegion});
  });


  return pane;
};
