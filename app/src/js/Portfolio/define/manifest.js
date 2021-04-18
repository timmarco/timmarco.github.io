Portfolio.prototype.manifest = [
  {
    "title":["ABOUT","ME"],
    "titleTag":"About Me | Tim Marco",
    "metaDescription":"Bio for Tim Marco, a Creative Technologist from Chicago, Illinois.",
    "video":"app/assets/clips/aboutMe.mp4",
    "screenshot":"app/assets/clips/aboutMe.jpg",
    "subtitle":"Bio and Contact Info",
    // "circa":"Mid-2017",
    "callback":activateAboutMe,
    "route":"about",
    "loadCallback":loadedAboutMe
  },
  // {
  //   "title":["DATA-DRIVEN","VIDEO"],
  //   "video":"assets/clips/videoDataViz.mp4",
  //   "screenshot":"assets/clips/videoDataViz.png",
  //   "subtitle":"Data binding with Python and Blender",
  //   "screenshot":"app/assets/clips/sketchbook.jpg",
  //   "circa":"April 2021",
  //   "route":"data-driven-video"
  // },
  // {
  //   "title":["MLB FREE AGENT","EXPLORER"],
  //   "titleTag":"MLB Free Agents Explorer",
  //   "metaDescription":"A tool for assessing uncertain projections, using MLB player data as an example.",
  //   "video":"app/assets/clips/freeAgents.mp4",
  //   "screenshot":"app/assets/clips/freeAgents.jpg",
  //   "subtitle":"A tool for assessing uncertain projections",
  //   "circa":"Early 2019",
  //   "route":"free-agent-explorer",
  //   "callback":activateFreeAgents,
  //   "loadCallback":loadedFreeAgents
  // },
  {
    "title":["STRANGER THINGS","TITLE RE-CREATION"],
    "titleTag":"Stranger Things Titles in d3.js | Tim Marco",
    "metaDescription":"An experiment in re-creating the main titles of the Netflix Show 'Stranger Things' in the browser.",
    "video":"app/assets/clips/strangerThings.mp4",
    "screenshot":"app/assets/clips/strangerThings.png",
    "preview":"app/assets/previews/strangerThingsPreview.png",
    "subtitle":"An experiment in SVG Animation",
    "circa":"Mid-2017",
    "callback":activateStrangerThings,
    "route":"stranger-things",
    "loadCallback":loadedStrangerThings
  },
  {
    "title":["MY","SKETCHBOOK"],
    "titleTag":"My Sketchbook | Tim Marco",
    "metaDescription":"A collection of interaction, design, and simulation experiments by Tim Marco",
    "video":"app/assets/clips/sketchbook.mp4",
    "screenshot":"app/assets/clips/sketchbook.jpg",
    "preview":"app/assets/previews/sketchbookPreview.png",
    "subtitle":"A collection of design and interaction experiments",
    "circa":"2017-Ongoing",
    "callback":activateSketchbook,
    "route":"sketchbook",
    "loadCallback":loadedSketchbook
  },
  {
    "title":["DIVING DEEP","INTO FITTS' LAW"],
    "titleTag":"Diving Deep into Fitts' Law | Tim Marco",
    "metaDescription":"An Explorable Explanation of Fitts' Law, a fundmental concept in Human-Computer Interaction and ergonomics.",
    "video":"app/assets/clips/fitts.mp4",
    "screenshot":"app/assets/clips/fitts.jpg",
    "preview":"app/assets/previews/fittsPreview.png",
    "subtitle":"An Explorable Explanation about human-computer interaction",
    "circa":"November 2018",
    "callback":activateFittsLaw,
    "route":"fitts-law",
    "loadCallback":loadedFittsLaw
  }
];
