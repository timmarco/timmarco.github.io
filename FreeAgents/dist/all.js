/* jshint esversion:6 */
function Button(options) {
  const button = this;
  init(options);
  return button;


  function init(options) {
    button.callback = () => { return null;};
    button.size = button.defineSize(options);
    button.styles = button.defineStyles(options);

    button.group = button.addGroup(options.where);
    button.rect = button.addRect();
    button.text = button.addText(options.text);

    if(options.coordinates !== undefined) {
      button
        .move(options.coordinates);
    }

  }
}

/* jshint esversion:6 */
function LineChart(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.where = options.where;
    chart.size = options.size;
    chart.margins = options.margins;
    chart.origin = options.origin;

    chart.styles = chart.defineStyles();
    chart.layers = chart.addLayers();
    chart.referencePoints = chart.defineReferencePoints();

    chart.yAxisTitle = chart.addYAxisTitle();
    chart.xAxisTitle = chart.addXAxisTitle();

    chart.scales = chart.defineScales();

    chart.axes = chart.addAxes();

    chart.lineGenerator = chart.createLineGenerator();
    chart.areaGenerator = chart.createAreaGenerator();

    chart.zeroLine = chart.addZeroLine();
    chart.starterLine = chart.addStarterLine();
    chart.allStarLine = chart.addAllStarLine();
    chart.mvpLine = chart.addMVPLine();

    chart.currentWARType = "bWar";

  }



}

/* jshint esversion:6 */
function hitterConfig() {
  let sections = [{
      "name": "Value",
      "tables": [{
        "name": "Fangraphs",
        "headerType": "worse-better",
        "rows": [{
          "key": "totalFWar",
          "display": "fWAR",
          "description": "Full Season Wins Above Replacement.",
          "source": "Fangraphs",
        }, {
          "key": "offensiveFWar",
          "display": "oWAR",
          "description": "Offensive WAR Component",
          "source": "Fangraphs"
        }, {
          "key": "defensiveFWar",
          "display": "dWAR",
          "description": "Defensive fWAR Component",
          "source": "Fangraphs"
        }]
      }, {
        "name": "Baseball Reference",
        "headerType":"worse-better",
      }]
    }, {
      "name": "Hitting Overview",
      "tables": [{
        "headerType": "worse-better",
        "rows": [{
          "key": "wOBA",
          "display": "wOBA",
          "description": "Weighted On-Base Average.",
          "source": "Fangraphs"
        }, {
          "key": "weightedRunsCreated",
          "display": "wRC",
          "description": "Weighted Runs Created",
          "source": "Fangraphs"
        }, {
          "key": "weightedRunsAboveAverage",
          "display": "wRAA",
          "description": "Weighted Runs Above Average",
          "source": "Fangraphs"
        }, {
          "key": "onBasePlusSlugging",
          "display": "OPS",
          "description": "On Base Plus Slugging",
          "source": "Fangraphs"
        }, {
          "key": "iso",
          "display": "ISO",
          "description": "Isolated Power",
          "source": "Fangraphs"
        }]
      }]
    }, {
      "name": "Run Prevention",
    }, {
      "name": "Batted Ball Outcomes",
      "tables": [{
          "name": "Overview",
          "headerType": "less-more",
          "rows": [{
            "key": "babip",
            "display": "BABIP",
            "description": "Batting Average on Balls in Play.",
            "source": "Fangraphs"
          }, {
            "key": "homerunFlyballPercentage",
            "display": "HR / FB",
            "description": "Ratio of Home Runs per Fly Ball",
            "source": "Fangraphs"
          }, {
            "key": "groundballFlyballRatio",
            "display": "GB / FB",
            "description": "Groundball to Flyball ratio.",
            "source": "Fangraphs"
          }]
        },

        {
          "name": "By Hit Type",
          "headerType": "never-always",
          "rows": [{
            "key": "groundBallPercentage",
            "display": "Groundball",
            "description": "Percentage of balls in play that were groundballs.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "flyballPercentage",
            "display": "Flyball",
            "description": "Percentage of balls in play that were flyballs.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          },{
            "key": "infieldFlyballPercentage",
            "display": "Infield Fly",
            "description": "Percentage of balls hit in play that were infield flies.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "lineDrivePercentage",
            "display": "Line Drive",
            "description": "Percentage of balls in play that were Line Drives.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "infieldHitPercentage",
            "display": "Infield Hit",
            "description": "Percentage of balls in play that were infield hits.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "buntHitPercentage",
            "display": "Bunt Hit",
            "description": "Percentage of balls in play that were bunt hits.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, ]
        },

        {
          "name": "Hit Strength",
          "headerType": "never-always",
          "rows": [{
            "key": "softHitPercentage",
            "display": "Soft Hits",
            "description": "Percentage of batted balls characterized as 'soft'.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "mediumHitPercentage",
            "display": "Medium Hits",
            "description": "Percentage of batted balls characterized as 'medium'.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "hardHitPercentage",
            "display": "Hard Hits",
            "description": "Percentage of batted balls characterized as 'hard'.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, ]
        }, {
          "name": "By Field Area",
          "headerType": "never-always",
          "rows": [{
            "key": "pullPercentage",
            "display": "Pull",
            "description": "Percentage of batted balls hit to the pull field.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "centerfieldHitPercentage",
            "display": "Center",
            "description": "Percentage of batted balls hit to center field.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, {
            "key": "oppositeFieldHitPercentage",
            "display": "Opposite",
            "description": "Percentage of batted balls hit to the opposite field.",
            "source": "Fangraphs",
            "scaleMin":0,
            "scaleMax":100
          }, ]
        }
      ]
    }, {
      "name": "Batting Approach",
      "tables": [{
        "headerType": "never-always",
        "rows": [{
          "description": "Rate that hitter swung on pitches outside the strike zone.",
          "display": "Outside Zone Swing",
          "key": "outsideZoneSwingPercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Contact rate on pitches swung at outside the strike zone.",
          "display": "Outside Zone Contact Rate",
          "key": "outsideZoneContactRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Rate that hitter swung on pitches inside the strike zone.",
          "display": "Inside Zone Swing Rate",
          "key": "insideZoneSwingPercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Contact rate on pitches swung at inside the strike zone.",
          "display": "Inside Zone Contact Rate",
          "key": "insideZoneContactRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Percent of times hitter swung at first-pitch strikes.",
          "display": "First Strike Swing %",
          "key": "firstPitchStrikePercentageSeen",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Percent of swinging strikes. (Whiff Rate)",
          "display": "Swinging Strike %",
          "key": "swingingStrikePercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Overall rate that hitter swung at all pitches.",
          "display": "Total Swing %",
          "key": "totalSwingPercentage",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Overall contact rate on swings.",
          "display": "Total Contact Rate",
          "key": "totalContactRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }, {
          "description": "Overall rate of pitches seen inside the strike zone.",
          "display": "Pitches Seen in Zone",
          "key": "pitchesSeenInZoneRate",
          "source": "fangraphs",
          "scaleMin":0,
          "scaleMax":100
        }]
      }],
    },
    {
      "name": "Baserunning",
      "tables": [{
        "headerType": "worse-better",
        "rows": [{
          "description": "Fangraphs' Baserunning metric.",
          "display": "Fangraphs BsR",
          "key": "BsR",
          "source": "fangraphs"
        }, {
          "description": "Ultimate Baserunning metric.",
          "display": "Ultimate Baserunning",
          "key": "ultimateBaseRunning",
          "source": "fangraphs"
        }, {
          "description": "Speed Score.",
          "display": "Speed Score",
          "key": "speedScore",
          "source": "fangraphs"
        }, {
          "description": "Weighted stolen bases.",
          "display": "Weighted Stolen Bases",
          "key": "weightedStolenBases",
          "source": "fangraphs"
        }, {
          "description": "Weighted ground into double plays metric.",
          "display": "Weighted GIDP",
          "key": "weightedGidp",
          "source": "fangraphs"
        }]
      }]
    }, {
      "name": "Pitch Values",
      "tables": [{
        "headerType": "worse-better",
        "rows": [{
          "description": "Relative number of runs for hitter facing fastballs (per 100 pitches).",
          "display": "Fastball",
          "key": "fastballRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing sliders (per 100 pitches).",
          "display": "Slider",
          "key": "sliderRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing cutters (per 100 pitches).",
          "display": "Cutter",
          "key": "cutterRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing curveballs (per 100 pitches).",
          "display": "Curve",
          "key": "curveballRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing changeups (per 100 pitches).",
          "display": "Change",
          "key": "changeupRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing splitters (per 100 pitches).",
          "display": "Splitter",
          "key": "splitFingerRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }, {
          "description": "Relative number of runs for hitter facing Knuckleballs (per 100 pitches).",
          "display": "Knuckleball",
          "key": "knuckleballRunsAboveAveragePerHundredPitches",
          "source": "fangraphs"
        }]
      }]
    }, {
      "name": "Injury Data",
    }
  ];

  return sections;

}

/* jshint esversion:6 */
function Modeler(options) {
  const modeler = this;

  init(options);

  return modeler;

  function init(options) {
    modeler.size = modeler.defineSize(options.size);
    modeler.chartMargins = modeler.defineChartMargins(options.chartMargins);
    modeler.svg = modeler.addSvg(options.where);
    modeler.referencePoints = modeler.defineReferencePoints();
    modeler.layers = modeler.addLayers();
    modeler.title = modeler.addTitle();
    modeler.subtitle = modeler.addSubtitle();
    modeler.warFormulation = modeler.addWARFormulation();
    modeler.BBRefWARButton = modeler.addBBRefWARButton();
    modeler.fangraphsWARButton = modeler.addFangraphsWARButton();
    modeler.projectionType = modeler.addProjectionType();
    modeler.similarPlayersButton = modeler.addSimilarPlayersButton();
    modeler.agingCurvesButton = modeler.addAgingCurvesButton();
    modeler.paneHint = modeler.addPaneHint();
    modeler.rightPane = modeler.addRightPane();
    modeler.paneContractDetails = modeler.addPaneContractDetails();
    modeler.projectedSurplusHeading = modeler.addProjectedSurplusHeading();
    modeler.projectedSurplusValue = modeler.addProjectedSurplusValue();
    modeler.contractValueHeading = modeler.addContractValueHeading();
    modeler.contractValueLabel = modeler.addContractValueLabel();
    modeler.editSalaryButton = modeler.addEditSalaryButton();
    modeler.editMarketValueButton = modeler.addEditMarketValueButton();
    modeler.contractYearsSlider = modeler.addContractYearsSlider();

    modeler.projections = {};
    modeler.projectionParameters = {
      "contractYears":3,
      "salary":[],
      "winValue":[]
    };

    modeler.key = modeler.addModelerKey();
    modeler.pane = modeler.addModelerPane();
    modeler.projectionValueData = {};
    modeler.chart = modeler.addChart();



  }

}

/* jshint esversion:6 */
ModelerKey = function(options) {
  let key = this;

  init(options);

  return key;

  function init(options) {
    console.log(options);
    
    key.styles = key.defineStyles(options);
    key.size = key.defineSize(options);
    key.position = {"x":66.67,"y":425};

    key.group = key.addGroup(options.where);
    key.playerHistory = key.addPlayerHistory();
    key.playerProjections = key.addPlayerProjections();
    key.similarPlayers = key.addSimilarPlayers();
    key.errorRange = key.addErrorRange();
    key.contractValue = key.addContractValue();

    key.visibleKeys = key.defineVisibleKeys();

    key
      .layout();

  }
};

/* jshint esversion:6 */
function ModelerPane(options) {
  const pane = this;

  init(options);

  return pane;

  function init(options) {

    pane.parent = options.parent;

    pane.styles = pane.defineStyles(options);

    pane.size = pane.defineSize(options);
    pane.referencePoints = pane.defineReferencePoints(options);

    pane.contractValues = pane.defineContractValues();
    pane.contractLength = 3;

    pane.group = pane.addGroup(options.where);
    pane.rect = pane.addRect();
    pane.title = pane.addTitle();

    pane.durationLabel = pane.addContractDurationLabel();
    pane.durationDescription = pane.addContractDescription();
    pane.contractSlider = pane.addContractYearsSlider();

    pane.salaryLabel = pane.addSalaryLabel();
    pane.salaryDescription = pane.addSalaryDescription();
    pane.salarySlider = pane.addSalarySlider();

    pane.winValueSliders = [];
    pane.marketValueLabel = pane.addMarketValueLabel();
    pane.marketValueDescription = pane.addMarketValueDescription();
    pane.winValueTable = pane.addWinValueTable();


    pane.saveButton = pane.addSaveButton();
    
    pane.updateContractYears();

    // pane.contractSlider = pane.addContractYearsSlider();
    // pane.yearGroup = pane.addYearGroup();
    // pane.salaryGroup = pane.addSalaryGroup();
    // pane.winValueGroup = pane.addWinValueGroup();
    // pane.totalContractValue = pane.addTotalContractValue();

    //
    // pane.yearLabels = pane.addYearLabels();
    // pane.salarySliders = pane.addSalarySliders();
    // pane.winValueSliders = pane.addWinValueSliders();
    //
    // pane.hasDragged = false;
    //
    // pane
    //   .updateContractYears();

  }

}

/* jshint esversion:6 */

function Numberline(options) {
  let chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.options = options;

    chart.size = chart.defaultSize(options);
    chart.margins = chart.defaultMargins(options);
    chart.styles = chart.defaultStyles(options);
    chart.referencePoints = chart.defineReferencePoints();
    chart.svg = chart.addSvg(options.where);
    chart.layers = chart.addLayers(chart.svg);
    chart.scale = chart.defineScale(options);

    chart.backgroundCircleMouseover = () => {  };
    chart.backgroundCircleMouseout = () => {  };

    chart.handleBackgroundCircleMouseover = function(datum) { chart.backgroundCircleMouseover(d3.select(this),datum); };
    chart.handleBackgroundCircleMouseout = function(datum) { chart.backgroundCircleMouseout(d3.select(this),datum); };

  }


}

/* jshint esversion:6 */
function NumberlineReference(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.svg = chart.addSvg(options.where);
    chart.styles = chart.defineStyles();
    chart.labels = chart.defineLabels(options.type);
    chart.leftText = chart.addLeftText();
    chart.rightText = chart.addRightText();
  }

  function defineStyles() {
  }

  function defineLabels(type) {
  }

  function addSvg(where) {
  }


  function addLeftText() {
  }

  function addRightText() {
  }
}

function PitcherConfig() {
  const config = this;
  init();
  return config;

  function init() {
    config.totalValue = config.defineTotalValue();
    config.pitchingOutcomes = config.definePitchingOutcomes();
    config.pitchDetails = config.definePitchDetails();

    config.tables = [config.totalValue,config.pitchingOutcomes,config.pitchDetails];
  }
}

/* jshint esversion:6 */
function PlayerMenu(loadCallback) {
  const menu = this;

  init();

  return menu;

  function init() {
    menu.currentSort = "";
    menu.filters = menu.defineFilters();
    menu.loadCallback = loadCallback;
    d3.csv("playerMenu.csv")
      .then((players) => {
        menu.showTable(menu,players,loadCallback);
      });
  }


}

/* jshint esversion:6 */
function Projection(data) {
  let projection = this;

  init(data);

  return projection;

  function init(data) {
    projection.data = data;
    projection.baseAge = projection.getBaseAge();
    projection.warCurveDeltas = projection.defineWarCurveDeltas();
    projection.relevantWarCurveDeltas = projection.getRelevantWarCurveDeltas();
    projection.baseBWar = projection.getBaseBWar();
    projection.threeYearBWar = projection.getThreeYearBWar();
    projection.bWarAgingCurveProjection = projection.getBWarAgingCurveProjection();
    projection.bWarSimilarPlayersRawData = projection.getBWarSimilarPlayersRawData();
    projection.bWarSimilarPlayersMax = projection.getBWarSimilarPlayersMax();
    projection.bWarSimilarPlayersMin = projection.getBWarSimilarPlayersMin();
    projection.bWarSimilarPlayersMean = projection.getBWarSimilarPlayersMean();

    console.log("--------- PLAYER PROJECTION -------");

    console.log("Data", data);
    console.log("BASE AGE: ", projection.baseAge);
    console.log("WIN CURVE DELTAS: ", projection.warCurveDeltas);
    console.log("WIN CURVE DELTAS: ", projection.relevantWarCurveDeltas);
    console.log("BASE BWAR: ", projection.baseBWar);
    console.log("THREE YEAR BWAR: ", projection.threeYearBWar);
    console.log("BWAR PROJECTION: ", projection.bWarAgingCurveProjection);
    console.log("BWAR SIMILAR PLAYERS RAW: ", projection.bWarSimilarPlayersRawData);
    console.log("BWAR SIMILAR PLAYERS MAX: ", projection.bWarSimilarPlayersMax);
    console.log("BWAR SIMILAR PLAYERS MEAN: ", projection.bWarSimilarPlayersMean);
    console.log("BWAR SIMILAR PLAYERS MIN: ", projection.bWarSimilarPlayersMin);

    console.log("-------------------");

  }
}

/* jshint esversion:6 */
function Slider(options) {
  const slider = this;

  init(options);

  return slider;

  function init(options) {
    slider.labelText = options.label;
    slider.significantDigits = slider.defaulter(options.significantDigits,2);
    slider.domain = slider.defaulter(options.domain,[0,1]);
    slider.currentValue = slider.defaulter(options.defaultValue,1);
    slider.dragLock = false;

    slider.dragCallback = () => { };

    slider.group = slider.addGroup(options.where);
    slider.layers = slider.addLayers();
    slider.size = slider.defineSize(options.size);
    slider.margins = slider.defineMargins(options.margins);
    slider.layout = slider.defineLayout(options.layout);
    slider.styles = slider.defineStyles();
    slider.referencePoints = slider.defineReferencePoints();


    slider.scale = slider.defineScale();

    slider.datum = {"name":"","value":slider.currentValue};

    slider.label = slider.addLabel();
    slider.track = slider.addSliderTrack();
    slider.valueLabel = slider.addValueLabel();

    slider.move(options.coordinates);

    slider.dragFunctions = slider.defineDragFunctions();
    slider.circle = slider.addSlidingCircle();
    slider.glowCircle = slider.addGlowCircle();

    slider.circleMouseover = () => {};
    slider.circleMouseout = () => {};


  }
}

/* jshint esversion:6 */
function Sparkline(options) {
  let spark = this;

  init(options);

  return spark;

  function init(options) {

    spark.where = options.where;
    spark.data = options.data;
    spark.yDomain = spark.defaulter(options.yDomain,[-2,10]);
    spark.size = spark.defineSize();
    spark.margins = spark.defineMargins();
    spark.referencePoints = spark.defineReferencePoints();
    spark.scales = spark.defineScales();
    spark.styles = spark.defineStyles();
    spark.areaGenerator = spark.defineAreaGenerator();

    spark.svg = spark.addSvg(spark.where);
    spark.zeroLine = spark.addZeroLine();
    spark.line = spark.addLine();
    spark.circles = spark.addCircles();

  }
}

/* jshint esversion:6 */
function StatsSection(options) {
  const section = this;

  init(options);

  return section;

  function init(options) {
    section.div = section.addDiv(options.where);
    section.header = section.addHeader(options.name);
    section.tables = section.addTables(options);
  }
  
}

/* jshint esversion:6 */

function StatsTable(options) {
  const table = this;

  init(options);

  return table;

  function init(options) {
    table.container = table.addContainer(options.where);
    table.header = table.addHeader(options.name);
    table.tableElement = table.addTableElement(options.where);
    table.headerRow = table.addTableHeaderRow(options);
    table.rows = options.rows;
    table.rowElements = table.generateRowElements(table.rows);
  }

}

/* jshint esversion:6 */

function StatsTableRow(options) {
  const tableRow = this;

  init(options);

  return this;

  function init(options) {

    tableRow.options = options;

    tableRow.rowElement = tableRow.addRowElement(options.where);
    tableRow.name = tableRow.addNameCell(tableRow.rowElement);
    tableRow.numberline = tableRow.addNumberline(tableRow.rowElement);
    tableRow.playerValue = tableRow.addPlayerValue(tableRow.rowElement);
    tableRow.sparkLine = tableRow.addSparkline(tableRow.rowElement);

  }


}

/* jshint esversion:6 */
function TextLabel(options) {
  const label = this;

  init(options);

  return label;

  function init(options) {
    label.values = options.values;
    label.text = options.text;
    label.styles = label.defineStyles(options);
    label.group = label.addGroup(options.where);
    label.background = label.addBackground(options);
    label.foreground = label.addForeground(options);
  }
}

/* jshint esversion:6 */

function Tooltip(options) {
  const tooltip = this;

  init(options);

  return tooltip;

  function init(options) {
    tooltip.div = tooltip.createDiv(options.where);
  }

}

/* jshint esversion:6 */
Button.prototype.addGroup = function(where) {
  const button = this;
  let group;

  group = where
    .append("g")
    .attr("cursor","pointer")
    .on('mouseover',function() { button.mouseover(); })
    .on('mouseout',function() { button.mouseout(); })
    .on('click',function() { button.mouseclick(); });

  return group;
};

/* jshint esversion:6 */
Button.prototype.addRect = function() {
  const button = this;

  let rect = button.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height",button.size.height)
    .attr("width",button.size.width)
    .attr("fill",button.styles.backgroundColor)
    .attr("stroke",button.styles.stroke)
    .attr("strokeWidth",button.styles.strokeWidth);

  return rect;
}

/* jshint esversion:6 */
Button.prototype.addText = function(text) {
  const button = this;
  let label;


  label = new TextLabel({
    "where":button.group,
    "foregroundColor":button.styles.foregroundColor,
    "backgroundColor":button.styles.backgroundColor,
    "fontFamily":button.styles.fontFamily,
    "fontWeight":button.styles.fontWeight,
    "text":text
  }).show()
  .move({
    "x":button.size.width / 2,
    "y":button.size.height / 2
  });

  return label;
};

/* jshint esversion:6 */
Button.prototype.defineSize = function(options) {
  const button = this;
  let size = defaulter(options.size,{});
  size.width = defaulter(size.width,100);
  size.height = defaulter(size.height,50);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
Button.prototype.defineStyles = function(options) {
  const button = this;
  let styles = defaulter(options.styles,{});

  styles.backgroundFill = defaulter(styles.backgroundFill,"orange");
  styles.stroke = defaulter(styles.stroke,"blue");
  styles.strokeWidth = defaulter(styles.strokeWidth,2);

  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.fontWeight = defaulter(styles.fontWeight,"bold");
  styles.fontForeground = defaulter(styles.fontForeground,"white");
  styles.fontBackground = defaulter(styles.fontBackground,"back");

  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue: defaultValue;
  }
}

/* jshint esversion: 6*/
Button.prototype.mouseclick = function() {
  const button = this;

  button.callback();

  return button;
};

/* jshint esversion:6 */
Button.prototype.mouseout = function() {
  const button = this;

  // Add style changes for mouseout

  return button;
};

/* jshint esversion:6 */
Button.prototype.mouseover = function() {
  const button = this;

  // Add style changes for mouseover

  return button;
};

/* jshint esversion:6 */
Button.prototype.hide = function() {
  const button = this;

  button.group
    .attr("display","none");

  return button;
}

/* jshint esversion:6 */
Button.prototype.move = function(coordinates) {
  const button = this;

  button.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return button;
}

/* jshint esversion:6 */
Button.prototype.registerCallback = function(callback) {
  const button = this;

  button.callback = callback;

  return button;
};

/* jshint esversion:6 */
Button.prototype.show = function() {
  const button = this;

  button.group
    .attr("display","block");

  return button;
}

/* jshint esversion:6 */
LineChart.prototype.addAllStarLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.allStarLineStroke)
    .attr("stroke-width",chart.styles.allStarLineStrokeWidth);

  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addAxes = function() {
  const chart = this;

  let axes = {};
  axes.x = chart.addXAxis();
  axes.y = chart.addYAxis();

  return axes;
};

/* jshint esversion:6 */
LineChart.prototype.addLayers = function() {
  const chart = this;

  let layers = {};

  layers.axes = chart.addSingleLayer();
  layers.title = chart.addSingleLayer();
  layers.projectionArea = chart.addSingleLayer();
  layers.backgroundLine = chart.addSingleLayer();
  layers.projection = chart.addSingleLayer();
  layers.foregroundLine = chart.addSingleLayer();
  layers.backgroundLabels = chart.addSingleLayer();
  layers.frontText = chart.addSingleLayer();

  return layers;

};

/* jshint esversion:6 */
LineChart.prototype.addMVPLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.mvpLineStroke)
    .attr("stroke-width",chart.styles.mvpLineStrokeWidth);

  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addProjectionArea = function() {
  const chart = this;

  let area = chart.layers.projectionArea
    .append("path")
    .attr("stroke","none")
    .attr("fill",chart.styles.projectionAreaFill);

  return area;

};

/* jshint esversion:6 */
LineChart.prototype.addProjectionCircles = function() {
  const chart = this;

  let projectionCircles = chart.layers.projection
    .selectAll(".circle")
    .data(chart.projection.bWarSimilarPlayersMean)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return chart.scales.x(d.age);})
    .attr("cy",(d) => { return chart.scales.y(d[chart.currentWarType]);})
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke)
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element;
      element = d3.select(this);

      element
        .attr("fill",chart.styles.playerYearHighlightFill);

      // chart.tooltip
      //   .showPlayerProjection(playerName,d);
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);

      chart.tooltip
        .hide();

      element
        .attr("fill",chart.styles.playerYearFill);

    });

  return projectionCircles;
};

/* jshint esversion:6 */
LineChart.prototype.addProjectionLine = function() {
  const chart = this;

  let line;

  line = chart.layers.projection
    .append("path")
    .datum([])
    .attr("stroke",chart.styles.projectionLine)
    .attr("stroke-width",chart.styles.projectionLineStroke)
    .attr("stroke-dasharray","5,5")
    .attr("fill","none")
    .attr("display","none")
    .attr("d",chart.lineGenerator);


  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addSingleLayer = function() {
  const chart = this;

  let layer;

  layer = chart.where
    .append("g");

  return layer;

};

/* jshint esversion:6 */
LineChart.prototype.addTitle = function() {
  const chart = this;

  let title;

  title = chart.layers.title
    .append("text")
    .attr("x",chart.referencePoints.midlineX)
    .attr("y",chart.referencePoints.titleTopY)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","central")
    .attr("font-size",chart.styles.titleFontSize)
    .attr("font-family",chart.styles.titleFontFamily)
    .attr("fill",chart.styles.titleFontFill)
    .attr("font-weight",styles.titleFontWeight)
    .text("Projected WAR");

  return title;

};

/* jshint esversion: 6 */
LineChart.prototype.addXAxis = function() {
  const chart = this;

  let xAxis;

  xAxis = chart.layers.axes
    .append("g")
    .attr("transform","translate(0,"+chart.referencePoints.yMin+")")
    .call(d3.axisBottom(chart.scales.x))
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);


  return xAxis;
};

/* jshint esversion:6 */
LineChart.prototype.addXAxisTitle = function() {
  const chart = this;
  let title;

  title = chart.layers.axes
    .append("text")
    .attr("text-anchor","middle")
    .attr("x",chart.referencePoints.midlineX)
    .attr("y",chart.size.height)
    .attr("font-size",chart.styles.axisTitleFontFamily)
    .attr("font-family",chart.styles.axisTitleFontFamily)
    .attr("fill",chart.styles.axisTitleFill)
    .attr("font-weight",chart.styles.axisTitleFontWeight)
    .text("Year (Age)");

  return title;
};

/* jshint esversion: 6 */
LineChart.prototype.addYAxis = function() {
  const chart = this;
  let yAxis;

  let axis = d3.axisLeft(chart.scales.y).ticks(3);

  yAxis = chart.layers.axes
    .append("g")
    .attr("transform","translate("+chart.referencePoints.xMin+",0)")
    .call(axis)
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);

  return yAxis;
};

/* jshint esversion:6 */
LineChart.prototype.addYAxisTitle = function() {
  const chart = this;

  let title;

  title = chart.layers.axes
    .append("text")
    .attr("x",chart.margins.left / 2)
    .attr("y",chart.referencePoints.midlineY)
    .attr("font-size",chart.styles.axisTitleFontFamily)
    .attr("font-family",chart.styles.axisTitleFontFamily)
    .attr("fill",chart.styles.axisTitleFill)
    .attr("font-weight",chart.styles.axisTitleFontWeight)
    .attr("text-anchor","end")
    .text("WAR");

  return title;

};

/* jshint esversion:6 */
LineChart.prototype.addZeroLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.zeroLineStroke)
    .attr("stroke-width",chart.styles.zeroLineStrokeWidth);

  return line;
};

/* jshint esversion:6 */
LineChart.prototype.addStarterLine = function() {
  let chart = this;
  let line;

  line = chart.layers.axes
    .append("line")
    .attr("stroke",chart.styles.starterLineStroke)
    .attr("stroke-width",chart.styles.starterLineStrokeWidth);

  return line;
};

/* jshint esversion:6 */
LineChart.prototype.createAreaGenerator = function() {
  const chart = this;
  let generator;

  generator = d3.area()
    .x((d) => { return chart.scales.x(d.age); })
    .y0((d) => { return chart.scales.y(d.min);})
    .y1((d) => { return chart.scales.y(d.max);});

  return generator;
};

/* jshint esversion:6 */
LineChart.prototype.createLineGenerator = function() {
  const chart = this;
  let generator;

  generator = d3.line()
    .x((d) => { return chart.scales.x(d.age);})
    .y((d) => { return chart.scales.y(d[chart.currentWARType]);});

  return generator;
};

/* jshint esversion:6 */
LineChart.prototype.defineReferencePoints = function() {
  const chart = this;

  let referencePoints = {};

  referencePoints.effectiveWidth = chart.size.width - chart.margins.left - chart.margins.right;
  referencePoints.effectiveHeight = chart.size.height - chart.margins.top - chart.margins.bottom;
  referencePoints.midlineX = (referencePoints.effectiveWidth / 2) + chart.margins.left;
  referencePoints.midlineY = (referencePoints.effectiveHeight / 2) + chart.margins.top;
  referencePoints.xAxisTitleTop = chart.size.height - (chart.margins.bottom / 2);
  referencePoints.titleTopY = chart.margins.top / 2;

  referencePoints.xMin = chart.margins.left;
  referencePoints.xMax = chart.margins.left + referencePoints.effectiveWidth;

  referencePoints.yMin = chart.margins.top + referencePoints.effectiveHeight;
  referencePoints.yMax = chart.margins.top;

  return referencePoints;

};

/* jshint esversion:6 */
LineChart.prototype.defineScales = function() {
  const chart = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([19,35])
    .range([chart.referencePoints.xMin,chart.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain([-2,10])
    .range([chart.referencePoints.yMin,chart.referencePoints.yMax]);

  return scales;

};

/* jshint esversion:6 */
LineChart.prototype.defineStyles = function() {
  const chart = this;

  let styles = {};

  styles.axisFontFamily = "Source Sans Pro";
  styles.axisFontSize = "10pt";

  styles.titleFontFamily = "Source Sans Pro";
  styles.titleFontSize = "18pt";
  styles.titleFontWeight = "bold";
  styles.titleFill = "black";
  styles.titleStroke = "white";

  styles.axisTitleFill = "black";
  styles.axisTitleFontSize = "0.75em";
  styles.axisTitleFontFamily = "Source Sans Pro";
  styles.axisTitleFontWeight = "bold";

  styles.playerYearFill = "white";
  styles.playerYearStroke = "blue";
  styles.playerYearHighlightFill = "blue";
  styles.playerYearLine = "#20639b";
  styles.playerYearLineStrokeWidth = 3;
  styles.playerProjectionDashArray = "5,5";
  styles.projectionAreaFill = "rgba(221,221,255,0.75)";
  styles.projectionAreaStroke = "#000";

  styles.compPlayerStroke = "#fafafa";
  styles.compPlayerStrokeWidth = 1;
  styles.compPlayerHighlightStroke = "black";

  styles.projectionLine = "#20639b";
  styles.projectionLineStroke = 3;

  styles.zeroLineStroke = "#333";
  styles.zeroLineStrokeWidth = 2;

  styles.starterLineStroke = "#666";
  styles.starterLineStrokeWidth = 1;

  styles.allStarLineStroke = "#999";
  styles.allStarLineStrokeWidth = 1;

  styles.mvpLineStroke = "#999";
  styles.mvpLineStrokeWidth = 1;

  return styles;


};

/* jshint esversion: 6 */
LineChart.prototype.addCompData = function(data) {
  const chart = this;

  chart.compPlayers = data;
  chart.compLines = [];
  chart.compCircles = [];
  chart.textLabels = [];

  let allBWarValues = [];
  let allAges = [];

  data.forEach((player) => {
    let group;
    let line;
    let mouseLine;
    let circles;
    let textLabels = [];
    let nameLabel;

    player.bWar.forEach((year) => {
      allBWarValues.push(year.bWar);
      allAges.push(year.age);
    });

    chart
      .updateYScale(d3.extent(allBWarValues))
      .updateXScale(d3.extent(allAges));



    group = chart.layers.backgroundLine
      .append("g")
      .on('mouseenter',function(d,i) {
        let element = line;
        let name = element.attr("data-name");
        element
          .attr("stroke",chart.styles.compPlayerHighlightStroke);

        nameLabel.show();
        textLabels.forEach((label) => {
          label.show();
        });


        circles.attr("fill","steelblue");
      })
      .on('mouseleave',function(d,i) {
        let element = line;

        element
          .attr("stroke","#ddd");

        circles.attr("fill",chart.styles.compPlayerStroke);

        textLabels.forEach((label) => {
          label.hide();
        });
        nameLabel.hide();

      });



    line = group
      .append("path")
      .attr("fill","none")
      .attr("stroke",chart.styles.compPlayerStroke)
      .attr("stroke-width",chart.styles.compPlayerStrokeWidth)
      .datum(player.bWar)
      .attr("d",chart.lineGenerator)
      .attr("cursor","pointer")
      .attr("data-name",player.name)
      .attr("data-labels",textLabels);

    mouseline = group
      .append("path")
      .attr("fill","none")
      .attr("stroke","rgba(0,0,0,0)")
      .attr("stroke-width",8)
      .datum(player.bWar)
      .attr("d",chart.lineGenerator)
      .attr("cursor","pointer");


    circles = group
      .selectAll("circle")
      .data(player.bWar)
      .enter()
      .append("circle")
      .attr("data-name",player.name)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.bWar); })
      .attr("r",2)
      .attr("fill","#ddd")
      .attr("cursor","pointer");



    player.bWar.forEach((year) => {

      let textLabel = new TextLabel({
        "text":year.bWar.toFixed(1),
        "where":chart.layers.frontText,
        "values":{"x":year.age,"y":year.bWar},
        "foregroundColor":chart.styles.compPlayerHighlightStroke,
      })
      .move({
        "x":chart.scales.x(year.age),
        "y":chart.scales.y(year.bWar)
      });
      textLabels.push(textLabel);
      chart.textLabels.push(textLabel);


    });

    nameLabel = new TextLabel({
      "text":player.name,
      "where":chart.layers.frontText,
      "values":{"x":player.bWar[player.bWar.length - 1].age - 0.5,"y":player.bWar[player.bWar.length - 1].bWar},
      "foregroundColor":chart.styles.compPlayerHighlightStroke,
      "fontSize":"14pt",
      "backgroundColor":"black",
      "textAnchor":"start"
    })
    .move({
      "x":chart.scales.x(player.bWar[player.bWar.length - 1].age) + 100,
      "y":chart.scales.y(player.bWar[player.bWar.length - 1].bWar)
    });
    chart.textLabels.push(nameLabel);

    chart.compLines.push(line);
    chart.compLines.push(mouseline);
    chart.compCircles.push(circles);

  });



  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.addData = function(data) {
  const chart = this;


  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.addPlayerData = function(data,projections,playerName) {
  const chart = this;

  chart.playerData = data;

  chart.projections = projections;
  chart.playerLine = chart.layers.foregroundLine
    .append("path")
    .datum(data)
    .attr("stroke",chart.styles.playerYearLine)
    .attr("stroke-width",chart.styles.playerYearLineStrokeWidth)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.playerCircles = chart.layers.foregroundLine
    .selectAll(".circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return chart.scales.x(d.age);})
    .attr("cy",(d) => { return chart.scales.y(d.bWar);})
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke)
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element = d3.select(this);


      chart.tooltip
        .showPlayerYear(playerName,d);

      element
        .attr("fill",chart.styles.playerYearHighlightFill);
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);

      chart.tooltip
        .hide();

      element
        .attr("fill",chart.styles.playerYearFill);

    });

  /*
  chart.meanProjectionLine = chart.layers.projection
    .append("path")
    .datum(projections.mean)
    .attr("stroke",chart.styles.playerYearLine)
    .attr("stroke-width",chart.styles.playerYearLineStrokeWidth)
    .attr("stroke-dasharray",chart.styles.playerProjectionDashArray)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.meanProjectionCircles = chart.layers.projection
    .selectAll(".circle")
    .data(projections.mean)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return chart.scales.x(d.age);})
    .attr("cy",(d) => { return chart.scales.y(d.bWar);})
    .attr("fill",chart.styles.playerYearFill)
    .attr("r",3)
    .attr("stroke",chart.styles.playerYearStroke)
    .attr("cursor","pointer")
    .on('mouseover',function(d,i) {
      let element;
      element = d3.select(this);

      element
        .attr("fill",chart.styles.playerYearHighlightFill);

      chart.tooltip
        .showPlayerProjection(playerName,d);
    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);

      chart.tooltip
        .hide();

      element
        .attr("fill",chart.styles.playerYearFill);

    });

  chart.projectionArea = chart.layers.projectionArea
    .append("path")
    .datum(projections.area)
    .attr("stroke","none")
    .attr("fill",chart.styles.projectionAreaFill)
    .attr("d",chart.areaGenerator);

  chart.top25ProjectionLine = chart.layers.projection
    .append("path")
    .datum(projections.top25)
    .attr("stroke",chart.styles.projectionAreaStroke)
    .attr("stroke-width",1)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);

  chart.bottom25ProjectionLine = chart.layers.projection
    .append("path")
    .datum(projections.bottom25)
    .attr("stroke",chart.styles.projectionAreaStroke)
    .attr("stroke-width",1)
    .attr("fill","none")
    .attr("d",chart.lineGenerator);
  */

  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.addProjection = function(projection) {
  const chart = this;
  chart.projection = projection;

  chart.projectionLine = chart.addProjectionLine();
  chart.projectionLine
    .datum(projection.bWarSimilarPlayersMean)
    .attr("display","block")
    .attr("d",chart.lineGenerator);


  chart.projectionCircles = chart.addProjectionCircles();
  chart.projectionCircles
    .data(projection.bWarSimilarPlayersMean)
    .attr("cx",(d) => { return chart.scales.x(d.age); })
    .attr("cy",(d) => { return chart.scales.y(d[chart.currentWarType]); });

  chart.projectionArea = chart.addProjectionArea();
  let projectionAreaData = [];

  chart.projection.bWarSimilarPlayersMax.forEach((season,index) => {
    let values = {};
    values.age = season.age;
    values.max = season.bWar;
    values.min = chart.projection.bWarSimilarPlayersMin[index].bWar;
    projectionAreaData.push(values);
  });

  chart.projectionArea
    .datum(projectionAreaData)
    .attr("d",chart.areaGenerator);

  chart.updateXScale();
  chart.updateYScale();

  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.showAgingCurveProjection = function() {
  const chart = this;

  chart.projectionArea
    .attr("opacity",1)
    .transition()
    .duration(250)
    .attr("opacity",0)
    .on("end",function() {
      d3.select(this)
        .attr("display","none");
    });

  chart.compLines.forEach((line,index) => {
    line
      .attr("opacity",1)
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("display","none");
      });
  });

  chart.compCircles.forEach((line,index) => {
    line
      .attr("opacity",1)
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("display","none");
      });
  });


  chart.projectionLine
    .datum(chart.projection.bWarAgingCurveProjection)
    .transition()
    .duration(375)
    .delay(175)
    .attr("d",chart.lineGenerator);

  chart.projectionCircles
    .data(chart.projection.bWarAgingCurveProjection)
    .transition()
    .duration(375)
    .delay(175)
    .attr("cx",(d) => { return chart.scales.x(d.age); })
    .attr("cy",(d) => { return chart.scales.y(d.bWar); });

  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.showAgingSimilarPlayersProjection = function() {
  const chart = this;

  chart.projectionArea
    .attr("display","block")
    .transition()
    .duration(250)
    .delay(125)
    .attr("opacity",0)
    .on("end",function() {
      d3.select(this)
        .attr("opacity",1);
    });

  chart.compLines.forEach((line,index) => {
    line
      .attr("display","block")
      .transition()
      .duration(250)
      .delay(125)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("opacity",1);
      });
  });

  chart.compCircles.forEach((line,index) => {
    line
      .attr("display","block")
      .transition()
      .duration(250)
      .duration(125)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("opacity",1);
      });
  });


  chart.projectionLine
    .datum(chart.projection.bWarSimilarPlayersMean)
    .transition()
    .duration(250)
    .attr("d",chart.lineGenerator);

  chart.projectionCircles
    .data(chart.projection.bWarSimilarPlayersMean)
    .transition()
    .duration(250)
    .attr("cx",(d) => { return chart.scales.x(d.age); })
    .attr("cy",(d) => { return chart.scales.y(d.bWar); });

  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.updateProjectionLines = function(projectionValues) {
  const chart = this;

  chart.projectionLine
    .datum(projectionValues.mean.yearData)
    .attr("d",chart.lineGenerator);

  return chart;
};

/* jshint esversion:6 */

LineChart.prototype.updateXScale = function(newExtent) {
  const chart = this;

  let domain = chart.scales.x.domain();

  let allYears = [];

  chart.playerData.forEach((datum) => {
    allYears.push(datum.age);
  });

  // Object.keys(chart.projections).forEach((projection) => {
  //   chart.projections[projection].forEach((datum) => {
  //     allYears.push(+datum.age);
  //   });
  // });

  chart.compPlayers.forEach((player) => {
    player.bWar.forEach((season) => {
      allYears.push(+season.age);
    });
  });



  chart.scales.x
    .domain(d3.extent(allYears));

  chart.zeroLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.starterLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.allStarLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.mvpLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));


  chart.playerLine
    .attr("d",chart.lineGenerator);

  if(chart.projection !== undefined) {
    chart.projectionLine
        .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .attr("cx",(d) => { return chart.scales.x(d.age); });
  }


  /*

  chart.projectionArea
    .attr("d",chart.areaGenerator);

  chart.bottom25ProjectionLine
      .attr("d",chart.lineGenerator);

  chart.top25ProjectionLine
    .attr("d",chart.lineGenerator);


  */

  chart.playerCircles
    .attr("cx",(d) => { return chart.scales.x(d.age); });

  chart.compLines.forEach((line) => {
    line
      .attr("d",chart.lineGenerator);
  });

  chart.textLabels.forEach((label) => {
      label.move({
        "x":chart.scales.x(+label.values.x),
        "y":chart.scales.y(label.values.y)
      });
  });

  chart.compCircles.forEach((circle) => {
    circle
      .attr("cx",(d) => { return chart.scales.x(d.age); });
  });

  chart.axes.x
    .call(d3.axisBottom(chart.scales.x).ticks(5));


  return chart;
};

/* jshint esversion:6 */
LineChart.prototype.updateYScale = function(newExtent) {
  const chart = this;

  let domain = chart.scales.y.domain();

  let allWar = [];

  // Object.keys(chart.projections).forEach((projection) => {
  //   chart.projections[projection].forEach((datum) => {
  //     allWar.push(+datum.bWar);
  //   });
  // });

  chart.compPlayers.forEach((player) => {
    player.bWar.forEach((season) => {
      allWar.push(+season.bWar);
    });
  });

  chart.zeroLine
    .attr("y1",chart.scales.y(0))
    .attr("y2",chart.scales.y(0));


  chart.starterLine
    .attr("y1",chart.scales.y(2))
    .attr("y2",chart.scales.y(2));

  if(d3.extent(allWar)[1] < 5) {
    chart.allStarLine
      .attr("display","none");
  } else {
    chart.allStarLine
      .attr("display","block");
  }

  chart.allStarLine
    .attr("y1",chart.scales.y(5))
    .attr("y2",chart.scales.y(5));

  if(d3.extent(allWar)[1] < 8) {
    chart.mvpLine
      .attr("display","none");
  } else {
    chart.mvpLine
      .attr("display","block");
  }

  chart.mvpLine
    .attr("y1",chart.scales.y(8))
    .attr("y2",chart.scales.y(8));


  chart.scales.y
    .domain(d3.extent(allWar));

  chart.playerLine
    .attr("d",chart.lineGenerator);

  if(chart.projection !== undefined) {

    chart.projectionLine
        .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });
  }


  /*
  chart.meanProjectionLine
      .attr("d",chart.lineGenerator);

  chart.bottom25ProjectionLine
      .attr("d",chart.lineGenerator);

  chart.top25ProjectionLine
    .attr("d",chart.lineGenerator);

  chart.projectionArea
    .attr("d",chart.areaGenerator);

  chart.meanProjectionCircles
    .attr("cy",(d) => { return chart.scales.y(d.bWar); });
  */

  chart.playerCircles
    .attr("cy",(d) => { return chart.scales.y(d.bWar); });

  chart.compLines.forEach((line) => {
    line
      .attr("d",chart.lineGenerator);
  });

  chart.textLabels.forEach((label) => {
      label.move({
        "x":chart.scales.x(+label.values.x),
        "y":chart.scales.y(label.values.y)
      });
  });

  chart.compCircles.forEach((circle) => {
    circle
      .attr("cy",(d) => { return chart.scales.y(d.bWar); });
  });

  chart.axes.y
    .call(d3.axisLeft(chart.scales.y).ticks(3));

  return chart;
};

/* jshint esversion:6 */
ModelerKey.prototype.addContractValue = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.contractValueStroke)
    .attr("strokeWidth",key.styles.lineStrokeWidth);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Contract Market"
  }).show()
  .move({
    "x":10,
    "y":-5
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Value"
  }).show()
  .move({
    "x":10,
    "y":5
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addErrorRange = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.rect = toReturn.group
    .append("rect")
    .attr("x",-5)
    .attr("y",-5)
    .attr("width",10)
    .attr("height",10)
    .attr("stroke","none")
    .attr("fill",key.styles.errorRangeFill);

  toReturn.errorRange = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Error Range"
  }).show()
  .move({
    "x":10,
    "y":-6
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Mean 50%"
  }).show()
  .move({
    "x":10,
    "y":6
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addGroup = function(where) {
  const key = this;
  let group;

  group = where
    .append("g")
    .attr("transform","translate("+key.position.x+","+key.position.y+")");

  return group;
};

/* jshint esversion:6 */
ModelerKey.prototype.addPlayerHistory = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.playerHistoryStroke)
    .attr("stroke-width",key.styles.lineStrokeWidth);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":""
  }).show()
  .move({
    "x":10,
    "y":-6
  });


  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Career bWar"
  }).show()
  .move({
    "x":10,
    "y":6
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addPlayerProjections = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.playerProjectionStroke)
    .attr("stroke-width",key.styles.lineStrokeWidth)
    .attr("stroke-dasharray",key.styles.playerProjectStrokeDasharray);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":""
  }).show()
  .move({
    "x":10,
    "y":-6
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Projected bWar"
  }).show()
  .move({
    "x":10,
    "y":6
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.addSimilarPlayers = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.similarPlayersStroke)
    .attr("stroke-width",key.styles.lineStrokeWidth);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Similar Players"
  }).show()
  .move({
    "x":10,
    "y":-6
  });


  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Career bWar"
  }).show()
  .move({
    "x":10,
    "y":6
  });


  return toReturn;
};

/* jshint esversion:6 */
ModelerKey.prototype.defineSize = function(options) {
  const key = this;
  let size = defaulter(options.size,{});

  size.height = defaulter(size.height,50);
  size.width = defaulter(size.width,433.33);

  return size;

  function defaulter(value,defaultValue) {
    return value === undefined ? defaultValue : value;
  }
};

/* jshint esversion:6 */
ModelerKey.prototype.defineStyles = function(options) {
  const key = this;
  let styles = defaulter(options.styles,{});

  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.fontSize = "8pt";
  styles.fontWeight = defaulter(styles.fontWeight,"bold");
  styles.lineStrokeWidth = defaulter(styles.lineStrokeWidth,4);
  styles.playerHistoryStroke = defaulter(styles.playerHistoryStroke,"#173f5f");
  styles.playerProjectionStroke = defaulter(styles.playerProjectionStroke,"#173f5f");
  styles.playerProjectStrokeDasharray = defaulter(styles.playerPrjectionStrokeDasharray,"3,3");
  styles.similarPlayersStroke = defaulter(styles.similarPlayersStroke,"#ddd");
  styles.contractValueStroke = defaulter(styles.contractValueStroke,"orange");
  styles.errorRangeFill = defaulter(styles.errorRangeFill,"#bbd");
  styles.textColor = defaulter(styles.textColor,"#173f5f");

  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
ModelerKey.prototype.defineVisibleKeys = function() {
  const key = this;
  let visible = {};

  visible.playerHistory = true;
  visible.playerProjections = true;
  visible.similarPlayers = true;
  visible.errorRange = true;
  visible.contractValue = true;

  return visible;
};

/* jshint esversion:6 */
ModelerKey.prototype.changeWarType = function(newType) {
  const key = this;

  key.playerHistory.warLabel
    .update("Career " + newType);

  key.playerProjections.warLabel
    .update("Projected " + newType);

  key.similarPlayers.warLabel
    .update("Career " + newType);

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.definePlayerName = function(name) {
  const key = this;

  key.playerHistory.playerNameLabel
    .update(name);

  lkey.playerProjections.playerNameLabel
    .update(name);

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.hideContractValue = function() {
  const key = this;

  key.contractValue.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.hideErrorRange = function() {
  const key = this;

  key.errorRange.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.hideSimilarPlayers = function() {
  const key = this;

  key.similarPlayers.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.layout = function() {
  const key = this;

  let trueValues = Object.keys(key.visibleKeys).filter((a) => { return key.visibleKeys[a]; }).length;
  let spacing = 140;

  let currentIndex = 0;
  let lastXPosition = 0;
  let yPosition = 0;
  let xPosition = 0;

  Object.keys(key.visibleKeys).forEach((keyName) => {
    if(key.visibleKeys[keyName]) {

      if((lastXPosition + spacing) > key.size.width) {
        yPosition += 30;
        xPosition = 0;
      } else {
        xPosition = lastXPosition;
      }

      key[keyName].group
        .attr("transform","translate("+xPosition+","+yPosition+")")
        .attr("display","block");

      currentIndex += 1;
      lastXPosition = xPosition + spacing;

    } else {
      key[keyName].group
        .attr("display","none");
    }

  });

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.playerName = function(name) {
  const key = this;

  key.playerHistory.playerNameLabel
    .updateText(name);

  key.playerProjections.playerNameLabel
    .updateText(name);

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.showContractValue = function() {
  const key = this;

  key.contractValue.group
    .attr("display","block");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.showErrorRange = function() {
  const key = this;

  key.errorRange.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerKey.prototype.showSimilarPlayers = function() {
  const key = this;

  key.similarPlayers.group
    .attr("display","none");

  key
    .layout();

  return key;
};

/* jshint esversion:6 */
ModelerPane.prototype.addContractDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlayContractDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayContractDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .html("Select a contract length:");

  return div;
};

/* jshint esversion:6 */
ModelerPane.prototype.addContractDurationLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlayContractCoordinates.x)
    .attr("y",pane.referencePoints.overlayContractCoordinates.y)
    .attr("font-size","12pt")
    .attr("font-weight","bold")
    .text("Contract Duration");

  return text;
};

/* jshint esversion:6 */
ModelerPane.prototype.addContractYearsSlider = function() {
  const pane = this;

  let slider;
  // TODO: REVIEW SLIDER OBJECT AND POPULATE

  slider = new Slider({
    "where":pane.group,
    "coordinates":pane.referencePoints.overlayContractSliderCoordinates,
    "label":"Contract Years",
    "domain":[1,15],
    "defaultValue":pane.contractValues.contractLength,
    "significantDigits":0,
    "size":{
      "width":pane.referencePoints.overlayColumnWidth
    }
  }).setDragCallback((newValue) => {
    pane.killAllGlows();
    pane.contractValues.contractLength = +newValue.toFixed(0);
    pane.updateContractYears();
    pane.hasDragged = true;
  })
  .runGlow();

  slider.circleMouseover = pane.hintMouseover();
  slider.circleMouseout = pane.hintMouseout();

  return slider;
};

/* jshint esversion:6 */
ModelerPane.prototype.addGroup = function(where) {
  const pane = this;

  group = where
    .append("g")
    .attr("transform","translate("+pane.referencePoints.offscreen.x+","+pane.referencePoints.offscreen.y+")");

  return group;
};

/* jshint esversion:6 */
ModelerPane.prototype.addMarketValueDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlayWinValueDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .html("Select a fair market value per WAR by year: ");

  return div;
};

/* jshint esversion:6 */
ModelerPane.prototype.addMarketValueLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlayWinValueCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueCoordinates.y)
    .attr("font-size","12pt")
    .attr("font-weight","bold")
    .text("Market Value of Wins");


  return text;
};

/* jshint esversion:6 */
ModelerPane.prototype.addRect = function() {
  const pane = this;

  let rect = pane.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",pane.size.width)
    .attr("height",pane.size.height)
    .attr("fill",pane.styles.backgroundColor)
    .attr("stroke","black")
    .attr("stroke-width",1);

  return rect;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalaryDescription = function() {
  const pane = this;

  let div = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlaySalaryDescriptionCoordinates.x)
    .attr("y",pane.referencePoints.overlaySalaryDescriptionCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayDescriptionHeight)
    .html("Select a contract average annual value ($AAV):");

  return div;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalaryGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.salaryGroupCoordinates.x+","+pane.referencePoints.salaryGroupCoordinates.y+")");

  return group;
}

/* jshint esversion:6 */
ModelerPane.prototype.addSalaryLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlaySalaryCoordinates.x)
    .attr("y",pane.referencePoints.overlaySalaryCoordinates.y)
    .attr("font-size","12pt")
    .attr("font-weight","bold")
    .text("Contract Value");


  return text;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalarySlider = function() {
  const pane = this;

  let slider;
  // TODO: REVIEW SLIDER OBJECT AND POPULATE

  slider = new Slider({
    "where":pane.group,
    "coordinates":pane.referencePoints.overlaySalarySliderCoordinates,
    "label":"AAV",
    "domain":[2,45],
    "defaultValue":pane.contractValues.aav,
    "significantDigits":0,
    "size":{
      "width":pane.referencePoints.overlayColumnWidth
    }
  }).setDragCallback((newValue) => {
    pane.killAllGlows();
    pane.contractValues.aav = +newValue.toFixed(0);
    pane.updateContractYears();
    pane.hasDragged = true;
  })
  .runGlow();

  slider.circleMouseover = pane.hintMouseover();
  slider.circleMouseout = pane.hintMouseout();

  return slider;
};

/* jshint esversion:6 */
ModelerPane.prototype.addSalarySliders = function() {
  const pane = this;

  let label = new TextLabel({
    "where":pane.group,
    "text":"Salary Per Year"
  })
  .show()
  .move({
    "x":pane.referencePoints.rightSixth + 100,
    "y":125
  });

  let sliders = [];

  d3.range(0,16).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let slider;

    slider = new Slider({
      "where":pane.group,
      "coordinates":{"x":pane.referencePoints.rightSixth - 50,"y":125 + yearIndex * pane.referencePoints.tableRowHeight},
      "label":"",
      "domain":[2,40],
      "defaultValue":pane.contractValues.salary[yearIndex],
      "significantDigits":2,
      "size":{
        "width":275
      }
    }).setDragCallback(function(newValue) {
      pane.contractValues.salary[yearIndex] = newValue;
      pane
        .updateContractValue();

      pane
        .killAllGlows();

      slider.valueLabel
        .updateText("$" + newValue.toFixed(2) + "M");

      pane.hasDragged = true;

    })
    .runGlow();

    slider.circleMouseover = pane.hintMouseover();
    slider.circleMouseout = pane.hintMouseout();

    sliders.push(slider);
  });

  return sliders;

  function sliderUpdate(newValue,yearIndex) {
    pane.contractValues.salary[yearIndex] = newValue;
    pane
      .updateContractValue();
  }

};

/* jshint esversion:6 */
ModelerPane.prototype.addSaveButton = function() {
  const pane = this;

  let button,
    rect,
    text;

  button = pane.group
    .append("g")
    .attr("cursor","pointer")
    .attr("transform","translate("+pane.referencePoints.saveButtonCoordinates.x+","+pane.referencePoints.saveButtonCoordinates.y+")")
    .on('click',function() {
      pane.finishEditing();
    });


  rect = button
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",pane.referencePoints.saveButtonSize.width)
    .attr("height",pane.referencePoints.saveButtonSize.height)
    .attr("fill","green");

  text = button
    .append("text")
    .attr("x",pane.referencePoints.saveButtonSize.width / 2)
    .attr("y",pane.referencePoints.saveButtonSize.height / 2)
    .attr("font-size","14pt")
    .attr("font-weight","bold")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .attr("fill","white")
    .text("SAVE");

  // button = new Button({
  //   "where":pane.group,
  //   "text":"Save",
  //   "coordinates":pane.referencePoints.buttonCoordinates
  // }).registerCallback(function() {
  //   pane.finishEditing();
  // });

  return button;
};

/* jshint esversion:6 */
ModelerPane.prototype.addTitle = function() {
  const pane = this;

  let title = pane.group
    .append("text")
    .attr("x",pane.referencePoints.titleCoordinates.x)
    .attr("y",pane.referencePoints.titleCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .text("Simulate a Contract for [Player Name]");

  return title;
};

/* jshint esversion:6 */
ModelerPane.prototype.addTotalContractValue = function() {
  const pane = this;

  let groupHeight = pane.referencePoints.topSixth;

  let toReturn = {};
  toReturn.group = pane.group
    .append("g")
    .attr("transform","translate(100,"+pane.referencePoints.bottomLine+")");

  toReturn.nameLabel = new TextLabel({
    "where":toReturn.group,
    "text":"Total Contract Cost",
    "fontFamily":pane.styles.fontFamily,
    "fontSize":pane.styles.contractCostLabelFontSize,
    "fontWeight":pane.styles.contractCostLabelFontWeight,
    "textAnchor":"middle"
  }).move({
    "x":0,
    "y":groupHeight / 4
  })
  .show();

  toReturn.contractValueLabel = new TextLabel({
    "where":toReturn.group,
    "text":"$MM",
    "fontFamily":pane.styles.fontFamily,
    "fontSize":pane.styles.contractCostFontSize,
    "fontWeight":pane.styles.contractCostFontWeight,
    "textAnchor":"middle"
  }).move({
    "x":0,
    "y":groupHeight * 2 / 3
  })
  .show();

  return toReturn;
};

/* jshint esversion:6 */
ModelerPane.prototype.addWinValueGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.winValueGroupCoordinates.x+","+pane.referencePoints.winValueGroupCoordinates.y+")");

  return group;
}

/* jshint esversion:6 */
ModelerPane.prototype.addWinValueSliders = function() {
  const pane = this;

  let sliders = [];
  d3.range(0,16).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let slider;

    slider = new Slider({
      "where":pane.group,
      "coordinates":{"x":pane.referencePoints.centerX,"y":125 + yearIndex * pane.referencePoints.tableRowHeight},
      "label":"",
      "domain":[8,25],
      "defaultValue":pane.contractValues.winValue[yearIndex],
      "significantDigits":2,
      "size":{
        "width":275
      }
    }).setDragCallback(function(newValue) {
      pane.contractValues.winValue[yearIndex] = newValue;

      slider.valueLabel
        .updateText("$" + newValue.toFixed(2) + "mm");

      pane
        .updateContractValue();

      pane
        .killAllGlows();

      pane.hasDragged = true;
    })
    .runGlow();

    slider.circleMouseover = pane.hintMouseover();
    slider.circleMouseout = pane.hintMouseout();


    sliders.push(slider);
  });

  return sliders;

  function sliderUpdate(newValue,yearIndex) {
    pane.contractValues.winValue[yearIndex] = newValue;
  }

};

/* jshint esversion:6 */
ModelerPane.prototype.addWinValueTable = function() {
  const pane = this;
  let foreignObject = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlayWinValueTableCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueTableCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayColumnTableHeight)
    .style("overflow","scroll");

  let foreignBody = foreignObject
    .append("xhtml:body")
    .attr("height","100%")
    .attr("width","100%")
    .style("overflow","scroll");


  d3.range(0,16).forEach((number) => {
    let embeddedSvg = foreignBody
      .append("svg")
      .attr("width",pane.referencePoints.overlayColumnWidth)
      .attr("height",50);

    let year = number + 2019;

    let slider = new Slider({
      "where":embeddedSvg,
      "label":year,
      "coordinates":{"x":0,"y":0},
      "domain":[8,30],
      "defaultValue":pane.contractValues.winValue[number],
      "significantDigits":0,
      "size":{
        "width":pane.referencePoints.overlayColumnWidth - 10,
        "height":35
      }
    }).setDragCallback((newValue) => {
      pane.contractValues.winValue[number] = +newValue.toFixed(2);
      pane.killAllGlows();
      pane.updateContractValue();
      pane.hasDragged = true;
    })
    .runGlow();

    pane.winValueSliders.push(slider);
  });

  return foreignObject;
};

/* jshint esversion:6 */
ModelerPane.prototype.addYearGroup = function() {
  const pane = this;

  let group = pane.group
    .append("g")
    .attr("transform","translate("+pane.referencePoints.yearGroupCoordinates.x+","+pane.referencePoints.yearGroupCoordinates.y+")");

  return group;
}

/* jshint esversion:6 */
ModelerPane.prototype.addYearLabels = function() {
  const pane = this;

  let labels = [];
  d3.range([0,16]).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let label = new TextLabel({
      "where":pane.yearGroup,
      "text":year,
      "textAnchor":"end"
    }).move({
      "x":0,
      "y":(yearIndex + 1) * pane.referencePoints.tableRowHeight
    })
    .show();

    labels.push(label);
  });


  return labels;
}

/* jshint esversion:6 */
ModelerPane.prototype.defineContractValues = function() {
  const pane = this;
  let values = {};
  values.contractLength = 3;
  values.aav = 10;
  values.salary = [];
  // TODO: COPY OVER WIN VALUES

  d3.range(0,16).forEach((year) => { values.salary.push(10); });
  values.winValue = [10.5,11.03,11.58,12.16,12.76,13.41,14.07,14.77,15.51,16.29,17.10,17.96,18.857,19.80,20.79,21.83];
  return values;
};

/* jshint esversion:6 */
ModelerPane.prototype.defineReferencePoints = function() {
  const pane = this;
  let referencePoints = {};

  referencePoints.centerX = pane.size.width / 2;
  referencePoints.centerY = pane.size.height / 3;
  referencePoints.topSixth = referencePoints.topThird / 2;
  referencePoints.topThird = pane.size.height / 3;
  referencePoints.secondThird = referencePoints.topThird * 2;

  referencePoints.titleCenter = referencePoints.topThird / 6;
  referencePoints.titleCoordinates = {"x":referencePoints.centerX,"y":referencePoints.titleCenter};
  referencePoints.contractSliderCenter = referencePoints.titleCenter * 2;

  referencePoints.rightSixth = pane.size.width / 6;
  referencePoints.rightThird = pane.size.width / 3;
  referencePoints.rightSecondThird = referencePoints.rightThird * 2;

  referencePoints.yearGroupCoordinates = {"x":referencePoints.rightSixth,"y":referencePoints.topThird};
  referencePoints.salaryGroupCoordinates = {"x":referencePoints.rightThird,"y":referencePoints.topThird};
  referencePoints.winValueGroupCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.topThird};

  referencePoints.topSixth = referencePoints.topThird / 2;

  referencePoints.bottomLine = pane.size.height - referencePoints.topSixth;
  referencePoints.bottomCenter = pane.size.height - (referencePoints.topSixth);

  referencePoints.tableRowHeight = (referencePoints.bottomLine - referencePoints.topThird) / 15;

  referencePoints.buttonCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.bottomCenter };

  referencePoints.offscreen = {"x":800,"y":0};
  referencePoints.onscreen = {"x":83.33,"y":0};


  referencePoints.titleCoordinates = {
    "x":14.92,
    "y":41.67
  };



  referencePoints.overlayPlaneSize = {
    "width":716.67,
    "height":500
  };

  referencePoints.overlayPlaneOffscreen = {
    "x":800,
    "y":0
  };

  referencePoints.overlayPlaneOnscreen = {
    "x":83.33,
    "y":0
  };

  referencePoints.overlayTitleCoordinates = {
    "x":14.92,
    "y":41.67
  };

  referencePoints.overlayContractCoordinates = {
    "x":14.92,
    "y":104.17
  };

  referencePoints.overlayContractDescriptionCoordinates = {
    "x":14.92,
    "y":125
  };

  referencePoints.overlayContractSliderCoordinates =  {
    "x":14.92,
    "y":177.083
  };

  referencePoints.overlaySalaryCoordinates = {
    "x":253.94,
    "y":104.17
  };

  referencePoints.overlaySalaryDescriptionCoordinates = {
    "x":253.94,
    "y":125
  };

  referencePoints.overlaySalarySliderCoordinates =  {
    "x":253.94,
    "y":177.083
  };

  referencePoints.overlayWinValueCoordinates = {
    "x":492.94,
    "y":104.17
  };

  referencePoints.overlayWinValueDescriptionCoordinates = {
    "x":492.94,
    "y":125
  };

  referencePoints.overlayWinValueTableCoordinates = {
    "x":492.94,
    "y":177.083
  };

  referencePoints.saveButtonCoordinates = {
    "x":492.94,
    "y":437.5
  };

  referencePoints.saveButtonSize = {
    "width":209.13,
    "height":41.667
  };

  referencePoints.contractDetailsHeadingCoordinates = {
    "x":625,
    "y":41.68
  };

  referencePoints.projectedSurplusHeadingCoordinates = {
    "x":566.67,
    "y":72.92
  };

  referencePoints.projectedSurplusValueCoordinates = {
    "x":566.67,
    "y":93.75
  };

  referencePoints.contractValueHeadingCoordinates = {
    "x":700,
    "y":72.92
  };

  referencePoints.contractValueCoordinates = {
    "x":700,
    "y":93.75
  };

  referencePoints.editSalaryButtonCoordinates = {
    "x":566.67,
    "y":197.92
  };

  referencePoints.winValueButtonCoordinates = {
    "x":700,
    "y":197.92
  };

  referencePoints.contractTableCoordinates = {
    "x":483.333,
    "y":197.92
  };

  referencePoints.contractTableSize = {
    "width":300,
    "height":260.41
  };

  referencePoints.overlayColumnWidth = 209.13;
  referencePoints.overlayDescriptionHeight = 41.667;
  referencePoints.overlaySliderHeight = 41.667;
  referencePoints.overlayColumnTableHeight = 218.75;



  return referencePoints;
};

/* jshint esversion:6 */
ModelerPane.prototype.defineSize = function(options) {
  const pane = this;
  let size = defaulter(options.size,{});

  size.height = defaulter(size.height,500);
  size.width = defaulter(size.width,717);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
ModelerPane.prototype.defineStyles = function(options) {
  const pane = this;
  let styles = defaulter(options.styles,{});

  styles.backgroundColor = defaulter(styles.backgroundColor,"white");
  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.titleFontSize = defaulter(styles.titleFontSize,"16pt");
  styles.titleFontWeight = defaulter(styles.titleFontWeight,"bold");

  styles.contractCostLabelFontSize = defaulter(styles.contractCostLabelFontSize,"10pt");
  styles.contractCostLabelFontWeight = defaulter(styles.contractCostLabelFontWeight,"normal");

  styles.contractCostFontSize = defaulter(styles.contractCostFontSize,"14pt");
  styles.contractCostFontWeight = defaulter(styles.contractCostFontWeight,"bold");

  return styles;
  
  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
ModelerPane.prototype.finishEditing = function() {
  const pane = this;

  pane
    .transitionOut();

  pane.contractValues.salary.forEach((value,index) => {
    pane.contractValues.salary[index] = pane.contractValues.aav;
  });

  pane.parent
    .dataFromPane(pane.contractValues);

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.hintMouseout = function() {
  return () => {
    const pane = this;

    pane.tooltip
      .hide();
      
    return pane;
  };
};

/* jshint esversion:6 */
ModelerPane.prototype.hintMouseover = function() {
  return () => {
    const pane = this;
    if(!pane.hasDragged) {
      pane.tooltip
        .update("Click and drag to change value.")
        .show()
        .move();      
    }
    return pane;
  };
};

/* jshint esversion:6 */
ModelerPane.prototype.killAllGlows = function() {
  const modeler = this;

  modeler.contractSlider
    .killGlow();

  modeler.salarySlider
    .killGlow();

  modeler.winValueSliders.forEach((slider) => {
    slider
      .killGlow();
  });

  return modeler;
};

/* jshint esversion:6 */
ModelerPane.prototype.registerTooltip = function(tooltip) {
  const pane = this;

  pane.tooltip = tooltip;

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.transitionIn = function() {
  const pane = this;

  pane.group
    .transition()
    .duration(500)
    .attr("transform","translate("+pane.referencePoints.onscreen.x+","+pane.referencePoints.onscreen.y+")");

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.transitionOut = function() {
  const pane = this;

  pane.group
    .transition()
    .duration(225)
    .attr("transform","translate("+pane.referencePoints.offscreen.x+","+pane.referencePoints.offscreen.y+")");

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.updateContractValue = function() {
  const pane = this;


  let totalValue;
  totalValue = 0;

  totalValue = pane.contractValues.contractLength * pane.contractValues.aav;

  pane.salarySlider.valueLabel.updateText("$" + pane.contractValues.aav.toFixed(2) + "M");

  pane.contractValues.winValue.forEach((value,yearIndex) => {
    pane.winValueSliders[yearIndex].valueLabel.updateText("$" + pane.contractValues.winValue[yearIndex].toFixed(2) + "M");
  });


  // pane.totalContractValue.contractValueLabel
  //   .updateText("$" + totalValue.toFixed(0) + "mm");

  return pane;
};

/* jshint esversion:6 */
ModelerPane.prototype.updateContractYears = function() {
  const pane = this;

  // pane.yearLabels.forEach((label,yearIndex) => {
  //   if(yearIndex >= pane.contractValues.contractLength) {
  //     label
  //       .hide();
  //   }
  // });


  // pane.salarySliders.forEach((slider,yearIndex) => {
  //   if(yearIndex >= pane.contractValues.contractLength) {
  //     slider
  //       .hide();
  //   } else {
  //     slider
  //       .show();
  //   }
  // });
  
  pane.winValueSliders.forEach((slider,yearIndex) => {
    if(yearIndex >= pane.contractValues.contractLength) {
      slider
        .hide();
    } else {
      slider
        .show();
    }
  });

  pane
    .updateContractValue();


  return pane;
};

/* jshint esversion:6 */
Numberline.prototype.addLayers = function(where) {
  const chart = this;

  let layers = {};

  layers.base = chart.singleLayer(where);
  layers.labels = chart.singleLayer(where);
  layers.summaryIndicators = chart.singleLayer(where);
  layers.axis = chart.singleLayer(where);
  layers.baseData = chart.singleLayer(where);
  layers.highlightData = chart.singleLayer(where);
  layers.activeLayer = chart.singleLayer(where);

  return layers;
};

/* jshint esversion:6 */
Numberline.prototype.singleLayer = function(where) {
  let layer;

  layer = where
    .append("g");

  return layer;
};

/* jshint esversion:6 */
Numberline.prototype.addSvg = function(where) {
  const chart = this;

  let svg;

  svg = d3.select(where)
    .append("svg")
    .attr("width",chart.size.width)
    .attr("height",chart.size.height)
    .on('mouseleave',() => {
      chart.tooltip.hide();
    });

  return svg;
  
};

/* jshint esversion:6 */
Numberline.prototype.defaultMargins = function(options) {
  const chart = this;
  let margins = {};
  options.margins = chart.defaulter(options.margins,{});
  margins.left = chart.defaulter(options.margins.left,10);
  margins.right = chart.defaulter(options.margins.right,10);
  margins.top = chart.defaulter(options.margins.top,5);
  margins.bottom = chart.defaulter(options.margins.bottom,10);
  return margins;  
};

/* jshint esversion:6 */
Numberline.prototype.defaultSize = function(options) {
  const chart = this;

  let size = {};
  options.size = chart.defaulter(options.size,{});
  size.height = chart.defaulter(options.height,30);
  size.width = chart.defaulter(options.width,500);
  return size;
};

/* jshint esversion:6 */
Numberline.prototype.defaultStyles = function(options) {
  const chart = this;
  let styles = {};
  options.styles = chart.defaulter(options.styles,{});
  styles.inactiveCircleRadius = chart.defaulter(options.styles.inactiveCircleRadius,3);
  styles.inactiveCircleFill  = chart.defaulter(options.styles.inactiveCircleFill,"#fff");
  styles.inactiveCircleOpacity = chart.defaulter(options.styles.inactiveCircleOpacity,1);
  styles.inactiveCircleStroke = chart.defaulter(options.styles.inactiveCircleStroke,"#333");
  styles.inactiveCircleStrokeWidth = chart.defaulter(options.styles.inactiveCircleStrokeWidth,1);

  styles.activeCircleRadius = chart.defaulter(options.activeCircleRadius,7);
  styles.activeCircleFill = chart.defaulter(options.styles.activeCircleFill,"#3caea3");
  styles.activeCircleOpacity = chart.defaulter(options.styles.activeCircleFillOpacity,1.0);
  styles.activeCircleStroke = chart.defaulter(options.styles.activeCircleStroke,"red");
  styles.activeCircleStrokeWidth = chart.defaulter(options.styles.activeCircleStrokeWidth,10);

  styles.highlightedCircleRadius = chart.defaulter(options.styles.highlightedCircleRadius,7);
  styles.highlightedCircleFill = chart.defaulter(options.styles.highlightedCircleFill,"#f6d55c");
  styles.highlightedCircleOpacity = chart.defaulter(options.styles.highlightedCircleOpacity,1.0);
  styles.highlightedCircleStroke = chart.defaulter(options.styles.highlightedCircleStroke,"gray");
  styles.highlightedCircleStrokeWidth = chart.defaulter(options.styles.highlightedCircleStrokeWidth,1);

  styles.meanIndicatorStroke = "black";
  styles.meanIndicatorStrokeWidth = 2;
  styles.oneStandardDeviationIndicatorFill = "#4978A4";
  styles.twoStandardDeviationIndicatorFill = "#D7DDE3";
  styles.indicatorFontSize = "8pt";
  styles.indicatorFontFamily = "Helvetica Neue";
  styles.indicatorFill = "#666";
  styles.indicatorHighlightColor = "#ed553b";
  styles.indicatorHighlightStrokeWidth = 3;

  return styles;
};

/* jshint esversion: 6 */
Numberline.prototype.defaulter = function(option,defaultValue) {
  return value = option ? option : defaultValue;
};

/* jshint esversion:6 */
Numberline.prototype.defineReferencePoints = function() {
  const chart = this;
  let referencePoints = {};

  referencePoints.effectiveHeight = chart.size.height - chart.margins.top - chart.margins.bottom;
  referencePoints.midline = chart.margins.top + referencePoints.effectiveHeight / 2;
  referencePoints.bottomBaseline = chart.size.height - chart.margins.bottom;

  return referencePoints;
};

/* jshint esversion:6 */
Numberline.prototype.defineScale = function() {
  const chart = this;
  let scale;

  scale = d3.scaleLinear()
    .range([chart.margins.left,chart.size.width - chart.margins.right]);

  return scale;
};

/* jshint esversion:6 */
Numberline.prototype.addBackgroundCircles = function(dataset) {
  const chart = this;

  let selection;

  chart.setBackgroundCircleMouseover();
  chart.setBackgroundCircleMouseout();


  selection = chart.layers.baseData
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cursor","pointer")
    .attr("cx",function(d) { return chart.scale(d.value); })
    .attr("cy",chart.referencePoints.midline)
    .attr("r",chart.styles.inactiveCircleRadius)
    .attr("fill",chart.styles.inactiveCircleFill)
    .attr("stroke",chart.styles.inactiveCircleStroke)
    .attr("stroke-width",chart.styles.inactiveCircleStrokeWidth)
    .attr("opacity",chart.styles.inactiveCircleOpacity)
    .on('mouseover',chart.handleBackgroundCircleMouseover);


  return selection;
};

/* jshint esversion:6 */
Numberline.prototype.addData = function(dataset) {
  const chart = this;
  let values = dataset.map((d) =>  {return d.value;});

  chart
    .updateScale(values);

  chart.summaryData = chart
    .calculateSummaryData(values);

  chart.twoStandardDeviationIndicators = chart
    .addTwoStandardDeviationIndicators();

  chart.oneStandardDeviationIndicator = chart
    .addOneStandardDeviationIndicator();

  chart.meanIndicator = chart
    .addmeanIndicator();

  chart.highlightCircle = chart
    .addHighlightCircle();

  chart.backgroundCircles = chart
    .addBackgroundCircles(dataset);

  chart.meanText = chart
    .addMeanText();

  chart.oneDeviationText = chart
    .addOneDeviationText();

  chart.twoDeviationText = chart
    .addTwoDeviationText();

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.addHighlightCircle = function() {
  const chart = this;

  let circle;

  circle = chart.layers.highlightData
    .append("circle")
    .attr("r",chart.styles.inactiveCircleRadius)
    .attr("cy",chart.referencePoints.midline)
    .attr("fill",chart.styles.activeCircleFill)
    .attr("stroke",chart.styles.highlightCircleStroke)
    .attr("stroke-width",chart.styles.highlightCircleStrokeWidth)
    .attr("opacity",chart.styles.highlightStrokeOpacity)
    .attr("cursor","pointer")
    .style("display","none")
    .on('mouseout',chart.handleBackgroundCircleMouseout)
    .on('mouseexit',chart.handleBackgroundCircleMouseout);

  return circle;
};

/* jshint esversion:6 */
Numberline.prototype.addHighlightValue = function(datum) {
  const chart = this;

  let circle;

  circle = chart.layers.activeLayer
    .append("circle")
    .attr("cy",chart.referencePoints.midline)
    .attr("cx",chart.scale(datum))
    .attr("r",chart.styles.highlightedCircleRadius)
    .attr("stroke","black")
    .attr("fill",chart.styles.highlightedCircleFill);

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.addmeanIndicator = function() {
  const chart = this;

  let indicator = chart.layers.summaryIndicators
    .append("line")
    .attr("y1",chart.margins.top)
    .attr("y2",chart.size.height - chart.margins.bottom)
    .attr("x1",chart.scale(chart.summaryData.mean))
    .attr("x2",chart.scale(chart.summaryData.mean))
    .attr("stroke",chart.styles.meanIndicatorStroke)
    .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

  return indicator;
};

/* jshint esversion:6 */
Numberline.prototype.addMeanText = function() {
  const chart = this;

  let text;

  text = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.mean))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("&mu;")
    .on('mouseover',() => {
      chart.meanIndicator
        .attr("stroke-width",chart.styles.indicatorHighlightStrokeWidth)
        .attr("stroke",chart.styles.indicatorHighlightColor);

      chart.meanText
        .attr("fill",chart.styles.indicatorHighlightColor);

      chart.tooltip
        .showNumberlineMean(chart.summaryData,chart.options.name);

    })
    .on('mouseout',() => {
      chart.meanIndicator
        .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth)
        .attr("stroke",chart.styles.meanIndicatorStroke);

      chart.meanText
        .attr("fill",chart.styles.indicatorFill);

      chart.tooltip
        .hide();
    });

  return text;
};

/* jshint esversion:6 */
Numberline.prototype.addOneDeviationText = function() {
  const chart = this;

  let indicators = {};

  let highlightOneDeviation = () => {
    chart.oneStandardDeviationIndicator
      .attr("stroke",chart.styles.indicatorHighlightColor)
      .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

    chart.oneDeviationText.negative
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.oneDeviationText.positive
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.tooltip
      .showOneStandardDeviation(chart.summaryData,chart.options.name);

  };

  let unhighlightOneDeviation = () => {
    chart.oneStandardDeviationIndicator
      .attr("stroke","none");

    chart.oneDeviationText.negative
      .attr("fill",chart.styles.indicatorFill);

    chart.oneDeviationText.positive
      .attr("fill",chart.styles.indicatorFill);

    chart.tooltip
      .hide();
  };

  indicators.negative = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("-&sigma;")
    .on('mouseover',highlightOneDeviation)
    .on('mouseout',unhighlightOneDeviation);

  indicators.positive = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.oneAboveStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("+&sigma;")
    .on('mouseover',highlightOneDeviation)
    .on('mouseout',unhighlightOneDeviation);

  return indicators;
};

/* jshint esversion: 6*/
Numberline.prototype.addOneStandardDeviationIndicator = function() {
  const chart = this;

  let indicator;

  indicator = chart.layers.summaryIndicators
    .append("rect")
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("y",chart.margins.top)
    .attr("width",chart.scale(chart.summaryData.oneAboveStandardDeviation) - chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("height",chart.size.height - chart.margins.top - chart.margins.bottom)
    .attr("fill",chart.styles.oneStandardDeviationIndicatorFill);

  return indicator;
};

/* jshint esversion:6 */
Numberline.prototype.addTwoDeviationText = function() {
  const chart = this;

  let indicators = {};


  let highlightTwoDeviations = () => {
    chart.twoStandardDeviationIndicators
      .attr("stroke",chart.styles.indicatorHighlightColor)
      .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

    chart.twoDeviationText.negative
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.twoDeviationText.positive
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.tooltip
      .showTwoStandardDeviations(chart.summaryData,chart.options.name);

  };

  let unhighlightTwoDeviations = () => {
    chart.twoStandardDeviationIndicators
      .attr("stroke","none");

    chart.twoDeviationText.negative
      .attr("fill",chart.styles.indicatorFill);

    chart.twoDeviationText.positive
      .attr("fill",chart.styles.indicatorFill);

    chart.tooltip
      .hide();

  };

  indicators.negative = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("-2&sigma;")
    .on('mouseover',highlightTwoDeviations)
    .on('mouseout',unhighlightTwoDeviations);

  indicators.positive = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.twoAboveStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("+2&sigma;")
    .on('mouseover',highlightTwoDeviations)
    .on('mouseout',unhighlightTwoDeviations);

  return indicators;
};

/* jshint esversion:6 */
Numberline.prototype.addTwoStandardDeviationIndicators = function() {
  const chart = this;

  let indicator;

  indicator = chart.layers.summaryIndicators
    .append("rect")
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("y",chart.margins.top)
    .attr("width",chart.scale(chart.summaryData.twoAboveStandardDeviation) - chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("height",chart.referencePoints.effectiveHeight)
    .attr("fill",chart.styles.twoStandardDeviationIndicatorFill);

  return indicator;
};

/* jshint esversion:6*/
Numberline.prototype.calculateSummaryData = function(values) {
  let summaryData = {};

  summaryData.mean = d3.mean(values);
  summaryData.standardDeviation = d3.deviation(values);
  summaryData.oneAboveStandardDeviation = summaryData.mean + summaryData.standardDeviation;
  summaryData.twoAboveStandardDeviation = summaryData.mean + 2 * summaryData.standardDeviation;
  summaryData.oneBelowStandardDeviation = summaryData.mean - summaryData.standardDeviation;
  summaryData.twoBelowStandardDeviation = summaryData.mean - 2 * summaryData.standardDeviation;

  return summaryData;
};

/* jshint esversion:6 */
Numberline.prototype.hideHighlight = function() {
  const chart = this;

  chart.highlightCircle
    .style("display","none");

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.registerTooltip = function(tooltip) {
  const chart = this;

  chart.tooltip = tooltip;

  return chart;
};

/* jshint esversion:6*/
Numberline.prototype.setBackgroundCircleMouseout = function() {
  const chart = this;

  chart.backgroundCircleMouseout = (circle,datum) => {
    chart
      .hideHighlight();

    chart
      .tooltip
      .hide();
  };

};

/* jshint esversion:6 */
Numberline.prototype.setBackgroundCircleMouseover = function() {
  const chart = this;

  chart.backgroundCircleMouseover = (circle,datum) => {
    chart.showHighlight(datum);
    let toPass = datum;
    toPass.value = circle.datum().value;
    toPass.chartName = chart.options.name;
    toPass.summaryData = chart.summaryData;
    chart.tooltip.showNumberlineDatum(toPass);
  };

};

/* jshint esversion:6 */
Numberline.prototype.showHighlight = function(datum) {
  const chart = this;

  chart.highlightCircle
    .attr("cx",chart.scale(datum.value))
    .style("display","block");

  return chart;
};

/* jshint esversion:6 */
Numberline.prototype.updateScale = function(values) {
  const chart = this;

  let extent,
    rangeMax,
    rangeMin;

  extent = d3.extent(values);
  rangeMax = chart.options.max !== undefined ? chart.options.max : extent[1];
  rangeMin = chart.options.min !== undefined ? chart.options.min : extent[0];

  chart.scale
    .domain([rangeMin,rangeMax]);

  return chart;
};

/* jshint esversion:6 */
NumberlineReference.prototype.addLeftText = function() {
  const chart = this;
  let text;

  text = chart.svg
    .append("text")
    .attr("font-size",chart.styles.fontSize)
    .attr("fill",chart.styles.leftFill)
    .attr("font-family",chart.styles.fontFamily)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("x",0)
    .attr("y",10)
    .html(chart.labels.left);


  return text;
};

/* jshint esversion:6 */
NumberlineReference.prototype.addRightText = function() {
  const chart = this;
  let text;

  text = chart.svg
    .append("text")
    .attr("font-size",chart.styles.fontSize)
    .attr("fill",chart.styles.rightFill)
    .attr("font-family",chart.styles.fontFamily)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("x",300)
    .attr("y",10)
    .html(chart.labels.right);

  return text;
};

/* jshint esversion:6 */
NumberlineReference.prototype.addSvg = function(where) {
  const chart = this;
  let svg;

  svg = where
    .append("svg")
    .attr("height",20)
    .attr("width",300);

  return svg;
};

/* jshint esversion:6 */
NumberlineReference.prototype.defineLabels = function(type) {
  const chart = this;
  let labels = {};

  if(type == "worse-better") {
    labels.left = "&larr; Worse";
    labels.right = "Better &rarr;";
  }

  if(type == "never-always") {
    labels.left = "Never";
    labels.right = "Always";
  }

  if(type =="less-more") {
    labels.left = "Less";
    labels.right = "More";
  }

  return labels;
};

/* jshint esversion:6 */
NumberlineReference.prototype.defineStyles = function() {
  let styles = {};

  styles.fontSize = "10pt";
  styles.fontFamily = "Helvetica Neue";
  styles.leftFill = "red";
  styles.rightFill = "green";

  return styles;
};

/* jshint esversion:6 */
Modeler.prototype.addAgingCurvesButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.similarPlayersButton.node().getBBox().width + modeler.referencePoints.projectionTypeCoordinates.x + 10)
    .attr("y",modeler.referencePoints.projectionTypeCoordinates.y)
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("cursor","pointer")
    .text("Aging Curve")
    .on('click',() => {
      modeler.similarPlayersButton
        .attr("font-weight","normal");

      modeler.agingCurvesButton
        .attr("font-weight","bold");

      modeler.chart
        .showAgingCurveProjection();
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("The total surplus value derived by comparing the total contract cost to the value of projected performance over the length of the contract.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addBBRefWARButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.warFormulationCoordinates.x + 5)
    .attr("y",modeler.referencePoints.warFormulationCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","bold")
    .text("Baseball-Reference")
    .attr("cursor","pointer")
    .on('click',() => {
      modeler.BBRefWARButton
        .attr("font-weight","bold");

      modeler.fangraphsWARButton
        .attr("font-weight","normal");
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Click to select <strong>Baseball-Reference.com's</strong> Wins Above Replacement metric (bWAR).")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });


  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addChart = function(options) {
  const modeler = this;
  let chart;

  chart = new LineChart({
    "where":modeler.layers.chart,
    "size":modeler.referencePoints.chartSize,
    "margins":modeler.referencePoints.chartMargins,
    "origin":modeler.referencePoints.chartOrigin,
  });

  return chart;
};

/* jshint esversion:6 */
Modeler.prototype.addContractAAVSlider = function() {
  const modeler = this;
  let slider;

  slider = new Slider({
    "where":modeler.layers.contract,
    "coordinates":{"x":550,"y":125},
    "label":"Average Annual Value ($MM)",
    "domain":[2,45],
    "significantDigits":0,
    "defaultValue":pane.contractValues.contractLength
  }).setDragCallback((newValue) => {
    modeler.projectionParameters.aav = newValue;
    modeler.calculateContractValues();
  });

  return slider;
};

/* jshint esversion:6 */
Modeler.prototype.addContractValueHeading = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("font-size","10pt")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("x",modeler.referencePoints.contractValueHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.contractValueHeadingCoordinates.y)
    .text("Projected Production");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addContractValueLabel = function() {
  const modeler = this;

  text = modeler.rightPane
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("x",modeler.referencePoints.contractValueCoordinates.x)
    .attr("y",modeler.referencePoints.contractValueCoordinates.y)
    .text("$150M");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addContractYearsSlider = function() {
  const modeler = this;
  let slider;

  slider = new Slider({
    "where":modeler.rightPane,
    "coordinates":modeler.referencePoints.rightPaneContractLengthSliderCoordinates,
    "label":"Contract Length (Seasons)",
    "domain":[1,15],
    "significantDigits":0,
    "defaultValue":3,
    "size":{
      "width":300
    }
  }).setDragCallback((newValue) => {
    modeler.projectionParameters.contractLength = +newValue.toFixed(0);
    modeler.calculateContractValues();
  });


  return slider;
};

/* jshint esversion:6 */
Modeler.prototype.addEditMarketValueButton = function() {
  const modeler = this;
  let text = modeler.rightPane
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("font-size","10pt")
    .attr("cursor","pointer")
    .attr("x",modeler.referencePoints.winValueButtonCoordinates.x)
    .attr("y",modeler.referencePoints.winValueButtonCoordinates.y)
    .text("Edit Market Value");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addEditSalaryButton = function() {
  const modeler = this;
  let text = modeler.rightPane
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("font-weight","bold")
    .attr("font-size","10pt")
    .attr("cursor","pointer")
    .attr("x",modeler.referencePoints.editSalaryButtonCoordinates.x)
    .attr("y",modeler.referencePoints.editSalaryButtonCoordinates.y)
    .text("Edit Salary");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addFangraphsWARButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.BBRefWARButton.node().getBBox().width + modeler.referencePoints.warFormulationCoordinates.x + 10)
    .attr("y",modeler.referencePoints.warFormulationCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .attr("cursor","pointer")
    .text("Fangraphs")
    .on('click',() => {
      modeler.BBRefWARButton
        .attr("font-weight","normal");

      modeler.fangraphsWARButton
        .attr("font-weight","bold");

    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Click to select <strong>Fangraph's</strong> Wins Above Replacement metric (fWAR).")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });


  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addLayers = function() {
  const modeler = this;
  let layers = {};

  layers.base = modeler.addSingleLayer();
  layers.contract = modeler.addSingleLayer();
  layers.button = modeler.addSingleLayer();
  layers.rightPane = modeler.addSingleLayer();
  layers.chart = modeler.addSingleLayer();
  layers.pane = modeler.addSingleLayer();

  layers.chart
    .attr("transform","translate("+modeler.referencePoints.chartOrigin.x+","+modeler.referencePoints.chartOrigin.y+")");

  return layers;
};

/* jshint esversion:6 */
Modeler.prototype.addModelerKey = function() {
  const modeler = this;
  
  let key = new ModelerKey({
    "where":modeler.layers.base,
  });
  return key;
};

/* jshint esversion:6 */
Modeler.prototype.addModelerPane = function() {
  const modeler = this;

  let pane = new ModelerPane({
    "where":modeler.layers.pane,
    "parent":modeler
  });
  
  return pane;
};

/* jshint esversion:6 */
Modeler.prototype.addPaneContractDetails = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("x",modeler.referencePoints.contractDetailsHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.contractDetailsHeadingCoordinates.y)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .attr("font-weight","bold")
    .attr("font-size","14pt")
    .text("Contract Details");


  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addPaneHint = function() {
  const modeler = this;

  let object = modeler.layers.base
    .append("foreignObject")
    .attr("x",modeler.referencePoints.rightPaneCoordinates.x)
    .attr("y",modeler.referencePoints.rightPaneCoordinates.y)
    .attr("width",modeler.referencePoints.rightPaneSize.width)
    .attr("height",modeler.referencePoints.rightPaneSize.height)
    .attr("cursor","pointer");

  let body = object
    .append("xhtml:body")
    .style("height","100%")
    .style("width","100%")
    .style("margin",0)
    .style("background-color","#eee");

  let tableDisplay = body
    .append("div")
    .style("display","table")
    .style("height","100%")
    .style("width","100%");

  let tableCenter = tableDisplay
    .append("div")
    .style("display","table-cell")
    .style("height","100%")
    .style("vertical-align","middle")
    .style("padding-left","1em")
    .style("padding-right","1em");

  let emptyDiv = tableCenter
    .append("div")
    .style("border","5px dashed #20639B")
    .style("padding","0.25em");

  let display = emptyDiv
    .append("div")
    .style("color","#20639B")
    .html("<div style='font-size:2em; font-weight:bold'>Contract Simulator</div><div><strong>Click here</strong> to evaluate potential contracts for <span class='playerName'></span>.</div>");



  object
    .on('mouseover',() => {
      body
        .transition()
        .duration(250)
        .style("background-color","#20639B");

      display
        .transition()
        .duration(250)
        .style("color","#eee");

      emptyDiv
        .transition()
        .duration(250)
        .style("border","5px dashed #eee");

    })
    .on('mouseout',() => {
      body
        .transition()
        .duration(175)
        .style("background-color","#eee");

      display
        .transition()
        .duration(175)
        .style("color","#20639B");

      emptyDiv
        .transition()
        .duration(175)
        .style("border","5px dashed #20639B");


    })
    .on('click',() => {
      modeler.pane
        .transitionIn();
    });

  return object;
};

/* jshint esversion:6 */
Modeler.prototype.addProjectedSurplusHeading = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("x",modeler.referencePoints.projectedSurplusHeadingCoordinates.x)
    .attr("y",modeler.referencePoints.projectedSurplusHeadingCoordinates.y)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","alphabetic")
    .attr("font-size","10pt")
    .text("Projected Surplus");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addProjectedSurplusValue = function() {
  const modeler = this;

  let text = modeler.rightPane
    .append("text")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .attr("x",modeler.referencePoints.projectedSurplusValueCoordinates.x)
    .attr("y",modeler.referencePoints.projectedSurplusValueCoordinates.y)
    .text("");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addProjectionType = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.projectionTypeCoordinates.x)
    .attr("y",modeler.referencePoints.projectionTypeCoordinates.y)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","normal")
    .text("Projection Basis")
    .on('mouseover',function() {
      modeler.tooltip
        .update("Select a method for projected future player performance.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });


  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addRightPane = function() {
  const modeler = this;

  let pane = modeler.layers.rightPane
    .append("g")
    .attr("display","none");

  pane
    .append("rect")
    .attr("x",modeler.referencePoints.rightPaneCoordinates.x)
    .attr("y",modeler.referencePoints.rightPaneCoordinates.y)
    .attr("width",modeler.referencePoints.rightPaneSize.width)
    .attr("height",modeler.referencePoints.rightPaneSize.height)
    .attr("fill","white");

  return pane;
};

/* jshint esversion:6 */
Modeler.prototype.addSalarySliders = function(yearsToProject) {
  const modeler = this;

  let sliders = [];

  d3.range(0,16).forEach((year,index) => {
    let slider;

    slider = new Slider({
      "where":modeler.layers.contract,
      "size":{"height":25,"width":100},
      "margins":{"top":5,"bottom":5},
      "coordinates":{"x":550,"y":125 + index * 25},
      "domain":[2,45],
      "significantDigits":2,
      "defaultValue":+modeler.projectionParameters.salary[index].toFixed(2)
    }).setDragCallback((newValue) => {
      modeler.calculateContractValues();
    });

    sliders.push(slider);

  });

  return sliders;
};

/* jshint esversion:6 */
Modeler.prototype.addSimilarPlayersButton = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.projectionTypeCoordinates.x + 5)
    .attr("y",modeler.referencePoints.projectionTypeCoordinates.y)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .attr("font-weight","bold")
    .text("Similar Players")
    .attr("cursor","pointer")
    .on('click',() => {
      modeler.similarPlayersButton
        .attr("font-weight","bold");

      modeler.agingCurvesButton
        .attr("font-weight","normal");

      modeler.chart
        .showAgingSimilarPlayersProjection();
        
    })
    .on('mouseover',function() {
      modeler.tooltip
        .update("Average out the career performance of Baseball-Reference.com's <strong>10 most similar players</strong>.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });


  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addSingleLayer = function() {
  const modeler = this;
  let layer;
  layer = modeler.svg
    .append("g");
  return layer;
};

/* jshint esversion:6 */
Modeler.prototype.addSubtitle = function() {
  const modeler = this;

  let text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.subTitleCoordinates.x)
    .attr("y",modeler.referencePoints.subTitleCoordinates.y)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .attr("font-size","12pt")
    .text("Career and Projected Wins Above Replacement");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addSvg = function(where) {
  const modeler = this;
  let svg;

  svg = d3.select(where)
    .append("svg")
    .attr("width",modeler.size.width)
    .attr("height",modeler.size.height);

  return svg;
};

/* jshint esversion:6 */
Modeler.prototype.addTitle = function() {
  const modeler = this;

  text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.nameCoordinates.x)
    .attr("y",modeler.referencePoints.nameCoordinates.y)
    .attr("font-size","24pt")
    .attr("font-weight","bold")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","middle")
    .text("");

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addWARFormulation = function() {
  const modeler = this;

  text = modeler.layers.base
    .append("text")
    .attr("x",modeler.referencePoints.warFormulationCoordinates.x)
    .attr("y",modeler.referencePoints.warFormulationCoordinates.y)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .text("WAR Formulation: ")
    .attr("cursor","pointer")
    .on('mouseover',function() {
      modeler.tooltip
        .update("Select the basis for measuring player production.")
        .show()
        .move();
    })
    .on('mousemove',function() {
      modeler.tooltip
        .move();
    })
    .on('mouseout',function() {
      modeler.tooltip
        .hide();
    });

  return text;
};

/* jshint esversion:6 */
Modeler.prototype.addWinDollarsSlider = function() {
  const modeler = this;
  let slider;

  slider = new Slider({
    "where":modeler.layers.contract,
    "coordinates":{"x":550,"y":175},
    "label":"Average $MM / Win",
    "domain":[7,25],
    "defaultValue":modeler.projectionParameters.dollarsPerWar,
    "significantDigits":1
  }).setDragCallback((newValue) => {
    modeler.projectionParameters.dollarsPerWar = newValue;
    modeler.calculateContractValues();
  });

  return slider;
};

/* jshint esversion:6 */
Modeler.prototype.addWinValueSliders = function (yearsToProject) {
  const modeler = this;

  let sliders = [];

  d3.range(0,16).forEach((year,index) => {
    let slider;

    slider = new Slider({
      "where":modeler.layers.contract,
      "size":{"height":25,"width":100},
      "margins":{"top":5,"bottom":5},
      "coordinates":{"x":650,"y":125 + index * 25},
      // "label":2019 + index,
      "domain":[8,25],
      "significantDigits":2,
      "defaultValue":+modeler.projectionParameters.winValue[index].toFixed(2)
    }).setDragCallback((newValue) => {
      modeler.calculateContractValues();
    });

    sliders.push(slider);

  });

  return sliders;
};

/* jshint esversion:6 */
Modeler.prototype.defaulter = function(value,defaultValue) {
  return value !== undefined ? value : defaultValue;
};

/* jshint esversion:6 */
Modeler.prototype.defineChartMargins = function(preset) {
  const modeler = this;
  let margins;
  margins = modeler.defaulter(preset,{});
  margins.left = modeler.defaulter(margins.left,75);
  margins.right = modeler.defaulter(margins.right,10);
  margins.top = modeler.defaulter(margins.top,50);
  margins.bottom = modeler.defaulter(margins.bottom,50);
  return margins;
};

/* jshint esversion:6 */
Modeler.prototype.defineReferencePoints = function() {
  const modeler = this;

  let referencePoints = {};
  referencePoints.leftPaneSize = {
    "width":467,
    "height":500
  };

  referencePoints.nameCoordinates = {
    "x":235,
    "y":31.25
  };

  referencePoints.subTitleCoordinates = {
      "x":235,
      "y":62.5
  };

  referencePoints.warFormulationCoordinates = {
    "x":100,
    "y":93.75
  };

  referencePoints.projectionTypeCoordinates = {
    "x":100,
    "y":114.58
  };

  referencePoints.chartOrigin = {
    "x":16.67,
    "y":135.42
  };

  referencePoints.chartSize = {
    "width":433.33,
    "height":260.42
  };

  referencePoints.chartMarginLeft = 66.67;
  referencePoints.chartMarginBottom = 52.08;

  referencePoints.chartMargins = {
    "left":66.67,
    "right":0,
    "top":0,
    "bottom":52.08
  };

  referencePoints.chartEffectiveMidX = 266.68;
  referencePoints.chartEffectiveMidY = 239.59;

  referencePoints.chartXAxisLabelCoordinates = {
    "x":referencePoints.chartEffectiveMidX,
    "y":369.8
  };

  referencePoints.chartYAxisLabelCoordinates = {
    "x":50,
    "y":referencePoints.chartEffectiveMidY
  };




  referencePoints.chartEffectiveSize = {
    "width":366.67,
    "height":208.34
  };

  referencePoints.chartXAxisMin = referencePoints.chartOrigin.x + referencePoints.chartMarginLeft;
  referencePoints.chartYAxisMin = referencePoints.chartOrigin.y + referencePoints.chartEffectiveSize.height;

  referencePoints.chartXAxisMax = referencePoints.chartXAxisMin + referencePoints.chartEffectiveSize.width;
  referencePoints.chartYAxisMax = referencePoints.chartYAxisMin - referencePoints.chartEffectiveSize.height;

  referencePoints.chartMinCoordinates = {
    "x":referencePoints.chartXAxisMin,
    "y":referencePoints.chartYAxisMin
  };

  referencePoints.legendCoordinates = {
    "x":16.67,
    "y":416.67
  };

  referencePoints.legendSize = {
    "width":433.33,
    "height":52.09
  };

  referencePoints.rightPaneSize = {
    "width":333,
    "height":500
  };

  referencePoints.rightPaneCoordinates = {
    "x":467,
    "y":0
  };

  referencePoints.overlayPlaneSize = {
    "width":716.67,
    "height":500
  };

  referencePoints.overlayPlaneOffscreen = {
    "x":800,
    "y":0
  };

  referencePoints.overlayPlaneOnscreen = {
    "x":83.33,
    "y":0
  };

  referencePoints.overlayTitleCoordinates = {
    "x":14.92,
    "y":41.67
  };

  referencePoints.overlayContractCoordinates = {
    "x":14.92,
    "y":104.17
  };

  referencePoints.overlayContractDescriptionCoordinates = {
    "x":14.92,
    "y":125
  };

  referencePoints.overlayContractSliderCoordinates =  {
    "x":14.92,
    "y":177.083
  };

  referencePoints.overlaySalaryCoordinates = {
    "x":253.94,
    "y":104.17
  };

  referencePoints.overlaySalaryDescriptionCoordinates = {
    "x":253.94,
    "y":125
  };

  referencePoints.overlaySalarySliderCoordinates =  {
    "x":253.94,
    "y":177.083
  };

  referencePoints.overlayWinValueCoordinates = {
    "x":492.94,
    "y":104.17
  };

  referencePoints.overlayWinValueDescriptionCoordinates = {
    "x":492.94,
    "y":125
  };

  referencePoints.overlayWinValueTableCoordinates = {
    "x":492.94,
    "y":177.083
  };

  referencePoints.saveButtonCoordinates = {
    "x":492.94,
    "y":437.5
  };

  referencePoints.saveButtonSize = {
    "width":209.13,
    "height":41.667
  };

  referencePoints.contractDetailsHeadingCoordinates = {
    "x":625,
    "y":41.68
  };

  referencePoints.projectedSurplusHeadingCoordinates = {
    "x":566.67,
    "y":72.92
  };

  referencePoints.projectedSurplusValueCoordinates = {
    "x":566.67,
    "y":93.75
  };

  referencePoints.contractValueHeadingCoordinates = {
    "x":700,
    "y":72.92
  };

  referencePoints.contractValueCoordinates = {
    "x":700,
    "y":93.75
  };

  referencePoints.editSalaryButtonCoordinates = {
    "x":566.67,
    "y":197.92
  };

  referencePoints.winValueButtonCoordinates = {
    "x":700,
    "y":197.92
  };

  referencePoints.contractTableCoordinates = {
    "x":483.333,
    "y":197.92
  };

  referencePoints.contractTableSize = {
    "width":300,
    "height":260.41
  };

  referencePoints.rightPaneContractLengthSliderCoordinates = {
    "x":483.33,
    "y":125
  };


  referencePoints.overlayColumnWidth = 209.13;
  referencePoints.overlayDescriptionHeight = 41.667;
  referencePoints.overlaySliderHeight = 41.667;
  referencePoints.overlayColumnTableHeight = 218.75;

  return referencePoints;
};

/* jshint esversion:6 */
Modeler.prototype.defineSize = function(preset) {
  const modeler = this;
  let size;
  size = modeler.defaulter(preset,{});
  size.width = modeler.defaulter(size.width,800);
  size.height = modeler.defaulter(size.height,500);
  return size;
};

/* jshint esversion:6 */
Modeler.prototype.addCompData = function(data) {
  const modeler = this;

  modeler.chart
    .addCompData(data);


  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.addPlayerData = function(data,projections,name) {
  const modeler = this;

  modeler.chart
    .addPlayerData(data,projections,name);

  modeler.projections = projections;

  modeler.title
    .text(name);

  modeler.key
    .playerName(name);

  d3.selectAll(".playerName")
    .html(name);

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.addProjection = function(projection) {
  const modeler = this;

  modeler.projection = projection;

  modeler.chart
    .addProjection(projection);

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.calculateContractValues = function() {
  const modeler = this;

  let totalCost = 0;
  let projectedProduction = 0;
  let projectedWins = 0;
  let warKey = "bWar";

  modeler.projectionParameters.salary.forEach((value,index) => {
    if(index < modeler.projectionParameters.contractLength) {
      totalCost += value;
    }
  });

  modeler.projectionParameters.winValue.forEach((value,index) => {
    if(index < modeler.projectionParameters.contractLength) {
      let projectedWins = modeler.projections.mean[index][warKey];
      let costPerWin = value;
      projectedProduction += projectedWins * costPerWin;
    }
  });

  let surplus = projectedProduction - totalCost;
  let surplusColor = surplus > 0 ? "green" : "red";


  modeler.projectedSurplusValue
    .text("$" + surplus.toFixed(2) + "MM")
    .attr("fill",surplusColor);


  modeler.contractValueLabel
    .text("$" + projectedProduction.toFixed(2) + "MM");

  // let top25Projections = [];
  // let meanProjections = [];
  // let bottom25Projections = [];
  // let meanValueByYear = [];
  //
  // let salaryValues = [];
  // let winValues = [];
  // let ageSeasons = [];
  //
  // Object.keys(modeler.projections.mean).forEach((key) => {
  //   meanProjections.push(modeler.projections.mean[key].bWar);
  //   ageSeasons.push(modeler.projections.mean[key].age);
  // });
  //
  // ageSeasons.shift();
  // meanValueByYear.shift();
  // meanProjections.shift();
  //
  // let contractYears = +modeler.contractYearsSlider.currentValue.toFixed(0);
  //
  // modeler.salarySliders.forEach((slider,index) => {
  //   salaryValues.push(slider.currentValue);
  //   if(index >= contractYears) {
  //     slider.hide();
  //   } else {
  //     slider.show();
  //   }
  // });
  //
  // modeler.winValueSliders.forEach((slider,index) => {
  //   winValues.push(slider.currentValue);
  //   if(index >= contractYears) {
  //     slider.hide();
  //   } else {
  //     slider.show();
  //   }
  // });
  //
  // modeler.projectionParameters.salary = salaryValues;
  // modeler.projectionParameters.winValues = winValues;
  //
  // let totalContractCost = 0;
  // let totalMeanContractValue = 0;
  //
  // d3.range(0,contractYears).forEach((year) => {
  //   totalContractCost += modeler.projectionParameters.salary[year];
  //   totalMeanContractValue += modeler.projectionParameters.winValues[year] * meanProjections[year];
  //   meanValueByYear.push({
  //     "age":ageSeasons[year],
  //     "bWar":modeler.projectionParameters.salary[year] / modeler.projectionParameters.winValues[year]
  //   });
  // });
  //
  // let allValues = {
  //   "mean":{"yearData":meanValueByYear},
  //   // "top25":calculateValues(top25Projections),
  //   // "bottom25":calculateValues(bottom25Projections)
  // };
  //
  // modeler.chart
  //   .updateProjectionLines(allValues);
  //
  //
  //
  // let meanContractSurplus = totalMeanContractValue - totalContractCost;
  //
  // modeler.contractCostText
  //   .updateText("$" + totalContractCost.toFixed(2) + "mm");
  //
  // modeler.meanSurplusText
  //   .updateText("$" + meanContractSurplus.toFixed(2) + "mm");


  return this;
};

/* jshint esversion:6 */
Modeler.prototype.dataFromPane = function(data) {
  const modeler = this;

  modeler.chart.projectionLine
    .attr("display","block");

  modeler.rightPane
    .attr("display","block");

  modeler.projectionParameters = data;

  modeler.calculateContractValues();

  // modeler.contractButton
  //   .hide();
  //
  // modeler.contractCostLabel
  //   .show();
  //
  // modeler.contractCostText
  //   .show();
  //
  // modeler.meanSurplusLabel
  //   .show();
  //
  // modeler.meanSurplusText
  //   .show();
  //
  // modeler.contractCostText
  //   .show();

  return modeler;
};

/* jshint esversion:6 */
Modeler.prototype.registerTooltip = function(tooltip) {
  const modeler = this;

  modeler.tooltip = tooltip;
  modeler.chart.tooltip = tooltip;
  modeler.pane
    .registerTooltip(tooltip);

  return modeler;
};

/* jshint esversion:6 */
PitcherConfig.prototype.defineBBRefValue = function() {
  const config = this;

  let group = {
    "heading":"Baseball-Reference",
    "description":"Total contribution data from Baseball-Reference.com",
    "metrics":[]
  };

  group.metrics.push({
    "key":"bWar",
    "display":"WAR",
    "description":"Baseball-Reference Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
  });

  return group;
};

/* jshint esversion:6 */
PitcherConfig.prototype.defineBattedBallLocation = function() {
  const config = this;

  let group = {
    "heading":"Ball Location",
    "description":"Measures of batted ball tendencies against this pitcher.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"pull_field_against",
    "display":"Pull %",
    "description":"Percentage of balls hit to the pull field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"center_field_against",
    "display":"Center %",
    "description":"Percentage of balls hit to center field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"opposite_field_against",
    "display":"Opposite %",
    "description":"Percentage of balls hit to the opposite field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchingOutcomes = function() {
  const config = this;
  let group;

  group = {
    "display":"Pitching Outcomes",
    "description":"Measures of the outcomes of plate appearances."
  };

  let subGroups = [
      config.definePitchingOutcomesOverview(),
      config.definePitcherControl(),
      config.defineTeamResults(),
      config.defineBattedBallLocation(),
      config.defineContactType()
    ];

  return subGroups;
};

/* jshint esversion:6 */
PitcherConfig.prototype.defineContactType = function() {
  const config = this;

  let group = {
    "heading":"Contact Strength",
    "description":"Measures of the strength of contact of hits against the pitcher.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"hard_hits_against",
    "display":"Hard %",
    "description":"Percentage of contact classified as 'Hard'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"medium_hits_against",
    "display":"Medium %",
    "description":"Percentage of contact classified as 'Medium'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"soft_hits_against",
    "display":"Soft %",
    "description":"Percentage of contact classified as 'Soft'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.defineFangraphsValue = function() {
  const config = this;

  let group = {
    "heading":"Fangraphs",
    "description":"Total contribution data from Fangraphs",
    "metrics":[]
  };

  group.metrics.push({
    "key":"fWar",
    "display":"WAR",
    "description":"Fangraphs Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Fangraphs",
  });

  return group;
};

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchDetails = function() {
  const config = this;
  let group;

  group = {
    "display":"Pitch Details",
    "description":"Measures of tendency and effectiveness by pitch type."
  }

  let subGroups = [
    config.definePitchFrequency(),
  ];

  return subGroups;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchFrequency = function() {
  const config = this;

  let group = {
    "heading":"Pitch Frequency",
    "description":"Frequency by Pitch Type.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"four_seam_frequency",
    "display":"Four-Seam",
    "description":"Frequency of Four-Seam Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"cut_fastball_frequency",
    "display":"Cut Fastball",
    "description":"Frequency of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"sinker_frequency",
    "display":"Sinker",
    "description":"Frequency of Sinkers.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  })

  group.metrics.push({
    "key":"splitter_frequency",
    "display":"Splitter",
    "description":"Frequency of Split-Finger Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"slider_frequency",
    "display":"Slider",
    "description":"Frequency of Sliders.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"curveball_frequency",
    "display":"Curveball",
    "description":"Frequency of Curveballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"slider_frequency",
    "display":"Changeup",
    "description":"Frequency of Changeups.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"knuckleball_frequency",
    "display":"Knuckleball",
    "description":"Frequency of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchVelocity = function() {
  const config = this;

  let group = {
    "heading":"Pitch Velocity",
    "description":"Velocity by Pitch Type.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"four_seam_velocity",
    "display":"Four-Seam",
    "description":"Average Velocity of Four-Seam Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"cut_fastball_velocity",
    "display":"Cut Fastball",
    "description":"Average Velocity of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"sinker_velocity",
    "display":"Sinker Fastball",
    "description":"Average Velocity of Sinkers.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"splitter_velocity",
    "display":"Splitter",
    "description":"Average Velocity of Split-Finger Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"slider_velocity",
    "display":"Slider",
    "description":"Average Velocity of Sliders.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"curveball_velocity",
    "display":"Curveball",
    "description":"Average Velocity of Curveballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"slider_velocity",
    "display":"Changeup",
    "description":"Average Velocity of Changeups.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"knuckleball_velocity",
    "display":"Knuckleball",
    "description":"Average Velocity of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitcherControl = function() {
  const config = this;

  let group = {
    "heading":"Under Pitcher's Control",
    "description":"Measures of plate appearance outcomes that are entirely under the pitcher's control.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"strikeout_rate",
    "display":"Strikeouts / 9",
    "description":"Strikeouts per nine innings.",
    "source":"Fangraphs",
    "shareScale":["walk_rate","home_run_rate"],
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"walk_rate",
    "display":"Walks / 9",
    "description":"Walks issued per nine innings.",
    "source":"Fangraphs",
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"strikeout_to_walk_ratio",
    "display":"Strikeouts : Walks",
    "description":"Strikeouts to walks issued ratio.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"home_run_rate",
    "display":"HR %",
    "description":"Home runs allowed per nine innings.",
    "source":"Fangraphs",
  });

  group.metrics.push({
    "key":"batted_ball_velocity",
    "display":"Hit Velocity",
    "description":"Average velocity of batted balls against the pitcher.",
    "source":"Baseball Savant"
  });


  group.metrics.push({
    "key":"barrel_rate_against",
    "display":"Barrel %",
    "description":"Percentage of very hard hits per contact.",
    "source":"Baseball Savant"
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.definePitchingOutcomesOverview = function() {
  const config = this;

  let group = {
    "heading":"Pitching Outcomes Overview",
    "description":"Measures of the end results of plate appearances.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"fielding_independent_pitching",
    "display":"FIP",
    "description":"Fielding Independent Pitching. Estimates pitcher ERA based on outcomes entirely under his control.",
    "source":"Fangraphs",
    "shareScale":["expected_fielding_independent_pitching"],
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"expected_fielding_independent_pitching",
    "display":"xFIP",
    "description":"Expected Fielding Independent Pitching. Controls the above measure for luck.",
    "source":"Fangraphs",
    "shareScale":[]
  });

  group.metrics.push({
    "key":"runs_allowed_per_nine_innings",
    "display":"RA/9",
    "description":"Total number of runs (earned and unearned) allowed by a pitcher per nine innings.",
    "source":"Fangraphs",
    "shareScale":[]
  });



  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.defineTeamResults = function() {
  const config = this;

  let group = {
    "heading":"Team Results",
    "description":"Measures of plate appearance outcomes that may be influenced by factors beyond the pitcher's control.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"wOba_against",
    "display":"wOBA",
    "description":"Weighted On-Base Average for hitters facing this pitcher.",
    "source":"Baseball Savant",
    "relatedToNext":true,
    "shareScale":["xWobaAgainst"]
  });

  group.metrics.push({
    "key":"expected_woba_against",
    "display":"xWOBA",
    "description":"Expected Weighted On-Base Average for hitters facing this pitcher. Controls above measure for luck.",
    "source":"Baseball Savant",
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"slugging_against",
    "display":"Slugging",
    "description":"Slugging average for hitters facing this pitcher.",
    "source":"Baseball Savant",
    "shareScale":["expected_slugging_against"]
  });

  group.metrics.push({
    "key":"expected_slugging_against",
    "display":"xSlugging",
    "description":"Expected slugging average for hitters facing this pitcher. Controls above measure for luck.",
    "source":"Baseball Savant",
  });

  group.metrics.push({
    "key":"batting_average_against",
    "display":"Batting Average",
    "description":"Batting average of hitters facing this pitcher.",
    "source":"Baseball Savant",
    "relatedToNext":true,
    "shareScale":["expected_batting_average_against"]
  });

  group.metrics.push({
    "key":"expected_batting_average_against",
    "display":"xBatting Average",
    "description":"Expected batting average of hitters facing this pitcher. Controls above measure for luck",
    "source":"Baseball Savant",
    "shareScale":["expected_batting_average_against"]
  });


  return group;
}

/* jshint esversion:6 */
PitcherConfig.prototype.defineTotalValue = function() {
  const config = this;
  let group;

  group = {
    "display":"Total Value",
    "description":"Measures of pitcher's overall contribution to team performance."
  };

  let subGroups = [config.defineFangraphsValue(),config.defineBBRefValue()];

  return subGroups;
};

/* jshint esversion:6 */
PlayerMenu.prototype.add2018PlayerBWar = function(where,player) {
  const menu = this;
  let element;

  let displayBWar;

  if(player.bWar2018 !== "") {
    displayBWar = parseFloat(player.bWar2018).toFixed(1);
  } else {
    displayBWar = "n/a";
  }

  where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-war",true)
    .classed("align-center",true)
    .html(displayBWar);

  return element;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addCareerBWar = function(where,player) {
  const menu = this;

  let element;
  let careerTotal = 0;

  Object.keys(player).forEach((key) => {
    if(key.substr(0,4) === "bWar") {
      if(player[key] !== "") {
        careerTotal += parseFloat(player[key]);
      }
    }
  });

  careerTotal = careerTotal.toFixed(1);

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("align-center",true)
    .html(careerTotal);

  return element;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addContainerElement = function() {
  const menu = this;

  let element;

  element = d3.select("#playerMenu")
    .append("div")
    .classed("player-menu-container",true);

  return element;

};

/* jshint esversion:6 */
PlayerMenu.prototype.addFilterRow = function() {
  const menu = this;

  let blankRow = menu.containerElement
    .append("div")
    .classed("player-menu-header-row",true)
    .attr("id","filterNameRow")
    .style("height","50px");

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-left",true)
    .html("<input type='text' id='searchPlayers' length='30' placeholder='Filter By Name...'/>");

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);


  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);

  blankRow
    .append("div")
    .classed("player-menu-header-cell",true);



  return blankRow;
};

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
        .update("Player's primary position. <em>Click to filter.</em>")
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
      menu.positionRow.style("display","block");
    });


  headerRow
    .append("div")
    .classed("player-menu-header-cell",true)
    .classed("align-center",true)
    .html("Age")
    .on('mouseover',function() {
      menu.tooltip
        .update("Player's age starting the 2019 season.")
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
      console.log("AGE CLICK!");
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
    .html("Career bWAR")
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
    .html("Projected 3 Year bWAR")
    .on('mouseover',function() {
      menu.tooltip
        .update("Projected production through the 2021 season.")
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
    });





  return headerRow;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerAge = function(where,player) {
  const menu = this;

  let element;

  where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-position",true)
    .classed("align-center",true)
    .html(player.Age);

  return element;

};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerLine = function(player) {
  const menu = this;

  let playerRow = menu.addPlayerRow(menu.containerElement,player);
  let playerName = menu.addPlayerName(playerRow,player);
  let playerPosition = menu.addPlayerPosition(playerRow,player);
  let playerAge = menu.addPlayerAge(playerRow,player);
  let playerSparkline = menu.addPlayerSparkline(playerRow,player);
  let playerCareerbWar = menu.addCareerBWar(playerRow,player);
  let player2018bWar = menu.add2018PlayerBWar(playerRow,player);

};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerName = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-name",true);

  element
    .append("a")
    .classed("player-name-link",true)
    .html(player.Name)
    .on('click',() => {
      menu.loadCallback(player);
    });

  return element;
};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerPosition = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .classed("player-menu-cell",true)
    .classed("player-menu-position",true)
    .classed("align-center",true)
    .html(player.Position);

  return element;

};

/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerRow = function(where,player) {
  const menu = this;

  let element;

  element = where
    .append("div")
    .datum(player)
    .classed("player-menu-row",true)
    .classed("player-menu-row-visible",true)
    .classed("player-menu-row-hidden",false);

  return element;

};

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

/* jshint esversion:6 */
PlayerMenu.prototype.addPositionRow = function() {
  const menu = this;


  let header = d3.select("#filterNameRow").node().getBoundingClientRect();

  let positionFilterRow = d3.select("#positionFilter")
    .style("display","none")
    .style("width",header.width + "px")
    .style("height",header.height + "px")
    .style("top",header.y + "px")
    .style("left",header.x + "px")
    .style("border","1px solid black")
    .style("margin","auto");


  let positionFilter = positionFilterRow
    .append("div")
    .style("width","100%")
    .style("height","100%")
    .style("background-color","#20639b")
    .style("color","#20639b")
    .style("display","flex")
    .style("justify-content","space-between");

  let positions = [
    {
      "label":"Catchers",
      "key":"catcher"
    },
    {
      "label":"First Basemen",
      "key":"firstBase"
    },
    {
      "label":"Second Basemen",
      "key":"secondBase"
    },
    {
      "label":"Shortstops",
      "key":"shortstop"
    },
    {
      "label":"Third Basemen",
      "key":"thirdBase"
    },
    {
      "label":"Left Fielders",
      "key":"leftField"
    },
    {
      "label":"Center Fielders",
      "key":"centerField"
    },
    {
      "label":"Right Fielders",
      "key":"rightField"
    },
    {
      "label":"Starters",
      "key":"starter"
    },
    {
      "label":"Relievers",
      "key":"reliever"
    }
  ];

  let positionSpans = positionFilter.selectAll(".positionSpan")
    .data(positions)
    .enter()
    .append("div")
    .style("cursor","pointer")
    .style("display","table")
    .style("margin","0.25em");


  positionSpans
    .append("div")
    .style("display","table-cell")
    .style("vertical-align","middle")
    .style("height","35px")
    .style("padding-left","0.125em")
    .style("padding-right","0.125em")
    .classed("filter-active",function(d) {
      return menu.filters[d.key];
    })
    .classed("filter-inactive",function(d) {
      return !menu.filters[d.key];
    })
    .html((d) => { return d.label; })
    .on('mouseover',function(d) {
      let message;

      if(menu.filters[d.key]) {
        message = "Click to hide <strong>" + d.label + "</strong>";
      } else {
        message = "Click to show <strong>" + d.label + "</strong>";
      }

      menu.tooltip
        .update(message)
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
    .on("click",function(d) {
      menu.filters[d.key] = !menu.filters[d.key];

      menu.tooltip
        .hide();

      menu
        .updateFilters();

      d3.select(this)
        .classed("filter-active",function(d) {
          return menu.filters[d.key];
        })
        .classed("filter-inactive",function(d) {
          return !menu.filters[d.key];
        });


    });

  window.addEventListener("resize",resizeRow);

  menu
    .definePositionFilters();


  function resizeRow() {
    let header = d3.select("#filterNameRow").node().getBoundingClientRect();
    positionFilterRow = d3.select("#positionFilter")
      .style("width",header.width + "px")
      .style("height",header.height + "px")
      .style("top",header.y + "px")
      .style("left",header.x + "px");
  }


  return positionFilterRow;
};

/* jshint esversion:6 */
PlayerMenu.prototype.defineFilters = function() {
  const menu = this;

  let filters = {};
  filters.name = "";
  filters.catcher = true;
  filters.firstBase = true;
  filters.secondBase = true;
  filters.shortstop = true;
  filters.thirdBase = true;
  filters.leftField = true;
  filters.centerField = true;
  filters.rightField = true;
  filters.starter = true;
  filters.reliever = true;

  return filters;
};

/* jshint esversion:6 */
PlayerMenu.prototype.defineNameFilter = function() {
  const menu = this;

  let element;
  let filterInput;

  element = d3.select("#searchPlayers");

  element
    .on('input',() => {
      let value = element.node().value;
      menu.filters.name = value.toLowerCase();
      menu
        .updateFilters();
    })
    .on('mouseover',() => {
      menu.tooltip
        .update("Type to search players.")
        .show()
        .move();
    })
    .on('mousemove',() => {
      menu.tooltip
        .move();
    })
    .on('mouseout',() => {
      menu.tooltip
        .hide();
    });

  return menu;
};

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

/* jshint esversion:6 */
PlayerMenu.prototype.showTable = function(menu,players) {

  menu.containerElement = menu
    .addContainerElement();

  menu.headerRow = menu
    .addHeaderRow();

  menu.filterRow = menu
    .addFilterRow();

  menu.positionRow = menu
    .addPositionRow();

  players.forEach((player) => {
    menu.addPlayerLine(player);
  });

  menu.playerMenuRows = menu.containerElement
    .selectAll(".player-menu-row");


  menu
    .defineNameFilter()
    .definePositionFilters();

};

/* jshint esversion:6 */
PlayerMenu.prototype.filterByName = function(query) {
  const menu = this;

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      if(d.Name.toLowerCase().indexOf(query.toLowerCase()) == -1) {

        element
          .classed("player-menu-row-visible",false)
          .classed("player-menu-row-hidden",true);
      } else {
        element
          .classed("player-menu-row-visible",true)
          .classed("player-menu-row-hidden",false);
      }
    });

  return menu;
};

/* jshint esversion:6 */
PlayerMenu.prototype.registerTooltip = function(tooltip) {
  const menu = this;

  menu.tooltip = tooltip;

  return menu;
};

/* jshint esversion:6 */
PlayerMenu.prototype.sort = function(key) {
  const menu = this;

  let select = d3.selectAll(".player-menu-row");
  select.sort((a,b) => { return b.Position - a.Position; });

  return this;
};

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

/* jshint esversion:6 */
PlayerMenu.prototype.updateFilters = function() {
  const menu = this;

  menu.playerMenuRows
    .each(function(d,i) {
      let element = d3.select(this);
      let visible = true;
      let name = d.Name.toLowerCase();
      let position = d.Position;

      let positionMap = {
        "1B":"firstBase",
        "2B":"secondBase",
        "3B":"thirdBase",
        "SS":"shortstop",
        "LF":"leftField",
        "CF":"centerField",
        "RF":"rightField",
        "C":"catcher",
        "SP":"starter",
        "RP":"reliever"
      };

      let positionKey = positionMap[position];
      if(!menu.filters[positionKey]) { visible = false; }
      if(name.indexOf(menu.filters.name) == -1 ) { visible = false; }

      if(!visible) {
        element
          .classed("player-menu-row-visible",false)
          .classed("player-menu-row-hidden",true);
      } else {
        element
          .classed("player-menu-row-visible",true)
          .classed("player-menu-row-hidden",false);
      }
    });

  return menu;
};

/* jshint esversion:6 */
Projection.prototype.getBWarAgingCurveProjection = function() {
  const projection = this;

  let warProjection = [];
  let lastValue;

  lastValue = projection.threeYearBWar;

  warProjection.push({
    "age":projection.data["2018"].age,
    "bWar":projection.data["2018"].bWar
  });

  projection.relevantWarCurveDeltas.forEach((curveDeltaObject) => {
    let season = {};
    season.age = curveDeltaObject.age;
    season.bWar = +(lastValue + curveDeltaObject.delta).toFixed(1);
    lastValue += curveDeltaObject.delta;
    warProjection.push(season);
  });

  return warProjection;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMax = function() {
  const projection = this;
  let maxValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
      let season = {};
      season.age = key;
      season.bWar = d3.max(projection.bWarSimilarPlayersRawData[key]);
      maxValues.push(season);
  });

  maxValues.shift();

  maxValues.unshift({
    "age":projection.data["2018"].age,
    "bWar":projection.data["2018"].bWar
  });

  return maxValues;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMean = function() {
  const projection = this;
  let meanValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.bWar = d3.mean(projection.bWarSimilarPlayersRawData[key]);
    meanValues.push(season);
  });

  meanValues.shift();
  meanValues.unshift({
    "age":projection.data["2018"].age,
    "bWar":projection.data["2018"].bWar
  });
  
  return meanValues;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersMin = function() {
  const projection = this;
  let minValues = [];

  Object.keys(projection.bWarSimilarPlayersRawData).forEach((key,index) => {
    let season = {};
    season.age = key;
    season.bWar = d3.min(projection.bWarSimilarPlayersRawData[key]);
    minValues.push(season);
  });

  minValues.shift();

  minValues.unshift({
    "age":projection.data["2018"].age,
    "bWar":projection.data["2018"].bWar
  });
  
  return minValues;
};

/* jshint esversion:6 */
Projection.prototype.getBWarSimilarPlayersRawData = function() {
  const projection = this;

  let playerProjection = [];
  let similarPlayers = projection.data["2018"].similarPlayers;
  let rawValues = {};
  let mean;
  let top25;
  let bottom25;
  let agesToProject;

  agesToProject = projection.bWarAgingCurveProjection.map((a) => {return a.age;});

  agesToProject.forEach((age) => {
    rawValues[age] = [];
  });

  similarPlayers.forEach((player) => {
    agesToProject.forEach((age) => {
      if(player.warAge.hasOwnProperty(age)) {
        rawValues[age].push(player.warAge[age].bWar);
      } else {
        rawValues[age].push(0);
      }
    });
  });


  return rawValues;
};

/* jshint esversion:6 */
Projection.prototype.getBaseAge = function() {
  const projection = this;

  let baseAge = projection.data[Object.keys(projection.data)[Object.keys(projection.data).length - 1]].age;

  return baseAge;
};

/* jshint esversion:6 */
Projection.prototype.getBaseBWar = function() {
  const projection = this;
  let baseBWar = projection.data[Object.keys(projection.data)[Object.keys(projection.data).length - 1]].bWar;
  return baseBWar;
};

/* jshint esversion:6 */
Projection.prototype.getRelevantWarCurveDeltas = function() {
  const projection = this;
  let deltas;

  deltas = projection.warCurveDeltas.filter((object) => { return +object.age > projection.baseAge; });

  return deltas;
};

/* jshint esversion:6 */
Projection.prototype.getThreeYearBWar = function() {
  const projection = this;

  let relevantYears,
    rollingAverage;

  relevantYears = [
    projection.data["2016"].bWar,
    projection.data["2017"].bWar,
    projection.data["2018"].bWar
  ];

  rollingAverage = relevantYears.reduce((a,b) => { return a+b; })/3;

  return rollingAverage;

};

/* jshint esversion:6 */
Projection.prototype.defineWarCurveDeltas = function() {
  const projection = this;

  return [
    {"age":"19","delta":0.33},
    {"age":"20","delta":0.33},
    {"age":"21","delta":0.33},
    {"age":"22","delta":0.21},
    {"age":"23","delta":0.19},
    {"age":"24","delta":0.06},
    {"age":"25","delta":0},
    {"age":"26","delta":-0.10},
    {"age":"27","delta":-0.06},
    {"age":"28","delta":-0.13},
    {"age":"29","delta":-0.13},
    {"age":"30","delta":-0.23},
    {"age":"31","delta":-0.21},
    {"age":"32","delta":-0.25},
    {"age":"33","delta":-0.27},
    {"age":"34","delta":-0.25},
    {"age":"35","delta":-0.29},
    {"age":"36","delta":-0.29},
    {"age":"37","delta":-0.25},
    {"age":"38","delta":-0.33},
    {"age":"39","delta":-0.33},
    {"age":"40","delta":-0.33}
  ];

};

/* jshint esversion:6 */
Sparkline.prototype.addCircles = function() {
  const spark = this;

  let circles;

  let sparkData = [];

  [spark.data][0].forEach((datum,index) => {
    if(datum !== "") {
      sparkData.push({"index":index,"datum":datum});
    }
  });


  circles = spark.svg
    .selectAll("circle")
    .data(sparkData)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return spark.scales.x(d.index); })
    .attr("cy",(d) => { return spark.scales.y(+d.datum); })
    .attr("r",spark.styles.circleRadius)
    .attr("fill",spark.styles.circleFill);

  return circles;
};

/* jshint esversion:6 */
Sparkline.prototype.addLine = function() {
  const spark = this;

  let sparkData = [];

  [spark.data][0].forEach((datum,index) => {
    if(datum !== "") {
      sparkData.push({"index":index,"datum":datum});
    }
  });

  let area = spark.svg
    .append("path")
    .datum(sparkData)
    .attr("stroke",spark.styles.lineStroke)
    .attr("stroke-width",spark.styles.lineStrokeWidth)
    .attr("fill",spark.styles.areaFill)
    .attr("d",spark.areaGenerator);


  return area;
};

/* jshint esversion:6 */
Sparkline.prototype.addSvg = function(where) {
  const spark = this;

  let svg = where
    .append("svg")
    .attr("height",spark.size.height)
    .attr("width",spark.size.width)
    .on('mousemove',function() {
      let event = d3.event;
      let nearestX = spark.scales.x.invert(d3.event.offsetX).toFixed(0);
      if(spark.data[nearestX] !== undefined) {
        if(spark.tooltip) {
          spark.tooltip
            .update(spark.data[nearestX])
            .show()
            .move();
        }
      } else {
        spark.tooltip.hide();
      }
    })
    .on('mouseout',() => {
      if(spark.tooltip) {
        spark.tooltip.hide();
      }
    });

  return svg;
};

/* jshint esversion:6 */
Sparkline.prototype.addZeroLine = function() {
  const spark = this;

  let line;
  line = spark.svg
    .append("line")
    .attr("x1",spark.referencePoints.xMin)
    .attr("x2",spark.referencePoints.xMax)
    .attr("y1",spark.scales.y(0))
    .attr("y2",spark.scales.y(0))
    .attr("stroke",spark.styles.zeroLineStroke)
    .attr("stroke-width",spark.styles.zeroLineStrokWidth);

  return line;
};

/* jshint esversion:6 */
Sparkline.prototype.defaulter = function(value,defaultValue) {
  return value === undefined ? defaultValue : value;
};

/* jshint esversion:6 */
Sparkline.prototype.defineAreaGenerator = function() {
  const spark = this;

  let generator = d3.area()
    .x((d) => { return spark.scales.x(d.index); })
    .y0((d) => { return spark.scales.y(0); })
    .y1((d) => { return spark.scales.y(d.datum); });

  return generator;
};

/* jshint esversion:6 */
Sparkline.prototype.defineMargins = function(preset) {
  const spark = this;

  let margins = spark.defaulter(preset,{});
  margins.left = spark.defaulter(margins.left,5);
  margins.right = spark.defaulter(margins.right,5);
  margins.top = spark.defaulter(margins.top,5);
  margins.bottom = spark.defaulter(margins.bottom,5);
  
  return margins;
};

/* jshint esversion:6 */
Sparkline.prototype.defineReferencePoints = function() {
  const spark = this;

  let referencePoints = {};
  referencePoints.xMin = spark.margins.left;
  referencePoints.xMax = spark.size.width - spark.margins.right;
  referencePoints.yMin = spark.size.height - spark.margins.bottom;
  referencePoints.yMax = spark.margins.top;

  return referencePoints;
};

/* jshint esversion:6 */
Sparkline.prototype.defineScales = function() {
  const spark = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([0,spark.data.length -1])
    .range([spark.referencePoints.xMin,spark.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain(spark.yDomain)
    .range([spark.referencePoints.yMin,spark.referencePoints.yMax]);

  return scales;
};

/* jshint esversion:6 */
Sparkline.prototype.defineSize = function(preset) {
  const spark = this;

  let size = spark.defaulter(preset,{});
  size.height = spark.defaulter(size.height,35);
  size.width = spark.defaulter(size.width,200);

  return size;
};

/* jshint esversion:6 */
Sparkline.prototype.defineStyles = function(preset) {
  const spark = this;

  styles = spark.defaulter(preset,{});
  styles.zeroLineStroke = spark.defaulter(styles.zeroLineStroke,"#aaa");
  styles.zeroLineStrokWidth = spark.defaulter(styles.zeroLineStrokWidth,1);
  styles.circleFill = spark.defaulter(styles.circleFill,"#173f5f");
  styles.circleRadius = spark.defaulter(styles.circleRadius,1);

  styles.lineStroke = spark.defaulter(styles.lineStroke,"#173f5f");
  styles.lineStrokeWidth = spark.defaulter(styles.lineStrokeWidth,1);
  styles.areaFill = spark.defaulter(styles.areaFill,"#20639b");

  return styles;
};

/* jshint esversion:6 */
Sparkline.prototype.registerTooltip = function(tooltip) {
  const line = this;

  line.tooltip = tooltip;

  return line;
};

/* jshint esversion:6 */
StatsSection.prototype.addDiv = function(where) {
  const section = this;
  let div;

  div = d3.select(where)
    .append("div")
    .classed("stat-group-numberline",true);

  return div;
};

/* jshint esversion:6 */
StatsSection.prototype.addHeader = function(name) {
  const section = this;
  let header;

  header = section.div
    .append("div")
    .classed("stats-section-header",true)
    .html(name);

  return header;
};

/* jshint esversion:6 */
StatsSection.prototype.addTables = function(options) {
  const section = this;

  let allTables = [];

  if(!options.tables) {return allTables;}

  options.tables.forEach((tableOptions) => {
    tableOptions.where = section.div;
    let table = new StatsTable(tableOptions);
    allTables.push(table);
  });

  return allTables;
};

/* jshint esversion:6 */
StatsTable.prototype.addContainer = function(where) {
  const table = this;

  let container;

  container = where
    .append("div")
    .classed("stats-numberline-subsection",true);

  return container;
};

/* jshint esversion:6 */
StatsTable.prototype.addHeader = function(name) {
  const table = this;
  
  let header;

  header = table.container
    .append("div")
    .classed("stats-subsection-header",true)
    .html(name);

  return header;
};

/* jshint esversion:6 */
StatsTable.prototype.addTableElement = function(where) {
  const table = this;

  let tableElement;

  tableElement = where
      .append("div")
      .classed("stats-numberline-table",true);

  return tableElement;
};

/* jshint esversion:6 */
StatsTable.prototype.addTableHeaderRow = function(options) {
  const table = this;

  let row;

  row = table.tableElement
    .append("div")
    .classed("stats-numberline-table-row",true);

  row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true)
    .classed("align-right",true)
    .html("Metric");

  let referenceContainer = row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true);

  let reference = new NumberlineReference({
    "where":referenceContainer,
    "type":options.headerType
  });

  row
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("stats-numberline-header-cell",true)
    .classed("align-left",true)
    .classed("display-player-name",true);

  return row;
};

/* jshint esversion:6 */
StatsTable.prototype.generateRowElements = function(rows) {
  const table = this;
  let header;

  if(table.rows) {
    table.rows.forEach((row) => {
      row.where = table.tableElement;
      let tRow = new StatsTableRow(row);
    });
  }

  return header;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addNameCell = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("right-align",true)
    .classed("stats-numberline-stat-name",true)
    .attr("data-description",tableRow.options.description)
    .html(tableRow.options.display);

  return element;  
};

/* jshint esversion:6 */
StatsTableRow.prototype.addNumberline = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true);

  let numberlineElement = element
    .append("div")
    .classed("numberline",true)
    .attr("data-key",tableRow.options.key)
    .attr("data-name",tableRow.options.display)
    .attr("id","line_" + tableRow.options.key);

  if(tableRow.options.scaleMin !== null) {
    numberlineElement
      .attr("data-scale-min",tableRow.options.scaleMin);
  }

  if(tableRow.options.scaleMax) {
    numberlineElement
      .attr("data-scale-max",tableRow.options.scaleMax);
  }

  return element;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addPlayerValue = function(where) {
  const tableRow = this;
  
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("left-align",true);


  element
    .append("span")
    .classed("stats-numberline-table-player-value",true)
    .attr("data-key",tableRow.options.key);

  return element;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addRowElement = function(where) {
  const tableRow = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-row",true);

  return element;
};

/* jshint esversion:6 */
StatsTableRow.prototype.addSparkline = function(where) {
  const row = this;
  let element;

  element = where
    .append("div")
    .classed("stats-numberline-table-row",true)
    .classed("stats-numberline-table-row-sparkline",true)
    .attr("data-key",row.options.key);


  return element;
};

/* jshint esversion:6 */
TextLabel.prototype.hide = function() {
  const label = this;

  label.group
    .style("display","none");

  return label;
};

/* jshint esversion:6 */
TextLabel.prototype.move = function(position) {
  const label = this;

  label.group
    .attr("transform","translate("+position.x+","+position.y+")");

  return this;
};

/* jshint esversion:6 */
TextLabel.prototype.show = function() {
  const label = this;

  label.group
    .style("display","block");

  return label;
};

/* jshint esversion:6 */
TextLabel.prototype.updateText = function(newText) {
  const label = this;

  label.background.text(newText);
  label.foreground.text(newText);

  return label;
};

/* jshint esversion:6 */
TextLabel.prototype.addBackground = function() {
  const label = this;

  let text;

  text = label.group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor",label.styles.textAnchor)
    .attr("alignment-baseline","central")
    .attr("font-family",label.styles.fontFamily)
    .attr("font-size",label.styles.fontSize)
    .attr("font-weight",label.styles.fontWeight)
    .attr("stroke",label.styles.backgroundStroke)
    .attr("fill","none")
    .attr("stroke-width",label.styles.outlineWidth)
    .text(label.text);

  return text;
};

/* jshint esversion:6 */
TextLabel.prototype.addForeground = function() {
  const label = this;

  let text;

  text = label.group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor",label.styles.textAnchor)
    .attr("alignment-baseline","central")
    .attr("font-family",label.styles.fontFamily)
    .attr("font-size",label.styles.fontSize)
    .attr("font-weight",label.styles.fontWeight)
    .attr("stroke","none")
    .attr("fill",label.styles.foregroundColor)
    .text(label.text);

  return text;
};

/* jshint esversion:6 */
TextLabel.prototype.addGroup = function(where) {
  const label = this;
  let group;

  group = where
    .append("g")
    .style("display","none")
    .attr("cursor","pointer");

  return group;
};

/* jshint esversion:6 */
TextLabel.prototype.defineStyles = function(options) {
  const label = this;
  let styles;

  styles = defaulter(options.styles,{});

  styles.fontFamily = defaulter(options.fontFamily,"Source Sans Pro");
  styles.fontSize = defaulter(options.fontSize,"10pt");
  styles.fontWeight = defaulter(options.fontWeight,"bold");
  styles.backgroundStroke = defaulter(options.backgroundStroke,"white");
  styles.outlineWidth = defaulter(options.outlineWidth,5);
  styles.foregroundColor = defaulter(options.foregroundColor,"black");
  styles.textAnchor = defaulter(options.textAnchor,"middle");

  return styles;

  function defaulter(value,defaultValue) {
    return value === undefined ? defaultValue : value;
  }
};

/* jshint esversion:6 */
Tooltip.prototype.createDiv = function(where) {
  const tooltip = this;
  let div;

  div = d3.select(where)
    .append("div")
    .classed("tooltip",true)
    .html("tooltip");

  return div;
};

/* jshint esversion:6 */
Tooltip.prototype.hide = function() {
  const tooltip = this;

  tooltip.div
    .style("display","none");

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.matchFangraphs = function(datum) {
  return tooltip.playerMap.filter((a) => { return a.id == datum.id;})[0];
};

/* jshint esversion:6 */
Tooltip.prototype.move = function(event,offset) {
  const tooltip = this;

  event = d3.event;

  if(offset === undefined) {
    offset = {};
  }
  offset.x = offset.x ? offset.x : 10;
  offset.y = offset.y ? offset.y : 0;

  let height = tooltip.div.node().clientHeight;

  let xPosition = event.pageX + offset.x;
  let yPosition = event.pageY + offset.y - height / 2;

  tooltip.div
    .style("left",xPosition + "px")
    .style("top",yPosition + "px");

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.registerPlayerMap = function(playerMap) {
  const tooltip = this;
  tooltip.playerMap = playerMap;
  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.show = function() {
  const tooltip = this;

  tooltip.div
    .style("display","block");

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showCompPlayerName = function(compPlayer) {
  const tooltip = this;

  tooltip
    .update(compPlayer)
    .show()
    .move();

  return this;
};

/* jshint esversion:6 */
Tooltip.prototype.showNumberlineDatum = function(datum) {
  const tooltip = this;
  let chartName = datum.chartName;
  let playerName = tooltip.matchFangraphs(datum).name;
  let playerValue = datum.value;
  let summaryData = datum.summaryData;
  let zScore = (playerValue - summaryData.mean) / summaryData.standardDeviation;
  let zScoreStatement;
  let zScoreClass;

  if(zScore <= - 2) {
    zScoreStatement = "Significantly below the mean.";
    zScoreClass = "significantlyBelowMean";
  }
  if(zScore > -2 && zScore < -1) {
    zScoreStatement = "Well below the mean.";
    zScoreClass = "wellBelowMean";
  }
  if(zScore >= -1 && zScore < 0) {
    zScoreStatement = "Below the mean.";
    zScoreClass = "belowMean";
  }
  if(zScore >= 0 && zScore < 1) {
    zScoreStatement = "Above the mean.";
    zScoreClass = "aboveMean";
  }
  if(zScore >= 1 && zScore < 2) {
    zScoreStatement = "Well above the mean.";
    zScoreClass = "wellAboveMean";
  }
  if(zScore >= 2) {
    zScoreStatement = "Significantly above the mean.";
    zScoreClass = "significantlyAboveMean";
  }

  let display = "<div class='tooltipNumberlinePlayerName'>" + playerName + "</div>";
  display += "<div class='tooltipNumberLineValueLine'><span class='tooltipNumberlineStatName'>" + datum.chartName + "</span>: <span class='tooltipNumberlineStatValue'>" + datum.value + "</span> | <span class='tooltipNumberlineStatName'>Z-Score:</span> <span class='tooltipNumberlineStatValue'> "+zScore.toFixed(2)+" </span></div>";
  display += "<div class='tooltipNumberLineValueLine'><span class='tooltipNumberlineZScoreStatement  "+ zScoreClass +"'>" + zScoreStatement + "</span></div>";

  tooltip
    .update(display)
    .show()
    .move(d3.event);


  return tooltip;

};

/* jshint esversion:6 */
Tooltip.prototype.showNumberlineMean = function(summaryData,name) {
  const tooltip = this;

  let display = "";

  display = "The mean value for <span class='tooltipStatName'> " + name + "</span> was <span class='tooltipStatMean'>" + summaryData.mean.toFixed(2) + "</span>. Standard Deviation = " + summaryData.standardDeviation.toFixed(2);

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showOneStandardDeviation = function(summaryData,name) {
  const tooltip = this;

  let display;

  display = "The one standard deviation interval for <span class='tooltipStatName'>" + name + "</span> was [<span class='tooltipDeviationInterval'>"+ summaryData.oneBelowStandardDeviation.toFixed(2)+"</span> , <span class='tooltipDeviationInterval'>"+summaryData.oneAboveStandardDeviation.toFixed(2)+"</span>].";

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showPlayerProjection = function(playerName,projection) {
  const tooltip = this;

  let display = "The mean comp player for <strong>" + playerName + "</strong> was worth ";
  display += projection.bWar.toFixed(1) + " wins above replacement in their age ";
  display += projection.age + " season.";

  tooltip
    .update(display)
    .show()
    .move();

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showPlayerYear = function(name,datum) {
  let tooltip = this;

  let display = "In <strong>" + name + "'s</strong> ";
  display += " age " + datum.age + " season, he was worth " + datum.bWar.toFixed(1) + " wins above replacement.";

  tooltip
    .update(display)
    .show()
    .move();

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showSparklinedata = function(data) {
  const tooltip = this;

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showStatDefinition = function(description) {
  const tooltip = this;

  tooltip
    .update(description)
    .show()
    .move(d3.event,{x:25});

  return tooltip;
};

/* jshint esversion:6 */
Tooltip.prototype.showTwoStandardDeviations = function(summaryData,name) {
  const tooltip = this;

  let display;

  display = "The two standard deviation interval for <span class='tooltipStatName'>" + name + "</span> was [<span class='tooltipDeviationInterval'>"+ summaryData.twoBelowStandardDeviation.toFixed(2)+"</span> , <span class='tooltipDeviationInterval'>"+summaryData.twoAboveStandardDeviation.toFixed(2)+"</span>].";

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};

/* jshint esversion:6 */Tooltip.prototype.update = function(display) {
  const tooltip = this;

  tooltip.div
    .html(display);

  return tooltip;
};

/* jshint esversion:6 */
Slider.prototype.hide = function() {
  const slider = this;

  slider.group
    .attr("display","none");

  return slider;
};

/* jshint esversion:6 */
Slider.prototype.killGlow = function() {
  const slider = this;

  slider.isGlowing = false;
  
  slider.glowCircle
    .attr("display","none");

  return slider;
}

/* jshint esversion:6 */
Slider.prototype.move = function(coordinates) {
  const slider = this;

  slider.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return slider;
}

/* jshint esversion:6 */
Slider.prototype.runGlow = function() {
  const slider = this;

  slider.isGlowing = true;

  slider.glowCircle
    .attr("display","block");

  glow();

  return slider;

  function glow() {
    slider.glowCircle
      .attr("opacity",slider.styles.glowCircleDefaultOpacity)
      .attr("r",slider.styles.glowCircleDefaultRadius)
      .attr("fill",slider.styles.glowCircleFill)
      .transition()
      .delay(slider.styles.glowDelay)
      .duration(slider.styles.glowDuration)
      .attr("opacity",slider.styles.glowCircleEndOpacity)
      .attr("r",slider.styles.glowCircleEndRadius)
      .attr("fill",slider.styles.glowCircleEndFill)
      .on('end',function()  {
        if(slider.isGlowing) {
          glow();
        }
      });

  }
};

/* jshint esversion:6 */
Slider.prototype.setDragCallback = function(cb) {
  const slider = this;

  slider.dragCallback = cb;

  return slider;
};

/* jshint esversion:6 */
Slider.prototype.show = function() {
  const slider = this;

  slider.group
    .attr("display","block");

  return slider;
};

/* jshint esversion:6 */
Slider.prototype.addGlowCircle = function() {
  const slider = this;

  // TODO: FILL IN VALUES
  // UPDATE STYLES
  let glowCircle = slider.layers.glow
    .append("circle")
    .attr("cx",slider.scale(slider.currentValue))
    .attr("cy",slider.referencePoints.circleCenterY)
    .attr("opacity",slider.styles.glowCircleDefaultOpacity)
    .attr("r",slider.styles.glowCircleDefaultRadius)
    .attr("fill",slider.styles.glowCircleFill)
    .attr("display","none");

  return glowCircle;
};

/* jshint esversion:6 */
Slider.prototype.addGroup = function(where) {
  const slider = this;
  let group;

  group = where
    .append("g");

  return group;
}

/* jshint esversion:6 */
Slider.prototype.addLabel = function() {
  const slider = this;
  let text;

  text = new TextLabel({
    "text":slider.labelText,
    "where":slider.layers.text
  }).show()
  .move(slider.referencePoints.labelPosition);

  return text;
};

/* jshint esversion:6 */
Slider.prototype.addLayers = function() {
  const slider = this;
  let layers = {};

  layers.background = addSingleLayer();
  layers.text = addSingleLayer();
  layers.track = addSingleLayer();
  layers.glow = addSingleLayer();
  layers.circle = addSingleLayer();

  return layers;

  function addSingleLayer() {
    let layer;

    layer = slider.group
      .append("g");

    return layer;
  }
};

/* jshint esversion:6 */
Slider.prototype.addSliderTrack = function() {
  const slider = this;
  let track;

  track = slider.layers.track
    .append("rect")
    .attr("x",slider.margins.left)
    .attr("y",slider.referencePoints.sliderTrackVerticalCenter)
    .attr("height",slider.styles.sliderTrackHeight)
    .attr("width",slider.referencePoints.effectiveWidth)
    .attr("fill",slider.styles.sliderTrackColor);

  return track;
};

/* jshint esversion:6 */
Slider.prototype.addSlidingCircle = function() {
  const slider = this;

  let circle = slider.layers.circle
    .append("circle")
    .attr("cx",slider.scale(slider.currentValue))
    .attr("cy",slider.referencePoints.circleCenterY)
    .attr("r",slider.styles.circleRadius)
    .attr("fill",slider.styles.circleFill)
    .attr("stroke",slider.styles.circleStroke)
    .attr("stroke-width",slider.styles.circleStrokeWidth)
    .attr("cursor","pointer")
    .call(d3.drag().on("start",slider.dragFunctions.start).on("drag",slider.dragFunctions.drag).on("end",slider.dragFunctions.end))
    .on('mouseover',function() {
      let element = d3.select(this);

      element
        .transition()
        .duration(125)
        .attr("fill",slider.styles.highlightFillColor)
        .attr("stroke",slider.styles.highlightStrokeColor)
        .attr("stroke-width",slider.styles.highlightFillStrokeWidth)
        .attr("radius",slider.styles.highlightCircleRadius);

      slider
        .circleMouseover();
    })
    .on('mouseout',function() {
      let element = d3.select(this);

      if(!slider.dragLock) {
        element
          .transition()
          .duration(125)
          .attr("fill",slider.styles.circleFill)
          .attr("stroke",slider.styles.circleStroke)
          .attr("stroke-width",slider.styles.circleStrokeWidth)
          .attr("radius",slider.styles.circleRadius);
      }

      slider
        .circleMouseout();


    });

  return circle;
};

/* jshint esversion:6 */
Slider.prototype.addValueLabel = function() {
  const slider = this;
  let text;

  text = new TextLabel({
    "text":slider.datum.value,
    "where":slider.layers.text,
    "textAnchor":"start",
    "fontSize":"16px"
  }).show()
  .move({
    "x":slider.referencePoints.valueLabelCenterX,
    "y":slider.referencePoints.circleCenterY
  });

  return text;
};

/* jshint esversion:6 */
Slider.prototype.defaulter = function(value,defaultValue) {
    return value === undefined ? defaultValue : value;
};

/* jshint esversion:6 */
Slider.prototype.defineDragFunctions = function() {
  const slider = this;

  let dragFunctions = {};

  dragFunctions.start = function(d,i) {
    let element = d3.select(this);
    slider.dragLock = true;
  };

  dragFunctions.drag = function(d,i) {
    let element = d3.select(this);
    let xPosition = d3.event.x;

    if(xPosition >= slider.referencePoints.trackMin && xPosition <= slider.referencePoints.trackMax) {
      let newValue;
      newValue = slider.scale.invert(xPosition);

      slider.currentValue = newValue;

      slider.valueLabel
        .updateText(newValue.toFixed(slider.significantDigits));

      slider.dragCallback(newValue);

      element
        .attr("cx",xPosition);
    }
  };


  dragFunctions.end = function(d,i) {
    slider.dragLock = false;

    let element = d3.select(this);

    element
      .transition()
      .duration(125)
      .attr("fill",slider.styles.circleFill)
      .attr("stroke",slider.styles.circleStroke)
      .attr("stroke-width",slider.styles.circleStrokeWidth)
      .attr("radius",slider.styles.circleRadius);

  };

  return dragFunctions;
};

/* jshint esversion:6 */
Slider.prototype.defineLayout = function() {
  const slider = this;
  let layout = {};

  layout.labelOrigin = {"x":0,"y":slider.margins.top};
  layout.sliderOrigin = {"x":slider.margins.left,"y":slider.margins.top};

  return layout;
};

/* jshint esversion:6 */
Slider.prototype.defineMargins = function(presetMargins) {
  const slider = this;
  let margins = slider.defaulter(presetMargins,{});

  margins.left = slider.defaulter(margins.left,10);
  margins.right = slider.defaulter(margins.right,50);
  margins.top = slider.defaulter(margins.top,10);
  margins.bottom = slider.defaulter(margins.bottom,0);

  return margins;
};

/* jshint esversion:6 */
Slider.prototype.defineReferencePoints = function() {
  const slider = this;
  let referencePoints = {};

  referencePoints.labelPosition = {"x":slider.size.width / 2,"y":slider.margins.top};
  referencePoints.verticalCenter = slider.size.height / 2;
  referencePoints.effectiveWidth = slider.size.width - slider.margins.left - slider.margins.right;
  referencePoints.effectiveHeight = slider.size.height - slider.margins.top - slider.margins.bottom;
  referencePoints.sliderTrackVerticalCenter = slider.margins.top + (referencePoints.effectiveHeight / 2);
  referencePoints.trackMin = slider.margins.left;
  referencePoints.trackMax = slider.size.width - slider.margins.right;
  referencePoints.circleCenterY = referencePoints.sliderTrackVerticalCenter + slider.styles.sliderTrackHeight / 2;
  referencePoints.valueLabelCenterX = referencePoints.effectiveWidth + 15;

  return referencePoints;
};

/* jshint esversion:6 */
Slider.prototype.defineScale = function() {
  const slider = this;
  let scale;

  scale = d3.scaleLinear()
    .domain(slider.domain)
    .range([slider.referencePoints.trackMin,slider.referencePoints.trackMax]);

  return scale;
};

/* jshint esversion:6 */
Slider.prototype.defineSize = function(presetSize) {
  const slider = this;
  let size = slider.defaulter(presetSize,{});

  size.height = slider.defaulter(size.height,50);
  size.width = slider.defaulter(size.width,200);

  return size;
};

/* jshint esversion:6 */
Slider.prototype.defineStyles = function(presetStyles) {
  const slider = this;
  let styles = slider.defaulter(presetStyles,{});

  styles.sliderTrackColor = "#aaa";
  styles.sliderTrackHeight = 5;
  styles.circleRadius = 5;
  styles.circleFill = "black";
  styles.circleStroke = "#eee";
  styles.circleStrokeWidth = 1;

  styles.highlightFillColor = "red";
  styles.highlightStrokeColor = "black";
  styles.highlightFillStrokeWidth = 2;
  styles.highlightCircleRadius = 7;

  styles.glowCircleDefaultOpacity = 1.0;
  styles.glowCircleDefaultRadius = 7;
  styles.glowCircleFill = "red";

  styles.glowCircleDefaultOpacity = 1;
  styles.glowCircleDefaultRadius = 5;
  styles.glowCircleFill = "red";

  styles.glowDelay = 0;
  styles.glowDuration = 1500;
  styles.glowCircleEndOpacity = 0;
  styles.glowCircleEndRadius = 15;
  styles.glowCircleEndFill = "red";


  return styles;
};
