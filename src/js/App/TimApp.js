function TimApp(options) {
  const app = this;
  init(options)
  return app;

  function init(options) {

    app.browserInfo = app.getBrowserInfo();

    app.timeline = new Timeline({
      "where":"#timeline"
    });

    console.log("UPDATED?");

    app.examples = app.addExamples([
      // {
      //   "text":["AUGMENTED ARCHITECTURE","MODELS"],
      //   "identifier":"arArchitecture",
      //   "imagePaths":[],
      //   "href":"augmented-architecure",
      //   "imageSize":{
      //     "width":1920,
      //     "height":1080
      //   },
      //   "description":"An ARKit demo app interacting with architectural models."
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
      //   "description":"An essay on the promise and potential of spatial computing."
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
      //   "description":"An essay on the limitations and challenges of spatial computing."
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
        "description":"An assortment of 3D models I've created."
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
        "description":"An experiment in pushing d3 and SVG animations beyond their intended use."
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
        "description":"An explorable explanation about a fundamental principle of interface design."
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
        "description":"Using Blender to create animated charts and graphics."
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
        "description":"A prototype tool for comparing the potential value of MLB Free Agents."
      },

      // {
      //   "text":["K-MEANS EXPLAINED"],
      //   "imagePaths":["assets/kMeans.png","assets/kMeans-1.png","assets/kMeans-2.png","assets/kMeans-3.png","assets/kMeans-4.png"],
      //   "identifier":"kMeans",
      //   "href":"kMeans/",
      //   "imageSize":{
      //     "width":1224,
      //     "height":872
      //   },
      //   "description":"An explorable explanation about the foundational machine learning algorithm."
      // },
      // {
      //   "text":["LEARNABLE SVG"],
      //   "imagePaths":["assets/svg.png","assets/svg-2.png","assets/svg-3.png","assets/svg-4.png"],
      //   "identifier":"svg",
      //   "href":"learnable-svg/",
      //   "imageSize":{
      //     "width":2296,
      //     "height":1284
      //   },
      //   "description":"The missing interactive documentation for SVGs."
      // },
      // {
      //   "text":["TBD PHYSICAL","PROTOTYPES"],
      //   "identifier":"arArchitecture",
      //   "imagePaths":[],
      //   "href":"augmented-architecure",
      //   "imageSize":{
      //     "width":1920,
      //     "height":1080
      //   },
      //   "description":"Build out something with 3D Printing / Glowforge / other fabrication techniques."
      // },
    ]);

    app.skillBox = new SkillBox(app);

    app.scrollManager = new ScrollManager({
      "parent":app
    });


  }
}
