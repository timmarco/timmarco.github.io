/* jshint esversion:6 */
PlayerMenu.prototype.definePositionFilters = function() {
  const menu = this;

  menu.currentFilterRow = null;

  d3.select("#playerPositionFilters")
    .style("display","none");

  d3.select("#pitcherFilters")
    .style("display","none");

  let allPlayersButton = d3.select("#allPlayersButton");
  let positionPlayersButton = d3.select("#allPositionPlayers");
  let allPitchersButton = d3.select("#allPitchers");
  let positionFilterRow = d3.select("#playerPositionFilters");
  let positionOption = d3.selectAll(".positionOption");
  let allPositionOption = d3.select("#allPositionOption");

  let allPositionsOption = d3.select("#allPositionOption");

  let allPositionsActive = false;

  allPlayersButton.on('click',function() {

    allPlayersButton
      .classed("playerFilterOptionActive",true);

    positionPlayersButton
      .classed("playerFilterOptionActive",false);

    allPitchersButton
      .classed("playerFilterOptionActive",false);

    Object.keys(menu.filters).forEach((key) => {
      if(key !== "name") {
        menu.filters[key] = true;
      }
    });

    menu
      .updateFilters();


    positionFilterRow
      .style("display","none");



  });

  positionPlayersButton.on('click',function() {

    allPlayersButton
      .classed("playerFilterOptionActive",false);

    positionPlayersButton
      .classed("playerFilterOptionActive",true);

    allPitchersButton
      .classed("playerFilterOptionActive",false);

    Object.keys(menu.filters).forEach((key) => {
      if(key !== "name") {
        menu.filters[key] = true;
      }
    });

    menu.filters.starter = false;
    menu.filters.reliever = false;

    menu
      .updateFilters();

    positionFilterRow
      .style("display","block");

    allPositionsActive = true;

  });

  allPitchersButton.on('click',function() {

    positionFilterRow
      .style("display","none");

    allPlayersButton
      .classed("playerFilterOptionActive",false);

    positionPlayersButton
      .classed("playerFilterOptionActive",false);

    allPitchersButton
      .classed("playerFilterOptionActive",true);

      Object.keys(menu.filters).forEach((key) => {
        if(key !== "name") {
          menu.filters[key] = false;
        }
      });

      menu.filters.starter = true;
      menu.filters.reliever = true;

      menu
        .updateFilters();

  });

  positionOption.each(function() {
    let element = d3.select(this);
    let key = element
      .attr("data-key");

    element
      .on('click',function() {

        if(key === "all") {

          element
            .attr("data-visible",true)
            .style("background-color","rgba(96,147,190,0.75)");

          Object.keys(menu.filters).forEach((key) => {
            if(key !== "name" && key !== "SP" & key !== "RP") {
              menu.filters[key] = true;
            }
          });

          d3.selectAll(".realPositionOption")
            .style("background-color","white")
            .attr("data-visible","false");

          allPositionsActive = true;


        } else {
          if(allPositionsActive) {
            allPositionOption
              .attr("data-visible","false")
              .style("background-color","white");

            Object.keys(menu.filters).forEach((key) => {
              if(key !== "name") {
                menu.filters[key] = false;
              }
            });
            allPositionsActive = false;

            allPositionOption
              .classed("playerFilterOptionActive",false);

          }

          if(element.attr("data-visible") == "true") {

            menu.filters[key] = false;
            element
              .style("background-color","white")
              .attr("data-visible","false");

          } else {

            menu.filters[key] = true;

            element
              .style("background-color","rgba(96,147,190,0.75)")
              .attr("data-visible","true");


          }

        }

        menu
          .updateFilters();
      });

  });

  d3.selectAll(".menu-position-filter")
    .on('input',function(d,i) {
      let element = d3.select(this);
      let position = element.attr("data-position");
      menu.filters[position] = element.node().checked;
      menu.updateFilters();
    });

  return menu;
};
