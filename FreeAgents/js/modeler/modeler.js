/* jshint esversion:6 */
function Modeler(options) {
  const modeler = this;

  init(options);

  return modeler;

  function init(options) {
    modeler.size = modeler.defineSize(options.size);
    modeler.chartMargins = modeler.defineChartMargins(options.chartMargins);
    modeler.layout = modeler.defineLayout();
    modeler.svg = modeler.addSvg(options.where);
    modeler.layers = modeler.addLayers();

    modeler.projections = {};
    modeler.projectionParameters = {
      "contractYears":3,
      "salary":[],
      "winValue":[]
    };

    modeler.pane = new ModelerPane({
      "where":modeler.layers.pane,
      "parent":modeler
    });



    modeler.contractButton = new Button({
      "where":modeler.layers.button,
      "text":"CONTRACT BUTTON",
      "size":{
        "width":250
      }
    })
    .move({
      "x":525,
      "y":250
    })
    .registerCallback(() => {modeler.pane.transitionIn(); });

    /*
    modeler.yearHeading = new TextLabel({
      "where":modeler.layers.contract,
      "text":"Year"
    }).show()
    .move({"x":525,"y":117.5});

    modeler.contractHeading = new TextLabel({
      "where":modeler.layers.contract,
      "text":"Contract Value"
    }).show()
    .move({"x":600,"y":117.5});

    modeler.contractHeading = new TextLabel({
      "where":modeler.layers.contract,
      "text":"Cost / Win"
    }).show()
    .move({"x":700,"y":117.5});
    */

    modeler.projectionValueData = {};

    modeler.key = new ModelerKey({
      "where":modeler.layers.chart
    });


    modeler.chart = modeler.addChart({});

    modeler.contractCostLabel = new TextLabel({
      "where":modeler.layers.chart,
      "text":"Total Contract Cost:"
    })
    .move({
      "x":525,
      "y":10
    });

    modeler.contractCostText = new TextLabel({
      "where":modeler.layers.chart,
      "text":"$300mm",
      "fontWeight":"Bold",
      "fontSize":"18pt"
    })
    .move({
      "x":525,
      "y":30
    });

    modeler.meanSurplusLabel = new TextLabel({
      "where":modeler.layers.chart,
      "text":"Mean Projection Surplus:"
    })
    .move({
      "x":700,
      "y":10
    });

    modeler.meanSurplusText = new TextLabel({
      "where":modeler.layers.chart,
      "text":"$100mm",
      "fontWeight":"Bold",
      "fontSize":"18pt"
    })
    .move({
      "x":700,
      "y":30
    });



  }

}
