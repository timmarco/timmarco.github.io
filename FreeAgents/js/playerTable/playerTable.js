/* jshint esversion:6 */
function PlayerTable(player) {
  const table = this;

  init(player);

  return table;

  function init(player) {

    table.numberlines = {};
    table.sparklines = [];

    table.player = player;
    table.container = table.addContainer();
    table.sections = table.addSections();
    table.sectionHeadings = table.addSectionHeadings();
    table.subSections = table.addSubSections();
    table.subSectionHeadings = table.addSubSectionHeadings();
    table.subSectionTables = table.addSubSectionTables();

    table.subSectionRows = table.addSubSectionRows();
    table.metricNames = table.addMetricNames();
    table.metricNumberlineCells = table.addMetricNumberlineCells();
    table.playerMetricValueCells = table.addPlayerMetricValueCells();
    table.playerMetricSparkline = table.addPlayerMetricSparkline();

    Object.keys(table.numberlines).forEach((key) => {
      let thisNumberline = table.numberlines[key];
      let datum = thisNumberline.datum;


      if(datum.hasOwnProperty("shareScale")) {
        let minValues = [];
        let maxValues = [];

        minValues.push(thisNumberline.numberline.getDomain()[0]);
        maxValues.push(thisNumberline.numberline.getDomain()[1]);

        datum.shareScale.forEach((line) => {
          let currentLine = table.numberlines[line].numberline;

          minValues.push(currentLine.getDomain()[0]);
          maxValues.push(currentLine.getDomain()[1]);

        });

        let least = d3.min(minValues);
        let most = d3.max(maxValues);

        let newDomain = [least,most];


        thisNumberline.numberline
          .rescale(newDomain);

        datum.shareScale.forEach((line) => {
          table.numberlines[line].numberline
            .rescale(newDomain);


        })

      };



      if(datum.hasOwnProperty("scalePercentage")) {
        thisNumberline.numberline
          .scalePercentage();
      }



    });
  }
}
