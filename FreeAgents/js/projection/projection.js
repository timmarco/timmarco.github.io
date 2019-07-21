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
    projection.threeYearFWar = projection.getThreeYearFWar();
    projection.fWarAgingCurveProjection = projection.getFWarAgingCurveProjection();
    projection.fWarSimilarPlayersRawData = projection.getFWarSimilarPlayersRawData();
    projection.fWarSimilarPlayersMax = projection.getFWarSimilarPlayersMax();
    projection.fWarSimilarPlayersMin = projection.getFWarSimilarPlayersMin();
    projection.fWarSimilarPlayersMean = projection.getFWarSimilarPlayersMean();

  }
}
