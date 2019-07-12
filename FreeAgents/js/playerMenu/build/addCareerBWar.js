/* jshint esversion:6 */
PlayerMenu.prototype.addCareerBWar = function(where,player) {
  const menu = this;

  let element;
  let careerTotal = 0;

  Object.keys(player).forEach((key) => {
    if(key.substr(0,4) === "bWar") {
      if(player[key] !== "") {
        careerTotal += parseFloat(player[key]);
      }
    }
  });

  careerTotal = careerTotal.toFixed(1);

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("align-center",true)
    .html(careerTotal);

  return element;
};
