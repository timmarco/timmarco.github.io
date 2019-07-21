/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersRawData = function() {
  const projection = this;

  let playerProjection = [];
  let similarPlayers = projection.data.metadata.similarPlayers;
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
      let findMatch = player.data.filter((a) => { return a.age == age});
      if(findMatch[0]) {
        rawValues[age].push(+findMatch[0].bWAR);
      } else {
        let lastSeason = d3.max(player.data.map((a) => { return a.year}));
        if(lastSeason != "2018") {
          rawValues[age].push(0);
        }
      }
    });
  });


  return rawValues;
};
