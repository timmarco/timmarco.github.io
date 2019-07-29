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
    pane.balls = pane.addBalls();
    pane.totalStrikes = pane.addTotalStrikes();
    pane.whiffs = pane.addWhiffs();
    pane.calledStrikes = pane.addCalledStrikes();

    pane.homeRuns = pane.addHomeRuns();
    pane.triples = pane.addTriples();
    pane.doubles = pane.addDoubles();
    pane.singles = pane.addSingles();

    pane.ballsInPlay = pane.addBallsInPlay();
    pane.hits = pane.addHits();
    pane.outs = pane.addOuts();

    pane.addPitchTypes();


  }
}
