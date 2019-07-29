/* jshint esversion:6 */
PlayerList.prototype.recastAsArray = function() {
  const list = this;

  let recast = [];

  Object.keys(list.listData).forEach((playerId) => {
    recast.push(list.listData[playerId]);
  });

  recast.sort((a,b) => { return a.name - b.name ;});
  console.log(recast);
  return recast;
};
