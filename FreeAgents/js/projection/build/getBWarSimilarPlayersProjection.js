/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersRawData = function() {
  const projection = this;

  let playerProjection = [];
  let similarPlayers = projection.data["2018"].similarPlayers;
  let rawValues = {};
  let mean;
  let top25;
  let bottom25;
  let agesToProject;

  agesToProject = projection.bWarAgingCurveProjection.map((a) => {return a.age;});

  agesToProject.forEach((age) => {
    rawValues[age] = [];
  });

  similarPlayers.forEach((player) => {
    agesToProject.forEach((age) => {
      if(player.warAge.hasOwnProperty(age)) {
        rawValues[age].push(player.warAge[age].bWar);
      } else {
        rawValues[age].push(0);
      }
    });
  });


  return rawValues;
};
