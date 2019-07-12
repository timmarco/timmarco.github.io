/* jshint esversion:6 */
PlayerMenu.prototype.togglePosition = function(togglePosition) {
  const menu = this;

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      let rowPosition = d.Position;
      let currentlyVisible = element.classed("player-menu-row-visible");


      if(rowPosition === togglePosition) {
        if(currentlyVisible) {
          element
            .classed("player-menu-row-visible",false)
            .classed("player-menu-row-hidden",true);
        } else {
          element
            .classed("player-menu-row-visible",true)
            .classed("player-menu-row-hidden",false);
        }
      }
    });

};
