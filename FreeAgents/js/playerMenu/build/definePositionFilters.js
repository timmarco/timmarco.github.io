/* jshint esversion:6 */
PlayerMenu.prototype.definePositionFilters = function() {
  const menu = this;

  d3.selectAll(".menu-position-filter")
    .on('input',function(d,i) {
      let element = d3.select(this);
      let position = element.attr("data-position");
      menu.filters[position] = element.node().checked;
      menu.updateFilters();
    });

  return menu;
};
