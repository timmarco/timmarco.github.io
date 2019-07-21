/* jshint esversion:6 */
Modeler.prototype.addPlayerData = function(data,name) {
  const modeler = this;


  let bWarArray = [];
  Object.keys(data.stats).forEach((year) => {
    bWarArray.push({
      "age":data.stats[year].age,
      "bWar":data.stats[year].bWar,
      "fWar":data.stats[year].fWar
    })
  });

  modeler.chart
    .addPlayerData(bWarArray,name);

  modeler.title
    .text(name);

  modeler.key
    .playerName(name);

  d3.selectAll(".playerName")
    .html(name);

  return modeler;
};
