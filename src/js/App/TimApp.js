function TimApp(options) {
  const app = this;
  init(options)
  return app;

  function init(options) {

    app.browserInfo = app.getBrowserInfo();

    if(!app.browserInfo.isTouchDevice) {
      app.timeline = new Timeline({
        "where":"#timeline"
      });
    } else {
      d3.select("#onlyDesktop")
        .style("display","none");
    }

    const examples = [
      // {
      //   "text":["AUGMENTED ARCHITECTURE"],
      //   "identifier":"arArchitecture",
      //   "imagePaths":[],
      //   "href":"augmented-architecture",
      //   "imageSize":{
      //     "width":1920,
      //     "height":1080
      //   },
      //   "description":"An ARKit demo app interacting with architectural models.",
      //   "mobileImage":"augmented-architecture.png"
      // },
      // {
      //   "text":["THE PROMISE OF ","SPATIAL COMPUTING"],
      //   "identifier":"promise",
      //   "imagePaths":["assets/promiseSpatialComputing.png","assets/promiseSpatialComputing-1.png","assets/promiseSpatialComputing-2.png","assets/promiseSpatialComputing-3.png"],
      //   "href":"promise-of-spatial-computing/",
      //   "imageSize":{
      //     "width":1224,
      //     "height":872
      //   },
      //   "description":"An essay on the promise and potential of spatial computing.",
      //   "mobileImage":"promise-spatial-computing.png"
      // },
      // {
      //   "text":["THE CHALLENGES OF ","SPATIAL COMPUTING"],
      //   "identifier":"challenge",
      //   "imagePaths":["assets/challenge.png","assets/challenge-1.png"],
      //   "href":"challenges-of-spatial-computing/",
      //   "imageSize":{
      //     "width":1213,
      //     "height":757
      //   },
      //   "description":"An essay on the limitations and challenges of spatial computing.",
      //   "mobileImage":"challenges-spatial-computing.png"
      // },
      {
        "text":["3D MODEL SKETCHES"],
        "imagePaths":["assets/arduino.png"],
        "identifier":"three",
        "href":"modelViewer",
        "imageSize":{
          "width":1920,
          "height":1080
        },
        "description":"An assortment of 3D models I've created.",
        "mobileImage":"three-d-model-sketches.png"
      },

      {
        "text":["DIVING DEEP INTO","FITTS' LAW"],
        "imagePaths":["assets/fitts.png","assets/fitts-1.png","assets/fitts-2.png","assets/fitts-3.png"],
        "identifier":"fitts",
        "href":"fitts/",
        "imageSize":{
          "width":1300,
          "height":826
        },
        "description":"An explorable explanation about a fundamental principle of interface design.",
        "mobileImage":"fitts-law.png"
      },
      {
        "text":["STRANGER THINGS TITLES","RECREATED IN D3"],
        "imagePaths":["assets/strangerThings.png","assets/strangerThings-1.png","assets/strangerThings-2.png"],
        "identifier":"strangerThings",
        "href":"d3StrangerThings/",
        "imageSize":{
          "width":1898,
          "height":1064
        },
        "description":"An experiment in pushing d3 and SVG animations beyond their intended use.",
        "mobileImage":"stranger-things.png"
      },
      {
        "text":["FREE AGENT ANALYZER"],
        "imagePaths":["assets/freeAgents.png","assets/freeAgents-1.png","assets/freeAgents-2.png","assets/freeAgents-3.png"],
        "identifier":"freeAgent",
        "href":"FreeAgents/",
        "imageSize":{
          "width":1200,
          "height":1006
        },
        "description":"A prototype tool for comparing the potential value of MLB Free Agents.",
        "mobileImage":"free-agents.png"
      },
      {
        "text":["VIDEO DATA","VISUALIZATION"],
        "imagePaths":["assets/video.png","assets/video-1.png","assets/video-2.png","assets/video-3.png"],
        "identifier":"video",
        "href":"blenderCharts",
        "imageSize":{
          "width":1920,
          "height":1080
        },
        "description":"Using Blender to create animated charts and graphics.",
        "mobileImage":"video-data-visualization.png"
      },
      // {
      //   "text":["TBD PHYSICAL","PROTOTYPES"],
      //   "identifier":"arArchitecture",
      //   "imagePaths":[],
      //   "href":"augmented-architecure",
      //   "imageSize":{
      //     "width":1920,
      //     "height":1080
      //   },
      //   "description":"Build out something with 3D Printing / Glowforge / other fabrication techniques.",
      //   "mobileImage":"physical-prototypes.png"
      // },
    ];

    app.examples = app.addExamples(examples);


    app.skillBox = new SkillBox(app);

    app.scrollManager = new ScrollManager({
      "parent":app
    });


  }
}
