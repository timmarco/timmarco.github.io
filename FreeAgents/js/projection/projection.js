/* jshint esversion:6 */
function Projection(data) {
  let projection = this;

  init(data);

  return projection;

  function init(data) {
    projection.data = data;
    projection.baseAge = projection.getBaseAge();
    projection.warCurveDeltas = projection.defineWarCurveDeltas();
    projection.relevantWarCurveDeltas = projection.getRelevantWarCurveDeltas();
    projection.baseBWar = projection.getBaseBWar();
    projection.threeYearBWar = projection.getThreeYearBWar();
    projection.bWarAgingCurveProjection = projection.getBWarAgingCurveProjection();
    projection.bWarSimilarPlayersRawData = projection.getBWarSimilarPlayersRawData();
    projection.bWarSimilarPlayersMax = projection.getBWarSimilarPlayersMax();
    projection.bWarSimilarPlayersMin = projection.getBWarSimilarPlayersMin();
    projection.bWarSimilarPlayersMean = projection.getBWarSimilarPlayersMean();

    console.log("--------- PLAYER PROJECTION -------");

    console.log("Data", data);
    console.log("BASE AGE: ", projection.baseAge);
    console.log("WIN CURVE DELTAS: ", projection.warCurveDeltas);
    console.log("WIN CURVE DELTAS: ", projection.relevantWarCurveDeltas);
    console.log("BASE BWAR: ", projection.baseBWar);
    console.log("THREE YEAR BWAR: ", projection.threeYearBWar);
    console.log("BWAR PROJECTION: ", projection.bWarAgingCurveProjection);
    console.log("BWAR SIMILAR PLAYERS RAW: ", projection.bWarSimilarPlayersRawData);
    console.log("BWAR SIMILAR PLAYERS MAX: ", projection.bWarSimilarPlayersMax);
    console.log("BWAR SIMILAR PLAYERS MEAN: ", projection.bWarSimilarPlayersMean);
    console.log("BWAR SIMILAR PLAYERS MIN: ", projection.bWarSimilarPlayersMin);

    console.log("-------------------");

  }
}
