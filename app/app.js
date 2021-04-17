function ContentPane(portfolio) {
  const pane = this;
  init(portfolio);
  return pane;

  function init(portfolio) {
    pane.parent = portfolio;
    pane.containerDiv = pane.addContainerDiv();
  }
}

function DetailsBox(portfolio) {
  const box = this;
  init(portfolio);
  return box;

  function init(portfolio) {
    box.parent = portfolio;
    box.containerDiv = box.addContainerDiv();
    box.contentDiv = box.addContentDiv();
    box.subtitleDiv = box.addSubtitleDiv();
    box.dateDiv = box.addDateDiv();
  }
}

function HeroPlayer(where,vimeoId,previewSource) {
  const hero = this;
  init(where,vimeoId,previewSource);
  return hero;

  function init(where,vimeoId,previewSource) {

    hero.vimeoId = vimeoId;

    hero.videoDiv = hero.addVideoDiv(where);
    hero.iframeHolder = hero.addIframeHolder();
    hero.videoLoad = hero.addVideoLoad(previewSource);
    hero.playerOverlay = hero.addPlayerOverlay();
    hero.messageDiv = hero.addMessageDiv();

  }
}

function Portfolio() {
  const portfolio = this;
  init();
  return portfolio;


  function init() {
    portfolio.isMobile = ("ontouchstart" in window)
    portfolio.titleTag = d3.select("title");
    portfolio.metaDescription = d3.select("head").append("meta").attr("name","description");
    portfolio.isActive = false;
    portfolio.itemsDiv = portfolio.addItemsDiv();
    portfolio.items = portfolio.addItems();
    portfolio.detailsBox = portfolio.addDetailsBox();
    portfolio.contentPane = portfolio.addContentPane();

    portfolio
      .registerRouter()
      .registerHashChange()
      .registerNavigation()
      .resetMetadata();

  }
}

function PortfolioItemContent(where) {
  const content = this;
  init(where);
  return content;

  function init(where) {
    content.where = where;
    content.containerDiv = content.addContainerDiv();
    content.videoDiv = content.addVideoDiv();
    content.descriptionDiv = content.addDescriptionDiv();
  }
}

function PortfolioItem(parent,manifest) {
  const item = this;
  init(parent,manifest);
  return item;

  function init(parent,manifest) {
    item.state = "inactive";

    item.parent = parent;
    item.manifest = manifest;

    item.containerDiv = item.addContainerDiv();
    item.substrate = item.addSubstrate();
    item.textLayer = item.addTextLayer();
    item.textDiv = item.addTextDiv();
    item.title = item.addTitle();
    item.heroOffset = item.addHeroOffset();
    item.hero = item.addHero();
    item.heroSource = item.addHeroSource();

  }
}

ContentPane.prototype.addContainerDiv = function() {
  const pane = this;
  return d3.select("body")
    .append("div")
    .classed("item-overlay",true);

}

ContentPane.prototype.transitionIn = function(item,instantaneous) {
  const pane = this;

  const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;
  const itemHeight = item.getActiveHeight();
  const paneTop = navbarHeight + itemHeight;
  const paneHeight = window.innerHeight - paneTop;

  pane.containerDiv
    .style("display",'block')
    .style("height",paneHeight + "px");

  pane.containerDiv.node().scrollTop = "0px";

  pane.containerDiv
    .transition()
    .duration(() => { if(instantaneous === true) { return 0;} return 250})
    .ease(d3.easeQuadIn)
    .style("top",paneTop + "px")
    .on("end",() => { item.manifest.loadCallback(pane.parent) })

  const baseUrl =  window.location.href;
  window.location.href = baseUrl.replace(/#(.*)$/, '') + '#' + item.manifest.route;


  if(item.manifest.callback) {
    pane.activeItem = item.manifest
      .callback(pane.containerDiv);
  }


  return pane;
}

ContentPane.prototype.transitionOut = function() {
  const pane = this;

  pane.containerDiv
    .transition()
    .duration(500)
    .style("top",window.innerHeight + "px")
    .on("end",() => {
      pane.containerDiv
        .style("display","none")
        .html("");
    });

  return pane;
}

DetailsBox.prototype.transitionIn = function(item,instantaneous) {
  const box = this;

  box
    .updateContent(item);

  const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;
  const itemHeight = item.getActiveHeight();

  box.containerDiv
    .style("display","block")
    .style("top",navbarHeight + "px")
    .style("left",window.innerWidth + "px")
    .style("height",itemHeight + "px")
    .transition()
    .duration(() => { if(instantaneous === true) { return 0; } return 250})
    .style("left",(window.innerWidth / 2) + "px");


  return box;
}

DetailsBox.prototype.transitionOut = function() {
  const box = this;

  box.containerDiv
    .transition()
    .duration(250)
    .style("left",window.innerWidth + "px")
    .on("end",() => {
      box.containerDiv
        .style("display","none");

      box.subtitleDiv
        .html();

      box.dateDiv
        .html();
    });

  return box;
}

DetailsBox.prototype.updateContent = function(item) {
  const box = this;

  box.subtitleDiv
    .html(item.manifest.subtitle);

  box.dateDiv
    .html(item.manifest.circa);

  return box;
}

DetailsBox.prototype.addContainerDiv = function() {
  const box = this;
  return d3.select("body")
    .append("div")
    .classed("details_box",true)
}

DetailsBox.prototype.addContentDiv = function() {
  const box = this;
  return box.containerDiv
    .append("div")
    .classed("details_content_div",true);
}

DetailsBox.prototype.addDateDiv = function() {
  const box = this;
  return box.contentDiv
    .append("div")
    .classed("details_date",true);
}

DetailsBox.prototype.addSubtitleDiv = function() {
  const box = this;
  return box.contentDiv
    .append("div")
    .classed("details_subtitle",true);
}

function activateFreeAgents(where) {


  return new PortfolioItemContent(where)
    .div("<div style='text-align:right; margin-top:2em'><a href='https://timmarco.com/FreeAgents' target='_blank'><div class='callDown'>VIEW THE DEMO (OPENS A NEW TAB)</div><img src='app/assets/media/freeAgents.png' class='link-screenshot-image' ></a></div>");

}

function loadedFreeAgents() {

}

function activateFittsLaw(where) {

  const content = new PortfolioItemContent(where)
    .vimeo("523023575","app/assets/previews/fittsPreview.jpeg")
    .div("<div style='text-align:right; margin-top:2em'><a href='https://timmarco.com/fitts' target='_blank'><div class='callDown'>VIEW THE EXPLORABLE (OPENS A NEW TAB)</div><img src='app/assets/media/fittsScreenshot.png'/ class='link-screenshot-image''></a></div>")
    .div("<div class='explanation-div'><h1>AN EXPLORABLE EXPLANATION</h1><p>I've long been inspired by Bret Victor's concept of <a href=\"http://worrydream.com/ExplorableExplanations/\" target=\"_blank\">Explorable Explanations</a>, which are interactive documents to encourage active reading. I wanted to try my hand at creating one of these documents in part as an exercise in anticipating and responding to how readers think about complex topics.</p></div>")
    .div("<img src='app/assets/media/fittsNotes.jpeg' style='width:100%'  />")
    .div("<p style='width:90%; margin:auto'>Creating an Explorable Explanation has as much in common with typical user interface design as it does with essay or textbook writing. While planning this project, I spent as much time designing and coding interactions as I did researching and writing about Fitts' Law.</p> ")
    .div("<p style='width:90%; margin:auto; padding-top:1em; margin-bottom:3em'>Yet by the end of the project, I was struck by how similar those seemingly disparate activities actually are.</p> ")


  return content;

}

function loadedFittsLaw(parent) {

  parent.contentPane.activeItem.hero
    .pop()
    .load();
}

function activateSketchbook(where) {

  const item = new PortfolioItemContent(where)
    .vimeo("524922093","app/assets/previews/sketchbookPreview.jpeg");

  const loadingSvg = item.descriptionDiv
    .append("svg")
    .attr("id","sketchbookLoading")
    .style("width","100%")
    .style("min-height","400px");

  const boundingRect = loadingSvg
    .node()
    .getBoundingClientRect();

  const xTransform = boundingRect.width / 2;
  const yTransform = boundingRect.height / 2;

  const loadingGroup = loadingSvg
    .append("g")
    .attr("transform","translate("+xTransform+","+yTransform+")");

  let data = [];
  d3.range(0,9)
    .forEach((datum) => {
      const relative = datum  / 9;
      const theta = 2 * Math.PI * relative - Math.PI / 2;
      data.push({
        "index":datum,
        "theta":theta
      });
    });


  const outlines = loadingGroup
    .selectAll(".outline")
    .data(data)
    .enter()
    .append("circle")
    .attr("r",10)
    .attr("cx",(datum) => { return Math.cos(datum.theta) * 100})
    .attr("cy",(datum) => { return Math.sin(datum.theta) * 100})
    .attr("fill","none")
    .attr("stroke","#ccc")
    .attr("stroke-width",2);


  const circles = loadingGroup
    .selectAll(".circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r",0)
    .attr("cx",(datum) => { return Math.cos(datum.theta) * 100})
    .attr("cy",(datum) => { return Math.sin(datum.theta) * 100})
    .attr("fill","rgba(60,144,60)")
    .attr("stroke","none");

  runCircles();

  function runCircles() {
    circles
      .transition()
      .duration(500)
      .delay((datum,index) => { return index * 50})
      .attr("r",15)
      .transition()
      .duration(325)
      .attr("r",0)
      .on("end",(datum,index) => {
        if(index === 8) {
          runCircles();
        }
      })
  }



  return item;

}

function loadedSketchbook(parent) {
  parent.contentPane.activeItem.hero
    .load(() => {
      loadFiveSketches();
      moreButton
        .style("display","block");
    });


  let allSketches = [
    {
      "title":"Arc Countdown",
      "type":"interactive",
      "notes":"An interactive countdown timer.<br/><br/><strong>Mouseover the scope to play the animation.</strong>",
      "callback":ArcCountdown
    },
    {
      "title":"Blur Attention",
      "type":"interactive",
      "notes":"A test of using SVG filters to simulate camera depth and bokeh effects.<br/><br/><strong>Mouseover the letters to see the effect.</strong>",
      "callback":BlurAttentionSketch
    },
    {
      "title":"iOS Audio Slider",
      "type":"interactive",
      "notes":"A study of the fluidlike animations that iOS uses for volume control<br/><br/><strong>Mouseover the scope to play the animation.</strong>",
      "callback":IosAudioSlider
    },
    {
      "title":"Radar Sweep",
      "type":"interactive",
      "notes":"A code-generated animation to simulate a radar scope.<br/><br/><strong>Mouseover the scope to play the animation.</strong>",
      "callback":RadarSketch
    },
    {
      "title":"Radial Group",
      "type":"interactive",
      "notes":"A small test animation for a radial animation and transitions.<br/><br/><strong>Mouseover the scope to play the animation.</strong>",
      "callback":RadialGroup
    },
    {
      "title":"Random Walk",
      "type":"interactive",
      "notes":"A random walk is a model that helps explain how entirely random processes can create illusory patterns. Here, I randomly move the value in a single dimension and plot the density of values at each possible point. <br/><br/><strong>Mouseover the scope to play the animation.</strong>",
      "callback":RandomWalk
    },
    {
      "title":"Willow Tree Test",
      "id":"514390367",
      "type":"video",
      "notes":"A simple model of a willow tree that I created while playing around with creating organic shapes using Blender."
    },
    {
      "title":"Quaking Aspen",
      "id":"514319482",
      "type":"video",
      "notes":"A more impressionistic / cartoonish model of a colony of quaking aspen created in Blender."
    },
    {
      "title":"Fastball",
      "id":"523536514",
      "type":"video",
      "notes":"An animation of a pitcher throwing a fastball in a cage. This was part of a larger project around the physics of pitching."
    },
    {
      "title":"HMD FoV",
      "id":"523524481",
      "type":"video",
      "notes":"An illustration of the effective field-of-view available to developers using head-mounted mixed reality devices. Due to constraints of both physics and physiology, these devices can only realistically display content in a specific region of space, relative to the user. As the user moves their head, this region moves accordingly. The largest consequence of this is that from the user's point of view, virtual objects will necessarily appear and disappear."
    },
    {
      "title":"Pitching View",
      "id":"523538770",
      "type":"video",
      "notes":"Major League Baseball tracks the precise trajectory of every pitch thrown in-game, and makes the data available through an unofficial API. Here, I'm synchronizing the broadcast video of a pitch with a visualization of the pitch's trajectory, as seen from multiple viewpoints."
    },
    {
      "title":"AR Kit Scan",
      "id":"385540505",
      "type":"video",
      "notes":"ARKit provides developers with the ability to scan physical objects for object recognition. Here, I'm using a (slightly modified) app from Apple to scan Lego architecture models for later recognition."
    },
    {
      "title":"FOREST FIRE TEST",
      "id":"523537584",
      "type":"video",
      "notes":"In computer science and computational social science, Forest Fire models describe the diffusion of information and behavior in connected systems. This is an illustration of how these models work, using the literal example of a burning forest."
    },
    {
      "title":"AR Kit Blendshapes",
      "id":"523515517",
      "type":"video",
      "notes":"A test of using ARKit's <span style='font-family:monospace'>ARFaceTracking</span> to perform basic performance capture and retargeting on a simple face model."
    },
    {
      "title":"Eye Optics",
      "id":"523516624",
      "type":"video",
      "notes":"A physically-accurate (albeit with exaggerated time) illustration of how the human eye bends and focuses rays of light on the retina. Optical power is attained via the cornea, lens, and vitreous humor, and rays of light focus on the retina."
    },
    {
      "title":"Mixed Reality Light Control",
      "id":"523518595",
      "type":"video",
      "notes":"Using a demo phone-based mixed reality application to control physical objects. The lamp was controlled using a relay and ESP-8266 microcontroller connected via WiFi. Users can tap on the lamp in the camera view to turn it on or off. Given display limitations of existing technology, these applications are of limited usefulness. But they <em>feel</em> unbelievable cool &mdash; like having a superpower."
    },
    {
      "title":"Mixed Reality Occlusion",
      "id":"523520895",
      "type":"video",
      "notes":"One of the trickiest things to do in Mixed Reality is creating the illusion of <em>real-time occlusion</em>: the sense that a physical object is actually <em>blocking</em> virtual content. This was an initial test of a concept for achieving just that effect in the context of a museum-like experience. Since this video was created, Apple and others have improved the native ability for object occlusion."
    },
    {
      "title":"My Workspace",
      "id":"523523617",
      "type":"video",
      "notes":"Animation of my workspace. I was working on building out a project using WS2812b RGB LEDs and got inspired to re-create the scene as an animation"
    },
    {
      "title":"Arduino",
      "id":"523771881",
      "type":"video",
      "notes":"Test render of an Arduino Uno model I created. Rendering with Radeon ProRender."
    },
    {
      "title":"Fluid Test",
      "id":"525596070",
      "type":"video",
      "notes":"An early test of running liquid simulations in Blender."
    },
    {
      "title":"Advanced Fluid Test",
      "id":"528371381",
      "type":"video",
      "notes":"A fully-rendered fluid simulation using Radeon Pro Render"
    }
  ];

  // HIDE NON-MOBILE FRIENDLY ONES
  if(parent.isMobile === false) {
    allSketches.push({
      "title":"Snell's Law",
      "type":"interactive",
      "notes":"A simple simulation of Snell's Law, which describes how rays of light are refracted at an interface between two media.<br/><br/><strong>Use your mouse to see how the rays refract through different media.</strong>",
      "callback":SnellsLaw
    });


    allSketches.push({
      "title":"Indices of Refraction",
      "id":"514442847",
      "type":"video",
      "notes":"This was a simple test of Radeon's ProRender software in Blender. I wanted to see how the varying the index of refraction of glass and glass-like materials would impact a render."
    });


    allSketches.push({
      "title":"Drag Snap",
      "type":"interactive",
      "notes":"A quick interaction sketch for connecting nodes in a diagram with a snapping effect and physics.",
      "callback":DragSnap
    });

  }


  allSketches = d3.shuffle(allSketches);

  const loadFiveSketches = () => {

    allSketches
      .forEach((sketch,index) => {
        if(index < 5) {
          parent.contentPane.activeItem
            .SketchbookItem(sketch);

          allSketches
            .shift();
        }
      });
  }

  const loadingHeight = d3.select("#sketchbookLoading")
    .node()
    .getBoundingClientRect()
    .height;

  d3.select("#sketchbookLoading")
    .style("opacity",1)
    .style("min-height","0")
    .style("height",loadingHeight + "px")
    .transition()
    .delay(500)
    .duration(1000)
    .style("height","0px")
    .style("opacity",0)

  const moreButton = parent.contentPane.containerDiv
    .append("div")
    .classed("more-sketches-button",true)
    .style("display","none")
    .html("+ LOAD MORE SKETCHES")
    .on("click",() => {
      loadFiveSketches();
      if(allSketches.length < 1) {
        moreButton
          .style("display","none");
      }
    });


}

function activateStrangerThings(where) {

  return new PortfolioItemContent(where)
    .vimeo("522909563","app/assets/previews/strangerThings.jpeg")
    .div("<div style='text-align:right'><div style='margin-top:2em' class='callDown'>WATCH THE RE-CREATION</div></div>")
    .div("<div style='text-align:right'><iframe src='app/strangerThings.html' style='border:none; width:960px; height:540px' border='0' /> </div>")
    .div("<div class='explanation-div'><h1>(MIS) USING A POWERFUL LIBRARY</h1><p>d3.js gets its name from the phrase &quot;<u><em>d</em></u>ata <u><em>d</em></u>riven <u><em>d</em></u>ocuments&quot;. Usually, the 'data' there refers to some set of numbers that go into an interactive chart or table.</p><p>But it doesn't <em>have to</em>. At its heart, d3 is a powerful library for transforming <em>any</em> data into <em>any</em> representation: developers can create pretty much any arbitrary rules, as long as browsers will support them.<p>Which means that I could use d3 to create&mdash;or in this case, <em>re-</em>create&mdash;some fairly complex visual and animation effects. In this demo, the data primarily controls the timing, appearance, and nature of animations.</p></div>")


}

function loadedStrangerThings(parent) {
  parent.contentPane.activeItem.hero
    .load();
}

HeroPlayer.prototype.addIframeHolder = function() {
  const hero = this;

  return hero.videoDiv
    .append("div")
    .attr("data-role","vimeoIframe")
    .style("background-size","cover")
    .style("width","100%")
    .style("height","100%")
    .style("top",0)
    .style("left",0)
    .style("position","absolute");
}

HeroPlayer.prototype.addMessageDiv = function() {
  const hero = this;

  return hero.playerOverlay
    .append("img")
    .style("left",0)
    .style("top",0)
    .style("width","100%")
    .style("height","100%");
}

HeroPlayer.prototype.addPlayerOverlay = function() {
  const hero = this;

  return hero.videoDiv
    .append("div")
    .classed("video-overlay",true)
    .style("pointer-events","none");
}

HeroPlayer.prototype.addVideoDiv = function(where) {
  const hero = this;
  return where
    .append("div")
    .classed("content-video-container",true);
}

HeroPlayer.prototype.addVideoLoad = function(previewSource) {
  const hero = this;
  return hero.videoDiv
    .append("img")
    .classed("video-overlay-image",true)
    .style("pointer-events","none")
    .attr("src",previewSource);

}

HeroPlayer.prototype.beep = function() {
  const hero = this;

  cycle();

  function cycle() {
    // hero.playerOverlay
    //   .style("transform","scale(1)")
    //   .transition()
    //   .duration(375)
    //   .style("transform","scale(1.025)")
    //   .transition()
    //   .duration(250)
    //   .style("transform","scale(1)")
    //   .transition()
    //   .duration(375)
    //   .style("transform","scale(1.025)")
    //   .transition()
    //   .duration(250)
    //   .style("transform","scale(1)")
    //   .transition()
    //   .duration(750)
    //   .on("end",cycle);
  }
  return hero;
}

HeroPlayer.prototype.load = function(loadedCallback) {
  const hero = this;

  const url = "https://player.vimeo.com/video/"+hero.vimeoId+"?color=000000&title=0&byline=0&portrait=0&playsinline=0"

  const iframe = hero.iframeHolder
    .append("iframe")
    .attr("src",url)
    .attr("allow","autoplay; fullscreen; picture-in-picture")
    .attr("allowfullscreen","true")
    .attr("autoplay",true)
    .style("background-size","cover")
    .style("width","100%")
    .style("height","100%")
    .style("top",0)
    .style("left",0)
    .style("position","absolute");

  const playerInstance = new Vimeo.Player(iframe.node());

  playerInstance.on("play", () => {

    hero.playerOverlay
      .transition()
      .duration(250)
      .style("top","100%");

    hero.videoLoad
      .style("display","none");

    player
      .setCurrentTime(0);

    hero.videoLoad
      .style("display","none");

  });

  iframe.on("load",() => {
    if(loadedCallback) {
      loadedCallback();
    }
  });

  hero.beep();

  return hero;
}

HeroPlayer.prototype.play = function() {
  const hero = this;

  

  return hero;
}

HeroPlayer.prototype.pop = function() {
  const hero = this;

  return hero;
}

Portfolio.prototype.manifest = [
  // {
  //   "title":["FOREST FIRE","MODELS"],
  //   "video":"assets/clips/forestFire.mp4",
  //   "subtitle":"A video about agent-based models",
  //   "circa":"Early 2021"
  // },
  // {
  //   "title":["ABOUT","ME"],
  //   "subtitle":"bio",
  //   // "circa":"Early 2021"
  // },
  // {
  //   "title":["DATA-DRIVEN","VIDEO"],
  //   "video":"assets/clips/videoDataViz.mp4",
  //   "screenshot":"assets/clips/videoDataViz.png",
  //   "subtitle":"Data binding with Python and Blender",
  //   "circa":"April 2021",
  //   "route":"data-driven-video"
  // },
  // {
  //   "title":["MLB FREE AGENT","EXPLORER"],
  //   "video":"app/assets/clips/freeAgents.mp4",
  //   "screenshot":"app/assets/clips/freeAgents.png",
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

Portfolio.prototype.addContentPane = function() {
  const portfolio = this;
  return new ContentPane(portfolio);
}

Portfolio.prototype.addDetailsBox = function() {
  const portfolio = this;
  return new DetailsBox(portfolio);
}

Portfolio.prototype.addItems = function() {
  const portfolio = this;
  let items = [];
  portfolio.manifest
    .forEach((item) => {
      items.push(new PortfolioItem(portfolio,item));
    });
  return items;
}

Portfolio.prototype.addItemsDiv = function() {
  const portfolio = this;
  return d3.select("#body-content")
    .append("div")
    .attr("id","portfolio-items");
}

Portfolio.prototype.activate = function(selectedItem,instantaneous) {
  const portfolio = this;

  portfolio.isActive = true;
  portfolio
    .updateMetadata(selectedItem.manifest);

  const yTop = selectedItem.textDiv.node().getBoundingClientRect().y;
  const navbarHeight = d3.select("#navbar").node().getBoundingClientRect().height;

  const yPosition = -yTop + navbarHeight + 15;
  portfolio.itemsDiv
    .transition()
    .duration(() => { if(instantaneous === true) { return 0 } return 200})
    .style("transform","translate(0,"+yPosition+"px)");

  d3.select("body")
    .style("overflow","hidden");

  const titleSize = d3.select("#title")
    .node()
    .getBoundingClientRect()
    .width + 50;

  d3.select("#back-button")
    .transition()
    .duration(() => { if(instantaneous === true) { return 0 } return 250})
    .style("left","0vw");

  d3.select("#back-button-span")
    .transition()
    .duration(() => { if(instantaneous === true) { return 0 } return 300})
    .style("padding-left",titleSize + "px");

  portfolio.items
    .forEach((item) => {
      if(item === selectedItem) {

        portfolio.detailsBox
          .transitionIn(item,instantaneous);

        portfolio.contentPane
          .transitionIn(item,instantaneous);

        item
          .activate(instantaneous);



        return
      }

      item
        .hide();
    });

  return portfolio;
}

Portfolio.prototype.deactivate = function() {
  const portfolio = this;

  portfolio.isActive = false;
  portfolio
    .resetMetadata();

  d3.select("#back-button")
    .transition()
    .duration(250)
    .style("left","-100vw")


  const baseUrl =  window.location.href;
  window.location.href = baseUrl.split("#")[0] + "#"

  portfolio.detailsBox.transitionOut();
  portfolio.contentPane.transitionOut();

  portfolio.items.forEach((item) => {
    item.title
      .style("background-color","black");
    item.show();
  });

  portfolio.itemsDiv
    .transition()
    .duration(200)
    .style("transform","translate(0,0px)")
    .on("end",() => {
      d3.select("body")
        .style("overflow","auto");
    });


  return portfolio;
}

Portfolio.prototype.focusOnItem = function(whichItem) {
  const portfolio = this;
  portfolio.items
    .forEach((item) => {
      if(item === whichItem) {
        item
          .drawAttention();
      } else {
        item
          .reduceFocus();
      }
    })
}

Portfolio.prototype.registerHashChange = function() {
  const portfolio = this;

  window.onhashchange = () => {
    const location = window.location.href.split("#");
    if(location.length == 1 || location[1] == "") {
      portfolio.deactivate();
    }
  }

  return portfolio;
}

Portfolio.prototype.registerNavigation = function() {
  const portfolio = this;

  d3.select("#back-button")
    .on("click",() => {
      portfolio
        .deactivate();
    });

  d3.select("#title")
    .on("click",() => {
      if(portfolio.isActive === true) {
        portfolio
          .deactivate();
      }
    });

  return portfolio;
}

Portfolio.prototype.registerRouter = function() {
  const portfolio = this;

  const route = window.location.href.split("#")[1];
  if(route) {
    const matchingRoute = portfolio.items.filter((item) => { return item.manifest.route == route});
    if(matchingRoute.length == 1) {
      portfolio
        .activate(matchingRoute[0],true);
    }
  }

  return portfolio;
}

Portfolio.prototype.reset = function() {
  const portfolio = this;

  portfolio.items
    .forEach((item) => {
      item
        .reset();
    });

  return portfolio;
}

Portfolio.prototype.resetMetadata = function() {
  const portfolio = this;

  portfolio
    .updateMetadata({
      "titleTag":"Tim Marco",
      "metaDescription":"Portfolio of Tim Marco, a Creative Technologist from Chicago, Illinois"
    });

  return portfolio;
}

Portfolio.prototype.updateMetadata = function(manifest) {
  const portfolio = this;

  portfolio.titleTag
    .html(manifest.titleTag);

  portfolio.metaDescription
    .attr("content",manifest.metaDescription);

  return portfolio;
}

PortfolioItemContent.prototype.SketchbookItem = function(manifest) {
  const content = this;

  const itemContainer = content.descriptionDiv
    .append("div")
    .classed("sketchbook-item",true);

  if(manifest.type === "video") {

    const url = "https://player.vimeo.com/video/"+manifest.id+"?color=000000&title=0&byline=0&portrait=0"

    const videoContainer = itemContainer
      .append("div")
      .style("width","640px")
      .style("height","360px");

    const iframe = videoContainer
      .append("iframe")
      .attr("src",url)
      .attr("allow","autoplay; fullscreen; picture-in-picture")
      .attr("allowfullscreen","true")
      .attr("autoplay",true)
      .style("width","640px")
      .style("height","360px");

    const itemText = itemContainer
      .append("div")
      .style("margin-left","2em")
      .style("margin-right","2em")
      .style("height","360px")
      .style("overflow-y","scroll");

    itemText
      .append("h2")
      .html(manifest.title)

    itemText
      .append("div")
      .classed("sketchbook-item-text",true)
      .html(manifest.notes);
  }

  if(manifest.type === "interactive") {

    const svgDiv = itemContainer
      .append("div")
      .style("width","640px")
      .style("height","360px");

    new manifest
      .callback(svgDiv);

    const itemText = itemContainer
      .append("div")
      .style("margin-left","2em")
      .style("margin-right","2em")
      .style("height","360px")
      .style("overflow-y","scroll");

    itemText
      .append("h2")
      .html(manifest.title)

    itemText
      .append("div")
      .classed("sketchbook-item-text",true)
      .html(manifest.notes);

  }

  return content;
}

PortfolioItemContent.prototype.callDown = function(string) {
  const content = this;

  content.descriptionDiv
    .append("div")
    .append("div")
    .classed("callDown",true)
    .html(string);

  return content;
}

PortfolioItemContent.prototype.callUp = function(string) {
  const content = this;

  content.descriptionDiv
    .append("div")
    .append("div")
    .classed("callUp",true)
    .html(string);

  return content;
}

PortfolioItemContent.prototype.div = function(html) {
  const content = this;

  content.descriptionDiv
    .append("div")
    .html(html);

  return content;
}

PortfolioItemContent.prototype.h1 = function(string) {
  const content = this;

  content.descriptionDiv
    .append("h1")
    .html(string);

  return content;
}

PortfolioItemContent.prototype.p = function(string) {
  const content = this;
  content.descriptionDiv
    .append("p")
    .html(string);

  return content;
}

PortfolioItemContent.prototype.vimeo = function(vimeoId,previewSource) {
  const content = this;

  content.hero = new HeroPlayer(content.videoDiv,vimeoId,previewSource);

  return content;
}

PortfolioItemContent.prototype.addContainerDiv = function() {
  const content = this;
  return content.where
    .append("div")
    .classed("content-main-container",true)
}

PortfolioItemContent.prototype.addDescriptionDiv = function() {
  const content = this;
  return content.containerDiv
    .append("div")
    .classed("content-description-container",true);
}

PortfolioItemContent.prototype.addVideoDiv = function() {
  const content = this;
  return content.containerDiv
    .append("div");
}

PortfolioItem.prototype.activate = function() {
  const item = this;

  item.state = "active";

  if(item.parent.isMobile == false) {
    item.hero
      .node()
      .pause();
  }


  return item;
}

PortfolioItem.prototype.drawAttention = function() {
  const item = this;

  if(item.parent.isMobile == false) {
    item.hero
      .node()
      .muted = true;

    item.hero
      .node()
      .play();
  }

  item.title
    .style("background-color",d3.schemeCategory10[2]);

  item.textLayer
    .style("transform","scale(1)")
    .transition()
    .ease(d3.easeQuadOut)
    .duration(250)
    .style("transform","scale(1.05)");

  return item;
}

PortfolioItem.prototype.getActiveHeight = function() {
  const item = this;
  return item.textDiv.node().getBoundingClientRect().height * 1.2;
}

PortfolioItem.prototype.hide = function() {
  const item = this;

  item.containerDiv
    .transition()
    .duration(250)
    .style("opacity",0)

  return item;
}

PortfolioItem.prototype.reduceFocus = function() {
  const item = this;
  item.containerDiv
    // .style("filter",0.75);

  item.title
    .style("background-color","black");



}

PortfolioItem.prototype.reset = function() {
  const item = this;

  item.hero.node().pause();

  item.title
    .style("background-color","black");


  item.textLayer
    .transition()
    .ease(d3.easeQuadIn)
    .duration(125)
    .style("transform","scale(1)");

  return item;
}

PortfolioItem.prototype.show = function() {
  const item = this;

  item.state = "inactive";

  item.containerDiv
    .transition()
    .duration(250)
    .style("opacity",1);

  return item;

}

PortfolioItem.prototype.addContainerDiv = function() {
  const item = this;
  return item.parent.itemsDiv
    .append("div")
    .classed("portfolio-item",true)
    .on("mouseover",() => {
      if(item.state === "active") { return }
      item
        .drawAttention()
    })
    .on("mouseout",() => {
      if(item.state === "active") { return }
      item
        .reset();
    })
    .on("click",() => {
      if(item.state === "active") { return }
      item.parent
        .activate(item);
    })
}

PortfolioItem.prototype.addHero = function() {
  const item = this;

  if(item.parent.isMobile == true) {
    return item.heroOffset
      .append("img")
      .attr("width","100%")
      .attr("height",'100%')
      .style("object-fit","contain")
      .style("margin",0)
      .style("padding",0);
  }

  return item.heroOffset
    .append("video")
    .attr("muted","muted")
    .attr("playsinline",true)
    .style("position","absolute")
    .style("object-fit","cover")
    .style("object-position","center center")
    .style("margin",0)
    .style("padding",0)
    .style("width","100%")
    .style("height","100%")
    .attr("loop",true);
}

PortfolioItem.prototype.addHeroOffset = function() {
  const item = this;

  return item.substrate
    .append("div")
    .style("position","relative")
    .style("width","100%")
    .style("min-height","12.5vw")
    .style("height","100%");

}

PortfolioItem.prototype.addHeroSource = function() {
  const item = this;
  if(!item.manifest.video) { return }

  if(item.parent.isMobile == true) {
    item.hero
      .attr("src",item.manifest.screenshot);
  }

  return item.hero
    .append("source")
    .attr("src",item.manifest.video);
}

PortfolioItem.prototype.addTextDiv = function() {
  const item = this;
  return item.textLayer
    .append("div")
    .classed("portfolio-item-text",true);
}

PortfolioItem.prototype.addSubstrate = function() {
  const item = this;
  return item.containerDiv
    .append("div")
    .classed("portfolio-item-substrate",true);
}

PortfolioItem.prototype.addTextLayer = function() {
  const item = this;
  return item.containerDiv
    .append("div")
    .classed("portfolio-item-text-layer",true);
}

PortfolioItem.prototype.addTitle = function() {
  const item = this;
  return item.textDiv
    .selectAll(".portfolio-item-title")
    .data(item.manifest.title)
    .enter()
    .append("div")
    .classed("portfolio-item-line",true)
    .append("div")
    .classed("portfolio-item-title",true)
    .style("transform",(datum,index) => {
      if(index > 0) {
        return "translate(0,-0.25em)"
      }
    })
    .html((datum) => { return datum});
}

function ArcCountdown(where) {
  const countdown = this;
  init(where);
  return countdown;

  function init(where) {
    countdown.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(countdown.runCountdown())
      .UnhighlightEventIs(countdown.pauseCountdown());


    countdown.maxValue = 100;
    countdown.fullDuration = 2000;
    countdown.easeType = d3.easeQuadOut;
    countdown.arcCentralRadius = 115;
    countdown.arcRadiusWidth = 30;
    countdown.backgroundColor = d3.schemeCategory10[0];
    countdown.foregroundColor = d3.schemeCategory10[1];
    countdown.frameColor = "#444";
    countdown.textOutlineWidth = 5;

    countdown.arcGenerator = countdown.defineArcGenerator();
    countdown.arcScales = countdown.defineArcScales();
    countdown.background = countdown.addBackground();
    countdown.group = countdown.addGroup();
    countdown.arcGroup = countdown.addArcGroup();
    countdown.textOutline = countdown.addTextOutline();
    countdown.text = countdown.addText();
    countdown.arcOutline = countdown.addArcOutline();
    countdown.arc = countdown.addArc();

    countdown.hotspot = countdown.addHotspot();

    countdown.initialize();
  }
}

function DragSnap(where) {
  const snap = this;
  init(where);
  return snap;

  function init(where) {
    snap.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(() => {
        if(snap.isDragging == true ) { return }
        if(snap.isDone == true) { return }
        snap.dragMe.transition().duration(250).attr("opacity",1);
      });

    snap.isDragging = false;
    snap.canDrop = false;

    snap.activeColor = d3.schemeCategory10[0];
    snap.antColor= d3.schemeCategory10[1];
    snap.connectingColor = "#fafafa";
    snap.backgroundColor = "#eee";
    snap.falseTargetColor = "#999";

    snap.background = snap.addBackground();
    snap.connectingLine = snap.addConnectingLine();
    snap.antsMarching = snap.addAntsMarching();
    snap.source = snap.addSource();
    snap.destination = snap.addDestination();
    snap.falseTargets = snap.addFalseTargets();
    snap.dragMe = snap.addDragMe();

  }
}

function BlurAttentionSketch(where) {
  const blur = this;
  init(where);
  return blur;

  function init(where) {

    blur.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(blur.highlight())
      .UnhighlightEventIs(blur.unhighlight())
      .ClickEventIs(blur.click());

    blur.backgroundRect = blur.addBackgroundRect();
    blur.defs = blur.addDefs();
    blur.filter = blur.addFilter();
    blur.gaussian = blur.addGaussian();
    blur.grid = blur.addGrid();
    blur.buttonGroup = blur.addButtonGroup();
    blur.buttons = blur.addButtons();

  }
}

function RandomWalk(where) {
  const randomWalk = this;
  init(where);
  return randomWalk;

  function init(where) {
    randomWalk.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(randomWalk.highlight())
      .UnhighlightEventIs(randomWalk.unhighlight());

    randomWalk.hasStarted = false;
    randomWalk.isActive = false;
    randomWalk.history = [0];
    randomWalk.steps = 0;
    randomWalk.minValue = -10;
    randomWalk.maxValue = 10;
    randomWalk.binnedValues = randomWalk.defineBinnedValues();
    randomWalk.isWalking = false;
    randomWalk.background = randomWalk.addBackground();
    randomWalk.walkScales = randomWalk.defineWalkScales();
    randomWalk.xAxisGroup = randomWalk.addXAxisGroup();
    randomWalk.xAxis = randomWalk.addXAxis();
    randomWalk.lineGroup = randomWalk.addLineGroup();
    randomWalk.line = randomWalk.addLine();
    randomWalk.xAxisGroup.selectAll("text").remove();
    randomWalk.histogram = randomWalk.addHistogram();


  }
}

function RadarSketch(where) {
  const radar = this;
  init(where);
  return radar;

  function init(where) {
    radar.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(radar.highlight())
      .UnhighlightEventIs(radar.unhighlight());

    radar.backgroundRectElement = radar.addBackground();

    radar.green = "#00ff00";
    radar.scanLineColor = "#eeffee"
    radar.wedgeSize = -45;

    radar.defs = radar.addDefs();
    radar.wedgeGradient = radar.addWedgeGradient();

    radar.translateGroup = radar.addTranslateGroup();
    radar.rotateGroup = radar.addRotateGroup();
    radar.group = radar.addGroup();
    radar.bogeyGroup = radar.addBogeyGroup();

    radar.reticle = radar.addReticle();
    radar.rangeCircles = radar.addRangeCircles();
    radar.polarLines = radar.addPolarLines();
    radar.scanWedge = radar.addScanWedge();
    radar.scanLine = radar.addScanLine();
    radar.bogeys = radar.addBogeys();
    radar.hotspot = radar.addHotspot();


  }

}

function Sketch(where) {
  const sketch = this;
  init(where);
  return sketch;

  function init(where) {
    sketch.where = where;

    sketch.mouseoverCallback = () => {};
    sketch.mouseoutCallback = () => {};
    sketch.clickCallback = () => {};

    sketch.div = sketch.addDiv();
    sketch.image = sketch.addImage();
  }
}

function RadialGroup(where) {
  const radial = this;
  init(where);
  return radial;

  function init(where) {

    radial.radius = 100;
    radial.outerRadius = 150;
    radial.state = "inactive";

    radial.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(radial.growPreview())
      .UnhighlightEventIs(radial.reset());


    radial.defs = radial.addDefs();
    radial.gradient = radial.addGradient();
    radial.background = radial.addBackground();
    radial.group = radial.addGroup();
    radial.wedges = radial.addWedges();
    radial.circle = radial.addCircle();
    radial.hotspot = radial.addHotspot();

  }
}

function IosAudioSlider(where) {
  const slider = this;
  init(where);
  return slider;

  function init() {
    slider.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(slider.runAnimation());

    slider.buttonPressColor = d3.schemeCategory10[3];
    slider.trackColor = "rgb(96,76,76)";
    slider.valueColor = "#eee";

    slider.background = slider.addBackground();
    
    slider.screenBackground = slider.addScreenBackground();

    slider.sliderGroup = slider.addSliderGroup();
    slider.verticalOffset = slider.addVerticalOffset();
    slider.sliderScale = slider.addSliderScale();
    slider.verticalScale = slider.addSliderVerticalScale();
    slider.horizontalScale = slider.addSliderHorizontalScale();
    slider.track = slider.addTrack();
    slider.value = slider.addValue();
    slider.screenClip = slider.addScreenClip();

    slider.volumeUpButton = slider.addVolumeUpButton();
    slider.volumeDownButton = slider.addVolumeDownButton();
    slider.phone = slider.addPhone();


  }
}

function SnellsLaw(where) {
  const snells = this;
  init(where);
  return snells;

  function init(where) {
    snells.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(snells.highlight())
      .UnhighlightEventIs(snells.unhighlight());

    snells.firstIndexOfRefraction = 1;
    snells.secondIndexOfRefraction = 1.5;

    snells.background = snells.addBackground();
    snells.water = snells.addWater();
    snells.arcGenerator = snells.defineArcGenerator();

    snells.normal = snells.addNormal();
    snells.source = snells.addSource();
    snells.incidentRay = snells.addIncidentRay();
    snells.incidentArc = snells.addIncidentArc();
    snells.refractedArc = snells.addRefractedArc();
    snells.refractedRay = snells.addRefractedRay();
    snells.refractedImage = snells.addRefractedImage();

    snells.hotspot = snells.addHotspot();

    snells
      .updateForMouseCoordinates({"x":50,"y":40});


  }
}

ArcCountdown.prototype.addArc = function() {
  const countdown = this;
  return countdown.arcGroup
    .append("path")
    .attr("fill",countdown.foregroundColor)
    .attr("stroke","none");
}

ArcCountdown.prototype.addArcGroup = function() {
  const countdown = this;
  return countdown.group
    .append("g")
    .attr("transform","rotate(-90)");
}

ArcCountdown.prototype.addArcOutline = function() {
  const countdown = this;
  return countdown.arcGroup
    .append("path")
    .attr("fill","none")
    .attr("stroke",countdown.frameColor)
    .attr("stroke-width",2);

}

ArcCountdown.prototype.addBackground = function() {
  const countdown = this;
  return countdown.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill",countdown.backgroundColor);
}

ArcCountdown.prototype.addGroup = function() {
  const countdown = this;
  return countdown.sketch.svg
    .append("g")
    .attr("transform","translate(320,225)");
}

ArcCountdown.prototype.addHotspot = function() {
  const countdown = this;
  return countdown.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","rgba(0,0,0,0)");
}

ArcCountdown.prototype.addText = function() {
  const countdown = this;
  return countdown.group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","72pt")
    .attr("font-family","Oswald")
    .attr("font-weight","bold")
    .attr("fill",countdown.foregroundColor)
    .attr("y",25)
    .html("0");
}

ArcCountdown.prototype.addTextOutline = function() {
  const countdown = this;

  return countdown.group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","72pt")
    .attr("font-family","Oswald")
    .attr("font-weight","bold")
    .attr("stroke",countdown.frameColor)
    .attr("stroke-width",countdown.textOutlineWidth)
    .attr("y",25)
    .html("0");

}

ArcCountdown.prototype.defineArcGenerator = function() {
  const countdown = this;
  
  return d3.arc()
    .innerRadius(countdown.arcCentralRadius - countdown.arcRadiusWidth)
    .outerRadius(countdown.arcCentralRadius + countdown.arcRadiusWidth);
}

ArcCountdown.prototype.defineArcScales = function() {
  const countdown = this;

  return {
    "innerRadius":d3.scaleLinear()
      .domain([0,1])
      .range([countdown.arcCentralRadius - countdown.arcRadiusWidth,countdown.arcCentralRadius]),
    "outerRadius":d3.scaleLinear()
      .domain([0,1])
      .range([countdown.arcCentralRadius+ countdown.arcRadiusWidth,countdown.arcCentralRadius])
    }

}

ArcCountdown.prototype.initialize = function() {
  const countdown = this;

  countdown.arcGenerator
    .startAngle(0)
    .endAngle(Math.PI);


  [countdown.arc,countdown.arcOutline]
    .forEach((arc) => {
      arc
        .attr("d",
          countdown.arcGenerator
            .innerRadius(countdown.arcScales.innerRadius(0))
            .outerRadius(countdown.arcScales.outerRadius(0))
        );
    });

  [countdown.textOutline,countdown.text]
    .forEach((textElement) => {
      textElement
        .html(countdown.maxValue);
    });
}

ArcCountdown.prototype.pauseCountdown = function() {
  const countdown = this;

  return () => {
    [countdown.arc,countdown.text,countdown.textOutline]
      .forEach((element) => {
        element
          .interrupt();
      });

    countdown
      .initialize();
  }
}

ArcCountdown.prototype.runCountdown = function() {
  const countdown = this;

  return () => {

    const startValue = +countdown.text.html();

    [countdown.text,countdown.textOutline]
      .forEach((element) => {
        element
          .transition()
          .duration(countdown.fullDuration)
          .ease(countdown.easeType)
          .textTween(numberTween())
      });

    countdown.arc
      .transition()
      .duration(countdown.fullDuration)
      .ease(countdown.easeType)
      .attrTween("d",arcTween(0));

    function numberTween() {
      return function() {
        const interpolate = d3.interpolate(countdown.maxValue,0)
        return function(time) {
          return Math.floor(interpolate(time));
        }
      }
    }


    function arcTween(newAngle) {
      return function() {
        const interpolateValue = d3.interpolate(Math.PI,newAngle);
        return function(time) {
          return countdown.arcGenerator
            .innerRadius(countdown.arcScales.innerRadius(time))
            .outerRadius(countdown.arcScales.outerRadius(time))
            .endAngle(interpolateValue(time))();
        }
      }
    }

  }
}

DragSnap.prototype.addAntsMarching = function() {
  const snap = this;
  return snap.sketch.svg
    .append("line")
    .attr("stroke",snap.antColor)
    .attr("stroke-dasharray","10,10");
}

DragSnap.prototype.addBackground = function() {
  const snap = this;
  return snap.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill",snap.backgroundColor);
}

DragSnap.prototype.addConnectingLine = function() {
  const snap = this;
  return snap.sketch.svg
    .append("line")
    .attr("stroke",snap.connectingColor);
}

DragSnap.prototype.addDestination = function() {
  const snap = this;
  return snap.sketch.svg
    .append("circle")
    .attr("cx",500)
    .attr("cy",300)
    .attr("r",50)
    .attr("fill",snap.backgroundColor)
    .attr("stroke-width",10)
    .attr("stroke-dasharray","20,20")
    .attr("stroke",snap.activeColor)
    .on("mouseover",() => {
      if(snap.isDragging == false) { return }
      snap.canDrop = true;
      snap.destination
        .attr("stroke-dasharray","0")
        .transition()
        .duration(250)
        .attr("fill",snap.activeColor);
    })
    .on("mouseout",() => {
      if(snap.isDragging == false) { return }
      snap.canDrop = false;
      snap.destination
        .attr("stroke-dasharray","20,20")
        .attr("fill",snap.backgroundColor)
    })
}

DragSnap.prototype.addDragMe = function() {
  const snap = this;

  const group = snap.sketch.svg
    .append("g")
    .attr("transform","translate(200,125)")
    .attr("opacity",0);

  group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","18pt")
    .attr("font-family","Oswald")
    .attr("font-weight",600)
    .attr("stroke",snap.connectingColor)
    .attr("stroke-width",4)
    .html("&larr; Drag!");

  group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","18pt")
    .attr("font-family","Oswald")
    .attr("fill",snap.activeColor)
    .attr("font-weight",600)
    .attr("stroke","none")
    .html("&larr; Drag!");

  return group;
}

DragSnap.prototype.addFalseTargets = function() {
  const snap = this;

  const first = snap.sketch.svg
    .append("circle")
    .attr("cx",500)
    .attr("cy",125)
    .attr("data-x",400)
    .attr("r",50)
    .attr("fill",snap.backgroundColor)
    .attr("stroke",snap.falseTargetColor)
    .attr("stroke-width",10)
    .attr("stroke-dasharray","20,20");

  const second = snap.sketch.svg
    .append("circle")
    .attr("cx",100)
    .attr("cy",300)
    .attr("data-x",100)
    .attr("r",50)
    .attr("fill",snap.backgroundColor)
    .attr("stroke",snap.falseTargetColor)
    .attr("stroke-width",10)
    .attr("stroke-dasharray","20,20");

  first
    .on("mouseover",() => {
      if(snap.isDragging == false) { return };
      const startX = 400;
      const endX = startX + 20;
      const backX = startX - 40;
      first
        .transition()
        .duration(150)
        .attr("cx",endX)
        .transition()
        .duration(225)
        .attr("cx",backX)
        .transition()
        .duration(100)
        .attr("cx",startX)
    });


    second
      .on("mouseover",() => {
        if(snap.isDragging == false) { return };
        const startX = 400;
        const endX = startX + 20;
        const backX = startX - 40;
        second
          .transition()
          .duration(150)
          .attr("cy",endX)
          .transition()
          .duration(225)
          .attr("cy",backX)
          .transition()
          .duration(100)
          .attr("cy",startX)
      });

}

DragSnap.prototype.addSource = function() {
  const snap = this;
  return snap.sketch.svg
    .append("circle")
    .attr("cx",100)
    .attr("cy",125)
    .attr("r",50)
    .attr("fill",snap.activeColor)
    .attr("stroke",snap.connectingColor)
    .attr("stroke-width",5)
    .on("mouseover",() => {
      if(snap.isDragging) { return }
      snap.source
        .transition()
        .duration(350)
        .ease(d3.easeBackOut.overshoot(100))
        .attr("r",50.1)
    })
    .on("mouseout",() => {
      if(snap.isDragging) { return }
      snap.source
        .attr("r",50);
    })
    .call(
      d3.drag()
        .on("start",snap.dragStart())
        .on("drag",snap.dragging())
        .on("end",snap.dragEnd())
    );
}

BlurAttentionSketch.prototype.click = function() {
  const blurAttention = this;
  return () => {
  }
}

BlurAttentionSketch.prototype.drawAttention = function(button) {
  const blur = this;

  blur.buttons
    .forEach((iteratedButton) => {
      blur.gaussian
        .transition()
        .duration(250)
        .ease(d3.easeLinear)
        .attr("stdDeviation",5);

      if(button == iteratedButton) {
        iteratedButton
          .bringForward();
      } else {
        iteratedButton
          .sendBack();
      }
    });

}

BlurAttentionSketch.prototype.highlight = function() {
  const blur = this;
  return () => {
  }
}

BlurAttentionSketch.prototype.reset = function() {
  const blur = this;

  blur.buttons
    .forEach((button) => {
      button
        .reset();

      blur.gaussian
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("stdDeviation",0);
    });
}

BlurAttentionSketch.prototype.unhighlight = function() {
  const blur = this;
  return () => {
  }
}

BlurAttentionSketch.prototype.addBackgroundRect = function() {
  const blur = this;
  return blur.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","#ccc");
}

BlurAttentionSketch.prototype.addButtonGroup = function() {
  const blur = this;
  return blur.sketch.svg
    .append("g")
    .attr("transform","translate(115,90)");
}

BlurAttentionSketch.prototype.addButtons = function() {
  const blur = this;

  const forwardDuration = 150;
  const backwardDuration = 200;

  return [
    new BlurButton().move(0,0).fill(d3.schemeCategory10[0]).label("A"),
    new BlurButton().move(200,0).fill(d3.schemeCategory10[1]).label("B"),
    new BlurButton().move(400,0).fill(d3.schemeCategory10[2]).label("C"),
    new BlurButton().move(0,175).fill(d3.schemeCategory10[3]).label("D"),
    new BlurButton().move(200,175).fill(d3.schemeCategory10[4]).label("E"),
    new BlurButton().move(400,175).fill(d3.schemeCategory10[5]).label("F")
  ];

  function BlurButton() {
    const button = this;
    init(button);
    return button;

    function init() {
      button.translate = blur.buttonGroup
        .append("g")
        .on("mouseover",() => {
          blur
            .drawAttention(button);
        })
        .on("mouseout",() => {
          blur
            .reset();
        })

      button.scale = button.translate
        .append("g")
        .attr("transform","scale(1)");

      button.filtered = button.scale
        .append("g");

      button.rect = button.filtered
        .append("rect")
        .attr("x",-75)
        .attr("y",-75)
        .attr("width",150)
        .attr("height",150)
        .attr("rx",25)
        .attr("ry",25);

      button.textOutline = button.filtered
        .append("text")
        .attr("fill","none")
        .attr("stroke","#222")
        .attr("stroke-width",7)
        .attr("font-weight","bold")
        .attr("font-size","48pt")
        .attr("font-family","Oswald")
        .attr("dominant-baseline","middle")
        .attr("text-anchor","middle")
        .attr("y",5)
        .attr("cursor","default");

      button.text = button.filtered
        .append("text")
        .attr("fill","white")
        .attr("font-weight","bold")
        .attr("font-size","48pt")
        .attr("font-family","Oswald")
        .attr("dominant-baseline","middle")
        .attr("text-anchor","middle")
        .attr("y",5)
        .attr("cursor","default");


      button.move = function(x,y) {
        button.translate
          .attr("transform","translate("+x+","+y+")");
        return button;
      }

      button.label = function(string) {
        button.text.html(string);
        button.textOutline.html(string);
        return button;
      }

      button.fill = function(color) {
        button.rect
          .attr("fill",color);
        return button;
      }

      button.bringForward = function() {
        button.scale
          .transition()
          .duration(forwardDuration)
          .attr("transform","scale(1.15)");

        button.text
          .transition()
          .duration(forwardDuration + 75)
          .attr("transform","scale(1.75)");

        button.textOutline
          .transition()
          .duration(forwardDuration + 75)
          .attr("transform","scale(1.75)");


        button.filtered
          .attr("filter","none")

        return button;
      }

      button.sendBack = function() {
        button.scale
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(0.75)");

        button.filtered
          .attr("filter","url(#blur)");

        return button;
      }

      button.reset = function() {
        button.scale
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(1)");

        button.text
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(1)");

        button.textOutline
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(1)");

        button.filtered
          .attr("filter","none");

        return button;
      }
    }
  }

}

BlurAttentionSketch.prototype.addDefs = function() {
  const blur = this;
  return blur.sketch.svg
    .append("defs");
}

BlurAttentionSketch.prototype.addFilter = function() {
  const blur = this;
  return blur.defs
    .append("filter")
    .attr("id","blur");
}

BlurAttentionSketch.prototype.addGaussian = function() {
  const blur = this;
  return blur.filter
    .append("feGaussianBlur")
    .attr("in","sourceGraphic")
    .attr("stdDeviation",0);
}

BlurAttentionSketch.prototype.addGrid = function() {
  const blur = this;

  const group = blur.sketch.svg
    .append("g")
    .attr("filter","url(#blur)");

  group
    .selectAll(".xLine")
    .data(d3.range(1,20))
    .enter()
    .append("line")
    .attr("x1",0)
    .attr("x2",640)
    .attr("y1",(datum) => { return datum * 50})
    .attr("y2",(datum) => { return datum * 50})
    .attr("stroke","#333")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","10,5");

  group
    .selectAll(".yLine")
    .data(d3.range(1,20))
    .enter()
    .append("line")
    .attr("x1",(datum) => { return datum * 50})
    .attr("x2",(datum) => { return datum * 50})
    .attr("y1",0)
    .attr("y2",640)
    .attr("stroke","#333")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","10,5");


  return group;
}

RandomWalk.prototype.addHistogram = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("path")
    .attr("fill",d3.schemeCategory10[3])
    .attr("stroke","black")
    .attr("stroke-width",2);
}

RandomWalk.prototype.defineBinnedValues = function() {
  const randomWalk = this;
  const binnedValues = {};
  d3.range(-10,11)
    .forEach((value) => {
      binnedValues[value] = 0;
    });
  return binnedValues;
}

RandomWalk.prototype.defineWalkScales = function() {
  const randomwWalk = this;
  const scales = {};

  scales.x = d3.scaleLinear()
    .domain([0,100])
    .range([25,500]);

  scales.histogram = d3.scaleLinear()
    .domain([0,1])
    .range([515,550]);

  scales.y = d3.scaleLinear()
    .domain([-10,10])
    .range([335,25]);

  return scales;
}

RandomWalk.prototype.addBackground = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("rect")
    .attr("fill","#eee")
    .attr("width",640)
    .attr("height",360);
}

RandomWalk.prototype.addLine = function() {
  const randomWalk = this;
  return randomWalk.lineGroup
    .append("path")
    .attr("stroke",d3.schemeCategory10[0])
    .attr("fill","none")
    .attr("stroke-width",3);
}

RandomWalk.prototype.addLineGroup = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("g");
}

RandomWalk.prototype.addXAxis = function() {
  const randomWalk = this;
  const axis = d3.axisBottom(randomWalk.walkScales.x);
  randomWalk.xAxisGroup
    .call(axis);
  return axis;
}

RandomWalk.prototype.addXAxisGroup = function() {
  const randomWalk = this;
  return randomWalk.sketch.svg
    .append("g")
    .attr("transform","translate(0,180)");
}

RandomWalk.prototype.highlight = function() {
  const randomWalk = this;
  return () => {
    randomWalk.isActive = true;
    randomWalk
      .seedWalk();
    return randomWalk;
  }
}

RandomWalk.prototype.seedWalk = function() {
  const randomWalk = this;

  if(!randomWalk.isActive) { return }
  const value = Math.random();
  const stepChange = value < 0.5 ? 1 : - 1;
  const newValue = randomWalk.history[randomWalk.history.length - 1] + stepChange;

  randomWalk.steps += 1;

  if(newValue < randomWalk.minValue) {
    randomWalk.minValue = newValue
  }

  if(newValue > randomWalk.maxValue) {
    randomWalk.maxValue = newValue;
  }

  const bound = d3.max([Math.abs(randomWalk.minValue),Math.abs(randomWalk.maxValue)]);

  if(2 * bound + 1 != Object.keys(randomWalk.binnedValues).length) {
    randomWalk.binnedValues[bound] = 0;
    randomWalk.binnedValues[-bound] = 0;
  }

  randomWalk.binnedValues[newValue] += 1;

  randomWalk.walkScales.histogram
    .domain([0,d3.max(Object.values(randomWalk.binnedValues))]);

  const histogramGenerator = d3.area()
    .x0((datum) => {
      return randomWalk.walkScales.histogram(0)
    })
    .x1((datum) => { return randomWalk.walkScales.histogram(randomWalk.binnedValues[datum]) })
    .y((datum,index) => { return randomWalk.walkScales.y(datum) });

  randomWalk.histogram
    .attr("d",histogramGenerator(Object.keys(randomWalk.binnedValues).sort((a,b) => { return b-a})));

  randomWalk.walkScales.y
    .domain([-bound,bound]);


  if(randomWalk.history.length == 100) {
    randomWalk.history
      .shift();
  }

  randomWalk.history
    .push(newValue);

  const lineGenerator = d3.line()
    .x((datum,index) => { return randomWalk.walkScales.x(index)})
    .y((datum) => { return randomWalk.walkScales.y(datum)});


  randomWalk.line
    .attr("d",lineGenerator(randomWalk.history.slice(0,randomWalk.history.length - 1)))
    .transition()
    .duration(10)
    .attr("d",lineGenerator(randomWalk.history))
    .on("end",() => {
      randomWalk.seedWalk();
    });


}

RandomWalk.prototype.unhighlight = function() {
  const randomWalk = this;
  return () => {
    randomWalk.isActive = false;
    return randomWalk;
  }
}

RadarSketch.prototype.click = function() {
  const radar = this;
  return () => {
  }
}

RadarSketch.prototype.highlight = function() {
  const radar = this;
  return () => {
    radar
      .singleSweep();
  }
}

RadarSketch.prototype.singleSweep = function() {
  const radar = this;

  radar.rotateGroup
    .attr("transform","rotate(0)")
    .transition()
    .duration(2000)
    .ease(d3.easeLinear)
    .attr("transform","rotate(180)")
    .transition()
    .duration(2000)
    .ease(d3.easeLinear)
    .attr("transform","rotate(359.999)")
    .ease(d3.easeLinear)
    .on("end",() => { radar.singleSweep(); });

  radar.bogeyGroup
    .selectAll("circle")
    .each(function(coordinates) {
      const bogey = d3.select(this);
      const xCoordinate = bogey.attr("cx");
      const yCoordinate = bogey.attr("cy");
      let delay = ((coordinates.theta) / (Math.PI * 2) + 0.25) * 4000;
      if(delay > 4000) {
        delay -= 4000;
      }

      bogey
        .transition()
        .delay(delay)
        .duration(0)
        .attr("r",7)
        .attr("fill-opacity",1)
        .transition()
        .ease(d3.easeQuadIn)
        .duration(2000)
        .attr("fill-opacity",0)
        .attr("r",2)
    });

}

RadarSketch.prototype.unhighlight = function() {
  const radar = this;
  return () => {
    radar.rotateGroup
      .interrupt();

    radar.bogeyGroup
      .selectAll("circle")
      .remove();

    radar.rotateGroup
      .attr("transform","rotate(0)");

    radar.bogeys = radar.addBogeys();
  }
}

RadarSketch.prototype.addBackground = function() {
  const radar = this;
  return radar.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","black");
}

RadarSketch.prototype.addBogeyGroup = function() {
  const radar = this;
  return radar.sketch.svg
    .append("g")
    .attr("transform","translate(300,180)");
}

RadarSketch.prototype.addBogeys = function() {
  const radar = this;
  const bogeyCount = 10;

  const bogeyPolarCoordinates = [];
  d3.range(0,bogeyCount)
    .forEach((index) => {
      bogeyPolarCoordinates
        .push({
          "theta":d3.randomUniform(0,2*Math.PI)(),
          "distance":d3.randomUniform(35,150)()
        });
    });

  return radar.bogeyGroup
    .selectAll("circle")
    .data(bogeyPolarCoordinates)
    .enter()
    .append("circle")
    .attr("r",5)
    .attr("fill",radar.green)
    .attr("stroke","none")
    .attr("cx",(coordinates) => { return Math.cos(coordinates.theta) * coordinates.distance})
    .attr("cy",(coordinates) => { return Math.sin(coordinates.theta) * coordinates.distance})
    .attr("fill-opacity",0);
}

RadarSketch.prototype.addDefs = function() {
  const radar = this;
  return radar.sketch.svg
    .append("defs");
}

RadarSketch.prototype.addGroup = function() {
  const radar = this;
  return radar.rotateGroup
    .append("g");
}

RadarSketch.prototype.addHotspot = function() {
  const radar = this;
  radar.sketch.svg
    .append("rect")
    .attr("width",500)
    .attr("height",500)
    .attr("fill","rgba(0,0,0,0)");
}

RadarSketch.prototype.addPolarLines = function() {
  const radar = this;
  const lineData = d3.range(0,Math.PI * 2,Math.PI / 4);
  return radar.bogeyGroup
    .selectAll(".polarLine")
    .data(lineData)
    .enter()
    .append("line")
    .attr("x1",0)
    .attr("x2",(theta) => { return Math.cos(theta) * 150})
    .attr("y1",0)
    .attr("y2",(theta) => { return Math.sin(theta) * 150 })
    .attr("stroke",radar.green)
    .attr("stroke-width",1)
    .attr("stroke-dasharray","5,5")
}

RadarSketch.prototype.addRangeCircles = function() {
  const radar = this;
  const circleDistances = [50,100,150];
  return radar.group
    .selectAll(".rangeCircle")
    .data(circleDistances)
    .enter()
    .append("circle")
    .attr("fill","none")
    .attr("stroke",radar.green)
    .attr("stroke-width",1)
    .attr("r",(datum) =>{ return datum});

}

RadarSketch.prototype.addReticle = function() {
  const radar = this;
  return radar.group
    .append("circle")
    .attr("fill",radar.green)
    .attr("r",5);
}

RadarSketch.prototype.addRotateGroup = function() {
  const radar = this;
  return radar.translateGroup
    .append("g");
}

RadarSketch.prototype.addScanWedge = function() {
  const radar = this;

  const arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(150)
    .startAngle(0)
    .endAngle(radar.wedgeSize * Math.PI / 180);

  return radar.group
    .append("path")
    .attr("fill","url(#wedgeGradient)")
    .attr("stroke","none")
    .attr("d",arcGenerator);
}

RadarSketch.prototype.addScanLine = function() {
  const radar = this;
  return radar.group
    .append("line")
    .attr("x1",0)
    .attr("x2",0)
    .attr("y1",0)
    .attr("y2",-150)
    .attr("stroke-width",3)
    .attr("stroke",radar.scanLineColor);
}

RadarSketch.prototype.addTranslateGroup = function() {
  const radar = this;
  return radar.sketch.svg
    .append("g")
    .attr("transform","translate(300,180)");
}

RadarSketch.prototype.addWedgeGradient = function() {
  const radar = this;
  const gradient = radar.defs
    .append("linearGradient")
    .attr("id","wedgeGradient")
    .attr("x1","0%")
    .attr("x2","100%")
    .attr("y1","0%")
    .attr("y2","0%")
    .attr("gradientTransform","rotate("+radar.wedgeSize+")")

  gradient
    .append("stop")
    .attr("offset","0%")
    .style("stop-color",radar.green)
    .style("stop-opacity",0)

  gradient
    .append("stop")
    .attr("offset","100%")
    .style("stop-color",radar.green)
    .style("stop-opacity",1);

}

Sketch.prototype.addDiv = function() {
  const sketch = this;
  return sketch.where
    .append("div")
    .classed("singleSketchDiv",true)
    .on("mouseover",sketch.highlight())
    .on("mouseout",sketch.unhighlight())
    .on("click",sketch.click())
}

Sketch.prototype.addImage = function() {
  const sketch = this;
  return sketch.div
    .append("img")
    .classed("sketchImage",true);
}

RadialGroup.prototype.addBackground = function() {
  const radial = this;
  return radial.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","url(#background)");

}

RadialGroup.prototype.addCircle = function() {
  const radial = this;
  return radial.group
    .append("circle")
    .attr("r",radial.radius)
    .attr("fill",d3.schemeCategory10[9])
}

RadialGroup.prototype.addDefs = function() {
  const radial = this;
  return radial.sketch.svg
    .append("defs");
}

RadialGroup.prototype.addGradient = function() {
  const radial = this;
  const gradient = radial.defs
    .append("radialGradient")
    .attr("id","background");

  gradient
    .append("stop")
    .attr("stop-color",d3.schemeCategory10[0])
    .attr("offset","30%");

  gradient
    .append("stop")
    .attr("stop-color","rgba(31, 119, 180,0.75)")
    .attr("offset","100%");

  return gradient;
}

RadialGroup.prototype.addGroup = function() {
  const radial = this;
  return radial.sketch.svg
    .append("g")
    .attr("transform","translate(320,180)");
}

RadialGroup.prototype.addHotspot = function() {
  const radial = this;
  return radial.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","rgba(0,0,0,0)")
    .on("mousemove",radial.backgroundMouseMove());
}

RadialGroup.prototype.addWedges = function() {
  const radial = this;

  return radial.group
    .selectAll("path")
    .data(d3.range(0,10))
    .enter()
    .append("path")
    .attr("fill",d3.schemeCategory10[6])
    .attr("stroke",d3.schemeCategory10[0])
    .attr("stroke-width",2)
    .attr("d",(index) => {
      const startAngle = index * Math.PI / 5;
      const endAngle = startAngle + Math.PI / 5;
      return d3.arc()
        .innerRadius(radial.radius - 2)
        .outerRadius(radial.radius-1)
        .startAngle(startAngle)
        .endAngle(endAngle)()
    });
}

RadialGroup.prototype.backgroundMouseMove = function() {
  const radial = this;
  return () => {
    if(radial.state !== "active") { return }
    const cursorPosition = {"x":event.offsetX - 250,"y":event.offsetY - 250};
    const wedgeCentroids = [];


    radial.wedges
      .each(function(index) {
        const wedgePosition = d3.select(this)
          .node()
          .getBBox();

        const centroid = {
          "x":wedgePosition.x + wedgePosition.width / 2,
          "y":wedgePosition.y + wedgePosition.height / 2,
        }

        centroid.distance = Math.pow(
          Math.pow(centroid.x - cursorPosition.x,2) +
          Math.pow(cursorPosition.y - centroid.y,2),
          0.5
        );

        centroid.index = index;

        wedgeCentroids
          .push(centroid)
      });


    wedgeCentroids.sort((a,b) => { return a.distance - b.distance });

    const distances = d3.extent(wedgeCentroids.map((wedge) => { return wedge.distance; }));
    const opacityScale = d3.scaleLinear()
      .domain(distances)
      .range([1,0]);

    const outerRadiusScale = d3.scaleLinear()
      .domain(distances)
      .range([radial.outerRadius + 10,radial.radius]);

    radial.wedges
      .attr("opacity",(index) => {
        const distance = wedgeCentroids.filter((wedge) => { return wedge.index == index; })[0].distance;
        return opacityScale(distance);
      })
      .attr("d",(index) => {
        const distance = wedgeCentroids.filter((wedge) => { return wedge.index == index; })[0].distance;
        const startAngle = index * Math.PI / 5;
        const endAngle = startAngle + Math.PI / 5;
        return d3.arc()
          .innerRadius(radial.radius)
          .outerRadius(outerRadiusScale(distance))
          .startAngle(startAngle)
          .endAngle(endAngle)();
      })
  }
}

RadialGroup.prototype.growPreview = function() {
  const radial = this;
  return () => {
    if(radial.state !== "inactive") { return }
    radial.state = "activating";

    radial.wedges
      .transition()
      .duration(500)
      .delay((index) => { return 50 * index})
      .ease(d3.easeBackOut.overshoot(10))
      .attr("d",(index) => {
        const startAngle = index * Math.PI / 5;
        const endAngle = startAngle + Math.PI / 5;
        return d3.arc()
          .innerRadius(radial.radius)
          .outerRadius(radial.outerRadius)
          .startAngle(startAngle)
          .endAngle(endAngle)();
      })
      .on("end",(index) => {
        if(index == 9) {
          radial.state = "active";
        }
      });
  }
}

RadialGroup.prototype.reset = function() {
  const radial = this;
  return () => {
    if(radial.state !== "active") { return }
    radial.state = "transitionOut";

    radial.wedges
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",() => {
        radial.state = "active";
      });
  }
}

IosAudioSlider.prototype.addBackground = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill",d3.schemeCategory10[6]);
}

IosAudioSlider.prototype.addPhone = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("x",50)
    .attr("y",-50)
    .attr("width",500)
    .attr("height",600)
    .attr("stroke-width",25)
    .attr("fill","none")
    .attr("stroke","black");
}

IosAudioSlider.prototype.addScreenBackground = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("x",50)
    .attr("width",500)
    .attr("height",500)
    .attr("fill","#ccc")
}

IosAudioSlider.prototype.addScreenClip = function() {
  const slider = this;

  return slider.sketch.svg
    .append("rect")
    .attr("x",0)
    .attr("width",50)
    .attr("height",500)
    .attr("fill","white");
}

IosAudioSlider.prototype.addSliderGroup = function() {
  const slider = this;
  return slider.sketch.svg
    .append("g")
    .attr("transform","translate(-10,0)")
    .attr("clip-path","url(#screenClip)");
}

IosAudioSlider.prototype.addSliderHorizontalScale = function() {
  const slider = this;
  return slider.verticalScale
    .append("g")
    .attr("transform","scale(1,1)");

}

IosAudioSlider.prototype.addSliderScale = function() {
  const slider = this;
  return slider.verticalOffset
    .append("g")
    .attr("transform","scale(1)");
}

IosAudioSlider.prototype.addSliderVerticalScale = function() {
  const slider = this;
  return slider.sliderScale
    .append("g")
    .attr("transform","scale(1,1)");

}

IosAudioSlider.prototype.addTrack = function() {
  const slider = this;
  return slider.horizontalScale
    .append("rect")
    .attr("width",65)
    .attr("height",210)
    .attr("rx",20)
    .attr("ry",25)
    .attr("y",-210/2)
    .attr("x",-32.5)
    .attr("fill",slider.trackColor);
}

IosAudioSlider.prototype.addValue = function() {
  const slider = this;
  return slider.horizontalScale
    .append("rect")
    .attr("width",65)
    .attr("height",210)
    .attr("rx",20)
    .attr("ry",25)
    .attr("y",-210/2)
    .attr("x",-32.5)
    .attr("fill",slider.valueColor);

}

IosAudioSlider.prototype.addVerticalOffset = function() {
  const slider = this;
  return slider.sliderGroup
    .append("g")
    .attr("transform","translate(0,200)");
}

IosAudioSlider.prototype.addVolumeDownButton = function() {
  const slider = this;

  return slider.sketch.svg
    .append("rect")
    .attr("x",27)
    .attr("y",210)
    .attr("width",30)
    .attr("height",100)
    .attr("rx",10)
    .attr("ry",10)
    .attr("fill","black");

}

IosAudioSlider.prototype.addVolumeUpButton = function() {
  const slider = this;
  return slider.sketch.svg
    .append("rect")
    .attr("x",27)
    .attr("y",100)
    .attr("width",30)
    .attr("height",100)
    .attr("rx",10)
    .attr("ry",10)
    .attr("fill","black");

}

IosAudioSlider.prototype.lowerVolume = function(startTime) {
  const slider = this;

  slider.value
    .transition()
    .duration(2000)
    .attr("height",0)
    .attr("y",105);

  return slider;
}

IosAudioSlider.prototype.pressVolumeDown = function(atTime) {
  const slider = this;

  slider.volumeDownButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill",slider.buttonPressColor)
    .attr("x",32);

  return slider;
}

IosAudioSlider.prototype.pressVolumeUp = function(atTime) {
  const slider = this;

  slider.volumeUpButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill",slider.buttonPressColor)
    .attr("x",32);

  return slider;
}

IosAudioSlider.prototype.raiseVolumeUp = function(atTime) {
  const slider = this;

  slider.value
    .transition()
    .delay(atTime)
    .duration(2000)
    .attr("height",210)
    .attr("y",-105);


  return slider;
}

IosAudioSlider.prototype.releaseVolumeDown = function(atTime) {
  const slider = this;

  slider.volumeDownButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill","black")
    .attr("x",27);

  return slider;
}

IosAudioSlider.prototype.releaseVolumeUp = function(atTime) {
  const slider = this;

  slider.volumeUpButton
    .transition()
    .duration(250)
    .delay(atTime)
    .attr("fill","black")
    .attr("x",27);


  return slider;
}

IosAudioSlider.prototype.runAnimation = function() {
  const slider = this;

  return () => {
    if(slider.isRunning == true) { return }
    slider.isRunning = true;
    const cues = {};
    cues.pressVolumeDown = 0;

    slider
      .pressVolumeDown(0)
      .transitionIndicatorIn(0)
      .squeezeIndicatorStart(500)
      .lowerVolume(425)
      .squeezeStretchIndicator(1200)
      .releaseVolumeDown(2000)
      .unsqueezeUnstretchIndicator(2000)
      .pressVolumeUp(2325)
      .raiseVolumeUp(2325)
      .squeezeStretchIndicator(3600)
      .releaseVolumeUp(4350)
      .unsqueezeUnstretchIndicator(4350)
      .transitionIndicatorOut(4750);
  }


  return slider;
}

IosAudioSlider.prototype.squeezeIndicatorStart = function(startTime) {
  const slider = this;

  slider.horizontalScale
    .transition()
    .duration(500)
    .delay(startTime)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(0.2,1)");

  return slider;
}

IosAudioSlider.prototype.squeezeStretchIndicator = function(atTime) {
  const slider = this;

  slider.horizontalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(0.1,1)");

  slider.verticalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(1,1.15)");

  return slider;
}

IosAudioSlider.prototype.transitionIndicatorIn = function(atTime) {
  const slider = this;

  slider.sliderGroup
    .attr("transform","translate(-10,0)")
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadIn)
    .attr("transform","translate(100,0)");

  slider.sliderScale
    .attr("transform","scale(0.8)")
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadIn)
    .attr("transform","scale(1)");

  slider.verticalScale
    .attr("transform","scale(1,0.25)")
    .transition()
    .delay(atTime)
    .ease(d3.easeQuadOut)
    .duration(375)
    .attr("transform","scale(1,1)");

  slider.horizontalScale
    .attr("transform","scale(1,1)");

  return slider;
}

IosAudioSlider.prototype.transitionIndicatorOut = function(atTime) {
  const slider = this;

  slider.sliderGroup
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadOut)
    .attr("transform","translate(-10,0)")

  slider.sliderScale
    .transition()
    .delay(atTime)
    .duration(375)
    .ease(d3.easeQuadOut)
    .attr("transform","scale(0.8)")

  slider.verticalScale
    .transition()
    .delay(atTime)
    .ease(d3.easeQuadOut)
    .duration(375)
    .attr("transform","scale(1,0.25)")
    .on("end",() => {
      slider.isRunning = false;
    })

  return slider;
}

IosAudioSlider.prototype.unsqueezeUnstretchIndicator = function(atTime) {
  const slider = this;

  slider.horizontalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadOut)
    .attr("transform","scale(0.2,1)");

  slider.verticalScale
    .transition()
    .delay(atTime)
    .duration(350)
    .ease(d3.easeQuadOut)
    .attr("transform","scale(1,1)");


  return slider;
}

SnellsLaw.prototype.highlight = function() {
  const snells = this;

  return () => {
    snells.source
      .transition()
      .duration(1000)
      .ease(d3.easeBackOut.overshoot(6))
      .attr("r",8);

    const incidentLength = snells.incidentRay
      .node()
      .getTotalLength();

    snells.incidentRay
      .attr("stroke-dashoffset",incidentLength)
      .transition()
      .duration(50000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset",0);

    const refractedLength = snells.refractedRay
      .node()
      .getTotalLength();

    snells.refractedRay
      .attr("stroke-dashoffset",refractedLength)
      .transition()
      .duration(50000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset",0);

  }
}

SnellsLaw.prototype.mouseMove = function() {
  const snells = this;

  return () => {
    const coordinates = {
      "x":event.offsetX,
      "y":event.offsetY
    };

    snells
      .updateForMouseCoordinates(coordinates);

  }
}

SnellsLaw.prototype.unhighlight = function() {
  const snells = this;
  return () => {
    snells.source
      .transition()
      .duration(250)
      .attr("r",0);

    snells.incidentRay
      .interrupt();

    snells.refractedRay
      .interrupt();
  }
}

SnellsLaw.prototype.updateForMouseCoordinates = function(coordinates) {
  const snells = this;

  if(coordinates.y >= 250) { return }

  const distance = Math.pow(Math.pow(coordinates.x - 250,2) + Math.pow(coordinates.y - 250,2),0.05);

  let incidentStart,
    incidentEnd;

  incidentEnd =  Math.atan2(coordinates.y - 250,coordinates.x - 250) + Math.PI / 2;
  incidentStart = 0;


  snells.source
    .attr("cx",coordinates.x)
    .attr("cy",coordinates.y);

  snells.incidentRay
    .attr("x1",Math.cos(incidentEnd - Math.PI / 2) * 5000 + 250)
    .attr("y1",Math.sin(incidentEnd - Math.PI / 2) * 5000 + 250);

  snells.incidentArc
    .attr("d",snells.arcGenerator.endAngle(incidentEnd).startAngle(incidentStart));

  const indexRatio = snells.firstIndexOfRefraction / snells.secondIndexOfRefraction;
  const sinOfSecond = indexRatio * Math.sin(incidentEnd);
  const refractionTheta = Math.asin(sinOfSecond);

  snells.refractedArc
    .attr("d",snells.arcGenerator.startAngle(refractionTheta + Math.PI / 2).endAngle(Math.PI / 2));

  snells.refractedRay
    .attr("x2",5000 * Math.cos(refractionTheta + Math.PI / 2) + 250)
    .attr("y2",5000 * Math.sin(refractionTheta + Math.PI / 2) + 250);

  return snells;
}

SnellsLaw.prototype.addBackground = function() {
  const snells = this;
  return snells.sketch.svg
    .append("rect")
    .attr("fill","#eee")
    .attr("width",640)
    .attr("height",360);
}

SnellsLaw.prototype.addHotspot = function() {
  const snells = this;

  return snells.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","rgba(0,0,0,0)")
    .on("mousemove",snells.mouseMove());
}

SnellsLaw.prototype.addIncidentArc = function() {
  const snells = this;

  const group = snells.sketch.svg
    .append("g")
    .attr("transform","translate(250,250)");

  return group
    .append("path")
    .attr("stroke",d3.schemeCategory10[3])
    .attr("fill","none")
    .attr("stroke-width",5)
    .attr("d",snells.arcGenerator.startAngle(-Math.PI / 2).endAngle(0));
}

SnellsLaw.prototype.addIncidentRay = function() {
  const snells = this;
  return snells.sketch.svg
    .append("line")
    .attr("x1",40)
    .attr("y1",50)
    .attr("x2",250)
    .attr("y2",250)
    .attr("stroke",d3.schemeCategory10[3])
    .attr("stroke-width",5)
    .attr("stroke-dasharray","15,15");
}

SnellsLaw.prototype.addNormal = function() {
  const snells = this;
  return snells.sketch.svg
    .append("line")
    .attr("x1",250)
    .attr("x2",250)
    .attr("y1",0)
    .attr("y2",500)
    .attr("stroke","#999")
    .attr("stroke-width",2)
    .attr("stroke-dasharray","10,10");
}

SnellsLaw.prototype.addRefractedArc = function() {
  const snells = this;

  const group = snells.sketch.svg
    .append("g")
    .attr("transform","translate(250,250) rotate(90)");

  return group
    .append("path")
    .attr("stroke",d3.schemeCategory10[1])
    .attr("fill","none")
    .attr("stroke-width",5)
    .attr("d",snells.arcGenerator.startAngle(Math.PI / 4).endAngle(Math.PI / 2));

}

SnellsLaw.prototype.addRefractedImage = function() {
  const snells = this;
  return snells.sketch.svg
    .append("circle")
    .attr("r",10)
    .attr("fill",d3.schemeCategory10[5])
    .attr("cx",40)
    .attr("cy",50)
    .attr("r",0);
}

SnellsLaw.prototype.addRefractedRay = function() {
  const snells = this;
  return snells.sketch.svg
    .append("line")
    .attr("x1",250)
    .attr("x2",460)
    .attr("y1",250)
    .attr("y2",450)
    .attr("stroke",d3.schemeCategory10[1])
    .attr("stroke-width",5)
    .attr("stroke-dasharray","15,15");
}

SnellsLaw.prototype.addSource = function() {
  const snells = this;
  return snells.sketch.svg
    .append("circle")
    .attr("r",10)
    .attr("fill",d3.schemeCategory10[3])
    .attr("cx",40)
    .attr("cy",50)
    .attr("r",0);
}

SnellsLaw.prototype.addWater = function() {
  const snells = this;
  return snells.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("x",-5)
    .attr("y",250)
    .attr("fill",d3.schemeCategory10[0])
    .attr("stroke",d3.schemeCategory10[5])
    .attr("stroke-width",3)
    .attr("stroke-dasharray","5,20");
}

SnellsLaw.prototype.defineArcGenerator = function() {
  const snells = this;
  return d3.arc()
    .innerRadius(72.5)
    .outerRadius(75);
}

DragSnap.prototype.dragEnd = function() {
  const snap = this;
  return () => {
    snap.isDragging = false;

    const coordinates = {"x":event.offsetX,"y":event.offsetY};

    const distance = Math.pow(
      Math.pow(coordinates.x - 100,2) +
      Math.pow(coordinates.y - 125,2),
      0.5
    );

    if(!snap.canDrop) {
      snap.connectingLine
        .transition()
        .duration(distance)
        .ease(d3.easePolyOut)
        .attr("x2",100)
        .attr("y2",125);

      snap.antsMarching
        .transition()
        .duration(distance)
        .ease(d3.easePolyOut)
        .attr("x2",100)
        .attr("y2",125);


      snap.destination
        .attr("r",50);

    } else {
      snap.isDone = true;

      snap.destination
        .transition()
        .duration(250)
        .attr("stroke",snap.connectingColor)
        .attr("fill",snap.activeColor)
        .attr("stroke-width",5);

      loopAnts();

      function loopAnts() {
        const antsLength = snap.antsMarching
          .node()
          .getTotalLength();

        snap.antsMarching
          .attr("stroke-dashoffset",antsLength / 2)
          .transition()
          .ease(d3.easeLinear)
          .duration(5000)
          .attr("stroke-dashoffset",0)
          .on("end",loopAnts)
      }
    }

  }
}

DragSnap.prototype.dragStart = function() {
  const snap = this;
  return () => {
    snap.isDragging = true;

    snap.destination
      .transition()
      .duration(350)
      .ease(d3.easeBackOut.overshoot(50))
      .attr("r",51);

    snap.connectingLine
      .attr("x1",100)
      .attr("y1",125)
      .attr("x2",100)
      .attr("y2",125);

    snap.antsMarching
      .attr("x1",100)
      .attr("y1",125)
      .attr("x2",100)
      .attr("y2",125);

    snap.dragMe
      .transition()
      .duration(250)
      .attr("opacity",0)

  }
}

DragSnap.prototype.dragging = function() {
  const snap = this;
  return () => {
    const coordinates = {"x":event.offsetX,"y":event.offsetY};

    const distance = Math.pow(
      Math.pow(coordinates.x - 100,2) +
      Math.pow(coordinates.y - 125,2),
      0.5
    );

    const strokeDistanceScale = d3.scaleLinear()
      .domain([0,500])
      .range([30,1]);

    snap.connectingLine
      .attr("x2",coordinates.x)
      .attr("y2",coordinates.y)
      .attr("stroke-width",strokeDistanceScale(distance));

    snap.antsMarching
      .attr("x2",coordinates.x)
      .attr("y2",coordinates.y)
      .attr("stroke-width",strokeDistanceScale(distance) / 2);


  }
}

Sketch.prototype.ClickEventIs = function(callback) {
  const sketch = this;
  sketch.clickCallback = callback;
  return sketch;
}

Sketch.prototype.HighlightEventIs = function(callback) {
  const sketch = this;
  sketch.mouseoverCallback = callback;
  return sketch;
}

Sketch.prototype.UnhighlightEventIs = function(callback) {
  const sketch = this;
  sketch.mouseoutCallback = callback;
  return sketch;
}

Sketch.prototype.click = function() {
  const sketch = this;
  return () => {
    sketch
      .clickCallback();
  }
}

Sketch.prototype.highlight = function() {
  const sketch = this;
  return () => {
    sketch
      .mouseoverCallback();
  }
}

Sketch.prototype.unhighlight = function() {
  const sketch = this;
  return () => {
    sketch
      .mouseoutCallback();
  }
}

Sketch.prototype.AddSvg = function() {
  const sketch = this;
  sketch.svg = sketch.div
    .append("svg")
    .classed("svgSketch",true)
    .attr("width",640)
    .attr("height",360)
    .style("user-select","none");

  return sketch;
}

// https://d3js.org v6.5.0 Copyright 2021 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).d3=t.d3||{})}(this,(function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){let e=t,r=t;function i(t,n,e,i){for(null==e&&(e=0),null==i&&(i=t.length);e<i;){const o=e+i>>>1;r(t[o],n)<0?e=o+1:i=o}return e}return 1===t.length&&(e=(n,e)=>t(n)-e,r=function(t){return(e,r)=>n(t(e),r)}(t)),{left:i,center:function(t,n,r,o){null==r&&(r=0),null==o&&(o=t.length);const a=i(t,n,r,o-1);return a>r&&e(t[a-1],n)>-e(t[a],n)?a-1:a},right:function(t,n,e,i){for(null==e&&(e=0),null==i&&(i=t.length);e<i;){const o=e+i>>>1;r(t[o],n)>0?i=o:e=o+1}return e}}}function r(t){return null===t?NaN:+t}const i=e(n),o=i.right,a=i.left,u=e(r).center;function c(t,n){let e=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&++e;else{let r=-1;for(let i of t)null!=(i=n(i,++r,t))&&(i=+i)>=i&&++e}return e}function f(t){return 0|t.length}function s(t){return!(t>0)}function l(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function h(t,n){let e,r=0,i=0,o=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(e=n-i,i+=e/++r,o+=e*(n-i));else{let a=-1;for(let u of t)null!=(u=n(u,++a,t))&&(u=+u)>=u&&(e=u-i,i+=e/++r,o+=e*(u-i))}if(r>1)return o/(r-1)}function d(t,n){const e=h(t,n);return e?Math.sqrt(e):e}function p(t,n){let e,r;if(void 0===n)for(const n of t)null!=n&&(void 0===e?n>=n&&(e=r=n):(e>n&&(e=n),r<n&&(r=n)));else{let i=-1;for(let o of t)null!=(o=n(o,++i,t))&&(void 0===e?o>=o&&(e=r=o):(e>o&&(e=o),r<o&&(r=o)))}return[e,r]}class g{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let e=0;for(let r=0;r<this._n&&r<32;r++){const i=n[r],o=t+i,a=Math.abs(t)<Math.abs(i)?t-(o-i):i-(o-t);a&&(n[e++]=a),t=o}return n[e]=t,this._n=e+1,this}valueOf(){const t=this._partials;let n,e,r,i=this._n,o=0;if(i>0){for(o=t[--i];i>0&&(n=o,e=t[--i],o=n+e,r=e-(o-n),!r););i>0&&(r<0&&t[i-1]<0||r>0&&t[i-1]>0)&&(e=2*r,n=o+e,e==n-o&&(o=n))}return o}}class y extends Map{constructor(t=[],n=x){super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}});for(const[n,e]of t)this.set(n,e)}get(t){return super.get(_(this,t))}has(t){return super.has(_(this,t))}set(t,n){return super.set(b(this,t),n)}delete(t){return super.delete(m(this,t))}}class v extends Set{constructor(t=[],n=x){super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}});for(const n of t)this.add(n)}has(t){return super.has(_(this,t))}add(t){return super.add(b(this,t))}delete(t){return super.delete(m(this,t))}}function _({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):e}function b({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):(t.set(r,e),e)}function m({_intern:t,_key:n},e){const r=n(e);return t.has(r)&&(e=t.get(e),t.delete(r)),e}function x(t){return null!==t&&"object"==typeof t?t.valueOf():t}function w(t){return t}function M(t,...n){return S(t,w,w,n)}function A(t,n,...e){return S(t,w,n,e)}function T(t){if(1!==t.length)throw new Error("duplicate key");return t[0]}function S(t,n,e,r){return function t(i,o){if(o>=r.length)return e(i);const a=new y,u=r[o++];let c=-1;for(const t of i){const n=u(t,++c,i),e=a.get(n);e?e.push(t):a.set(n,[t])}for(const[n,e]of a)a.set(n,t(e,o));return n(a)}(t,0)}function E(t,n){return Array.from(n,(n=>t[n]))}function k(t,...e){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");t=Array.from(t);let[r=n]=e;if(1===r.length||e.length>1){const i=Uint32Array.from(t,((t,n)=>n));return e.length>1?(e=e.map((n=>t.map(n))),i.sort(((t,r)=>{for(const i of e){const e=n(i[t],i[r]);if(e)return e}}))):(r=t.map(r),i.sort(((t,e)=>n(r[t],r[e])))),E(t,i)}return t.sort(r)}var N=Array.prototype.slice;function C(t){return function(){return t}}var P=Math.sqrt(50),z=Math.sqrt(10),D=Math.sqrt(2);function q(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=R(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(a=-a,t=Math.ceil(t*a),n=Math.floor(n*a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)/a;return r&&o.reverse(),o}function R(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=P?10:o>=z?5:o>=D?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=P?10:o>=z?5:o>=D?2:1)}function F(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=P?i*=10:o>=z?i*=5:o>=D&&(i*=2),n<t?-i:i}function O(t,n,e){let r;for(;;){const i=R(t,n,e);if(i===r||0===i||!isFinite(i))return[t,n];i>0?(t=Math.floor(t/i)*i,n=Math.ceil(n/i)*i):i<0&&(t=Math.ceil(t*i)/i,n=Math.floor(n*i)/i),r=i}}function U(t){return Math.ceil(Math.log(c(t))/Math.LN2)+1}function I(){var t=w,n=p,e=U;function r(r){Array.isArray(r)||(r=Array.from(r));var i,a,u=r.length,c=new Array(u);for(i=0;i<u;++i)c[i]=t(r[i],i,r);var f=n(c),s=f[0],l=f[1],h=e(c,s,l);if(!Array.isArray(h)){const t=l,e=+h;if(n===p&&([s,l]=O(s,l,e)),(h=q(s,l,e))[h.length-1]>=l)if(t>=l&&n===p){const t=R(s,l,e);isFinite(t)&&(t>0?l=(Math.floor(l/t)+1)*t:t<0&&(l=(Math.ceil(l*-t)+1)/-t))}else h.pop()}for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var g,y=new Array(d+1);for(i=0;i<=d;++i)(g=y[i]=[]).x0=i>0?h[i-1]:s,g.x1=i<d?h[i]:l;for(i=0;i<u;++i)s<=(a=c[i])&&a<=l&&y[o(h,a,0,d)].push(r[i]);return y}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:C(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:C([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?C(N.call(t)):C(t),r):e},r}function B(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let r=-1;for(let i of t)null!=(i=n(i,++r,t))&&(e<i||void 0===e&&i>=i)&&(e=i)}return e}function Y(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e>n||void 0===e&&n>=n)&&(e=n);else{let r=-1;for(let i of t)null!=(i=n(i,++r,t))&&(e>i||void 0===e&&i>=i)&&(e=i)}return e}function L(t,e,r=0,i=t.length-1,o=n){for(;i>r;){if(i-r>600){const n=i-r+1,a=e-r+1,u=Math.log(n),c=.5*Math.exp(2*u/3),f=.5*Math.sqrt(u*c*(n-c)/n)*(a-n/2<0?-1:1);L(t,e,Math.max(r,Math.floor(e-a*c/n+f)),Math.min(i,Math.floor(e+(n-a)*c/n+f)),o)}const n=t[e];let a=r,u=i;for(j(t,r,e),o(t[i],n)>0&&j(t,r,i);a<u;){for(j(t,a,u),++a,--u;o(t[a],n)<0;)++a;for(;o(t[u],n)>0;)--u}0===o(t[r],n)?j(t,r,u):(++u,j(t,u,i)),u<=e&&(r=u+1),e<=u&&(i=u-1)}return t}function j(t,n,e){const r=t[n];t[n]=t[e],t[e]=r}function H(t,n,e){if(r=(t=Float64Array.from(function*(t,n){if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(yield n);else{let e=-1;for(let r of t)null!=(r=n(r,++e,t))&&(r=+r)>=r&&(yield r)}}(t,e))).length){if((n=+n)<=0||r<2)return Y(t);if(n>=1)return B(t);var r,i=(r-1)*n,o=Math.floor(i),a=B(L(t,o).subarray(0,o+1));return a+(Y(t.subarray(o+1))-a)*(i-o)}}function X(t,n,e=r){if(i=t.length){if((n=+n)<=0||i<2)return+e(t[0],0,t);if(n>=1)return+e(t[i-1],i-1,t);var i,o=(i-1)*n,a=Math.floor(o),u=+e(t[a],a,t);return u+(+e(t[a+1],a+1,t)-u)*(o-a)}}function G(t,n){let e,r=-1,i=-1;if(void 0===n)for(const n of t)++i,null!=n&&(e<n||void 0===e&&n>=n)&&(e=n,r=i);else for(let o of t)null!=(o=n(o,++i,t))&&(e<o||void 0===e&&o>=o)&&(e=o,r=i);return r}function V(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}function $(t,n){let e,r=-1,i=-1;if(void 0===n)for(const n of t)++i,null!=n&&(e>n||void 0===e&&n>=n)&&(e=n,r=i);else for(let o of t)null!=(o=n(o,++i,t))&&(e>o||void 0===e&&o>=o)&&(e=o,r=i);return r}function W(t,n){return[t,n]}function Z(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}function K(t,e=n){if(1===e.length)return $(t,e);let r,i=-1,o=-1;for(const n of t)++o,(i<0?0===e(n,n):e(n,r)<0)&&(r=n,i=o);return i}var Q=J(Math.random);function J(t){return function(n,e=0,r=n.length){let i=r-(e=+e);for(;i;){const r=t()*i--|0,o=n[i+e];n[i+e]=n[r+e],n[r+e]=o}return n}}function tt(t){if(!(i=t.length))return[];for(var n=-1,e=Y(t,nt),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function nt(t){return t.length}function et(t){return t instanceof Set?t:new Set(t)}function rt(t,n){const e=t[Symbol.iterator](),r=new Set;for(const t of n){if(r.has(t))continue;let n,i;for(;({value:n,done:i}=e.next());){if(i)return!1;if(r.add(n),Object.is(t,n))break}}return!0}var it=Array.prototype.slice;function ot(t){return t}var at=1e-6;function ut(t){return"translate("+(t+.5)+",0)"}function ct(t){return"translate(0,"+(t+.5)+")"}function ft(t){return n=>+t(n)}function st(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function lt(){return!this.__axis}function ht(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,c=1===t||4===t?-1:1,f=4===t||2===t?"x":"y",s=1===t||3===t?ut:ct;function l(l){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):ot:i,p=Math.max(o,0)+u,g=n.range(),y=+g[0]+.5,v=+g[g.length-1]+.5,_=(n.bandwidth?st:ft)(n.copy()),b=l.selection?l.selection():l,m=b.selectAll(".domain").data([null]),x=b.selectAll(".tick").data(h,n).order(),w=x.exit(),M=x.enter().append("g").attr("class","tick"),A=x.select("line"),T=x.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(M),A=A.merge(M.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),T=T.merge(M.append("text").attr("fill","currentColor").attr(f,c*p).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),l!==b&&(m=m.transition(l),x=x.transition(l),A=A.transition(l),T=T.transition(l),w=w.transition(l).attr("opacity",at).attr("transform",(function(t){return isFinite(t=_(t))?s(t):this.getAttribute("transform")})),M.attr("opacity",at).attr("transform",(function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:_(t))}))),w.remove(),m.attr("d",4===t||2==t?a?"M"+c*a+","+y+"H0.5V"+v+"H"+c*a:"M0.5,"+y+"V"+v:a?"M"+y+","+c*a+"V0.5H"+v+"V"+c*a:"M"+y+",0.5H"+v),x.attr("opacity",1).attr("transform",(function(t){return s(_(t))})),A.attr(f+"2",c*o),T.attr(f,c*p).text(d),b.filter(lt).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),b.each((function(){this.__axis=_}))}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return e=it.call(arguments),l},l.tickArguments=function(t){return arguments.length?(e=null==t?[]:it.call(t),l):e.slice()},l.tickValues=function(t){return arguments.length?(r=null==t?null:it.call(t),l):r&&r.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=a=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(a=+t,l):a},l.tickPadding=function(t){return arguments.length?(u=+t,l):u},l}var dt={value:()=>{}};function pt(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new gt(r)}function gt(t){this._=t}function yt(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function vt(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function _t(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=dt,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}gt.prototype=pt.prototype={constructor:gt,on:function(t,n){var e,r=this._,i=yt(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=_t(r[e],t.name,n);else if(null==n)for(e in r)r[e]=_t(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=vt(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new gt(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var bt="http://www.w3.org/1999/xhtml",mt={svg:"http://www.w3.org/2000/svg",xhtml:bt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function xt(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),mt.hasOwnProperty(n)?{space:mt[n],local:t}:t}function wt(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===bt&&n.documentElement.namespaceURI===bt?n.createElement(t):n.createElementNS(e,t)}}function Mt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function At(t){var n=xt(t);return(n.local?Mt:wt)(n)}function Tt(){}function St(t){return null==t?Tt:function(){return this.querySelector(t)}}function Et(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function kt(){return[]}function Nt(t){return null==t?kt:function(){return this.querySelectorAll(t)}}function Ct(t){return function(){return this.matches(t)}}function Pt(t){return function(n){return n.matches(t)}}var zt=Array.prototype.find;function Dt(){return this.firstElementChild}var qt=Array.prototype.filter;function Rt(){return this.children}function Ft(t){return new Array(t.length)}function Ot(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function Ut(t){return function(){return t}}function It(t,n,e,r,i,o){for(var a,u=0,c=n.length,f=o.length;u<f;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new Ot(t,o[u]);for(;u<c;++u)(a=n[u])&&(i[u]=a)}function Bt(t,n,e,r,i,o,a){var u,c,f,s=new Map,l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(c=n[u])&&(d[u]=f=a.call(c,c.__data__,u,n)+"",s.has(f)?i[u]=c:s.set(f,c));for(u=0;u<h;++u)f=a.call(t,o[u],u,o)+"",(c=s.get(f))?(r[u]=c,c.__data__=o[u],s.delete(f)):e[u]=new Ot(t,o[u]);for(u=0;u<l;++u)(c=n[u])&&s.get(d[u])===c&&(i[u]=c)}function Yt(t){return t.__data__}function Lt(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function jt(t){return function(){this.removeAttribute(t)}}function Ht(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Xt(t,n){return function(){this.setAttribute(t,n)}}function Gt(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function Vt(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function $t(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Wt(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Zt(t){return function(){this.style.removeProperty(t)}}function Kt(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Qt(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Jt(t,n){return t.style.getPropertyValue(n)||Wt(t).getComputedStyle(t,null).getPropertyValue(n)}function tn(t){return function(){delete this[t]}}function nn(t,n){return function(){this[t]=n}}function en(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function rn(t){return t.trim().split(/^|\s+/)}function on(t){return t.classList||new an(t)}function an(t){this._node=t,this._names=rn(t.getAttribute("class")||"")}function un(t,n){for(var e=on(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function cn(t,n){for(var e=on(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function fn(t){return function(){un(this,t)}}function sn(t){return function(){cn(this,t)}}function ln(t,n){return function(){(n.apply(this,arguments)?un:cn)(this,t)}}function hn(){this.textContent=""}function dn(t){return function(){this.textContent=t}}function pn(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function gn(){this.innerHTML=""}function yn(t){return function(){this.innerHTML=t}}function vn(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function _n(){this.nextSibling&&this.parentNode.appendChild(this)}function bn(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function mn(){return null}function xn(){var t=this.parentNode;t&&t.removeChild(this)}function wn(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Mn(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function An(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function Tn(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function Sn(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function En(t,n,e){var r=Wt(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function kn(t,n){return function(){return En(this,t,n)}}function Nn(t,n){return function(){return En(this,t,n.apply(this,arguments))}}Ot.prototype={constructor:Ot,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},an.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Cn=[null];function Pn(t,n){this._groups=t,this._parents=n}function zn(){return new Pn([[document.documentElement]],Cn)}function Dn(t){return"string"==typeof t?new Pn([[document.querySelector(t)]],[document.documentElement]):new Pn([[t]],Cn)}Pn.prototype=zn.prototype={constructor:Pn,select:function(t){"function"!=typeof t&&(t=St(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],c=u.length,f=r[i]=new Array(c),s=0;s<c;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),f[s]=a);return new Pn(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);return null==n?[]:Et(n)}}(t):Nt(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],c=u.length,f=0;f<c;++f)(a=u[f])&&(r.push(t.call(a,a.__data__,f,u)),i.push(a));return new Pn(r,i)},selectChild:function(t){return this.select(null==t?Dt:function(t){return function(){return zt.call(this.children,t)}}("function"==typeof t?t:Pt(t)))},selectChildren:function(t){return this.selectAll(null==t?Rt:function(t){return function(){return qt.call(this.children,t)}}("function"==typeof t?t:Pt(t)))},filter:function(t){"function"!=typeof t&&(t=Ct(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Pn(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,Yt);var e=n?Bt:It,r=this._parents,i=this._groups;"function"!=typeof t&&(t=Ut(t));for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),f=0;f<o;++f){var s=r[f],l=i[f],h=l.length,d=Et(t.call(s,s&&s.__data__,f,r)),p=d.length,g=u[f]=new Array(p),y=a[f]=new Array(p),v=c[f]=new Array(h);e(s,l,g,y,v,d,n);for(var _,b,m=0,x=0;m<p;++m)if(_=g[m]){for(m>=x&&(x=m+1);!(b=y[x])&&++x<p;);_._next=b||null}}return(a=new Pn(a,r))._enter=u,a._exit=c,a},enter:function(){return new Pn(this._enter||this._groups.map(Ft),this._parents)},exit:function(){return new Pn(this._exit||this._groups.map(Ft),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof Pn))throw new Error("invalid merge");for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Pn(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=Lt);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],c=u.length,f=i[o]=new Array(c),s=0;s<c;++s)(a=u[s])&&(f[s]=a);f.sort(n)}return new Pn(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=xt(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?Ht:jt:"function"==typeof n?e.local?$t:Vt:e.local?Gt:Xt)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?Zt:"function"==typeof n?Qt:Kt)(t,n,null==e?"":e)):Jt(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?tn:"function"==typeof n?en:nn)(t,n)):this.node()[t]},classed:function(t,n){var e=rn(t+"");if(arguments.length<2){for(var r=on(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?ln:n?fn:sn)(e,n))},text:function(t){return arguments.length?this.each(null==t?hn:("function"==typeof t?pn:dn)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?gn:("function"==typeof t?vn:yn)(t)):this.node().innerHTML},raise:function(){return this.each(_n)},lower:function(){return this.each(bn)},append:function(t){var n="function"==typeof t?t:At(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:At(t),r=null==n?mn:"function"==typeof n?n:St(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(xn)},clone:function(t){return this.select(t?Mn:wn)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=An(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?Sn:Tn,r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var c,f=0,s=u.length;f<s;++f)for(r=0,c=u[f];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?Nn:kn)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};var qn=0;function Rn(){return new Fn}function Fn(){this._="@"+(++qn).toString(36)}function On(t){let n;for(;n=t.sourceEvent;)t=n;return t}function Un(t,n){if(t=On(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(n.getScreenCTM().inverse())).x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}}return[t.pageX,t.pageY]}function In(t){t.stopImmediatePropagation()}function Bn(t){t.preventDefault(),t.stopImmediatePropagation()}function Yn(t){var n=t.document.documentElement,e=Dn(t).on("dragstart.drag",Bn,!0);"onselectstart"in n?e.on("selectstart.drag",Bn,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Ln(t,n){var e=t.document.documentElement,r=Dn(t).on("dragstart.drag",null);n&&(r.on("click.drag",Bn,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}Fn.prototype=Rn.prototype={constructor:Fn,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var jn=t=>()=>t;function Hn(t,{sourceEvent:n,subject:e,target:r,identifier:i,active:o,x:a,y:u,dx:c,dy:f,dispatch:s}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:e,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:u,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:f,enumerable:!0,configurable:!0},_:{value:s}})}function Xn(t){return!t.ctrlKey&&!t.button}function Gn(){return this.parentNode}function Vn(t,n){return null==n?{x:t.x,y:t.y}:n}function $n(){return navigator.maxTouchPoints||"ontouchstart"in this}function Wn(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Zn(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Kn(){}Hn.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var Qn=.7,Jn=1/Qn,te="\\s*([+-]?\\d+)\\s*",ne="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",ee="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",re=/^#([0-9a-f]{3,8})$/,ie=new RegExp("^rgb\\("+[te,te,te]+"\\)$"),oe=new RegExp("^rgb\\("+[ee,ee,ee]+"\\)$"),ae=new RegExp("^rgba\\("+[te,te,te,ne]+"\\)$"),ue=new RegExp("^rgba\\("+[ee,ee,ee,ne]+"\\)$"),ce=new RegExp("^hsl\\("+[ne,ee,ee]+"\\)$"),fe=new RegExp("^hsla\\("+[ne,ee,ee,ne]+"\\)$"),se={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function le(){return this.rgb().formatHex()}function he(){return this.rgb().formatRgb()}function de(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=re.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?pe(n):3===e?new _e(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?ge(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?ge(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=ie.exec(t))?new _e(n[1],n[2],n[3],1):(n=oe.exec(t))?new _e(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=ae.exec(t))?ge(n[1],n[2],n[3],n[4]):(n=ue.exec(t))?ge(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=ce.exec(t))?we(n[1],n[2]/100,n[3]/100,1):(n=fe.exec(t))?we(n[1],n[2]/100,n[3]/100,n[4]):se.hasOwnProperty(t)?pe(se[t]):"transparent"===t?new _e(NaN,NaN,NaN,0):null}function pe(t){return new _e(t>>16&255,t>>8&255,255&t,1)}function ge(t,n,e,r){return r<=0&&(t=n=e=NaN),new _e(t,n,e,r)}function ye(t){return t instanceof Kn||(t=de(t)),t?new _e((t=t.rgb()).r,t.g,t.b,t.opacity):new _e}function ve(t,n,e,r){return 1===arguments.length?ye(t):new _e(t,n,e,null==r?1:r)}function _e(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function be(){return"#"+xe(this.r)+xe(this.g)+xe(this.b)}function me(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function xe(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function we(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Te(t,n,e,r)}function Me(t){if(t instanceof Te)return new Te(t.h,t.s,t.l,t.opacity);if(t instanceof Kn||(t=de(t)),!t)return new Te;if(t instanceof Te)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,c=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=c<.5?o+i:2-o-i,a*=60):u=c>0&&c<1?0:a,new Te(a,u,c,t.opacity)}function Ae(t,n,e,r){return 1===arguments.length?Me(t):new Te(t,n,e,null==r?1:r)}function Te(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Se(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Wn(Kn,de,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:le,formatHex:le,formatHsl:function(){return Me(this).formatHsl()},formatRgb:he,toString:he}),Wn(_e,ve,Zn(Kn,{brighter:function(t){return t=null==t?Jn:Math.pow(Jn,t),new _e(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?Qn:Math.pow(Qn,t),new _e(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:be,formatHex:be,formatRgb:me,toString:me})),Wn(Te,Ae,Zn(Kn,{brighter:function(t){return t=null==t?Jn:Math.pow(Jn,t),new Te(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Qn:Math.pow(Qn,t),new Te(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new _e(Se(t>=240?t-240:t+120,i,r),Se(t,i,r),Se(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));const Ee=Math.PI/180,ke=180/Math.PI,Ne=.96422,Ce=.82521,Pe=4/29,ze=6/29,De=3*ze*ze;function qe(t){if(t instanceof Fe)return new Fe(t.l,t.a,t.b,t.opacity);if(t instanceof je)return He(t);t instanceof _e||(t=ye(t));var n,e,r=Be(t.r),i=Be(t.g),o=Be(t.b),a=Oe((.2225045*r+.7168786*i+.0606169*o)/1);return r===i&&i===o?n=e=a:(n=Oe((.4360747*r+.3850649*i+.1430804*o)/Ne),e=Oe((.0139322*r+.0971045*i+.7141733*o)/Ce)),new Fe(116*a-16,500*(n-a),200*(a-e),t.opacity)}function Re(t,n,e,r){return 1===arguments.length?qe(t):new Fe(t,n,e,null==r?1:r)}function Fe(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Oe(t){return t>.008856451679035631?Math.pow(t,1/3):t/De+Pe}function Ue(t){return t>ze?t*t*t:De*(t-Pe)}function Ie(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Be(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Ye(t){if(t instanceof je)return new je(t.h,t.c,t.l,t.opacity);if(t instanceof Fe||(t=qe(t)),0===t.a&&0===t.b)return new je(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*ke;return new je(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Le(t,n,e,r){return 1===arguments.length?Ye(t):new je(t,n,e,null==r?1:r)}function je(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function He(t){if(isNaN(t.h))return new Fe(t.l,0,0,t.opacity);var n=t.h*Ee;return new Fe(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}Wn(Fe,Re,Zn(Kn,{brighter:function(t){return new Fe(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Fe(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new _e(Ie(3.1338561*(n=Ne*Ue(n))-1.6168667*(t=1*Ue(t))-.4906146*(e=Ce*Ue(e))),Ie(-.9787684*n+1.9161415*t+.033454*e),Ie(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Wn(je,Le,Zn(Kn,{brighter:function(t){return new je(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new je(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return He(this).rgb()}}));var Xe=-.14861,Ge=1.78277,Ve=-.29227,$e=-.90649,We=1.97294,Ze=We*$e,Ke=We*Ge,Qe=Ge*Ve-$e*Xe;function Je(t){if(t instanceof nr)return new nr(t.h,t.s,t.l,t.opacity);t instanceof _e||(t=ye(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(Qe*r+Ze*n-Ke*e)/(Qe+Ze-Ke),o=r-i,a=(We*(e-i)-Ve*o)/$e,u=Math.sqrt(a*a+o*o)/(We*i*(1-i)),c=u?Math.atan2(a,o)*ke-120:NaN;return new nr(c<0?c+360:c,u,i,t.opacity)}function tr(t,n,e,r){return 1===arguments.length?Je(t):new nr(t,n,e,null==r?1:r)}function nr(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function er(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function rr(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return er((e-r/n)*n,a,i,o,u)}}function ir(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return er((e-r/n)*n,i,o,a,u)}}Wn(nr,tr,Zn(Kn,{brighter:function(t){return t=null==t?Jn:Math.pow(Jn,t),new nr(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Qn:Math.pow(Qn,t),new nr(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Ee,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new _e(255*(n+e*(Xe*r+Ge*i)),255*(n+e*(Ve*r+$e*i)),255*(n+e*(We*r)),this.opacity)}}));var or=t=>()=>t;function ar(t,n){return function(e){return t+e*n}}function ur(t,n){var e=n-t;return e?ar(t,e>180||e<-180?e-360*Math.round(e/360):e):or(isNaN(t)?n:t)}function cr(t){return 1==(t=+t)?fr:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):or(isNaN(n)?e:n)}}function fr(t,n){var e=n-t;return e?ar(t,e):or(isNaN(t)?n:t)}var sr=function t(n){var e=cr(n);function r(t,n){var r=e((t=ve(t)).r,(n=ve(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=fr(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function lr(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=ve(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var hr=lr(rr),dr=lr(ir);function pr(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o;return i}}function gr(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function yr(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=Mr(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function vr(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function _r(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function br(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=Mr(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var mr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xr=new RegExp(mr.source,"g");function wr(t,n){var e,r,i,o=mr.lastIndex=xr.lastIndex=0,a=-1,u=[],c=[];for(t+="",n+="";(e=mr.exec(t))&&(r=xr.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,c.push({i:a,x:_r(e,r)})),o=xr.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)u[(e=c[r]).i]=e.x(t);return u.join("")})}function Mr(t,n){var e,r=typeof n;return null==n||"boolean"===r?or(n):("number"===r?_r:"string"===r?(e=de(n))?(n=e,sr):wr:n instanceof de?sr:n instanceof Date?vr:gr(n)?pr:Array.isArray(n)?yr:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?br:_r)(t,n)}function Ar(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var Tr,Sr=180/Math.PI,Er={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function kr(t,n,e,r,i,o){var a,u,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),t*r<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Sr,skewX:Math.atan(c)*Sr,scaleX:a,scaleY:u}}function Nr(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],c=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var c=a.push("translate(",null,n,null,e);u.push({i:c-4,x:_r(t,i)},{i:c-2,x:_r(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:_r(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:_r(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,c),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:_r(t,e)},{i:u-2,x:_r(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,c),o=a=null,function(t){for(var n,e=-1,r=c.length;++e<r;)u[(n=c[e]).i]=n.x(t);return u.join("")}}}var Cr=Nr((function(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Er:kr(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),Pr=Nr((function(t){return null==t?Er:(Tr||(Tr=document.createElementNS("http://www.w3.org/2000/svg","g")),Tr.setAttribute("transform",t),(t=Tr.transform.baseVal.consolidate())?kr((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Er)}),", ",")",")");function zr(t){return((t=Math.exp(t))+1/t)/2}var Dr=function t(n,e,r){function i(t,i){var o,a,u=t[0],c=t[1],f=t[2],s=i[0],l=i[1],h=i[2],d=s-u,p=l-c,g=d*d+p*p;if(g<1e-12)a=Math.log(h/f)/n,o=function(t){return[u+t*d,c+t*p,f*Math.exp(n*t*a)]};else{var y=Math.sqrt(g),v=(h*h-f*f+r*g)/(2*f*e*y),_=(h*h-f*f-r*g)/(2*h*e*y),b=Math.log(Math.sqrt(v*v+1)-v),m=Math.log(Math.sqrt(_*_+1)-_);a=(m-b)/n,o=function(t){var r=t*a,i=zr(b),o=f/(e*y)*(i*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(n*r+b)-function(t){return((t=Math.exp(t))-1/t)/2}(b));return[u+o*d,c+o*p,f*i/zr(n*r+b)]}}return o.duration=1e3*a*n/Math.SQRT2,o}return i.rho=function(n){var e=Math.max(.001,+n),r=e*e;return t(e,r,r*r)},i}(Math.SQRT2,2,4);function qr(t){return function(n,e){var r=t((n=Ae(n)).h,(e=Ae(e)).h),i=fr(n.s,e.s),o=fr(n.l,e.l),a=fr(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Rr=qr(ur),Fr=qr(fr);function Or(t){return function(n,e){var r=t((n=Le(n)).h,(e=Le(e)).h),i=fr(n.c,e.c),o=fr(n.l,e.l),a=fr(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Ur=Or(ur),Ir=Or(fr);function Br(t){return function n(e){function r(n,r){var i=t((n=tr(n)).h,(r=tr(r)).h),o=fr(n.s,r.s),a=fr(n.l,r.l),u=fr(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var Yr=Br(ur),Lr=Br(fr);function jr(t,n){void 0===n&&(n=t,t=Mr);for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}}var Hr,Xr,Gr=0,Vr=0,$r=0,Wr=0,Zr=0,Kr=0,Qr="object"==typeof performance&&performance.now?performance:Date,Jr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function ti(){return Zr||(Jr(ni),Zr=Qr.now()+Kr)}function ni(){Zr=0}function ei(){this._call=this._time=this._next=null}function ri(t,n,e){var r=new ei;return r.restart(t,n,e),r}function ii(){ti(),++Gr;for(var t,n=Hr;n;)(t=Zr-n._time)>=0&&n._call.call(null,t),n=n._next;--Gr}function oi(){Zr=(Wr=Qr.now())+Kr,Gr=Vr=0;try{ii()}finally{Gr=0,function(){var t,n,e=Hr,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Hr=n);Xr=t,ui(r)}(),Zr=0}}function ai(){var t=Qr.now(),n=t-Wr;n>1e3&&(Kr-=n,Wr=t)}function ui(t){Gr||(Vr&&(Vr=clearTimeout(Vr)),t-Zr>24?(t<1/0&&(Vr=setTimeout(oi,t-Qr.now()-Kr)),$r&&($r=clearInterval($r))):($r||(Wr=Qr.now(),$r=setInterval(ai,1e3)),Gr=1,Jr(oi)))}function ci(t,n,e){var r=new ei;return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}ei.prototype=ri.prototype={constructor:ei,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?ti():+e)+(null==n?0:+n),this._next||Xr===this||(Xr?Xr._next=this:Hr=this,Xr=this),this._call=t,this._time=e,ui()},stop:function(){this._call&&(this._call=null,this._time=1/0,ui())}};var fi=pt("start","end","cancel","interrupt"),si=[];function li(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(t){e.state=1,e.timer.restart(a,e.delay,e.time),e.delay<=t&&a(t-e.delay)}function a(o){var f,s,l,h;if(1!==e.state)return c();for(f in i)if((h=i[f]).name===e.name){if(3===h.state)return ci(a);4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[f]):+f<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[f])}if(ci((function(){3===e.state&&(e.state=4,e.timer.restart(u,e.delay,e.time),u(o))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(l=e.tween.length),f=0,s=-1;f<l;++f)(h=e.tween[f].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h);r.length=s+1}}function u(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(c),e.state=5,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),c())}function c(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=ri(o,0,e.time)}(t,e,{name:n,index:r,group:i,on:fi,tween:si,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function hi(t,n){var e=pi(t,n);if(e.state>0)throw new Error("too late; already scheduled");return e}function di(t,n){var e=pi(t,n);if(e.state>3)throw new Error("too late; already running");return e}function pi(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function gi(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function yi(t,n){var e,r;return function(){var i=di(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}function vi(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=di(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},c=0,f=i.length;c<f;++c)if(i[c].name===n){i[c]=u;break}c===f&&i.push(u)}o.tween=i}}function _i(t,n,e){var r=t._id;return t.each((function(){var t=di(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return pi(t,r).value[n]}}function bi(t,n){var e;return("number"==typeof n?_r:n instanceof de?sr:(e=de(n))?(n=e,sr):wr)(t,n)}function mi(t){return function(){this.removeAttribute(t)}}function xi(t){return function(){this.removeAttributeNS(t.space,t.local)}}function wi(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}}function Mi(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}function Ai(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttribute(t))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttribute(t)}}function Ti(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttributeNS(t.space,t.local)}}function Si(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Ei(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function ki(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&Ei(t,i)),e}return i._value=n,i}function Ni(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&Si(t,i)),e}return i._value=n,i}function Ci(t,n){return function(){hi(this,t).delay=+n.apply(this,arguments)}}function Pi(t,n){return n=+n,function(){hi(this,t).delay=n}}function zi(t,n){return function(){di(this,t).duration=+n.apply(this,arguments)}}function Di(t,n){return n=+n,function(){di(this,t).duration=n}}function qi(t,n){if("function"!=typeof n)throw new Error;return function(){di(this,t).ease=n}}function Ri(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?hi:di;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}var Fi=zn.prototype.constructor;function Oi(t){return function(){this.style.removeProperty(t)}}function Ui(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function Ii(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&Ui(t,o,e)),r}return o._value=n,o}function Bi(t){return function(n){this.textContent=t.call(this,n)}}function Yi(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&Bi(r)),n}return r._value=t,r}var Li=0;function ji(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Hi(t){return zn().transition(t)}function Xi(){return++Li}var Gi=zn.prototype;ji.prototype=Hi.prototype={constructor:ji,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=St(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,c,f=r[a],s=f.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=f[h])&&(c=t.call(u,u.__data__,h,f))&&("__data__"in u&&(c.__data__=u.__data__),l[h]=c,li(l[h],n,e,h,l,pi(u,e)));return new ji(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Nt(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var c,f=r[u],s=f.length,l=0;l<s;++l)if(c=f[l]){for(var h,d=t.call(c,c.__data__,l,f),p=pi(c,e),g=0,y=d.length;g<y;++g)(h=d[g])&&li(h,n,e,g,d,p);o.push(d),a.push(c)}return new ji(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=Ct(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new ji(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new ji(a,this._parents,this._name,this._id)},selection:function(){return new Fi(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Xi(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)if(a=u[f]){var s=pi(a,n);li(a,t,e,f,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new ji(r,this._parents,t,e)},call:Gi.call,nodes:Gi.nodes,node:Gi.node,size:Gi.size,empty:Gi.empty,each:Gi.each,on:function(t,n){var e=this._id;return arguments.length<2?pi(this.node(),e).on.on(t):this.each(Ri(e,t,n))},attr:function(t,n){var e=xt(t),r="transform"===e?Pr:bi;return this.attrTween(t,"function"==typeof n?(e.local?Ti:Ai)(e,r,_i(this,"attr."+t,n)):null==n?(e.local?xi:mi)(e):(e.local?Mi:wi)(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=xt(t);return this.tween(e,(r.local?ki:Ni)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Cr:bi;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=Jt(this,t),a=(this.style.removeProperty(t),Jt(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,Oi(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=Jt(this,t),u=e(this),c=u+"";return null==u&&(this.style.removeProperty(t),c=u=Jt(this,t)),a===c?null:a===r&&c===i?o:(i=c,o=n(r=a,u))}}(t,r,_i(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var c=di(this,t),f=c.on,s=null==c.value[a]?o||(o=Oi(n)):void 0;f===e&&i===s||(r=(e=f).copy()).on(u,i=s),c.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=Jt(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,Ii(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(_i(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,Yi(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=pi(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?yi:vi)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Ci:Pi)(n,t)):pi(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?zi:Di)(n,t)):pi(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(qi(n,t)):pi(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!=typeof e)throw new Error;di(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise((function(o,a){var u={value:a},c={value:function(){0==--i&&o()}};e.each((function(){var e=di(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(c)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:Gi[Symbol.iterator]};function Vi(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function $i(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Wi=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Zi=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Ki=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Qi=Math.PI,Ji=Qi/2;function to(t){return(1-Math.cos(Qi*t))/2}function no(t){return 1.0009775171065494*(Math.pow(2,-10*t)-.0009765625)}function eo(t){return((t*=2)<=1?no(1-t):2-no(t-1))/2}function ro(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var io=4/11,oo=7.5625;function ao(t){return(t=+t)<io?oo*t*t:t<.7272727272727273?oo*(t-=.5454545454545454)*t+.75:t<.9090909090909091?oo*(t-=.8181818181818182)*t+.9375:oo*(t-=.9545454545454546)*t+.984375}var uo=1.70158,co=function t(n){function e(t){return(t=+t)*t*(n*(t-1)+t)}return n=+n,e.overshoot=t,e}(uo),fo=function t(n){function e(t){return--t*t*((t+1)*n+t)+1}return n=+n,e.overshoot=t,e}(uo),so=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(uo),lo=2*Math.PI,ho=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=lo);function i(t){return n*no(- --t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*lo)},i.period=function(e){return t(n,e)},i}(1,.3),po=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=lo);function i(t){return 1-n*no(t=+t)*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*lo)},i.period=function(e){return t(n,e)},i}(1,.3),go=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=lo);function i(t){return((t=2*t-1)<0?n*no(-t)*Math.sin((r-t)/e):2-n*no(t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*lo)},i.period=function(e){return t(n,e)},i}(1,.3),yo={time:null,delay:0,duration:250,ease:$i};function vo(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}zn.prototype.interrupt=function(t){return this.each((function(){gi(this,t)}))},zn.prototype.transition=function(t){var n,e;t instanceof ji?(n=t._id,t=t._name):(n=Xi(),(e=yo).time=ti(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)(a=u[f])&&li(a,t,n,f,u,e||vo(a,n));return new ji(r,this._parents,t,n)};var _o=[null];var bo=t=>()=>t;function mo(t,{sourceEvent:n,target:e,selection:r,mode:i,dispatch:o}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},selection:{value:r,enumerable:!0,configurable:!0},mode:{value:i,enumerable:!0,configurable:!0},_:{value:o}})}function xo(t){t.stopImmediatePropagation()}function wo(t){t.preventDefault(),t.stopImmediatePropagation()}var Mo={name:"drag"},Ao={name:"space"},To={name:"handle"},So={name:"center"};const{abs:Eo,max:ko,min:No}=Math;function Co(t){return[+t[0],+t[1]]}function Po(t){return[Co(t[0]),Co(t[1])]}var zo={name:"x",handles:["w","e"].map(Bo),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Do={name:"y",handles:["n","s"].map(Bo),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},qo={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Bo),input:function(t){return null==t?null:Po(t)},output:function(t){return t}},Ro={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Fo={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Oo={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Uo={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Io={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function Bo(t){return{type:t}}function Yo(t){return!t.ctrlKey&&!t.button}function Lo(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function jo(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ho(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Xo(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Go(t){var n,e=Lo,r=Yo,i=jo,o=!0,a=pt("start","brush","end"),u=6;function c(n){var e=n.property("__brush",g).selectAll(".overlay").data([Bo("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Ro.overlay).merge(e).each((function(){var t=Ho(this).extent;Dn(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),n.selectAll(".selection").data([Bo("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Ro.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=n.selectAll(".handle").data(t.handles,(function(t){return t.type}));r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return Ro[t.type]})),n.each(f).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",h).filter(i).on("touchstart.brush",h).on("touchmove.brush",d).on("touchend.brush touchcancel.brush",p).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(){var t=Dn(this),n=Ho(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?n[1][0]-u/2:n[0][0]-u/2})).attr("y",(function(t){return"s"===t.type[0]?n[1][1]-u/2:n[0][1]-u/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+u:u})).attr("height",(function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+u:u}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function s(t,n,e){var r=t.__brush.emitter;return!r||e&&r.clean?new l(t,n,e):r}function l(t,n,e){this.that=t,this.args=n,this.state=t.__brush,this.active=0,this.clean=e}function h(e){if((!n||e.touches)&&r.apply(this,arguments)){var i,a,u,c,l,h,d,p,g,y,v,_=this,b=e.target.__data__.type,m="selection"===(o&&e.metaKey?b="overlay":b)?Mo:o&&e.altKey?So:To,x=t===Do?null:Uo[b],w=t===zo?null:Io[b],M=Ho(_),A=M.extent,T=M.selection,S=A[0][0],E=A[0][1],k=A[1][0],N=A[1][1],C=0,P=0,z=x&&w&&o&&e.shiftKey,D=Array.from(e.touches||[e],(t=>{const n=t.identifier;return(t=Un(t,_)).point0=t.slice(),t.identifier=n,t}));if("overlay"===b){T&&(g=!0);const n=[D[0],D[1]||D[0]];M.selection=T=[[i=t===Do?S:No(n[0][0],n[1][0]),u=t===zo?E:No(n[0][1],n[1][1])],[l=t===Do?k:ko(n[0][0],n[1][0]),d=t===zo?N:ko(n[0][1],n[1][1])]],D.length>1&&I()}else i=T[0][0],u=T[0][1],l=T[1][0],d=T[1][1];a=i,c=u,h=l,p=d;var q=Dn(_).attr("pointer-events","none"),R=q.selectAll(".overlay").attr("cursor",Ro[b]);gi(_);var F=s(_,arguments,!0).beforestart();if(e.touches)F.moved=U,F.ended=B;else{var O=Dn(e.view).on("mousemove.brush",U,!0).on("mouseup.brush",B,!0);o&&O.on("keydown.brush",Y,!0).on("keyup.brush",L,!0),Yn(e.view)}f.call(_),F.start(e,m.name)}function U(t){for(const n of t.changedTouches||[t])for(const t of D)t.identifier===n.identifier&&(t.cur=Un(n,_));if(z&&!y&&!v&&1===D.length){const t=D[0];Eo(t.cur[0]-t[0])>Eo(t.cur[1]-t[1])?v=!0:y=!0}for(const t of D)t.cur&&(t[0]=t.cur[0],t[1]=t.cur[1]);g=!0,wo(t),I(t)}function I(t){const n=D[0],e=n.point0;var r;switch(C=n[0]-e[0],P=n[1]-e[1],m){case Ao:case Mo:x&&(C=ko(S-i,No(k-l,C)),a=i+C,h=l+C),w&&(P=ko(E-u,No(N-d,P)),c=u+P,p=d+P);break;case To:D[1]?(x&&(a=ko(S,No(k,D[0][0])),h=ko(S,No(k,D[1][0])),x=1),w&&(c=ko(E,No(N,D[0][1])),p=ko(E,No(N,D[1][1])),w=1)):(x<0?(C=ko(S-i,No(k-i,C)),a=i+C,h=l):x>0&&(C=ko(S-l,No(k-l,C)),a=i,h=l+C),w<0?(P=ko(E-u,No(N-u,P)),c=u+P,p=d):w>0&&(P=ko(E-d,No(N-d,P)),c=u,p=d+P));break;case So:x&&(a=ko(S,No(k,i-C*x)),h=ko(S,No(k,l+C*x))),w&&(c=ko(E,No(N,u-P*w)),p=ko(E,No(N,d+P*w)))}h<a&&(x*=-1,r=i,i=l,l=r,r=a,a=h,h=r,b in Fo&&R.attr("cursor",Ro[b=Fo[b]])),p<c&&(w*=-1,r=u,u=d,d=r,r=c,c=p,p=r,b in Oo&&R.attr("cursor",Ro[b=Oo[b]])),M.selection&&(T=M.selection),y&&(a=T[0][0],h=T[1][0]),v&&(c=T[0][1],p=T[1][1]),T[0][0]===a&&T[0][1]===c&&T[1][0]===h&&T[1][1]===p||(M.selection=[[a,c],[h,p]],f.call(_),F.brush(t,m.name))}function B(t){if(xo(t),t.touches){if(t.touches.length)return;n&&clearTimeout(n),n=setTimeout((function(){n=null}),500)}else Ln(t.view,g),O.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);q.attr("pointer-events","all"),R.attr("cursor",Ro.overlay),M.selection&&(T=M.selection),Xo(T)&&(M.selection=null,f.call(_)),F.end(t,m.name)}function Y(t){switch(t.keyCode){case 16:z=x&&w;break;case 18:m===To&&(x&&(l=h-C*x,i=a+C*x),w&&(d=p-P*w,u=c+P*w),m=So,I());break;case 32:m!==To&&m!==So||(x<0?l=h-C:x>0&&(i=a-C),w<0?d=p-P:w>0&&(u=c-P),m=Ao,R.attr("cursor",Ro.selection),I());break;default:return}wo(t)}function L(t){switch(t.keyCode){case 16:z&&(y=v=z=!1,I());break;case 18:m===So&&(x<0?l=h:x>0&&(i=a),w<0?d=p:w>0&&(u=c),m=To,I());break;case 32:m===Ao&&(t.altKey?(x&&(l=h-C*x,i=a+C*x),w&&(d=p-P*w,u=c+P*w),m=So):(x<0?l=h:x>0&&(i=a),w<0?d=p:w>0&&(u=c),m=To),R.attr("cursor",Ro[b]),I());break;default:return}wo(t)}}function d(t){s(this,arguments).moved(t)}function p(t){s(this,arguments).ended(t)}function g(){var n=this.__brush||{selection:null};return n.extent=Po(e.apply(this,arguments)),n.dim=t,n}return c.move=function(n,e){n.tween?n.on("start.brush",(function(t){s(this,arguments).beforestart().start(t)})).on("interrupt.brush end.brush",(function(t){s(this,arguments).end(t)})).tween("brush",(function(){var n=this,r=n.__brush,i=s(n,arguments),o=r.selection,a=t.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=Mr(o,a);function c(t){r.selection=1===t&&null===a?null:u(t),f.call(n),i.brush()}return null!==o&&null!==a?c:c(1)})):n.each((function(){var n=this,r=arguments,i=n.__brush,o=t.input("function"==typeof e?e.apply(n,r):e,i.extent),a=s(n,r).beforestart();gi(n),i.selection=null===o?null:o,f.call(n),a.start().brush().end()}))},c.clear=function(t){c.move(t,null)},l.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(t,n){return this.starting?(this.starting=!1,this.emit("start",t,n)):this.emit("brush",t),this},brush:function(t,n){return this.emit("brush",t,n),this},end:function(t,n){return 0==--this.active&&(delete this.state.emitter,this.emit("end",t,n)),this},emit:function(n,e,r){var i=Dn(this.that).datum();a.call(n,this.that,new mo(n,{sourceEvent:e,target:c,selection:t.output(this.state.selection),mode:r,dispatch:a}),i)}},c.extent=function(t){return arguments.length?(e="function"==typeof t?t:bo(Po(t)),c):e},c.filter=function(t){return arguments.length?(r="function"==typeof t?t:bo(!!t),c):r},c.touchable=function(t){return arguments.length?(i="function"==typeof t?t:bo(!!t),c):i},c.handleSize=function(t){return arguments.length?(u=+t,c):u},c.keyModifiers=function(t){return arguments.length?(o=!!t,c):o},c.on=function(){var t=a.on.apply(a,arguments);return t===a?c:t},c}var Vo=Math.abs,$o=Math.cos,Wo=Math.sin,Zo=Math.PI,Ko=Zo/2,Qo=2*Zo,Jo=Math.max,ta=1e-12;function na(t,n){return Array.from({length:n-t},((n,e)=>t+e))}function ea(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function ra(t,n){var e=0,r=null,i=null,o=null;function a(a){var u,c=a.length,f=new Array(c),s=na(0,c),l=new Array(c*c),h=new Array(c),d=0;a=Float64Array.from({length:c*c},n?(t,n)=>a[n%c][n/c|0]:(t,n)=>a[n/c|0][n%c]);for(let n=0;n<c;++n){let e=0;for(let r=0;r<c;++r)e+=a[n*c+r]+t*a[r*c+n];d+=f[n]=e}u=(d=Jo(0,Qo-e*c)/d)?e:Qo/c;{let n=0;r&&s.sort(((t,n)=>r(f[t],f[n])));for(const e of s){const r=n;if(t){const t=na(1+~c,c).filter((t=>t<0?a[~t*c+e]:a[e*c+t]));i&&t.sort(((t,n)=>i(t<0?-a[~t*c+e]:a[e*c+t],n<0?-a[~n*c+e]:a[e*c+n])));for(const r of t)if(r<0){(l[~r*c+e]||(l[~r*c+e]={source:null,target:null})).target={index:e,startAngle:n,endAngle:n+=a[~r*c+e]*d,value:a[~r*c+e]}}else{(l[e*c+r]||(l[e*c+r]={source:null,target:null})).source={index:e,startAngle:n,endAngle:n+=a[e*c+r]*d,value:a[e*c+r]}}h[e]={index:e,startAngle:r,endAngle:n,value:f[e]}}else{const t=na(0,c).filter((t=>a[e*c+t]||a[t*c+e]));i&&t.sort(((t,n)=>i(a[e*c+t],a[e*c+n])));for(const r of t){let t;if(e<r?(t=l[e*c+r]||(l[e*c+r]={source:null,target:null}),t.source={index:e,startAngle:n,endAngle:n+=a[e*c+r]*d,value:a[e*c+r]}):(t=l[r*c+e]||(l[r*c+e]={source:null,target:null}),t.target={index:e,startAngle:n,endAngle:n+=a[e*c+r]*d,value:a[e*c+r]},e===r&&(t.source=t.target)),t.source&&t.target&&t.source.value<t.target.value){const n=t.source;t.source=t.target,t.target=n}}h[e]={index:e,startAngle:r,endAngle:n,value:f[e]}}n+=u}}return(l=Object.values(l)).groups=h,o?l.sort(o):l}return a.padAngle=function(t){return arguments.length?(e=Jo(0,t),a):e},a.sortGroups=function(t){return arguments.length?(r=t,a):r},a.sortSubgroups=function(t){return arguments.length?(i=t,a):i},a.sortChords=function(t){return arguments.length?(null==t?o=null:(o=ea(t))._=t,a):o&&o._},a}const ia=Math.PI,oa=2*ia,aa=1e-6,ua=oa-aa;function ca(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function fa(){return new ca}ca.prototype=fa.prototype={constructor:ca,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,c=r-n,f=o-t,s=a-n,l=f*f+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>aa)if(Math.abs(s*u-c*f)>aa&&i){var h=e-o,d=r-a,p=u*u+c*c,g=h*h+d*d,y=Math.sqrt(p),v=Math.sqrt(l),_=i*Math.tan((ia-Math.acos((p+l-g)/(2*y*v)))/2),b=_/v,m=_/y;Math.abs(b-1)>aa&&(this._+="L"+(t+b*f)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>f*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),c=t+a,f=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+f:(Math.abs(this._x1-c)>aa||Math.abs(this._y1-f)>aa)&&(this._+="L"+c+","+f),e&&(l<0&&(l=l%oa+oa),l>ua?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=c)+","+(this._y1=f):l>aa&&(this._+="A"+e+","+e+",0,"+ +(l>=ia)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var sa=Array.prototype.slice;function la(t){return function(){return t}}function ha(t){return t.source}function da(t){return t.target}function pa(t){return t.radius}function ga(t){return t.startAngle}function ya(t){return t.endAngle}function va(){return 0}function _a(){return 10}function ba(t){var n=ha,e=da,r=pa,i=pa,o=ga,a=ya,u=va,c=null;function f(){var f,s=n.apply(this,arguments),l=e.apply(this,arguments),h=u.apply(this,arguments)/2,d=sa.call(arguments),p=+r.apply(this,(d[0]=s,d)),g=o.apply(this,d)-Ko,y=a.apply(this,d)-Ko,v=+i.apply(this,(d[0]=l,d)),_=o.apply(this,d)-Ko,b=a.apply(this,d)-Ko;if(c||(c=f=fa()),h>ta&&(Vo(y-g)>2*h+ta?y>g?(g+=h,y-=h):(g-=h,y+=h):g=y=(g+y)/2,Vo(b-_)>2*h+ta?b>_?(_+=h,b-=h):(_-=h,b+=h):_=b=(_+b)/2),c.moveTo(p*$o(g),p*Wo(g)),c.arc(0,0,p,g,y),g!==_||y!==b)if(t){var m=+t.apply(this,arguments),x=v-m,w=(_+b)/2;c.quadraticCurveTo(0,0,x*$o(_),x*Wo(_)),c.lineTo(v*$o(w),v*Wo(w)),c.lineTo(x*$o(b),x*Wo(b))}else c.quadraticCurveTo(0,0,v*$o(_),v*Wo(_)),c.arc(0,0,v,_,b);if(c.quadraticCurveTo(0,0,p*$o(g),p*Wo(g)),c.closePath(),f)return c=null,f+""||null}return t&&(f.headRadius=function(n){return arguments.length?(t="function"==typeof n?n:la(+n),f):t}),f.radius=function(t){return arguments.length?(r=i="function"==typeof t?t:la(+t),f):r},f.sourceRadius=function(t){return arguments.length?(r="function"==typeof t?t:la(+t),f):r},f.targetRadius=function(t){return arguments.length?(i="function"==typeof t?t:la(+t),f):i},f.startAngle=function(t){return arguments.length?(o="function"==typeof t?t:la(+t),f):o},f.endAngle=function(t){return arguments.length?(a="function"==typeof t?t:la(+t),f):a},f.padAngle=function(t){return arguments.length?(u="function"==typeof t?t:la(+t),f):u},f.source=function(t){return arguments.length?(n=t,f):n},f.target=function(t){return arguments.length?(e=t,f):e},f.context=function(t){return arguments.length?(c=null==t?null:t,f):c},f}var ma=Array.prototype.slice;function xa(t,n){return t-n}var wa=t=>()=>t;function Ma(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=Aa(t,n[r]))return e;return 0}function Aa(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var c=t[o],f=c[0],s=c[1],l=t[u],h=l[0],d=l[1];if(Ta(c,l,n))return 0;s>r!=d>r&&e<(h-f)*(r-s)/(d-s)+f&&(i=-i)}return i}function Ta(t,n,e){var r,i,o,a;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function Sa(){}var Ea=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function ka(){var t=1,n=1,e=U,r=u;function i(t){var n=e(t);if(Array.isArray(n))n=n.slice().sort(xa);else{var r=p(t),i=r[0],a=r[1];n=F(i,a,n),n=Z(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map((function(n){return o(t,n)}))}function o(e,i){var o=[],u=[];return function(e,r,i){var o,u,c,f,s,l,h=new Array,d=new Array;o=u=-1,f=e[0]>=r,Ea[f<<1].forEach(p);for(;++o<t-1;)c=f,f=e[o+1]>=r,Ea[c|f<<1].forEach(p);Ea[f<<0].forEach(p);for(;++u<n-1;){for(o=-1,f=e[u*t+t]>=r,s=e[u*t]>=r,Ea[f<<1|s<<2].forEach(p);++o<t-1;)c=f,f=e[u*t+t+o+1]>=r,l=s,s=e[u*t+o+1]>=r,Ea[c|f<<1|s<<2|l<<3].forEach(p);Ea[f|s<<3].forEach(p)}o=-1,s=e[u*t]>=r,Ea[s<<2].forEach(p);for(;++o<t-1;)l=s,s=e[u*t+o+1]>=r,Ea[s<<2|l<<3].forEach(p);function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],c=[t[1][0]+o,t[1][1]+u],f=a(r),s=a(c);(n=d[f])?(e=h[s])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(c),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(c),d[n.end=s]=n):(n=h[s])?(e=d[f])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(c),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=f]=n):h[f]=d[s]={start:f,end:s,ring:[r,c]}}Ea[s<<3].forEach(p)}(e,i,(function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(t)>0?o.push([t]):u.push(t)})),u.forEach((function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==Ma((n=o[e])[0],t))return void n.push(t)})),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach((function(e){var o,a=e[0],u=e[1],c=0|a,f=0|u,s=r[f*t+c];a>0&&a<t&&c===a&&(o=r[f*t+c-1],e[0]=a+(i-o)/(s-o)-.5),u>0&&u<n&&f===u&&(o=r[(f-1)*t+c],e[1]=u+(i-o)/(s-o)-.5)}))}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n];var r=Math.floor(e[0]),o=Math.floor(e[1]);if(!(r>=0&&o>=0))throw new Error("invalid size");return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?wa(ma.call(t)):wa(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:Sa,i):r===u},i}function Na(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,c=0;u<r+e;++u)u<r&&(c+=t.data[u+a*r]),u>=e&&(u>=o&&(c-=t.data[u-o+a*r]),n.data[u-e+a*r]=c/Math.min(u+1,r-1+o-u,o))}function Ca(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,c=0;u<i+e;++u)u<i&&(c+=t.data[a+u*r]),u>=e&&(u>=o&&(c-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=c/Math.min(u+1,i-1+o-u,o))}function Pa(t){return t[0]}function za(t){return t[1]}function Da(){return 1}const qa=Math.pow(2,-52),Ra=new Uint32Array(512);class Fa{static from(t,n=Ha,e=Xa){const r=t.length,i=new Float64Array(2*r);for(let o=0;o<r;o++){const r=t[o];i[2*o]=n(r),i[2*o+1]=e(r)}return new Fa(i)}constructor(t){const n=t.length>>1;if(n>0&&"number"!=typeof t[0])throw new Error("Expected coords to contain numbers.");this.coords=t;const e=Math.max(2*n-5,0);this._triangles=new Uint32Array(3*e),this._halfedges=new Int32Array(3*e),this._hashSize=Math.ceil(Math.sqrt(n)),this._hullPrev=new Uint32Array(n),this._hullNext=new Uint32Array(n),this._hullTri=new Uint32Array(n),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(n),this._dists=new Float64Array(n),this.update()}update(){const{coords:t,_hullPrev:n,_hullNext:e,_hullTri:r,_hullHash:i}=this,o=t.length>>1;let a=1/0,u=1/0,c=-1/0,f=-1/0;for(let n=0;n<o;n++){const e=t[2*n],r=t[2*n+1];e<a&&(a=e),r<u&&(u=r),e>c&&(c=e),r>f&&(f=r),this._ids[n]=n}const s=(a+c)/2,l=(u+f)/2;let h,d,p,g=1/0;for(let n=0;n<o;n++){const e=Oa(s,l,t[2*n],t[2*n+1]);e<g&&(h=n,g=e)}const y=t[2*h],v=t[2*h+1];g=1/0;for(let n=0;n<o;n++){if(n===h)continue;const e=Oa(y,v,t[2*n],t[2*n+1]);e<g&&e>0&&(d=n,g=e)}let _=t[2*d],b=t[2*d+1],m=1/0;for(let n=0;n<o;n++){if(n===h||n===d)continue;const e=Ya(y,v,_,b,t[2*n],t[2*n+1]);e<m&&(p=n,m=e)}let x=t[2*p],w=t[2*p+1];if(m===1/0){for(let n=0;n<o;n++)this._dists[n]=t[2*n]-t[0]||t[2*n+1]-t[1];La(this._ids,this._dists,0,o-1);const n=new Uint32Array(o);let e=0;for(let t=0,r=-1/0;t<o;t++){const i=this._ids[t];this._dists[i]>r&&(n[e++]=i,r=this._dists[i])}return this.hull=n.subarray(0,e),this.triangles=new Uint32Array(0),void(this.halfedges=new Uint32Array(0))}if(Ia(y,v,_,b,x,w)){const t=d,n=_,e=b;d=p,_=x,b=w,p=t,x=n,w=e}const M=function(t,n,e,r,i,o){const a=e-t,u=r-n,c=i-t,f=o-n,s=a*a+u*u,l=c*c+f*f,h=.5/(a*f-u*c);return{x:t+(f*s-u*l)*h,y:n+(a*l-c*s)*h}}(y,v,_,b,x,w);this._cx=M.x,this._cy=M.y;for(let n=0;n<o;n++)this._dists[n]=Oa(t[2*n],t[2*n+1],M.x,M.y);La(this._ids,this._dists,0,o-1),this._hullStart=h;let A=3;e[h]=n[p]=d,e[d]=n[h]=p,e[p]=n[d]=h,r[h]=0,r[d]=1,r[p]=2,i.fill(-1),i[this._hashKey(y,v)]=h,i[this._hashKey(_,b)]=d,i[this._hashKey(x,w)]=p,this.trianglesLen=0,this._addTriangle(h,d,p,-1,-1,-1);for(let o,a,u=0;u<this._ids.length;u++){const c=this._ids[u],f=t[2*c],s=t[2*c+1];if(u>0&&Math.abs(f-o)<=qa&&Math.abs(s-a)<=qa)continue;if(o=f,a=s,c===h||c===d||c===p)continue;let l=0;for(let t=0,n=this._hashKey(f,s);t<this._hashSize&&(l=i[(n+t)%this._hashSize],-1===l||l===e[l]);t++);l=n[l];let g,y=l;for(;g=e[y],!Ia(f,s,t[2*y],t[2*y+1],t[2*g],t[2*g+1]);)if(y=g,y===l){y=-1;break}if(-1===y)continue;let v=this._addTriangle(y,c,e[y],-1,-1,r[y]);r[c]=this._legalize(v+2),r[y]=v,A++;let _=e[y];for(;g=e[_],Ia(f,s,t[2*_],t[2*_+1],t[2*g],t[2*g+1]);)v=this._addTriangle(_,c,g,r[c],-1,r[_]),r[c]=this._legalize(v+2),e[_]=_,A--,_=g;if(y===l)for(;g=n[y],Ia(f,s,t[2*g],t[2*g+1],t[2*y],t[2*y+1]);)v=this._addTriangle(g,c,y,-1,r[y],r[g]),this._legalize(v+2),r[g]=v,e[y]=y,A--,y=g;this._hullStart=n[c]=y,e[y]=n[_]=c,e[c]=_,i[this._hashKey(f,s)]=c,i[this._hashKey(t[2*y],t[2*y+1])]=y}this.hull=new Uint32Array(A);for(let t=0,n=this._hullStart;t<A;t++)this.hull[t]=n,n=e[n];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,n){return Math.floor(function(t,n){const e=t/(Math.abs(t)+Math.abs(n));return(n>0?3-e:1+e)/4}(t-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:n,_halfedges:e,coords:r}=this;let i=0,o=0;for(;;){const a=e[t],u=t-t%3;if(o=u+(t+2)%3,-1===a){if(0===i)break;t=Ra[--i];continue}const c=a-a%3,f=u+(t+1)%3,s=c+(a+2)%3,l=n[o],h=n[t],d=n[f],p=n[s];if(Ba(r[2*l],r[2*l+1],r[2*h],r[2*h+1],r[2*d],r[2*d+1],r[2*p],r[2*p+1])){n[t]=p,n[a]=l;const r=e[s];if(-1===r){let n=this._hullStart;do{if(this._hullTri[n]===s){this._hullTri[n]=t;break}n=this._hullPrev[n]}while(n!==this._hullStart)}this._link(t,r),this._link(a,e[o]),this._link(o,s);const u=c+(a+1)%3;i<Ra.length&&(Ra[i++]=u)}else{if(0===i)break;t=Ra[--i]}}return o}_link(t,n){this._halfedges[t]=n,-1!==n&&(this._halfedges[n]=t)}_addTriangle(t,n,e,r,i,o){const a=this.trianglesLen;return this._triangles[a]=t,this._triangles[a+1]=n,this._triangles[a+2]=e,this._link(a,r),this._link(a+1,i),this._link(a+2,o),this.trianglesLen+=3,a}}function Oa(t,n,e,r){const i=t-e,o=n-r;return i*i+o*o}function Ua(t,n,e,r,i,o){const a=(r-n)*(i-t),u=(e-t)*(o-n);return Math.abs(a-u)>=33306690738754716e-32*Math.abs(a+u)?a-u:0}function Ia(t,n,e,r,i,o){return(Ua(i,o,t,n,e,r)||Ua(t,n,e,r,i,o)||Ua(e,r,i,o,t,n))<0}function Ba(t,n,e,r,i,o,a,u){const c=t-a,f=n-u,s=e-a,l=r-u,h=i-a,d=o-u,p=s*s+l*l,g=h*h+d*d;return c*(l*g-p*d)-f*(s*g-p*h)+(c*c+f*f)*(s*d-l*h)<0}function Ya(t,n,e,r,i,o){const a=e-t,u=r-n,c=i-t,f=o-n,s=a*a+u*u,l=c*c+f*f,h=.5/(a*f-u*c),d=(f*s-u*l)*h,p=(a*l-c*s)*h;return d*d+p*p}function La(t,n,e,r){if(r-e<=20)for(let i=e+1;i<=r;i++){const r=t[i],o=n[r];let a=i-1;for(;a>=e&&n[t[a]]>o;)t[a+1]=t[a--];t[a+1]=r}else{let i=e+1,o=r;ja(t,e+r>>1,i),n[t[e]]>n[t[r]]&&ja(t,e,r),n[t[i]]>n[t[r]]&&ja(t,i,r),n[t[e]]>n[t[i]]&&ja(t,e,i);const a=t[i],u=n[a];for(;;){do{i++}while(n[t[i]]<u);do{o--}while(n[t[o]]>u);if(o<i)break;ja(t,i,o)}t[e+1]=t[o],t[o]=a,r-i+1>=o-e?(La(t,n,i,r),La(t,n,e,o-1)):(La(t,n,e,o-1),La(t,n,i,r))}}function ja(t,n,e){const r=t[n];t[n]=t[e],t[e]=r}function Ha(t){return t[0]}function Xa(t){return t[1]}const Ga=1e-6;class Va{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(t,n){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(t,n){this._+=`L${this._x1=+t},${this._y1=+n}`}arc(t,n,e){const r=(t=+t)+(e=+e),i=n=+n;if(e<0)throw new Error("negative radius");null===this._x1?this._+=`M${r},${i}`:(Math.abs(this._x1-r)>Ga||Math.abs(this._y1-i)>Ga)&&(this._+="L"+r+","+i),e&&(this._+=`A${e},${e},0,1,1,${t-e},${n}A${e},${e},0,1,1,${this._x1=r},${this._y1=i}`)}rect(t,n,e,r){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${+e}v${+r}h${-e}Z`}value(){return this._||null}}class $a{constructor(){this._=[]}moveTo(t,n){this._.push([t,n])}closePath(){this._.push(this._[0].slice())}lineTo(t,n){this._.push([t,n])}value(){return this._.length?this._:null}}class Wa{constructor(t,[n,e,r,i]=[0,0,960,500]){if(!((r=+r)>=(n=+n)&&(i=+i)>=(e=+e)))throw new Error("invalid bounds");this.delaunay=t,this._circumcenters=new Float64Array(2*t.points.length),this.vectors=new Float64Array(2*t.points.length),this.xmax=r,this.xmin=n,this.ymax=i,this.ymin=e,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:t,hull:n,triangles:e},vectors:r}=this,i=this.circumcenters=this._circumcenters.subarray(0,e.length/3*2);for(let n,r,o=0,a=0,u=e.length;o<u;o+=3,a+=2){const u=2*e[o],c=2*e[o+1],f=2*e[o+2],s=t[u],l=t[u+1],h=t[c],d=t[c+1],p=t[f],g=t[f+1],y=h-s,v=d-l,_=p-s,b=g-l,m=y*y+v*v,x=_*_+b*b,w=2*(y*b-v*_);if(w)if(Math.abs(w)<1e-8)n=(s+p)/2,r=(l+g)/2;else{const t=1/w;n=s+(b*m-v*x)*t,r=l+(y*x-_*m)*t}else n=(s+p)/2-1e8*b,r=(l+g)/2+1e8*_;i[a]=n,i[a+1]=r}let o,a,u,c=n[n.length-1],f=4*c,s=t[2*c],l=t[2*c+1];r.fill(0);for(let e=0;e<n.length;++e)c=n[e],o=f,a=s,u=l,f=4*c,s=t[2*c],l=t[2*c+1],r[o+2]=r[f]=u-l,r[o+3]=r[f+1]=s-a}render(t){const n=null==t?t=new Va:void 0,{delaunay:{halfedges:e,inedges:r,hull:i},circumcenters:o,vectors:a}=this;if(i.length<=1)return null;for(let n=0,r=e.length;n<r;++n){const r=e[n];if(r<n)continue;const i=2*Math.floor(n/3),a=2*Math.floor(r/3),u=o[i],c=o[i+1],f=o[a],s=o[a+1];this._renderSegment(u,c,f,s,t)}let u,c=i[i.length-1];for(let n=0;n<i.length;++n){u=c,c=i[n];const e=2*Math.floor(r[c]/3),f=o[e],s=o[e+1],l=4*u,h=this._project(f,s,a[l+2],a[l+3]);h&&this._renderSegment(f,s,h[0],h[1],t)}return n&&n.value()}renderBounds(t){const n=null==t?t=new Va:void 0;return t.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),n&&n.value()}renderCell(t,n){const e=null==n?n=new Va:void 0,r=this._clip(t);if(null===r||!r.length)return;n.moveTo(r[0],r[1]);let i=r.length;for(;r[0]===r[i-2]&&r[1]===r[i-1]&&i>1;)i-=2;for(let t=2;t<i;t+=2)r[t]===r[t-2]&&r[t+1]===r[t-1]||n.lineTo(r[t],r[t+1]);return n.closePath(),e&&e.value()}*cellPolygons(){const{delaunay:{points:t}}=this;for(let n=0,e=t.length/2;n<e;++n){const t=this.cellPolygon(n);t&&(t.index=n,yield t)}}cellPolygon(t){const n=new $a;return this.renderCell(t,n),n.value()}_renderSegment(t,n,e,r,i){let o;const a=this._regioncode(t,n),u=this._regioncode(e,r);0===a&&0===u?(i.moveTo(t,n),i.lineTo(e,r)):(o=this._clipSegment(t,n,e,r,a,u))&&(i.moveTo(o[0],o[1]),i.lineTo(o[2],o[3]))}contains(t,n,e){return(n=+n)==n&&(e=+e)==e&&this.delaunay._step(t,n,e)===t}*neighbors(t){const n=this._clip(t);if(n)for(const e of this.delaunay.neighbors(t)){const t=this._clip(e);if(t)t:for(let r=0,i=n.length;r<i;r+=2)for(let o=0,a=t.length;o<a;o+=2)if(n[r]==t[o]&&n[r+1]==t[o+1]&&n[(r+2)%i]==t[(o+a-2)%a]&&n[(r+3)%i]==t[(o+a-1)%a]){yield e;break t}}}_cell(t){const{circumcenters:n,delaunay:{inedges:e,halfedges:r,triangles:i}}=this,o=e[t];if(-1===o)return null;const a=[];let u=o;do{const e=Math.floor(u/3);if(a.push(n[2*e],n[2*e+1]),u=u%3==2?u-2:u+1,i[u]!==t)break;u=r[u]}while(u!==o&&-1!==u);return a}_clip(t){if(0===t&&1===this.delaunay.hull.length)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const n=this._cell(t);if(null===n)return null;const{vectors:e}=this,r=4*t;return e[r]||e[r+1]?this._clipInfinite(t,n,e[r],e[r+1],e[r+2],e[r+3]):this._clipFinite(t,n)}_clipFinite(t,n){const e=n.length;let r,i,o,a,u,c=null,f=n[e-2],s=n[e-1],l=this._regioncode(f,s);for(let h=0;h<e;h+=2)if(r=f,i=s,f=n[h],s=n[h+1],o=l,l=this._regioncode(f,s),0===o&&0===l)a=u,u=0,c?c.push(f,s):c=[f,s];else{let n,e,h,d,p;if(0===o){if(null===(n=this._clipSegment(r,i,f,s,o,l)))continue;[e,h,d,p]=n}else{if(null===(n=this._clipSegment(f,s,r,i,l,o)))continue;[d,p,e,h]=n,a=u,u=this._edgecode(e,h),a&&u&&this._edge(t,a,u,c,c.length),c?c.push(e,h):c=[e,h]}a=u,u=this._edgecode(d,p),a&&u&&this._edge(t,a,u,c,c.length),c?c.push(d,p):c=[d,p]}if(c)a=u,u=this._edgecode(c[0],c[1]),a&&u&&this._edge(t,a,u,c,c.length);else if(this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return c}_clipSegment(t,n,e,r,i,o){for(;;){if(0===i&&0===o)return[t,n,e,r];if(i&o)return null;let a,u,c=i||o;8&c?(a=t+(e-t)*(this.ymax-n)/(r-n),u=this.ymax):4&c?(a=t+(e-t)*(this.ymin-n)/(r-n),u=this.ymin):2&c?(u=n+(r-n)*(this.xmax-t)/(e-t),a=this.xmax):(u=n+(r-n)*(this.xmin-t)/(e-t),a=this.xmin),i?(t=a,n=u,i=this._regioncode(t,n)):(e=a,r=u,o=this._regioncode(e,r))}}_clipInfinite(t,n,e,r,i,o){let a,u=Array.from(n);if((a=this._project(u[0],u[1],e,r))&&u.unshift(a[0],a[1]),(a=this._project(u[u.length-2],u[u.length-1],i,o))&&u.push(a[0],a[1]),u=this._clipFinite(t,u))for(let n,e=0,r=u.length,i=this._edgecode(u[r-2],u[r-1]);e<r;e+=2)n=i,i=this._edgecode(u[e],u[e+1]),n&&i&&(e=this._edge(t,n,i,u,e),r=u.length);else this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(u=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return u}_edge(t,n,e,r,i){for(;n!==e;){let e,o;switch(n){case 5:n=4;continue;case 4:n=6,e=this.xmax,o=this.ymin;break;case 6:n=2;continue;case 2:n=10,e=this.xmax,o=this.ymax;break;case 10:n=8;continue;case 8:n=9,e=this.xmin,o=this.ymax;break;case 9:n=1;continue;case 1:n=5,e=this.xmin,o=this.ymin}r[i]===e&&r[i+1]===o||!this.contains(t,e,o)||(r.splice(i,0,e,o),i+=2)}if(r.length>4)for(let t=0;t<r.length;t+=2){const n=(t+2)%r.length,e=(t+4)%r.length;(r[t]===r[n]&&r[n]===r[e]||r[t+1]===r[n+1]&&r[n+1]===r[e+1])&&(r.splice(n,2),t-=2)}return i}_project(t,n,e,r){let i,o,a,u=1/0;if(r<0){if(n<=this.ymin)return null;(i=(this.ymin-n)/r)<u&&(a=this.ymin,o=t+(u=i)*e)}else if(r>0){if(n>=this.ymax)return null;(i=(this.ymax-n)/r)<u&&(a=this.ymax,o=t+(u=i)*e)}if(e>0){if(t>=this.xmax)return null;(i=(this.xmax-t)/e)<u&&(o=this.xmax,a=n+(u=i)*r)}else if(e<0){if(t<=this.xmin)return null;(i=(this.xmin-t)/e)<u&&(o=this.xmin,a=n+(u=i)*r)}return[o,a]}_edgecode(t,n){return(t===this.xmin?1:t===this.xmax?2:0)|(n===this.ymin?4:n===this.ymax?8:0)}_regioncode(t,n){return(t<this.xmin?1:t>this.xmax?2:0)|(n<this.ymin?4:n>this.ymax?8:0)}}const Za=2*Math.PI,Ka=Math.pow;function Qa(t){return t[0]}function Ja(t){return t[1]}function tu(t,n,e){return[t+Math.sin(t+n)*e,n+Math.cos(t-n)*e]}class nu{static from(t,n=Qa,e=Ja,r){return new nu("length"in t?function(t,n,e,r){const i=t.length,o=new Float64Array(2*i);for(let a=0;a<i;++a){const i=t[a];o[2*a]=n.call(r,i,a,t),o[2*a+1]=e.call(r,i,a,t)}return o}(t,n,e,r):Float64Array.from(function*(t,n,e,r){let i=0;for(const o of t)yield n.call(r,o,i,t),yield e.call(r,o,i,t),++i}(t,n,e,r)))}constructor(t){this._delaunator=new Fa(t),this.inedges=new Int32Array(t.length/2),this._hullIndex=new Int32Array(t.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const t=this._delaunator,n=this.points;if(t.hull&&t.hull.length>2&&function(t){const{triangles:n,coords:e}=t;for(let t=0;t<n.length;t+=3){const r=2*n[t],i=2*n[t+1],o=2*n[t+2];if((e[o]-e[r])*(e[i+1]-e[r+1])-(e[i]-e[r])*(e[o+1]-e[r+1])>1e-10)return!1}return!0}(t)){this.collinear=Int32Array.from({length:n.length/2},((t,n)=>n)).sort(((t,e)=>n[2*t]-n[2*e]||n[2*t+1]-n[2*e+1]));const t=this.collinear[0],e=this.collinear[this.collinear.length-1],r=[n[2*t],n[2*t+1],n[2*e],n[2*e+1]],i=1e-8*Math.hypot(r[3]-r[1],r[2]-r[0]);for(let t=0,e=n.length/2;t<e;++t){const e=tu(n[2*t],n[2*t+1],i);n[2*t]=e[0],n[2*t+1]=e[1]}this._delaunator=new Fa(n)}else delete this.collinear;const e=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,i=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1);for(let t=0,n=e.length;t<n;++t){const n=i[t%3==2?t-2:t+1];-1!==e[t]&&-1!==o[n]||(o[n]=t)}for(let t=0,n=r.length;t<n;++t)a[r[t]]=t;r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],this.triangles[1]=r[1],this.triangles[2]=r[1],o[r[0]]=1,2===r.length&&(o[r[1]]=0))}voronoi(t){return new Wa(this,t)}*neighbors(t){const{inedges:n,hull:e,_hullIndex:r,halfedges:i,triangles:o,collinear:a}=this;if(a){const n=a.indexOf(t);return n>0&&(yield a[n-1]),void(n<a.length-1&&(yield a[n+1]))}const u=n[t];if(-1===u)return;let c=u,f=-1;do{if(yield f=o[c],c=c%3==2?c-2:c+1,o[c]!==t)return;if(c=i[c],-1===c){const n=e[(r[t]+1)%e.length];return void(n!==f&&(yield n))}}while(c!==u)}find(t,n,e=0){if((t=+t)!=t||(n=+n)!=n)return-1;const r=e;let i;for(;(i=this._step(e,t,n))>=0&&i!==e&&i!==r;)e=i;return i}_step(t,n,e){const{inedges:r,hull:i,_hullIndex:o,halfedges:a,triangles:u,points:c}=this;if(-1===r[t]||!c.length)return(t+1)%(c.length>>1);let f=t,s=Ka(n-c[2*t],2)+Ka(e-c[2*t+1],2);const l=r[t];let h=l;do{let r=u[h];const l=Ka(n-c[2*r],2)+Ka(e-c[2*r+1],2);if(l<s&&(s=l,f=r),h=h%3==2?h-2:h+1,u[h]!==t)break;if(h=a[h],-1===h){if(h=i[(o[t]+1)%i.length],h!==r&&Ka(n-c[2*h],2)+Ka(e-c[2*h+1],2)<s)return h;break}}while(h!==l);return f}render(t){const n=null==t?t=new Va:void 0,{points:e,halfedges:r,triangles:i}=this;for(let n=0,o=r.length;n<o;++n){const o=r[n];if(o<n)continue;const a=2*i[n],u=2*i[o];t.moveTo(e[a],e[a+1]),t.lineTo(e[u],e[u+1])}return this.renderHull(t),n&&n.value()}renderPoints(t,n=2){const e=null==t?t=new Va:void 0,{points:r}=this;for(let e=0,i=r.length;e<i;e+=2){const i=r[e],o=r[e+1];t.moveTo(i+n,o),t.arc(i,o,n,0,Za)}return e&&e.value()}renderHull(t){const n=null==t?t=new Va:void 0,{hull:e,points:r}=this,i=2*e[0],o=e.length;t.moveTo(r[i],r[i+1]);for(let n=1;n<o;++n){const i=2*e[n];t.lineTo(r[i],r[i+1])}return t.closePath(),n&&n.value()}hullPolygon(){const t=new $a;return this.renderHull(t),t.value()}renderTriangle(t,n){const e=null==n?n=new Va:void 0,{points:r,triangles:i}=this,o=2*i[t*=3],a=2*i[t+1],u=2*i[t+2];return n.moveTo(r[o],r[o+1]),n.lineTo(r[a],r[a+1]),n.lineTo(r[u],r[u+1]),n.closePath(),e&&e.value()}*trianglePolygons(){const{triangles:t}=this;for(let n=0,e=t.length/3;n<e;++n)yield this.trianglePolygon(n)}trianglePolygon(t){const n=new $a;return this.renderTriangle(t,n),n.value()}}var eu={},ru={};function iu(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function ou(t){var n=Object.create(null),e=[];return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function au(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function uu(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+au(-t,6):t>9999?"+"+au(t,6):au(t,4)}(t.getUTCFullYear())+"-"+au(t.getUTCMonth()+1,2)+"-"+au(t.getUTCDate(),2)+(i?"T"+au(n,2)+":"+au(e,2)+":"+au(r,2)+"."+au(i,3)+"Z":r?"T"+au(n,2)+":"+au(e,2)+":"+au(r,2)+"Z":e||n?"T"+au(n,2)+":"+au(e,2)+"Z":"")}function cu(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],o=t.length,a=0,u=0,c=o<=0,f=!1;function s(){if(c)return ru;if(f)return f=!1,eu;var n,r,i=a;if(34===t.charCodeAt(i)){for(;a++<o&&34!==t.charCodeAt(a)||34===t.charCodeAt(++a););return(n=a)>=o?c=!0:10===(r=t.charCodeAt(a++))?f=!0:13===r&&(f=!0,10===t.charCodeAt(a)&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if(10===(r=t.charCodeAt(n=a++)))f=!0;else if(13===r)f=!0,10===t.charCodeAt(a)&&++a;else if(r!==e)continue;return t.slice(i,n)}return c=!0,t.slice(i,o)}for(10===t.charCodeAt(o-1)&&--o,13===t.charCodeAt(o-1)&&--o;(r=s())!==ru;){for(var l=[];r!==eu&&r!==ru;)l.push(r),r=s();n&&null==(l=n(l,u++))||i.push(l)}return i}function i(n,e){return n.map((function(n){return e.map((function(t){return a(n[t])})).join(t)}))}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?uu(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,(function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=iu(t);return function(r,i){return n(e(r),i,t)}}(t,n):iu(t)}));return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=ou(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=ou(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:a}}var fu=cu(","),su=fu.parse,lu=fu.parseRows,hu=fu.format,du=fu.formatBody,pu=fu.formatRows,gu=fu.formatRow,yu=fu.formatValue,vu=cu("\t"),_u=vu.parse,bu=vu.parseRows,mu=vu.format,xu=vu.formatBody,wu=vu.formatRows,Mu=vu.formatRow,Au=vu.formatValue;const Tu=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function Su(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function Eu(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function ku(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function Nu(t,n){return fetch(t,n).then(ku)}function Cu(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),Nu(n,e).then((function(n){return t(n,r)}))}}var Pu=Cu(su),zu=Cu(_u);function Du(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);if(204!==t.status&&205!==t.status)return t.json()}function qu(t){return(n,e)=>Nu(n,e).then((n=>(new DOMParser).parseFromString(n,t)))}var Ru=qu("application/xml"),Fu=qu("text/html"),Ou=qu("image/svg+xml");function Uu(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,c,f,s,l,h,d=t._root,p={data:r},g=t._x0,y=t._y0,v=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((f=n>=(o=(g+v)/2))?g=o:v=o,(s=e>=(a=(y+_)/2))?y=a:_=a,i=d,!(d=d[l=s<<1|f]))return i[l]=p,t;if(u=+t._x.call(null,d.data),c=+t._y.call(null,d.data),n===u&&e===c)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(f=n>=(o=(g+v)/2))?g=o:v=o,(s=e>=(a=(y+_)/2))?y=a:_=a}while((l=s<<1|f)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function Iu(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function Bu(t){return t[0]}function Yu(t){return t[1]}function Lu(t,n,e){var r=new ju(null==n?Bu:n,null==e?Yu:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function ju(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Hu(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var Xu=Lu.prototype=ju.prototype;function Gu(t){return function(){return t}}function Vu(t){return 1e-6*(t()-.5)}function $u(t){return t.x+t.vx}function Wu(t){return t.y+t.vy}function Zu(t){return t.index}function Ku(t,n){var e=t.get(n);if(!e)throw new Error("node not found: "+n);return e}Xu.copy=function(){var t,n,e=new ju(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Hu(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Hu(n));return e},Xu.add=function(t){const n=+this._x.call(null,t),e=+this._y.call(null,t);return Uu(this.cover(n,e),n,e,t)},Xu.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),c=1/0,f=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<c&&(c=r),r>s&&(s=r),i<f&&(f=i),i>l&&(l=i));if(c>s||f>l)return this;for(this.cover(c,f).cover(s,l),e=0;e<o;++e)Uu(this,a[e],u[e],t[e]);return this},Xu.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,c=i-e||1,f=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=f,f=a,c*=2,u){case 0:i=e+c,o=r+c;break;case 1:e=i-c,o=r+c;break;case 2:i=e+c,r=o-c;break;case 3:e=i-c,r=o-c}this._root&&this._root.length&&(this._root=f)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Xu.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},Xu.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},Xu.find=function(t,n,e){var r,i,o,a,u,c,f,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],g=this._root;for(g&&p.push(new Iu(g,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);c=p.pop();)if(!(!(g=c.node)||(i=c.x0)>h||(o=c.y0)>d||(a=c.x1)<s||(u=c.y1)<l))if(g.length){var y=(i+a)/2,v=(o+u)/2;p.push(new Iu(g[3],y,v,a,u),new Iu(g[2],i,v,y,u),new Iu(g[1],y,o,a,v),new Iu(g[0],i,o,y,v)),(f=(n>=v)<<1|t>=y)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-f],p[p.length-1-f]=c)}else{var _=t-+this._x.call(null,g.data),b=n-+this._y.call(null,g.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=g.data}}return r},Xu.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,c,f,s,l,h,d=this._root,p=this._x0,g=this._y0,y=this._x1,v=this._y1;if(!d)return this;if(d.length)for(;;){if((f=o>=(u=(p+y)/2))?p=u:y=u,(s=a>=(c=(g+v)/2))?g=c:v=c,n=d,!(d=d[l=s<<1|f]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},Xu.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},Xu.root=function(){return this._root},Xu.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},Xu.visit=function(t){var n,e,r,i,o,a,u=[],c=this._root;for(c&&u.push(new Iu(c,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&c.length){var f=(r+o)/2,s=(i+a)/2;(e=c[3])&&u.push(new Iu(e,f,s,o,a)),(e=c[2])&&u.push(new Iu(e,r,s,f,a)),(e=c[1])&&u.push(new Iu(e,f,i,o,s)),(e=c[0])&&u.push(new Iu(e,r,i,f,s))}return this},Xu.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new Iu(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,c=n.x1,f=n.y1,s=(a+c)/2,l=(u+f)/2;(o=i[0])&&e.push(new Iu(o,a,u,s,l)),(o=i[1])&&e.push(new Iu(o,s,u,c,l)),(o=i[2])&&e.push(new Iu(o,a,l,s,f)),(o=i[3])&&e.push(new Iu(o,s,l,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},Xu.x=function(t){return arguments.length?(this._x=t,this):this._x},Xu.y=function(t){return arguments.length?(this._y=t,this):this._y};const Qu=4294967296;function Ju(t){return t.x}function tc(t){return t.y}var nc=Math.PI*(3-Math.sqrt(5));function ec(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function rc(t){return(t=ec(Math.abs(t)))?t[1]:NaN}var ic,oc=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ac(t){if(!(n=oc.exec(t)))throw new Error("invalid format: "+t);var n;return new uc({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function uc(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function cc(t,n){var e=ec(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}ac.prototype=uc.prototype,uc.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var fc={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>cc(100*t,n),r:cc,s:function(t,n){var e=ec(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(ic=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+ec(t,Math.max(0,n+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function sc(t){return t}var lc,hc=Array.prototype.map,dc=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function pc(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?sc:(n=hc.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),o.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?sc:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(hc.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",f=void 0===t.minus?"−":t.minus+"",s=void 0===t.nan?"NaN":t.nan+"";function l(t){var n=(t=ac(t)).fill,e=t.align,l=t.sign,h=t.symbol,d=t.zero,p=t.width,g=t.comma,y=t.precision,v=t.trim,_=t.type;"n"===_?(g=!0,_="g"):fc[_]||(void 0===y&&(y=12),v=!0,_="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=");var b="$"===h?i:"#"===h&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",m="$"===h?o:/[%p]/.test(_)?c:"",x=fc[_],w=/[defgprs%]/.test(_);function M(t){var i,o,c,h=b,M=m;if("c"===_)M=x(t)+M,t="";else{var A=(t=+t)<0||1/t<0;if(t=isNaN(t)?s:x(Math.abs(t),y),v&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),A&&0==+t&&"+"!==l&&(A=!1),h=(A?"("===l?l:f:"-"===l||"("===l?"":l)+h,M=("s"===_?dc[8+ic/3]:"")+M+(A&&"("===l?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(c=t.charCodeAt(i))||c>57){M=(46===c?a+t.slice(i+1):t.slice(i))+M,t=t.slice(0,i);break}}g&&!d&&(t=r(t,1/0));var T=h.length+t.length+M.length,S=T<p?new Array(p-T+1).join(n):"";switch(g&&d&&(t=r(S+t,S.length?p-M.length:1/0),S=""),e){case"<":t=h+t+M+S;break;case"=":t=h+S+t+M;break;case"^":t=S.slice(0,T=S.length>>1)+h+t+M+S.slice(T);break;default:t=S+h+t+M}return u(t)}return y=void 0===y?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y)),M.toString=function(){return t+""},M}return{format:l,formatPrefix:function(t,n){var e=l(((t=ac(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(rc(n)/3))),i=Math.pow(10,-r),o=dc[8+r/3];return function(t){return e(i*t)+o}}}}function gc(n){return lc=pc(n),t.format=lc.format,t.formatPrefix=lc.formatPrefix,lc}function yc(t){return Math.max(0,-rc(Math.abs(t)))}function vc(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(rc(n)/3)))-rc(Math.abs(t)))}function _c(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,rc(n)-rc(t))+1}gc({thousands:",",grouping:[3],currency:["$",""]});var bc=1e-6,mc=1e-12,xc=Math.PI,wc=xc/2,Mc=xc/4,Ac=2*xc,Tc=180/xc,Sc=xc/180,Ec=Math.abs,kc=Math.atan,Nc=Math.atan2,Cc=Math.cos,Pc=Math.ceil,zc=Math.exp,Dc=Math.hypot,qc=Math.log,Rc=Math.pow,Fc=Math.sin,Oc=Math.sign||function(t){return t>0?1:t<0?-1:0},Uc=Math.sqrt,Ic=Math.tan;function Bc(t){return t>1?0:t<-1?xc:Math.acos(t)}function Yc(t){return t>1?wc:t<-1?-wc:Math.asin(t)}function Lc(t){return(t=Fc(t/2))*t}function jc(){}function Hc(t,n){t&&Gc.hasOwnProperty(t.type)&&Gc[t.type](t,n)}var Xc={Feature:function(t,n){Hc(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)Hc(e[r].geometry,n)}},Gc={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){Vc(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Vc(e[r],n,0)},Polygon:function(t,n){$c(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)$c(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)Hc(e[r],n)}};function Vc(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function $c(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)Vc(t[e],n,1);n.polygonEnd()}function Wc(t,n){t&&Xc.hasOwnProperty(t.type)?Xc[t.type](t,n):Hc(t,n)}var Zc,Kc,Qc,Jc,tf,nf,ef,rf,of,af,uf,cf,ff,sf,lf,hf,df=new g,pf=new g,gf={point:jc,lineStart:jc,lineEnd:jc,polygonStart:function(){df=new g,gf.lineStart=yf,gf.lineEnd=vf},polygonEnd:function(){var t=+df;pf.add(t<0?Ac+t:t),this.lineStart=this.lineEnd=this.point=jc},sphere:function(){pf.add(Ac)}};function yf(){gf.point=_f}function vf(){bf(Zc,Kc)}function _f(t,n){gf.point=bf,Zc=t,Kc=n,Qc=t*=Sc,Jc=Cc(n=(n*=Sc)/2+Mc),tf=Fc(n)}function bf(t,n){var e=(t*=Sc)-Qc,r=e>=0?1:-1,i=r*e,o=Cc(n=(n*=Sc)/2+Mc),a=Fc(n),u=tf*a,c=Jc*o+u*Cc(i),f=u*r*Fc(i);df.add(Nc(f,c)),Qc=t,Jc=o,tf=a}function mf(t){return[Nc(t[1],t[0]),Yc(t[2])]}function xf(t){var n=t[0],e=t[1],r=Cc(e);return[r*Cc(n),r*Fc(n),Fc(e)]}function wf(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Mf(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Af(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Tf(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Sf(t){var n=Uc(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}var Ef,kf,Nf,Cf,Pf,zf,Df,qf,Rf,Ff,Of,Uf,If,Bf,Yf,Lf,jf={point:Hf,lineStart:Gf,lineEnd:Vf,polygonStart:function(){jf.point=$f,jf.lineStart=Wf,jf.lineEnd=Zf,sf=new g,gf.polygonStart()},polygonEnd:function(){gf.polygonEnd(),jf.point=Hf,jf.lineStart=Gf,jf.lineEnd=Vf,df<0?(nf=-(rf=180),ef=-(of=90)):sf>bc?of=90:sf<-1e-6&&(ef=-90),hf[0]=nf,hf[1]=rf},sphere:function(){nf=-(rf=180),ef=-(of=90)}};function Hf(t,n){lf.push(hf=[nf=t,rf=t]),n<ef&&(ef=n),n>of&&(of=n)}function Xf(t,n){var e=xf([t*Sc,n*Sc]);if(ff){var r=Mf(ff,e),i=Mf([r[1],-r[0],0],r);Sf(i),i=mf(i);var o,a=t-af,u=a>0?1:-1,c=i[0]*Tc*u,f=Ec(a)>180;f^(u*af<c&&c<u*t)?(o=i[1]*Tc)>of&&(of=o):f^(u*af<(c=(c+360)%360-180)&&c<u*t)?(o=-i[1]*Tc)<ef&&(ef=o):(n<ef&&(ef=n),n>of&&(of=n)),f?t<af?Kf(nf,t)>Kf(nf,rf)&&(rf=t):Kf(t,rf)>Kf(nf,rf)&&(nf=t):rf>=nf?(t<nf&&(nf=t),t>rf&&(rf=t)):t>af?Kf(nf,t)>Kf(nf,rf)&&(rf=t):Kf(t,rf)>Kf(nf,rf)&&(nf=t)}else lf.push(hf=[nf=t,rf=t]);n<ef&&(ef=n),n>of&&(of=n),ff=e,af=t}function Gf(){jf.point=Xf}function Vf(){hf[0]=nf,hf[1]=rf,jf.point=Hf,ff=null}function $f(t,n){if(ff){var e=t-af;sf.add(Ec(e)>180?e+(e>0?360:-360):e)}else uf=t,cf=n;gf.point(t,n),Xf(t,n)}function Wf(){gf.lineStart()}function Zf(){$f(uf,cf),gf.lineEnd(),Ec(sf)>bc&&(nf=-(rf=180)),hf[0]=nf,hf[1]=rf,ff=null}function Kf(t,n){return(n-=t)<0?n+360:n}function Qf(t,n){return t[0]-n[0]}function Jf(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var ts={sphere:jc,point:ns,lineStart:rs,lineEnd:as,polygonStart:function(){ts.lineStart=us,ts.lineEnd=cs},polygonEnd:function(){ts.lineStart=rs,ts.lineEnd=as}};function ns(t,n){t*=Sc;var e=Cc(n*=Sc);es(e*Cc(t),e*Fc(t),Fc(n))}function es(t,n,e){++Ef,Nf+=(t-Nf)/Ef,Cf+=(n-Cf)/Ef,Pf+=(e-Pf)/Ef}function rs(){ts.point=is}function is(t,n){t*=Sc;var e=Cc(n*=Sc);Bf=e*Cc(t),Yf=e*Fc(t),Lf=Fc(n),ts.point=os,es(Bf,Yf,Lf)}function os(t,n){t*=Sc;var e=Cc(n*=Sc),r=e*Cc(t),i=e*Fc(t),o=Fc(n),a=Nc(Uc((a=Yf*o-Lf*i)*a+(a=Lf*r-Bf*o)*a+(a=Bf*i-Yf*r)*a),Bf*r+Yf*i+Lf*o);kf+=a,zf+=a*(Bf+(Bf=r)),Df+=a*(Yf+(Yf=i)),qf+=a*(Lf+(Lf=o)),es(Bf,Yf,Lf)}function as(){ts.point=ns}function us(){ts.point=fs}function cs(){ss(Uf,If),ts.point=ns}function fs(t,n){Uf=t,If=n,t*=Sc,n*=Sc,ts.point=ss;var e=Cc(n);Bf=e*Cc(t),Yf=e*Fc(t),Lf=Fc(n),es(Bf,Yf,Lf)}function ss(t,n){t*=Sc;var e=Cc(n*=Sc),r=e*Cc(t),i=e*Fc(t),o=Fc(n),a=Yf*o-Lf*i,u=Lf*r-Bf*o,c=Bf*i-Yf*r,f=Dc(a,u,c),s=Yc(f),l=f&&-s/f;Rf.add(l*a),Ff.add(l*u),Of.add(l*c),kf+=s,zf+=s*(Bf+(Bf=r)),Df+=s*(Yf+(Yf=i)),qf+=s*(Lf+(Lf=o)),es(Bf,Yf,Lf)}function ls(t){return function(){return t}}function hs(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function ds(t,n){return[Ec(t)>xc?t+Math.round(-t/Ac)*Ac:t,n]}function ps(t,n,e){return(t%=Ac)?n||e?hs(ys(t),vs(n,e)):ys(t):n||e?vs(n,e):ds}function gs(t){return function(n,e){return[(n+=t)>xc?n-Ac:n<-xc?n+Ac:n,e]}}function ys(t){var n=gs(t);return n.invert=gs(-t),n}function vs(t,n){var e=Cc(t),r=Fc(t),i=Cc(n),o=Fc(n);function a(t,n){var a=Cc(n),u=Cc(t)*a,c=Fc(t)*a,f=Fc(n),s=f*e+u*r;return[Nc(c*i-s*o,u*e-f*r),Yc(s*i+c*o)]}return a.invert=function(t,n){var a=Cc(n),u=Cc(t)*a,c=Fc(t)*a,f=Fc(n),s=f*i-c*o;return[Nc(c*i+f*o,u*e+s*r),Yc(s*e-u*r)]},a}function _s(t){function n(n){return(n=t(n[0]*Sc,n[1]*Sc))[0]*=Tc,n[1]*=Tc,n}return t=ps(t[0]*Sc,t[1]*Sc,t.length>2?t[2]*Sc:0),n.invert=function(n){return(n=t.invert(n[0]*Sc,n[1]*Sc))[0]*=Tc,n[1]*=Tc,n},n}function bs(t,n,e,r,i,o){if(e){var a=Cc(n),u=Fc(n),c=r*e;null==i?(i=n+r*Ac,o=n-c/2):(i=ms(a,i),o=ms(a,o),(r>0?i<o:i>o)&&(i+=r*Ac));for(var f,s=i;r>0?s>o:s<o;s-=c)f=mf([a,-u*Cc(s),-u*Fc(s)]),t.point(f[0],f[1])}}function ms(t,n){(n=xf(n))[0]-=t,Sf(n);var e=Bc(-n[1]);return((-n[2]<0?-e:e)+Ac-bc)%Ac}function xs(){var t,n=[];return{point:function(n,e,r){t.push([n,e,r])},lineStart:function(){n.push(t=[])},lineEnd:jc,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function ws(t,n){return Ec(t[0]-n[0])<bc&&Ec(t[1]-n[1])<bc}function Ms(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function As(t,n,e,r,i){var o,a,u=[],c=[];if(t.forEach((function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(ws(r,a)){if(!r[2]&&!a[2]){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}a[0]+=2e-6}u.push(e=new Ms(r,t,null,!0)),c.push(e.o=new Ms(r,null,e,!1)),u.push(e=new Ms(a,t,null,!1)),c.push(e.o=new Ms(a,null,e,!0))}})),u.length){for(c.sort(n),Ts(u),Ts(c),o=0,a=c.length;o<a;++o)c[o].e=e=!e;for(var f,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;f=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=f.length;o<a;++o)i.point((s=f[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(f=h.p.z,o=f.length-1;o>=0;--o)i.point((s=f[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}f=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function Ts(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function Ss(t){return Ec(t[0])<=xc?t[0]:Oc(t[0])*((Ec(t[0])+xc)%Ac-xc)}function Es(t,n){var e=Ss(n),r=n[1],i=Fc(r),o=[Fc(e),-Cc(e),0],a=0,u=0,c=new g;1===i?r=wc+bc:-1===i&&(r=-wc-bc);for(var f=0,s=t.length;f<s;++f)if(h=(l=t[f]).length)for(var l,h,d=l[h-1],p=Ss(d),y=d[1]/2+Mc,v=Fc(y),_=Cc(y),b=0;b<h;++b,p=x,v=M,_=A,d=m){var m=l[b],x=Ss(m),w=m[1]/2+Mc,M=Fc(w),A=Cc(w),T=x-p,S=T>=0?1:-1,E=S*T,k=E>xc,N=v*M;if(c.add(Nc(N*S*Fc(E),_*A+N*Cc(E))),a+=k?T+S*Ac:T,k^p>=e^x>=e){var C=Mf(xf(d),xf(m));Sf(C);var P=Mf(o,C);Sf(P);var z=(k^T>=0?-1:1)*Yc(P[2]);(r>z||r===z&&(C[0]||C[1]))&&(u+=k^T>=0?1:-1)}}return(a<-1e-6||a<bc&&c<-1e-12)^1&u}function ks(t,n,e,r){return function(i){var o,a,u,c=n(i),f=xs(),s=n(f),l=!1,h={point:d,lineStart:g,lineEnd:y,polygonStart:function(){h.point=v,h.lineStart=_,h.lineEnd=b,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=g,h.lineEnd=y,a=V(a);var t=Es(o,r);a.length?(l||(i.polygonStart(),l=!0),As(a,Cs,t,e,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){c.point(t,n)}function g(){h.point=p,c.lineStart()}function y(){h.point=d,c.lineEnd()}function v(t,n){u.push([t,n]),s.point(t,n)}function _(){s.lineStart(),u=[]}function b(){v(u[0][0],u[0][1]),s.lineEnd();var t,n,e,r,c=s.clean(),h=f.result(),d=h.length;if(u.pop(),o.push(u),u=null,d)if(1&c){if((n=(e=h[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else d>1&&2&c&&h.push(h.pop().concat(h.shift())),a.push(h.filter(Ns))}return h}}function Ns(t){return t.length>1}function Cs(t,n){return((t=t.x)[0]<0?t[1]-wc-bc:wc-t[1])-((n=n.x)[0]<0?n[1]-wc-bc:wc-n[1])}ds.invert=ds;var Ps=ks((function(){return!0}),(function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?xc:-xc,c=Ec(o-e);Ec(c-xc)<bc?(t.point(e,r=(r+a)/2>0?wc:-wc),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&c>=xc&&(Ec(e-i)<bc&&(e-=i*bc),Ec(o-u)<bc&&(o-=u*bc),r=function(t,n,e,r){var i,o,a=Fc(t-e);return Ec(a)>bc?kc((Fc(n)*(o=Cc(r))*Fc(e)-Fc(r)*(i=Cc(n))*Fc(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}),(function(t,n,e,r){var i;if(null==t)i=e*wc,r.point(-xc,i),r.point(0,i),r.point(xc,i),r.point(xc,0),r.point(xc,-i),r.point(0,-i),r.point(-xc,-i),r.point(-xc,0),r.point(-xc,i);else if(Ec(t[0]-n[0])>bc){var o=t[0]<n[0]?xc:-xc;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}),[-xc,-wc]);function zs(t){var n=Cc(t),e=6*Sc,r=n>0,i=Ec(n)>bc;function o(t,e){return Cc(t)*Cc(e)>n}function a(t,e,r){var i=[1,0,0],o=Mf(xf(t),xf(e)),a=wf(o,o),u=o[0],c=a-u*u;if(!c)return!r&&t;var f=n*a/c,s=-n*u/c,l=Mf(i,o),h=Tf(i,f);Af(h,Tf(o,s));var d=l,p=wf(h,d),g=wf(d,d),y=p*p-g*(wf(h,h)-1);if(!(y<0)){var v=Uc(y),_=Tf(d,(-p-v)/g);if(Af(_,h),_=mf(_),!r)return _;var b,m=t[0],x=e[0],w=t[1],M=e[1];x<m&&(b=m,m=x,x=b);var A=x-m,T=Ec(A-xc)<bc;if(!T&&M<w&&(b=w,w=M,M=b),T||A<bc?T?w+M>0^_[1]<(Ec(_[0]-m)<bc?w:M):w<=_[1]&&_[1]<=M:A>xc^(m<=_[0]&&_[0]<=x)){var S=Tf(d,(-p+v)/g);return Af(S,h),[_,mf(S)]}}}function u(n,e){var i=r?t:xc-t,o=0;return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return ks(o,(function(t){var n,e,c,f,s;return{lineStart:function(){f=c=!1,s=1},point:function(l,h){var d,p=[l,h],g=o(l,h),y=r?g?0:u(l,h):g?u(l+(l<0?xc:-xc),h):0;if(!n&&(f=c=g)&&t.lineStart(),g!==c&&(!(d=a(n,p))||ws(n,d)||ws(p,d))&&(p[2]=1),g!==c)s=0,g?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1],2),t.lineEnd()),n=d;else if(i&&n&&r^g){var v;y&e||!(v=a(p,n,!0))||(s=0,r?(t.lineStart(),t.point(v[0][0],v[0][1]),t.point(v[1][0],v[1][1]),t.lineEnd()):(t.point(v[1][0],v[1][1]),t.lineEnd(),t.lineStart(),t.point(v[0][0],v[0][1],3)))}!g||n&&ws(n,p)||t.point(p[0],p[1]),n=p,c=g,e=y},lineEnd:function(){c&&t.lineEnd(),n=null},clean:function(){return s|(f&&c)<<1}}}),(function(n,r,i,o){bs(o,t,e,i,n,r)}),r?[0,-t]:[-xc,t-xc])}var Ds,qs,Rs,Fs,Os=1e9,Us=-Os;function Is(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,f){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||c(i,o)<0^u>0)do{f.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else f.point(o[0],o[1])}function a(r,i){return Ec(r[0]-t)<bc?i>0?0:3:Ec(r[0]-e)<bc?i>0?2:1:Ec(r[1]-n)<bc?i>0?1:0:i>0?3:2}function u(t,n){return c(t.x,n.x)}function c(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var c,f,s,l,h,d,p,g,y,v,_,b=a,m=xs(),x={point:w,lineStart:function(){x.point=M,f&&f.push(s=[]);v=!0,y=!1,p=g=NaN},lineEnd:function(){c&&(M(l,h),d&&y&&m.rejoin(),c.push(m.result()));x.point=w,y&&b.lineEnd()},polygonStart:function(){b=m,c=[],f=[],_=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=f.length;e<i;++e)for(var o,a,u=f[e],c=1,s=u.length,l=u[0],h=l[0],d=l[1];c<s;++c)o=h,a=d,h=(l=u[c])[0],d=l[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=_&&n,i=(c=V(c)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&As(c,u,n,o,a),a.polygonEnd());b=a,c=f=s=null}};function w(t,n){i(t,n)&&b.point(t,n)}function M(o,a){var u=i(o,a);if(f&&s.push([o,a]),v)l=o,h=a,d=u,v=!1,u&&(b.lineStart(),b.point(o,a));else if(u&&y)b.point(o,a);else{var c=[p=Math.max(Us,Math.min(Os,p)),g=Math.max(Us,Math.min(Os,g))],m=[o=Math.max(Us,Math.min(Os,o)),a=Math.max(Us,Math.min(Os,a))];!function(t,n,e,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=n[0]-u,h=n[1]-c;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(n[0]=u+s*l,n[1]=c+s*h),!0}}}}}(c,m,t,n,e,r)?u&&(b.lineStart(),b.point(o,a),_=!1):(y||(b.lineStart(),b.point(c[0],c[1])),b.point(m[0],m[1]),u||b.lineEnd(),_=!1)}p=o,g=a,y=u}return x}}var Bs={sphere:jc,point:jc,lineStart:function(){Bs.point=Ls,Bs.lineEnd=Ys},lineEnd:jc,polygonStart:jc,polygonEnd:jc};function Ys(){Bs.point=Bs.lineEnd=jc}function Ls(t,n){qs=t*=Sc,Rs=Fc(n*=Sc),Fs=Cc(n),Bs.point=js}function js(t,n){t*=Sc;var e=Fc(n*=Sc),r=Cc(n),i=Ec(t-qs),o=Cc(i),a=r*Fc(i),u=Fs*e-Rs*r*o,c=Rs*e+Fs*r*o;Ds.add(Nc(Uc(a*a+u*u),c)),qs=t,Rs=e,Fs=r}function Hs(t){return Ds=new g,Wc(t,Bs),+Ds}var Xs=[null,null],Gs={type:"LineString",coordinates:Xs};function Vs(t,n){return Xs[0]=t,Xs[1]=n,Hs(Gs)}var $s={Feature:function(t,n){return Zs(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(Zs(e[r].geometry,n))return!0;return!1}},Ws={Sphere:function(){return!0},Point:function(t,n){return Ks(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ks(e[r],n))return!0;return!1},LineString:function(t,n){return Qs(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Qs(e[r],n))return!0;return!1},Polygon:function(t,n){return Js(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Js(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(Zs(e[r],n))return!0;return!1}};function Zs(t,n){return!(!t||!Ws.hasOwnProperty(t.type))&&Ws[t.type](t,n)}function Ks(t,n){return 0===Vs(t,n)}function Qs(t,n){for(var e,r,i,o=0,a=t.length;o<a;o++){if(0===(r=Vs(t[o],n)))return!0;if(o>0&&(i=Vs(t[o],t[o-1]))>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<mc*i)return!0;e=r}return!1}function Js(t,n){return!!Es(t.map(tl),nl(n))}function tl(t){return(t=t.map(nl)).pop(),t}function nl(t){return[t[0]*Sc,t[1]*Sc]}function el(t,n,e){var r=Z(t,n-bc,e).concat(n);return function(t){return r.map((function(n){return[t,n]}))}}function rl(t,n,e){var r=Z(t,n-bc,e).concat(n);return function(t){return r.map((function(n){return[n,t]}))}}function il(){var t,n,e,r,i,o,a,u,c,f,s,l,h=10,d=h,p=90,g=360,y=2.5;function v(){return{type:"MultiLineString",coordinates:_()}}function _(){return Z(Pc(r/p)*p,e,p).map(s).concat(Z(Pc(u/g)*g,a,g).map(l)).concat(Z(Pc(n/h)*h,t,h).filter((function(t){return Ec(t%p)>bc})).map(c)).concat(Z(Pc(o/d)*d,i,d).filter((function(t){return Ec(t%g)>bc})).map(f))}return v.lines=function(){return _().map((function(t){return{type:"LineString",coordinates:t}}))},v.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(l(a).slice(1),s(e).reverse().slice(1),l(u).reverse().slice(1))]}},v.extent=function(t){return arguments.length?v.extentMajor(t).extentMinor(t):v.extentMinor()},v.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),v.precision(y)):[[r,u],[e,a]]},v.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),v.precision(y)):[[n,o],[t,i]]},v.step=function(t){return arguments.length?v.stepMajor(t).stepMinor(t):v.stepMinor()},v.stepMajor=function(t){return arguments.length?(p=+t[0],g=+t[1],v):[p,g]},v.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],v):[h,d]},v.precision=function(h){return arguments.length?(y=+h,c=el(o,i,90),f=rl(n,t,y),s=el(u,a,90),l=rl(r,e,y),v):y},v.extentMajor([[-180,-89.999999],[180,89.999999]]).extentMinor([[-180,-80.000001],[180,80.000001]])}var ol,al,ul,cl,fl=t=>t,sl=new g,ll=new g,hl={point:jc,lineStart:jc,lineEnd:jc,polygonStart:function(){hl.lineStart=dl,hl.lineEnd=yl},polygonEnd:function(){hl.lineStart=hl.lineEnd=hl.point=jc,sl.add(Ec(ll)),ll=new g},result:function(){var t=sl/2;return sl=new g,t}};function dl(){hl.point=pl}function pl(t,n){hl.point=gl,ol=ul=t,al=cl=n}function gl(t,n){ll.add(cl*t-ul*n),ul=t,cl=n}function yl(){gl(ol,al)}var vl=1/0,_l=vl,bl=-vl,ml=bl,xl={point:function(t,n){t<vl&&(vl=t);t>bl&&(bl=t);n<_l&&(_l=n);n>ml&&(ml=n)},lineStart:jc,lineEnd:jc,polygonStart:jc,polygonEnd:jc,result:function(){var t=[[vl,_l],[bl,ml]];return bl=ml=-(_l=vl=1/0),t}};var wl,Ml,Al,Tl,Sl=0,El=0,kl=0,Nl=0,Cl=0,Pl=0,zl=0,Dl=0,ql=0,Rl={point:Fl,lineStart:Ol,lineEnd:Bl,polygonStart:function(){Rl.lineStart=Yl,Rl.lineEnd=Ll},polygonEnd:function(){Rl.point=Fl,Rl.lineStart=Ol,Rl.lineEnd=Bl},result:function(){var t=ql?[zl/ql,Dl/ql]:Pl?[Nl/Pl,Cl/Pl]:kl?[Sl/kl,El/kl]:[NaN,NaN];return Sl=El=kl=Nl=Cl=Pl=zl=Dl=ql=0,t}};function Fl(t,n){Sl+=t,El+=n,++kl}function Ol(){Rl.point=Ul}function Ul(t,n){Rl.point=Il,Fl(Al=t,Tl=n)}function Il(t,n){var e=t-Al,r=n-Tl,i=Uc(e*e+r*r);Nl+=i*(Al+t)/2,Cl+=i*(Tl+n)/2,Pl+=i,Fl(Al=t,Tl=n)}function Bl(){Rl.point=Fl}function Yl(){Rl.point=jl}function Ll(){Hl(wl,Ml)}function jl(t,n){Rl.point=Hl,Fl(wl=Al=t,Ml=Tl=n)}function Hl(t,n){var e=t-Al,r=n-Tl,i=Uc(e*e+r*r);Nl+=i*(Al+t)/2,Cl+=i*(Tl+n)/2,Pl+=i,zl+=(i=Tl*t-Al*n)*(Al+t),Dl+=i*(Tl+n),ql+=3*i,Fl(Al=t,Tl=n)}function Xl(t){this._context=t}Xl.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,Ac)}},result:jc};var Gl,Vl,$l,Wl,Zl,Kl=new g,Ql={point:jc,lineStart:function(){Ql.point=Jl},lineEnd:function(){Gl&&th(Vl,$l),Ql.point=jc},polygonStart:function(){Gl=!0},polygonEnd:function(){Gl=null},result:function(){var t=+Kl;return Kl=new g,t}};function Jl(t,n){Ql.point=th,Vl=Wl=t,$l=Zl=n}function th(t,n){Wl-=t,Zl-=n,Kl.add(Uc(Wl*Wl+Zl*Zl)),Wl=t,Zl=n}function nh(){this._string=[]}function eh(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function rh(t){return function(n){var e=new ih;for(var r in t)e[r]=t[r];return e.stream=n,e}}function ih(){}function oh(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Wc(e,t.stream(xl)),n(xl.result()),null!=r&&t.clipExtent(r),t}function ah(t,n,e){return oh(t,(function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])}),e)}function uh(t,n,e){return ah(t,[[0,0],n],e)}function ch(t,n,e){return oh(t,(function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])}),e)}function fh(t,n,e){return oh(t,(function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])}),e)}nh.prototype={_radius:4.5,_circle:eh(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=eh(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},ih.prototype={constructor:ih,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var sh=Cc(30*Sc);function lh(t,n){return+n?function(t,n){function e(r,i,o,a,u,c,f,s,l,h,d,p,g,y){var v=f-r,_=s-i,b=v*v+_*_;if(b>4*n&&g--){var m=a+h,x=u+d,w=c+p,M=Uc(m*m+x*x+w*w),A=Yc(w/=M),T=Ec(Ec(w)-1)<bc||Ec(o-l)<bc?(o+l)/2:Nc(x,m),S=t(T,A),E=S[0],k=S[1],N=E-r,C=k-i,P=_*N-v*C;(P*P/b>n||Ec((v*N+_*C)/b-.5)>.3||a*h+u*d+c*p<sh)&&(e(r,i,o,a,u,c,E,k,T,m/=M,x/=M,w,g,y),y.point(E,k),e(E,k,T,m,x,w,f,s,l,h,d,p,g,y))}}return function(n){var r,i,o,a,u,c,f,s,l,h,d,p,g={point:y,lineStart:v,lineEnd:b,polygonStart:function(){n.polygonStart(),g.lineStart=m},polygonEnd:function(){n.polygonEnd(),g.lineStart=v}};function y(e,r){e=t(e,r),n.point(e[0],e[1])}function v(){s=NaN,g.point=_,n.lineStart()}function _(r,i){var o=xf([r,i]),a=t(r,i);e(s,l,f,h,d,p,s=a[0],l=a[1],f=r,h=o[0],d=o[1],p=o[2],16,n),n.point(s,l)}function b(){g.point=y,n.lineEnd()}function m(){v(),g.point=x,g.lineEnd=w}function x(t,n){_(r=t,n),i=s,o=l,a=h,u=d,c=p,g.point=_}function w(){e(s,l,f,h,d,p,i,o,r,a,u,c,16,n),g.lineEnd=b,b()}return g}}(t,n):function(t){return rh({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var hh=rh({point:function(t,n){this.stream.point(t*Sc,n*Sc)}});function dh(t,n,e,r,i,o){if(!o)return function(t,n,e,r,i){function o(o,a){return[n+t*(o*=r),e-t*(a*=i)]}return o.invert=function(o,a){return[(o-n)/t*r,(e-a)/t*i]},o}(t,n,e,r,i);var a=Cc(o),u=Fc(o),c=a*t,f=u*t,s=a/t,l=u/t,h=(u*e-a*n)/t,d=(u*n+a*e)/t;function p(t,o){return[c*(t*=r)-f*(o*=i)+n,e-f*t-c*o]}return p.invert=function(t,n){return[r*(s*t-l*n+h),i*(d-l*t-s*n)]},p}function ph(t){return gh((function(){return t}))()}function gh(t){var n,e,r,i,o,a,u,c,f,s,l=150,h=480,d=250,p=0,g=0,y=0,v=0,_=0,b=0,m=1,x=1,w=null,M=Ps,A=null,T=fl,S=.5;function E(t){return c(t[0]*Sc,t[1]*Sc)}function k(t){return(t=c.invert(t[0],t[1]))&&[t[0]*Tc,t[1]*Tc]}function N(){var t=dh(l,0,0,m,x,b).apply(null,n(p,g)),r=dh(l,h-t[0],d-t[1],m,x,b);return e=ps(y,v,_),u=hs(n,r),c=hs(e,u),a=lh(u,S),C()}function C(){return f=s=null,E}return E.stream=function(t){return f&&s===t?f:f=hh(function(t){return rh({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(M(a(T(s=t)))))},E.preclip=function(t){return arguments.length?(M=t,w=void 0,C()):M},E.postclip=function(t){return arguments.length?(T=t,A=r=i=o=null,C()):T},E.clipAngle=function(t){return arguments.length?(M=+t?zs(w=t*Sc):(w=null,Ps),C()):w*Tc},E.clipExtent=function(t){return arguments.length?(T=null==t?(A=r=i=o=null,fl):Is(A=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),C()):null==A?null:[[A,r],[i,o]]},E.scale=function(t){return arguments.length?(l=+t,N()):l},E.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],N()):[h,d]},E.center=function(t){return arguments.length?(p=t[0]%360*Sc,g=t[1]%360*Sc,N()):[p*Tc,g*Tc]},E.rotate=function(t){return arguments.length?(y=t[0]%360*Sc,v=t[1]%360*Sc,_=t.length>2?t[2]%360*Sc:0,N()):[y*Tc,v*Tc,_*Tc]},E.angle=function(t){return arguments.length?(b=t%360*Sc,N()):b*Tc},E.reflectX=function(t){return arguments.length?(m=t?-1:1,N()):m<0},E.reflectY=function(t){return arguments.length?(x=t?-1:1,N()):x<0},E.precision=function(t){return arguments.length?(a=lh(u,S=t*t),C()):Uc(S)},E.fitExtent=function(t,n){return ah(E,t,n)},E.fitSize=function(t,n){return uh(E,t,n)},E.fitWidth=function(t,n){return ch(E,t,n)},E.fitHeight=function(t,n){return fh(E,t,n)},function(){return n=t.apply(this,arguments),E.invert=n.invert&&k,N()}}function yh(t){var n=0,e=xc/3,r=gh(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*Sc,e=t[1]*Sc):[n*Tc,e*Tc]},i}function vh(t,n){var e=Fc(t),r=(e+Fc(n))/2;if(Ec(r)<bc)return function(t){var n=Cc(t);function e(t,e){return[t*n,Fc(e)/n]}return e.invert=function(t,e){return[t/n,Yc(e*n)]},e}(t);var i=1+e*(2*r-e),o=Uc(i)/r;function a(t,n){var e=Uc(i-2*r*Fc(n))/r;return[e*Fc(t*=r),o-e*Cc(t)]}return a.invert=function(t,n){var e=o-n,a=Nc(t,Ec(e))*Oc(e);return e*r<0&&(a-=xc*Oc(t)*Oc(e)),[a/r,Yc((i-(t*t+e*e)*r*r)/(2*r))]},a}function _h(){return yh(vh).scale(155.424).center([0,33.6442])}function bh(){return _h().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function mh(t){return function(n,e){var r=Cc(n),i=Cc(e),o=t(r*i);return o===1/0?[2,0]:[o*i*Fc(n),o*Fc(e)]}}function xh(t){return function(n,e){var r=Uc(n*n+e*e),i=t(r),o=Fc(i),a=Cc(i);return[Nc(n*o,r*a),Yc(r&&e*o/r)]}}var wh=mh((function(t){return Uc(2/(1+t))}));wh.invert=xh((function(t){return 2*Yc(t/2)}));var Mh=mh((function(t){return(t=Bc(t))&&t/Fc(t)}));function Ah(t,n){return[t,qc(Ic((wc+n)/2))]}function Th(t){var n,e,r,i=ph(t),o=i.center,a=i.scale,u=i.translate,c=i.clipExtent,f=null;function s(){var o=xc*a(),u=i(_s(i.rotate()).invert([0,0]));return c(null==f?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===Ah?[[Math.max(u[0]-o,f),n],[Math.min(u[0]+o,e),r]]:[[f,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),s()):a()},i.translate=function(t){return arguments.length?(u(t),s()):u()},i.center=function(t){return arguments.length?(o(t),s()):o()},i.clipExtent=function(t){return arguments.length?(null==t?f=n=e=r=null:(f=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),s()):null==f?null:[[f,n],[e,r]]},s()}function Sh(t){return Ic((wc+t)/2)}function Eh(t,n){var e=Cc(t),r=t===n?Fc(t):qc(e/Cc(n))/qc(Sh(n)/Sh(t)),i=e*Rc(Sh(t),r)/r;if(!r)return Ah;function o(t,n){i>0?n<-wc+bc&&(n=-wc+bc):n>wc-bc&&(n=wc-bc);var e=i/Rc(Sh(n),r);return[e*Fc(r*t),i-e*Cc(r*t)]}return o.invert=function(t,n){var e=i-n,o=Oc(r)*Uc(t*t+e*e),a=Nc(t,Ec(e))*Oc(e);return e*r<0&&(a-=xc*Oc(t)*Oc(e)),[a/r,2*kc(Rc(i/o,1/r))-wc]},o}function kh(t,n){return[t,n]}function Nh(t,n){var e=Cc(t),r=t===n?Fc(t):(e-Cc(n))/(n-t),i=e/r+t;if(Ec(r)<bc)return kh;function o(t,n){var e=i-n,o=r*t;return[e*Fc(o),i-e*Cc(o)]}return o.invert=function(t,n){var e=i-n,o=Nc(t,Ec(e))*Oc(e);return e*r<0&&(o-=xc*Oc(t)*Oc(e)),[o/r,i-Oc(r)*Uc(t*t+e*e)]},o}Mh.invert=xh((function(t){return t})),Ah.invert=function(t,n){return[t,2*kc(zc(n))-wc]},kh.invert=kh;var Ch=1.340264,Ph=-.081106,zh=893e-6,Dh=.003796,qh=Uc(3)/2;function Rh(t,n){var e=Yc(qh*Fc(n)),r=e*e,i=r*r*r;return[t*Cc(e)/(qh*(Ch+3*Ph*r+i*(7*zh+9*Dh*r))),e*(Ch+Ph*r+i*(zh+Dh*r))]}function Fh(t,n){var e=Cc(n),r=Cc(t)*e;return[e*Fc(t)/r,Fc(n)/r]}function Oh(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function Uh(t,n){return[Cc(n)*Fc(t),Fc(n)]}function Ih(t,n){var e=Cc(n),r=1+Cc(t)*e;return[e*Fc(t)/r,Fc(n)/r]}function Bh(t,n){return[qc(Ic((wc+n)/2)),-t]}function Yh(t,n){return t.parent===n.parent?1:2}function Lh(t,n){return t+n.x}function jh(t,n){return Math.max(t,n.y)}function Hh(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function Xh(t,n){t instanceof Map?(t=[void 0,t],void 0===n&&(n=Vh)):void 0===n&&(n=Gh);for(var e,r,i,o,a,u=new Zh(t),c=[u];e=c.pop();)if((i=n(e.data))&&(a=(i=Array.from(i)).length))for(e.children=i,o=a-1;o>=0;--o)c.push(r=i[o]=new Zh(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(Wh)}function Gh(t){return t.children}function Vh(t){return Array.isArray(t)?t[1]:null}function $h(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function Wh(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Zh(t){this.data=t,this.depth=this.height=0,this.parent=null}function Kh(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(Array.from(t))).length,o=[];r<i;)n=t[r],e&&td(e,n)?++r:(e=ed(o=Qh(o,n)),r=0);return e}function Qh(t,n){var e,r;if(nd(n,t))return[n];for(e=0;e<t.length;++e)if(Jh(n,t[e])&&nd(rd(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(Jh(rd(t[e],t[r]),n)&&Jh(rd(t[e],n),t[r])&&Jh(rd(t[r],n),t[e])&&nd(id(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function Jh(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function td(t,n){var e=t.r-n.r+1e-9*Math.max(t.r,n.r,1),r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function nd(t,n){for(var e=0;e<n.length;++e)if(!td(t,n[e]))return!1;return!0}function ed(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return rd(t[0],t[1]);case 3:return id(t[0],t[1],t[2])}}function rd(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,c=o-e,f=a-r,s=u-i,l=Math.sqrt(c*c+f*f);return{x:(e+o+c/l*s)/2,y:(r+a+f/l*s)/2,r:(l+i+u)/2}}function id(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,c=n.r,f=e.x,s=e.y,l=e.r,h=r-a,d=r-f,p=i-u,g=i-s,y=c-o,v=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+c*c,m=_-f*f-s*s+l*l,x=d*p-h*g,w=(p*m-g*b)/(2*x)-r,M=(g*y-p*v)/x,A=(d*b-h*m)/(2*x)-i,T=(h*v-d*y)/x,S=M*M+T*T-1,E=2*(o+w*M+A*T),k=w*w+A*A-o*o,N=-(S?(E+Math.sqrt(E*E-4*S*k))/(2*S):k/E);return{x:r+w+M*N,y:i+A+T*N,r:N}}function od(t,n,e){var r,i,o,a,u=t.x-n.x,c=t.y-n.y,f=u*u+c*c;f?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(f+a-i)/(2*f),o=Math.sqrt(Math.max(0,a/f-r*r)),e.x=t.x-r*u-o*c,e.y=t.y-r*c+o*u):(r=(f+i-a)/(2*f),o=Math.sqrt(Math.max(0,i/f-r*r)),e.x=n.x+r*u-o*c,e.y=n.y+r*c+o*u)):(e.x=n.x+e.r,e.y=n.y)}function ad(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function ud(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function cd(t){this._=t,this.next=null,this.previous=null}function fd(t){if(!(i=(t=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(t)).length))return 0;var n,e,r,i,o,a,u,c,f,s,l;if((n=t[0]).x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;od(e,n,r=t[2]),n=new cd(n),e=new cd(e),r=new cd(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){od(n._,e._,r=t[u]),r=new cd(r),c=e.next,f=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(ad(c._,r._)){e=c,n.next=e,e.previous=n,--u;continue t}s+=c._.r,c=c.next}else{if(ad(f._,r._)){(n=f).next=e,e.previous=n,--u;continue t}l+=f._.r,f=f.previous}}while(c!==f.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=ud(n);(r=r.next)!==e;)(a=ud(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=Kh(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y;return r.r}function sd(t){return null==t?null:ld(t)}function ld(t){if("function"!=typeof t)throw new Error;return t}function hd(){return 0}function dd(t){return function(){return t}}function pd(t){return Math.sqrt(t.value)}function gd(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function yd(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=fd(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function vd(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function _d(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function bd(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*f}Rh.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(Ch+Ph*i+o*(zh+Dh*i))-n)/(Ch+3*Ph*i+o*(7*zh+9*Dh*i)))*r)*i*i,!(Ec(e)<mc));++a);return[qh*t*(Ch+3*Ph*i+o*(7*zh+9*Dh*i))/Cc(r),Yc(Fc(r)/qh)]},Fh.invert=xh(kc),Oh.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(Ec(e)>bc&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},Uh.invert=xh(Yc),Ih.invert=xh((function(t){return 2*kc(t)})),Bh.invert=function(t,n){return[-n,2*kc(zc(t))-wc]},Zh.prototype=Xh.prototype={constructor:Zh,count:function(){return this.eachAfter(Hh)},each:function(t,n){let e=-1;for(const r of this)t.call(n,r,++e,this);return this},eachAfter:function(t,n){for(var e,r,i,o=this,a=[o],u=[],c=-1;o=a.pop();)if(u.push(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r]);for(;o=u.pop();)t.call(n,o,++c,this);return this},eachBefore:function(t,n){for(var e,r,i=this,o=[i],a=-1;i=o.pop();)if(t.call(n,i,++a,this),e=i.children)for(r=e.length-1;r>=0;--r)o.push(e[r]);return this},find:function(t,n){let e=-1;for(const r of this)if(t.call(n,r,++e,this))return r},sum:function(t){return this.eachAfter((function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e}))},sort:function(t){return this.eachBefore((function(n){n.children&&n.children.sort(t)}))},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;t=e.pop(),n=r.pop();for(;t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(n){n.children||t.push(n)})),t},links:function(){var t=this,n=[];return t.each((function(e){e!==t&&n.push({source:e.parent,target:e})})),n},copy:function(){return Xh(this).eachBefore($h)},[Symbol.iterator]:function*(){var t,n,e,r,i=this,o=[i];do{for(t=o.reverse(),o=[];i=t.pop();)if(yield i,n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e])}while(o.length)}};var md={depth:-1},xd={};function wd(t){return t.id}function Md(t){return t.parentId}function Ad(t,n){return t.parent===n.parent?1:2}function Td(t){var n=t.children;return n?n[0]:t.t}function Sd(t){var n=t.children;return n?n[n.length-1]:t.t}function Ed(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function kd(t,n,e){return t.a.parent===n.parent?t.a:e}function Nd(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function Cd(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(i-e)/t.value;++u<c;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*f}Nd.prototype=Object.create(Zh.prototype);var Pd=(1+Math.sqrt(5))/2;function zd(t,n,e,r,i,o){for(var a,u,c,f,s,l,h,d,p,g,y,v=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){c=i-e,f=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,y=s*s*(g=Math.max(f/c,c/f)/(w*t)),p=Math.max(h/y,y/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),y=s*s*g,(d=Math.max(h/y,y/l))>p){s-=u;break}p=d}v.push(a={value:s,dice:c<f,children:_.slice(b,m)}),a.dice?bd(a,e,r,i,w?r+=f*s/w:o):Cd(a,e,r,w?e+=c*s/w:i,o),w-=s,b=m}return v}var Dd=function t(n){function e(t,e,r,i,o){zd(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Pd);var qd=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,c,f,s,l=-1,h=a.length,d=t.value;++l<h;){for(c=(u=a[l]).children,f=u.value=0,s=c.length;f<s;++f)u.value+=c[f].value;u.dice?bd(u,e,r,i,d?r+=(o-r)*u.value/d:o):Cd(u,e,r,d?e+=(i-e)*u.value/d:i,o),d-=u.value}else t._squarify=a=zd(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Pd);function Rd(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function Fd(t,n){return t[0]-n[0]||t[1]-n[1]}function Od(t){const n=t.length,e=[0,1];let r,i=2;for(r=2;r<n;++r){for(;i>1&&Rd(t[e[i-2]],t[e[i-1]],t[r])<=0;)--i;e[i++]=r}return e.slice(0,i)}var Ud=Math.random,Id=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(Ud),Bd=function t(n){function e(t,e){return arguments.length<2&&(e=t,t=0),t=Math.floor(t),e=Math.floor(e)-t,function(){return Math.floor(n()*e+t)}}return e.source=t,e}(Ud),Yd=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(Ud),Ld=function t(n){var e=Yd.source(n);function r(){var t=e.apply(this,arguments);return function(){return Math.exp(t())}}return r.source=t,r}(Ud),jd=function t(n){function e(t){return(t=+t)<=0?()=>0:function(){for(var e=0,r=t;r>1;--r)e+=n();return e+r*n()}}return e.source=t,e}(Ud),Hd=function t(n){var e=jd.source(n);function r(t){if(0==(t=+t))return n;var r=e(t);return function(){return r()/t}}return r.source=t,r}(Ud),Xd=function t(n){function e(t){return function(){return-Math.log1p(-n())/t}}return e.source=t,e}(Ud),Gd=function t(n){function e(t){if((t=+t)<0)throw new RangeError("invalid alpha");return t=1/-t,function(){return Math.pow(1-n(),t)}}return e.source=t,e}(Ud),Vd=function t(n){function e(t){if((t=+t)<0||t>1)throw new RangeError("invalid p");return function(){return Math.floor(n()+t)}}return e.source=t,e}(Ud),$d=function t(n){function e(t){if((t=+t)<0||t>1)throw new RangeError("invalid p");return 0===t?()=>1/0:1===t?()=>1:(t=Math.log1p(-t),function(){return 1+Math.floor(Math.log1p(-n())/t)})}return e.source=t,e}(Ud),Wd=function t(n){var e=Yd.source(n)();function r(t,r){if((t=+t)<0)throw new RangeError("invalid k");if(0===t)return()=>0;if(r=null==r?1:+r,1===t)return()=>-Math.log1p(-n())*r;var i=(t<1?t+1:t)-1/3,o=1/(3*Math.sqrt(i)),a=t<1?()=>Math.pow(n(),1/t):()=>1;return function(){do{do{var t=e(),u=1+o*t}while(u<=0);u*=u*u;var c=1-n()}while(c>=1-.0331*t*t*t*t&&Math.log(c)>=.5*t*t+i*(1-u+Math.log(u)));return i*u*a()*r}}return r.source=t,r}(Ud),Zd=function t(n){var e=Wd.source(n);function r(t,n){var r=e(t),i=e(n);return function(){var t=r();return 0===t?0:t/(t+i())}}return r.source=t,r}(Ud),Kd=function t(n){var e=$d.source(n),r=Zd.source(n);function i(t,n){return t=+t,(n=+n)>=1?()=>t:n<=0?()=>0:function(){for(var i=0,o=t,a=n;o*a>16&&o*(1-a)>16;){var u=Math.floor((o+1)*a),c=r(u,o-u+1)();c<=a?(i+=u,o-=u,a=(a-c)/(1-c)):(o=u-1,a/=c)}for(var f=a<.5,s=e(f?a:1-a),l=s(),h=0;l<=o;++h)l+=s();return i+(f?h:o-h)}}return i.source=t,i}(Ud),Qd=function t(n){function e(t,e,r){var i;return 0==(t=+t)?i=t=>-Math.log(t):(t=1/t,i=n=>Math.pow(n,t)),e=null==e?0:+e,r=null==r?1:+r,function(){return e+r*i(-Math.log1p(-n()))}}return e.source=t,e}(Ud),Jd=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,function(){return t+e*Math.tan(Math.PI*n())}}return e.source=t,e}(Ud),tp=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,function(){var r=n();return t+e*Math.log(r/(1-r))}}return e.source=t,e}(Ud),np=function t(n){var e=Wd.source(n),r=Kd.source(n);function i(t){return function(){for(var i=0,o=t;o>16;){var a=Math.floor(.875*o),u=e(a)();if(u>o)return i+r(a-1,o/u)();i+=a,o-=u}for(var c=-Math.log1p(-n()),f=0;c<=o;++f)c-=Math.log1p(-n());return i+f}}return i.source=t,i}(Ud);const ep=1/4294967296;function rp(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function ip(t,n){switch(arguments.length){case 0:break;case 1:"function"==typeof t?this.interpolator(t):this.range(t);break;default:this.domain(t),"function"==typeof n?this.interpolator(n):this.range(n)}return this}const op=Symbol("implicit");function ap(){var t=new Map,n=[],e=[],r=op;function i(i){var o=i+"",a=t.get(o);if(!a){if(r!==op)return r;t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new Map;for(const r of e){const e=r+"";t.has(e)||t.set(e,n.push(r))}return i},i.range=function(t){return arguments.length?(e=Array.from(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return ap(n,e).unknown(r)},rp.apply(i,arguments),i}function up(){var t,n,e=ap().unknown(void 0),r=e.domain,i=e.range,o=0,a=1,u=!1,c=0,f=0,s=.5;function l(){var e=r().length,l=a<o,h=l?a:o,d=l?o:a;t=(d-h)/Math.max(1,e-c+2*f),u&&(t=Math.floor(t)),h+=(d-h-t*(e-c))*s,n=t*(1-c),u&&(h=Math.round(h),n=Math.round(n));var p=Z(e).map((function(n){return h+t*n}));return i(l?p.reverse():p)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),l()):r()},e.range=function(t){return arguments.length?([o,a]=t,o=+o,a=+a,l()):[o,a]},e.rangeRound=function(t){return[o,a]=t,o=+o,a=+a,u=!0,l()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(u=!!t,l()):u},e.padding=function(t){return arguments.length?(c=Math.min(1,f=+t),l()):c},e.paddingInner=function(t){return arguments.length?(c=Math.min(1,t),l()):c},e.paddingOuter=function(t){return arguments.length?(f=+t,l()):f},e.align=function(t){return arguments.length?(s=Math.max(0,Math.min(1,t)),l()):s},e.copy=function(){return up(r(),[o,a]).round(u).paddingInner(c).paddingOuter(f).align(s)},rp.apply(l(),arguments)}function cp(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return cp(n())},t}function fp(t){return+t}var sp=[0,1];function lp(t){return t}function hp(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:function(t){return function(){return t}}(isNaN(n)?NaN:.5)}function dp(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=hp(i,r),o=e(a,o)):(r=hp(r,i),o=e(o,a)),function(t){return o(r(t))}}function pp(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),a=new Array(r),u=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<r;)i[u]=hp(t[u],t[u+1]),a[u]=e(n[u],n[u+1]);return function(n){var e=o(t,n,1,r)-1;return a[e](i[e](n))}}function gp(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function yp(){var t,n,e,r,i,o,a=sp,u=sp,c=Mr,f=lp;function s(){var t=Math.min(a.length,u.length);return f!==lp&&(f=function(t,n){var e;return t>n&&(e=t,t=n,n=e),function(e){return Math.max(t,Math.min(n,e))}}(a[0],a[t-1])),r=t>2?pp:dp,i=o=null,l}function l(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),u,c)))(t(f(n)))}return l.invert=function(e){return f(n((o||(o=r(u,a.map(t),_r)))(e)))},l.domain=function(t){return arguments.length?(a=Array.from(t,fp),s()):a.slice()},l.range=function(t){return arguments.length?(u=Array.from(t),s()):u.slice()},l.rangeRound=function(t){return u=Array.from(t),c=Ar,s()},l.clamp=function(t){return arguments.length?(f=!!t||lp,s()):f!==lp},l.interpolate=function(t){return arguments.length?(c=t,s()):c},l.unknown=function(t){return arguments.length?(e=t,l):e},function(e,r){return t=e,n=r,s()}}function vp(){return yp()(lp,lp)}function _p(n,e,r,i){var o,a=F(n,e,r);switch((i=ac(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=vc(a,u))||(i.precision=o),t.formatPrefix(i,u);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=_c(a,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=yc(a))||(i.precision=o-2*("%"===i.type))}return t.format(i)}function bp(t){var n=t.domain;return t.ticks=function(t){var e=n();return q(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return _p(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i,o=n(),a=0,u=o.length-1,c=o[a],f=o[u],s=10;for(f<c&&(i=c,c=f,f=i,i=a,a=u,u=i);s-- >0;){if((i=R(c,f,e))===r)return o[a]=c,o[u]=f,n(o);if(i>0)c=Math.floor(c/i)*i,f=Math.ceil(f/i)*i;else{if(!(i<0))break;c=Math.ceil(c*i)/i,f=Math.floor(f*i)/i}r=i}return t},t}function mp(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function xp(t){return Math.log(t)}function wp(t){return Math.exp(t)}function Mp(t){return-Math.log(-t)}function Ap(t){return-Math.exp(-t)}function Tp(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Sp(t){return function(n){return-t(-n)}}function Ep(n){var e,r,i=n(xp,wp),o=i.domain,a=10;function u(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(a),r=function(t){return 10===t?Tp:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(a),o()[0]<0?(e=Sp(e),r=Sp(r),n(Mp,Ap)):n(xp,wp),i}return i.base=function(t){return arguments.length?(a=+t,u()):a},i.domain=function(t){return arguments.length?(o(t),u()):o()},i.ticks=function(t){var n,i=o(),u=i[0],c=i[i.length-1];(n=c<u)&&(h=u,u=c,c=h);var f,s,l,h=e(u),d=e(c),p=null==t?10:+t,g=[];if(!(a%1)&&d-h<p){if(h=Math.floor(h),d=Math.ceil(d),u>0){for(;h<=d;++h)for(s=1,f=r(h);s<a;++s)if(!((l=f*s)<u)){if(l>c)break;g.push(l)}}else for(;h<=d;++h)for(s=a-1,f=r(h);s>=1;--s)if(!((l=f*s)<u)){if(l>c)break;g.push(l)}2*g.length<p&&(g=q(u,c,p))}else g=q(h,d,Math.min(d-h,p)).map(r);return n?g.reverse():g},i.tickFormat=function(n,o){if(null==o&&(o=10===a?".0e":","),"function"!=typeof o&&(o=t.format(o)),n===1/0)return o;null==n&&(n=10);var u=Math.max(1,a*n/i.ticks().length);return function(t){var n=t/r(Math.round(e(t)));return n*a<a-.5&&(n*=a),n<=u?o(t):""}},i.nice=function(){return o(mp(o(),{floor:function(t){return r(Math.floor(e(t)))},ceil:function(t){return r(Math.ceil(e(t)))}}))},i}function kp(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function Np(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function Cp(t){var n=1,e=t(kp(n),Np(n));return e.constant=function(e){return arguments.length?t(kp(n=+e),Np(n)):n},bp(e)}function Pp(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function zp(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function Dp(t){return t<0?-t*t:t*t}function qp(t){var n=t(lp,lp),e=1;function r(){return 1===e?t(lp,lp):.5===e?t(zp,Dp):t(Pp(e),Pp(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},bp(n)}function Rp(){var t=qp(yp());return t.copy=function(){return gp(t,Rp()).exponent(t.exponent())},rp.apply(t,arguments),t}function Fp(t){return Math.sign(t)*t*t}function Op(t){return Math.sign(t)*Math.sqrt(Math.abs(t))}var Up=new Date,Ip=new Date;function Bp(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return Bp((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(i.count=function(n,r){return Up.setTime(+n),Ip.setTime(+r),t(Up),t(Ip),Math.floor(e(Up,Ip))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var Yp=Bp((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}));Yp.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Bp((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):Yp:null};var Lp=Yp.range,jp=1e3,Hp=6e4,Xp=36e5,Gp=864e5,Vp=6048e5,$p=Bp((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*jp)}),(function(t,n){return(n-t)/jp}),(function(t){return t.getUTCSeconds()})),Wp=$p.range,Zp=Bp((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*jp)}),(function(t,n){t.setTime(+t+n*Hp)}),(function(t,n){return(n-t)/Hp}),(function(t){return t.getMinutes()})),Kp=Zp.range,Qp=Bp((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*jp-t.getMinutes()*Hp)}),(function(t,n){t.setTime(+t+n*Xp)}),(function(t,n){return(n-t)/Xp}),(function(t){return t.getHours()})),Jp=Qp.range,tg=Bp((t=>t.setHours(0,0,0,0)),((t,n)=>t.setDate(t.getDate()+n)),((t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Hp)/Gp),(t=>t.getDate()-1)),ng=tg.range;function eg(t){return Bp((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Hp)/Vp}))}var rg=eg(0),ig=eg(1),og=eg(2),ag=eg(3),ug=eg(4),cg=eg(5),fg=eg(6),sg=rg.range,lg=ig.range,hg=og.range,dg=ag.range,pg=ug.range,gg=cg.range,yg=fg.range,vg=Bp((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()})),_g=vg.range,bg=Bp((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}));bg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Bp((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null};var mg=bg.range,xg=Bp((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*Hp)}),(function(t,n){return(n-t)/Hp}),(function(t){return t.getUTCMinutes()})),wg=xg.range,Mg=Bp((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*Xp)}),(function(t,n){return(n-t)/Xp}),(function(t){return t.getUTCHours()})),Ag=Mg.range,Tg=Bp((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/Gp}),(function(t){return t.getUTCDate()-1})),Sg=Tg.range;function Eg(t){return Bp((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/Vp}))}var kg=Eg(0),Ng=Eg(1),Cg=Eg(2),Pg=Eg(3),zg=Eg(4),Dg=Eg(5),qg=Eg(6),Rg=kg.range,Fg=Ng.range,Og=Cg.range,Ug=Pg.range,Ig=zg.range,Bg=Dg.range,Yg=qg.range,Lg=Bp((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()})),jg=Lg.range,Hg=Bp((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()}));Hg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Bp((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null};var Xg=Hg.range;function Gg(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Vg(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function $g(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function Wg(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,c=t.shortMonths,f=ry(i),s=iy(i),l=ry(o),h=iy(o),d=ry(a),p=iy(a),g=ry(u),y=iy(u),v=ry(c),_=iy(c),b={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:Ty,e:Ty,f:Cy,g:Yy,G:jy,H:Sy,I:Ey,j:ky,L:Ny,m:Py,M:zy,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:hv,s:dv,S:Dy,u:qy,U:Ry,V:Oy,w:Uy,W:Iy,x:null,X:null,y:By,Y:Ly,Z:Hy,"%":lv},m={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:Xy,e:Xy,f:Zy,g:uv,G:fv,H:Gy,I:Vy,j:$y,L:Wy,m:Ky,M:Qy,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:hv,s:dv,S:Jy,u:tv,U:nv,V:rv,w:iv,W:ov,x:null,X:null,y:av,Y:cv,Z:sv,"%":lv},x={a:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=p.get(r[0].toLowerCase()),e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h.get(r[0].toLowerCase()),e+r[0].length):-1},b:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=_.get(r[0].toLowerCase()),e+r[0].length):-1},B:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.m=y.get(r[0].toLowerCase()),e+r[0].length):-1},c:function(t,e,r){return A(t,n,e,r)},d:gy,e:gy,f:xy,g:ly,G:sy,H:vy,I:vy,j:yy,L:my,m:py,M:_y,p:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.p=s.get(r[0].toLowerCase()),e+r[0].length):-1},q:dy,Q:My,s:Ay,S:by,u:ay,U:uy,V:cy,w:oy,W:fy,x:function(t,n,r){return A(t,e,n,r)},X:function(t,n,e){return A(t,r,n,e)},y:ly,Y:sy,Z:hy,"%":wy};function w(t,n){return function(e){var r,i,o,a=[],u=-1,c=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++u<f;)37===t.charCodeAt(u)&&(a.push(t.slice(c,u)),null!=(i=Kg[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),c=u+1);return a.push(t.slice(c,u)),a.join("")}}function M(t,n){return function(e){var r,i,o=$g(1900,void 0,1);if(A(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(n&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=Vg($g(o.y,0,1))).getUTCDay(),r=i>4||0===i?Ng.ceil(r):Ng(r),r=Tg.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=Gg($g(o.y,0,1))).getDay(),r=i>4||0===i?ig.ceil(r):ig(r),r=tg.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?Vg($g(o.y,0,1)).getUTCDay():Gg($g(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,Vg(o)):Gg(o)}}function A(t,n,e,r){for(var i,o,a=0,u=n.length,c=e.length;a<u;){if(r>=c)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=x[i in Kg?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),{format:function(t){var n=w(t+="",b);return n.toString=function(){return t},n},parse:function(t){var n=M(t+="",!1);return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",m);return n.toString=function(){return t},n},utcParse:function(t){var n=M(t+="",!0);return n.toString=function(){return t},n}}}var Zg,Kg={"-":"",_:" ",0:"0"},Qg=/^\s*\d+/,Jg=/^%/,ty=/[\\^$*+?|[\]().{}]/g;function ny(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function ey(t){return t.replace(ty,"\\$&")}function ry(t){return new RegExp("^(?:"+t.map(ey).join("|")+")","i")}function iy(t){return new Map(t.map(((t,n)=>[t.toLowerCase(),n])))}function oy(t,n,e){var r=Qg.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function ay(t,n,e){var r=Qg.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function uy(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function cy(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function fy(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function sy(t,n,e){var r=Qg.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function ly(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function hy(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function dy(t,n,e){var r=Qg.exec(n.slice(e,e+1));return r?(t.q=3*r[0]-3,e+r[0].length):-1}function py(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function gy(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function yy(t,n,e){var r=Qg.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function vy(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function _y(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function by(t,n,e){var r=Qg.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function my(t,n,e){var r=Qg.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function xy(t,n,e){var r=Qg.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function wy(t,n,e){var r=Jg.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function My(t,n,e){var r=Qg.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function Ay(t,n,e){var r=Qg.exec(n.slice(e));return r?(t.s=+r[0],e+r[0].length):-1}function Ty(t,n){return ny(t.getDate(),n,2)}function Sy(t,n){return ny(t.getHours(),n,2)}function Ey(t,n){return ny(t.getHours()%12||12,n,2)}function ky(t,n){return ny(1+tg.count(bg(t),t),n,3)}function Ny(t,n){return ny(t.getMilliseconds(),n,3)}function Cy(t,n){return Ny(t,n)+"000"}function Py(t,n){return ny(t.getMonth()+1,n,2)}function zy(t,n){return ny(t.getMinutes(),n,2)}function Dy(t,n){return ny(t.getSeconds(),n,2)}function qy(t){var n=t.getDay();return 0===n?7:n}function Ry(t,n){return ny(rg.count(bg(t)-1,t),n,2)}function Fy(t){var n=t.getDay();return n>=4||0===n?ug(t):ug.ceil(t)}function Oy(t,n){return t=Fy(t),ny(ug.count(bg(t),t)+(4===bg(t).getDay()),n,2)}function Uy(t){return t.getDay()}function Iy(t,n){return ny(ig.count(bg(t)-1,t),n,2)}function By(t,n){return ny(t.getFullYear()%100,n,2)}function Yy(t,n){return ny((t=Fy(t)).getFullYear()%100,n,2)}function Ly(t,n){return ny(t.getFullYear()%1e4,n,4)}function jy(t,n){var e=t.getDay();return ny((t=e>=4||0===e?ug(t):ug.ceil(t)).getFullYear()%1e4,n,4)}function Hy(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ny(n/60|0,"0",2)+ny(n%60,"0",2)}function Xy(t,n){return ny(t.getUTCDate(),n,2)}function Gy(t,n){return ny(t.getUTCHours(),n,2)}function Vy(t,n){return ny(t.getUTCHours()%12||12,n,2)}function $y(t,n){return ny(1+Tg.count(Hg(t),t),n,3)}function Wy(t,n){return ny(t.getUTCMilliseconds(),n,3)}function Zy(t,n){return Wy(t,n)+"000"}function Ky(t,n){return ny(t.getUTCMonth()+1,n,2)}function Qy(t,n){return ny(t.getUTCMinutes(),n,2)}function Jy(t,n){return ny(t.getUTCSeconds(),n,2)}function tv(t){var n=t.getUTCDay();return 0===n?7:n}function nv(t,n){return ny(kg.count(Hg(t)-1,t),n,2)}function ev(t){var n=t.getUTCDay();return n>=4||0===n?zg(t):zg.ceil(t)}function rv(t,n){return t=ev(t),ny(zg.count(Hg(t),t)+(4===Hg(t).getUTCDay()),n,2)}function iv(t){return t.getUTCDay()}function ov(t,n){return ny(Ng.count(Hg(t)-1,t),n,2)}function av(t,n){return ny(t.getUTCFullYear()%100,n,2)}function uv(t,n){return ny((t=ev(t)).getUTCFullYear()%100,n,2)}function cv(t,n){return ny(t.getUTCFullYear()%1e4,n,4)}function fv(t,n){var e=t.getUTCDay();return ny((t=e>=4||0===e?zg(t):zg.ceil(t)).getUTCFullYear()%1e4,n,4)}function sv(){return"+0000"}function lv(){return"%"}function hv(t){return+t}function dv(t){return Math.floor(+t/1e3)}function pv(n){return Zg=Wg(n),t.timeFormat=Zg.format,t.timeParse=Zg.parse,t.utcFormat=Zg.utcFormat,t.utcParse=Zg.utcParse,Zg}pv({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var gv="%Y-%m-%dT%H:%M:%S.%LZ";var yv=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat(gv);var vv=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse(gv),_v=1e3,bv=6e4,mv=36e5,xv=864e5,wv=2592e6,Mv=31536e6;function Av(t){return new Date(t)}function Tv(t){return t instanceof Date?+t:+new Date(+t)}function Sv(t,n,r,i,o,a,u,c,f){var s=vp(),l=s.invert,h=s.domain,d=f(".%L"),p=f(":%S"),g=f("%I:%M"),y=f("%I %p"),v=f("%a %d"),_=f("%b %d"),b=f("%B"),m=f("%Y"),x=[[u,1,_v],[u,5,5e3],[u,15,15e3],[u,30,3e4],[a,1,bv],[a,5,3e5],[a,15,9e5],[a,30,18e5],[o,1,mv],[o,3,108e5],[o,6,216e5],[o,12,432e5],[i,1,xv],[i,2,1728e5],[r,1,6048e5],[n,1,wv],[n,3,7776e6],[t,1,Mv]];function w(e){return(u(e)<e?d:a(e)<e?p:o(e)<e?g:i(e)<e?y:n(e)<e?r(e)<e?v:_:t(e)<e?b:m)(e)}function M(n,r,i){if(null==n&&(n=10),"number"==typeof n){var o,a=Math.abs(i-r)/n,u=e((function(t){return t[2]})).right(x,a);return u===x.length?(o=F(r/Mv,i/Mv,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(F(r,i,n),1),n=c),n.every(o)}return n}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(Array.from(t,Tv)):h().map(Av)},s.ticks=function(t){var n,e=h(),r=e[0],i=e[e.length-1],o=i<r;return o&&(n=r,r=i,i=n),n=(n=M(t,r,i))?n.range(r,i+1):[],o?n.reverse():n},s.tickFormat=function(t,n){return null==n?w:f(n)},s.nice=function(t){var n=h();return(t=M(t,n[0],n[n.length-1]))?h(mp(n,t)):s},s.copy=function(){return gp(s,Sv(t,n,r,i,o,a,u,c,f))},s}function Ev(){var t,n,e,r,i,o=0,a=1,u=lp,c=!1;function f(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,c?Math.max(0,Math.min(1,n)):n))}function s(t){return function(n){var e,r;return arguments.length?([e,r]=n,u=t(e,r),f):[u(0),u(1)]}}return f.domain=function(i){return arguments.length?([o,a]=i,t=r(o=+o),n=r(a=+a),e=t===n?0:1/(n-t),f):[o,a]},f.clamp=function(t){return arguments.length?(c=!!t,f):c},f.interpolator=function(t){return arguments.length?(u=t,f):u},f.range=s(Mr),f.rangeRound=s(Ar),f.unknown=function(t){return arguments.length?(i=t,f):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),f}}function kv(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Nv(){var t=qp(Ev());return t.copy=function(){return kv(t,Nv()).exponent(t.exponent())},ip.apply(t,arguments)}function Cv(){var t,n,e,r,i,o,a,u=0,c=.5,f=1,s=1,l=lp,h=!1;function d(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(s*t<s*n?r:i),l(h?Math.max(0,Math.min(1,t)):t))}function p(t){return function(n){var e,r,i;return arguments.length?([e,r,i]=n,l=jr(t,[e,r,i]),d):[l(0),l(.5),l(1)]}}return d.domain=function(a){return arguments.length?([u,c,f]=a,t=o(u=+u),n=o(c=+c),e=o(f=+f),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),s=n<t?-1:1,d):[u,c,f]},d.clamp=function(t){return arguments.length?(h=!!t,d):h},d.interpolator=function(t){return arguments.length?(l=t,d):l},d.range=p(Mr),d.rangeRound=p(Ar),d.unknown=function(t){return arguments.length?(a=t,d):a},function(a){return o=a,t=a(u),n=a(c),e=a(f),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),s=n<t?-1:1,d}}function Pv(){var t=qp(Cv());return t.copy=function(){return kv(t,Pv()).exponent(t.exponent())},ip.apply(t,arguments)}function zv(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}var Dv=zv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),qv=zv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Rv=zv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),Fv=zv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),Ov=zv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),Uv=zv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),Iv=zv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),Bv=zv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),Yv=zv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),Lv=zv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),jv=t=>hr(t[t.length-1]),Hv=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(zv),Xv=jv(Hv),Gv=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(zv),Vv=jv(Gv),$v=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(zv),Wv=jv($v),Zv=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(zv),Kv=jv(Zv),Qv=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(zv),Jv=jv(Qv),t_=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(zv),n_=jv(t_),e_=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(zv),r_=jv(e_),i_=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(zv),o_=jv(i_),a_=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(zv),u_=jv(a_),c_=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(zv),f_=jv(c_),s_=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(zv),l_=jv(s_),h_=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(zv),d_=jv(h_),p_=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(zv),g_=jv(p_),y_=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(zv),v_=jv(y_),__=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(zv),b_=jv(__),m_=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(zv),x_=jv(m_),w_=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(zv),M_=jv(w_),A_=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(zv),T_=jv(A_),S_=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(zv),E_=jv(S_),k_=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(zv),N_=jv(k_),C_=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(zv),P_=jv(C_),z_=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(zv),D_=jv(z_),q_=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(zv),R_=jv(q_),F_=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(zv),O_=jv(F_),U_=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(zv),I_=jv(U_),B_=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(zv),Y_=jv(B_),L_=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(zv),j_=jv(L_);var H_=Lr(tr(300,.5,0),tr(-240,.5,1)),X_=Lr(tr(-100,.75,.35),tr(80,1.5,.8)),G_=Lr(tr(260,.75,.35),tr(80,1.5,.8)),V_=tr();var $_=ve(),W_=Math.PI/3,Z_=2*Math.PI/3;function K_(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}var Q_=K_(zv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),J_=K_(zv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),tb=K_(zv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),nb=K_(zv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function eb(t){return function(){return t}}var rb=Math.abs,ib=Math.atan2,ob=Math.cos,ab=Math.max,ub=Math.min,cb=Math.sin,fb=Math.sqrt,sb=1e-12,lb=Math.PI,hb=lb/2,db=2*lb;function pb(t){return t>1?0:t<-1?lb:Math.acos(t)}function gb(t){return t>=1?hb:t<=-1?-hb:Math.asin(t)}function yb(t){return t.innerRadius}function vb(t){return t.outerRadius}function _b(t){return t.startAngle}function bb(t){return t.endAngle}function mb(t){return t&&t.padAngle}function xb(t,n,e,r,i,o,a,u){var c=e-t,f=r-n,s=a-i,l=u-o,h=l*c-s*f;if(!(h*h<sb))return[t+(h=(s*(n-o)-l*(t-i))/h)*c,n+h*f]}function wb(t,n,e,r,i,o,a){var u=t-e,c=n-r,f=(a?o:-o)/fb(u*u+c*c),s=f*c,l=-f*u,h=t+s,d=n+l,p=e+s,g=r+l,y=(h+p)/2,v=(d+g)/2,_=p-h,b=g-d,m=_*_+b*b,x=i-o,w=h*g-p*d,M=(b<0?-1:1)*fb(ab(0,x*x*m-w*w)),A=(w*b-_*M)/m,T=(-w*_-b*M)/m,S=(w*b+_*M)/m,E=(-w*_+b*M)/m,k=A-y,N=T-v,C=S-y,P=E-v;return k*k+N*N>C*C+P*P&&(A=S,T=E),{cx:A,cy:T,x01:-s,y01:-l,x11:A*(i/x-1),y11:T*(i/x-1)}}var Mb=Array.prototype.slice;function Ab(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Tb(t){this._context=t}function Sb(t){return new Tb(t)}function Eb(t){return t[0]}function kb(t){return t[1]}function Nb(t,n){var e=eb(!0),r=null,i=Sb,o=null;function a(a){var u,c,f,s=(a=Ab(a)).length,l=!1;for(null==r&&(o=i(f=fa())),u=0;u<=s;++u)!(u<s&&e(c=a[u],u,a))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(c,u,a),+n(c,u,a));if(f)return o=null,f+""||null}return t="function"==typeof t?t:void 0===t?Eb:eb(t),n="function"==typeof n?n:void 0===n?kb:eb(n),a.x=function(n){return arguments.length?(t="function"==typeof n?n:eb(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:eb(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:eb(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function Cb(t,n,e){var r=null,i=eb(!0),o=null,a=Sb,u=null;function c(c){var f,s,l,h,d,p=(c=Ab(c)).length,g=!1,y=new Array(p),v=new Array(p);for(null==o&&(u=a(d=fa())),f=0;f<=p;++f){if(!(f<p&&i(h=c[f],f,c))===g)if(g=!g)s=f,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=f-1;l>=s;--l)u.point(y[l],v[l]);u.lineEnd(),u.areaEnd()}g&&(y[f]=+t(h,f,c),v[f]=+n(h,f,c),u.point(r?+r(h,f,c):y[f],e?+e(h,f,c):v[f]))}if(d)return u=null,d+""||null}function f(){return Nb().defined(i).curve(a).context(o)}return t="function"==typeof t?t:void 0===t?Eb:eb(+t),n="function"==typeof n?n:eb(void 0===n?0:+n),e="function"==typeof e?e:void 0===e?kb:eb(+e),c.x=function(n){return arguments.length?(t="function"==typeof n?n:eb(+n),r=null,c):t},c.x0=function(n){return arguments.length?(t="function"==typeof n?n:eb(+n),c):t},c.x1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:eb(+t),c):r},c.y=function(t){return arguments.length?(n="function"==typeof t?t:eb(+t),e=null,c):n},c.y0=function(t){return arguments.length?(n="function"==typeof t?t:eb(+t),c):n},c.y1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:eb(+t),c):e},c.lineX0=c.lineY0=function(){return f().x(t).y(n)},c.lineY1=function(){return f().x(t).y(e)},c.lineX1=function(){return f().x(r).y(n)},c.defined=function(t){return arguments.length?(i="function"==typeof t?t:eb(!!t),c):i},c.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),c):a},c.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),c):o},c}function Pb(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function zb(t){return t}Tb.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Db=Rb(Sb);function qb(t){this._curve=t}function Rb(t){function n(n){return new qb(t(n))}return n._curve=t,n}function Fb(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Rb(t)):n()._curve},t}function Ob(){return Fb(Nb().curve(Db))}function Ub(){var t=Cb().curve(Db),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Fb(e())},delete t.lineX0,t.lineEndAngle=function(){return Fb(r())},delete t.lineX1,t.lineInnerRadius=function(){return Fb(i())},delete t.lineY0,t.lineOuterRadius=function(){return Fb(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Rb(t)):n()._curve},t}function Ib(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}function Bb(t){return t.source}function Yb(t){return t.target}function Lb(t){var n=Bb,e=Yb,r=Eb,i=kb,o=null;function a(){var a,u=Mb.call(arguments),c=n.apply(this,u),f=e.apply(this,u);if(o||(o=a=fa()),t(o,+r.apply(this,(u[0]=c,u)),+i.apply(this,u),+r.apply(this,(u[0]=f,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:eb(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:eb(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function jb(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Hb(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function Xb(t,n,e,r,i){var o=Ib(n,e),a=Ib(n,e=(e+i)/2),u=Ib(r,e),c=Ib(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],c[0],c[1])}qb.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Gb={draw:function(t,n){var e=Math.sqrt(n/lb);t.moveTo(e,0),t.arc(0,0,e,0,db)}},Vb={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},$b=Math.sqrt(1/3),Wb=2*$b,Zb={draw:function(t,n){var e=Math.sqrt(n/Wb),r=e*$b;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Kb=Math.sin(lb/10)/Math.sin(7*lb/10),Qb=Math.sin(db/10)*Kb,Jb=-Math.cos(db/10)*Kb,tm={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=Qb*e,i=Jb*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=db*o/5,u=Math.cos(a),c=Math.sin(a);t.lineTo(c*e,-u*e),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},nm={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},em=Math.sqrt(3),rm={draw:function(t,n){var e=-Math.sqrt(n/(3*em));t.moveTo(0,2*e),t.lineTo(-em*e,-e),t.lineTo(em*e,-e),t.closePath()}},im=-.5,om=Math.sqrt(3)/2,am=1/Math.sqrt(12),um=3*(am/2+1),cm={draw:function(t,n){var e=Math.sqrt(n/um),r=e/2,i=e*am,o=r,a=e*am+e,u=-o,c=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,c),t.lineTo(im*r-om*i,om*r+im*i),t.lineTo(im*o-om*a,om*o+im*a),t.lineTo(im*u-om*c,om*u+im*c),t.lineTo(im*r+om*i,im*i-om*r),t.lineTo(im*o+om*a,im*a-om*o),t.lineTo(im*u+om*c,im*c-om*u),t.closePath()}},fm=[Gb,Vb,Zb,nm,tm,rm,cm];function sm(){}function lm(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function hm(t){this._context=t}function dm(t){this._context=t}function pm(t){this._context=t}function gm(t,n){this._basis=new hm(t),this._beta=n}hm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:lm(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:lm(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},dm.prototype={areaStart:sm,areaEnd:sm,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:lm(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},pm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:lm(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},gm.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*a),this._beta*n[c]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var ym=function t(n){function e(t){return 1===n?new hm(t):new gm(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function vm(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function _m(t,n){this._context=t,this._k=(1-n)/6}_m.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:vm(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:vm(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var bm=function t(n){function e(t){return new _m(t,n)}return e.tension=function(n){return t(+n)},e}(0);function mm(t,n){this._context=t,this._k=(1-n)/6}mm.prototype={areaStart:sm,areaEnd:sm,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:vm(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var xm=function t(n){function e(t){return new mm(t,n)}return e.tension=function(n){return t(+n)},e}(0);function wm(t,n){this._context=t,this._k=(1-n)/6}wm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:vm(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Mm=function t(n){function e(t){return new wm(t,n)}return e.tension=function(n){return t(+n)},e}(0);function Am(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>sb){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>sb){var f=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*f+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*f+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function Tm(t,n){this._context=t,this._alpha=n}Tm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Am(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Sm=function t(n){function e(t){return n?new Tm(t,n):new _m(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function Em(t,n){this._context=t,this._alpha=n}Em.prototype={areaStart:sm,areaEnd:sm,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Am(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var km=function t(n){function e(t){return n?new Em(t,n):new mm(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function Nm(t,n){this._context=t,this._alpha=n}Nm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Am(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Cm=function t(n){function e(t){return n?new Nm(t,n):new wm(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function Pm(t){this._context=t}function zm(t){return t<0?-1:1}function Dm(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(zm(o)+zm(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function qm(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function Rm(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function Fm(t){this._context=t}function Om(t){this._context=new Um(t)}function Um(t){this._context=t}function Im(t){this._context=t}function Bm(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function Ym(t,n){this._context=t,this._t=n}function Lm(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function jm(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function Hm(t,n){return t[n]}function Xm(t){const n=[];return n.key=t,n}function Gm(t){var n=t.map(Vm);return jm(t).sort((function(t,e){return n[t]-n[e]}))}function Vm(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e);return r}function $m(t){var n=t.map(Wm);return jm(t).sort((function(t,e){return n[t]-n[e]}))}function Wm(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}Pm.prototype={areaStart:sm,areaEnd:sm,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},Fm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Rm(this,this._t0,qm(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,Rm(this,qm(this,e=Dm(this,t,n)),e);break;default:Rm(this,this._t0,e=Dm(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Om.prototype=Object.create(Fm.prototype)).point=function(t,n){Fm.prototype.point.call(this,n,t)},Um.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Im.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=Bm(t),i=Bm(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},Ym.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var Zm=t=>()=>t;function Km(t,{sourceEvent:n,target:e,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Qm(t,n,e){this.k=t,this.x=n,this.y=e}Qm.prototype={constructor:Qm,scale:function(t){return 1===t?this:new Qm(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Qm(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Jm=new Qm(1,0,0);function tx(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Jm;return t.__zoom}function nx(t){t.stopImmediatePropagation()}function ex(t){t.preventDefault(),t.stopImmediatePropagation()}function rx(t){return!(t.ctrlKey&&"wheel"!==t.type||t.button)}function ix(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function ox(){return this.__zoom||Jm}function ax(t){return-t.deltaY*(1===t.deltaMode?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function ux(){return navigator.maxTouchPoints||"ontouchstart"in this}function cx(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}tx.prototype=Qm.prototype,t.Adder=g,t.Delaunay=nu,t.FormatSpecifier=uc,t.InternMap=y,t.InternSet=v,t.Voronoi=Wa,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>1&&e.name===n)return new ji([[t]],_o,n,+r);return null},t.arc=function(){var t=yb,n=vb,e=eb(0),r=null,i=_b,o=bb,a=mb,u=null;function c(){var c,f,s=+t.apply(this,arguments),l=+n.apply(this,arguments),h=i.apply(this,arguments)-hb,d=o.apply(this,arguments)-hb,p=rb(d-h),g=d>h;if(u||(u=c=fa()),l<s&&(f=l,l=s,s=f),l>sb)if(p>db-sb)u.moveTo(l*ob(h),l*cb(h)),u.arc(0,0,l,h,d,!g),s>sb&&(u.moveTo(s*ob(d),s*cb(d)),u.arc(0,0,s,d,h,g));else{var y,v,_=h,b=d,m=h,x=d,w=p,M=p,A=a.apply(this,arguments)/2,T=A>sb&&(r?+r.apply(this,arguments):fb(s*s+l*l)),S=ub(rb(l-s)/2,+e.apply(this,arguments)),E=S,k=S;if(T>sb){var N=gb(T/s*cb(A)),C=gb(T/l*cb(A));(w-=2*N)>sb?(m+=N*=g?1:-1,x-=N):(w=0,m=x=(h+d)/2),(M-=2*C)>sb?(_+=C*=g?1:-1,b-=C):(M=0,_=b=(h+d)/2)}var P=l*ob(_),z=l*cb(_),D=s*ob(x),q=s*cb(x);if(S>sb){var R,F=l*ob(b),O=l*cb(b),U=s*ob(m),I=s*cb(m);if(p<lb&&(R=xb(P,z,U,I,F,O,D,q))){var B=P-R[0],Y=z-R[1],L=F-R[0],j=O-R[1],H=1/cb(pb((B*L+Y*j)/(fb(B*B+Y*Y)*fb(L*L+j*j)))/2),X=fb(R[0]*R[0]+R[1]*R[1]);E=ub(S,(s-X)/(H-1)),k=ub(S,(l-X)/(H+1))}}M>sb?k>sb?(y=wb(U,I,P,z,l,k,g),v=wb(F,O,D,q,l,k,g),u.moveTo(y.cx+y.x01,y.cy+y.y01),k<S?u.arc(y.cx,y.cy,k,ib(y.y01,y.x01),ib(v.y01,v.x01),!g):(u.arc(y.cx,y.cy,k,ib(y.y01,y.x01),ib(y.y11,y.x11),!g),u.arc(0,0,l,ib(y.cy+y.y11,y.cx+y.x11),ib(v.cy+v.y11,v.cx+v.x11),!g),u.arc(v.cx,v.cy,k,ib(v.y11,v.x11),ib(v.y01,v.x01),!g))):(u.moveTo(P,z),u.arc(0,0,l,_,b,!g)):u.moveTo(P,z),s>sb&&w>sb?E>sb?(y=wb(D,q,F,O,s,-E,g),v=wb(P,z,U,I,s,-E,g),u.lineTo(y.cx+y.x01,y.cy+y.y01),E<S?u.arc(y.cx,y.cy,E,ib(y.y01,y.x01),ib(v.y01,v.x01),!g):(u.arc(y.cx,y.cy,E,ib(y.y01,y.x01),ib(y.y11,y.x11),!g),u.arc(0,0,s,ib(y.cy+y.y11,y.cx+y.x11),ib(v.cy+v.y11,v.cx+v.x11),g),u.arc(v.cx,v.cy,E,ib(v.y11,v.x11),ib(v.y01,v.x01),!g))):u.arc(0,0,s,x,m,g):u.lineTo(D,q)}else u.moveTo(0,0);if(u.closePath(),c)return u=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-lb/2;return[ob(r)*e,cb(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:eb(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:eb(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:eb(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:eb(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:eb(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:eb(+t),c):o},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:eb(+t),c):a},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c},t.area=Cb,t.areaRadial=Ub,t.ascending=n,t.autoType=function(t){for(var n in t){var e,r,i=t[n].trim();if(i)if("true"===i)i=!0;else if("false"===i)i=!1;else if("NaN"===i)i=NaN;else if(isNaN(e=+i)){if(!(r=i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;Tu&&r[4]&&!r[7]&&(i=i.replace(/-/g,"/").replace(/T/," ")),i=new Date(i)}else i=e;else i=null;t[n]=i}return t},t.axisBottom=function(t){return ht(3,t)},t.axisLeft=function(t){return ht(4,t)},t.axisRight=function(t){return ht(2,t)},t.axisTop=function(t){return ht(1,t)},t.bin=I,t.bisect=o,t.bisectCenter=u,t.bisectLeft=a,t.bisectRight=o,t.bisector=e,t.blob=function(t,n){return fetch(t,n).then(Su)},t.brush=function(){return Go(qo)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.brushX=function(){return Go(zo)},t.brushY=function(){return Go(Do)},t.buffer=function(t,n){return fetch(t,n).then(Eu)},t.chord=function(){return ra(!1,!1)},t.chordDirected=function(){return ra(!0,!1)},t.chordTranspose=function(){return ra(!1,!0)},t.cluster=function(){var t=Yh,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter((function(n){var e=n.children;e?(n.x=function(t){return t.reduce(Lh,0)/t.length}(e),n.y=function(t){return 1+t.reduce(jh,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)}));var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),f=u.x-t(u,c)/2,s=c.x+t(c,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-f)/(s-f)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.color=de,t.contourDensity=function(){var t=Pa,n=za,e=Da,r=960,i=500,o=20,a=2,u=3*o,c=r+2*u>>a,f=i+2*u>>a,s=wa(20);function l(r){var i=new Float32Array(c*f),l=new Float32Array(c*f);r.forEach((function(r,o,s){var l=+t(r,o,s)+u>>a,h=+n(r,o,s)+u>>a,d=+e(r,o,s);l>=0&&l<c&&h>=0&&h<f&&(i[l+h*c]+=d)})),Na({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),Ca({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Na({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),Ca({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Na({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),Ca({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a);var d=s(i);if(!Array.isArray(d)){var p=B(i);d=F(0,p,d),(d=Z(0,Math.floor(p/d)*d,d)).shift()}return ka().thresholds(d).size([c,f])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(g)}function g(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return c=r+2*(u=3*o)>>a,f=i+2*u>>a,l}return l.x=function(n){return arguments.length?(t="function"==typeof n?n:wa(+n),l):t},l.y=function(t){return arguments.length?(n="function"==typeof t?t:wa(+t),l):n},l.weight=function(t){return arguments.length?(e="function"==typeof t?t:wa(+t),l):e},l.size=function(t){if(!arguments.length)return[r,i];var n=+t[0],e=+t[1];if(!(n>=0&&e>=0))throw new Error("invalid size");return r=n,i=e,y()},l.cellSize=function(t){if(!arguments.length)return 1<<a;if(!((t=+t)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(t)/Math.LN2),y()},l.thresholds=function(t){return arguments.length?(s="function"==typeof t?t:Array.isArray(t)?wa(ma.call(t)):wa(t),l):s},l.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},l},t.contours=ka,t.count=c,t.create=function(t){return Dn(At(t).call(document.documentElement))},t.creator=At,t.cross=function(...t){const n="function"==typeof t[t.length-1]&&function(t){return n=>t(...n)}(t.pop()),e=(t=t.map(l)).map(f),r=t.length-1,i=new Array(r+1).fill(0),o=[];if(r<0||e.some(s))return o;for(;;){o.push(i.map(((n,e)=>t[e][n])));let a=r;for(;++i[a]===e[a];){if(0===a)return n?o.map(n):o;i[a--]=0}}},t.csv=Pu,t.csvFormat=hu,t.csvFormatBody=du,t.csvFormatRow=gu,t.csvFormatRows=pu,t.csvFormatValue=yu,t.csvParse=su,t.csvParseRows=lu,t.cubehelix=tr,t.cumsum=function(t,n){var e=0,r=0;return Float64Array.from(t,void 0===n?t=>e+=+t||0:i=>e+=+n(i,r++,t)||0)},t.curveBasis=function(t){return new hm(t)},t.curveBasisClosed=function(t){return new dm(t)},t.curveBasisOpen=function(t){return new pm(t)},t.curveBundle=ym,t.curveCardinal=bm,t.curveCardinalClosed=xm,t.curveCardinalOpen=Mm,t.curveCatmullRom=Sm,t.curveCatmullRomClosed=km,t.curveCatmullRomOpen=Cm,t.curveLinear=Sb,t.curveLinearClosed=function(t){return new Pm(t)},t.curveMonotoneX=function(t){return new Fm(t)},t.curveMonotoneY=function(t){return new Om(t)},t.curveNatural=function(t){return new Im(t)},t.curveStep=function(t){return new Ym(t,.5)},t.curveStepAfter=function(t){return new Ym(t,1)},t.curveStepBefore=function(t){return new Ym(t,0)},t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=d,t.difference=function(t,...n){t=new Set(t);for(const e of n)for(const n of e)t.delete(n);return t},t.disjoint=function(t,n){const e=n[Symbol.iterator](),r=new Set;for(const n of t){if(r.has(n))return!1;let t,i;for(;({value:t,done:i}=e.next())&&!i;){if(Object.is(n,t))return!1;r.add(t)}}return!0},t.dispatch=pt,t.drag=function(){var t,n,e,r,i=Xn,o=Gn,a=Vn,u=$n,c={},f=pt("start","drag","end"),s=0,l=0;function h(t){t.on("mousedown.drag",d).filter(u).on("touchstart.drag",y).on("touchmove.drag",v).on("touchend.drag touchcancel.drag",_).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(a,u){if(!r&&i.call(this,a,u)){var c=b(this,o.call(this,a,u),a,u,"mouse");c&&(Dn(a.view).on("mousemove.drag",p,!0).on("mouseup.drag",g,!0),Yn(a.view),In(a),e=!1,t=a.clientX,n=a.clientY,c("start",a))}}function p(r){if(Bn(r),!e){var i=r.clientX-t,o=r.clientY-n;e=i*i+o*o>l}c.mouse("drag",r)}function g(t){Dn(t.view).on("mousemove.drag mouseup.drag",null),Ln(t.view,e),Bn(t),c.mouse("end",t)}function y(t,n){if(i.call(this,t,n)){var e,r,a=t.changedTouches,u=o.call(this,t,n),c=a.length;for(e=0;e<c;++e)(r=b(this,u,t,n,a[e].identifier,a[e]))&&(In(t),r("start",t,a[e]))}}function v(t){var n,e,r=t.changedTouches,i=r.length;for(n=0;n<i;++n)(e=c[r[n].identifier])&&(Bn(t),e("drag",t,r[n]))}function _(t){var n,e,i=t.changedTouches,o=i.length;for(r&&clearTimeout(r),r=setTimeout((function(){r=null}),500),n=0;n<o;++n)(e=c[i[n].identifier])&&(In(t),e("end",t,i[n]))}function b(t,n,e,r,i,o){var u,l,d,p=f.copy(),g=Un(o||e,n);if(null!=(d=a.call(t,new Hn("beforestart",{sourceEvent:e,target:h,identifier:i,active:s,x:g[0],y:g[1],dx:0,dy:0,dispatch:p}),r)))return u=d.x-g[0]||0,l=d.y-g[1]||0,function e(o,a,f){var y,v=g;switch(o){case"start":c[i]=e,y=s++;break;case"end":delete c[i],--s;case"drag":g=Un(f||a,n),y=s}p.call(o,t,new Hn(o,{sourceEvent:a,subject:d,target:h,identifier:i,active:y,x:g[0]+u,y:g[1]+l,dx:g[0]-v[0],dy:g[1]-v[1],dispatch:p}),r)}}return h.filter=function(t){return arguments.length?(i="function"==typeof t?t:jn(!!t),h):i},h.container=function(t){return arguments.length?(o="function"==typeof t?t:jn(t),h):o},h.subject=function(t){return arguments.length?(a="function"==typeof t?t:jn(t),h):a},h.touchable=function(t){return arguments.length?(u="function"==typeof t?t:jn(!!t),h):u},h.on=function(){var t=f.on.apply(f,arguments);return t===f?h:t},h.clickDistance=function(t){return arguments.length?(l=(t=+t)*t,h):Math.sqrt(l)},h},t.dragDisable=Yn,t.dragEnable=Ln,t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=cu(t);return Nu(n,e).then((function(t){return i.parse(t,r)}))},t.dsvFormat=cu,t.easeBack=so,t.easeBackIn=co,t.easeBackInOut=so,t.easeBackOut=fo,t.easeBounce=ao,t.easeBounceIn=function(t){return 1-ao(1-t)},t.easeBounceInOut=function(t){return((t*=2)<=1?1-ao(1-t):ao(t-1)+1)/2},t.easeBounceOut=ao,t.easeCircle=ro,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleInOut=ro,t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCubic=$i,t.easeCubicIn=function(t){return t*t*t},t.easeCubicInOut=$i,t.easeCubicOut=function(t){return--t*t*t+1},t.easeElastic=po,t.easeElasticIn=ho,t.easeElasticInOut=go,t.easeElasticOut=po,t.easeExp=eo,t.easeExpIn=function(t){return no(1-+t)},t.easeExpInOut=eo,t.easeExpOut=function(t){return 1-no(t)},t.easeLinear=t=>+t,t.easePoly=Ki,t.easePolyIn=Wi,t.easePolyInOut=Ki,t.easePolyOut=Zi,t.easeQuad=Vi,t.easeQuadIn=function(t){return t*t},t.easeQuadInOut=Vi,t.easeQuadOut=function(t){return t*(2-t)},t.easeSin=to,t.easeSinIn=function(t){return 1==+t?1:1-Math.cos(t*Ji)},t.easeSinInOut=to,t.easeSinOut=function(t){return Math.sin(t*Ji)},t.every=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let e=-1;for(const r of t)if(!n(r,++e,t))return!1;return!0},t.extent=p,t.filter=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");const e=[];let r=-1;for(const i of t)n(i,++r,t)&&e.push(i);return e},t.forceCenter=function(t,n){var e,r=1;function i(){var i,o,a=e.length,u=0,c=0;for(i=0;i<a;++i)u+=(o=e[i]).x,c+=o.y;for(u=(u/a-t)*r,c=(c/a-n)*r,i=0;i<a;++i)(o=e[i]).x-=u,o.y-=c}return null==t&&(t=0),null==n&&(n=0),i.initialize=function(t){e=t},i.x=function(n){return arguments.length?(t=+n,i):t},i.y=function(t){return arguments.length?(n=+t,i):n},i.strength=function(t){return arguments.length?(r=+t,i):r},i},t.forceCollide=function(t){var n,e,r,i=1,o=1;function a(){for(var t,a,c,f,s,l,h,d=n.length,p=0;p<o;++p)for(a=Lu(n,$u,Wu).visitAfter(u),t=0;t<d;++t)c=n[t],l=e[c.index],h=l*l,f=c.x+c.vx,s=c.y+c.vy,a.visit(g);function g(t,n,e,o,a){var u=t.data,d=t.r,p=l+d;if(!u)return n>f+p||o<f-p||e>s+p||a<s-p;if(u.index>c.index){var g=f-u.x-u.vx,y=s-u.y-u.vy,v=g*g+y*y;v<p*p&&(0===g&&(v+=(g=Vu(r))*g),0===y&&(v+=(y=Vu(r))*y),v=(p-(v=Math.sqrt(v)))/v*i,c.vx+=(g*=v)*(p=(d*=d)/(h+d)),c.vy+=(y*=v)*p,u.vx-=g*(p=1-p),u.vy-=y*p)}}}function u(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function c(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=Gu(null==t?1:+t)),a.initialize=function(t,e){n=t,r=e,c()},a.iterations=function(t){return arguments.length?(o=+t,a):o},a.strength=function(t){return arguments.length?(i=+t,a):i},a.radius=function(n){return arguments.length?(t="function"==typeof n?n:Gu(+n),c(),a):t},a},t.forceLink=function(t){var n,e,r,i,o,a,u=Zu,c=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},f=Gu(30),s=1;function l(r){for(var i=0,u=t.length;i<s;++i)for(var c,f,l,h,d,p,g,y=0;y<u;++y)f=(c=t[y]).source,h=(l=c.target).x+l.vx-f.x-f.vx||Vu(a),d=l.y+l.vy-f.y-f.vy||Vu(a),h*=p=((p=Math.sqrt(h*h+d*d))-e[y])/p*r*n[y],d*=p,l.vx-=h*(g=o[y]),l.vy-=d*g,f.vx+=h*(g=1-g),f.vy+=d*g}function h(){if(r){var a,c,f=r.length,s=t.length,l=new Map(r.map(((t,n)=>[u(t,n,r),t])));for(a=0,i=new Array(f);a<s;++a)(c=t[a]).index=a,"object"!=typeof c.source&&(c.source=Ku(l,c.source)),"object"!=typeof c.target&&(c.target=Ku(l,c.target)),i[c.source.index]=(i[c.source.index]||0)+1,i[c.target.index]=(i[c.target.index]||0)+1;for(a=0,o=new Array(s);a<s;++a)c=t[a],o[a]=i[c.source.index]/(i[c.source.index]+i[c.target.index]);n=new Array(s),d(),e=new Array(s),p()}}function d(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+c(t[e],e,t)}function p(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+f(t[n],n,t)}return null==t&&(t=[]),l.initialize=function(t,n){r=t,a=n,h()},l.links=function(n){return arguments.length?(t=n,h(),l):t},l.id=function(t){return arguments.length?(u=t,l):u},l.iterations=function(t){return arguments.length?(s=+t,l):s},l.strength=function(t){return arguments.length?(c="function"==typeof t?t:Gu(+t),d(),l):c},l.distance=function(t){return arguments.length?(f="function"==typeof t?t:Gu(+t),p(),l):f},l},t.forceManyBody=function(){var t,n,e,r,i,o=Gu(-30),a=1,u=1/0,c=.81;function f(e){var i,o=t.length,a=Lu(t,Ju,tc).visitAfter(l);for(r=e,i=0;i<o;++i)n=t[i],a.visit(h)}function s(){if(t){var n,e,r=t.length;for(i=new Array(r),n=0;n<r;++n)e=t[n],i[e.index]=+o(e,n,t)}}function l(t){var n,e,r,o,a,u=0,c=0;if(t.length){for(r=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,r+=e*n.x,o+=e*n.y);t.x=r/c,t.y=o/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=i[n.data.index]}while(n=n.next)}t.value=u}function h(t,o,f,s){if(!t.value)return!0;var l=t.x-n.x,h=t.y-n.y,d=s-o,p=l*l+h*h;if(d*d/c<p)return p<u&&(0===l&&(p+=(l=Vu(e))*l),0===h&&(p+=(h=Vu(e))*h),p<a&&(p=Math.sqrt(a*p)),n.vx+=l*t.value*r/p,n.vy+=h*t.value*r/p),!0;if(!(t.length||p>=u)){(t.data!==n||t.next)&&(0===l&&(p+=(l=Vu(e))*l),0===h&&(p+=(h=Vu(e))*h),p<a&&(p=Math.sqrt(a*p)));do{t.data!==n&&(d=i[t.data.index]*r/p,n.vx+=l*d,n.vy+=h*d)}while(t=t.next)}}return f.initialize=function(n,r){t=n,e=r,s()},f.strength=function(t){return arguments.length?(o="function"==typeof t?t:Gu(+t),s(),f):o},f.distanceMin=function(t){return arguments.length?(a=t*t,f):Math.sqrt(a)},f.distanceMax=function(t){return arguments.length?(u=t*t,f):Math.sqrt(u)},f.theta=function(t){return arguments.length?(c=t*t,f):Math.sqrt(c)},f},t.forceRadial=function(t,n,e){var r,i,o,a=Gu(.1);function u(t){for(var a=0,u=r.length;a<u;++a){var c=r[a],f=c.x-n||1e-6,s=c.y-e||1e-6,l=Math.sqrt(f*f+s*s),h=(o[a]-l)*i[a]*t/l;c.vx+=f*h,c.vy+=s*h}}function c(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=Gu(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,c()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:Gu(+t),c(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:Gu(+n),c(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u},t.forceSimulation=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=new Map,c=ri(l),f=pt("tick","end"),s=function(){let t=1;return()=>(t=(1664525*t+1013904223)%Qu)/Qu}();function l(){h(),f.call("tick",n),e<r&&(c.stop(),f.call("end",n))}function h(r){var c,f,s=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,u.forEach((function(t){t(e)})),c=0;c<s;++c)null==(f=t[c]).fx?f.x+=f.vx*=a:(f.x=f.fx,f.vx=0),null==f.fy?f.y+=f.vy*=a:(f.y=f.fy,f.vy=0);return n}function d(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=10*Math.sqrt(.5+e),o=e*nc;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function p(n){return n.initialize&&n.initialize(t,s),n}return null==t&&(t=[]),d(),n={tick:h,restart:function(){return c.restart(l),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,d(),u.forEach(p),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},randomSource:function(t){return arguments.length?(s=t,u.forEach(p),n):s},force:function(t,e){return arguments.length>1?(null==e?u.delete(t):u.set(t,p(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,c,f=0,s=t.length;for(null==r?r=1/0:r*=r,f=0;f<s;++f)(a=(i=n-(u=t[f]).x)*i+(o=e-u.y)*o)<r&&(c=u,r=a);return c},on:function(t,e){return arguments.length>1?(f.on(t,e),n):f.on(t)}}},t.forceX=function(t){var n,e,r,i=Gu(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=Gu(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:Gu(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:Gu(+n),a(),o):t},o},t.forceY=function(t){var n,e,r,i=Gu(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=Gu(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:Gu(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:Gu(+n),a(),o):t},o},t.formatDefaultLocale=gc,t.formatLocale=pc,t.formatSpecifier=ac,t.fsum=function(t,n){const e=new g;if(void 0===n)for(let n of t)(n=+n)&&e.add(n);else{let r=-1;for(let i of t)(i=+n(i,++r,t))&&e.add(i)}return+e},t.geoAlbers=bh,t.geoAlbersUsa=function(){var t,n,e,r,i,o,a=bh(),u=_h().rotate([154,0]).center([-2,58.5]).parallels([55,65]),c=_h().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,n){o=[t,n]}};function s(t){var n=t[0],a=t[1];return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function l(){return t=n=null,s}return s.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?c:a).invert(t)},s.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),c.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},s.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),c.precision(t),l()):a.precision()},s.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),c.scale(t),s.translate(a.translate())):a.scale()},s.translate=function(t){if(!arguments.length)return a.translate();var n=a.scale(),o=+t[0],s=+t[1];return e=a.translate(t).clipExtent([[o-.455*n,s-.238*n],[o+.455*n,s+.238*n]]).stream(f),r=u.translate([o-.307*n,s+.201*n]).clipExtent([[o-.425*n+bc,s+.12*n+bc],[o-.214*n-bc,s+.234*n-bc]]).stream(f),i=c.translate([o-.205*n,s+.212*n]).clipExtent([[o-.214*n+bc,s+.166*n+bc],[o-.115*n-bc,s+.234*n-bc]]).stream(f),l()},s.fitExtent=function(t,n){return ah(s,t,n)},s.fitSize=function(t,n){return uh(s,t,n)},s.fitWidth=function(t,n){return ch(s,t,n)},s.fitHeight=function(t,n){return fh(s,t,n)},s.scale(1070)},t.geoArea=function(t){return pf=new g,Wc(t,gf),2*pf},t.geoAzimuthalEqualArea=function(){return ph(wh).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=wh,t.geoAzimuthalEquidistant=function(){return ph(Mh).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=Mh,t.geoBounds=function(t){var n,e,r,i,o,a,u;if(of=rf=-(nf=ef=1/0),lf=[],Wc(t,jf),e=lf.length){for(lf.sort(Qf),n=1,o=[r=lf[0]];n<e;++n)Jf(r,(i=lf[n])[0])||Jf(r,i[1])?(Kf(r[0],i[1])>Kf(r[0],r[1])&&(r[1]=i[1]),Kf(i[0],r[1])>Kf(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=Kf(r[1],i[0]))>a&&(a=u,nf=i[0],rf=r[1])}return lf=hf=null,nf===1/0||ef===1/0?[[NaN,NaN],[NaN,NaN]]:[[nf,ef],[rf,of]]},t.geoCentroid=function(t){Ef=kf=Nf=Cf=Pf=zf=Df=qf=0,Rf=new g,Ff=new g,Of=new g,Wc(t,ts);var n=+Rf,e=+Ff,r=+Of,i=Dc(n,e,r);return i<mc&&(n=zf,e=Df,r=qf,kf<bc&&(n=Nf,e=Cf,r=Pf),(i=Dc(n,e,r))<mc)?[NaN,NaN]:[Nc(e,n)*Tc,Yc(r/i)*Tc]},t.geoCircle=function(){var t,n,e=ls([0,0]),r=ls(90),i=ls(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=Tc,e[1]*=Tc}};function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*Sc,c=i.apply(this,arguments)*Sc;return t=[],n=ps(-a[0]*Sc,-a[1]*Sc,0).invert,bs(o,u,c,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:ls([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:ls(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:ls(+t),a):i},a},t.geoClipAntimeridian=Ps,t.geoClipCircle=zs,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=Is(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=Is,t.geoConicConformal=function(){return yh(Eh).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=Eh,t.geoConicEqualArea=_h,t.geoConicEqualAreaRaw=vh,t.geoConicEquidistant=function(){return yh(Nh).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=Nh,t.geoContains=function(t,n){return(t&&$s.hasOwnProperty(t.type)?$s[t.type]:Zs)(t,n)},t.geoDistance=Vs,t.geoEqualEarth=function(){return ph(Rh).scale(177.158)},t.geoEqualEarthRaw=Rh,t.geoEquirectangular=function(){return ph(kh).scale(152.63)},t.geoEquirectangularRaw=kh,t.geoGnomonic=function(){return ph(Fh).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=Fh,t.geoGraticule=il,t.geoGraticule10=function(){return il()()},t.geoIdentity=function(){var t,n,e,r,i,o,a,u=1,c=0,f=0,s=1,l=1,h=0,d=null,p=1,g=1,y=rh({point:function(t,n){var e=b([t,n]);this.stream.point(e[0],e[1])}}),v=fl;function _(){return p=u*s,g=u*l,o=a=null,b}function b(e){var r=e[0]*p,i=e[1]*g;if(h){var o=i*t-r*n;r=r*t+i*n,i=o}return[r+c,i+f]}return b.invert=function(e){var r=e[0]-c,i=e[1]-f;if(h){var o=i*t+r*n;r=r*t-i*n,i=o}return[r/p,i/g]},b.stream=function(t){return o&&a===t?o:o=y(v(a=t))},b.postclip=function(t){return arguments.length?(v=t,d=e=r=i=null,_()):v},b.clipExtent=function(t){return arguments.length?(v=null==t?(d=e=r=i=null,fl):Is(d=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),_()):null==d?null:[[d,e],[r,i]]},b.scale=function(t){return arguments.length?(u=+t,_()):u},b.translate=function(t){return arguments.length?(c=+t[0],f=+t[1],_()):[c,f]},b.angle=function(e){return arguments.length?(n=Fc(h=e%360*Sc),t=Cc(h),_()):h*Tc},b.reflectX=function(t){return arguments.length?(s=t?-1:1,_()):s<0},b.reflectY=function(t){return arguments.length?(l=t?-1:1,_()):l<0},b.fitExtent=function(t,n){return ah(b,t,n)},b.fitSize=function(t,n){return uh(b,t,n)},b.fitWidth=function(t,n){return ch(b,t,n)},b.fitHeight=function(t,n){return fh(b,t,n)},b},t.geoInterpolate=function(t,n){var e=t[0]*Sc,r=t[1]*Sc,i=n[0]*Sc,o=n[1]*Sc,a=Cc(r),u=Fc(r),c=Cc(o),f=Fc(o),s=a*Cc(e),l=a*Fc(e),h=c*Cc(i),d=c*Fc(i),p=2*Yc(Uc(Lc(o-r)+a*c*Lc(i-e))),g=Fc(p),y=p?function(t){var n=Fc(t*=p)/g,e=Fc(p-t)/g,r=e*s+n*h,i=e*l+n*d,o=e*u+n*f;return[Nc(i,r)*Tc,Nc(o,Uc(r*r+i*i))*Tc]}:function(){return[e*Tc,r*Tc]};return y.distance=p,y},t.geoLength=Hs,t.geoMercator=function(){return Th(Ah).scale(961/Ac)},t.geoMercatorRaw=Ah,t.geoNaturalEarth1=function(){return ph(Oh).scale(175.295)},t.geoNaturalEarth1Raw=Oh,t.geoOrthographic=function(){return ph(Uh).scale(249.5).clipAngle(90.000001)},t.geoOrthographicRaw=Uh,t.geoPath=function(t,n){var e,r,i=4.5;function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),Wc(t,e(r))),r.result()}return o.area=function(t){return Wc(t,e(hl)),hl.result()},o.measure=function(t){return Wc(t,e(Ql)),Ql.result()},o.bounds=function(t){return Wc(t,e(xl)),xl.result()},o.centroid=function(t){return Wc(t,e(Rl)),Rl.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,fl):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new nh):new Xl(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)},t.geoProjection=ph,t.geoProjectionMutator=gh,t.geoRotation=_s,t.geoStereographic=function(){return ph(Ih).scale(250).clipAngle(142)},t.geoStereographicRaw=Ih,t.geoStream=Wc,t.geoTransform=function(t){return{stream:rh(t)}},t.geoTransverseMercator=function(){var t=Th(Bh),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=Bh,t.gray=function(t,n){return new Fe(t,0,0,null==n?1:n)},t.greatest=function(t,e=n){let r,i=!1;if(1===e.length){let o;for(const a of t){const t=e(a);(i?n(t,o)>0:0===n(t,t))&&(r=a,o=t,i=!0)}}else for(const n of t)(i?e(n,r)>0:0===e(n,n))&&(r=n,i=!0);return r},t.greatestIndex=function(t,e=n){if(1===e.length)return G(t,e);let r,i=-1,o=-1;for(const n of t)++o,(i<0?0===e(n,n):e(n,r)>0)&&(r=n,i=o);return i},t.group=M,t.groupSort=function(t,e,r){return(1===e.length?k(A(t,e,r),(([t,e],[r,i])=>n(e,i)||n(t,r))):k(M(t,r),(([t,r],[i,o])=>e(r,o)||n(t,i)))).map((([t])=>t))},t.groups=function(t,...n){return S(t,Array.from,w,n)},t.hcl=Le,t.hierarchy=Xh,t.histogram=I,t.hsl=Ae,t.html=Fu,t.image=function(t,n){return new Promise((function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t}))},t.index=function(t,...n){return S(t,w,T,n)},t.indexes=function(t,...n){return S(t,Array.from,T,n)},t.interpolate=Mr,t.interpolateArray=function(t,n){return(gr(n)?pr:yr)(t,n)},t.interpolateBasis=rr,t.interpolateBasisClosed=ir,t.interpolateBlues=D_,t.interpolateBrBG=Xv,t.interpolateBuGn=f_,t.interpolateBuPu=l_,t.interpolateCividis=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"},t.interpolateCool=G_,t.interpolateCubehelix=Yr,t.interpolateCubehelixDefault=H_,t.interpolateCubehelixLong=Lr,t.interpolateDate=vr,t.interpolateDiscrete=function(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},t.interpolateGnBu=d_,t.interpolateGreens=R_,t.interpolateGreys=O_,t.interpolateHcl=Ur,t.interpolateHclLong=Ir,t.interpolateHsl=Rr,t.interpolateHslLong=Fr,t.interpolateHue=function(t,n){var e=ur(+t,+n);return function(t){var n=e(t);return n-360*Math.floor(n/360)}},t.interpolateInferno=tb,t.interpolateLab=function(t,n){var e=fr((t=Re(t)).l,(n=Re(n)).l),r=fr(t.a,n.a),i=fr(t.b,n.b),o=fr(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateMagma=J_,t.interpolateNumber=_r,t.interpolateNumberArray=pr,t.interpolateObject=br,t.interpolateOrRd=g_,t.interpolateOranges=j_,t.interpolatePRGn=Vv,t.interpolatePiYG=Wv,t.interpolatePlasma=nb,t.interpolatePuBu=b_,t.interpolatePuBuGn=v_,t.interpolatePuOr=Kv,t.interpolatePuRd=x_,t.interpolatePurples=I_,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return V_.h=360*t-100,V_.s=1.5-1.5*n,V_.l=.8-.9*n,V_+""},t.interpolateRdBu=Jv,t.interpolateRdGy=n_,t.interpolateRdPu=M_,t.interpolateRdYlBu=r_,t.interpolateRdYlGn=o_,t.interpolateReds=Y_,t.interpolateRgb=sr,t.interpolateRgbBasis=hr,t.interpolateRgbBasisClosed=dr,t.interpolateRound=Ar,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,$_.r=255*(n=Math.sin(t))*n,$_.g=255*(n=Math.sin(t+W_))*n,$_.b=255*(n=Math.sin(t+Z_))*n,$_+""},t.interpolateSpectral=u_,t.interpolateString=wr,t.interpolateTransformCss=Cr,t.interpolateTransformSvg=Pr,t.interpolateTurbo=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"},t.interpolateViridis=Q_,t.interpolateWarm=X_,t.interpolateYlGn=E_,t.interpolateYlGnBu=T_,t.interpolateYlOrBr=N_,t.interpolateYlOrRd=P_,t.interpolateZoom=Dr,t.interrupt=gi,t.intersection=function(t,...n){t=new Set(t),n=n.map(et);t:for(const e of t)for(const r of n)if(!r.has(e)){t.delete(e);continue t}return t},t.interval=function(t,n,e){var r=new ei,i=n;return null==n?(r.restart(t,n,e),r):(r._restart=r.restart,r.restart=function(t,n,e){n=+n,e=null==e?ti():+e,r._restart((function o(a){a+=i,r._restart(o,i+=n,e),t(a)}),n,e)},r.restart(t,n,e),r)},t.isoFormat=yv,t.isoParse=vv,t.json=function(t,n){return fetch(t,n).then(Du)},t.lab=Re,t.lch=function(t,n,e,r){return 1===arguments.length?Ye(t):new je(e,n,t,null==r?1:r)},t.least=function(t,e=n){let r,i=!1;if(1===e.length){let o;for(const a of t){const t=e(a);(i?n(t,o)<0:0===n(t,t))&&(r=a,o=t,i=!0)}}else for(const n of t)(i?e(n,r)<0:0===e(n,n))&&(r=n,i=!0);return r},t.leastIndex=K,t.line=Nb,t.lineRadial=Ob,t.linkHorizontal=function(){return Lb(jb)},t.linkRadial=function(){var t=Lb(Xb);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.linkVertical=function(){return Lb(Hb)},t.local=Rn,t.map=function(t,n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");if("function"!=typeof n)throw new TypeError("mapper is not a function");return Array.from(t,((e,r)=>n(e,r,t)))},t.matcher=Ct,t.max=B,t.maxIndex=G,t.mean=function(t,n){let e=0,r=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(++e,r+=n);else{let i=-1;for(let o of t)null!=(o=n(o,++i,t))&&(o=+o)>=o&&(++e,r+=o)}if(e)return r/e},t.median=function(t,n){return H(t,.5,n)},t.merge=V,t.min=Y,t.minIndex=$,t.namespace=xt,t.namespaces=mt,t.nice=O,t.now=ti,t.pack=function(){var t=null,n=1,e=1,r=hd;function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(gd(t)).eachAfter(yd(r,.5)).eachBefore(vd(1)):i.eachBefore(gd(pd)).eachAfter(yd(hd,1)).eachAfter(yd(r,i.r/Math.min(n,e))).eachBefore(vd(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=sd(n),i):t},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:dd(+t),i):r},i},t.packEnclose=Kh,t.packSiblings=function(t){return fd(t),t},t.pairs=function(t,n=W){const e=[];let r,i=!1;for(const o of t)i&&e.push(n(r,o)),r=o,i=!0;return e},t.partition=function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&bd(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(_d),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},t.path=fa,t.permute=E,t.pie=function(){var t=zb,n=Pb,e=null,r=eb(0),i=eb(db),o=eb(0);function a(a){var u,c,f,s,l,h=(a=Ab(a)).length,d=0,p=new Array(h),g=new Array(h),y=+r.apply(this,arguments),v=Math.min(db,Math.max(-db,i.apply(this,arguments)-y)),_=Math.min(Math.abs(v)/h,o.apply(this,arguments)),b=_*(v<0?-1:1);for(u=0;u<h;++u)(l=g[p[u]=u]=+t(a[u],u,a))>0&&(d+=l);for(null!=n?p.sort((function(t,e){return n(g[t],g[e])})):null!=e&&p.sort((function(t,n){return e(a[t],a[n])})),u=0,f=d?(v-h*b)/d:0;u<h;++u,y=s)c=p[u],s=y+((l=g[c])>0?l*f:0)+b,g[c]={data:a[c],index:u,value:l,startAngle:y,endAngle:s,padAngle:_};return g}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:eb(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:eb(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:eb(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:eb(+t),a):o},a},t.piecewise=jr,t.pointRadial=Ib,t.pointer=Un,t.pointers=function(t,n){return t.target&&(t=On(t),void 0===n&&(n=t.currentTarget),t=t.touches||[t]),Array.from(t,(t=>Un(t,n)))},t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],c=0;++r<i;)n=u,u=t[r],c+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return[o/(c*=3),a/c]},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],c=o[0],f=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=f>u&&a<(c-e)*(u-r)/(f-r)+e&&(s=!s),c=e,f=r;return s},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(Fd),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=Od(r),a=Od(i),u=a[0]===o[0],c=a[a.length-1]===o[o.length-1],f=[];for(n=o.length-1;n>=0;--n)f.push(t[r[o[n]][2]]);for(n=+u;n<a.length-c;++n)f.push(t[r[a[n]][2]]);return f},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],c=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],c+=Math.hypot(n,e);return c},t.precisionFixed=yc,t.precisionPrefix=vc,t.precisionRound=_c,t.quadtree=Lu,t.quantile=H,t.quantileSorted=X,t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.quickselect=L,t.radialArea=Ub,t.radialLine=Ob,t.randomBates=Hd,t.randomBernoulli=Vd,t.randomBeta=Zd,t.randomBinomial=Kd,t.randomCauchy=Jd,t.randomExponential=Xd,t.randomGamma=Wd,t.randomGeometric=$d,t.randomInt=Bd,t.randomIrwinHall=jd,t.randomLcg=function(t=Math.random()){let n=0|(0<=t&&t<1?t/ep:Math.abs(t));return()=>(n=1664525*n+1013904223|0,ep*(n>>>0))},t.randomLogNormal=Ld,t.randomLogistic=tp,t.randomNormal=Yd,t.randomPareto=Gd,t.randomPoisson=np,t.randomUniform=Id,t.randomWeibull=Qd,t.range=Z,t.reduce=function(t,n,e){if("function"!=typeof n)throw new TypeError("reducer is not a function");const r=t[Symbol.iterator]();let i,o,a=-1;if(arguments.length<3){if(({done:i,value:e}=r.next()),i)return;++a}for(;({done:i,value:o}=r.next()),!i;)e=n(e,o,++a,t);return e},t.reverse=function(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");return Array.from(t).reverse()},t.rgb=ve,t.ribbon=function(){return ba()},t.ribbonArrow=function(){return ba(_a)},t.rollup=A,t.rollups=function(t,n,...e){return S(t,Array.from,n,e)},t.scaleBand=up,t.scaleDiverging=function t(){var n=bp(Cv()(lp));return n.copy=function(){return kv(n,t())},ip.apply(n,arguments)},t.scaleDivergingLog=function t(){var n=Ep(Cv()).domain([.1,1,10]);return n.copy=function(){return kv(n,t()).base(n.base())},ip.apply(n,arguments)},t.scaleDivergingPow=Pv,t.scaleDivergingSqrt=function(){return Pv.apply(null,arguments).exponent(.5)},t.scaleDivergingSymlog=function t(){var n=Cp(Cv());return n.copy=function(){return kv(n,t()).constant(n.constant())},ip.apply(n,arguments)},t.scaleIdentity=function t(n){var e;function r(t){return isNaN(t=+t)?e:t}return r.invert=r,r.domain=r.range=function(t){return arguments.length?(n=Array.from(t,fp),r):n.slice()},r.unknown=function(t){return arguments.length?(e=t,r):e},r.copy=function(){return t(n).unknown(e)},n=arguments.length?Array.from(n,fp):[0,1],bp(r)},t.scaleImplicit=op,t.scaleLinear=function t(){var n=vp();return n.copy=function(){return gp(n,t())},rp.apply(n,arguments),bp(n)},t.scaleLog=function t(){var n=Ep(yp()).domain([1,10]);return n.copy=function(){return gp(n,t()).base(n.base())},rp.apply(n,arguments),n},t.scaleOrdinal=ap,t.scalePoint=function(){return cp(up.apply(null,arguments).paddingInner(1))},t.scalePow=Rp,t.scaleQuantile=function t(){var e,r=[],i=[],a=[];function u(){var t=0,n=Math.max(1,i.length);for(a=new Array(n-1);++t<n;)a[t-1]=X(r,t/n);return c}function c(t){return isNaN(t=+t)?e:i[o(a,t)]}return c.invertExtent=function(t){var n=i.indexOf(t);return n<0?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},c.domain=function(t){if(!arguments.length)return r.slice();r=[];for(let n of t)null==n||isNaN(n=+n)||r.push(n);return r.sort(n),u()},c.range=function(t){return arguments.length?(i=Array.from(t),u()):i.slice()},c.unknown=function(t){return arguments.length?(e=t,c):e},c.quantiles=function(){return a.slice()},c.copy=function(){return t().domain(r).range(i).unknown(e)},rp.apply(c,arguments)},t.scaleQuantize=function t(){var n,e=0,r=1,i=1,a=[.5],u=[0,1];function c(t){return t<=t?u[o(a,t,0,i)]:n}function f(){var t=-1;for(a=new Array(i);++t<i;)a[t]=((t+1)*r-(t-i)*e)/(i+1);return c}return c.domain=function(t){return arguments.length?([e,r]=t,e=+e,r=+r,f()):[e,r]},c.range=function(t){return arguments.length?(i=(u=Array.from(t)).length-1,f()):u.slice()},c.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,a[0]]:n>=i?[a[i-1],r]:[a[n-1],a[n]]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.thresholds=function(){return a.slice()},c.copy=function(){return t().domain([e,r]).range(u).unknown(n)},rp.apply(bp(c),arguments)},t.scaleRadial=function t(){var n,e=vp(),r=[0,1],i=!1;function o(t){var r=Op(e(t));return isNaN(r)?n:i?Math.round(r):r}return o.invert=function(t){return e.invert(Fp(t))},o.domain=function(t){return arguments.length?(e.domain(t),o):e.domain()},o.range=function(t){return arguments.length?(e.range((r=Array.from(t,fp)).map(Fp)),o):r.slice()},o.rangeRound=function(t){return o.range(t).round(!0)},o.round=function(t){return arguments.length?(i=!!t,o):i},o.clamp=function(t){return arguments.length?(e.clamp(t),o):e.clamp()},o.unknown=function(t){return arguments.length?(n=t,o):n},o.copy=function(){return t(e.domain(),r).round(i).clamp(e.clamp()).unknown(n)},rp.apply(o,arguments),bp(o)},t.scaleSequential=function t(){var n=bp(Ev()(lp));return n.copy=function(){return kv(n,t())},ip.apply(n,arguments)},t.scaleSequentialLog=function t(){var n=Ep(Ev()).domain([1,10]);return n.copy=function(){return kv(n,t()).base(n.base())},ip.apply(n,arguments)},t.scaleSequentialPow=Nv,t.scaleSequentialQuantile=function t(){var e=[],r=lp;function i(t){if(!isNaN(t=+t))return r((o(e,t,1)-1)/(e.length-1))}return i.domain=function(t){if(!arguments.length)return e.slice();e=[];for(let n of t)null==n||isNaN(n=+n)||e.push(n);return e.sort(n),i},i.interpolator=function(t){return arguments.length?(r=t,i):r},i.range=function(){return e.map(((t,n)=>r(n/(e.length-1))))},i.quantiles=function(t){return Array.from({length:t+1},((n,r)=>H(e,r/t)))},i.copy=function(){return t(r).domain(e)},ip.apply(i,arguments)},t.scaleSequentialSqrt=function(){return Nv.apply(null,arguments).exponent(.5)},t.scaleSequentialSymlog=function t(){var n=Cp(Ev());return n.copy=function(){return kv(n,t()).constant(n.constant())},ip.apply(n,arguments)},t.scaleSqrt=function(){return Rp.apply(null,arguments).exponent(.5)},t.scaleSymlog=function t(){var n=Cp(yp());return n.copy=function(){return gp(n,t()).constant(n.constant())},rp.apply(n,arguments)},t.scaleThreshold=function t(){var n,e=[.5],r=[0,1],i=1;function a(t){return t<=t?r[o(e,t,0,i)]:n}return a.domain=function(t){return arguments.length?(e=Array.from(t),i=Math.min(e.length,r.length-1),a):e.slice()},a.range=function(t){return arguments.length?(r=Array.from(t),i=Math.min(e.length,r.length-1),a):r.slice()},a.invertExtent=function(t){var n=r.indexOf(t);return[e[n-1],e[n]]},a.unknown=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return t().domain(e).range(r).unknown(n)},rp.apply(a,arguments)},t.scaleTime=function(){return rp.apply(Sv(bg,vg,rg,tg,Qp,Zp,$p,Yp,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},t.scaleUtc=function(){return rp.apply(Sv(Hg,Lg,kg,Tg,Mg,xg,$p,Yp,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)},t.scan=function(t,n){const e=K(t,n);return e<0?void 0:e},t.schemeAccent=qv,t.schemeBlues=z_,t.schemeBrBG=Hv,t.schemeBuGn=c_,t.schemeBuPu=s_,t.schemeCategory10=Dv,t.schemeDark2=Rv,t.schemeGnBu=h_,t.schemeGreens=q_,t.schemeGreys=F_,t.schemeOrRd=p_,t.schemeOranges=L_,t.schemePRGn=Gv,t.schemePaired=Fv,t.schemePastel1=Ov,t.schemePastel2=Uv,t.schemePiYG=$v,t.schemePuBu=__,t.schemePuBuGn=y_,t.schemePuOr=Zv,t.schemePuRd=m_,t.schemePurples=U_,t.schemeRdBu=Qv,t.schemeRdGy=t_,t.schemeRdPu=w_,t.schemeRdYlBu=e_,t.schemeRdYlGn=i_,t.schemeReds=B_,t.schemeSet1=Iv,t.schemeSet2=Bv,t.schemeSet3=Yv,t.schemeSpectral=a_,t.schemeTableau10=Lv,t.schemeYlGn=S_,t.schemeYlGnBu=A_,t.schemeYlOrBr=k_,t.schemeYlOrRd=C_,t.select=Dn,t.selectAll=function(t){return"string"==typeof t?new Pn([document.querySelectorAll(t)],[document.documentElement]):new Pn([null==t?[]:Et(t)],Cn)},t.selection=zn,t.selector=St,t.selectorAll=Nt,t.shuffle=Q,t.shuffler=J,t.some=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let e=-1;for(const r of t)if(n(r,++e,t))return!0;return!1},t.sort=k,t.stack=function(){var t=eb([]),n=jm,e=Lm,r=Hm;function i(i){var o,a,u=Array.from(t.apply(this,arguments),Xm),c=u.length,f=-1;for(const t of i)for(o=0,++f;o<c;++o)(u[o][f]=[0,+r(t,u[o].key,f,i)]).data=t;for(o=0,a=Ab(n(u));o<c;++o)u[a[o]].index=o;return e(u,a),u}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:eb(Array.from(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:eb(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?jm:"function"==typeof t?t:eb(Array.from(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?Lm:t,i):e},i},t.stackOffsetDiverging=function(t,n){if((u=t.length)>0)for(var e,r,i,o,a,u,c=0,f=t[n[0]].length;c<f;++c)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):(r[0]=0,r[1]=i)},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}Lm(t,n)}},t.stackOffsetNone=Lm,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}Lm(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,c=0,f=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}c+=l,f+=h*l}e[a-1][1]+=e[a-1][0]=o,c&&(o-=f/c)}e[a-1][1]+=e[a-1][0]=o,Lm(t,n)}},t.stackOrderAppearance=Gm,t.stackOrderAscending=$m,t.stackOrderDescending=function(t){return $m(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(Wm),o=Gm(t),a=0,u=0,c=[],f=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],c.push(e)):(u+=i[e],f.push(e));return f.reverse().concat(c)},t.stackOrderNone=jm,t.stackOrderReverse=function(t){return jm(t).reverse()},t.stratify=function(){var t=wd,n=Md;function e(e){var r,i,o,a,u,c,f,s=Array.from(e),l=s.length,h=new Map;for(i=0;i<l;++i)r=s[i],u=s[i]=new Zh(r),null!=(c=t(r,i,e))&&(c+="")&&(f=u.id=c,h.set(f,h.has(f)?xd:u)),null!=(c=n(r,i,e))&&(c+="")&&(u.parent=c);for(i=0;i<l;++i)if(c=(u=s[i]).parent){if(!(a=h.get(c)))throw new Error("missing: "+c);if(a===xd)throw new Error("ambiguous: "+c);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=md,o.eachBefore((function(t){t.depth=t.parent.depth+1,--l})).eachBefore(Wh),o.parent=null,l>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=ld(n),e):t},e.parentId=function(t){return arguments.length?(n=ld(t),e):n},e},t.style=Jt,t.subset=function(t,n){return rt(n,t)},t.sum=function(t,n){let e=0;if(void 0===n)for(let n of t)(n=+n)&&(e+=n);else{let r=-1;for(let i of t)(i=+n(i,++r,t))&&(e+=i)}return e},t.superset=rt,t.svg=Ou,t.symbol=function(t,n){var e=null;function r(){var r;if(e||(e=r=fa()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return t="function"==typeof t?t:eb(t||Gb),n="function"==typeof n?n:eb(void 0===n?64:+n),r.type=function(n){return arguments.length?(t="function"==typeof n?n:eb(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:eb(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},t.symbolCircle=Gb,t.symbolCross=Vb,t.symbolDiamond=Zb,t.symbolSquare=nm,t.symbolStar=tm,t.symbolTriangle=rm,t.symbolWye=cm,t.symbols=fm,t.text=Nu,t.thresholdFreedmanDiaconis=function(t,n,e){return Math.ceil((e-n)/(2*(H(t,.75)-H(t,.25))*Math.pow(c(t),-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*d(t)*Math.pow(c(t),-1/3)))},t.thresholdSturges=U,t.tickFormat=_p,t.tickIncrement=R,t.tickStep=F,t.ticks=q,t.timeDay=tg,t.timeDays=ng,t.timeFormatDefaultLocale=pv,t.timeFormatLocale=Wg,t.timeFriday=cg,t.timeFridays=gg,t.timeHour=Qp,t.timeHours=Jp,t.timeInterval=Bp,t.timeMillisecond=Yp,t.timeMilliseconds=Lp,t.timeMinute=Zp,t.timeMinutes=Kp,t.timeMonday=ig,t.timeMondays=lg,t.timeMonth=vg,t.timeMonths=_g,t.timeSaturday=fg,t.timeSaturdays=yg,t.timeSecond=$p,t.timeSeconds=Wp,t.timeSunday=rg,t.timeSundays=sg,t.timeThursday=ug,t.timeThursdays=pg,t.timeTuesday=og,t.timeTuesdays=hg,t.timeWednesday=ag,t.timeWednesdays=dg,t.timeWeek=rg,t.timeWeeks=sg,t.timeYear=bg,t.timeYears=mg,t.timeout=ci,t.timer=ri,t.timerFlush=ii,t.transition=Hi,t.transpose=tt,t.tree=function(){var t=Ad,n=1,e=1,r=null;function i(i){var c=function(t){for(var n,e,r,i,o,a=new Nd(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new Nd(r[i],i)),e.parent=n;return(a.parent=new Nd(null,0)).children=[a],a}(i);if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{var f=i,s=i,l=i;i.eachBefore((function(t){t.x<f.x&&(f=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)}));var h=f===s?1:t(f,s)/2,d=h-f.x,p=n/(s.x+h+d),g=e/(l.depth||1);i.eachBefore((function(t){t.x=(t.x+d)*p,t.y=t.depth*g}))}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,c=o.parent.children[0],f=o.m,s=a.m,l=u.m,h=c.m;u=Sd(u),o=Td(o),u&&o;)c=Td(c),(a=Sd(a)).a=n,(i=u.z+l-o.z-f+t(u._,o._))>0&&(Ed(kd(u,n,r),n,i),f+=i,s+=i),l+=u.m,f+=o.m,h+=c.m,s+=a.m;u&&!Sd(a)&&(a.t=u,a.m+=l-s),o&&!Td(c)&&(c.t=o,c.m+=f-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.treemap=function(){var t=Dd,n=!1,e=1,r=1,i=[0],o=hd,a=hd,u=hd,c=hd,f=hd;function s(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(l),i=[0],n&&t.eachBefore(_d),t}function l(n){var e=i[n.depth],r=n.x0+e,s=n.y0+e,l=n.x1-e,h=n.y1-e;l<r&&(r=l=(r+l)/2),h<s&&(s=h=(s+h)/2),n.x0=r,n.y0=s,n.x1=l,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=f(n)-e,s+=a(n)-e,(l-=u(n)-e)<r&&(r=l=(r+l)/2),(h-=c(n)-e)<s&&(s=h=(s+h)/2),t(n,r,s,l,h))}return s.round=function(t){return arguments.length?(n=!!t,s):n},s.size=function(t){return arguments.length?(e=+t[0],r=+t[1],s):[e,r]},s.tile=function(n){return arguments.length?(t=ld(n),s):t},s.padding=function(t){return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()},s.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:dd(+t),s):o},s.paddingOuter=function(t){return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()},s.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:dd(+t),s):a},s.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:dd(+t),s):u},s.paddingBottom=function(t){return arguments.length?(c="function"==typeof t?t:dd(+t),s):c},s.paddingLeft=function(t){return arguments.length?(f="function"==typeof t?t:dd(+t),s):f},s},t.treemapBinary=function(t,n,e,r,i){var o,a,u=t.children,c=u.length,f=new Array(c+1);for(f[0]=a=o=0;o<c;++o)f[o+1]=a+=u[o].value;!function t(n,e,r,i,o,a,c){if(n>=e-1){var s=u[n];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=c)}var l=f[n],h=r/2+l,d=n+1,p=e-1;for(;d<p;){var g=d+p>>>1;f[g]<h?d=g+1:p=g}h-f[d-1]<f[d]-h&&n+1<d&&--d;var y=f[d]-l,v=r-y;if(a-i>c-o){var _=r?(i*v+a*y)/r:a;t(n,d,y,i,o,_,c),t(d,e,v,_,o,a,c)}else{var b=r?(o*v+c*y)/r:c;t(n,d,y,i,o,a,b),t(d,e,v,i,b,a,c)}}(0,c,t.value,n,e,r,i)},t.treemapDice=bd,t.treemapResquarify=qd,t.treemapSlice=Cd,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?Cd:bd)(t,n,e,r,i)},t.treemapSquarify=Dd,t.tsv=zu,t.tsvFormat=mu,t.tsvFormatBody=xu,t.tsvFormatRow=Mu,t.tsvFormatRows=wu,t.tsvFormatValue=Au,t.tsvParse=_u,t.tsvParseRows=bu,t.union=function(...t){const n=new Set;for(const e of t)for(const t of e)n.add(t);return n},t.utcDay=Tg,t.utcDays=Sg,t.utcFriday=Dg,t.utcFridays=Bg,t.utcHour=Mg,t.utcHours=Ag,t.utcMillisecond=Yp,t.utcMilliseconds=Lp,t.utcMinute=xg,t.utcMinutes=wg,t.utcMonday=Ng,t.utcMondays=Fg,t.utcMonth=Lg,t.utcMonths=jg,t.utcSaturday=qg,t.utcSaturdays=Yg,t.utcSecond=$p,t.utcSeconds=Wp,t.utcSunday=kg,t.utcSundays=Rg,t.utcThursday=zg,t.utcThursdays=Ig,t.utcTuesday=Cg,t.utcTuesdays=Og,t.utcWednesday=Pg,t.utcWednesdays=Ug,t.utcWeek=kg,t.utcWeeks=Rg,t.utcYear=Hg,t.utcYears=Xg,t.variance=h,t.version="6.5.0",t.window=Wt,t.xml=Ru,t.zip=function(){return tt(arguments)},t.zoom=function(){var t,n,e,r=rx,i=ix,o=cx,a=ax,u=ux,c=[0,1/0],f=[[-1/0,-1/0],[1/0,1/0]],s=250,l=Dr,h=pt("start","zoom","end"),d=500,p=0,g=10;function y(t){t.property("__zoom",ox).on("wheel.zoom",M).on("mousedown.zoom",A).on("dblclick.zoom",T).filter(u).on("touchstart.zoom",S).on("touchmove.zoom",E).on("touchend.zoom touchcancel.zoom",k).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function v(t,n){return(n=Math.max(c[0],Math.min(c[1],n)))===t.k?t:new Qm(n,t.x,t.y)}function _(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Qm(t.k,r,i)}function b(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function m(t,n,e,r){t.on("start.zoom",(function(){x(this,arguments).event(r).start()})).on("interrupt.zoom end.zoom",(function(){x(this,arguments).event(r).end()})).tween("zoom",(function(){var t=this,o=arguments,a=x(t,o).event(r),u=i.apply(t,o),c=null==e?b(u):"function"==typeof e?e.apply(t,o):e,f=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),s=t.__zoom,h="function"==typeof n?n.apply(t,o):n,d=l(s.invert(c).concat(f/s.k),h.invert(c).concat(f/h.k));return function(t){if(1===t)t=h;else{var n=d(t),e=f/n[2];t=new Qm(e,c[0]-n[0]*e,c[1]-n[1]*e)}a.zoom(null,t)}}))}function x(t,n,e){return!e&&t.__zooming||new w(t,n)}function w(t,n){this.that=t,this.args=n,this.active=0,this.sourceEvent=null,this.extent=i.apply(t,n),this.taps=0}function M(t,...n){if(r.apply(this,arguments)){var e=x(this,n).event(t),i=this.__zoom,u=Math.max(c[0],Math.min(c[1],i.k*Math.pow(2,a.apply(this,arguments)))),s=Un(t);if(e.wheel)e.mouse[0][0]===s[0]&&e.mouse[0][1]===s[1]||(e.mouse[1]=i.invert(e.mouse[0]=s)),clearTimeout(e.wheel);else{if(i.k===u)return;e.mouse=[s,i.invert(s)],gi(this),e.start()}ex(t),e.wheel=setTimeout(l,150),e.zoom("mouse",o(_(v(i,u),e.mouse[0],e.mouse[1]),e.extent,f))}function l(){e.wheel=null,e.end()}}function A(t,...n){if(!e&&r.apply(this,arguments)){var i=x(this,n,!0).event(t),a=Dn(t.view).on("mousemove.zoom",h,!0).on("mouseup.zoom",d,!0),u=Un(t,c),c=t.currentTarget,s=t.clientX,l=t.clientY;Yn(t.view),nx(t),i.mouse=[u,this.__zoom.invert(u)],gi(this),i.start()}function h(t){if(ex(t),!i.moved){var n=t.clientX-s,e=t.clientY-l;i.moved=n*n+e*e>p}i.event(t).zoom("mouse",o(_(i.that.__zoom,i.mouse[0]=Un(t,c),i.mouse[1]),i.extent,f))}function d(t){a.on("mousemove.zoom mouseup.zoom",null),Ln(t.view,i.moved),ex(t),i.event(t).end()}}function T(t,...n){if(r.apply(this,arguments)){var e=this.__zoom,a=Un(t.changedTouches?t.changedTouches[0]:t,this),u=e.invert(a),c=e.k*(t.shiftKey?.5:2),l=o(_(v(e,c),a,u),i.apply(this,n),f);ex(t),s>0?Dn(this).transition().duration(s).call(m,l,a,t):Dn(this).call(y.transform,l,a,t)}}function S(e,...i){if(r.apply(this,arguments)){var o,a,u,c,f=e.touches,s=f.length,l=x(this,i,e.changedTouches.length===s).event(e);for(nx(e),a=0;a<s;++a)c=[c=Un(u=f[a],this),this.__zoom.invert(c),u.identifier],l.touch0?l.touch1||l.touch0[2]===c[2]||(l.touch1=c,l.taps=0):(l.touch0=c,o=!0,l.taps=1+!!t);t&&(t=clearTimeout(t)),o&&(l.taps<2&&(n=c[0],t=setTimeout((function(){t=null}),d)),gi(this),l.start())}}function E(t,...n){if(this.__zooming){var e,r,i,a,u=x(this,n).event(t),c=t.changedTouches,s=c.length;for(ex(t),e=0;e<s;++e)i=Un(r=c[e],this),u.touch0&&u.touch0[2]===r.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===r.identifier&&(u.touch1[0]=i);if(r=u.that.__zoom,u.touch1){var l=u.touch0[0],h=u.touch0[1],d=u.touch1[0],p=u.touch1[1],g=(g=d[0]-l[0])*g+(g=d[1]-l[1])*g,y=(y=p[0]-h[0])*y+(y=p[1]-h[1])*y;r=v(r,Math.sqrt(g/y)),i=[(l[0]+d[0])/2,(l[1]+d[1])/2],a=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],a=u.touch0[1]}u.zoom("touch",o(_(r,i,a),u.extent,f))}}function k(t,...r){if(this.__zooming){var i,o,a=x(this,r).event(t),u=t.changedTouches,c=u.length;for(nx(t),e&&clearTimeout(e),e=setTimeout((function(){e=null}),d),i=0;i<c;++i)o=u[i],a.touch0&&a.touch0[2]===o.identifier?delete a.touch0:a.touch1&&a.touch1[2]===o.identifier&&delete a.touch1;if(a.touch1&&!a.touch0&&(a.touch0=a.touch1,delete a.touch1),a.touch0)a.touch0[1]=this.__zoom.invert(a.touch0[0]);else if(a.end(),2===a.taps&&(o=Un(o,this),Math.hypot(n[0]-o[0],n[1]-o[1])<g)){var f=Dn(this).on("dblclick.zoom");f&&f.apply(this,arguments)}}}return y.transform=function(t,n,e,r){var i=t.selection?t.selection():t;i.property("__zoom",ox),t!==i?m(t,n,e,r):i.interrupt().each((function(){x(this,arguments).event(r).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()}))},y.scaleBy=function(t,n,e,r){y.scaleTo(t,(function(){var t=this.__zoom.k,e="function"==typeof n?n.apply(this,arguments):n;return t*e}),e,r)},y.scaleTo=function(t,n,e,r){y.transform(t,(function(){var t=i.apply(this,arguments),r=this.__zoom,a=null==e?b(t):"function"==typeof e?e.apply(this,arguments):e,u=r.invert(a),c="function"==typeof n?n.apply(this,arguments):n;return o(_(v(r,c),a,u),t,f)}),e,r)},y.translateBy=function(t,n,e,r){y.transform(t,(function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),f)}),null,r)},y.translateTo=function(t,n,e,r,a){y.transform(t,(function(){var t=i.apply(this,arguments),a=this.__zoom,u=null==r?b(t):"function"==typeof r?r.apply(this,arguments):r;return o(Jm.translate(u[0],u[1]).scale(a.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,f)}),r,a)},w.prototype={event:function(t){return t&&(this.sourceEvent=t),this},start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){var n=Dn(this.that).datum();h.call(t,this.that,new Km(t,{sourceEvent:this.sourceEvent,target:y,type:t,transform:this.that.__zoom,dispatch:h}),n)}},y.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:Zm(+t),y):a},y.filter=function(t){return arguments.length?(r="function"==typeof t?t:Zm(!!t),y):r},y.touchable=function(t){return arguments.length?(u="function"==typeof t?t:Zm(!!t),y):u},y.extent=function(t){return arguments.length?(i="function"==typeof t?t:Zm([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),y):i},y.scaleExtent=function(t){return arguments.length?(c[0]=+t[0],c[1]=+t[1],y):[c[0],c[1]]},y.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],y):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]},y.constrain=function(t){return arguments.length?(o=t,y):o},y.duration=function(t){return arguments.length?(s=+t,y):s},y.interpolate=function(t){return arguments.length?(l=t,y):l},y.on=function(){var t=h.on.apply(h,arguments);return t===h?y:t},y.clickDistance=function(t){return arguments.length?(p=(t=+t)*t,y):Math.sqrt(p)},y.tapDistance=function(t){return arguments.length?(g=+t,y):g},y},t.zoomIdentity=Jm,t.zoomTransform=tx,Object.defineProperty(t,"__esModule",{value:!0})}));

/*! @vimeo/player v2.15.0 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var e="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function l(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(e){var t,n=0<arguments.length&&void 0!==e?e:{},r=n.id,o=n.url,i=r||o;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(t=i,!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t)return"https://vimeo.com/".concat(i);if(l(i))return i.replace("http:","https:");if(r)throw new TypeError("“".concat(r,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var t=void 0!==Array.prototype.indexOf,n="undefined"!=typeof window&&void 0!==window.postMessage;if(!(e||t&&n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var o,a,u,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(u(this,"_id","_WeakMap_"+h()+"."+h()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function d(e,t){if(!v(e)||!a.call(e,"_id"))throw new TypeError(t+" method called on incompatible receiver "+typeof e)}function h(){return Math.random().toString().substring(2)}function v(e){return Object(e)===e}(o="undefined"!=typeof self?self:"undefined"!=typeof window?window:c).WeakMap||(a=Object.prototype.hasOwnProperty,u=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n},o.WeakMap=(u(f.prototype,"delete",function(e){if(d(this,"delete"),!v(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),u(f.prototype,"get",function(e){if(d(this,"get"),v(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),u(f.prototype,"has",function(e){if(d(this,"has"),!v(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),u(f.prototype,"set",function(e,t){if(d(this,"set"),!v(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:u(e,this._id,[e,t]),this}),u(f,"_polyfill",!0),f));var m,p=(function(e){var t,n,r;r=function(){var t,n,r,o,i,a,e=Object.prototype.toString,u="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function c(e,t){this.fn=e,this.self=t,this.next=void 0}function l(e,t){r.add(e,t),n=n||u(r.drain)}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function f(){for(var e=0;e<this.chain.length;e++)!function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=s(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function d(e){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=s(e))?l(function(){var t=new m(r);try{n.call(e,function(){d.apply(t,arguments)},function(){h.apply(t,arguments)})}catch(e){h.call(t,e)}}):(r.msg=e,r.state=1,0<r.chain.length&&l(f,r))}catch(e){h.call(new m(r),e)}}}function h(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&l(f,t))}function v(e,n,r,o){for(var t=0;t<n.length;t++)!function(t){e.resolve(n[t]).then(function(e){r(t,e)},o)}(t)}function m(e){this.def=e,this.triggered=!1}function p(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function y(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new p(this);this.then=function(e,t){var n={success:"function"!=typeof e||e,failure:"function"==typeof t&&t};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),r.chain.push(n),0!==r.state&&l(f,r),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){d.call(r,e)},function(e){h.call(r,e)})}catch(e){h.call(r,e)}}var g=t({},"constructor",y,!(r={add:function(e,t){a=new c(e,t),i?i.next=a:o=a,i=a,a=void 0},drain:function(){var e=o;for(o=i=n=void 0;e;)e.fn.call(e.self),e=e.next}}));return t(y.prototype=g,"__NPO__",0,!1),t(y,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");e(n)})}),t(y,"reject",function(n){return new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");t(n)})}),t(y,"all",function(t){var a=this;return"[object Array]"!=e.call(t)?a.reject(TypeError("Not an array")):0===t.length?a.resolve([]):new a(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");var r=t.length,o=Array(r),i=0;v(a,t,function(e,t){o[e]=t,++i===r&&n(o)},e)})}),t(y,"race",function(t){var r=this;return"[object Array]"!=e.call(t)?r.reject(TypeError("Not an array")):new r(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");v(r,t,function(e,t){n(t)},e)})}),y},(n=c)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}(m={exports:{}}),m.exports),y=new WeakMap;function g(e,t,n){var r=y.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),y.set(e.element,r)}function w(e,t){return(y.get(e.element)||{})[t]||[]}function b(e,t,n){var r=y.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],y.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),y.set(e.element,r),r[t]&&0===r[t].length}var k=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function E(r,e){var t=1<arguments.length&&void 0!==e?e:{};return k.reduce(function(e,t){var n=r.getAttribute("data-vimeo-".concat(t));return!n&&""!==n||(e[t]=""===n?1:n),e},t)}function T(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function P(i,e,t){var a=1<arguments.length&&void 0!==e?e:{},u=2<arguments.length?t:void 0;return new Promise(function(t,n){if(!l(i))throw new TypeError("“".concat(i,"” is not a vimeo.com url."));var e="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i));for(var r in a)a.hasOwnProperty(r)&&(e+="&".concat(r,"=").concat(encodeURIComponent(a[r])));var o=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);o.open("GET",e,!0),o.onload=function(){if(404!==o.status)if(403!==o.status)try{var e=JSON.parse(o.responseText);if(403===e.domain_status_code)return T(e,u),void n(new Error("“".concat(i,"” is not embeddable.")));t(e)}catch(e){n(e)}else n(new Error("“".concat(i,"” is not embeddable.")));else n(new Error("“".concat(i,"” was not found.")))},o.onerror=function(){var e=o.status?" (".concat(o.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},o.send()})}function M(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function F(e,t,n){var r,o;e.element.contentWindow&&e.element.contentWindow.postMessage&&(r={method:t},void 0!==n&&(r.value=n),8<=(o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin))}function _(n,r){var t,e,o=[];(r=M(r)).event?("error"===r.event&&w(n,r.data.method).forEach(function(e){var t=new Error(r.data.message);t.name=r.data.name,e.reject(t),b(n,r.data.method,e)}),o=w(n,"event:".concat(r.event)),t=r.data):!r.method||(e=function(e,t){var n=w(e,t);if(n.length<1)return!1;var r=n.shift();return b(e,t,r),r}(n,r.method))&&(o.push(e),t=r.value),o.forEach(function(e){try{if("function"==typeof e)return void e.call(n,t);e.resolve(t)}catch(e){}})}var x,C,j,N=new WeakMap,A=new WeakMap,q={},Player=function(){function Player(u){var e,t,c=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Player),window.jQuery&&u instanceof jQuery&&(1<u.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),u=u[0]),"undefined"!=typeof document&&"string"==typeof u&&(u=document.getElementById(u)),e=u,!Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"===u.nodeName||(t=u.querySelector("iframe"))&&(u=t),"IFRAME"===u.nodeName&&!l(u.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(N.has(u))return N.get(u);this._window=u.ownerDocument.defaultView,this.element=u,this.origin="*";var r,o=new p(function(i,a){var e;c._onMessage=function(e){if(l(e.origin)&&c.element.contentWindow===e.source){"*"===c.origin&&(c.origin=e.origin);var t=M(e.data);if(t&&"error"===t.event&&t.data&&"ready"===t.data.method){var n=new Error(t.data.message);return n.name=t.data.name,void a(n)}var r=t&&"ready"===t.event,o=t&&"ping"===t.method;if(r||o)return c.element.setAttribute("data-ready","true"),void i();_(c,t)}},c._window.addEventListener("message",c._onMessage),"IFRAME"!==c.element.nodeName&&P(s(e=E(u,n)),e,u).then(function(e){var t,n,r,o=T(e,u);return c.element=o,c._originalElement=u,t=u,n=o,r=y.get(t),y.set(n,r),y.delete(t),N.set(c.element,c),e}).catch(a)});return A.set(this,o),N.set(this.element,this),"IFRAME"===this.element.nodeName&&F(this,"ping"),q.isEnabled&&(r=function(){return q.exit()},q.on("fullscreenchange",function(){(q.isFullscreen?g:b)(c,"event:exitFullscreen",r),c.ready().then(function(){F(c,"fullscreenchange",q.isFullscreen)})})),this}var e,t,n;return e=Player,(t=[{key:"callMethod",value:function(n,e){var r=this,o=1<arguments.length&&void 0!==e?e:{};return new p(function(e,t){return r.ready().then(function(){g(r,n,{resolve:e,reject:t}),F(r,n,o)}).catch(t)})}},{key:"get",value:function(n){var r=this;return new p(function(e,t){return n=i(n,"get"),r.ready().then(function(){g(r,n,{resolve:e,reject:t}),F(r,n)}).catch(t)})}},{key:"set",value:function(n,r){var o=this;return new p(function(e,t){if(n=i(n,"set"),null==r)throw new TypeError("There must be a value to set.");return o.ready().then(function(){g(o,n,{resolve:e,reject:t}),F(o,n,r)}).catch(t)})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===w(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),g(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");b(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=A.get(this)||new p(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return p.resolve(e)}},{key:"addCuePoint",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};return this.callMethod("addCuePoint",{time:e,data:n})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return q.isEnabled?q.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return q.isEnabled?q.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return q.isEnabled?p.resolve(q.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var n=this;return new p(function(e){var t;A.delete(n),N.delete(n.element),n._originalElement&&(N.delete(n._originalElement),n._originalElement.removeAttribute("data-vimeo-initialized")),n.element&&"IFRAME"===n.element.nodeName&&n.element.parentNode&&n.element.parentNode.removeChild(n.element),n.element&&"DIV"===n.element.nodeName&&n.element.parentNode&&(n.element.removeAttribute("data-vimeo-initialized"),(t=n.element.querySelector("iframe"))&&t.parentNode&&t.parentNode.removeChild(t)),n._window.removeEventListener("message",n._onMessage),e()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&r(e.prototype,t),n&&r(e,n),Player}();return e||(x=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),C={fullscreenchange:x.fullscreenchange,fullscreenerror:x.fullscreenerror},j={request:function(o){return new Promise(function(e,t){function n(){j.off("fullscreenchange",n),e()}j.on("fullscreenchange",n);var r=(o=o||document.documentElement)[x.requestFullscreen]();r instanceof Promise&&r.then(n).catch(t)})},exit:function(){return new Promise(function(t,e){var n,r;j.isFullscreen?(n=function e(){j.off("fullscreenchange",e),t()},j.on("fullscreenchange",n),(r=document[x.exitFullscreen]())instanceof Promise&&r.then(n).catch(e)):t()})},on:function(e,t){var n=C[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=C[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(j,{isFullscreen:{get:function(){return Boolean(document[x.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[x.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[x.fullscreenEnabled])}}}),q=j,function(e){function n(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}var t=0<arguments.length&&void 0!==e?e:document;[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=E(t);P(s(e),e,t).then(function(e){return T(e,t)}).catch(n)}catch(e){n(e)}})}(),function(e){var r=0<arguments.length&&void 0!==e?e:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(e){if(l(e.origin)&&e.data&&"spacechange"===e.data.event)for(var t=r.querySelectorAll("iframe"),n=0;n<t.length;n++)if(t[n].contentWindow===e.source){t[n].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}}))}()),Player});
