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
        "rows":[]
      }]
    }, {
      "name": "Hitting Overview",
      "tables": [{
        "name":"Overview",
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
    //   "name": "Run Prevention",
    //   "tables":[]
    // }, {
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
        "name":"Zone",
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
        "name":"Baserunning Overview",
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
        "name":"Pitch Type",
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
    }
  ];

  return sections;

}
