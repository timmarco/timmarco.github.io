/* jshint esversion:6 */
PlayerMenu.prototype.filterByName = function(query) {
  const menu = this;

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      if(d.Name.toLowerCase().indexOf(query.toLowerCase()) == -1) {

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
