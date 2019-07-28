/* jshint esversion:6 */
function Player(options) {
  const player = this;
  init(options);
  return player;

  function init(options) {
    player.defineHighlightRules();

    if(options.position !== "P") {
      d3.csv("data/hitters/" + options.id + ".csv")
        .then((data) => {
          player.rawData = data;
          console.log(JSON.stringify(player.rawData.filter((a) => { return a.pitchType == "CU"}).sort((a,b) => { return +a.pfxZ - (+b.pfxZ)})[0]));
          player.filteredData = JSON.parse(JSON.stringify(data));

          player.filterValues = player.defineFilterValues();
          player.filterPossibleValues = player.getFilterPossibleValues();

          player.filterTables = player.addFilterTables();

          player.playResultsSummary = player.summaryRollup("playResult");
          player.pitchersFaced = player.summaryRollup("pitcherName");
          player.teamsFaced = player.summaryRollup("opponents");
          player.pitchTypes = player.summaryRollup("pitchType");
          player.pitchResults = player.summaryRollup("pitchResult");

          player.resultsPane = player.addResultsPane();

          player.catcherView
            .addPlayerCircles(player.rawData)
            .addPlayerStrikeZone(options.strikeZone);

        });
    }
  }
}
