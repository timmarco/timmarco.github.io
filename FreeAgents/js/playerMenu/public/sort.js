/* jshint esversion:6 */
PlayerMenu.prototype.sort = function(key) {
  const menu = this;

  let select = d3.selectAll(".player-menu-row");
  select.sort((a,b) => { return b.Position - a.Position; });

  return this;
};
