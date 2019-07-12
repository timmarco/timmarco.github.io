/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerSparkline = function(where,player) {
  let element,
  sparkline;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-sparkline",true)
    .classed("align-center",true);

  sparkline = new Sparkline({
    "where":element,
    "data":[player.bWar2004,player.bWar2005,player.bWar2006,player.bWar2007,player.bWar2008,player.bWar2009,player.bWar2010,player.bWar2011,player.bWar2012,player.bWar2013,player.bWar2014,player.bWar2015,player.bWar2016,player.bWar2017,player.bWar2018]
  });

  return element;
};
