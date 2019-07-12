/* jshint esversion:6 */
PlayerMenu.prototype.updateFilters = function() {
  const menu = this;

  console.log(menu.filters);

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      let visible = true;
      let name = d.Name.toLowerCase();
      let position = d.Position;

      let positionMap = {
        "1B":"firstBase",
        "2B":"secondBase",
        "3B":"thirdBase",
        "SS":"shortstop",
        "LF":"leftField",
        "CF":"centerField",
        "RF":"rightField",
        "C":"catcher",
        "SP":"starter",
        "RP":"reliever"
      };

      let positionKey = positionMap[position];
      if(!menu.filters[positionKey]) { visible = false; }
      if(name.indexOf(menu.filters.name) == -1 ) { visible = false; }

      if(!visible) {
        element
          .classed("player-menu-row-visible",false)
          .classed("player-menu-row-hidden",true);
      } else {
        element
          .classed("player-menu-row-visible",true)
          .classed("player-menu-row-hidden",false);
      }
    });

  return menu;
};
