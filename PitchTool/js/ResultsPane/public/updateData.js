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

  pane.homeRuns
    .addData({"value":data.homeRuns,"max":data.pitchesInRegion});

  pane.triples
    .addData({"value":data.triples,"max":data.pitchesInRegion});

  pane.doubles
    .addData({"value":data.doubles,"max":data.pitchesInRegion});

  pane.singles
    .addData({"value":data.singles,"max":data.pitchesInRegion});

  // pane.strikes
  //   .addData({"value":data.strikes,"max":data.totalStrikes});


    // results.totalPitches = player.rawData.length;
    // results.pitchesInRegion = player.filteredData.length;
    // results.balls = player.filteredData.filter((item) => { return a.pitchResultCode === "B"; });
    // results.whiffs = player.filteredData.filter((item) => { return a.pitchResultCode === "S"; });
    // results.inPlayNoOuts = player.filteredData.filter((item) => { return a.pitchResultCode === "D"; });
    // results.inPlayOuts = player.filteredData.filter((item) => { return a.pitchResultCode === "X"; });
    // results.fouls = player.filteredData.filter((item) => { return a.pitchResultCode === "F"; });
    // results.foulTips = player.filteredData.filter((item) => { return a.pitchResultCode === "T"; });
    // resuls.calledStrike = player.filteredData.filter((item) => { return a.pitchResultCode === "C"; });
    // results.swings = results.pitchesInRegion - results.balls - results.calledStrike;


  // pane.insideRegionOutsideRegion = pane.addInsideRegionOutsideRegion();
  //
  // pane.swingsNoSwings = pane.addSwingsNoSwings();
  // pane.whiffs = pane.addWhiffs();
  // pane.balls = pane.addBalls();
  // pane.calledStrikes = pane.addCalledStrikes();
  //
  // pane.sluggingOnContact = pane.addSluggingOnContact();
  // pane.homeRuns = pane.addHomeRuns();
  // pane.triples = pane.addTriples();
  // pane.doubles = pane.addDoubles();
  // pane.singles = pane.addSingles();
  //
  // pane.ballsInPlay = pane.addBallsInPlay();
  // pane.outs = pane.addOuts();
  // pane.flyBalls = pane.addFlyBalls();
  // pane.lineDrives = pane.addLineDrives();
  // pane.groundBalls = pane.addGroundBalls();

  return pane;
};
