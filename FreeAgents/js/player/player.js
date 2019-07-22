/* jshint esversion:6 */
function Player(options,tooltip) {
  const player = this;
  init(options,tooltip);
  return player;

  function init(options,tooltip) {

    d3.select("#loadingRegion")
      .style("display","block");

    player.metadata(options);
    player.tooltip = tooltip;

    player.comparePlayers = false;

    player.stats = player.getStats();
    player.config = player.getConfig();

    d3.select("#mainHeaderTextSpan")
      .html(player.Name);

  }

}
