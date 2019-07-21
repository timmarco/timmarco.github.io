/* jshint esversion:6 */
PlayerMenu.prototype.addHeaderRow = function() {
  const menu = this;

  let headerRow = menu.containerElement
    .append("div")
    .classed("player-menu-header-row",true);


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-left",true)
    .html("Player Name")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player Name")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on('click',function() {
      menu
        .sort("Name");
    })
    .on('click',function() {
      menu.positionRow.style("display","none");
    });


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-center",true)
    .attr("id","positionHeader")
    .html("Position")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's primary position. <em>Click to filter by position.</em>")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on('click',function() {
      menu
        .showPositionRow();
    });


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-center",true)
    .html("Age")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's age starting the 2019 season. <em>Click to sort table</em>.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on("click",function() {
      menu
        .sort("Age");
    });


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("Career bWAR Performance")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's production to date.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    });

  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("2018 bWar")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's production in 2018.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on('click',function() {
      menu.sort("bWar2018")
    })


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .html("2019-2021<br/>Zips")
    .on('mouseover',function() {
      menu.tooltip
        .update("Fangraph's projected value through the 2021 season. <em>Click to sort table.</em>")
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on('click',function() {
      menu
        .sort("3yearZips");
    });







  return headerRow;
};
