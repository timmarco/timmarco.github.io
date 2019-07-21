/* jshint esversion:6 */
PlayerMenu.prototype.sort = function(key) {
  const menu = this;
  let select = d3.selectAll(".player-menu-row");

  if(key == menu.currentSort) {
    if(menu.currentOrder == "DESC" || menu.currentOrder == "") {
      select.sort((a,b) => { return a[key] - b[key]; });
      menu.currentSort = key;
      menu.currentOrder = "ASC";
    } else {
      select.sort((a,b) => { return b[key] - a[key]; });
      menu.currentOrder = "DESC";
    }
  } else {
    select.sort((a,b) => { return b[key] - a[key]; });
    menu.currentSort = key;
    menu.currentOrder = "";
  }


  return this;
};
