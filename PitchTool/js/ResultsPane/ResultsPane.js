/* jshint esversion:6 */
function ResultsPane(options) {
  const pane = this;
  init(options);
  return pane;

  function init(options) {
    pane.parent = options.parent;

    pane.styles = pane.defineStyles();

    pane.div = pane.addDiv();
    pane.groups = pane.addGroups();

    pane.insideRegionOutsideRegion = pane.addInsideRegionOutsideRegion();

    pane.swingsNoSwings = pane.addSwingsNoSwings();
    pane.whiffs = pane.addWhiffs();
    pane.balls = pane.addBalls();
    pane.totalStrikes = pane.addTotalStrikes();
    pane.calledStrikes = pane.addCalledStrikes();

    pane.sluggingOnContact = pane.addSluggingOnContact();
    pane.homeRuns = pane.addHomeRuns();
    pane.triples = pane.addTriples();
    pane.doubles = pane.addDoubles();
    pane.singles = pane.addSingles();

    pane.ballsInPlay = pane.addBallsInPlay();
    pane.outs = pane.addOuts();
    pane.flyBalls = pane.addFlyBalls();
    pane.lineDrives = pane.addLineDrives();
    pane.groundBalls = pane.addGroundBalls();


  }
}
