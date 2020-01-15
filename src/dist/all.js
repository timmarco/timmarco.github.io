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

TimApp.prototype.addExampleSwipes = function() {
  const app = this;

  const container = d3.select("#exampleContainer")
    .append("div")
    .attr("id","swipeContainer")
    .style("overflow","hidden")
    .style("visibility","hidden")
    .style("position","relative");

  const swipeWrap = container
    .append("div")
    .style("overflow","hidden")
    .style("position","relative");

  app.swipe = new Swipe(container.node(),{
    "callback":(index) => {
      // app.swipeIndicator.update(index);
    }
  });


  return swipeWrap;
}

TimApp.prototype.addExamples = function(list) {
  const app = this;
  const examples = [];

  if(app.browserInfo.isTouchDevice) {
    // app.swipeIndicator = new SwipeIndicator(app,list.length + 1);
    // app.swipeContainer = app.addExampleSwipes();
    list.forEach((item,index) => {
      examples.push(new MobileWorkExample(item,index,app));
    });

  } else {
    list.forEach((item,index) => {
      examples.push(new WorkExample(item,index,app))
    });
  }


  return examples;
}

TimApp.prototype.getBrowserInfo = function() {
  const app = this;

  const browserInfo = {};

  browserInfo.isTouchDevice = 'ontouchstart' in document.documentElement;
  browserInfo.userAgent = navigator.userAgent;
  browserInfo.isFirefox = navigator.userAgent.indexOf("Firefox") == -1 ? false : true;
  browserInfo.isSafari = checkSafari();

  function checkSafari() {
    if(navigator.userAgent.indexOf("Safari") != -1) {
      if(navigator.userAgent.indexOf("Chrome") == -1) {
        return true;
      }
    }
    return false;
  }

  return browserInfo;
}

function Headline(options) {
  const headline = this;
  init(options);
  return headline;

  function init(options) {
    headline.parent = options.parent;
    headline.where = options.where;
    headline.string = options.string;

    headline.hasTransitioned = false;

    headline.layout = headline.defineLayout(options);
    headline.style = headline.defineStyle(options);

    headline.svg = headline.addSvg();
    headline.defs = headline.addDefs();
    headline.background = headline.addBackground();
    headline.text = headline.addText();
    headline.curtainGroup = headline.addCurtainGroup();
    headline.accent = headline.addAccent();

    headline.resize();

  }
}

function LineChart(options) {
  const chart = this;
  init(options);
  return chart;

  function init(options) {
    chart.where = options.where;
    chart.container = chart.addContainer();
    chart.svg = chart.addSvg();
    chart.axes = chart.addAxes();
    chart.labels = chart.addLabels();
    chart.grid = chart.addGrid();
    chart.line = chart.addLine();
  }
}

function MobileWorkExample(options,index,app) {
  const example = this;
  init(options,index,app);
  return example;

  function init(options,index,app) {
    example.parent = app;
    example.index = index;
    example.options = options;
    example.text = options.text;
    example.description = options.description;
    example.identifier = options.identifier;
    example.imagePath = options.mobileImage;
    example.imageSize = options.imageSize;
    example.href = options.href;
    example.index = index;

    example.layout = example.defineLayout();
    // example.swipeContainer = example.addSwipeDiv();
    example.swipeImage = example.addSwipeImage();

  }
}

function ScrollManager(options) {
  const manager = this;
  init(options);
  return manager;

  function init(options) {
    manager.parent = options.parent;

    manager.attachResizeListener();
    manager.scrollOffset = manager.defineOffset();
    manager.triggerPoints = manager.defineTriggerPoints();
    manager.scrollEvents = manager.defineEvents();
    manager.attachScrollListener();

  }
}

function SkillBox(parent) {
    const box = this;

    init(parent);

    return box;

    function init(parent) {
      box.parent = parent;

      box.layout = box.defineLayout();
      box.skillSvgs = box.addSkillSvgs();

      box.svg = box.addSvg();
      box.layers = box.addLayers();
      box.buttons = box.addButtons();
      box.layoutButtons()

      box.buttons.languages.activate();
      box.applyLayout();


    }
}

function SkillBoxButton(options) {
  const button = this;
  init(options);
  return button;

  function init(options) {
    button.parent = options.parent;
    button.key = options.key;
    button.group = button.addGroup();
    button.rect = button.addRect();
    button.curtain = button.addCurtain();
    button.text = button.addText(options.text);
    button.highlightLine = button.addHighlight();

    button.skillGroup = button.addSkillGroup(options.skills);

    button.resizeRect();

  }

}

function SkillBoxCard(options) {
  const skill = this;
  init(options);
  return skill;

  function init(options) {
    skill.index = options.index;
    skill.parent = options.parent;
    skill.skillGroup = options.skillGroup;
    skill.details = options.skill;
    skill.coords = options.coords;
    skill.bounds = options.bounds;
    skill.imageSource = options.skill.imageSource;
    skill.imageSize = options.skill.imageSize;

    skill.layout = skill.defineLayout();

    skill.group = skill.addGroup();
    skill.layers = skill.addLayers();
    skill.image = skill.addImage();
    skill.headlineRect = skill.addHeadlineRect();
    skill.headlineText = skill.addHeadlineText();
    skill.body = skill.addBody();

    skill.resizeRect();
    skill.layoutCard();



  }
}

function SkillBoxGroup(options) {
  const skillGroup = this;
  init(options);
  return skillGroup;

  function init(options) {
    skillGroup.parent = options.parent;
    skillGroup.skills = options.skills;
    skillGroup.layout = skillGroup.defineLayout();
    skillGroup.group = skillGroup.addGroup();
    skillGroup.skillCards = skillGroup.addSkillCards();
  }
}

function SwipeIndicator(app,count) {
  const indicator = this;
  init(app,count);
  return indicator;

  function init(app,count) {
    indicator.parent = app;
    indicator.count = count;

    indicator.currentIndex = 0;

    indicator.layout = indicator.defineLayout();
    indicator.scale = indicator.defineScale();
    indicator.svg = indicator.addSvg();
    indicator.circles = indicator.addCircles();

    indicator
      .update(indicator.currentIndex);
  }
}

function Timeline(options) {
  const timeline = this;
  init(options);
  return timeline;


  function init(options) {
    timeline.where = options.where;
    timeline.hasStarted = false;
    timeline.data = timeline.defineData();
    timeline.layout = timeline.defineLayout();
    timeline.style = timeline.defineStyle();
    timeline.scale = timeline.defineScale();
    timeline.timeScale = timeline.defineTimeScale();

    timeline.heading = timeline.addHeading();
    timeline.svg = timeline.addSvg();
    timeline.layers = timeline.addLayers();
    timeline.axis = timeline.addAxis();
    timeline.axisGroup = timeline.addAxisGroup();

    timeline.companies = timeline.addCompanies();

    timeline.applyLayout();

  }
}

function WorkExample(options,index,parent) {
  const example = this;
  init(options,index,parent);
  return example;

  function init(options,index,parent) {

    example.parent = parent;
    example.text = options.text;
    example.description = options.description;
    example.identifier = options.identifier;
    example.imagePaths = options.imagePaths;
    example.imageSize = options.imageSize;
    example.href = options.href;
    example.index = index;

    example.layout = example.defineLayout();
    example.svg = example.addSvg();
    example.defs = example.addDefs();
    example.filters = example.addFilters();
    example.layers = example.addLayers();
    example.scales = example.addScales();
    example.images = example.addImages();
    example.headline = example.addHeadline();
    example.body = example.addTextBody();
    example.hotspot = example.addHotSpot();

  }
}


Headline.prototype.defineLayout = function(options) {
  const headline = this;

  const layout = options.layout ? options.layout : {};

  layout.size = layout.size ? layout.size : {};
  layout.size.width = layout.size.width ? layout.size.width : d3.select(options.where).node().offsetWidth;
  layout.size.height = layout.size.height ? layout.size.height : layout.size.width  * 0.0675;

  layout.midlines = layout.midlines ? layout.midlines : {};
  layout.midlines.x = layout.size.width / 2;
  layout.midlines.y = layout.size.height / 2;

  layout.accent = layout.accent ? layout.accent : {};
  layout.accent.size = layout.accent.size ? layout.accent.size : {};
  layout.accent.size.width = layout.accent.size.width ? layout.accent.size.width : layout.size.width / 128;
  layout.accent.size.height = layout.accent.size.height ? layout.accent.size.height : layout.size.height;

  layout.background = layout.background ? layout.background : {};
  layout.background.size = layout.background.size ? layout.background.size : {};
  layout.background.size.height = layout.background.size.height ? layout.background.size.height : layout.size.height;
  layout.background.size.width = layout.background.size.width ? layout.background.size.width : layout.size.width;

  layout.text = layout.text ? layout.text : {};
  layout.text.x = layout.text.x ? layout.text.x : layout.size.width / 24;
  layout.text.y = layout.text.y ? layout.text.y : layout.midlines.y;
  layout.text.verticalPadding = layout.text.verticalPadding ? layout.text.verticalPadding : layout.size.height / 24;

  return layout;
}

Headline.prototype.defineStyle = function(options) {
  const headline = this;

  const style = options.style ? options.style : {};

  style.background = style.background ? style.background : {};
  style.background.fill = style.background.fill ? style.background.fill : "black";

  style.accent = style.accent ? style.accent : {};
  style.accent.fill = style.accent.fill ? style.accent.fill : "red";

  style.text = style.text ? style.text : {};
  style.text.fontFamily = style.text.fontFamily ? style.text.fontFamily : "Oswald";
  style.text.fontWeight = style.text.fontWeight ? style.text.fontWeight : 500;
  style.text.fontFill = style.text.fontFill ? style.text.fontFill : "white";

  return style;
}

Headline.prototype.addAccent = function() {
  const headline = this;

  const curtain = headline.curtainGroup
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",headline.layout.size.width)
    .attr("height",headline.layout.size.height)
    .attr("fill","white");

  const accent = headline.curtainGroup
    .append("rect")
    .attr("x",0)
    .attr("y",headline.layout.size.height / 2)
    .attr("width",headline.layout.accent.size.width)
    .attr("height",0)
    .attr("fill",headline.style.accent.fill);


  return accent;
}

Headline.prototype.addBackground = function() {
  const headline = this;

  const background = headline.svg
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",headline.layout.background.size.width)
    .attr("height",headline.layout.background.size.height)
    .attr("fill",headline.style.background.fill);

  return background;
}

Headline.prototype.addCurtainGroup = function() {
  const headline = this;
  const group = headline.svg
    .append("g")
    .attr("transform","translate(0,0)");

  return group;    
}

Headline.prototype.addDefs = function() {
  const headline = this;

  const defs = headline.svg
    .append("defs");

  return defs;
}

Headline.prototype.addSvg = function() {
  const headline = this;

  const svg = d3.select(headline.where)
    .append("svg")
    .attr("width",headline.layout.size.width)
    .attr("height",headline.layout.size.height);

  return svg;
}

Headline.prototype.addText = function() {
  const headline = this;

  const text = headline.svg
    .append("text")
    .attr("x",headline.layout.text.x)
    .attr("y",headline.layout.text.y)
    .attr("text-anchor","start")
    .attr("dominant-baseline","central")
    .attr("fill",headline.style.text.fontFill)
    .attr("font-family",headline.style.text.fontFamily)
    .attr("font-weight",headline.style.text.fontWeight)
    .attr("font-size","1em")
    .text(headline.string);

  return text;
}

Headline.prototype.animateIn = function() {
  const headline = this;

  if(!headline.hasTransitioned) {

    headline.accent
      .transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr("height",headline.layout.accent.size.height)
      .attr("y",0)
      .transition()
      .delay(500)
      .duration(250)
      .ease(d3.easeCubicOut)
      .attr("height",0)
      .attr("y",headline.layout.size.height / 2);

    const endX = headline.background
      .node()
      .getBBox()
      .width;

    headline.curtainGroup
      .transition()
      .ease(d3.easeLinear)
      .duration(375)
      .delay(250)
      .attr("transform","translate("+endX+",0)");

    headline.hasTransitioned = true;
  }

  const textEndPosition = headline.text
    .attr("x");

  const textStartWidth = headline.text.node()
    .getBBox()
    .width;

  const textStartPosition = -textEndPosition - textStartWidth;

  const backgroundEndPosition = headline.background
    .attr("width");

  const accentEndHeight = headline.accent
    .attr("height");


  // headline.accent
  //   .transition()
  //   .duration(250)
  //   .delay(0)
  //   .ease(d3.easeCubic)
  //   .attr("height",headline.animationFactors.accentEndHeight)
  //   .attr("y",0);
  //
  // headline.background
  //   .transition()
  //   .delay(175)
  //   .duration(625)
  //   .ease(d3.easeExp)
  //   .attr("x",0);
  //
  // headline.text
  //   .transition()
  //   .duration(250)
  //   .delay(250)
  //   .ease(d3.easeExp)
  //   .attr("opacity",1)
  //   .attr("x",headline.animationFactors.textEndPosition);

  return headline;
}

Headline.prototype.resize = function() {
  const headline = this;
  const factors = {};

  const textDesiredHeight = headline.layout.size.height - headline.layout.text.verticalPadding;
  const textRenderedHeight = headline.text
    .node()
    .getBBox()
    .height;

  const textRatio = textDesiredHeight / textRenderedHeight;

  headline.text
    .attr("font-size",textRatio + "em");

  const updatedTextRenderedSize = headline.text
    .node()
    .getBBox();

  const newRectWidth = (2 * updatedTextRenderedSize.x) + updatedTextRenderedSize.width;

  headline.background
    .attr("width",newRectWidth);

  return headline;
}

MobileWorkExample.prototype.addSwipeDiv = function() {
  const example = this;

  const swipeDiv = example.parent.swipeContainer
      .append("div")
      .style("background-color","red")
      .classed("swipe-wrap",true);

  const fullPath = "assets/mobileImages/" + example.imagePath;

  const swipeImage = swipeDiv
      .append("img")
      .attr("src",fullPath);


  return swipeDiv;
}

MobileWorkExample.prototype.addSwipeImage = function() {
  const example = this;

  // const swipeDiv = example.swipeContainer
  //     .append("div");

  const fullPath = "assets/mobileImages/" + example.imagePath;

  const link = d3.select("#exampleContainer")
    .append("a")
    .attr("target","_new")
    .attr("href",example.href);

  const swipeImage = link
      .append("img")
      .style("width","100%")
      .attr("src",fullPath);



  return swipeImage;
}

MobileWorkExample.prototype.addTapButton = function() {
  const example = this;

  const tapLink = example.layers.tap
    .append("a")
    .attr("href",example.href)
    .attr("target","_new");

  const tapGroup = tapLink
    .append("g");

  const background = tapGroup
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("fill","green");

  const tapText = tapGroup
    .append("text")
    .attr("dx",10)
    .attr("text-anchor","start")
    .attr("font-family","Oswald")
    .attr("font-size","4em")
    .attr("fill","white")
    .attr("dominant-baseline","text-before-edge")
    .attr("font-weight",500)
    .text("TAP HERE TO READ");

  const textSize = tapText
    .node()
    .getBBox();

  background
    .attr("width",textSize.width + 20)
    .attr("height",textSize.height);

  const leftAlign = example.layout.size.width / 2 - textSize.width / 2 - 10;
  const topAlign = example.layout.size.height * 0.67;

  tapGroup
    .attr("transform","translate("+leftAlign+","+topAlign+")");

  return tapGroup;
}

MobileWorkExample.prototype.defineLayout = function() {
  const example = this;

  const layout = {};

  layout.size = {};
  layout.size.width = window.innerWidth * 0.9;
  layout.size.height = window.innerHeight * 0.75;

  return layout;
}

ScrollManager.prototype.attachResizeListener = function() {
  const manager = this;

  window.addEventListener("resize",function() {
    manager.parent.examples.forEach((example) => {
      example.resize();
    });
  });
}

ScrollManager.prototype.attachScrollListener = function() {
  const manager = this;

  window.addEventListener('scroll',manager.scrollMethod());


}

ScrollManager.prototype.defineEvents = function() {
  const manager = this;

  const events = {};

  events.resume = () => {
    manager.parent.timeline
      .animateIn();
  }



  return events;
}

ScrollManager.prototype.defineOffset = function() {
  const manager = this;

  scrollOffset = window.innerHeight * 0.125;


  return scrollOffset;
}

ScrollManager.prototype.defineTriggerPoints = function() {
  const manager = this;

  const triggerPoints = {};

  d3.selectAll(".triggerPoint")
    .each(function() {
      const element = d3.select(this);

      const triggerName = d3.select(this)
        .attr("data-trigger-point");

      const triggerPosition = element.node()
        .getBoundingClientRect()
        .top;

      triggerPoints[triggerPosition] = triggerName;
    });

  return triggerPoints;
}

ScrollManager.prototype.scrollMethod = function() {
  return () => {
    const manager = this;

    const scrollPosition = window.scrollY + window.innerHeight - manager.scrollOffset;
    const triggerPositions = Object.keys(manager.triggerPoints).map((point) => { return +point; });

    let current;
    let next;

    triggerPositions.forEach((position) => {
      if(scrollPosition >= position) {
        current = position;
      }
    });

    if(current) {
      manager.triggerEvent(manager.triggerPoints[current]);
    }

  }

}

ScrollManager.prototype.triggerEvent = function(eventName) {
  const manager = this;

  if(eventName in manager.scrollEvents) {
    manager.scrollEvents[eventName]();
  } else {
  }

}

SkillBox.prototype.showSkill = function(skill) {
  const box = this;

  Object.keys(box.buttons).forEach((key) => {
    if(key == skill) {
      box.buttons[key].activate();
    } else {
      box.buttons[key].deactivate();
    }
  })

  return box;
}

SkillBox.prototype.defineLayout = function() {
  const layout = {};

  layout.size = {};
  layout.size.width = window.innerWidth * 0.8;
  layout.size.height = window.innerHeight / 12;

  return layout;
}

SkillBox.prototype.addButtons = function() {
  const box = this;
  const buttons = {};

  buttons.languages = new SkillBoxButton({
    "parent":box,
    "text":"CODING",
    "key":"languages",
    "skills":[
      {
        "headline":"WEB DEVELOPMENT",
        "description":"<p>I've been creating experiences for the web ever since I first picked up a copy of <em>HTML 3.1 For Dummies</em> in the late '90s. These days, my preferred tools include:<ul style='font-size:0.85em'><li>HTML</li><li>CSS</li><li>Javascript</li><li>NodeJS</li><li>AngularJS / Angular 2</li><li>PHP</li><li>WebGL / THREE.js</li></ul>",
        "imageSource":"assets/skillImages/webDevelopment.jpg",
        "imageSize":{
          "width":3360,
          "height":1842
        }
      },
      {
        "headline":"SWIFT",
        "description":"<p>I use Apple's main language for creating internal tools and prototypes running on macOS, iOS, and tvOS. My main focus has been on using AR Kit, SceneKit and SpriteKit to create engaging multimedia experiences.</p>",
        "imageSource":"assets/skillImages/swift.jpg",
        "imageSize":{
          "width":1926,
          "height":1086
        }
      },
      {
        "headline":"PYTHON",
        "description":"<p>The Swiss Army Knife of languages. I use Python for everything from data science and machine learning to creating parameterized models in Blender.</p>",
        "imageSource":"assets/skillImages/python.jpg",
        "imageSize":{
          "width":2470,
          "height":1420
        }
      },
      {
        "headline":"C#",
        "description":"<p>A more recent addition to my toolkit, I use C# mainly for creating VR Experiences and tools in Unity.</p>",
        "imageSource":"assets/skillImages/cSharp.jpg",
        "imageSize":{
          "width":2512,
          "height":1418
        }
      }
    ]
  });

  buttons.creative = new SkillBoxButton({
    "parent":box,
    "text":"CREATIVE & PRODUCTION",
    "key":"creative",
    "skills":[
      {
        "headline":"3D MODELING",
        "description":"<p>I've created 3D models for both virtual assets (e.g., for VR experiences and CGI video) and as physical models to be printed and fabricated. In either case, my tool of choice is Blender.</p>",
        "imageSource":"assets/skillImages/3dModeling.jpg",
        "imageSize":{
          "width":1740,
          "height":898
        }
      },
      {
        "headline":"MOTION GRAPHICS / VIDEO",
        "description":"<p>I create shortform videos (like the one at the top of this page) to explore, explain, and promote tools and concepts. I typically use Blender for CGI and Motion Graphics, and Final Cut Pro for editing.</p>",
        "imageSource":"assets/skillImages/video.jpg",
        "imageSize":{
          "width":3360,
          "height":1934
        }
      },
      {
        "headline":"INFORMATION DESIGN",
        "description":"<p>A central focus throughout my career has been creating tools that help users understand, analyze, and manipulate data. Using d3.js, I have created everything from simple reporting software to complex platforms for data interaction.</p>",
        "imageSource":"assets/skillImages/infoDesign.jpg",
        "imageSize":{
          "width":2556,
          "height":1436
        }
      },
      {
        "headline":"INTERACTION / EXPERIENCE DESIGN",
        "description":"<p>Interactions the most important aspect of digital media, and their design is one of my driving passions. While I'm comfortable with tools like Sketch and Adobe XD, my tools of choice for the bulk of interaction and experience are blank paper and a Pilot Precise V5 pen.",
        "imageSource":"assets/skillImages/userInterface.jpg",
        "imageSize":{
          "width":1910,
          "height":1074
        }
      }
    ]
  });

  buttons.prototyping = new SkillBoxButton({
    "parent":box,
    "text":"PROTOTYPING",
    "key":"prototyping",
    "skills":[
      {
        "headline":"MICROCONTROLLERS",
        "description":"<p>Working with microcontollers is both a hobby and a professional activity for me. I've used Raspberry Pis, Arduinos, and ESP-32s to create gas detectors, automated lighting, and a sous-vide oven.</p>",
        "imageSource":"assets/skillImages/soldering.jpg",
        "imageSize":{
          "width":1920,
          "height":1080
        }
      },
      {
        "headline":"PHYSICAL PROTOTYPING",
        "description":"<p>Existing physical devices haven't always suited my needs. So I've had to <span style='font-weight:800; color:#984BA3'>create my own physical objects</span>, using tools including: <ul><li>Foams &amp; foamcore</li><li>3D Printers (Ultimaker 3, Formlabs)</li><li>CNC devices (Glowforge, Silhoutte Cameo)</li></p>",
        "imageSource":"assets/skillImages/physicalPrototyping.jpg",
        "imageSize":{
          "width":1920,
          "height":1080
        }
      },
      {
        "headline":"STORYBOARDING",
        "description":"<p>While I'll never be mistaken for a professional illustrator, I'm a strong believer in the power of graphical storytelling in getting a full view of the user experience.</p>",
        "imageSource":"assets/skillImages/realStoryboard.jpg",
        "imageSize":{
          "width":3840,
          "height":2160
        }
      }//,
      // {
      //   "headline":"USER RESEARCH",
      //   "description":"<p>I learned early on that the best interaction design comes from observation rather than inspiration. The best laid plans of mice and designers often go awry, so it's vitally important to understand who users are and how they conceive of interactions.</p>",
      //   "imageSource":"assets/skillImages/motionGraphics.jpg",
      //   "imageSize":{
      //     "width":1882,
      //     "height":1084
      //   }
      // }
    ]
  });

  buttons.spatialComputing = new SkillBoxButton({
    "parent":box,
    "text":"SPATIAL COMPUTING",
    "key":"spatialComputing",
    "skills":[
      {
        "headline":"AR KIT",
        "description":"<p>ARKit is Apple's API for creating <span style='font-weight:800;'>Augmented and Mixed Reality</span> content for iOS devices. Since 2017, I have been using ARKit to create a variety of exploratory applications with ARKit, including museum-like tours, games, and utilities.</p>",
        "imageSource":"assets/skillImages/arkit.jpg",
        "imageSize":{
          "width":1920,
          "height":1080
        }
      },
      {
        "headline":"UNITY",
        "description":"<p>Unity is an ideal game engine for creating <span style='font-weight:800;'>virtual reality experiences</span>. I use it primarily to develop training content for enterprise applications.</p>",
        "imageSource":"assets/skillImages/unity.jpg",
        "imageSize":{
          "width":2880,
          "height":1626
        }
      },
      {
        "headline":"PERFORMANCE CAPTURE",
        "description":"<p><span style='font-weight:800;'>Animating realistic humanoid characters</span> is one of the primary challenges in creating Spatial Computing experiences. I have created custom, low-cost pipelines for recording facial animations (performance capture) and body movement (motion capture).</p>",
        "imageSource":"assets/skillImages/performanceCapture.jpg",
        "imageSize":{
          "width":1920,
          "height":1080
        }
      },
      {
        "headline":"IoT INTERFACES",
        "description":"<p><span style='font-weight:800;'>Effecting changes to the environment</span> is one of the most exciting capabilities of Augmented & Mixed Reality. To demonstrate the possibilities, I've created custom home and office automation devices connected to the Internet of Things.</p>",
        "imageSource":"assets/skillImages/iotInterfaces.jpg",
        "imageSize":{
          "width":1920,
          "height":1080
        }
      }
    ]
  });

  return buttons;
}

SkillBox.prototype.addLayers = function() {
  const box = this;
  const layers = {};

  layers.base = addSingleLayer();
  layers.skillGroups = addSingleLayer();
  layers.nav = addSingleLayer();
  layers.cards = addSingleLayer();

  return layers;

  function addSingleLayer() {
    return box.svg
      .append("g")
      .attr("transform","translate(0,0)");
  }
}

SkillBox.prototype.addRibbon = function() {
  const button = this;
  
}

SkillBox.prototype.addSkillSvgs = function() {
  const box = this;
  const skillSvgs = [];
  d3.range(0,4).forEach((counter) => {
    const height = window.innerHeight * 0.4;
    const width = window.innerWidth * 0.5;

    const svg = d3.select("#skillBoxSkillSvgs")
      .append("svg")
      .attr("width",width)
      .attr("height",height)
      .style("margin",0)
      .style("padding",0);

    skillSvgs.push(svg);
  });

  return skillSvgs;
}

SkillBox.prototype.addSvg = function() {
  const box = this;

  const svg = d3.select("#skillBoxContainer")
    .append("svg")
    .attr("height",box.layout.size.height)
    .attr("width",box.layout.size.width)
    .style("padding-left","5vw")
    .attr("fill","orange");
  return svg;
}

SkillBox.prototype.applyLayout = function() {
  const box = this;

  const layerHeight = box.layers.nav.node().getBBox().height;
  const verticalOffset = (box.layout.size.height / 2) - (layerHeight / 2);

  box.layers.nav
    .attr("transform","translate(0,"+verticalOffset+")");

  return box;
}

SkillBox.prototype.layoutButtons = function() {
  const box = this;

  let runningX = 0;

  Object.keys(box.buttons).forEach((key) => {
    const button = box.buttons[key];
    button.move({
      "x":runningX,
      "y":0
    });

    runningX += button.getSize().width + 20;
  });

}

SkillBoxButton.prototype.activate = function() {
  const button = this;

  button.curtain
    .transition()
    .duration(250)
    .attr("y",0)
    .attr("height",button.getSize().height);

  button.skillGroup
    .activate();

  return button;
}

SkillBoxButton.prototype.deactivate = function() {
  const button = this;

  button.curtain
    .transition()
    .duration(250)
    .attr("y",button.getSize().height)
    .attr("height",0);

  button.skillGroup
    .deactivate();

  return button;

}

SkillBoxButton.prototype.highlight = function() {
  const button = this;

  button.highlightLine
    .transition()
    .duration(250)
    .attr("x1",0)
    .attr("x2",button.getSize().width);

  return button;
}

SkillBoxButton.prototype.unhighlight = function() {
  const button = this;

  const width = button.getSize().width / 2;

  button.highlightLine
    .transition()
    .duration(125)
    .attr("x1",button.getSize().width / 2)
    .attr("x2",button.getSize().width / 2);

  return button;
}

SkillBoxButton.prototype.addCurtain = function() {
  const button = this;

  const rect = button.group
    .append("rect")
    .attr("fill","#984BA3");

  return rect;
}

SkillBoxButton.prototype.addGroup = function() {
  const button = this;

  const group = button.parent.layers.nav
    .append("g")
    .attr("cursor","pointer")
    .attr("transform","translate(0,0)")
    .on('mouseover',function() { button.highlight(); })
    .on('mouseout',function() { button.unhighlight(); })
    .on('click',function() { button.parent.showSkill(button.key); });

  return group;
}

SkillBoxButton.prototype.addHighlight = function() {
  const button = this;

  const highlight = button.group
    .append("line")
    .attr("stroke-width",5)
    .attr("stroke","#984BA3");

  return highlight;
}

SkillBoxButton.prototype.addRect = function() {
  const button = this;

  const rect = button.group
    .append("rect")
    .attr("fill","black");

  return rect;
}

SkillBoxButton.prototype.addSkillGroup = function(skills) {
  const button = this;
  const skillGroup = new SkillBoxGroup({
    "parent":button.parent,
    "skills":skills
  });
  return skillGroup;
}

SkillBoxButton.prototype.addText = function(textString) {
  const button = this;

  const text = button.group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-family","Oswald")
    .attr("font-weight",400)
    .attr("font-size","1.25em")
    .attr("fill","white")
    .text(textString);

  return text;
}

SkillBoxButton.prototype.resizeRect = function() {
  const button = this;

  const textSize = button.text.node().getBBox();
  const horizontalPadding = 30;

  button.rect
    .attr("x",0)
    .attr("y",0)
    .attr("width",textSize.width + horizontalPadding)
    .attr("height",textSize.height);

  button.curtain
    .attr("x",0)
    .attr("y",textSize.height)
    .attr("width",textSize.width + horizontalPadding)
    .attr("height",0);

  button.text
    .attr("x",textSize.width / 2 + horizontalPadding / 2)
    .attr("y",textSize.height / 2 + 2);

  button.highlightLine
    .attr("x1",textSize.width / 2)
    .attr("x2",textSize.width / 2)
    .attr("y1",textSize.height)
    .attr("y2",textSize.height);


}

SkillBoxButton.prototype.getSize = function() {
  const box = this;

  return box.rect
    .node()
    .getBBox();
}

SkillBoxButton.prototype.move = function(coordinates) {
  const button = this;

  button.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return button;
}

SkillBoxCard.prototype.activate = function(delayStart) {
  const card = this;

  card.group
    .transition()
    .delay(delayStart)
    .duration(250)
    .attr("opacity",1);

  card.layers.headlineOffset
    .attr("transform","translate(0,50)")
    .attr("opacity",0)
    .transition()
    .ease(d3.easeCubicOut)
    .delay(175 + delayStart)
    .duration(375)
    .attr("opacity",1)
    .attr("transform","translate(0,0)");

  card.layers.bodyOffset
    .attr("transform","translate(0,50)")
    .attr("opacity",0)
    .transition()
    .duration(d3.easeCubicOut)
    .delay(225 + delayStart)
    .duration(325)
    .attr("opacity",1)
    .attr("transform","translate(0,0)");

  return card;
}

SkillBoxCard.prototype.deactivate = function() {
  const card = this;

  card.group
    .transition()
    .duration(150)
    .attr("opacity",0);

  return card;
}

SkillBoxCard.prototype.defineLayout = function() {
  const card = this;
  const layout = {};
  
  layout.size = {};

  layout.size.width = card.parent.skillSvgs[card.index].attr("width");
  layout.size.height = card.parent.skillSvgs[card.index].attr("height");

  layout.padding = {};
  layout.padding.horizontal = layout.size.width * 0.1;
  layout.padding.vertical = layout.size.height * 0.1;

  layout.bodySize = {};
  layout.bodySize.width = layout.size.width - layout.padding.horizontal * 2;
  layout.bodySize.height = layout.size.height - layout.padding.vertical * 3;

  return layout;
}

SkillBoxCard.prototype.addBody = function() {
  const card = this;

  const foreignObject = card.layers.body
    .append("foreignObject")
    .attr("width",card.layout.bodySize.width)
    .attr("height",card.layout.bodySize.height);

  const body = foreignObject
    .append("xhtml:body")
    .style("height","100%")
    .style("width","100%")
    .style("padding",0)
    .style("margin",0);

  const div = body
    .append("div")
    .style("width","100%")
    .style("height","100%");

  const descriptionBody = div
    .append("div")
    .style("background-color","rgb(225,225,214)")
    .style("color","black")
    .style("font-size","1em")
    .style("padding-top","0.5em")
    .style("padding-bottom","0.5em")
    .style("padding-left","1em")
    .style("padding-right","1em")
    .html(card.details.description);

  return foreignObject;
}

SkillBoxCard.prototype.addGroup = function() {
  const card = this;

  const group = card.parent.skillSvgs[card.index]
    .append("g")
    .attr("opacity",0);


  return group;
}

SkillBoxCard.prototype.addHeadlineRect = function() {
  const card = this;

  const rect = card.layers.headline
    .append("rect")
    .attr("fill","black");

  return rect;
}

SkillBoxCard.prototype.addHeadlineText = function() {
  const card = this;

  const text = card.layers.headline
    .append("text")
    .attr("font-size","2em")
    .attr("font-weight",500)
    .attr("fill","white")
    .attr("dominant-baseline","middle")
    .text(card.details.headline);

  return text;
}

SkillBoxCard.prototype.addImage = function() {
  const card = this;

  const scaleFactor = Math.max.apply(null,[card.layout.size.width / card.imageSize.width,card.layout.size.height / card.imageSize.height]);

  const scale = card.layers.background
    .append("g")
    .attr("transform","scale("+scaleFactor+")");

  const offset = scale
    .append("g")
    .attr("transform","translate("+(card.layout.size.width / 2)+","+(card.layout.size.height / 2)+")");

  const image = offset
    .append("image")
    .attr("width",card.imageSize.width)
    .attr("height",card.imageSize.height)
    .attr("href",card.imageSource)
    .attr("x",0)
    .attr("y",0)
    .attr("transform","translate("+(-card.layout.size.width / 2)+","+(-card.layout.size.height / 2)+")");

  offset.append("circle")
    .attr("r",5)
    .attr("fill","orange")
    .attr("stroke","black")
    .attr("stroke-width",2);


  return image;
}

SkillBoxCard.prototype.addLayers = function() {
  const card = this;

  const layers = {};
  layers.background = addSingleLayer();
  layers.headlineOffset = addSingleLayer();
  layers.headline = layers.headlineOffset.append("g");
  layers.bodyOffset = addSingleLayer();
  layers.body = layers.bodyOffset.append("g");

  return layers;

  function addSingleLayer() {
    return card.group
      .append("g")
      .attr("transform","translate(0,0)");
  }
}

SkillBoxCard.prototype.layoutCard = function() {
  const card = this;

  const headlineSize = card.layers.headline.node().getBBox();
  const verticalCenterHeadline = card.layout.padding.vertical;
  const headlineTransform = "translate("+card.layout.padding.horizontal+","+verticalCenterHeadline+")";

  card.layers.headline
    .attr("transform",headlineTransform);

  card.layers.body
    .attr("transform","translate("+card.layout.padding.horizontal+","+(card.layout.padding.vertical * 3)+")")
}

SkillBoxCard.prototype.resizeRect = function() {
  const card = this;

  const textSize = card.headlineText.node().getBBox();

  card.headlineRect
    .attr("width",textSize.width + 20)
    .attr("height",textSize.height);

  card.headlineText
    .attr("x",10)
    .attr("y",textSize.height / 2 + 3);

}

SkillBoxGroup.prototype.activate = function() {
  const skillGroup = this;

  skillGroup.skillCards.forEach((card,index) =>{
    card.activate(index * 200);
  });

  return skillGroup;
}

SkillBoxGroup.prototype.deactivate = function() {
  const skillGroup = this;

  skillGroup.skillCards.forEach((card) => {
    card.deactivate();
  });

  return skillGroup;
}

SkillBoxGroup.prototype.defineLayout = function() {
  const skillGroup = this;

  const layout = {};

  const navHeight = skillGroup.parent.layers.nav.node().getBBox().height;

  layout.size = {};
  layout.size.width = skillGroup.parent.layout.size.width;
  layout.size.height = skillGroup.parent.layout.size.height - (navHeight * 4);

  layout.verticalOffset = navHeight * 1.5;

  layout.gridWidth = layout.size.width / 2;
  layout.gridHeight = layout.size.height / 2;

  return layout;
}

SkillBoxGroup.prototype.addGroup = function() {
  const skillGroup = this;

  const group = skillGroup.parent.layers.skillGroups
    .append("g")
    .attr("transform","translate(0,"+skillGroup.layout.verticalOffset+")");

  return group;
}

SkillBoxGroup.prototype.addSkillCards = function() {
  const skillGroup = this;

  const skillCards = [];
  skillGroup.skills.forEach((skill,index) => {
    const coords = {};
    coords.x = (index % 2) * skillGroup.layout.gridWidth;
    coords.y = Math.floor(index / 2) * skillGroup.layout.gridHeight;
    const bounds = {};
    bounds.width = skillGroup.layout.gridWidth;
    bounds.height = skillGroup.layout.gridHeight;

    skillCards.push(new SkillBoxCard({
      "parent":skillGroup.parent,
      "skillGroup":skillGroup,
      "coords":coords,
      "bounds":bounds,
      "skill":skill,
      "index":index
    }));
  })

  return skillCards;
}

SwipeIndicator.prototype.addCircles = function() {
  const indicator = this;


  const circles = indicator.svg
    .selectAll("circles")
    .data(d3.range(0,indicator.count))
    .enter()
    .append("circle")
    .attr("cx",function(d,i) { return indicator.scale(i)})
    .attr("cy",indicator.layout.size.height / 2)
    .attr("r",indicator.layout.circleRadius)
    .attr("fill","#aaa");

  return circles;
}

SwipeIndicator.prototype.addSvg = function() {
  const indicator = this;

  const svg = d3.select("#exampleIndicator")
    .append("svg")
    .attr("width",indicator.layout.size.width)
    .attr("height",indicator.layout.size.height);

  return svg;
}

SwipeIndicator.prototype.defineLayout = function() {
  const indicator = this;
  const layout = {};

  layout.size = {};
  layout.size.width = window.innerWidth;
  layout.size.height = window.innerHeight * 0.1;

  layout.circleRadius = layout.size.height * 0.05;

  layout.scaleMin = layout.size.width * 0.125;
  layout.scaleMax = layout.size.width * 0.875;

  return layout;
}

SwipeIndicator.prototype.defineScale = function() {
  const indicator = this;

  const scale = d3.scaleLinear()
    .domain([0,indicator.count])
    .range([indicator.layout.scaleMin,indicator.layout.scaleMax]);

  return scale;
}

SwipeIndicator.prototype.update = function(currentIndex) {
  const indicator = this;
  indicator.currentIndex = currentIndex;

  indicator.circles
    .transition()
    .duration(250)
    .attr("fill",function(d,i) {
      if(i == indicator.currentIndex) { return "green"; };
      return "#aaa";
    });

  return indicator;
}

function TimelineCompany(options) {
  const company = this;
  init(options);
  return company;

  function init(options) {
    company.parent = options.parent;
    company.where = options.where;
    company.data = options.company;

    company.group = company.addGroup();
    company.toplineGroup = company.addToplineGroup();
    company.companyName = company.addCompanyName();
    company.roleGroup = company.addRoleGroup();
    company.roles = company.addRoles();
    company.body = company.addBody();

  }
}

function TimelineRole(options) {
  const role = this;
  init(options);
  return role;

  function init(options) {
    role.where = options.where;
    role.data = options.role;
    role.index = options.index;
    role.parent = options.parent;
    role.company = options.company;

    role.group = role.addGroup();
    role.backgroundRect = role.addBackgroundRect();
    role.name = role.addName();
    role.dates = role.addDates();

  }
}

Timeline.prototype.animateIn = function() {
  const timeline = this;

  if(timeline.hasStarted) { return };


  timeline.axisGroup
    .selectAll("line")
    .attr("stroke","#aaa")
    .attr("y1",0)
    .attr("y2",0)
    .transition()
    .duration(1000)
    .delay(function(d,i) {
      return timeline.timeScale(d);
    })
    .attr("y1",0)
    .attr("y2",timeline.layout.size.height);

  timeline.axisGroup
    .selectAll("text")
    .attr("opacity",0)
    .transition()
    .duration(1000)
    .delay(function(d,i) {
      return timeline.timeScale(d);
    })
    .attr("opacity",1);


  timeline.companies.forEach((company,index) => {
    company.animateIn(500 + index * 500);
  });

  timeline.hasStarted = true;
}

Timeline.prototype.addAxis = function() {
  const timeline = this;

  const axis = d3.axisTop(timeline.scale);


  return axis;
}

Timeline.prototype.addAxisGroup = function() {
  const timeline = this;

  const group = timeline.layers.axis
    .append("g")
    .call(timeline.axis)
    .attr("transform",timeline.layout.translateAxisGroup);

  group.selectAll("path")
    .attr("stroke",timeline.style.axisLineColor);

  group.selectAll("line")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","3,3")
    .attr("y1",window.innerHeight)
    .attr("stroke",timeline.style.axisDashColor);

  group.selectAll("text")
    .attr("text-anchor", "start")
    .attr("alignment-baseline","central")
    .attr("font-size",timeline.style.axisFontSize)
    .attr("fill",timeline.style.axisFontColor)
    .attr("font-weight",timeline.style.axisFontWeight)
    .attr("font-family","Oswald")
    .attr("dx", ".8em")
    .attr("dy", "-.15em")
    .attr("transform", "rotate(-45)");


  return group;
}

Timeline.prototype.addCompanies = function() {
  const timeline = this;
  const companies = [];

  timeline.data.forEach((company) => {
    companies.push(
      new TimelineCompany({
        "where":timeline.layers.companies,
        "parent":timeline,
        "company":company
      })
    );
  });

  return companies;
}

Timeline.prototype.addHeading = function() {
  const timeline = this;

  const svg = d3.select(timeline.where)
    .append("div")
    .style("background-color","black")
    .style("padding-left","1em")
    .style("padding-right","1em")
    .style("font-size:2","5em")
    .style("border-left","0.25em solid #984BA3")
    .style("font-weight","500")
    .style("color","white")
    .style("font-family","Oswald")
    .style("display","inline-block")
    .html("WORK HISTORY");

  return svg;
}

Timeline.prototype.addLayers = function() {
  const timeline = this;
  const layers = {};
  layers.axis = timeline.svg.append("g");
  layers.companies = timeline.svg.append("g");
  return layers;
}

Timeline.prototype.addSvg = function() {
  const timeline = this;

  const svg = d3.select(timeline.where)
    .append("svg")
    .attr("width",timeline.layout.size.width)
    .attr("height",timeline.layout.size.height)
    .style("background-color",timeline.style.backgroundColor);

  return svg;
}

Timeline.prototype.applyLayout = function() {
  const timeline = this;

  let runningYPosition = 0;

  timeline.companies.forEach((company) => {
    const translateY = 50 + timeline.layout.margins.top + runningYPosition;
    const translateX = timeline.layout.margins.left + timeline.scale(company.data.endDate);
    const translateString = "translate(0,"+translateY+")";

    company.group
      .attr("transform",translateString);

    runningYPosition += company.group.node().getBBox().height + 25;
  });


  const lastNode = timeline.companies[timeline.companies.length-1].group.node().getBBox();
  timeline.svg.attr("height",runningYPosition + lastNode.height);

  return timeline;
}

Timeline.prototype.defineData = function() {
  const timeline = this;
  const data = [];

  data.push({
    "company":"PwC EMERGING TECHNOLOGY LAB",
    "description":"Designed, developed, and managed the creation of emerging technology prototypes as part of PwC’s National Advisory consulting group. Particular focus in Augmented, Mixed, and Virtual Reality applications for enterprise clients.",
    "color":"#e0301e",
    "startDate":new Date("01/01/2015"),
    "endDate":new Date(),
    "roles":[
      {
        "title":"Senior Manager",
        "startDate":new Date("07/01/2019"),
        "endDate":new Date()
      },
      {
        "title":"Manager",
        "startDate":new Date("07/01/2017"),
        "endDate":new Date("06/30/2019")
      },
      {
        "title":"Senior Associate",
        "startDate":new Date("01/01/2015"),
        "endDate":new Date("06/30/2017")
      }
    ]
  });

  data.push({
    "company":"TBWA\\CHIAT\\DAY",
    "description":"Created tools for automated reporting and visualization of data from advertising campaigns for major global brands including Michelin and Infiniti.",
    "startDate":new Date("09/01/2012"),
    "endDate":new Date("12/31/2014"),
    "roles":[
      {
        "title":"Senior Analyst",
        "startDate":new Date("09/01/2012"),
        "endDate":new Date("12/31/2014")
      }
    ]
  });

  data.push({
    "company":"DIGITAL THIRD COAST",
    "description":"Worked as marketing strategist, data analyst, and automation developer for digital marketing startup.",
    "startDate":new Date("10/01/2009"),
    "endDate":new Date("08/31/2012"),
    "roles":[
      {
        "title":"Senior Analyst",
        "startDate":new Date("01/01/2011"),
        "endDate":new Date("08/31/2012")
      },
      {
        "title":"Analyst",
        "startDate":new Date("10/01/2009"),
        "endDate":new Date("12/31/2010")
      }
    ]
  });

  return data;
}

Timeline.prototype.defineLayout = function() {
  const timeline = this;
  const layout = {};

  layout.transitionTime = 750;

  layout.size = {};
  layout.size.width = window.innerWidth;
  layout.size.height = window.innerHeight;

  layout.margins = {};
  layout.margins.left = layout.size.width * 0.25;
  layout.margins.right = layout.size.width * 0.125;
  layout.margins.top = 25;
  layout.margins.bottom = 25;

  layout.effectiveWidth = layout.size.width - layout.margins.left - layout.margins.right;
  layout.effectiveHeight = layout.size.height - layout.margins.bottom - layout.margins.top;

  layout.translateAxisGroup = "translate("+layout.margins.left+",50)";


  return layout;
}

Timeline.prototype.defineScale = function() {
    const timeline = this;

    let dates = [];
    timeline.data.map((a) => { return a.startDate}).forEach((date) => { dates.push(date)});
    timeline.data.map((a) => { return a.endDate}).forEach((date) => { dates.push(date)});

    const scale = d3.scaleTime()
      .domain(d3.extent(dates))
      .range([timeline.layout.effectiveWidth - 20,0]);

    return scale;
}

Timeline.prototype.defineStyle = function() {
  const timeline = this;
  const style = {};

  style.backgroundColor = "white";

  style.axisLineColor = "#aaa";
  style.axisFontSize = "9pt";
  style.axisFontWeight = "normal";
  style.axisFontColor = "black";
  style.axisDashColor = "#ccc";

  return style;
}

Timeline.prototype.defineTimeScale = function() {
    const timeline = this;

    let dates = [];
    timeline.data.map((a) => { return a.startDate}).forEach((date) => { dates.push(date)});
    timeline.data.map((a) => { return a.endDate}).forEach((date) => { dates.push(date)});

    const scale = d3.scaleTime()
      .domain(d3.extent(dates))
      .range([timeline.layout.transitionTime,0]);

    return scale;
}

WorkExample.prototype.addDefs = function() {
  const example = this;
  const defs = example.svg
    .append("defs");
  return defs;
}

WorkExample.prototype.addFilters = function() {
  const example = this;
  const filters = {};

  const filterElement = example.defs.append("filter")
    .attr("id",example.identifier);

  filters.saturation = filterElement
    .append("feColorMatrix")
    .attr("type","saturate")
    .attr("in","SourceGraphic")
    .attr("values",0.25);

  filters.blur = filterElement
    .append("feGaussianBlur")
    .attr("in","SourceGraphic")
    .attr("stdDeviation",2);

  return filters;
}

WorkExample.prototype.addHeadline = function() {
  const example = this;

  const textGroup = example.layers.text
    .append("g");

  const textLines = [];
  example.text.forEach((lineOfText) => {
    const lineGroup = textGroup.append("g");

    const background = lineGroup
      .append("rect")
      .attr("fill","black");

    const text = lineGroup
      .append("text")
      .attr("font-family","Oswald")
      .attr("font-weight",500)
      .attr("fill","white")
      .attr("dx",10)
      .attr("font-size","18pt")
      .attr("dominant-baseline","text-before-edge")
      .text(lineOfText);

    const textSize = lineGroup.node().getBBox();

    background
      .attr("width",textSize.width + 20)
      .attr("height",textSize.height);

    textLines.push(lineGroup);

  });

  let runningHeight = 0;

  textLines.forEach((group) => {
    const height = group.node().getBBox().height;

    group
      .attr("transform","translate(0,"+runningHeight+")");

    runningHeight += height;
  });

  const textGroupHeight = textGroup.node().getBBox().height;
  const yPosition = example.layout.centerY - textGroupHeight / 2;

  textGroup
    .attr("transform","translate("+example.layout.textTranslateX+","+yPosition+")")

  return textGroup;
}

WorkExample.prototype.addHotSpot = function() {
  const example = this;

  const anchor = example.layers.hotspot
    .append("a")
    .attr("xlink:href",example.href)
    .attr("target","_new");

  const hotspot = anchor
    .append("rect")
    .attr("width",example.layout.size.width)
    .attr("height",example.layout.size.height)
    .attr("fill","rgba(0,0,0,0)")

  if(!example.parent.browserInfo.isMobile) {
    hotspot
    .on('mouseover',example.highlight())
    .on('mouseout',example.unhighlight());
  }

  return hotspot;
}

WorkExample.prototype.addImages = function() {
  const example = this;

  const imageFullScale = Math.max.apply(null,[example.layout.size.width / example.imageSize.width,example.layout.size.height / example.imageSize.height]);


  const images = example.scales
    .append("image")
    .attr("href",function(d) { return d })
    .attr("filter","url(#"+example.identifier+")")
    .attr("x",-example.imageSize.width / 2)
    .attr("y",-example.imageSize.height / 2)
    .attr("width",example.imageSize.width)
    .attr("height",example.imageSize.height)
    .attr("viewbox","0 0 " + example.imageSize.width + " " + example.imageSize.height);

  example.layers.image
    .attr("transform","scale("+imageFullScale+")");

  return images;
}

WorkExample.prototype.addLayers = function() {
  const example = this;
  const layers = {};
  
  layers.image = example.svg.append("g");
  layers.text = example.svg.append("g");
  layers.body = example.svg.append("g");
  layers.hotspot = example.svg.append("g");

  return layers;
}

WorkExample.prototype.addScales = function() {
  const example = this;

  const translateX = example.imageSize.width / 2;
  const translateY = example.imageSize.height / 2;
  const translate = "translate("+translateX+","+translateY+")";

  const translateLayer = example.layers.image
    .append("g");

  translateLayer
    .attr("transform",translate);

  const scales = translateLayer
    .selectAll("g")
    .data(example.imagePaths)
    .enter()
    .append("g")
    .attr("transform","scale(1)");

  return scales;
}

WorkExample.prototype.addSvg = function() {
  const example = this;

  const svg = d3.select("#exampleContainer")
    .append("svg")
    .attr("width",example.layout.size.width)
    .attr("height",example.layout.size.height)
    .style("background-color","white")
    .style("margin",0)
    .style("padding",0)
    .attr("cursor","pointer")
    .attr("xmlns:svg","http://www.w3.org/2000/svg")
    .attr("xmlns","http://www.w3.org/2000/svg")
    .attr("version","1.1")
    .attr("viewBox","0 0 "+example.layout.size.width+" " +example.layout.size.height);


  return svg;
}

WorkExample.prototype.addTextBody = function() {
  const example = this;

  const foreignObject = example.layers.body
    .append("foreignObject")
    .attr("width",300)
    .attr("height",300)
    .attr("x",example.layout.textTranslateX)
    .attr("y",example.layout.size.height);

  const body = foreignObject
    .append("xhtml:body")
    .style("margin",0)
    .style("padding",0)
    .style("background-color","black")
    .style("color","white");

  const div = body
    .append("div")
    .style("width","100%")
    .style("height","100%")
    .style("padding-left","0.5em")
    .style("padding-right","0.5em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("font-family","Merriweather")
    .style("font-weight",200)
    .html(example.description);

  return foreignObject;
}

WorkExample.prototype.defineLayout = function() {
  const example = this;
  const layout = {};
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const aspectRatio = windowWidth / windowHeight;

  layout.size = {};
  layout.size.width = windowWidth / 3;
  layout.size.height = windowHeight / 3;

  layout.centerX = layout.size.width / 2;
  layout.centerY = layout.size.height / 2;

  layout.maxTextWidth = layout.size.width * 0.8;
  layout.textTranslateX = layout.size.width * 0.1;

  layout.headlineHighlightY = layout.size.height * 0.2;


  return layout;
}

WorkExample.prototype.highlight = function() {
  const example = this;
  return () => {

    // Hide scaling from Firefox due to poor performance in FF SVG
    if(!example.parent.browserInfo.isFirefox) {
      example.filters.saturation
        .transition()
        .duration(250)
        .attr("values",1);

      example.filters.blur
        .transition()
        .duration(250)
        .attr("stdDeviation",0);

      example.layers.text
        .selectAll("rect")
        .transition()
        .duration(125)
        .attr("fill","green");

      if(!example.parent.browserInfo.isSafari) {
        example.scales
          .transition()
          .duration(function(d,i) { return 125 + i * 125})
          .attr("transform",function(d,i) {
            const maxScale = 1 + i * 0.1;
            return "scale("+maxScale+")";
          });        
      }
    }


    example.headline
      .transition()
      .duration(125)
      .ease(d3.easeQuad)
      .attr("transform","translate("+example.layout.textTranslateX+","+example.layout.headlineHighlightY+")");

    const headlineSize = example.headline.node().getBBox().height;

    example.body
      .transition()
      .duration(250)
      .attr("y",example.layout.headlineHighlightY + headlineSize);

    return example;
  }
}

WorkExample.prototype.resize = function() {
  const example = this;

  example.layout = example.defineLayout();

  example.svg
    .attr("height",example.layout.size.height)
    .attr("width",example.layout.size.width);

  const imageFullScale = Math.max.apply(null,[example.layout.size.width / example.imageSize.width,example.layout.size.height / example.imageSize.height]);

  example.scales.selectAll("image")
    .attr("x",-example.imageSize.width / 2)
    .attr("y",-example.imageSize.height / 2)
    .attr("width",example.imageSize.width)
    .attr("height",example.imageSize.height);

  example.layers.image
    .attr("transform","scale("+imageFullScale+")");


  const textGroupHeight = example.headline.node().getBBox().height;
  const yPosition = example.layout.centerY - textGroupHeight / 2;

  example.headline
    .attr("transform","translate("+example.layout.textTranslateX+","+yPosition+")")

  // TODO: CHECK IF HEADLINE / BODY IS TOO WIDE AND SCALE ACCORDINGLY!

  example.body
    .attr("x",example.layout.textTranslateX)
    .attr("y",example.layout.size.height);




  return example;
}


WorkExample.prototype.unhighlight = function() {
  const example = this;
  return() => {

    example.filters.saturation
      .transition()
      .duration(175)
      .attr("values",0.25);

    example.filters.blur
      .transition()
      .duration(175)
      .attr("stdDeviation",5);

    example.body
      .transition()
      .duration(100)
      .attr("y",example.layout.size.height);

    example.layers.text
      .selectAll("rect")
      .transition()
      .duration(75)
      .attr("fill","black");

    example.scales
      .transition()
      .duration(250)
      .attr("transform","scale(1)");

    const textGroupHeight = example.headline.node().getBBox().height;
    const headlineY = example.layout.centerY - textGroupHeight / 2;

    example.headline
      .transition()
      .duration(125)
      .attr("transform","translate("+example.layout.textTranslateX+","+headlineY+")");


    return example;
  }
}

function SvgTutorialCodeBlock(options) {
  const block = this;
  init(options);
  return block;

  function init(options) {
    block.parent = options.parent;
    block.background = block.addBackground();
    block.foreignObject = block.addForeignObject();
    block.body = block.addBody();
    block.div = block.addCodeDiv();

  }
}

function SvgTutorialContainer(options) {
  const container = this;
  init(options)
  return container;

  function init(options) {
    container.where = options.where;

    container.layout = container.defineLayout(options);
    container.style = container.defineStyle(options);

    container.svg = container.addSvg();
    container.layers = container.addLayers();
    container.codeBlock = container.addCodeBlock();
    container.svgElement = container.addSvgElement();

  }
}

function SvgTutorialSvgElement(options) {
  const element = this;
  init(options);
  return element;

  function init(options) {
    element.parent = options.parent;

    element.group = element.addGroup();
    element.background = element.addBackground();
    element.container = element.addContainer();
    element.circle = element.addCircle();

    element.highlightGroup = element.group.append("g");
    element.widthIndicator = element.addWidthIndicator();
    element.heightIndicator = element.addHeightIndicator();
    element.radiusIndicator = element.addRadiusIndicator();
    element.xIndicator = element.addXIndicator();
    element.yIndicator = element.addYIndicator();


  }
}

TimelineCompany.prototype.animateIn = function(delay) {
  const company = this;

  const timelineWidth = company.parent.scale(company.data.startDate) - company.parent.scale(company.data.endDate);
  const startAnimation = delay;

  company.companyName
    .attr("opacity",0)
    .attr("dx",-20)
    .transition()
    .duration(350)
    .delay(startAnimation)
    .attr("dx",10)
    .attr("opacity",1);

  company.body
    .attr("opacity",0)
    .transition()
    .delay(delay)
    .duration(1000)
    .attr("opacity",1);

  company.toplineGroup
    .select("rect")
    .attr("opacity",0)
    .transition()
    .delay(delay)
    .duration(1000)
    .attr("opacity",1);

  company.roles.forEach((role,index) => {
    role.animateIn(delay + (index + 1) * 250);
  });

}

TimelineCompany.prototype.mouseout = function() {
  const company = this;
  return () => {
    company.backgroundRect.attr("fill","#aaa");
  }

}

TimelineCompany.prototype.mouseover = function() {
  const company = this;

  return () => {
    // company.backgroundRect.attr("fill","orange");
  }

}

TimelineCompany.prototype.addBackgroundRect = function() {
  const company = this;

  const timelineWidth = company.parent.scale(company.data.startDate) - company.parent.scale(company.data.endDate);

  const rect = company.toplineGroup
    .append("rect")
    .attr("y",4)
    .attr("width",0)
    .attr("height",2)
    .attr("rx",10)
    .attr("fill","orange");

  return rect;
}

TimelineCompany.prototype.addBody = function() {
  const company = this;

  const backgroundSize = company.toplineGroup
    .node()
    .getBBox();

  const foreignObject = company.group
    .append("foreignObject")
    .attr("x",10)
    .attr("y",backgroundSize.height)
    .attr("width",company.parent.layout.margins.left - 50)
    .attr("height",150);

  const body = foreignObject
    .append("xhtml:body")
    .style("width","100%")
    .style("height","100%");

  const div = body
    .append("div")
    .attr("x",0)
    .attr("y",0)
    .attr("width",500)
    .attr("height",500)
    .style("font-weight",100)
    .style("background-color","#E1E1D6")
    .style("padding-top","0.5em")
    .style("padding-bottom","0.5em")
    .style("padding-left","0.5em")
    .style("padding-right","0.5em")
    .style("font-size","10pt")
    .html(company.data.description);


  const divHeight = div
    .node()
    .getBoundingClientRect()
    .height;

  foreignObject
    .attr("height",divHeight);

  return foreignObject;
}

TimelineCompany.prototype.addCompanyName = function() {
  const company = this;

  const background = company.toplineGroup
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("fill","black");

  const name = company.toplineGroup
    .append("text")
    .attr("font-weight","bold")
    .attr("font-size","18pt")
    .attr("text-anchor","start")
    .attr("dominant-baseline","text-before-edge")
    .attr("dx",10)
    .attr("fill","white")
    .text(company.data.company);

  const nameSize = name
    .node()
    .getBBox();

  background
    .attr("width",nameSize.width + 20)
    .attr("height",nameSize.height);

  const backgroundSize = background
    .node()
    .getBBox();

  const offsetX = company.parent.layout.margins.left - backgroundSize.width - 40;

  company.toplineGroup
    .attr("transform","translate("+offsetX+",0)");

  return name;
}

TimelineCompany.prototype.addGroup = function() {
  const company = this;

  const group = company.where
    .append("g")
    .datum(company.data);

  return group;
}

TimelineCompany.prototype.addRoleGroup = function() {
  const company = this;

  const offsetX = company.parent.layout.margins.left + company.parent.scale(company.data.endDate);

  const group = company.group
    .append("g")
    .attr("transform","translate("+offsetX+",0)");

  return group;
}

TimelineCompany.prototype.addRoles = function() {
  const company = this;
  const roles = [];

  company.data.roles.forEach((role,index) => {
    roles.push(
      new TimelineRole({
        "role":role,
        "index":index,
        "where":company.roleGroup,
        "parent":company.parent,
        "company":company.data
      })
    );
  });

  return roles;
}

TimelineCompany.prototype.addToplineGroup = function() {
  const company = this;

  const group = company.group
    .append("g")
    .on('mouseover',company.mouseover())
    .on('mouseout',company.mouseout());


  return group;
}

TimelineRole.prototype.addBackgroundRect = function() {
  const role = this;

  const roleWidth = role.parent.scale(role.data.startDate) - role.parent.scale(role.data.endDate);

  const backgroundRect = role.group
    .append("rect")
    .attr("height",20)
    .attr("y",-10)
    .attr("rx",3)
    .attr("fill","#984BA3")
    .attr("width",roleWidth);


  return backgroundRect;
}

TimelineRole.prototype.addDates = function() {
  const role = this;

  const dateOptions = {
    "month":"short",
    "year":"numeric"
  };

  const startString = role.data.startDate.toLocaleDateString("en-us",dateOptions);
  const endString = role.data.endDate.toLocaleDateString("en-us",dateOptions);
  const dateString = startString + " - " + endString;

  const nameSize = role.name.node().getBBox();
  const startX = nameSize.x + nameSize.width + 5;

  const dates = role.group
    .append("text")
    .attr("x",startX)
    .attr("font-size","12pt")
    .attr("font-weight",300)
    .attr("dominant-baseline","middle")
    .text(dateString);


  return dates;
}

TimelineRole.prototype.addGroup = function() {
  const role = this;

  const xOffset = role.parent.scale(role.data.endDate) - role.parent.scale(role.company.endDate);
  const yPosition = (1 + role.index) * 20;

  const group = role.where
    .append("g")
    .attr("transform","translate("+xOffset+","+yPosition+")")
    .on('mouseover',role.mouseover())
    .on('mouseout',role.mouseout());

  return group;
}

TimelineRole.prototype.addName = function() {
  const role = this;

  const roleWidth = role.parent.scale(role.data.startDate) - role.parent.scale(role.data.endDate);

  const name = role.group
    .append("text")
    .attr("font-size","14pt")
    .attr("dominant-baseline","middle")
    .attr("x",roleWidth + 5)
    .text(role.data.title);

  return name;
}

TimelineRole.prototype.animateIn = function(delay) {
  const role = this;

  const timelineWidth = role.parent.scale(role.data.startDate) - role.parent.scale(role.data.endDate);
  const startTime = delay;

  role.name
    .attr("opacity",0)
    .attr("dx",-timelineWidth)
    .transition()
    .delay(startTime)
    .duration(1000)
    .attr("opacity",1)
    .attr("dx",0);

  role.dates
    .attr("opacity",0)
    .attr("dx",-timelineWidth)
    .transition()
    .delay(startTime)
    .duration(1000)
    .attr("opacity",1)
    .attr("dx",0);;

  role.backgroundRect
    .attr("width",0)
    .transition()
    .delay(startTime)
    .duration(1000)
    .attr("width",timelineWidth);

}

TimelineRole.prototype.mouseout = function() {
  const role = this;

  return () => {
    role.backgroundRect.attr("fill","#984BA3");
  }

}

TimelineRole.prototype.mouseover = function() {
  const role = this;

  return () => {
    // role.backgroundRect.attr("fill","orange");
  }

}

SvgTutorialCodeBlock.prototype.addLine = function(options) {
  const block = this;

  const indentSize = 2 * options.indent + "em"

  const addedLine = block.div.append("div")
    .style("padding-left",indentSize)
    .html(options.html)
    .on("mouseover",function() {
      d3.select(this)
        .style("background-color","#9FDE9C")
        .style("font-weight","bold")
        .style("color","black");

      if(options.mouseover) { options.mouseover(); }
      
    })
    .on("mouseout",function() {
      d3.select(this)
        .style("background-color",block.parent.style.codeBlock.background)
        .style("font-weight",block.parent.style.codeBlock.fontWeight)
        .style("color","white");

        if(options.mouseover) { options.mouseout(); }
    })

  return block;
}

SvgTutorialCodeBlock.prototype.addBackground = function() {
  const container = this;

  const background = container.parent.layers.codeBlock
    .append("rect")
    .attr("x",container.parent.layout.gridHorizontal(0.25))
    .attr("y",container.parent.layout.gridVertical(0.25))
    .attr("width",container.parent.layout.gridHorizontal(4.5))
    .attr("height",container.parent.layout.gridVertical(11.5))
    .attr("fill",container.parent.style.codeBlock.background);


  return background;
}

SvgTutorialCodeBlock.prototype.addBody = function() {
  const block = this;

  const body = block.foreignObject
    .append("xhtml:body")
    .style("width","100%")
    .style("height","100%")
    .style("padding",0)
    .style("margin",0);

  return body;
}

SvgTutorialCodeBlock.prototype.addCodeDiv = function() {
  const block = this;

  const div = block.body.append("div")
    .style("padding",0)
    .style("margin",0)
    .style("width","100%")
    .style("height","100%")
    .style("font-family",block.parent.style.codeBlock.fontFamily)
    .style("font-size",block.parent.style.codeBlock.fontSize)
    .style("font-weight",block.parent.style.codeBlock.fontWeight)
    .style("color",block.parent.style.codeBlock.fontColor);

  return div;
}

SvgTutorialCodeBlock.prototype.addForeignObject = function() {
  const container = this;

  const foreignObject = container.parent.layers.codeBlock
    .append("foreignObject")
    .attr("x",container.parent.layout.gridHorizontal(0.375))
    .attr("y",container.parent.layout.gridVertical(0.375))
    .attr("width",container.parent.layout.gridHorizontal(4.25))
    .attr("height",container.parent.layout.gridVertical(11.25));

  return foreignObject;
}

SvgTutorialContainer.prototype.addCodeBlock = function() {
  const container = this;

  const block = new SvgTutorialCodeBlock({
    "parent":container,
    "where":container.layers.code
  });

  return block;
}

SvgTutorialContainer.prototype.addLayers = function() {
  const container = this;

  const layers = {};
  layers.codeBlock = addLayer(container.svg);
  layers.svgElement = addLayer(container.svg);

  return layers;

  function addLayer(where) {
    return where.append("g");
  }
}

SvgTutorialContainer.prototype.addSvg = function() {
  const container = this;

  const svg = d3.select(container.where)
    .append("svg")
    .attr("width",container.layout.size.width)
    .attr("height",container.layout.size.height)
    .style("background-color",container.style.stageFill);

  return svg;
}

SvgTutorialContainer.prototype.addSvgElement = function() {
  const container = this;

  const block = new SvgTutorialSvgElement({
    "parent":container,
    "where":container.layers.code
  });

  return block;
}

SvgTutorialContainer.prototype.defineLayout = function(options) {
  const container = this;

  const layout = options.layout ? options.layout : {};

  layout.size = layout.size ? layout.size : {};
  layout.size.width = layout.size.width ? layout.size.width : 960;
  layout.size.height = layout.size.height ? layout.size.height : 540;

  layout.size.midlines = {};
  layout.size.midlines.x = layout.size.width  / 2;
  layout.size.midlines.y = layout.size.height / 2;

  layout.gridHorizontal = d3.scaleLinear().domain([0,12]).range([0,layout.size.width]);
  layout.gridVertical = d3.scaleLinear().domain([0,12]).range([0,layout.size.height]);

  return layout;
}

SvgTutorialContainer.prototype.defineStyle = function(options) {
  const container = this;
  const style = options.style ? options.style : {};

  style.stageFill = style.stageFill ? style.stageFill : "rgba(0,0,0,0)";

  style.codeBlock = style.codeBlock ? style.codeBlock : {};
  style.codeBlock.background = style.codeBlock.background ? style.codeBlock.background : "#022E00";
  style.codeBlock.fontColor = style.codeBlock.fontColor ? style.codeBlock.fontColor : "white";
  style.codeBlock.fontFamily = style.codeBlock.fontFamily ? style.codeBlock.fontFamily : "Source Code Pro";
  style.codeBlock.fontWeight = style.codeBlock.fontWeight ? style.codeBlock.fontWeight : "300";
  style.codeBlock.fontSize = style.codeBlock.fontSize ? style.codeBlock.fontSize : "10pt";

  style.svgElement = style.svgElement ? style.svgElement : {};
  style.svgElement.background = style.svgElement.background ? style.svgElement.background : "#9FDE9C";


  return style;
}

SvgTutorialContainer.prototype.addLineOfCode = function(options) {
  const container = this;

  container.codeBlock
    .addLine(options);

  return container;
}

SvgTutorialSvgElement.prototype.addBackground = function() {
  const element = this;

  const background = element.group
    .append("rect")
    .attr("fill","white")
    .attr("x",0)
    .attr("y",0)
    .attr("width",element.parent.layout.gridHorizontal(6.75))
    .attr("height",element.parent.layout.gridVertical(11.5))
    .attr("fill",element.parent.style.svgElement.background);


  return background;
}

SvgTutorialSvgElement.prototype.addCircle = function() {
  const element = this;

  const circle = element.group
    .append("circle")
    .attr("cx",252.5)
    .attr("cy",152.5)
    .attr("r",25)
    .attr("fill","red")
    .attr("stroke","black")
    .attr("stroke-width",2);

  return circle;
}

SvgTutorialSvgElement.prototype.addContainer = function() {
  const element = this;

  const container = element.group
    .append("rect")
    .attr("x",5)
    .attr("y",5)
    .attr("width",500)
    .attr("height",300)
    .attr("fill","white")
    .attr("stroke","#a65628")
    .attr("stroke-width",2)
    .attr("stroke-opacity",0);

  return container;
}

SvgTutorialSvgElement.prototype.addGroup = function() {
  const element = this;

  const group = element.parent.layers.svgElement
    .append("g")
    .attr("transform","translate("+ element.parent.layout.gridHorizontal(5) +","+ element.parent.layout.gridVertical(0.25) +")");

  return group;
}

SvgTutorialSvgElement.prototype.addHeightIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",252.5)
    .attr("x2",252.5)
    .attr("y1",5)
    .attr("y2",305)
    .attr("stroke","#a65628")
    .attr("stroke-width",0);

  return indicator;
}

SvgTutorialSvgElement.prototype.addRadiusIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",252.5)
    .attr("x2",280)
    .attr("y1",152.5)
    .attr("y2",152.5)
    .attr("stroke","blue")
    .attr("stroke-width",0);

  return indicator;
}

SvgTutorialSvgElement.prototype.addWidthIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",5)
    .attr("x2",505)
    .attr("y1",155)
    .attr("y2",155)
    .attr("stroke","#a65628")
    .attr("stroke-width",0);

  return indicator;
}

SvgTutorialSvgElement.prototype.addXIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",5)
    .attr("x2",255)
    .attr("y1",152.5)
    .attr("y2",152.5)
    .attr("stroke","#a65628")
    .attr("stroke-width",0);

  return indicator;
}

SvgTutorialSvgElement.prototype.addYIndicator = function() {
  const element = this;

  const indicator = element.highlightGroup
    .append("line")
    .attr("x1",255)
    .attr("x2",255)
    .attr("y1",2.5)
    .attr("y2",152.5)
    .attr("stroke","#a65628")
    .attr("stroke-width",0);

  return indicator;
}

// https://d3js.org v5.12.0 Copyright 2019 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){var e;return 1===t.length&&(e=t,t=function(t,r){return n(e(t),r)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}var r=e(n),i=r.right,o=r.left;function a(t,n){return[t,n]}function u(t){return null===t?NaN:+t}function c(t,n){var e,r,i=t.length,o=0,a=-1,c=0,f=0;if(null==n)for(;++a<i;)isNaN(e=u(t[a]))||(f+=(r=e-c)*(e-(c+=r/++o)));else for(;++a<i;)isNaN(e=u(n(t[a],a,t)))||(f+=(r=e-c)*(e-(c+=r/++o)));if(o>1)return f/(o-1)}function f(t,n){var e=c(t,n);return e?Math.sqrt(e):e}function s(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}var l=Array.prototype,h=l.slice,d=l.map;function p(t){return function(){return t}}function v(t){return t}function g(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}var y=Math.sqrt(50),_=Math.sqrt(10),b=Math.sqrt(2);function m(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=x(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function x(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=y?10:o>=_?5:o>=b?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=y?10:o>=_?5:o>=b?2:1)}function w(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=y?i*=10:o>=_?i*=5:o>=b&&(i*=2),n<t?-i:i}function M(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function N(t,n,e){if(null==e&&(e=u),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t);return a+(+e(t[o+1],o+1,t)-a)*(i-o)}}function A(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function T(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function S(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function k(t){if(!(i=t.length))return[];for(var n=-1,e=S(t,E),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function E(t){return t.length}var C=Array.prototype.slice;function P(t){return t}var z=1,R=2,D=3,q=4,L=1e-6;function U(t){return"translate("+(t+.5)+",0)"}function O(t){return"translate(0,"+(t+.5)+")"}function B(){return!this.__axis}function Y(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,c=t===z||t===q?-1:1,f=t===q||t===R?"x":"y",s=t===z||t===D?U:O;function l(l){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):P:i,p=Math.max(o,0)+u,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),b=l.selection?l.selection():l,m=b.selectAll(".domain").data([null]),x=b.selectAll(".tick").data(h,n).order(),w=x.exit(),M=x.enter().append("g").attr("class","tick"),N=x.select("line"),A=x.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(M),N=N.merge(M.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),A=A.merge(M.append("text").attr("fill","currentColor").attr(f,c*p).attr("dy",t===z?"0em":t===D?"0.71em":"0.32em")),l!==b&&(m=m.transition(l),x=x.transition(l),N=N.transition(l),A=A.transition(l),w=w.transition(l).attr("opacity",L).attr("transform",function(t){return isFinite(t=_(t))?s(t):this.getAttribute("transform")}),M.attr("opacity",L).attr("transform",function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:_(t))})),w.remove(),m.attr("d",t===q||t==R?a?"M"+c*a+","+g+"H0.5V"+y+"H"+c*a:"M0.5,"+g+"V"+y:a?"M"+g+","+c*a+"V0.5H"+y+"V"+c*a:"M"+g+",0.5H"+y),x.attr("opacity",1).attr("transform",function(t){return s(_(t))}),N.attr(f+"2",c*o),A.attr(f,c*p).text(d),b.filter(B).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===R?"start":t===q?"end":"middle"),b.each(function(){this.__axis=_})}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return e=C.call(arguments),l},l.tickArguments=function(t){return arguments.length?(e=null==t?[]:C.call(t),l):e.slice()},l.tickValues=function(t){return arguments.length?(r=null==t?null:C.call(t),l):r&&r.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=a=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(a=+t,l):a},l.tickPadding=function(t){return arguments.length?(u=+t,l):u},l}var F={value:function(){}};function I(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new H(r)}function H(t){this._=t}function j(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function X(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function G(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=F,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}H.prototype=I.prototype={constructor:H,on:function(t,n){var e,r=this._,i=j(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=G(r[e],t.name,n);else if(null==n)for(e in r)r[e]=G(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=X(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new H(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var V="http://www.w3.org/1999/xhtml",$={svg:"http://www.w3.org/2000/svg",xhtml:V,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function W(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),$.hasOwnProperty(n)?{space:$[n],local:t}:t}function Z(t){var n=W(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===V&&n.documentElement.namespaceURI===V?n.createElement(t):n.createElementNS(e,t)}})(n)}function Q(){}function K(t){return null==t?Q:function(){return this.querySelector(t)}}function J(){return[]}function tt(t){return null==t?J:function(){return this.querySelectorAll(t)}}function nt(t){return function(){return this.matches(t)}}function et(t){return new Array(t.length)}function rt(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}rt.prototype={constructor:rt,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var it="$";function ot(t,n,e,r,i,o){for(var a,u=0,c=n.length,f=o.length;u<f;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new rt(t,o[u]);for(;u<c;++u)(a=n[u])&&(i[u]=a)}function at(t,n,e,r,i,o,a){var u,c,f,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(c=n[u])&&(d[u]=f=it+a.call(c,c.__data__,u,n),f in s?i[u]=c:s[f]=c);for(u=0;u<h;++u)(c=s[f=it+a.call(t,o[u],u,o)])?(r[u]=c,c.__data__=o[u],s[f]=null):e[u]=new rt(t,o[u]);for(u=0;u<l;++u)(c=n[u])&&s[d[u]]===c&&(i[u]=c)}function ut(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ct(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ft(t,n){return t.style.getPropertyValue(n)||ct(t).getComputedStyle(t,null).getPropertyValue(n)}function st(t){return t.trim().split(/^|\s+/)}function lt(t){return t.classList||new ht(t)}function ht(t){this._node=t,this._names=st(t.getAttribute("class")||"")}function dt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function pt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function vt(){this.textContent=""}function gt(){this.innerHTML=""}function yt(){this.nextSibling&&this.parentNode.appendChild(this)}function _t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bt(){return null}function mt(){var t=this.parentNode;t&&t.removeChild(this)}function xt(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function wt(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}ht.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Mt={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(Mt={mouseenter:"mouseover",mouseleave:"mouseout"}));function Nt(t,n,e){return t=At(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function At(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function Tt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function St(t,n,e){var r=Mt.hasOwnProperty(t.type)?Nt:At;return function(i,o,a){var u,c=this.__on,f=r(n,o,a);if(c)for(var s=0,l=c.length;s<l;++s)if((u=c[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=f,u.capture=e),void(u.value=n);this.addEventListener(t.type,f,e),u={type:t.type,name:t.name,value:n,listener:f,capture:e},c?c.push(u):this.__on=[u]}}function kt(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function Et(t,n,e){var r=ct(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var Ct=[null];function Pt(t,n){this._groups=t,this._parents=n}function zt(){return new Pt([[document.documentElement]],Ct)}function Rt(t){return"string"==typeof t?new Pt([[document.querySelector(t)]],[document.documentElement]):new Pt([[t]],Ct)}Pt.prototype=zt.prototype={constructor:Pt,select:function(t){"function"!=typeof t&&(t=K(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],c=u.length,f=r[i]=new Array(c),s=0;s<c;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),f[s]=a);return new Pt(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=tt(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],c=u.length,f=0;f<c;++f)(a=u[f])&&(r.push(t.call(a,a.__data__,f,u)),i.push(a));return new Pt(r,i)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Pt(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),f=-1,this.each(function(t){d[++f]=t}),d;var e=n?at:ot,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),f=0;f<o;++f){var s=r[f],l=i[f],h=l.length,d=t.call(s,s&&s.__data__,f,r),p=d.length,v=u[f]=new Array(p),g=a[f]=new Array(p);e(s,l,v,g,c[f]=new Array(h),d,n);for(var y,_,b=0,m=0;b<p;++b)if(y=v[b]){for(b>=m&&(m=b+1);!(_=g[m])&&++m<p;);y._next=_||null}}return(a=new Pt(a,r))._enter=u,a._exit=c,a},enter:function(){return new Pt(this._enter||this._groups.map(et),this._parents)},exit:function(){return new Pt(this._exit||this._groups.map(et),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Pt(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=ut);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],c=u.length,f=i[o]=new Array(c),s=0;s<c;++s)(a=u[s])&&(f[s]=a);f.sort(n)}return new Pt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=W(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):ft(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=st(t+"");if(arguments.length<2){for(var r=lt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?dt:pt)(this,t)}}:n?function(t){return function(){dt(this,t)}}:function(t){return function(){pt(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?vt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?gt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(yt)},lower:function(){return this.each(_t)},append:function(t){var n="function"==typeof t?t:Z(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:Z(t),r=null==n?bt:"function"==typeof n?n:K(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(mt)},clone:function(t){return this.select(t?wt:xt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?St:Tt,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var c,f=0,s=u.length;f<s;++f)for(r=0,c=u[f];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return Et(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return Et(this,t,n)}})(t,n))}};var Dt=0;function qt(){return new Lt}function Lt(){this._="@"+(++Dt).toString(36)}function Ut(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function Ot(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function Bt(t){var n=Ut();return n.changedTouches&&(n=n.changedTouches[0]),Ot(t,n)}function Yt(t,n,e){arguments.length<3&&(e=n,n=Ut().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Ot(t,r);return null}function Ft(){t.event.stopImmediatePropagation()}function It(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Ht(t){var n=t.document.documentElement,e=Rt(t).on("dragstart.drag",It,!0);"onselectstart"in n?e.on("selectstart.drag",It,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function jt(t,n){var e=t.document.documentElement,r=Rt(t).on("dragstart.drag",null);n&&(r.on("click.drag",It,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function Xt(t){return function(){return t}}function Gt(t,n,e,r,i,o,a,u,c,f){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=c,this._=f}function Vt(){return!t.event.ctrlKey&&!t.event.button}function $t(){return this.parentNode}function Wt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Zt(){return navigator.maxTouchPoints||"ontouchstart"in this}function Qt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Kt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Jt(){}Lt.prototype=qt.prototype={constructor:Lt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},Gt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var tn="\\s*([+-]?\\d+)\\s*",nn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",en="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rn=/^#([0-9a-f]{3})$/,on=/^#([0-9a-f]{6})$/,an=new RegExp("^rgb\\("+[tn,tn,tn]+"\\)$"),un=new RegExp("^rgb\\("+[en,en,en]+"\\)$"),cn=new RegExp("^rgba\\("+[tn,tn,tn,nn]+"\\)$"),fn=new RegExp("^rgba\\("+[en,en,en,nn]+"\\)$"),sn=new RegExp("^hsl\\("+[nn,en,en]+"\\)$"),ln=new RegExp("^hsla\\("+[nn,en,en,nn]+"\\)$"),hn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function dn(){return this.rgb().formatHex()}function pn(){return this.rgb().formatRgb()}function vn(t){var n;return t=(t+"").trim().toLowerCase(),(n=rn.exec(t))?new mn((n=parseInt(n[1],16))>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):(n=on.exec(t))?gn(parseInt(n[1],16)):(n=an.exec(t))?new mn(n[1],n[2],n[3],1):(n=un.exec(t))?new mn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=cn.exec(t))?yn(n[1],n[2],n[3],n[4]):(n=fn.exec(t))?yn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=sn.exec(t))?Nn(n[1],n[2]/100,n[3]/100,1):(n=ln.exec(t))?Nn(n[1],n[2]/100,n[3]/100,n[4]):hn.hasOwnProperty(t)?gn(hn[t]):"transparent"===t?new mn(NaN,NaN,NaN,0):null}function gn(t){return new mn(t>>16&255,t>>8&255,255&t,1)}function yn(t,n,e,r){return r<=0&&(t=n=e=NaN),new mn(t,n,e,r)}function _n(t){return t instanceof Jt||(t=vn(t)),t?new mn((t=t.rgb()).r,t.g,t.b,t.opacity):new mn}function bn(t,n,e,r){return 1===arguments.length?_n(t):new mn(t,n,e,null==r?1:r)}function mn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function xn(){return"#"+Mn(this.r)+Mn(this.g)+Mn(this.b)}function wn(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Mn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Nn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Sn(t,n,e,r)}function An(t){if(t instanceof Sn)return new Sn(t.h,t.s,t.l,t.opacity);if(t instanceof Jt||(t=vn(t)),!t)return new Sn;if(t instanceof Sn)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,c=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=c<.5?o+i:2-o-i,a*=60):u=c>0&&c<1?0:a,new Sn(a,u,c,t.opacity)}function Tn(t,n,e,r){return 1===arguments.length?An(t):new Sn(t,n,e,null==r?1:r)}function Sn(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function kn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Qt(Jt,vn,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:dn,formatHex:dn,formatHsl:function(){return An(this).formatHsl()},formatRgb:pn,toString:pn}),Qt(mn,bn,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:xn,formatHex:xn,formatRgb:wn,toString:wn})),Qt(Sn,Tn,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Sn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Sn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new mn(kn(t>=240?t-240:t+120,i,r),kn(t,i,r),kn(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var En=Math.PI/180,Cn=180/Math.PI,Pn=.96422,zn=1,Rn=.82521,Dn=4/29,qn=6/29,Ln=3*qn*qn,Un=qn*qn*qn;function On(t){if(t instanceof Yn)return new Yn(t.l,t.a,t.b,t.opacity);if(t instanceof Vn)return $n(t);t instanceof mn||(t=_n(t));var n,e,r=jn(t.r),i=jn(t.g),o=jn(t.b),a=Fn((.2225045*r+.7168786*i+.0606169*o)/zn);return r===i&&i===o?n=e=a:(n=Fn((.4360747*r+.3850649*i+.1430804*o)/Pn),e=Fn((.0139322*r+.0971045*i+.7141733*o)/Rn)),new Yn(116*a-16,500*(n-a),200*(a-e),t.opacity)}function Bn(t,n,e,r){return 1===arguments.length?On(t):new Yn(t,n,e,null==r?1:r)}function Yn(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Fn(t){return t>Un?Math.pow(t,1/3):t/Ln+Dn}function In(t){return t>qn?t*t*t:Ln*(t-Dn)}function Hn(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function jn(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Xn(t){if(t instanceof Vn)return new Vn(t.h,t.c,t.l,t.opacity);if(t instanceof Yn||(t=On(t)),0===t.a&&0===t.b)return new Vn(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*Cn;return new Vn(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Gn(t,n,e,r){return 1===arguments.length?Xn(t):new Vn(t,n,e,null==r?1:r)}function Vn(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function $n(t){if(isNaN(t.h))return new Yn(t.l,0,0,t.opacity);var n=t.h*En;return new Yn(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}Qt(Yn,Bn,Kt(Jt,{brighter:function(t){return new Yn(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Yn(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new mn(Hn(3.1338561*(n=Pn*In(n))-1.6168667*(t=zn*In(t))-.4906146*(e=Rn*In(e))),Hn(-.9787684*n+1.9161415*t+.033454*e),Hn(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Qt(Vn,Gn,Kt(Jt,{brighter:function(t){return new Vn(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Vn(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return $n(this).rgb()}}));var Wn=-.14861,Zn=1.78277,Qn=-.29227,Kn=-.90649,Jn=1.97294,te=Jn*Kn,ne=Jn*Zn,ee=Zn*Qn-Kn*Wn;function re(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof ie)return new ie(t.h,t.s,t.l,t.opacity);t instanceof mn||(t=_n(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(ee*r+te*n-ne*e)/(ee+te-ne),o=r-i,a=(Jn*(e-i)-Qn*o)/Kn,u=Math.sqrt(a*a+o*o)/(Jn*i*(1-i)),c=u?Math.atan2(a,o)*Cn-120:NaN;return new ie(c<0?c+360:c,u,i,t.opacity)}(t):new ie(t,n,e,null==r?1:r)}function ie(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function oe(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function ae(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return oe((e-r/n)*n,a,i,o,u)}}function ue(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return oe((e-r/n)*n,i,o,a,u)}}function ce(t){return function(){return t}}function fe(t,n){return function(e){return t+e*n}}function se(t,n){var e=n-t;return e?fe(t,e>180||e<-180?e-360*Math.round(e/360):e):ce(isNaN(t)?n:t)}function le(t){return 1==(t=+t)?he:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):ce(isNaN(n)?e:n)}}function he(t,n){var e=n-t;return e?fe(t,e):ce(isNaN(t)?n:t)}Qt(ie,re,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new ie(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new ie(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*En,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new mn(255*(n+e*(Wn*r+Zn*i)),255*(n+e*(Qn*r+Kn*i)),255*(n+e*(Jn*r)),this.opacity)}}));var de=function t(n){var e=le(n);function r(t,n){var r=e((t=bn(t)).r,(n=bn(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=he(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function pe(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=bn(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var ve=pe(ae),ge=pe(ue);function ye(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=Ne(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function _e(t,n){var e=new Date;return n-=t=+t,function(r){return e.setTime(t+n*r),e}}function be(t,n){return n-=t=+t,function(e){return t+n*e}}function me(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=Ne(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var xe=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,we=new RegExp(xe.source,"g");function Me(t,n){var e,r,i,o=xe.lastIndex=we.lastIndex=0,a=-1,u=[],c=[];for(t+="",n+="";(e=xe.exec(t))&&(r=we.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,c.push({i:a,x:be(e,r)})),o=we.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)u[(e=c[r]).i]=e.x(t);return u.join("")})}function Ne(t,n){var e,r=typeof n;return null==n||"boolean"===r?ce(n):("number"===r?be:"string"===r?(e=vn(n))?(n=e,de):Me:n instanceof vn?de:n instanceof Date?_e:Array.isArray(n)?ye:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?me:be)(t,n)}function Ae(t,n){return n-=t=+t,function(e){return Math.round(t+n*e)}}var Te,Se,ke,Ee,Ce=180/Math.PI,Pe={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ze(t,n,e,r,i,o){var a,u,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),t*r<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Ce,skewX:Math.atan(c)*Ce,scaleX:a,scaleY:u}}function Re(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],c=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var c=a.push("translate(",null,n,null,e);u.push({i:c-4,x:be(t,i)},{i:c-2,x:be(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:be(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:be(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,c),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:be(t,e)},{i:u-2,x:be(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,c),o=a=null,function(t){for(var n,e=-1,r=c.length;++e<r;)u[(n=c[e]).i]=n.x(t);return u.join("")}}}var De=Re(function(t){return"none"===t?Pe:(Te||(Te=document.createElement("DIV"),Se=document.documentElement,ke=document.defaultView),Te.style.transform=t,t=ke.getComputedStyle(Se.appendChild(Te),null).getPropertyValue("transform"),Se.removeChild(Te),ze(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),qe=Re(function(t){return null==t?Pe:(Ee||(Ee=document.createElementNS("http://www.w3.org/2000/svg","g")),Ee.setAttribute("transform",t),(t=Ee.transform.baseVal.consolidate())?ze((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Pe)},", ",")",")"),Le=Math.SQRT2,Ue=2,Oe=4,Be=1e-12;function Ye(t){return((t=Math.exp(t))+1/t)/2}function Fe(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],c=n[1],f=n[2],s=u-i,l=c-o,h=s*s+l*l;if(h<Be)r=Math.log(f/a)/Le,e=function(t){return[i+t*s,o+t*l,a*Math.exp(Le*t*r)]};else{var d=Math.sqrt(h),p=(f*f-a*a+Oe*h)/(2*a*Ue*d),v=(f*f-a*a-Oe*h)/(2*f*Ue*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/Le,e=function(t){var n=t*r,e=Ye(g),u=a/(Ue*d)*(e*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(Le*n+g)-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+u*s,o+u*l,a*e/Ye(Le*n+g)]}}return e.duration=1e3*r,e}function Ie(t){return function(n,e){var r=t((n=Tn(n)).h,(e=Tn(e)).h),i=he(n.s,e.s),o=he(n.l,e.l),a=he(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var He=Ie(se),je=Ie(he);function Xe(t){return function(n,e){var r=t((n=Gn(n)).h,(e=Gn(e)).h),i=he(n.c,e.c),o=he(n.l,e.l),a=he(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Ge=Xe(se),Ve=Xe(he);function $e(t){return function n(e){function r(n,r){var i=t((n=re(n)).h,(r=re(r)).h),o=he(n.s,r.s),a=he(n.l,r.l),u=he(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var We=$e(se),Ze=$e(he);var Qe,Ke,Je=0,tr=0,nr=0,er=1e3,rr=0,ir=0,or=0,ar="object"==typeof performance&&performance.now?performance:Date,ur="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function cr(){return ir||(ur(fr),ir=ar.now()+or)}function fr(){ir=0}function sr(){this._call=this._time=this._next=null}function lr(t,n,e){var r=new sr;return r.restart(t,n,e),r}function hr(){cr(),++Je;for(var t,n=Qe;n;)(t=ir-n._time)>=0&&n._call.call(null,t),n=n._next;--Je}function dr(){ir=(rr=ar.now())+or,Je=tr=0;try{hr()}finally{Je=0,function(){var t,n,e=Qe,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Qe=n);Ke=t,vr(r)}(),ir=0}}function pr(){var t=ar.now(),n=t-rr;n>er&&(or-=n,rr=t)}function vr(t){Je||(tr&&(tr=clearTimeout(tr)),t-ir>24?(t<1/0&&(tr=setTimeout(dr,t-ar.now()-or)),nr&&(nr=clearInterval(nr))):(nr||(rr=ar.now(),nr=setInterval(pr,er)),Je=1,ur(dr)))}function gr(t,n,e){var r=new sr;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}sr.prototype=lr.prototype={constructor:sr,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?cr():+e)+(null==n?0:+n),this._next||Ke===this||(Ke?Ke._next=this:Qe=this,Ke=this),this._call=t,this._time=e,vr()},stop:function(){this._call&&(this._call=null,this._time=1/0,vr())}};var yr=I("start","end","cancel","interrupt"),_r=[],br=0,mr=1,xr=2,wr=3,Mr=4,Nr=5,Ar=6;function Tr(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(c){var f,s,l,h;if(e.state!==mr)return u();for(f in i)if((h=i[f]).name===e.name){if(h.state===wr)return gr(o);h.state===Mr?(h.state=Ar,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[f]):+f<n&&(h.state=Ar,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[f])}if(gr(function(){e.state===wr&&(e.state=Mr,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=xr,e.on.call("start",t,t.__data__,e.index,e.group),e.state===xr){for(e.state=wr,r=new Array(l=e.tween.length),f=0,s=-1;f<l;++f)(h=e.tween[f].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h);r.length=s+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=Nr,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);e.state===Nr&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=Ar,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=lr(function(t){e.state=mr,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:yr,tween:_r,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:br})}function Sr(t,n){var e=Er(t,n);if(e.state>br)throw new Error("too late; already scheduled");return e}function kr(t,n){var e=Er(t,n);if(e.state>wr)throw new Error("too late; already running");return e}function Er(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Cr(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>xr&&e.state<Nr,e.state=Ar,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function Pr(t,n,e){var r=t._id;return t.each(function(){var t=kr(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Er(t,r).value[n]}}function zr(t,n){var e;return("number"==typeof n?be:n instanceof vn?de:(e=vn(n))?(n=e,de):Me)(t,n)}var Rr=zt.prototype.constructor;function Dr(t){return function(){this.style.removeProperty(t)}}var qr=0;function Lr(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Ur(t){return zt().transition(t)}function Or(){return++qr}var Br=zt.prototype;function Yr(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Fr(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Lr.prototype=Ur.prototype={constructor:Lr,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=K(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,c,f=r[a],s=f.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=f[h])&&(c=t.call(u,u.__data__,h,f))&&("__data__"in u&&(c.__data__=u.__data__),l[h]=c,Tr(l[h],n,e,h,l,Er(u,e)));return new Lr(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=tt(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var c,f=r[u],s=f.length,l=0;l<s;++l)if(c=f[l]){for(var h,d=t.call(c,c.__data__,l,f),p=Er(c,e),v=0,g=d.length;v<g;++v)(h=d[v])&&Tr(h,n,e,v,d,p);o.push(d),a.push(c)}return new Lr(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Lr(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Lr(a,this._parents,this._name,this._id)},selection:function(){return new Rr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Or(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)if(a=u[f]){var s=Er(a,n);Tr(a,t,e,f,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new Lr(r,this._parents,t,e)},call:Br.call,nodes:Br.nodes,node:Br.node,size:Br.size,empty:Br.empty,each:Br.each,on:function(t,n){var e=this._id;return arguments.length<2?Er(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?Sr:kr;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=W(t),r="transform"===e?qe:zr;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttribute(t))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttribute(t)}})(e,r,Pr(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}:function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}})(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=W(t);return this.tween(e,(r.local?function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n(e))}}(t,i)),e}return i._value=n,i}:function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n(e))}}(t,i)),e}return i._value=n,i})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?De:zr;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=ft(this,t),a=(this.style.removeProperty(t),ft(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,Dr(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=ft(this,t),u=e(this),c=u+"";return null==u&&(this.style.removeProperty(t),c=u=ft(this,t)),a===c?null:a===r&&c===i?o:(i=c,o=n(r=a,u))}}(t,r,Pr(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var c=kr(this,t),f=c.on,s=null==c.value[a]?o||(o=Dr(n)):void 0;f===e&&i===s||(r=(e=f).copy()).on(u,i=s),c.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=ft(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n(r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(Pr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Er(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=kr(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=kr(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},c=0,f=i.length;c<f;++c)if(i[c].name===n){i[c]=u;break}c===f&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Sr(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Sr(this,t).delay=n}})(n,t)):Er(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){kr(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){kr(this,t).duration=n}})(n,t)):Er(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){kr(this,t).ease=n}}(n,t)):Er(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},c={value:function(){0==--i&&o()}};e.each(function(){var e=kr(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(c)),e.on=n})})}};var Ir=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),Hr=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),jr=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Xr=Math.PI,Gr=Xr/2;function Vr(t){return(1-Math.cos(Xr*t))/2}function $r(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Wr(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var Zr=4/11,Qr=6/11,Kr=8/11,Jr=.75,ti=9/11,ni=10/11,ei=.9375,ri=21/22,ii=63/64,oi=1/Zr/Zr;function ai(t){return(t=+t)<Zr?oi*t*t:t<Kr?oi*(t-=Qr)*t+Jr:t<ni?oi*(t-=ti)*t+ei:oi*(t-=ri)*t+ii}var ui=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),ci=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),fi=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),si=2*Math.PI,li=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=si);function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*si)},i.period=function(e){return t(n,e)},i}(1,.3),hi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=si);function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*si)},i.period=function(e){return t(n,e)},i}(1,.3),di=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=si);function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*si)},i.period=function(e){return t(n,e)},i}(1,.3),pi={time:null,delay:0,duration:250,ease:Fr};function vi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return pi.time=cr(),pi;return e}zt.prototype.interrupt=function(t){return this.each(function(){Cr(this,t)})},zt.prototype.transition=function(t){var n,e;t instanceof Lr?(n=t._id,t=t._name):(n=Or(),(e=pi).time=cr(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)(a=u[f])&&Tr(a,t,n,f,u,e||vi(a,n));return new Lr(r,this._parents,t,n)};var gi=[null];function yi(t){return function(){return t}}function _i(t,n,e){this.target=t,this.type=n,this.selection=e}function bi(){t.event.stopImmediatePropagation()}function mi(){t.event.preventDefault(),t.event.stopImmediatePropagation()}var xi={name:"drag"},wi={name:"space"},Mi={name:"handle"},Ni={name:"center"};function Ai(t){return[+t[0],+t[1]]}function Ti(t){return[Ai(t[0]),Ai(t[1])]}var Si={name:"x",handles:["w","e"].map(qi),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},ki={name:"y",handles:["n","s"].map(qi),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Ei={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(qi),input:function(t){return null==t?null:Ti(t)},output:function(t){return t}},Ci={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Pi={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},zi={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Ri={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Di={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function qi(t){return{type:t}}function Li(){return!t.event.ctrlKey&&!t.event.button}function Ui(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Oi(){return navigator.maxTouchPoints||"ontouchstart"in this}function Bi(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Yi(n){var e,r=Ui,i=Li,o=Oi,a=!0,u=I(f,"start","brush","end"),c=6;function f(t){var e=t.property("__brush",g).selectAll(".overlay").data([qi("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Ci.overlay).merge(e).each(function(){var t=Bi(this).extent;Rt(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([qi("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Ci.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=t.selectAll(".handle").data(n.handles,function(t){return t.type});r.exit().remove(),r.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Ci[t.type]}),t.each(s).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",d).filter(o).on("touchstart.brush",d).on("touchmove.brush",p).on("touchend.brush touchcancel.brush",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function s(){var t=Rt(this),n=Bi(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-c/2:n[0][0]-c/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-c/2:n[0][1]-c/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+c:c}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+c:c})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function l(t,n,e){return!e&&t.__brush.emitter||new h(t,n)}function h(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function d(){if((!e||t.event.touches)&&i.apply(this,arguments)){var r,o,u,c,f,h,d,p,v,g,y,_,b=this,m=t.event.target.__data__.type,x="selection"===(a&&t.event.metaKey?m="overlay":m)?xi:a&&t.event.altKey?Ni:Mi,w=n===ki?null:Ri[m],M=n===Si?null:Di[m],N=Bi(b),A=N.extent,T=N.selection,S=A[0][0],k=A[0][1],E=A[1][0],C=A[1][1],P=0,z=0,R=w&&M&&a&&t.event.shiftKey,D=t.event.touches?(_=t.event.changedTouches[0].identifier,function(n){return Yt(n,t.event.touches,_)}):Bt,q=D(b),L=q,U=l(b,arguments,!0).beforestart();"overlay"===m?(T&&(v=!0),N.selection=T=[[r=n===ki?S:q[0],u=n===Si?k:q[1]],[f=n===ki?E:r,d=n===Si?C:u]]):(r=T[0][0],u=T[0][1],f=T[1][0],d=T[1][1]),o=r,c=u,h=f,p=d;var O=Rt(b).attr("pointer-events","none"),B=O.selectAll(".overlay").attr("cursor",Ci[m]);if(t.event.touches)U.moved=F,U.ended=H;else{var Y=Rt(t.event.view).on("mousemove.brush",F,!0).on("mouseup.brush",H,!0);a&&Y.on("keydown.brush",function(){switch(t.event.keyCode){case 16:R=w&&M;break;case 18:x===Mi&&(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ni,I());break;case 32:x!==Mi&&x!==Ni||(w<0?f=h-P:w>0&&(r=o-P),M<0?d=p-z:M>0&&(u=c-z),x=wi,B.attr("cursor",Ci.selection),I());break;default:return}mi()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:R&&(g=y=R=!1,I());break;case 18:x===Ni&&(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Mi,I());break;case 32:x===wi&&(t.event.altKey?(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ni):(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Mi),B.attr("cursor",Ci[m]),I());break;default:return}mi()},!0),Ht(t.event.view)}bi(),Cr(b),s.call(b),U.start()}function F(){var t=D(b);!R||g||y||(Math.abs(t[0]-L[0])>Math.abs(t[1]-L[1])?y=!0:g=!0),L=t,v=!0,mi(),I()}function I(){var t;switch(P=L[0]-q[0],z=L[1]-q[1],x){case wi:case xi:w&&(P=Math.max(S-r,Math.min(E-f,P)),o=r+P,h=f+P),M&&(z=Math.max(k-u,Math.min(C-d,z)),c=u+z,p=d+z);break;case Mi:w<0?(P=Math.max(S-r,Math.min(E-r,P)),o=r+P,h=f):w>0&&(P=Math.max(S-f,Math.min(E-f,P)),o=r,h=f+P),M<0?(z=Math.max(k-u,Math.min(C-u,z)),c=u+z,p=d):M>0&&(z=Math.max(k-d,Math.min(C-d,z)),c=u,p=d+z);break;case Ni:w&&(o=Math.max(S,Math.min(E,r-P*w)),h=Math.max(S,Math.min(E,f+P*w))),M&&(c=Math.max(k,Math.min(C,u-z*M)),p=Math.max(k,Math.min(C,d+z*M)))}h<o&&(w*=-1,t=r,r=f,f=t,t=o,o=h,h=t,m in Pi&&B.attr("cursor",Ci[m=Pi[m]])),p<c&&(M*=-1,t=u,u=d,d=t,t=c,c=p,p=t,m in zi&&B.attr("cursor",Ci[m=zi[m]])),N.selection&&(T=N.selection),g&&(o=T[0][0],h=T[1][0]),y&&(c=T[0][1],p=T[1][1]),T[0][0]===o&&T[0][1]===c&&T[1][0]===h&&T[1][1]===p||(N.selection=[[o,c],[h,p]],s.call(b),U.brush())}function H(){if(bi(),t.event.touches){if(t.event.touches.length)return;e&&clearTimeout(e),e=setTimeout(function(){e=null},500)}else jt(t.event.view,v),Y.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);O.attr("pointer-events","all"),B.attr("cursor",Ci.overlay),N.selection&&(T=N.selection),function(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}(T)&&(N.selection=null,s.call(b)),U.end()}}function p(){l(this,arguments).moved()}function v(){l(this,arguments).ended()}function g(){var t=this.__brush||{selection:null};return t.extent=Ti(r.apply(this,arguments)),t.dim=n,t}return f.move=function(t,e){t.selection?t.on("start.brush",function(){l(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){l(this,arguments).end()}).tween("brush",function(){var t=this,r=t.__brush,i=l(t,arguments),o=r.selection,a=n.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=Ne(o,a);function c(n){r.selection=1===n&&null===a?null:u(n),s.call(t),i.brush()}return null!==o&&null!==a?c:c(1)}):t.each(function(){var t=this,r=arguments,i=t.__brush,o=n.input("function"==typeof e?e.apply(t,r):e,i.extent),a=l(t,r).beforestart();Cr(t),i.selection=null===o?null:o,s.call(t),a.start().brush().end()})},f.clear=function(t){f.move(t,null)},h.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting?(this.starting=!1,this.emit("start")):this.emit("brush"),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){kt(new _i(f,t,n.output(this.state.selection)),u.apply,u,[t,this.that,this.args])}},f.extent=function(t){return arguments.length?(r="function"==typeof t?t:yi(Ti(t)),f):r},f.filter=function(t){return arguments.length?(i="function"==typeof t?t:yi(!!t),f):i},f.handleSize=function(t){return arguments.length?(c=+t,f):c},f.keyModifiers=function(t){return arguments.length?(a=!!t,f):a},f.on=function(){var t=u.on.apply(u,arguments);return t===u?f:t},f}var Fi=Math.cos,Ii=Math.sin,Hi=Math.PI,ji=Hi/2,Xi=2*Hi,Gi=Math.max;function Vi(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}var $i=Array.prototype.slice;function Wi(t){return function(){return t}}var Zi=Math.PI,Qi=2*Zi,Ki=Qi-1e-6;function Ji(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function to(){return new Ji}function no(t){return t.source}function eo(t){return t.target}function ro(t){return t.radius}function io(t){return t.startAngle}function oo(t){return t.endAngle}Ji.prototype=to.prototype={constructor:Ji,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,c=r-n,f=o-t,s=a-n,l=f*f+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-c*f)>1e-6&&i){var h=e-o,d=r-a,p=u*u+c*c,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Zi-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*f)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>f*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),c=t+a,f=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+f:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+c+","+f),e&&(l<0&&(l=l%Qi+Qi),l>Ki?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=c)+","+(this._y1=f):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Zi)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};function ao(){}function uo(t,n){var e=new ao;if(t instanceof ao)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function co(){return{}}function fo(t,n,e){t[n]=e}function so(){return uo()}function lo(t,n,e){t.set(n,e)}function ho(){}ao.prototype=uo.prototype={constructor:ao,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var po=uo.prototype;function vo(t,n){var e=new ho;if(t instanceof ho)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}ho.prototype=vo.prototype={constructor:ho,has:po.has,add:function(t){return this["$"+(t+="")]=t,this},remove:po.remove,clear:po.clear,values:po.keys,size:po.size,empty:po.empty,each:po.each};var go=Array.prototype.slice;function yo(t,n){return t-n}function _o(t){return function(){return t}}function bo(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=mo(t,n[r]))return e;return 0}function mo(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var c=t[o],f=c[0],s=c[1],l=t[u],h=l[0],d=l[1];if(xo(c,l,n))return 0;s>r!=d>r&&e<(h-f)*(r-s)/(d-s)+f&&(i=-i)}return i}function xo(t,n,e){var r,i,o,a;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function wo(){}var Mo=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function No(){var t=1,n=1,e=M,r=u;function i(t){var n=e(t);if(Array.isArray(n))n=n.slice().sort(yo);else{var r=s(t),i=r[0],a=r[1];n=w(i,a,n),n=g(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map(function(n){return o(t,n)})}function o(e,i){var o=[],u=[];return function(e,r,i){var o,u,c,f,s,l,h=new Array,d=new Array;o=u=-1,f=e[0]>=r,Mo[f<<1].forEach(p);for(;++o<t-1;)c=f,f=e[o+1]>=r,Mo[c|f<<1].forEach(p);Mo[f<<0].forEach(p);for(;++u<n-1;){for(o=-1,f=e[u*t+t]>=r,s=e[u*t]>=r,Mo[f<<1|s<<2].forEach(p);++o<t-1;)c=f,f=e[u*t+t+o+1]>=r,l=s,s=e[u*t+o+1]>=r,Mo[c|f<<1|s<<2|l<<3].forEach(p);Mo[f|s<<3].forEach(p)}o=-1,s=e[u*t]>=r,Mo[s<<2].forEach(p);for(;++o<t-1;)l=s,s=e[u*t+o+1]>=r,Mo[s<<2|l<<3].forEach(p);function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],c=[t[1][0]+o,t[1][1]+u],f=a(r),s=a(c);(n=d[f])?(e=h[s])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(c),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(c),d[n.end=s]=n):(n=h[s])?(e=d[f])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(c),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=f]=n):h[f]=d[s]={start:f,end:s,ring:[r,c]}}Mo[s<<3].forEach(p)}(e,i,function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(t)>0?o.push([t]):u.push(t)}),u.forEach(function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==bo((n=o[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach(function(e){var o,a=e[0],u=e[1],c=0|a,f=0|u,s=r[f*t+c];a>0&&a<t&&c===a&&(o=r[f*t+c-1],e[0]=a+(i-o)/(s-o)-.5),u>0&&u<n&&f===u&&(o=r[(f-1)*t+c],e[1]=u+(i-o)/(s-o)-.5)})}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n];var r=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!(r>0&&o>0))throw new Error("invalid size");return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?_o(go.call(t)):_o(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:wo,i):r===u},i}function Ao(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,c=0;u<r+e;++u)u<r&&(c+=t.data[u+a*r]),u>=e&&(u>=o&&(c-=t.data[u-o+a*r]),n.data[u-e+a*r]=c/Math.min(u+1,r-1+o-u,o))}function To(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,c=0;u<i+e;++u)u<i&&(c+=t.data[a+u*r]),u>=e&&(u>=o&&(c-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=c/Math.min(u+1,i-1+o-u,o))}function So(t){return t[0]}function ko(t){return t[1]}function Eo(){return 1}var Co={},Po={},zo=34,Ro=10,Do=13;function qo(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Lo(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Uo(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function Oo(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+Uo(-t,6):t>9999?"+"+Uo(t,6):Uo(t,4)}(t.getUTCFullYear())+"-"+Uo(t.getUTCMonth()+1,2)+"-"+Uo(t.getUTCDate(),2)+(i?"T"+Uo(n,2)+":"+Uo(e,2)+":"+Uo(r,2)+"."+Uo(i,3)+"Z":r?"T"+Uo(n,2)+":"+Uo(e,2)+":"+Uo(r,2)+"Z":e||n?"T"+Uo(n,2)+":"+Uo(e,2)+"Z":"")}function Bo(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],o=t.length,a=0,u=0,c=o<=0,f=!1;function s(){if(c)return Po;if(f)return f=!1,Co;var n,r,i=a;if(t.charCodeAt(i)===zo){for(;a++<o&&t.charCodeAt(a)!==zo||t.charCodeAt(++a)===zo;);return(n=a)>=o?c=!0:(r=t.charCodeAt(a++))===Ro?f=!0:r===Do&&(f=!0,t.charCodeAt(a)===Ro&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if((r=t.charCodeAt(n=a++))===Ro)f=!0;else if(r===Do)f=!0,t.charCodeAt(a)===Ro&&++a;else if(r!==e)continue;return t.slice(i,n)}return c=!0,t.slice(i,o)}for(t.charCodeAt(o-1)===Ro&&--o,t.charCodeAt(o-1)===Do&&--o;(r=s())!==Po;){for(var l=[];r!==Co&&r!==Po;)l.push(r),r=s();n&&null==(l=n(l,u++))||i.push(l)}return i}function i(n,e){return n.map(function(n){return e.map(function(t){return a(n[t])}).join(t)})}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?Oo(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=qo(t);return function(r,i){return n(e(r),i,t)}}(t,n):qo(t)});return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=Lo(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=Lo(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")}}}var Yo=Bo(","),Fo=Yo.parse,Io=Yo.parseRows,Ho=Yo.format,jo=Yo.formatBody,Xo=Yo.formatRows,Go=Bo("\t"),Vo=Go.parse,$o=Go.parseRows,Wo=Go.format,Zo=Go.formatBody,Qo=Go.formatRows;function Ko(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function Jo(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function ta(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function na(t,n){return fetch(t,n).then(ta)}function ea(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),na(n,e).then(function(n){return t(n,r)})}}var ra=ea(Fo),ia=ea(Vo);function oa(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function aa(t){return function(n,e){return na(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}var ua=aa("application/xml"),ca=aa("text/html"),fa=aa("image/svg+xml");function sa(t){return function(){return t}}function la(){return 1e-6*(Math.random()-.5)}function ha(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,c,f,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|f]))return i[l]=p,t;if(u=+t._x.call(null,d.data),c=+t._y.call(null,d.data),n===u&&e===c)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a}while((l=s<<1|f)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function da(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function pa(t){return t[0]}function va(t){return t[1]}function ga(t,n,e){var r=new ya(null==n?pa:n,null==e?va:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function ya(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function _a(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var ba=ga.prototype=ya.prototype;function ma(t){return t.x+t.vx}function xa(t){return t.y+t.vy}function wa(t){return t.index}function Ma(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function Na(t){return t.x}function Aa(t){return t.y}ba.copy=function(){var t,n,e=new ya(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=_a(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=_a(n));return e},ba.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return ha(this.cover(n,e),n,e,t)},ba.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),c=1/0,f=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<c&&(c=r),r>s&&(s=r),i<f&&(f=i),i>l&&(l=i));if(c>s||f>l)return this;for(this.cover(c,f).cover(s,l),e=0;e<o;++e)ha(this,a[e],u[e],t[e]);return this},ba.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,c=i-e,f=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=f,f=a,c*=2,u){case 0:i=e+c,o=r+c;break;case 1:e=i-c,o=r+c;break;case 2:i=e+c,r=o-c;break;case 3:e=i-c,r=o-c}this._root&&this._root.length&&(this._root=f)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},ba.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},ba.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},ba.find=function(t,n,e){var r,i,o,a,u,c,f,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new da(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);c=p.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>d||(a=c.x1)<s||(u=c.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new da(v[3],g,y,a,u),new da(v[2],i,y,g,u),new da(v[1],g,o,a,y),new da(v[0],i,o,g,y)),(f=(n>=y)<<1|t>=g)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-f],p[p.length-1-f]=c)}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data}}return r},ba.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,c,f,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((f=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(c=(v+y)/2))?v=c:y=c,n=d,!(d=d[l=s<<1|f]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},ba.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},ba.root=function(){return this._root},ba.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},ba.visit=function(t){var n,e,r,i,o,a,u=[],c=this._root;for(c&&u.push(new da(c,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&c.length){var f=(r+o)/2,s=(i+a)/2;(e=c[3])&&u.push(new da(e,f,s,o,a)),(e=c[2])&&u.push(new da(e,r,s,f,a)),(e=c[1])&&u.push(new da(e,f,i,o,s)),(e=c[0])&&u.push(new da(e,r,i,f,s))}return this},ba.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new da(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,c=n.x1,f=n.y1,s=(a+c)/2,l=(u+f)/2;(o=i[0])&&e.push(new da(o,a,u,s,l)),(o=i[1])&&e.push(new da(o,s,u,c,l)),(o=i[2])&&e.push(new da(o,a,l,s,f)),(o=i[3])&&e.push(new da(o,s,l,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},ba.x=function(t){return arguments.length?(this._x=t,this):this._x},ba.y=function(t){return arguments.length?(this._y=t,this):this._y};var Ta=10,Sa=Math.PI*(3-Math.sqrt(5));function ka(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Ea(t){return(t=ka(Math.abs(t)))?t[1]:NaN}var Ca,Pa=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function za(t){if(!(n=Pa.exec(t)))throw new Error("invalid format: "+t);var n;return new Ra({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function Ra(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function Da(t,n){var e=ka(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}za.prototype=Ra.prototype,Ra.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var qa={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Da(100*t,n)},r:Da,s:function(t,n){var e=ka(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(Ca=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+ka(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function La(t){return t}var Ua,Oa=Array.prototype.map,Ba=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ya(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?La:(n=Oa.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),o.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?La:function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(Oa.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",f=void 0===t.minus?"-":t.minus+"",s=void 0===t.nan?"NaN":t.nan+"";function l(t){var n=(t=za(t)).fill,e=t.align,l=t.sign,h=t.symbol,d=t.zero,p=t.width,v=t.comma,g=t.precision,y=t.trim,_=t.type;"n"===_?(v=!0,_="g"):qa[_]||(void 0===g&&(g=12),y=!0,_="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=");var b="$"===h?i:"#"===h&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",m="$"===h?o:/[%p]/.test(_)?c:"",x=qa[_],w=/[defgprs%]/.test(_);function M(t){var i,o,c,h=b,M=m;if("c"===_)M=x(t)+M,t="";else{var N=(t=+t)<0;if(t=isNaN(t)?s:x(Math.abs(t),g),y&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(i>0){if(!+t[r])break t;i=0}}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),N&&0==+t&&(N=!1),h=(N?"("===l?l:f:"-"===l||"("===l?"":l)+h,M=("s"===_?Ba[8+Ca/3]:"")+M+(N&&"("===l?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(c=t.charCodeAt(i))||c>57){M=(46===c?a+t.slice(i+1):t.slice(i))+M,t=t.slice(0,i);break}}v&&!d&&(t=r(t,1/0));var A=h.length+t.length+M.length,T=A<p?new Array(p-A+1).join(n):"";switch(v&&d&&(t=r(T+t,T.length?p-M.length:1/0),T=""),e){case"<":t=h+t+M+T;break;case"=":t=h+T+t+M;break;case"^":t=T.slice(0,A=T.length>>1)+h+t+M+T.slice(A);break;default:t=T+h+t+M}return u(t)}return g=void 0===g?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),M.toString=function(){return t+""},M}return{format:l,formatPrefix:function(t,n){var e=l(((t=za(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(Ea(n)/3))),i=Math.pow(10,-r),o=Ba[8+r/3];return function(t){return e(i*t)+o}}}}function Fa(n){return Ua=Ya(n),t.format=Ua.format,t.formatPrefix=Ua.formatPrefix,Ua}function Ia(t){return Math.max(0,-Ea(Math.abs(t)))}function Ha(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Ea(n)/3)))-Ea(Math.abs(t)))}function ja(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Ea(n)-Ea(t))+1}function Xa(){return new Ga}function Ga(){this.reset()}Fa({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),Ga.prototype={constructor:Ga,reset:function(){this.s=this.t=0},add:function(t){$a(Va,t,this.t),$a(this,Va.s,this.s),this.s?this.t+=Va.t:this.s=Va.t},valueOf:function(){return this.s}};var Va=new Ga;function $a(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var Wa=1e-6,Za=1e-12,Qa=Math.PI,Ka=Qa/2,Ja=Qa/4,tu=2*Qa,nu=180/Qa,eu=Qa/180,ru=Math.abs,iu=Math.atan,ou=Math.atan2,au=Math.cos,uu=Math.ceil,cu=Math.exp,fu=Math.log,su=Math.pow,lu=Math.sin,hu=Math.sign||function(t){return t>0?1:t<0?-1:0},du=Math.sqrt,pu=Math.tan;function vu(t){return t>1?0:t<-1?Qa:Math.acos(t)}function gu(t){return t>1?Ka:t<-1?-Ka:Math.asin(t)}function yu(t){return(t=lu(t/2))*t}function _u(){}function bu(t,n){t&&xu.hasOwnProperty(t.type)&&xu[t.type](t,n)}var mu={Feature:function(t,n){bu(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)bu(e[r].geometry,n)}},xu={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){wu(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)wu(e[r],n,0)},Polygon:function(t,n){Mu(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Mu(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)bu(e[r],n)}};function wu(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Mu(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)wu(t[e],n,1);n.polygonEnd()}function Nu(t,n){t&&mu.hasOwnProperty(t.type)?mu[t.type](t,n):bu(t,n)}var Au,Tu,Su,ku,Eu,Cu=Xa(),Pu=Xa(),zu={point:_u,lineStart:_u,lineEnd:_u,polygonStart:function(){Cu.reset(),zu.lineStart=Ru,zu.lineEnd=Du},polygonEnd:function(){var t=+Cu;Pu.add(t<0?tu+t:t),this.lineStart=this.lineEnd=this.point=_u},sphere:function(){Pu.add(tu)}};function Ru(){zu.point=qu}function Du(){Lu(Au,Tu)}function qu(t,n){zu.point=Lu,Au=t,Tu=n,Su=t*=eu,ku=au(n=(n*=eu)/2+Ja),Eu=lu(n)}function Lu(t,n){var e=(t*=eu)-Su,r=e>=0?1:-1,i=r*e,o=au(n=(n*=eu)/2+Ja),a=lu(n),u=Eu*a,c=ku*o+u*au(i),f=u*r*lu(i);Cu.add(ou(f,c)),Su=t,ku=o,Eu=a}function Uu(t){return[ou(t[1],t[0]),gu(t[2])]}function Ou(t){var n=t[0],e=t[1],r=au(e);return[r*au(n),r*lu(n),lu(e)]}function Bu(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Yu(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Fu(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function Iu(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Hu(t){var n=du(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}var ju,Xu,Gu,Vu,$u,Wu,Zu,Qu,Ku,Ju,tc,nc,ec,rc,ic,oc,ac,uc,cc,fc,sc,lc,hc,dc,pc,vc,gc=Xa(),yc={point:_c,lineStart:mc,lineEnd:xc,polygonStart:function(){yc.point=wc,yc.lineStart=Mc,yc.lineEnd=Nc,gc.reset(),zu.polygonStart()},polygonEnd:function(){zu.polygonEnd(),yc.point=_c,yc.lineStart=mc,yc.lineEnd=xc,Cu<0?(ju=-(Gu=180),Xu=-(Vu=90)):gc>Wa?Vu=90:gc<-Wa&&(Xu=-90),Ju[0]=ju,Ju[1]=Gu},sphere:function(){ju=-(Gu=180),Xu=-(Vu=90)}};function _c(t,n){Ku.push(Ju=[ju=t,Gu=t]),n<Xu&&(Xu=n),n>Vu&&(Vu=n)}function bc(t,n){var e=Ou([t*eu,n*eu]);if(Qu){var r=Yu(Qu,e),i=Yu([r[1],-r[0],0],r);Hu(i),i=Uu(i);var o,a=t-$u,u=a>0?1:-1,c=i[0]*nu*u,f=ru(a)>180;f^(u*$u<c&&c<u*t)?(o=i[1]*nu)>Vu&&(Vu=o):f^(u*$u<(c=(c+360)%360-180)&&c<u*t)?(o=-i[1]*nu)<Xu&&(Xu=o):(n<Xu&&(Xu=n),n>Vu&&(Vu=n)),f?t<$u?Ac(ju,t)>Ac(ju,Gu)&&(Gu=t):Ac(t,Gu)>Ac(ju,Gu)&&(ju=t):Gu>=ju?(t<ju&&(ju=t),t>Gu&&(Gu=t)):t>$u?Ac(ju,t)>Ac(ju,Gu)&&(Gu=t):Ac(t,Gu)>Ac(ju,Gu)&&(ju=t)}else Ku.push(Ju=[ju=t,Gu=t]);n<Xu&&(Xu=n),n>Vu&&(Vu=n),Qu=e,$u=t}function mc(){yc.point=bc}function xc(){Ju[0]=ju,Ju[1]=Gu,yc.point=_c,Qu=null}function wc(t,n){if(Qu){var e=t-$u;gc.add(ru(e)>180?e+(e>0?360:-360):e)}else Wu=t,Zu=n;zu.point(t,n),bc(t,n)}function Mc(){zu.lineStart()}function Nc(){wc(Wu,Zu),zu.lineEnd(),ru(gc)>Wa&&(ju=-(Gu=180)),Ju[0]=ju,Ju[1]=Gu,Qu=null}function Ac(t,n){return(n-=t)<0?n+360:n}function Tc(t,n){return t[0]-n[0]}function Sc(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var kc={sphere:_u,point:Ec,lineStart:Pc,lineEnd:Dc,polygonStart:function(){kc.lineStart=qc,kc.lineEnd=Lc},polygonEnd:function(){kc.lineStart=Pc,kc.lineEnd=Dc}};function Ec(t,n){t*=eu;var e=au(n*=eu);Cc(e*au(t),e*lu(t),lu(n))}function Cc(t,n,e){ec+=(t-ec)/++tc,rc+=(n-rc)/tc,ic+=(e-ic)/tc}function Pc(){kc.point=zc}function zc(t,n){t*=eu;var e=au(n*=eu);dc=e*au(t),pc=e*lu(t),vc=lu(n),kc.point=Rc,Cc(dc,pc,vc)}function Rc(t,n){t*=eu;var e=au(n*=eu),r=e*au(t),i=e*lu(t),o=lu(n),a=ou(du((a=pc*o-vc*i)*a+(a=vc*r-dc*o)*a+(a=dc*i-pc*r)*a),dc*r+pc*i+vc*o);nc+=a,oc+=a*(dc+(dc=r)),ac+=a*(pc+(pc=i)),uc+=a*(vc+(vc=o)),Cc(dc,pc,vc)}function Dc(){kc.point=Ec}function qc(){kc.point=Uc}function Lc(){Oc(lc,hc),kc.point=Ec}function Uc(t,n){lc=t,hc=n,t*=eu,n*=eu,kc.point=Oc;var e=au(n);dc=e*au(t),pc=e*lu(t),vc=lu(n),Cc(dc,pc,vc)}function Oc(t,n){t*=eu;var e=au(n*=eu),r=e*au(t),i=e*lu(t),o=lu(n),a=pc*o-vc*i,u=vc*r-dc*o,c=dc*i-pc*r,f=du(a*a+u*u+c*c),s=gu(f),l=f&&-s/f;cc+=l*a,fc+=l*u,sc+=l*c,nc+=s,oc+=s*(dc+(dc=r)),ac+=s*(pc+(pc=i)),uc+=s*(vc+(vc=o)),Cc(dc,pc,vc)}function Bc(t){return function(){return t}}function Yc(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Fc(t,n){return[ru(t)>Qa?t+Math.round(-t/tu)*tu:t,n]}function Ic(t,n,e){return(t%=tu)?n||e?Yc(jc(t),Xc(n,e)):jc(t):n||e?Xc(n,e):Fc}function Hc(t){return function(n,e){return[(n+=t)>Qa?n-tu:n<-Qa?n+tu:n,e]}}function jc(t){var n=Hc(t);return n.invert=Hc(-t),n}function Xc(t,n){var e=au(t),r=lu(t),i=au(n),o=lu(n);function a(t,n){var a=au(n),u=au(t)*a,c=lu(t)*a,f=lu(n),s=f*e+u*r;return[ou(c*i-s*o,u*e-f*r),gu(s*i+c*o)]}return a.invert=function(t,n){var a=au(n),u=au(t)*a,c=lu(t)*a,f=lu(n),s=f*i-c*o;return[ou(c*i+f*o,u*e+s*r),gu(s*e-u*r)]},a}function Gc(t){function n(n){return(n=t(n[0]*eu,n[1]*eu))[0]*=nu,n[1]*=nu,n}return t=Ic(t[0]*eu,t[1]*eu,t.length>2?t[2]*eu:0),n.invert=function(n){return(n=t.invert(n[0]*eu,n[1]*eu))[0]*=nu,n[1]*=nu,n},n}function Vc(t,n,e,r,i,o){if(e){var a=au(n),u=lu(n),c=r*e;null==i?(i=n+r*tu,o=n-c/2):(i=$c(a,i),o=$c(a,o),(r>0?i<o:i>o)&&(i+=r*tu));for(var f,s=i;r>0?s>o:s<o;s-=c)f=Uu([a,-u*au(s),-u*lu(s)]),t.point(f[0],f[1])}}function $c(t,n){(n=Ou(n))[0]-=t,Hu(n);var e=vu(-n[1]);return((-n[2]<0?-e:e)+tu-Wa)%tu}function Wc(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:_u,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function Zc(t,n){return ru(t[0]-n[0])<Wa&&ru(t[1]-n[1])<Wa}function Qc(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Kc(t,n,e,r,i){var o,a,u=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(Zc(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else u.push(e=new Qc(r,t,null,!0)),c.push(e.o=new Qc(r,null,e,!1)),u.push(e=new Qc(a,t,null,!1)),c.push(e.o=new Qc(a,null,e,!0))}}),u.length){for(c.sort(n),Jc(u),Jc(c),o=0,a=c.length;o<a;++o)c[o].e=e=!e;for(var f,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;f=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=f.length;o<a;++o)i.point((s=f[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(f=h.p.z,o=f.length-1;o>=0;--o)i.point((s=f[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}f=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function Jc(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}Fc.invert=Fc;var tf=Xa();function nf(t){return ru(t[0])<=Qa?t[0]:hu(t[0])*((ru(t[0])+Qa)%tu-Qa)}function ef(t,n){var e=nf(n),r=n[1],i=lu(r),o=[lu(e),-au(e),0],a=0,u=0;tf.reset(),1===i?r=Ka+Wa:-1===i&&(r=-Ka-Wa);for(var c=0,f=t.length;c<f;++c)if(l=(s=t[c]).length)for(var s,l,h=s[l-1],d=nf(h),p=h[1]/2+Ja,v=lu(p),g=au(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=nf(_),m=_[1]/2+Ja,x=lu(m),w=au(m),M=b-d,N=M>=0?1:-1,A=N*M,T=A>Qa,S=v*x;if(tf.add(ou(S*N*lu(A),g*w+S*au(A))),a+=T?M+N*tu:M,T^d>=e^b>=e){var k=Yu(Ou(h),Ou(_));Hu(k);var E=Yu(o,k);Hu(E);var C=(T^M>=0?-1:1)*gu(E[2]);(r>C||r===C&&(k[0]||k[1]))&&(u+=T^M>=0?1:-1)}}return(a<-Wa||a<Wa&&tf<-Wa)^1&u}function rf(t,n,e,r){return function(i){var o,a,u,c=n(i),f=Wc(),s=n(f),l=!1,h={point:d,lineStart:v,lineEnd:g,polygonStart:function(){h.point=y,h.lineStart=_,h.lineEnd=b,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=g,a=T(a);var t=ef(o,r);a.length?(l||(i.polygonStart(),l=!0),Kc(a,af,t,e,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){c.point(t,n)}function v(){h.point=p,c.lineStart()}function g(){h.point=d,c.lineEnd()}function y(t,n){u.push([t,n]),s.point(t,n)}function _(){s.lineStart(),u=[]}function b(){y(u[0][0],u[0][1]),s.lineEnd();var t,n,e,r,c=s.clean(),h=f.result(),d=h.length;if(u.pop(),o.push(u),u=null,d)if(1&c){if((n=(e=h[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else d>1&&2&c&&h.push(h.pop().concat(h.shift())),a.push(h.filter(of))}return h}}function of(t){return t.length>1}function af(t,n){return((t=t.x)[0]<0?t[1]-Ka-Wa:Ka-t[1])-((n=n.x)[0]<0?n[1]-Ka-Wa:Ka-n[1])}var uf=rf(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?Qa:-Qa,c=ru(o-e);ru(c-Qa)<Wa?(t.point(e,r=(r+a)/2>0?Ka:-Ka),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&c>=Qa&&(ru(e-i)<Wa&&(e-=i*Wa),ru(o-u)<Wa&&(o-=u*Wa),r=function(t,n,e,r){var i,o,a=lu(t-e);return ru(a)>Wa?iu((lu(n)*(o=au(r))*lu(e)-lu(r)*(i=au(n))*lu(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*Ka,r.point(-Qa,i),r.point(0,i),r.point(Qa,i),r.point(Qa,0),r.point(Qa,-i),r.point(0,-i),r.point(-Qa,-i),r.point(-Qa,0),r.point(-Qa,i);else if(ru(t[0]-n[0])>Wa){var o=t[0]<n[0]?Qa:-Qa;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-Qa,-Ka]);function cf(t){var n=au(t),e=6*eu,r=n>0,i=ru(n)>Wa;function o(t,e){return au(t)*au(e)>n}function a(t,e,r){var i=[1,0,0],o=Yu(Ou(t),Ou(e)),a=Bu(o,o),u=o[0],c=a-u*u;if(!c)return!r&&t;var f=n*a/c,s=-n*u/c,l=Yu(i,o),h=Iu(i,f);Fu(h,Iu(o,s));var d=l,p=Bu(h,d),v=Bu(d,d),g=p*p-v*(Bu(h,h)-1);if(!(g<0)){var y=du(g),_=Iu(d,(-p-y)/v);if(Fu(_,h),_=Uu(_),!r)return _;var b,m=t[0],x=e[0],w=t[1],M=e[1];x<m&&(b=m,m=x,x=b);var N=x-m,A=ru(N-Qa)<Wa;if(!A&&M<w&&(b=w,w=M,M=b),A||N<Wa?A?w+M>0^_[1]<(ru(_[0]-m)<Wa?w:M):w<=_[1]&&_[1]<=M:N>Qa^(m<=_[0]&&_[0]<=x)){var T=Iu(d,(-p+y)/v);return Fu(T,h),[_,Uu(T)]}}}function u(n,e){var i=r?t:Qa-t,o=0;return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return rf(o,function(t){var n,e,c,f,s;return{lineStart:function(){f=c=!1,s=1},point:function(l,h){var d,p=[l,h],v=o(l,h),g=r?v?0:u(l,h):v?u(l+(l<0?Qa:-Qa),h):0;if(!n&&(f=c=v)&&t.lineStart(),v!==c&&(!(d=a(n,p))||Zc(n,d)||Zc(p,d))&&(p[0]+=Wa,p[1]+=Wa,v=o(p[0],p[1])),v!==c)s=0,v?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1]),t.lineEnd()),n=d;else if(i&&n&&r^v){var y;g&e||!(y=a(p,n,!0))||(s=0,r?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&Zc(n,p)||t.point(p[0],p[1]),n=p,c=v,e=g},lineEnd:function(){c&&t.lineEnd(),n=null},clean:function(){return s|(f&&c)<<1}}},function(n,r,i,o){Vc(o,t,e,i,n,r)},r?[0,-t]:[-Qa,t-Qa])}var ff=1e9,sf=-ff;function lf(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,f){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||c(i,o)<0^u>0)do{f.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else f.point(o[0],o[1])}function a(r,i){return ru(r[0]-t)<Wa?i>0?0:3:ru(r[0]-e)<Wa?i>0?2:1:ru(r[1]-n)<Wa?i>0?1:0:i>0?3:2}function u(t,n){return c(t.x,n.x)}function c(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var c,f,s,l,h,d,p,v,g,y,_,b=a,m=Wc(),x={point:w,lineStart:function(){x.point=M,f&&f.push(s=[]);y=!0,g=!1,p=v=NaN},lineEnd:function(){c&&(M(l,h),d&&g&&m.rejoin(),c.push(m.result()));x.point=w,g&&b.lineEnd()},polygonStart:function(){b=m,c=[],f=[],_=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=f.length;e<i;++e)for(var o,a,u=f[e],c=1,s=u.length,l=u[0],h=l[0],d=l[1];c<s;++c)o=h,a=d,l=u[c],h=l[0],d=l[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=_&&n,i=(c=T(c)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&Kc(c,u,n,o,a),a.polygonEnd());b=a,c=f=s=null}};function w(t,n){i(t,n)&&b.point(t,n)}function M(o,a){var u=i(o,a);if(f&&s.push([o,a]),y)l=o,h=a,d=u,y=!1,u&&(b.lineStart(),b.point(o,a));else if(u&&g)b.point(o,a);else{var c=[p=Math.max(sf,Math.min(ff,p)),v=Math.max(sf,Math.min(ff,v))],m=[o=Math.max(sf,Math.min(ff,o)),a=Math.max(sf,Math.min(ff,a))];!function(t,n,e,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=n[0]-u,h=n[1]-c;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(n[0]=u+s*l,n[1]=c+s*h),!0}}}}}(c,m,t,n,e,r)?u&&(b.lineStart(),b.point(o,a),_=!1):(g||(b.lineStart(),b.point(c[0],c[1])),b.point(m[0],m[1]),u||b.lineEnd(),_=!1)}p=o,v=a,g=u}return x}}var hf,df,pf,vf=Xa(),gf={sphere:_u,point:_u,lineStart:function(){gf.point=_f,gf.lineEnd=yf},lineEnd:_u,polygonStart:_u,polygonEnd:_u};function yf(){gf.point=gf.lineEnd=_u}function _f(t,n){hf=t*=eu,df=lu(n*=eu),pf=au(n),gf.point=bf}function bf(t,n){t*=eu;var e=lu(n*=eu),r=au(n),i=ru(t-hf),o=au(i),a=r*lu(i),u=pf*e-df*r*o,c=df*e+pf*r*o;vf.add(ou(du(a*a+u*u),c)),hf=t,df=e,pf=r}function mf(t){return vf.reset(),Nu(t,gf),+vf}var xf=[null,null],wf={type:"LineString",coordinates:xf};function Mf(t,n){return xf[0]=t,xf[1]=n,mf(wf)}var Nf={Feature:function(t,n){return Tf(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(Tf(e[r].geometry,n))return!0;return!1}},Af={Sphere:function(){return!0},Point:function(t,n){return Sf(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Sf(e[r],n))return!0;return!1},LineString:function(t,n){return kf(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(kf(e[r],n))return!0;return!1},Polygon:function(t,n){return Ef(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ef(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(Tf(e[r],n))return!0;return!1}};function Tf(t,n){return!(!t||!Af.hasOwnProperty(t.type))&&Af[t.type](t,n)}function Sf(t,n){return 0===Mf(t,n)}function kf(t,n){for(var e,r,i,o=0,a=t.length;o<a;o++){if(0===(r=Mf(t[o],n)))return!0;if(o>0&&(i=Mf(t[o],t[o-1]))>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<Za*i)return!0;e=r}return!1}function Ef(t,n){return!!ef(t.map(Cf),Pf(n))}function Cf(t){return(t=t.map(Pf)).pop(),t}function Pf(t){return[t[0]*eu,t[1]*eu]}function zf(t,n,e){var r=g(t,n-Wa,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function Rf(t,n,e){var r=g(t,n-Wa,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Df(){var t,n,e,r,i,o,a,u,c,f,s,l,h=10,d=h,p=90,v=360,y=2.5;function _(){return{type:"MultiLineString",coordinates:b()}}function b(){return g(uu(r/p)*p,e,p).map(s).concat(g(uu(u/v)*v,a,v).map(l)).concat(g(uu(n/h)*h,t,h).filter(function(t){return ru(t%p)>Wa}).map(c)).concat(g(uu(o/d)*d,i,d).filter(function(t){return ru(t%v)>Wa}).map(f))}return _.lines=function(){return b().map(function(t){return{type:"LineString",coordinates:t}})},_.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(l(a).slice(1),s(e).reverse().slice(1),l(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],v=+t[1],_):[p,v]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,c=zf(o,i,90),f=Rf(n,t,y),s=zf(u,a,90),l=Rf(r,e,y),_):y},_.extentMajor([[-180,-90+Wa],[180,90-Wa]]).extentMinor([[-180,-80-Wa],[180,80+Wa]])}function qf(t){return t}var Lf,Uf,Of,Bf,Yf=Xa(),Ff=Xa(),If={point:_u,lineStart:_u,lineEnd:_u,polygonStart:function(){If.lineStart=Hf,If.lineEnd=Gf},polygonEnd:function(){If.lineStart=If.lineEnd=If.point=_u,Yf.add(ru(Ff)),Ff.reset()},result:function(){var t=Yf/2;return Yf.reset(),t}};function Hf(){If.point=jf}function jf(t,n){If.point=Xf,Lf=Of=t,Uf=Bf=n}function Xf(t,n){Ff.add(Bf*t-Of*n),Of=t,Bf=n}function Gf(){Xf(Lf,Uf)}var Vf=1/0,$f=Vf,Wf=-Vf,Zf=Wf,Qf={point:function(t,n){t<Vf&&(Vf=t);t>Wf&&(Wf=t);n<$f&&($f=n);n>Zf&&(Zf=n)},lineStart:_u,lineEnd:_u,polygonStart:_u,polygonEnd:_u,result:function(){var t=[[Vf,$f],[Wf,Zf]];return Wf=Zf=-($f=Vf=1/0),t}};var Kf,Jf,ts,ns,es=0,rs=0,is=0,os=0,as=0,us=0,cs=0,fs=0,ss=0,ls={point:hs,lineStart:ds,lineEnd:gs,polygonStart:function(){ls.lineStart=ys,ls.lineEnd=_s},polygonEnd:function(){ls.point=hs,ls.lineStart=ds,ls.lineEnd=gs},result:function(){var t=ss?[cs/ss,fs/ss]:us?[os/us,as/us]:is?[es/is,rs/is]:[NaN,NaN];return es=rs=is=os=as=us=cs=fs=ss=0,t}};function hs(t,n){es+=t,rs+=n,++is}function ds(){ls.point=ps}function ps(t,n){ls.point=vs,hs(ts=t,ns=n)}function vs(t,n){var e=t-ts,r=n-ns,i=du(e*e+r*r);os+=i*(ts+t)/2,as+=i*(ns+n)/2,us+=i,hs(ts=t,ns=n)}function gs(){ls.point=hs}function ys(){ls.point=bs}function _s(){ms(Kf,Jf)}function bs(t,n){ls.point=ms,hs(Kf=ts=t,Jf=ns=n)}function ms(t,n){var e=t-ts,r=n-ns,i=du(e*e+r*r);os+=i*(ts+t)/2,as+=i*(ns+n)/2,us+=i,cs+=(i=ns*t-ts*n)*(ts+t),fs+=i*(ns+n),ss+=3*i,hs(ts=t,ns=n)}function xs(t){this._context=t}xs.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,tu)}},result:_u};var ws,Ms,Ns,As,Ts,Ss=Xa(),ks={point:_u,lineStart:function(){ks.point=Es},lineEnd:function(){ws&&Cs(Ms,Ns),ks.point=_u},polygonStart:function(){ws=!0},polygonEnd:function(){ws=null},result:function(){var t=+Ss;return Ss.reset(),t}};function Es(t,n){ks.point=Cs,Ms=As=t,Ns=Ts=n}function Cs(t,n){As-=t,Ts-=n,Ss.add(du(As*As+Ts*Ts)),As=t,Ts=n}function Ps(){this._string=[]}function zs(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Rs(t){return function(n){var e=new Ds;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Ds(){}function qs(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Nu(e,t.stream(Qf)),n(Qf.result()),null!=r&&t.clipExtent(r),t}function Ls(t,n,e){return qs(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])},e)}function Us(t,n,e){return Ls(t,[[0,0],n],e)}function Os(t,n,e){return qs(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])},e)}function Bs(t,n,e){return qs(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])},e)}Ps.prototype={_radius:4.5,_circle:zs(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=zs(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},Ds.prototype={constructor:Ds,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Ys=16,Fs=au(30*eu);function Is(t,n){return+n?function(t,n){function e(r,i,o,a,u,c,f,s,l,h,d,p,v,g){var y=f-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=c+p,M=du(m*m+x*x+w*w),N=gu(w/=M),A=ru(ru(w)-1)<Wa||ru(o-l)<Wa?(o+l)/2:ou(x,m),T=t(A,N),S=T[0],k=T[1],E=S-r,C=k-i,P=_*E-y*C;(P*P/b>n||ru((y*E+_*C)/b-.5)>.3||a*h+u*d+c*p<Fs)&&(e(r,i,o,a,u,c,S,k,A,m/=M,x/=M,w,v,g),g.point(S,k),e(S,k,A,m,x,w,f,s,l,h,d,p,v,g))}}return function(n){var r,i,o,a,u,c,f,s,l,h,d,p,v={point:g,lineStart:y,lineEnd:b,polygonStart:function(){n.polygonStart(),v.lineStart=m},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function g(e,r){e=t(e,r),n.point(e[0],e[1])}function y(){s=NaN,v.point=_,n.lineStart()}function _(r,i){var o=Ou([r,i]),a=t(r,i);e(s,l,f,h,d,p,s=a[0],l=a[1],f=r,h=o[0],d=o[1],p=o[2],Ys,n),n.point(s,l)}function b(){v.point=g,n.lineEnd()}function m(){y(),v.point=x,v.lineEnd=w}function x(t,n){_(r=t,n),i=s,o=l,a=h,u=d,c=p,v.point=_}function w(){e(s,l,f,h,d,p,i,o,r,a,u,c,Ys,n),v.lineEnd=b,b()}return v}}(t,n):function(t){return Rs({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var Hs=Rs({point:function(t,n){this.stream.point(t*eu,n*eu)}});function js(t,n,e,r){var i=au(r),o=lu(r),a=i*t,u=o*t,c=i/t,f=o/t,s=(o*e-i*n)/t,l=(o*n+i*e)/t;function h(t,r){return[a*t-u*r+n,e-u*t-a*r]}return h.invert=function(t,n){return[c*t-f*n+s,l-f*t-c*n]},h}function Xs(t){return Gs(function(){return t})()}function Gs(t){var n,e,r,i,o,a,u,c,f,s,l=150,h=480,d=250,p=0,v=0,g=0,y=0,_=0,b=0,m=null,x=uf,w=null,M=qf,N=.5;function A(t){return c(t[0]*eu,t[1]*eu)}function T(t){return(t=c.invert(t[0],t[1]))&&[t[0]*nu,t[1]*nu]}function S(){var t=js(l,0,0,b).apply(null,n(p,v)),r=(b?js:function(t,n,e){function r(r,i){return[n+t*r,e-t*i]}return r.invert=function(r,i){return[(r-n)/t,(e-i)/t]},r})(l,h-t[0],d-t[1],b);return e=Ic(g,y,_),u=Yc(n,r),c=Yc(e,u),a=Is(u,N),k()}function k(){return f=s=null,A}return A.stream=function(t){return f&&s===t?f:f=Hs(function(t){return Rs({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(x(a(M(s=t)))))},A.preclip=function(t){return arguments.length?(x=t,m=void 0,k()):x},A.postclip=function(t){return arguments.length?(M=t,w=r=i=o=null,k()):M},A.clipAngle=function(t){return arguments.length?(x=+t?cf(m=t*eu):(m=null,uf),k()):m*nu},A.clipExtent=function(t){return arguments.length?(M=null==t?(w=r=i=o=null,qf):lf(w=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),k()):null==w?null:[[w,r],[i,o]]},A.scale=function(t){return arguments.length?(l=+t,S()):l},A.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],S()):[h,d]},A.center=function(t){return arguments.length?(p=t[0]%360*eu,v=t[1]%360*eu,S()):[p*nu,v*nu]},A.rotate=function(t){return arguments.length?(g=t[0]%360*eu,y=t[1]%360*eu,_=t.length>2?t[2]%360*eu:0,S()):[g*nu,y*nu,_*nu]},A.angle=function(t){return arguments.length?(b=t%360*eu,S()):b*nu},A.precision=function(t){return arguments.length?(a=Is(u,N=t*t),k()):du(N)},A.fitExtent=function(t,n){return Ls(A,t,n)},A.fitSize=function(t,n){return Us(A,t,n)},A.fitWidth=function(t,n){return Os(A,t,n)},A.fitHeight=function(t,n){return Bs(A,t,n)},function(){return n=t.apply(this,arguments),A.invert=n.invert&&T,S()}}function Vs(t){var n=0,e=Qa/3,r=Gs(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*eu,e=t[1]*eu):[n*nu,e*nu]},i}function $s(t,n){var e=lu(t),r=(e+lu(n))/2;if(ru(r)<Wa)return function(t){var n=au(t);function e(t,e){return[t*n,lu(e)/n]}return e.invert=function(t,e){return[t/n,gu(e*n)]},e}(t);var i=1+e*(2*r-e),o=du(i)/r;function a(t,n){var e=du(i-2*r*lu(n))/r;return[e*lu(t*=r),o-e*au(t)]}return a.invert=function(t,n){var e=o-n;return[ou(t,ru(e))/r*hu(e),gu((i-(t*t+e*e)*r*r)/(2*r))]},a}function Ws(){return Vs($s).scale(155.424).center([0,33.6442])}function Zs(){return Ws().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Qs(t){return function(n,e){var r=au(n),i=au(e),o=t(r*i);return[o*i*lu(n),o*lu(e)]}}function Ks(t){return function(n,e){var r=du(n*n+e*e),i=t(r),o=lu(i),a=au(i);return[ou(n*o,r*a),gu(r&&e*o/r)]}}var Js=Qs(function(t){return du(2/(1+t))});Js.invert=Ks(function(t){return 2*gu(t/2)});var tl=Qs(function(t){return(t=vu(t))&&t/lu(t)});function nl(t,n){return[t,fu(pu((Ka+n)/2))]}function el(t){var n,e,r,i=Xs(t),o=i.center,a=i.scale,u=i.translate,c=i.clipExtent,f=null;function s(){var o=Qa*a(),u=i(Gc(i.rotate()).invert([0,0]));return c(null==f?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===nl?[[Math.max(u[0]-o,f),n],[Math.min(u[0]+o,e),r]]:[[f,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),s()):a()},i.translate=function(t){return arguments.length?(u(t),s()):u()},i.center=function(t){return arguments.length?(o(t),s()):o()},i.clipExtent=function(t){return arguments.length?(null==t?f=n=e=r=null:(f=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),s()):null==f?null:[[f,n],[e,r]]},s()}function rl(t){return pu((Ka+t)/2)}function il(t,n){var e=au(t),r=t===n?lu(t):fu(e/au(n))/fu(rl(n)/rl(t)),i=e*su(rl(t),r)/r;if(!r)return nl;function o(t,n){i>0?n<-Ka+Wa&&(n=-Ka+Wa):n>Ka-Wa&&(n=Ka-Wa);var e=i/su(rl(n),r);return[e*lu(r*t),i-e*au(r*t)]}return o.invert=function(t,n){var e=i-n,o=hu(r)*du(t*t+e*e);return[ou(t,ru(e))/r*hu(e),2*iu(su(i/o,1/r))-Ka]},o}function ol(t,n){return[t,n]}function al(t,n){var e=au(t),r=t===n?lu(t):(e-au(n))/(n-t),i=e/r+t;if(ru(r)<Wa)return ol;function o(t,n){var e=i-n,o=r*t;return[e*lu(o),i-e*au(o)]}return o.invert=function(t,n){var e=i-n;return[ou(t,ru(e))/r*hu(e),i-hu(r)*du(t*t+e*e)]},o}tl.invert=Ks(function(t){return t}),nl.invert=function(t,n){return[t,2*iu(cu(n))-Ka]},ol.invert=ol;var ul=1.340264,cl=-.081106,fl=893e-6,sl=.003796,ll=du(3)/2;function hl(t,n){var e=gu(ll*lu(n)),r=e*e,i=r*r*r;return[t*au(e)/(ll*(ul+3*cl*r+i*(7*fl+9*sl*r))),e*(ul+cl*r+i*(fl+sl*r))]}function dl(t,n){var e=au(n),r=au(t)*e;return[e*lu(t)/r,lu(n)/r]}function pl(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?qf:Rs({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function vl(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function gl(t,n){return[au(n)*lu(t),lu(n)]}function yl(t,n){var e=au(n),r=1+au(t)*e;return[e*lu(t)/r,lu(n)/r]}function _l(t,n){return[fu(pu((Ka+n)/2)),-t]}function bl(t,n){return t.parent===n.parent?1:2}function ml(t,n){return t+n.x}function xl(t,n){return Math.max(t,n.y)}function wl(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function Ml(t,n){var e,r,i,o,a,u=new Sl(t),c=+t.value&&(u.value=t.value),f=[u];for(null==n&&(n=Nl);e=f.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)f.push(r=e.children[o]=new Sl(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(Tl)}function Nl(t){return t.children}function Al(t){t.data=t.data.data}function Tl(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Sl(t){this.data=t,this.depth=this.height=0,this.parent=null}hl.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(ul+cl*i+o*(fl+sl*i))-n)/(ul+3*cl*i+o*(7*fl+9*sl*i)))*r)*i*i,!(ru(e)<Za));++a);return[ll*t*(ul+3*cl*i+o*(7*fl+9*sl*i))/au(r),gu(lu(r)/ll)]},dl.invert=Ks(iu),vl.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(ru(e)>Wa&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},gl.invert=Ks(gu),yl.invert=Ks(function(t){return 2*iu(t)}),_l.invert=function(t,n){return[-n,2*iu(cu(t))-Ka]},Sl.prototype=Ml.prototype={constructor:Sl,count:function(){return this.eachAfter(wl)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return Ml(this).eachBefore(Al)}};var kl=Array.prototype.slice;function El(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(kl.call(t))).length,o=[];r<i;)n=t[r],e&&zl(e,n)?++r:(e=Dl(o=Cl(o,n)),r=0);return e}function Cl(t,n){var e,r;if(Rl(n,t))return[n];for(e=0;e<t.length;++e)if(Pl(n,t[e])&&Rl(ql(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(Pl(ql(t[e],t[r]),n)&&Pl(ql(t[e],n),t[r])&&Pl(ql(t[r],n),t[e])&&Rl(Ll(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function Pl(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function zl(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Rl(t,n){for(var e=0;e<n.length;++e)if(!zl(t,n[e]))return!1;return!0}function Dl(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return ql(t[0],t[1]);case 3:return Ll(t[0],t[1],t[2])}}function ql(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,c=o-e,f=a-r,s=u-i,l=Math.sqrt(c*c+f*f);return{x:(e+o+c/l*s)/2,y:(r+a+f/l*s)/2,r:(l+i+u)/2}}function Ll(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,c=n.r,f=e.x,s=e.y,l=e.r,h=r-a,d=r-f,p=i-u,v=i-s,g=c-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+c*c,m=_-f*f-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,N=(d*b-h*m)/(2*x)-i,A=(h*y-d*g)/x,T=M*M+A*A-1,S=2*(o+w*M+N*A),k=w*w+N*N-o*o,E=-(T?(S+Math.sqrt(S*S-4*T*k))/(2*T):k/S);return{x:r+w+M*E,y:i+N+A*E,r:E}}function Ul(t,n,e){var r,i,o,a,u=t.x-n.x,c=t.y-n.y,f=u*u+c*c;f?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(f+a-i)/(2*f),o=Math.sqrt(Math.max(0,a/f-r*r)),e.x=t.x-r*u-o*c,e.y=t.y-r*c+o*u):(r=(f+i-a)/(2*f),o=Math.sqrt(Math.max(0,i/f-r*r)),e.x=n.x+r*u-o*c,e.y=n.y+r*c+o*u)):(e.x=n.x+e.r,e.y=n.y)}function Ol(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Bl(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function Yl(t){this._=t,this.next=null,this.previous=null}function Fl(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,c,f,s,l;if((n=t[0]).x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Ul(e,n,r=t[2]),n=new Yl(n),e=new Yl(e),r=new Yl(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){Ul(n._,e._,r=t[u]),r=new Yl(r),c=e.next,f=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(Ol(c._,r._)){e=c,n.next=e,e.previous=n,--u;continue t}s+=c._.r,c=c.next}else{if(Ol(f._,r._)){(n=f).next=e,e.previous=n,--u;continue t}l+=f._.r,f=f.previous}}while(c!==f.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=Bl(n);(r=r.next)!==e;)(a=Bl(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=El(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y;return r.r}function Il(t){return null==t?null:Hl(t)}function Hl(t){if("function"!=typeof t)throw new Error;return t}function jl(){return 0}function Xl(t){return function(){return t}}function Gl(t){return Math.sqrt(t.value)}function Vl(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function $l(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=Fl(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function Wl(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function Zl(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function Ql(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*f}var Kl="$",Jl={depth:-1},th={};function nh(t){return t.id}function eh(t){return t.parentId}function rh(t,n){return t.parent===n.parent?1:2}function ih(t){var n=t.children;return n?n[0]:t.t}function oh(t){var n=t.children;return n?n[n.length-1]:t.t}function ah(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function uh(t,n,e){return t.a.parent===n.parent?t.a:e}function ch(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function fh(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(i-e)/t.value;++u<c;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*f}ch.prototype=Object.create(Sl.prototype);var sh=(1+Math.sqrt(5))/2;function lh(t,n,e,r,i,o){for(var a,u,c,f,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){c=i-e,f=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(f/c,c/f)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d}y.push(a={value:s,dice:c<f,children:_.slice(b,m)}),a.dice?Ql(a,e,r,i,w?r+=f*s/w:o):fh(a,e,r,w?e+=c*s/w:i,o),w-=s,b=m}return y}var hh=function t(n){function e(t,e,r,i,o){lh(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(sh);var dh=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,c,f,s,l=-1,h=a.length,d=t.value;++l<h;){for(c=(u=a[l]).children,f=u.value=0,s=c.length;f<s;++f)u.value+=c[f].value;u.dice?Ql(u,e,r,i,r+=(o-r)*u.value/d):fh(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=lh(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(sh);function ph(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function vh(t,n){return t[0]-n[0]||t[1]-n[1]}function gh(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&ph(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function yh(){return Math.random()}var _h=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(yh),bh=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(yh),mh=function t(n){function e(){var t=bh.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(yh),xh=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(yh),wh=function t(n){function e(t){var e=xh.source(n)(t);return function(){return e()/t}}return e.source=t,e}(yh),Mh=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(yh);function Nh(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function Ah(t,n){switch(arguments.length){case 0:break;case 1:this.interpolator(t);break;default:this.interpolator(n).domain(t)}return this}var Th=Array.prototype,Sh=Th.map,kh=Th.slice,Eh={name:"implicit"};function Ch(){var t=uo(),n=[],e=[],r=Eh;function i(i){var o=i+"",a=t.get(o);if(!a){if(r!==Eh)return r;t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=uo();for(var r,o,a=-1,u=e.length;++a<u;)t.has(o=(r=e[a])+"")||t.set(o,n.push(r));return i},i.range=function(t){return arguments.length?(e=kh.call(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return Ch(n,e).unknown(r)},Nh.apply(i,arguments),i}function Ph(){var t,n,e=Ch().unknown(void 0),r=e.domain,i=e.range,o=[0,1],a=!1,u=0,c=0,f=.5;function s(){var e=r().length,s=o[1]<o[0],l=o[s-0],h=o[1-s];t=(h-l)/Math.max(1,e-u+2*c),a&&(t=Math.floor(t)),l+=(h-l-t*(e-u))*f,n=t*(1-u),a&&(l=Math.round(l),n=Math.round(n));var d=g(e).map(function(n){return l+t*n});return i(s?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),s()):r()},e.range=function(t){return arguments.length?(o=[+t[0],+t[1]],s()):o.slice()},e.rangeRound=function(t){return o=[+t[0],+t[1]],a=!0,s()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,s()):a},e.padding=function(t){return arguments.length?(u=Math.min(1,c=+t),s()):u},e.paddingInner=function(t){return arguments.length?(u=Math.min(1,t),s()):u},e.paddingOuter=function(t){return arguments.length?(c=+t,s()):c},e.align=function(t){return arguments.length?(f=Math.max(0,Math.min(1,t)),s()):f},e.copy=function(){return Ph(r(),o).round(a).paddingInner(u).paddingOuter(c).align(f)},Nh.apply(s(),arguments)}function zh(t){return+t}var Rh=[0,1];function Dh(t){return t}function qh(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:function(t){return function(){return t}}(isNaN(n)?NaN:.5)}function Lh(t){var n,e=t[0],r=t[t.length-1];return e>r&&(n=e,e=r,r=n),function(t){return Math.max(e,Math.min(r,t))}}function Uh(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=qh(i,r),o=e(a,o)):(r=qh(r,i),o=e(o,a)),function(t){return o(r(t))}}function Oh(t,n,e){var r=Math.min(t.length,n.length)-1,o=new Array(r),a=new Array(r),u=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<r;)o[u]=qh(t[u],t[u+1]),a[u]=e(n[u],n[u+1]);return function(n){var e=i(t,n,1,r)-1;return a[e](o[e](n))}}function Bh(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Yh(){var t,n,e,r,i,o,a=Rh,u=Rh,c=Ne,f=Dh;function s(){return r=Math.min(a.length,u.length)>2?Oh:Uh,i=o=null,l}function l(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),u,c)))(t(f(n)))}return l.invert=function(e){return f(n((o||(o=r(u,a.map(t),be)))(e)))},l.domain=function(t){return arguments.length?(a=Sh.call(t,zh),f===Dh||(f=Lh(a)),s()):a.slice()},l.range=function(t){return arguments.length?(u=kh.call(t),s()):u.slice()},l.rangeRound=function(t){return u=kh.call(t),c=Ae,s()},l.clamp=function(t){return arguments.length?(f=t?Lh(a):Dh,l):f!==Dh},l.interpolate=function(t){return arguments.length?(c=t,s()):c},l.unknown=function(t){return arguments.length?(e=t,l):e},function(e,r){return t=e,n=r,s()}}function Fh(t,n){return Yh()(t,n)}function Ih(n,e,r,i){var o,a=w(n,e,r);switch((i=za(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=Ha(a,u))||(i.precision=o),t.formatPrefix(i,u);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=ja(a,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=Ia(a))||(i.precision=o-2*("%"===i.type))}return t.format(i)}function Hh(t){var n=t.domain;return t.ticks=function(t){var e=n();return m(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Ih(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i=n(),o=0,a=i.length-1,u=i[o],c=i[a];return c<u&&(r=u,u=c,c=r,r=o,o=a,a=r),(r=x(u,c,e))>0?r=x(u=Math.floor(u/r)*r,c=Math.ceil(c/r)*r,e):r<0&&(r=x(u=Math.ceil(u*r)/r,c=Math.floor(c*r)/r,e)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(c/r)*r,n(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(c*r)/r,n(i)),t},t}function jh(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Xh(t){return Math.log(t)}function Gh(t){return Math.exp(t)}function Vh(t){return-Math.log(-t)}function $h(t){return-Math.exp(-t)}function Wh(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Zh(t){return function(n){return-t(-n)}}function Qh(n){var e,r,i=n(Xh,Gh),o=i.domain,a=10;function u(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(a),r=function(t){return 10===t?Wh:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(a),o()[0]<0?(e=Zh(e),r=Zh(r),n(Vh,$h)):n(Xh,Gh),i}return i.base=function(t){return arguments.length?(a=+t,u()):a},i.domain=function(t){return arguments.length?(o(t),u()):o()},i.ticks=function(t){var n,i=o(),u=i[0],c=i[i.length-1];(n=c<u)&&(h=u,u=c,c=h);var f,s,l,h=e(u),d=e(c),p=null==t?10:+t,v=[];if(!(a%1)&&d-h<p){if(h=Math.round(h)-1,d=Math.round(d)+1,u>0){for(;h<d;++h)for(s=1,f=r(h);s<a;++s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else for(;h<d;++h)for(s=a-1,f=r(h);s>=1;--s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else v=m(h,d,Math.min(d-h,p)).map(r);return n?v.reverse():v},i.tickFormat=function(n,o){if(null==o&&(o=10===a?".0e":","),"function"!=typeof o&&(o=t.format(o)),n===1/0)return o;null==n&&(n=10);var u=Math.max(1,a*n/i.ticks().length);return function(t){var n=t/r(Math.round(e(t)));return n*a<a-.5&&(n*=a),n<=u?o(t):""}},i.nice=function(){return o(jh(o(),{floor:function(t){return r(Math.floor(e(t)))},ceil:function(t){return r(Math.ceil(e(t)))}}))},i}function Kh(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function Jh(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function td(t){var n=1,e=t(Kh(n),Jh(n));return e.constant=function(e){return arguments.length?t(Kh(n=+e),Jh(n)):n},Hh(e)}function nd(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function ed(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function rd(t){return t<0?-t*t:t*t}function id(t){var n=t(Dh,Dh),e=1;function r(){return 1===e?t(Dh,Dh):.5===e?t(ed,rd):t(nd(e),nd(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},Hh(n)}function od(){var t=id(Yh());return t.copy=function(){return Bh(t,od()).exponent(t.exponent())},Nh.apply(t,arguments),t}var ad=new Date,ud=new Date;function cd(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return cd(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return ad.setTime(+n),ud.setTime(+r),t(ad),t(ud),Math.floor(e(ad,ud))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var fd=cd(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});fd.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?cd(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):fd:null};var sd=fd.range,ld=6e4,hd=6048e5,dd=cd(function(t){t.setTime(t-t.getMilliseconds())},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),pd=dd.range,vd=cd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds())},function(t,n){t.setTime(+t+n*ld)},function(t,n){return(n-t)/ld},function(t){return t.getMinutes()}),gd=vd.range,yd=cd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds()-t.getMinutes()*ld)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),_d=yd.range,bd=cd(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ld)/864e5},function(t){return t.getDate()-1}),md=bd.range;function xd(t){return cd(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*ld)/hd})}var wd=xd(0),Md=xd(1),Nd=xd(2),Ad=xd(3),Td=xd(4),Sd=xd(5),kd=xd(6),Ed=wd.range,Cd=Md.range,Pd=Nd.range,zd=Ad.range,Rd=Td.range,Dd=Sd.range,qd=kd.range,Ld=cd(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Ud=Ld.range,Od=cd(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Od.every=function(t){return isFinite(t=Math.floor(t))&&t>0?cd(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var Bd=Od.range,Yd=cd(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*ld)},function(t,n){return(n-t)/ld},function(t){return t.getUTCMinutes()}),Fd=Yd.range,Id=cd(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),Hd=Id.range,jd=cd(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Xd=jd.range;function Gd(t){return cd(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/hd})}var Vd=Gd(0),$d=Gd(1),Wd=Gd(2),Zd=Gd(3),Qd=Gd(4),Kd=Gd(5),Jd=Gd(6),tp=Vd.range,np=$d.range,ep=Wd.range,rp=Zd.range,ip=Qd.range,op=Kd.range,ap=Jd.range,up=cd(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),cp=up.range,fp=cd(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});fp.every=function(t){return isFinite(t=Math.floor(t))&&t>0?cd(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var sp=fp.range;function lp(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function hp(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function dp(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function pp(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,c=t.shortMonths,f=wp(i),s=Mp(i),l=wp(o),h=Mp(o),d=wp(a),p=Mp(a),v=wp(u),g=Mp(u),y=wp(c),_=Mp(c),b={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:Hp,e:Hp,f:$p,H:jp,I:Xp,j:Gp,L:Vp,m:Wp,M:Zp,p:function(t){return i[+(t.getHours()>=12)]},Q:Nv,s:Av,S:Qp,u:Kp,U:Jp,V:tv,w:nv,W:ev,x:null,X:null,y:rv,Y:iv,Z:ov,"%":Mv},m={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:av,e:av,f:lv,H:uv,I:cv,j:fv,L:sv,m:hv,M:dv,p:function(t){return i[+(t.getUTCHours()>=12)]},Q:Nv,s:Av,S:pv,u:vv,U:gv,V:yv,w:_v,W:bv,x:null,X:null,y:mv,Y:xv,Z:wv,"%":Mv},x={a:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=p[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=_[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=g[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return N(t,n,e,r)},d:Rp,e:Rp,f:Bp,H:qp,I:qp,j:Dp,L:Op,m:zp,M:Lp,p:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.p=s[r[0].toLowerCase()],e+r[0].length):-1},Q:Fp,s:Ip,S:Up,u:Ap,U:Tp,V:Sp,w:Np,W:kp,x:function(t,n,r){return N(t,e,n,r)},X:function(t,n,e){return N(t,r,n,e)},y:Cp,Y:Ep,Z:Pp,"%":Yp};function w(t,n){return function(e){var r,i,o,a=[],u=-1,c=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++u<f;)37===t.charCodeAt(u)&&(a.push(t.slice(c,u)),null!=(i=gp[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),c=u+1);return a.push(t.slice(c,u)),a.join("")}}function M(t,n){return function(e){var r,i,o=dp(1900);if(N(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("p"in o&&(o.H=o.H%12+12*o.p),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=hp(dp(o.y))).getUTCDay(),r=i>4||0===i?$d.ceil(r):$d(r),r=jd.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=n(dp(o.y))).getDay(),r=i>4||0===i?Md.ceil(r):Md(r),r=bd.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?hp(dp(o.y)).getUTCDay():n(dp(o.y)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,hp(o)):n(o)}}function N(t,n,e,r){for(var i,o,a=0,u=n.length,c=e.length;a<u;){if(r>=c)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=x[i in gp?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),{format:function(t){var n=w(t+="",b);return n.toString=function(){return t},n},parse:function(t){var n=M(t+="",lp);return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",m);return n.toString=function(){return t},n},utcParse:function(t){var n=M(t,hp);return n.toString=function(){return t},n}}}var vp,gp={"-":"",_:" ",0:"0"},yp=/^\s*\d+/,_p=/^%/,bp=/[\\^$*+?|[\]().{}]/g;function mp(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function xp(t){return t.replace(bp,"\\$&")}function wp(t){return new RegExp("^(?:"+t.map(xp).join("|")+")","i")}function Mp(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Np(t,n,e){var r=yp.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Ap(t,n,e){var r=yp.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Tp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function Sp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function kp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function Ep(t,n,e){var r=yp.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function Cp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Pp(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function zp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Rp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function Dp(t,n,e){var r=yp.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function qp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Lp(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function Up(t,n,e){var r=yp.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Op(t,n,e){var r=yp.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Bp(t,n,e){var r=yp.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Yp(t,n,e){var r=_p.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function Fp(t,n,e){var r=yp.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function Ip(t,n,e){var r=yp.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function Hp(t,n){return mp(t.getDate(),n,2)}function jp(t,n){return mp(t.getHours(),n,2)}function Xp(t,n){return mp(t.getHours()%12||12,n,2)}function Gp(t,n){return mp(1+bd.count(Od(t),t),n,3)}function Vp(t,n){return mp(t.getMilliseconds(),n,3)}function $p(t,n){return Vp(t,n)+"000"}function Wp(t,n){return mp(t.getMonth()+1,n,2)}function Zp(t,n){return mp(t.getMinutes(),n,2)}function Qp(t,n){return mp(t.getSeconds(),n,2)}function Kp(t){var n=t.getDay();return 0===n?7:n}function Jp(t,n){return mp(wd.count(Od(t),t),n,2)}function tv(t,n){var e=t.getDay();return t=e>=4||0===e?Td(t):Td.ceil(t),mp(Td.count(Od(t),t)+(4===Od(t).getDay()),n,2)}function nv(t){return t.getDay()}function ev(t,n){return mp(Md.count(Od(t),t),n,2)}function rv(t,n){return mp(t.getFullYear()%100,n,2)}function iv(t,n){return mp(t.getFullYear()%1e4,n,4)}function ov(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+mp(n/60|0,"0",2)+mp(n%60,"0",2)}function av(t,n){return mp(t.getUTCDate(),n,2)}function uv(t,n){return mp(t.getUTCHours(),n,2)}function cv(t,n){return mp(t.getUTCHours()%12||12,n,2)}function fv(t,n){return mp(1+jd.count(fp(t),t),n,3)}function sv(t,n){return mp(t.getUTCMilliseconds(),n,3)}function lv(t,n){return sv(t,n)+"000"}function hv(t,n){return mp(t.getUTCMonth()+1,n,2)}function dv(t,n){return mp(t.getUTCMinutes(),n,2)}function pv(t,n){return mp(t.getUTCSeconds(),n,2)}function vv(t){var n=t.getUTCDay();return 0===n?7:n}function gv(t,n){return mp(Vd.count(fp(t),t),n,2)}function yv(t,n){var e=t.getUTCDay();return t=e>=4||0===e?Qd(t):Qd.ceil(t),mp(Qd.count(fp(t),t)+(4===fp(t).getUTCDay()),n,2)}function _v(t){return t.getUTCDay()}function bv(t,n){return mp($d.count(fp(t),t),n,2)}function mv(t,n){return mp(t.getUTCFullYear()%100,n,2)}function xv(t,n){return mp(t.getUTCFullYear()%1e4,n,4)}function wv(){return"+0000"}function Mv(){return"%"}function Nv(t){return+t}function Av(t){return Math.floor(+t/1e3)}function Tv(n){return vp=pp(n),t.timeFormat=vp.format,t.timeParse=vp.parse,t.utcFormat=vp.utcFormat,t.utcParse=vp.utcParse,vp}Tv({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Sv=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");var kv=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),Ev=1e3,Cv=60*Ev,Pv=60*Cv,zv=24*Pv,Rv=7*zv,Dv=30*zv,qv=365*zv;function Lv(t){return new Date(t)}function Uv(t){return t instanceof Date?+t:+new Date(+t)}function Ov(t,n,r,i,o,a,u,c,f){var s=Fh(Dh,Dh),l=s.invert,h=s.domain,d=f(".%L"),p=f(":%S"),v=f("%I:%M"),g=f("%I %p"),y=f("%a %d"),_=f("%b %d"),b=f("%B"),m=f("%Y"),x=[[u,1,Ev],[u,5,5*Ev],[u,15,15*Ev],[u,30,30*Ev],[a,1,Cv],[a,5,5*Cv],[a,15,15*Cv],[a,30,30*Cv],[o,1,Pv],[o,3,3*Pv],[o,6,6*Pv],[o,12,12*Pv],[i,1,zv],[i,2,2*zv],[r,1,Rv],[n,1,Dv],[n,3,3*Dv],[t,1,qv]];function M(e){return(u(e)<e?d:a(e)<e?p:o(e)<e?v:i(e)<e?g:n(e)<e?r(e)<e?y:_:t(e)<e?b:m)(e)}function N(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(x,a);u===x.length?(o=w(r/qv,i/qv,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(w(r,i,n),1),n=c)}return null==o?n:n.every(o)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(Sh.call(t,Uv)):h().map(Lv)},s.ticks=function(t,n){var e,r=h(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=(e=N(t,i,o,n))?e.range(i,o+1):[],a?e.reverse():e},s.tickFormat=function(t,n){return null==n?M:f(n)},s.nice=function(t,n){var e=h();return(t=N(t,e[0],e[e.length-1],n))?h(jh(e,t)):s},s.copy=function(){return Bh(s,Ov(t,n,r,i,o,a,u,c,f))},s}function Bv(){var t,n,e,r,i,o=0,a=1,u=Dh,c=!1;function f(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,c?Math.max(0,Math.min(1,n)):n))}return f.domain=function(i){return arguments.length?(t=r(o=+i[0]),n=r(a=+i[1]),e=t===n?0:1/(n-t),f):[o,a]},f.clamp=function(t){return arguments.length?(c=!!t,f):c},f.interpolator=function(t){return arguments.length?(u=t,f):u},f.unknown=function(t){return arguments.length?(i=t,f):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),f}}function Yv(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Fv(){var t=id(Bv());return t.copy=function(){return Yv(t,Fv()).exponent(t.exponent())},Ah.apply(t,arguments)}function Iv(){var t,n,e,r,i,o,a,u=0,c=.5,f=1,s=Dh,l=!1;function h(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(t<n?r:i),s(l?Math.max(0,Math.min(1,t)):t))}return h.domain=function(a){return arguments.length?(t=o(u=+a[0]),n=o(c=+a[1]),e=o(f=+a[2]),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h):[u,c,f]},h.clamp=function(t){return arguments.length?(l=!!t,h):l},h.interpolator=function(t){return arguments.length?(s=t,h):s},h.unknown=function(t){return arguments.length?(a=t,h):a},function(a){return o=a,t=a(u),n=a(c),e=a(f),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h}}function Hv(){var t=id(Iv());return t.copy=function(){return Yv(t,Hv()).exponent(t.exponent())},Ah.apply(t,arguments)}function jv(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}var Xv=jv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Gv=jv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Vv=jv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),$v=jv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),Wv=jv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),Zv=jv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),Qv=jv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),Kv=jv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),Jv=jv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),tg=jv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function ng(t){return ve(t[t.length-1])}var eg=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(jv),rg=ng(eg),ig=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(jv),og=ng(ig),ag=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(jv),ug=ng(ag),cg=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(jv),fg=ng(cg),sg=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(jv),lg=ng(sg),hg=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(jv),dg=ng(hg),pg=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(jv),vg=ng(pg),gg=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(jv),yg=ng(gg),_g=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(jv),bg=ng(_g),mg=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(jv),xg=ng(mg),wg=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(jv),Mg=ng(wg),Ng=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(jv),Ag=ng(Ng),Tg=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(jv),Sg=ng(Tg),kg=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(jv),Eg=ng(kg),Cg=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(jv),Pg=ng(Cg),zg=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(jv),Rg=ng(zg),Dg=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(jv),qg=ng(Dg),Lg=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(jv),Ug=ng(Lg),Og=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(jv),Bg=ng(Og),Yg=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(jv),Fg=ng(Yg),Ig=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(jv),Hg=ng(Ig),jg=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(jv),Xg=ng(jg),Gg=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(jv),Vg=ng(Gg),$g=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(jv),Wg=ng($g),Zg=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(jv),Qg=ng(Zg),Kg=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(jv),Jg=ng(Kg),ty=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(jv),ny=ng(ty);var ey=Ze(re(300,.5,0),re(-240,.5,1)),ry=Ze(re(-100,.75,.35),re(80,1.5,.8)),iy=Ze(re(260,.75,.35),re(80,1.5,.8)),oy=re();var ay=bn(),uy=Math.PI/3,cy=2*Math.PI/3;function fy(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}var sy=fy(jv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),ly=fy(jv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),hy=fy(jv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),dy=fy(jv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function py(t){return function(){return t}}var vy=Math.abs,gy=Math.atan2,yy=Math.cos,_y=Math.max,by=Math.min,my=Math.sin,xy=Math.sqrt,wy=1e-12,My=Math.PI,Ny=My/2,Ay=2*My;function Ty(t){return t>=1?Ny:t<=-1?-Ny:Math.asin(t)}function Sy(t){return t.innerRadius}function ky(t){return t.outerRadius}function Ey(t){return t.startAngle}function Cy(t){return t.endAngle}function Py(t){return t&&t.padAngle}function zy(t,n,e,r,i,o,a){var u=t-e,c=n-r,f=(a?o:-o)/xy(u*u+c*c),s=f*c,l=-f*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*xy(_y(0,x*x*m-w*w)),N=(w*b-_*M)/m,A=(-w*_-b*M)/m,T=(w*b+_*M)/m,S=(-w*_+b*M)/m,k=N-g,E=A-y,C=T-g,P=S-y;return k*k+E*E>C*C+P*P&&(N=T,A=S),{cx:N,cy:A,x01:-s,y01:-l,x11:N*(i/x-1),y11:A*(i/x-1)}}function Ry(t){this._context=t}function Dy(t){return new Ry(t)}function qy(t){return t[0]}function Ly(t){return t[1]}function Uy(){var t=qy,n=Ly,e=py(!0),r=null,i=Dy,o=null;function a(a){var u,c,f,s=a.length,l=!1;for(null==r&&(o=i(f=to())),u=0;u<=s;++u)!(u<s&&e(c=a[u],u,a))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(c,u,a),+n(c,u,a));if(f)return o=null,f+""||null}return a.x=function(n){return arguments.length?(t="function"==typeof n?n:py(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:py(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:py(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function Oy(){var t=qy,n=null,e=py(0),r=Ly,i=py(!0),o=null,a=Dy,u=null;function c(c){var f,s,l,h,d,p=c.length,v=!1,g=new Array(p),y=new Array(p);for(null==o&&(u=a(d=to())),f=0;f<=p;++f){if(!(f<p&&i(h=c[f],f,c))===v)if(v=!v)s=f,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=f-1;l>=s;--l)u.point(g[l],y[l]);u.lineEnd(),u.areaEnd()}v&&(g[f]=+t(h,f,c),y[f]=+e(h,f,c),u.point(n?+n(h,f,c):g[f],r?+r(h,f,c):y[f]))}if(d)return u=null,d+""||null}function f(){return Uy().defined(i).curve(a).context(o)}return c.x=function(e){return arguments.length?(t="function"==typeof e?e:py(+e),n=null,c):t},c.x0=function(n){return arguments.length?(t="function"==typeof n?n:py(+n),c):t},c.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:py(+t),c):n},c.y=function(t){return arguments.length?(e="function"==typeof t?t:py(+t),r=null,c):e},c.y0=function(t){return arguments.length?(e="function"==typeof t?t:py(+t),c):e},c.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:py(+t),c):r},c.lineX0=c.lineY0=function(){return f().x(t).y(e)},c.lineY1=function(){return f().x(t).y(r)},c.lineX1=function(){return f().x(n).y(e)},c.defined=function(t){return arguments.length?(i="function"==typeof t?t:py(!!t),c):i},c.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),c):a},c.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),c):o},c}function By(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Yy(t){return t}Ry.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Fy=Hy(Dy);function Iy(t){this._curve=t}function Hy(t){function n(n){return new Iy(t(n))}return n._curve=t,n}function jy(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Hy(t)):n()._curve},t}function Xy(){return jy(Uy().curve(Fy))}function Gy(){var t=Oy().curve(Fy),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return jy(e())},delete t.lineX0,t.lineEndAngle=function(){return jy(r())},delete t.lineX1,t.lineInnerRadius=function(){return jy(i())},delete t.lineY0,t.lineOuterRadius=function(){return jy(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Hy(t)):n()._curve},t}function Vy(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}Iy.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var $y=Array.prototype.slice;function Wy(t){return t.source}function Zy(t){return t.target}function Qy(t){var n=Wy,e=Zy,r=qy,i=Ly,o=null;function a(){var a,u=$y.call(arguments),c=n.apply(this,u),f=e.apply(this,u);if(o||(o=a=to()),t(o,+r.apply(this,(u[0]=c,u)),+i.apply(this,u),+r.apply(this,(u[0]=f,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:py(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:py(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function Ky(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Jy(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function t_(t,n,e,r,i){var o=Vy(n,e),a=Vy(n,e=(e+i)/2),u=Vy(r,e),c=Vy(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],c[0],c[1])}var n_={draw:function(t,n){var e=Math.sqrt(n/My);t.moveTo(e,0),t.arc(0,0,e,0,Ay)}},e_={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},r_=Math.sqrt(1/3),i_=2*r_,o_={draw:function(t,n){var e=Math.sqrt(n/i_),r=e*r_;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},a_=Math.sin(My/10)/Math.sin(7*My/10),u_=Math.sin(Ay/10)*a_,c_=-Math.cos(Ay/10)*a_,f_={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=u_*e,i=c_*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=Ay*o/5,u=Math.cos(a),c=Math.sin(a);t.lineTo(c*e,-u*e),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},s_={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},l_=Math.sqrt(3),h_={draw:function(t,n){var e=-Math.sqrt(n/(3*l_));t.moveTo(0,2*e),t.lineTo(-l_*e,-e),t.lineTo(l_*e,-e),t.closePath()}},d_=Math.sqrt(3)/2,p_=1/Math.sqrt(12),v_=3*(p_/2+1),g_={draw:function(t,n){var e=Math.sqrt(n/v_),r=e/2,i=e*p_,o=r,a=e*p_+e,u=-o,c=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,c),t.lineTo(-.5*r-d_*i,d_*r+-.5*i),t.lineTo(-.5*o-d_*a,d_*o+-.5*a),t.lineTo(-.5*u-d_*c,d_*u+-.5*c),t.lineTo(-.5*r+d_*i,-.5*i-d_*r),t.lineTo(-.5*o+d_*a,-.5*a-d_*o),t.lineTo(-.5*u+d_*c,-.5*c-d_*u),t.closePath()}},y_=[n_,e_,o_,s_,f_,h_,g_];function __(){}function b_(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function m_(t){this._context=t}function x_(t){this._context=t}function w_(t){this._context=t}function M_(t,n){this._basis=new m_(t),this._beta=n}m_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:b_(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:b_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},x_.prototype={areaStart:__,areaEnd:__,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:b_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},w_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:b_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},M_.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*a),this._beta*n[c]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var N_=function t(n){function e(t){return 1===n?new m_(t):new M_(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function A_(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function T_(t,n){this._context=t,this._k=(1-n)/6}T_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:A_(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:A_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var S_=function t(n){function e(t){return new T_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function k_(t,n){this._context=t,this._k=(1-n)/6}k_.prototype={areaStart:__,areaEnd:__,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:A_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var E_=function t(n){function e(t){return new k_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function C_(t,n){this._context=t,this._k=(1-n)/6}C_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:A_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var P_=function t(n){function e(t){return new C_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function z_(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>wy){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>wy){var f=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*f+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*f+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function R_(t,n){this._context=t,this._alpha=n}R_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:z_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var D_=function t(n){function e(t){return n?new R_(t,n):new T_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function q_(t,n){this._context=t,this._alpha=n}q_.prototype={areaStart:__,areaEnd:__,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:z_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var L_=function t(n){function e(t){return n?new q_(t,n):new k_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function U_(t,n){this._context=t,this._alpha=n}U_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:z_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var O_=function t(n){function e(t){return n?new U_(t,n):new C_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function B_(t){this._context=t}function Y_(t){return t<0?-1:1}function F_(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(Y_(o)+Y_(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function I_(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function H_(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function j_(t){this._context=t}function X_(t){this._context=new G_(t)}function G_(t){this._context=t}function V_(t){this._context=t}function $_(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function W_(t,n){this._context=t,this._t=n}function Z_(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function Q_(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function K_(t,n){return t[n]}function J_(t){var n=t.map(tb);return Q_(t).sort(function(t,e){return n[t]-n[e]})}function tb(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e);return r}function nb(t){var n=t.map(eb);return Q_(t).sort(function(t,e){return n[t]-n[e]})}function eb(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function rb(t){return function(){return t}}function ib(t){return t[0]}function ob(t){return t[1]}function ab(){this._=null}function ub(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function cb(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function fb(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function sb(t){for(;t.L;)t=t.L;return t}function lb(t,n,e,r){var i=[null,null],o=qb.push(i)-1;return i.left=t,i.right=n,e&&db(i,t,n,e),r&&db(i,n,t,r),Rb[t.index].halfedges.push(o),Rb[n.index].halfedges.push(o),i}function hb(t,n,e){var r=[n,e];return r.left=t,r}function db(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function pb(t,n,e,r,i){var o,a=t[0],u=t[1],c=a[0],f=a[1],s=0,l=1,h=u[0]-c,d=u[1]-f;if(o=n-c,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=r-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=e-f,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-f,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[c+s*h,f+s*d]),l<1&&(t[1]=[c+l*h,f+l*d]),!0)}}}}}function vb(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,c=t[0],f=t.left,s=t.right,l=f[0],h=f[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=g-(a=(l-d)/(p-h))*v,a<-1||a>1)if(l>d){if(c){if(c[1]>=i)return}else c=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(c){if(c[1]<e)return}else c=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(c){if(c[0]>=r)return}else c=[n,a*n+u];o=[r,a*r+u]}else{if(c){if(c[0]<n)return}else c=[r,a*r+u];o=[n,a*n+u]}return t[0]=c,t[1]=o,!0}function gb(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function yb(t,n){return n[+(n.left!==t.site)]}function _b(t,n){return n[+(n.left===t.site)]}B_.prototype={areaStart:__,areaEnd:__,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},j_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:H_(this,this._t0,I_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,H_(this,I_(this,e=F_(this,t,n)),e);break;default:H_(this,this._t0,e=F_(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(X_.prototype=Object.create(j_.prototype)).point=function(t,n){j_.prototype.point.call(this,n,t)},G_.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},V_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=$_(t),i=$_(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},W_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},ab.prototype={constructor:ab,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=sb(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(cb(this,e),e=(t=e).U),e.C=!1,r.C=!0,fb(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(fb(this,e),e=(t=e).U),e.C=!1,r.C=!0,cb(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?sb(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,cb(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,fb(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,cb(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,fb(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,cb(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,fb(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var bb,mb=[];function xb(){ub(this),this.x=this.y=this.arc=this.site=this.cy=null}function wb(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],c=r[0]-a,f=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(c*l-f*s);if(!(h>=-Ub)){var d=c*c+f*f,p=s*s+l*l,v=(l*d-f*p)/h,g=(c*p-s*d)/h,y=mb.pop()||new xb;y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=Db._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L}else{if(!b.R){_=b;break}b=b.R}Db.insert(_,y),_||(bb=y)}}}}function Mb(t){var n=t.circle;n&&(n.P||(bb=n.N),Db.remove(n),mb.push(n),ub(n),t.circle=null)}var Nb=[];function Ab(){ub(this),this.edge=this.site=this.circle=null}function Tb(t){var n=Nb.pop()||new Ab;return n.site=t,n}function Sb(t){Mb(t),zb.remove(t),Nb.push(t),ub(t)}function kb(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];Sb(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<Lb&&Math.abs(r-c.circle.cy)<Lb;)o=c.P,u.unshift(c),Sb(c),c=o;u.unshift(c),Mb(c);for(var f=a;f.circle&&Math.abs(e-f.circle.x)<Lb&&Math.abs(r-f.circle.cy)<Lb;)a=f.N,u.push(f),Sb(f),f=a;u.push(f),Mb(f);var s,l=u.length;for(s=1;s<l;++s)f=u[s],c=u[s-1],db(f.edge,c.site,f.site,i);c=u[0],(f=u[l-1]).edge=lb(c.site,f.site,null,i),wb(c),wb(f)}function Eb(t){for(var n,e,r,i,o=t[0],a=t[1],u=zb._;u;)if((r=Cb(u,a)-o)>Lb)u=u.L;else{if(!((i=o-Pb(u,a))>Lb)){r>-Lb?(n=u.P,e=u):i>-Lb?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}!function(t){Rb[t.index]={site:t,halfedges:[]}}(t);var c=Tb(t);if(zb.insert(n,c),n||e){if(n===e)return Mb(n),e=Tb(n.site),zb.insert(c,e),c.edge=e.edge=lb(n.site,c.site),wb(n),void wb(e);if(e){Mb(n),Mb(e);var f=n.site,s=f[0],l=f[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];db(e.edge,f,p,m),c.edge=lb(f,t,null,m),e.edge=lb(t,p,null,m),wb(n),wb(e)}else c.edge=lb(n.site,c.site)}}function Cb(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(e=a.site)[0],c=e[1],f=c-n;if(!f)return u;var s=u-r,l=1/o-1/f,h=s/f;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*f)-c+f/2+i-o/2)))/l+r:(r+u)/2}function Pb(t,n){var e=t.N;if(e)return Cb(e,n);var r=t.site;return r[1]===n?r[0]:1/0}var zb,Rb,Db,qb,Lb=1e-6,Ub=1e-12;function Ob(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Bb(t,n){return n[1]-t[1]||n[0]-t[0]}function Yb(t,n){var e,r,i,o=t.sort(Bb).pop();for(qb=[],Rb=new Array(t.length),zb=new ab,Db=new ab;;)if(i=bb,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(Eb(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;kb(i.arc)}if(function(){for(var t,n,e,r,i=0,o=Rb.length;i<o;++i)if((t=Rb[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=gb(t,qb[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],c=+n[1][0],f=+n[1][1];!function(t,n,e,r){for(var i,o=qb.length;o--;)vb(i=qb[o],t,n,e,r)&&pb(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>Lb||Math.abs(i[0][1]-i[1][1])>Lb)||delete qb[o]}(a,u,c,f),function(t,n,e,r){var i,o,a,u,c,f,s,l,h,d,p,v,g=Rb.length,y=!0;for(i=0;i<g;++i)if(o=Rb[i]){for(a=o.site,u=(c=o.halfedges).length;u--;)qb[c[u]]||c.splice(u,1);for(u=0,f=c.length;u<f;)p=(d=_b(o,qb[c[u]]))[0],v=d[1],l=(s=yb(o,qb[c[++u%f]]))[0],h=s[1],(Math.abs(p-l)>Lb||Math.abs(v-h)>Lb)&&(c.splice(u,0,qb.push(hb(a,d,Math.abs(p-t)<Lb&&r-v>Lb?[t,Math.abs(l-t)<Lb?h:r]:Math.abs(v-r)<Lb&&e-p>Lb?[Math.abs(h-r)<Lb?l:e,r]:Math.abs(p-e)<Lb&&v-n>Lb?[e,Math.abs(l-e)<Lb?h:n]:Math.abs(v-n)<Lb&&p-t>Lb?[Math.abs(h-n)<Lb?l:t,n]:null))-1),++f);f&&(y=!1)}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=Rb[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],N=[e,r],A=[e,n];y.halfedges.push(qb.push(hb(a=y.site,w,M))-1,qb.push(hb(a,M,N))-1,qb.push(hb(a,N,A))-1,qb.push(hb(a,A,w))-1)}}for(i=0;i<g;++i)(o=Rb[i])&&(o.halfedges.length||delete Rb[i])}(a,u,c,f)}this.edges=qb,this.cells=Rb,zb=Db=qb=Rb=null}function Fb(t){return function(){return t}}function Ib(t,n,e){this.target=t,this.type=n,this.transform=e}function Hb(t,n,e){this.k=t,this.x=n,this.y=e}Yb.prototype={constructor:Yb,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return yb(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,c=-1,f=n[i[o-1]],s=f.left===u?f.right:f.left;++c<o;)a=s,s=(f=n[i[c]]).left===u?f.right:f.left,a&&s&&r<a.index&&r<s.index&&Ob(u,a,s)<0&&t.push([u.data,a.data,s.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var c=t-i.site[0],f=n-i.site[1],s=c*c+f*f;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],f=n-u[1],l=c*c+f*f;l<s&&(s=l,a=u.index)}})}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},Hb.prototype={constructor:Hb,scale:function(t){return 1===t?this:new Hb(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Hb(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var jb=new Hb(1,0,0);function Xb(t){for(;!t.__zoom;)if(!(t=t.parentNode))return jb;return t.__zoom}function Gb(){t.event.stopImmediatePropagation()}function Vb(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function $b(){return!t.event.ctrlKey&&!t.event.button}function Wb(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function Zb(){return this.__zoom||jb}function Qb(){return-t.event.deltaY*(1===t.event.deltaMode?.05:t.event.deltaMode?1:.002)}function Kb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Jb(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}Xb.prototype=Hb.prototype,t.FormatSpecifier=Ra,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>mr&&e.name===n)return new Lr([[t]],gi,n,+r);return null},t.arc=function(){var t=Sy,n=ky,e=py(0),r=null,i=Ey,o=Cy,a=Py,u=null;function c(){var c,f,s=+t.apply(this,arguments),l=+n.apply(this,arguments),h=i.apply(this,arguments)-Ny,d=o.apply(this,arguments)-Ny,p=vy(d-h),v=d>h;if(u||(u=c=to()),l<s&&(f=l,l=s,s=f),l>wy)if(p>Ay-wy)u.moveTo(l*yy(h),l*my(h)),u.arc(0,0,l,h,d,!v),s>wy&&(u.moveTo(s*yy(d),s*my(d)),u.arc(0,0,s,d,h,v));else{var g,y,_=h,b=d,m=h,x=d,w=p,M=p,N=a.apply(this,arguments)/2,A=N>wy&&(r?+r.apply(this,arguments):xy(s*s+l*l)),T=by(vy(l-s)/2,+e.apply(this,arguments)),S=T,k=T;if(A>wy){var E=Ty(A/s*my(N)),C=Ty(A/l*my(N));(w-=2*E)>wy?(m+=E*=v?1:-1,x-=E):(w=0,m=x=(h+d)/2),(M-=2*C)>wy?(_+=C*=v?1:-1,b-=C):(M=0,_=b=(h+d)/2)}var P=l*yy(_),z=l*my(_),R=s*yy(x),D=s*my(x);if(T>wy){var q,L=l*yy(b),U=l*my(b),O=s*yy(m),B=s*my(m);if(p<My&&(q=function(t,n,e,r,i,o,a,u){var c=e-t,f=r-n,s=a-i,l=u-o,h=l*c-s*f;if(!(h*h<wy))return[t+(h=(s*(n-o)-l*(t-i))/h)*c,n+h*f]}(P,z,O,B,L,U,R,D))){var Y=P-q[0],F=z-q[1],I=L-q[0],H=U-q[1],j=1/my(function(t){return t>1?0:t<-1?My:Math.acos(t)}((Y*I+F*H)/(xy(Y*Y+F*F)*xy(I*I+H*H)))/2),X=xy(q[0]*q[0]+q[1]*q[1]);S=by(T,(s-X)/(j-1)),k=by(T,(l-X)/(j+1))}}M>wy?k>wy?(g=zy(O,B,P,z,l,k,v),y=zy(L,U,R,D,l,k,v),u.moveTo(g.cx+g.x01,g.cy+g.y01),k<T?u.arc(g.cx,g.cy,k,gy(g.y01,g.x01),gy(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,k,gy(g.y01,g.x01),gy(g.y11,g.x11),!v),u.arc(0,0,l,gy(g.cy+g.y11,g.cx+g.x11),gy(y.cy+y.y11,y.cx+y.x11),!v),u.arc(y.cx,y.cy,k,gy(y.y11,y.x11),gy(y.y01,y.x01),!v))):(u.moveTo(P,z),u.arc(0,0,l,_,b,!v)):u.moveTo(P,z),s>wy&&w>wy?S>wy?(g=zy(R,D,L,U,s,-S,v),y=zy(P,z,O,B,s,-S,v),u.lineTo(g.cx+g.x01,g.cy+g.y01),S<T?u.arc(g.cx,g.cy,S,gy(g.y01,g.x01),gy(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,S,gy(g.y01,g.x01),gy(g.y11,g.x11),!v),u.arc(0,0,s,gy(g.cy+g.y11,g.cx+g.x11),gy(y.cy+y.y11,y.cx+y.x11),v),u.arc(y.cx,y.cy,S,gy(y.y11,y.x11),gy(y.y01,y.x01),!v))):u.arc(0,0,s,x,m,v):u.lineTo(R,D)}else u.moveTo(0,0);if(u.closePath(),c)return u=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-My/2;return[yy(r)*e,my(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:py(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:py(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:py(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:py(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:py(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:py(+t),c):o},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:py(+t),c):a},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c},t.area=Oy,t.areaRadial=Gy,t.ascending=n,t.autoType=function(t){for(var n in t){var e,r=t[n].trim();if(r)if("true"===r)r=!0;else if("false"===r)r=!1;else if("NaN"===r)r=NaN;else if(isNaN(e=+r)){if(!/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(r))continue;r=new Date(r)}else r=e;else r=null;t[n]=r}return t},t.axisBottom=function(t){return Y(D,t)},t.axisLeft=function(t){return Y(q,t)},t.axisRight=function(t){return Y(R,t)},t.axisTop=function(t){return Y(z,t)},t.bisect=i,t.bisectLeft=o,t.bisectRight=i,t.bisector=e,t.blob=function(t,n){return fetch(t,n).then(Ko)},t.brush=function(){return Yi(Ei)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.brushX=function(){return Yi(Si)},t.brushY=function(){return Yi(ki)},t.buffer=function(t,n){return fetch(t,n).then(Jo)},t.chord=function(){var t=0,n=null,e=null,r=null;function i(i){var o,a,u,c,f,s,l=i.length,h=[],d=g(l),p=[],v=[],y=v.groups=new Array(l),_=new Array(l*l);for(o=0,f=-1;++f<l;){for(a=0,s=-1;++s<l;)a+=i[f][s];h.push(a),p.push(g(l)),o+=a}for(n&&d.sort(function(t,e){return n(h[t],h[e])}),e&&p.forEach(function(t,n){t.sort(function(t,r){return e(i[n][t],i[n][r])})}),c=(o=Gi(0,Xi-t*l)/o)?t:Xi/l,a=0,f=-1;++f<l;){for(u=a,s=-1;++s<l;){var b=d[f],m=p[b][s],x=i[b][m],w=a,M=a+=x*o;_[m*l+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x}}y[b]={index:b,startAngle:u,endAngle:a,value:h[b]},a+=c}for(f=-1;++f<l;)for(s=f-1;++s<l;){var N=_[s*l+f],A=_[f*l+s];(N.value||A.value)&&v.push(N.value<A.value?{source:A,target:N}:{source:N,target:A})}return r?v.sort(r):v}return i.padAngle=function(n){return arguments.length?(t=Gi(0,n),i):t},i.sortGroups=function(t){return arguments.length?(n=t,i):n},i.sortSubgroups=function(t){return arguments.length?(e=t,i):e},i.sortChords=function(t){return arguments.length?(null==t?r=null:(r=Vi(t))._=t,i):r&&r._},i},t.clientPoint=Ot,t.cluster=function(){var t=bl,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter(function(n){var e=n.children;e?(n.x=function(t){return t.reduce(ml,0)/t.length}(e),n.y=function(t){return 1+t.reduce(xl,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),f=u.x-t(u,c)/2,s=c.x+t(c,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-f)/(s-f)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.color=vn,t.contourDensity=function(){var t=So,n=ko,e=Eo,r=960,i=500,o=20,a=2,u=3*o,c=r+2*u>>a,f=i+2*u>>a,s=_o(20);function l(r){var i=new Float32Array(c*f),l=new Float32Array(c*f);r.forEach(function(r,o,s){var l=+t(r,o,s)+u>>a,h=+n(r,o,s)+u>>a,d=+e(r,o,s);l>=0&&l<c&&h>=0&&h<f&&(i[l+h*c]+=d)}),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),To({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),To({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),To({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a);var d=s(i);if(!Array.isArray(d)){var p=A(i);d=w(0,p,d),(d=g(0,Math.floor(p/d)*d,d)).shift()}return No().thresholds(d).size([c,f])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(v)}function v(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return c=r+2*(u=3*o)>>a,f=i+2*u>>a,l}return l.x=function(n){return arguments.length?(t="function"==typeof n?n:_o(+n),l):t},l.y=function(t){return arguments.length?(n="function"==typeof t?t:_o(+t),l):n},l.weight=function(t){return arguments.length?(e="function"==typeof t?t:_o(+t),l):e},l.size=function(t){if(!arguments.length)return[r,i];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return r=n,i=e,y()},l.cellSize=function(t){if(!arguments.length)return 1<<a;if(!((t=+t)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(t)/Math.LN2),y()},l.thresholds=function(t){return arguments.length?(s="function"==typeof t?t:Array.isArray(t)?_o(go.call(t)):_o(t),l):s},l.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},l},t.contours=No,t.create=function(t){return Rt(Z(t).call(document.documentElement))},t.creator=Z,t.cross=function(t,n,e){var r,i,o,u,c=t.length,f=n.length,s=new Array(c*f);for(null==e&&(e=a),r=o=0;r<c;++r)for(u=t[r],i=0;i<f;++i,++o)s[o]=e(u,n[i]);return s},t.csv=ra,t.csvFormat=Ho,t.csvFormatBody=jo,t.csvFormatRows=Xo,t.csvParse=Fo,t.csvParseRows=Io,t.cubehelix=re,t.curveBasis=function(t){return new m_(t)},t.curveBasisClosed=function(t){return new x_(t)},t.curveBasisOpen=function(t){return new w_(t)},t.curveBundle=N_,t.curveCardinal=S_,t.curveCardinalClosed=E_,t.curveCardinalOpen=P_,t.curveCatmullRom=D_,t.curveCatmullRomClosed=L_,t.curveCatmullRomOpen=O_,t.curveLinear=Dy,t.curveLinearClosed=function(t){return new B_(t)},t.curveMonotoneX=function(t){return new j_(t)},t.curveMonotoneY=function(t){return new X_(t)},t.curveNatural=function(t){return new V_(t)},t.curveStep=function(t){return new W_(t,.5)},t.curveStepAfter=function(t){return new W_(t,1)},t.curveStepBefore=function(t){return new W_(t,0)},t.customEvent=kt,t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=f,t.dispatch=I,t.drag=function(){var n,e,r,i,o=Vt,a=$t,u=Wt,c=Zt,f={},s=I("start","drag","end"),l=0,h=0;function d(t){t.on("mousedown.drag",p).filter(c).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(){if(!i&&o.apply(this,arguments)){var u=m("mouse",a.apply(this,arguments),Bt,this,arguments);u&&(Rt(t.event.view).on("mousemove.drag",v,!0).on("mouseup.drag",g,!0),Ht(t.event.view),Ft(),r=!1,n=t.event.clientX,e=t.event.clientY,u("start"))}}function v(){if(It(),!r){var i=t.event.clientX-n,o=t.event.clientY-e;r=i*i+o*o>h}f.mouse("drag")}function g(){Rt(t.event.view).on("mousemove.drag mouseup.drag",null),jt(t.event.view,r),It(),f.mouse("end")}function y(){if(o.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=a.apply(this,arguments),u=r.length;for(n=0;n<u;++n)(e=m(r[n].identifier,i,Yt,this,arguments))&&(Ft(),e("start"))}}function _(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=f[r[n].identifier])&&(It(),e("drag"))}function b(){var n,e,r=t.event.changedTouches,o=r.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),n=0;n<o;++n)(e=f[r[n].identifier])&&(Ft(),e("end"))}function m(n,e,r,i,o){var a,c,h,p=r(e,n),v=s.copy();if(kt(new Gt(d,"beforestart",a,n,l,p[0],p[1],0,0,v),function(){return null!=(t.event.subject=a=u.apply(i,o))&&(c=a.x-p[0]||0,h=a.y-p[1]||0,!0)}))return function t(u){var s,g=p;switch(u){case"start":f[n]=t,s=l++;break;case"end":delete f[n],--l;case"drag":p=r(e,n),s=l}kt(new Gt(d,u,a,n,s,p[0]+c,p[1]+h,p[0]-g[0],p[1]-g[1],v),v.apply,v,[u,i,o])}}return d.filter=function(t){return arguments.length?(o="function"==typeof t?t:Xt(!!t),d):o},d.container=function(t){return arguments.length?(a="function"==typeof t?t:Xt(t),d):a},d.subject=function(t){return arguments.length?(u="function"==typeof t?t:Xt(t),d):u},d.touchable=function(t){return arguments.length?(c="function"==typeof t?t:Xt(!!t),d):c},d.on=function(){var t=s.on.apply(s,arguments);return t===s?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d},t.dragDisable=Ht,t.dragEnable=jt,t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=Bo(t);return na(n,e).then(function(t){return i.parse(t,r)})},t.dsvFormat=Bo,t.easeBack=fi,t.easeBackIn=ui,t.easeBackInOut=fi,t.easeBackOut=ci,t.easeBounce=ai,t.easeBounceIn=function(t){return 1-ai(1-t)},t.easeBounceInOut=function(t){return((t*=2)<=1?1-ai(1-t):ai(t-1)+1)/2},t.easeBounceOut=ai,t.easeCircle=Wr,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleInOut=Wr,t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCubic=Fr,t.easeCubicIn=function(t){return t*t*t},t.easeCubicInOut=Fr,t.easeCubicOut=function(t){return--t*t*t+1},t.easeElastic=hi,t.easeElasticIn=li,t.easeElasticInOut=di,t.easeElasticOut=hi,t.easeExp=$r,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpInOut=$r,t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeLinear=function(t){return+t},t.easePoly=jr,t.easePolyIn=Ir,t.easePolyInOut=jr,t.easePolyOut=Hr,t.easeQuad=Yr,t.easeQuadIn=function(t){return t*t},t.easeQuadInOut=Yr,t.easeQuadOut=function(t){return t*(2-t)},t.easeSin=Vr,t.easeSinIn=function(t){return 1-Math.cos(t*Gr)},t.easeSinInOut=Vr,t.easeSinOut=function(t){return Math.sin(t*Gr)},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.extent=s,t.forceCenter=function(t,n){var e;function r(){var r,i,o=e.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y;for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r},t.forceCollide=function(t){var n,e,r=1,i=1;function o(){for(var t,o,u,c,f,s,l,h=n.length,d=0;d<i;++d)for(o=ga(n,ma,xa).visitAfter(a),t=0;t<h;++t)u=n[t],s=e[u.index],l=s*s,c=u.x+u.vx,f=u.y+u.vy,o.visit(p);function p(t,n,e,i,o){var a=t.data,h=t.r,d=s+h;if(!a)return n>c+d||i<c-d||e>f+d||o<f-d;if(a.index>u.index){var p=c-a.x-a.vx,v=f-a.y-a.vy,g=p*p+v*v;g<d*d&&(0===p&&(g+=(p=la())*p),0===v&&(g+=(v=la())*v),g=(d-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(d=(h*=h)/(l+h)),u.vy+=(v*=g)*d,a.vx-=p*(d=1-d),a.vy-=v*d)}}}function a(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=sa(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:sa(+n),u(),o):t},o},t.forceLink=function(t){var n,e,r,i,o,a=wa,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},c=sa(30),f=1;function s(r){for(var i=0,a=t.length;i<f;++i)for(var u,c,s,l,h,d,p,v=0;v<a;++v)c=(u=t[v]).source,l=(s=u.target).x+s.vx-c.x-c.vx||la(),h=s.y+s.vy-c.y-c.vy||la(),l*=d=((d=Math.sqrt(l*l+h*h))-e[v])/d*r*n[v],h*=d,s.vx-=l*(p=o[v]),s.vy-=h*p,c.vx+=l*(p=1-p),c.vy+=h*p}function l(){if(r){var u,c,f=r.length,s=t.length,l=uo(r,a);for(u=0,i=new Array(f);u<s;++u)(c=t[u]).index=u,"object"!=typeof c.source&&(c.source=Ma(l,c.source)),"object"!=typeof c.target&&(c.target=Ma(l,c.target)),i[c.source.index]=(i[c.source.index]||0)+1,i[c.target.index]=(i[c.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)c=t[u],o[u]=i[c.source.index]/(i[c.source.index]+i[c.target.index]);n=new Array(s),h(),e=new Array(s),d()}}function h(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),s.initialize=function(t){r=t,l()},s.links=function(n){return arguments.length?(t=n,l(),s):t},s.id=function(t){return arguments.length?(a=t,s):a},s.iterations=function(t){return arguments.length?(f=+t,s):f},s.strength=function(t){return arguments.length?(u="function"==typeof t?t:sa(+t),h(),s):u},s.distance=function(t){return arguments.length?(c="function"==typeof t?t:sa(+t),d(),s):c},s},t.forceManyBody=function(){var t,n,e,r,i=sa(-30),o=1,a=1/0,u=.81;function c(r){var i,o=t.length,a=ga(t,Na,Aa).visitAfter(s);for(e=r,i=0;i<o;++i)n=t[i],a.visit(l)}function f(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function s(t){var n,e,i,o,a,u=0,c=0;if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,i+=e*n.x,o+=e*n.y);t.x=i/c,t.y=o/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function l(t,i,c,f){if(!t.value)return!0;var s=t.x-n.x,l=t.y-n.y,h=f-i,d=s*s+l*l;if(h*h/u<d)return d<a&&(0===s&&(d+=(s=la())*s),0===l&&(d+=(l=la())*l),d<o&&(d=Math.sqrt(o*d)),n.vx+=s*t.value*e/d,n.vy+=l*t.value*e/d),!0;if(!(t.length||d>=a)){(t.data!==n||t.next)&&(0===s&&(d+=(s=la())*s),0===l&&(d+=(l=la())*l),d<o&&(d=Math.sqrt(o*d)));do{t.data!==n&&(h=r[t.data.index]*e/d,n.vx+=s*h,n.vy+=l*h)}while(t=t.next)}}return c.initialize=function(n){t=n,f()},c.strength=function(t){return arguments.length?(i="function"==typeof t?t:sa(+t),f(),c):i},c.distanceMin=function(t){return arguments.length?(o=t*t,c):Math.sqrt(o)},c.distanceMax=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a)},c.theta=function(t){return arguments.length?(u=t*t,c):Math.sqrt(u)},c},t.forceRadial=function(t,n,e){var r,i,o,a=sa(.1);function u(t){for(var a=0,u=r.length;a<u;++a){var c=r[a],f=c.x-n||1e-6,s=c.y-e||1e-6,l=Math.sqrt(f*f+s*s),h=(o[a]-l)*i[a]*t/l;c.vx+=f*h,c.vy+=s*h}}function c(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=sa(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,c()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:sa(+t),c(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:sa(+n),c(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u},t.forceSimulation=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=uo(),c=lr(s),f=I("tick","end");function s(){l(),f.call("tick",n),e<r&&(c.stop(),f.call("end",n))}function l(r){var c,f,s=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,u.each(function(t){t(e)}),c=0;c<s;++c)null==(f=t[c]).fx?f.x+=f.vx*=a:(f.x=f.fx,f.vx=0),null==f.fy?f.y+=f.vy*=a:(f.y=f.fy,f.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=Ta*Math.sqrt(e),o=e*Sa;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return c.restart(s),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,c,f=0,s=t.length;for(null==r?r=1/0:r*=r,f=0;f<s;++f)(a=(i=n-(u=t[f]).x)*i+(o=e-u.y)*o)<r&&(c=u,r=a);return c},on:function(t,e){return arguments.length>1?(f.on(t,e),n):f.on(t)}}},t.forceX=function(t){var n,e,r,i=sa(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=sa(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:sa(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:sa(+n),a(),o):t},o},t.forceY=function(t){var n,e,r,i=sa(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=sa(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:sa(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:sa(+n),a(),o):t},o},t.formatDefaultLocale=Fa,t.formatLocale=Ya,t.formatSpecifier=za,t.geoAlbers=Zs,t.geoAlbersUsa=function(){var t,n,e,r,i,o,a=Zs(),u=Ws().rotate([154,0]).center([-2,58.5]).parallels([55,65]),c=Ws().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,n){o=[t,n]}};function s(t){var n=t[0],a=t[1];return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function l(){return t=n=null,s}return s.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?c:a).invert(t)},s.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),c.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},s.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),c.precision(t),l()):a.precision()},s.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),c.scale(t),s.translate(a.translate())):a.scale()},s.translate=function(t){if(!arguments.length)return a.translate();var n=a.scale(),o=+t[0],s=+t[1];return e=a.translate(t).clipExtent([[o-.455*n,s-.238*n],[o+.455*n,s+.238*n]]).stream(f),r=u.translate([o-.307*n,s+.201*n]).clipExtent([[o-.425*n+Wa,s+.12*n+Wa],[o-.214*n-Wa,s+.234*n-Wa]]).stream(f),i=c.translate([o-.205*n,s+.212*n]).clipExtent([[o-.214*n+Wa,s+.166*n+Wa],[o-.115*n-Wa,s+.234*n-Wa]]).stream(f),l()},s.fitExtent=function(t,n){return Ls(s,t,n)},s.fitSize=function(t,n){return Us(s,t,n)},s.fitWidth=function(t,n){return Os(s,t,n)},s.fitHeight=function(t,n){return Bs(s,t,n)},s.scale(1070)},t.geoArea=function(t){return Pu.reset(),Nu(t,zu),2*Pu},t.geoAzimuthalEqualArea=function(){return Xs(Js).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=Js,t.geoAzimuthalEquidistant=function(){return Xs(tl).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=tl,t.geoBounds=function(t){var n,e,r,i,o,a,u;if(Vu=Gu=-(ju=Xu=1/0),Ku=[],Nu(t,yc),e=Ku.length){for(Ku.sort(Tc),n=1,o=[r=Ku[0]];n<e;++n)Sc(r,(i=Ku[n])[0])||Sc(r,i[1])?(Ac(r[0],i[1])>Ac(r[0],r[1])&&(r[1]=i[1]),Ac(i[0],r[1])>Ac(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=Ac(r[1],i[0]))>a&&(a=u,ju=i[0],Gu=r[1])}return Ku=Ju=null,ju===1/0||Xu===1/0?[[NaN,NaN],[NaN,NaN]]:[[ju,Xu],[Gu,Vu]]},t.geoCentroid=function(t){tc=nc=ec=rc=ic=oc=ac=uc=cc=fc=sc=0,Nu(t,kc);var n=cc,e=fc,r=sc,i=n*n+e*e+r*r;return i<Za&&(n=oc,e=ac,r=uc,nc<Wa&&(n=ec,e=rc,r=ic),(i=n*n+e*e+r*r)<Za)?[NaN,NaN]:[ou(e,n)*nu,gu(r/du(i))*nu]},t.geoCircle=function(){var t,n,e=Bc([0,0]),r=Bc(90),i=Bc(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=nu,e[1]*=nu}};function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*eu,c=i.apply(this,arguments)*eu;return t=[],n=Ic(-a[0]*eu,-a[1]*eu,0).invert,Vc(o,u,c,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:Bc([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:Bc(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:Bc(+t),a):i},a},t.geoClipAntimeridian=uf,t.geoClipCircle=cf,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=lf(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=lf,t.geoConicConformal=function(){return Vs(il).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=il,t.geoConicEqualArea=Ws,t.geoConicEqualAreaRaw=$s,t.geoConicEquidistant=function(){return Vs(al).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=al,t.geoContains=function(t,n){return(t&&Nf.hasOwnProperty(t.type)?Nf[t.type]:Tf)(t,n)},t.geoDistance=Mf,t.geoEqualEarth=function(){return Xs(hl).scale(177.158)},t.geoEqualEarthRaw=hl,t.geoEquirectangular=function(){return Xs(ol).scale(152.63)},t.geoEquirectangularRaw=ol,t.geoGnomonic=function(){return Xs(dl).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=dl,t.geoGraticule=Df,t.geoGraticule10=function(){return Df()()},t.geoIdentity=function(){var t,n,e,r,i,o,a=1,u=0,c=0,f=1,s=1,l=qf,h=null,d=qf;function p(){return r=i=null,o}return o={stream:function(t){return r&&i===t?r:r=l(d(i=t))},postclip:function(r){return arguments.length?(d=r,h=t=n=e=null,p()):d},clipExtent:function(r){return arguments.length?(d=null==r?(h=t=n=e=null,qf):lf(h=+r[0][0],t=+r[0][1],n=+r[1][0],e=+r[1][1]),p()):null==h?null:[[h,t],[n,e]]},scale:function(t){return arguments.length?(l=pl((a=+t)*f,a*s,u,c),p()):a},translate:function(t){return arguments.length?(l=pl(a*f,a*s,u=+t[0],c=+t[1]),p()):[u,c]},reflectX:function(t){return arguments.length?(l=pl(a*(f=t?-1:1),a*s,u,c),p()):f<0},reflectY:function(t){return arguments.length?(l=pl(a*f,a*(s=t?-1:1),u,c),p()):s<0},fitExtent:function(t,n){return Ls(o,t,n)},fitSize:function(t,n){return Us(o,t,n)},fitWidth:function(t,n){return Os(o,t,n)},fitHeight:function(t,n){return Bs(o,t,n)}}},t.geoInterpolate=function(t,n){var e=t[0]*eu,r=t[1]*eu,i=n[0]*eu,o=n[1]*eu,a=au(r),u=lu(r),c=au(o),f=lu(o),s=a*au(e),l=a*lu(e),h=c*au(i),d=c*lu(i),p=2*gu(du(yu(o-r)+a*c*yu(i-e))),v=lu(p),g=p?function(t){var n=lu(t*=p)/v,e=lu(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*f;return[ou(i,r)*nu,ou(o,du(r*r+i*i))*nu]}:function(){return[e*nu,r*nu]};return g.distance=p,g},t.geoLength=mf,t.geoMercator=function(){return el(nl).scale(961/tu)},t.geoMercatorRaw=nl,t.geoNaturalEarth1=function(){return Xs(vl).scale(175.295)},t.geoNaturalEarth1Raw=vl,t.geoOrthographic=function(){return Xs(gl).scale(249.5).clipAngle(90+Wa)},t.geoOrthographicRaw=gl,t.geoPath=function(t,n){var e,r,i=4.5;function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),Nu(t,e(r))),r.result()}return o.area=function(t){return Nu(t,e(If)),If.result()},o.measure=function(t){return Nu(t,e(ks)),ks.result()},o.bounds=function(t){return Nu(t,e(Qf)),Qf.result()},o.centroid=function(t){return Nu(t,e(ls)),ls.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,qf):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new Ps):new xs(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)},t.geoProjection=Xs,t.geoProjectionMutator=Gs,t.geoRotation=Gc,t.geoStereographic=function(){return Xs(yl).scale(250).clipAngle(142)},t.geoStereographicRaw=yl,t.geoStream=Nu,t.geoTransform=function(t){return{stream:Rs(t)}},t.geoTransverseMercator=function(){var t=el(_l),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=_l,t.gray=function(t,n){return new Yn(t,0,0,null==n?1:n)},t.hcl=Gn,t.hierarchy=Ml,t.histogram=function(){var t=v,n=s,e=M;function r(r){var o,a,u=r.length,c=new Array(u);for(o=0;o<u;++o)c[o]=t(r[o],o,r);var f=n(c),s=f[0],l=f[1],h=e(c,s,l);Array.isArray(h)||(h=w(s,l,h),h=g(Math.ceil(s/h)*h,l,h));for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var p,v=new Array(d+1);for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:s,p.x1=o<d?h[o]:l;for(o=0;o<u;++o)s<=(a=c[o])&&a<=l&&v[i(h,a,0,d)].push(r[o]);return v}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:p(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:p([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?p(h.call(t)):p(t),r):e},r},t.hsl=Tn,t.html=ca,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t})},t.interpolate=Ne,t.interpolateArray=ye,t.interpolateBasis=ae,t.interpolateBasisClosed=ue,t.interpolateBlues=Xg,t.interpolateBrBG=rg,t.interpolateBuGn=xg,t.interpolateBuPu=Mg,t.interpolateCividis=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"},t.interpolateCool=iy,t.interpolateCubehelix=We,t.interpolateCubehelixDefault=ey,t.interpolateCubehelixLong=Ze,t.interpolateDate=_e,t.interpolateDiscrete=function(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},t.interpolateGnBu=Ag,t.interpolateGreens=Vg,t.interpolateGreys=Wg,t.interpolateHcl=Ge,t.interpolateHclLong=Ve,t.interpolateHsl=He,t.interpolateHslLong=je,t.interpolateHue=function(t,n){var e=se(+t,+n);return function(t){var n=e(t);return n-360*Math.floor(n/360)}},t.interpolateInferno=hy,t.interpolateLab=function(t,n){var e=he((t=Bn(t)).l,(n=Bn(n)).l),r=he(t.a,n.a),i=he(t.b,n.b),o=he(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateMagma=ly,t.interpolateNumber=be,t.interpolateObject=me,t.interpolateOrRd=Sg,t.interpolateOranges=ny,t.interpolatePRGn=og,t.interpolatePiYG=ug,t.interpolatePlasma=dy,t.interpolatePuBu=Pg,t.interpolatePuBuGn=Eg,t.interpolatePuOr=fg,t.interpolatePuRd=Rg,t.interpolatePurples=Qg,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return oy.h=360*t-100,oy.s=1.5-1.5*n,oy.l=.8-.9*n,oy+""},t.interpolateRdBu=lg,t.interpolateRdGy=dg,t.interpolateRdPu=qg,t.interpolateRdYlBu=vg,t.interpolateRdYlGn=yg,t.interpolateReds=Jg,t.interpolateRgb=de,t.interpolateRgbBasis=ve,t.interpolateRgbBasisClosed=ge,t.interpolateRound=Ae,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,ay.r=255*(n=Math.sin(t))*n,ay.g=255*(n=Math.sin(t+uy))*n,ay.b=255*(n=Math.sin(t+cy))*n,ay+""},t.interpolateSpectral=bg,t.interpolateString=Me,t.interpolateTransformCss=De,t.interpolateTransformSvg=qe,t.interpolateTurbo=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"},t.interpolateViridis=sy,t.interpolateWarm=ry,t.interpolateYlGn=Bg,t.interpolateYlGnBu=Ug,t.interpolateYlOrBr=Fg,t.interpolateYlOrRd=Hg,t.interpolateZoom=Fe,t.interrupt=Cr,t.interval=function(t,n,e){var r=new sr,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?cr():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},t.isoFormat=Sv,t.isoParse=kv,t.json=function(t,n){return fetch(t,n).then(oa)},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.lab=Bn,t.lch=function(t,n,e,r){return 1===arguments.length?Xn(t):new Vn(e,n,t,null==r?1:r)},t.line=Uy,t.lineRadial=Xy,t.linkHorizontal=function(){return Qy(Ky)},t.linkRadial=function(){var t=Qy(t_);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.linkVertical=function(){return Qy(Jy)},t.local=qt,t.map=uo,t.matcher=nt,t.max=A,t.mean=function(t,n){var e,r=t.length,i=r,o=-1,a=0;if(null==n)for(;++o<r;)isNaN(e=u(t[o]))?--i:a+=e;else for(;++o<r;)isNaN(e=u(n(t[o],o,t)))?--i:a+=e;if(i)return a/i},t.median=function(t,e){var r,i=t.length,o=-1,a=[];if(null==e)for(;++o<i;)isNaN(r=u(t[o]))||a.push(r);else for(;++o<i;)isNaN(r=u(e(t[o],o,t)))||a.push(r);return N(a.sort(n),.5)},t.merge=T,t.min=S,t.mouse=Bt,t.namespace=W,t.namespaces=$,t.nest=function(){var t,n,e,r=[],i=[];function o(e,i,a,u){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var c,f,s,l=-1,h=e.length,d=r[i++],p=uo(),v=a();++l<h;)(s=p.get(c=d(f=e[l])+""))?s.push(f):p.set(c,[f]);return p.each(function(t,n){u(v,n,o(t,i,a,u))}),v}return e={object:function(t){return o(t,0,co,fo)},map:function(t){return o(t,0,so,lo)},entries:function(t){return function t(e,o){if(++o>r.length)return e;var a,u=i[o-1];return null!=n&&o>=r.length?a=e.entries():(a=[],e.each(function(n,e){a.push({key:e,values:t(n,o)})})),null!=u?a.sort(function(t,n){return u(t.key,n.key)}):a}(o(t,0,so,lo),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}},t.now=cr,t.pack=function(){var t=null,n=1,e=1,r=jl;function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(Vl(t)).eachAfter($l(r,.5)).eachBefore(Wl(1)):i.eachBefore(Vl(Gl)).eachAfter($l(jl,1)).eachAfter($l(r,i.r/Math.min(n,e))).eachBefore(Wl(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=Il(n),i):t},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:Xl(+t),i):r},i},t.packEnclose=El,t.packSiblings=function(t){return Fl(t),t},t.pairs=function(t,n){null==n&&(n=a);for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return o},t.partition=function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&Ql(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(Zl),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},t.path=to,t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.pie=function(){var t=Yy,n=By,e=null,r=py(0),i=py(Ay),o=py(0);function a(a){var u,c,f,s,l,h=a.length,d=0,p=new Array(h),v=new Array(h),g=+r.apply(this,arguments),y=Math.min(Ay,Math.max(-Ay,i.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,o.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+t(a[u],u,a))>0&&(d+=l);for(null!=n?p.sort(function(t,e){return n(v[t],v[e])}):null!=e&&p.sort(function(t,n){return e(a[t],a[n])}),u=0,f=d?(y-h*b)/d:0;u<h;++u,g=s)c=p[u],s=g+((l=v[c])>0?l*f:0)+b,v[c]={data:a[c],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:py(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:py(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:py(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:py(+t),a):o},a},t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.pointRadial=Vy,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],c=0;++r<i;)n=u,u=t[r],c+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return[o/(c*=3),a/c]},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],c=o[0],f=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=f>u&&a<(c-e)*(u-r)/(f-r)+e&&(s=!s),c=e,f=r;return s},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(vh),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=gh(r),a=gh(i),u=a[0]===o[0],c=a[a.length-1]===o[o.length-1],f=[];for(n=o.length-1;n>=0;--n)f.push(t[r[o[n]][2]]);for(n=+u;n<a.length-c;++n)f.push(t[r[a[n]][2]]);return f},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],c=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],c+=Math.sqrt(n*n+e*e);return c},t.precisionFixed=Ia,t.precisionPrefix=Ha,t.precisionRound=ja,t.quadtree=ga,t.quantile=N,t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.radialArea=Gy,t.radialLine=Xy,t.randomBates=wh,t.randomExponential=Mh,t.randomIrwinHall=xh,t.randomLogNormal=mh,t.randomNormal=bh,t.randomUniform=_h,t.range=g,t.rgb=bn,t.ribbon=function(){var t=no,n=eo,e=ro,r=io,i=oo,o=null;function a(){var a,u=$i.call(arguments),c=t.apply(this,u),f=n.apply(this,u),s=+e.apply(this,(u[0]=c,u)),l=r.apply(this,u)-ji,h=i.apply(this,u)-ji,d=s*Fi(l),p=s*Ii(l),v=+e.apply(this,(u[0]=f,u)),g=r.apply(this,u)-ji,y=i.apply(this,u)-ji;if(o||(o=a=to()),o.moveTo(d,p),o.arc(0,0,s,l,h),l===g&&h===y||(o.quadraticCurveTo(0,0,v*Fi(g),v*Ii(g)),o.arc(0,0,v,g,y)),o.quadraticCurveTo(0,0,d,p),o.closePath(),a)return o=null,a+""||null}return a.radius=function(t){return arguments.length?(e="function"==typeof t?t:Wi(+t),a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Wi(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Wi(+t),a):i},a.source=function(n){return arguments.length?(t=n,a):t},a.target=function(t){return arguments.length?(n=t,a):n},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a},t.scaleBand=Ph,t.scaleDiverging=function t(){var n=Hh(Iv()(Dh));return n.copy=function(){return Yv(n,t())},Ah.apply(n,arguments)},t.scaleDivergingLog=function t(){var n=Qh(Iv()).domain([.1,1,10]);return n.copy=function(){return Yv(n,t()).base(n.base())},Ah.apply(n,arguments)},t.scaleDivergingPow=Hv,t.scaleDivergingSqrt=function(){return Hv.apply(null,arguments).exponent(.5)},t.scaleDivergingSymlog=function t(){var n=td(Iv());return n.copy=function(){return Yv(n,t()).constant(n.constant())},Ah.apply(n,arguments)},t.scaleIdentity=function t(n){var e;function r(t){return isNaN(t=+t)?e:t}return r.invert=r,r.domain=r.range=function(t){return arguments.length?(n=Sh.call(t,zh),r):n.slice()},r.unknown=function(t){return arguments.length?(e=t,r):e},r.copy=function(){return t(n).unknown(e)},n=arguments.length?Sh.call(n,zh):[0,1],Hh(r)},t.scaleImplicit=Eh,t.scaleLinear=function t(){var n=Fh(Dh,Dh);return n.copy=function(){return Bh(n,t())},Nh.apply(n,arguments),Hh(n)},t.scaleLog=function t(){var n=Qh(Yh()).domain([1,10]);return n.copy=function(){return Bh(n,t()).base(n.base())},Nh.apply(n,arguments),n},t.scaleOrdinal=Ch,t.scalePoint=function(){return function t(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return t(e())},n}(Ph.apply(null,arguments).paddingInner(1))},t.scalePow=od,t.scaleQuantile=function t(){var e,r=[],o=[],a=[];function u(){var t=0,n=Math.max(1,o.length);for(a=new Array(n-1);++t<n;)a[t-1]=N(r,t/n);return c}function c(t){return isNaN(t=+t)?e:o[i(a,t)]}return c.invertExtent=function(t){var n=o.indexOf(t);return n<0?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},c.domain=function(t){if(!arguments.length)return r.slice();r=[];for(var e,i=0,o=t.length;i<o;++i)null==(e=t[i])||isNaN(e=+e)||r.push(e);return r.sort(n),u()},c.range=function(t){return arguments.length?(o=kh.call(t),u()):o.slice()},c.unknown=function(t){return arguments.length?(e=t,c):e},c.quantiles=function(){return a.slice()},c.copy=function(){return t().domain(r).range(o).unknown(e)},Nh.apply(c,arguments)},t.scaleQuantize=function t(){var n,e=0,r=1,o=1,a=[.5],u=[0,1];function c(t){return t<=t?u[i(a,t,0,o)]:n}function f(){var t=-1;for(a=new Array(o);++t<o;)a[t]=((t+1)*r-(t-o)*e)/(o+1);return c}return c.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],f()):[e,r]},c.range=function(t){return arguments.length?(o=(u=kh.call(t)).length-1,f()):u.slice()},c.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,a[0]]:n>=o?[a[o-1],r]:[a[n-1],a[n]]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.thresholds=function(){return a.slice()},c.copy=function(){return t().domain([e,r]).range(u).unknown(n)},Nh.apply(Hh(c),arguments)},t.scaleSequential=function t(){var n=Hh(Bv()(Dh));return n.copy=function(){return Yv(n,t())},Ah.apply(n,arguments)},t.scaleSequentialLog=function t(){var n=Qh(Bv()).domain([1,10]);return n.copy=function(){return Yv(n,t()).base(n.base())},Ah.apply(n,arguments)},t.scaleSequentialPow=Fv,t.scaleSequentialQuantile=function t(){var e=[],r=Dh;function o(t){if(!isNaN(t=+t))return r((i(e,t)-1)/(e.length-1))}return o.domain=function(t){if(!arguments.length)return e.slice();e=[];for(var r,i=0,a=t.length;i<a;++i)null==(r=t[i])||isNaN(r=+r)||e.push(r);return e.sort(n),o},o.interpolator=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return t(r).domain(e)},Ah.apply(o,arguments)},t.scaleSequentialSqrt=function(){return Fv.apply(null,arguments).exponent(.5)},t.scaleSequentialSymlog=function t(){var n=td(Bv());return n.copy=function(){return Yv(n,t()).constant(n.constant())},Ah.apply(n,arguments)},t.scaleSqrt=function(){return od.apply(null,arguments).exponent(.5)},t.scaleSymlog=function t(){var n=td(Yh());return n.copy=function(){return Bh(n,t()).constant(n.constant())},Nh.apply(n,arguments)},t.scaleThreshold=function t(){var n,e=[.5],r=[0,1],o=1;function a(t){return t<=t?r[i(e,t,0,o)]:n}return a.domain=function(t){return arguments.length?(e=kh.call(t),o=Math.min(e.length,r.length-1),a):e.slice()},a.range=function(t){return arguments.length?(r=kh.call(t),o=Math.min(e.length,r.length-1),a):r.slice()},a.invertExtent=function(t){var n=r.indexOf(t);return[e[n-1],e[n]]},a.unknown=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return t().domain(e).range(r).unknown(n)},Nh.apply(a,arguments)},t.scaleTime=function(){return Nh.apply(Ov(Od,Ld,wd,bd,yd,vd,dd,fd,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},t.scaleUtc=function(){return Nh.apply(Ov(fp,up,Vd,jd,Id,Yd,dd,fd,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)},t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.schemeAccent=Gv,t.schemeBlues=jg,t.schemeBrBG=eg,t.schemeBuGn=mg,t.schemeBuPu=wg,t.schemeCategory10=Xv,t.schemeDark2=Vv,t.schemeGnBu=Ng,t.schemeGreens=Gg,t.schemeGreys=$g,t.schemeOrRd=Tg,t.schemeOranges=ty,t.schemePRGn=ig,t.schemePaired=$v,t.schemePastel1=Wv,t.schemePastel2=Zv,t.schemePiYG=ag,t.schemePuBu=Cg,t.schemePuBuGn=kg,t.schemePuOr=cg,t.schemePuRd=zg,t.schemePurples=Zg,t.schemeRdBu=sg,t.schemeRdGy=hg,t.schemeRdPu=Dg,t.schemeRdYlBu=pg,t.schemeRdYlGn=gg,t.schemeReds=Kg,t.schemeSet1=Qv,t.schemeSet2=Kv,t.schemeSet3=Jv,t.schemeSpectral=_g,t.schemeTableau10=tg,t.schemeYlGn=Og,t.schemeYlGnBu=Lg,t.schemeYlOrBr=Yg,t.schemeYlOrRd=Ig,t.select=Rt,t.selectAll=function(t){return"string"==typeof t?new Pt([document.querySelectorAll(t)],[document.documentElement]):new Pt([null==t?[]:t],Ct)},t.selection=zt,t.selector=K,t.selectorAll=tt,t.set=vo,t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.stack=function(){var t=py([]),n=Q_,e=Z_,r=K_;function i(i){var o,a,u=t.apply(this,arguments),c=i.length,f=u.length,s=new Array(f);for(o=0;o<f;++o){for(var l,h=u[o],d=s[o]=new Array(c),p=0;p<c;++p)d[p]=l=[0,+r(i[p],h,p,i)],l.data=i[p];d.key=h}for(o=0,a=n(s);o<f;++o)s[a[o]].index=o;return e(s,a),s}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:py($y.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:py(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?Q_:"function"==typeof t?t:py($y.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?Z_:t,i):e},i},t.stackOffsetDiverging=function(t,n){if((u=t.length)>0)for(var e,r,i,o,a,u,c=0,f=t[n[0]].length;c<f;++c)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):r[0]=o},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}Z_(t,n)}},t.stackOffsetNone=Z_,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}Z_(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,c=0,f=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}c+=l,f+=h*l}e[a-1][1]+=e[a-1][0]=o,c&&(o-=f/c)}e[a-1][1]+=e[a-1][0]=o,Z_(t,n)}},t.stackOrderAppearance=J_,t.stackOrderAscending=nb,t.stackOrderDescending=function(t){return nb(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(eb),o=J_(t),a=0,u=0,c=[],f=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],c.push(e)):(u+=i[e],f.push(e));return f.reverse().concat(c)},t.stackOrderNone=Q_,t.stackOrderReverse=function(t){return Q_(t).reverse()},t.stratify=function(){var t=nh,n=eh;function e(e){var r,i,o,a,u,c,f,s=e.length,l=new Array(s),h={};for(i=0;i<s;++i)r=e[i],u=l[i]=new Sl(r),null!=(c=t(r,i,e))&&(c+="")&&(h[f=Kl+(u.id=c)]=f in h?th:u);for(i=0;i<s;++i)if(u=l[i],null!=(c=n(e[i],i,e))&&(c+="")){if(!(a=h[Kl+c]))throw new Error("missing: "+c);if(a===th)throw new Error("ambiguous: "+c);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=Jl,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(Tl),o.parent=null,s>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=Hl(n),e):t},e.parentId=function(t){return arguments.length?(n=Hl(t),e):n},e},t.style=ft,t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.svg=fa,t.symbol=function(){var t=py(n_),n=py(64),e=null;function r(){var r;if(e||(e=r=to()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:py(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:py(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},t.symbolCircle=n_,t.symbolCross=e_,t.symbolDiamond=o_,t.symbolSquare=s_,t.symbolStar=f_,t.symbolTriangle=h_,t.symbolWye=g_,t.symbols=y_,t.text=na,t.thresholdFreedmanDiaconis=function(t,e,r){return t=d.call(t,u).sort(n),Math.ceil((r-e)/(2*(N(t,.75)-N(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*f(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=M,t.tickFormat=Ih,t.tickIncrement=x,t.tickStep=w,t.ticks=m,t.timeDay=bd,t.timeDays=md,t.timeFormatDefaultLocale=Tv,t.timeFormatLocale=pp,t.timeFriday=Sd,t.timeFridays=Dd,t.timeHour=yd,t.timeHours=_d,t.timeInterval=cd,t.timeMillisecond=fd,t.timeMilliseconds=sd,t.timeMinute=vd,t.timeMinutes=gd,t.timeMonday=Md,t.timeMondays=Cd,t.timeMonth=Ld,t.timeMonths=Ud,t.timeSaturday=kd,t.timeSaturdays=qd,t.timeSecond=dd,t.timeSeconds=pd,t.timeSunday=wd,t.timeSundays=Ed,t.timeThursday=Td,t.timeThursdays=Rd,t.timeTuesday=Nd,t.timeTuesdays=Pd,t.timeWednesday=Ad,t.timeWednesdays=zd,t.timeWeek=wd,t.timeWeeks=Ed,t.timeYear=Od,t.timeYears=Bd,t.timeout=gr,t.timer=lr,t.timerFlush=hr,t.touch=Yt,t.touches=function(t,n){null==n&&(n=Ut().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Ot(t,n[e]);return i},t.transition=Ur,t.transpose=k,t.tree=function(){var t=rh,n=1,e=1,r=null;function i(i){var c=function(t){for(var n,e,r,i,o,a=new ch(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new ch(r[i],i)),e.parent=n;return(a.parent=new ch(null,0)).children=[a],a}(i);if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{var f=i,s=i,l=i;i.eachBefore(function(t){t.x<f.x&&(f=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)});var h=f===s?1:t(f,s)/2,d=h-f.x,p=n/(s.x+h+d),v=e/(l.depth||1);i.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v})}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,c=o.parent.children[0],f=o.m,s=a.m,l=u.m,h=c.m;u=oh(u),o=ih(o),u&&o;)c=ih(c),(a=oh(a)).a=n,(i=u.z+l-o.z-f+t(u._,o._))>0&&(ah(uh(u,n,r),n,i),f+=i,s+=i),l+=u.m,f+=o.m,h+=c.m,s+=a.m;u&&!oh(a)&&(a.t=u,a.m+=l-s),o&&!ih(c)&&(c.t=o,c.m+=f-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.treemap=function(){var t=hh,n=!1,e=1,r=1,i=[0],o=jl,a=jl,u=jl,c=jl,f=jl;function s(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(l),i=[0],n&&t.eachBefore(Zl),t}function l(n){var e=i[n.depth],r=n.x0+e,s=n.y0+e,l=n.x1-e,h=n.y1-e;l<r&&(r=l=(r+l)/2),h<s&&(s=h=(s+h)/2),n.x0=r,n.y0=s,n.x1=l,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=f(n)-e,s+=a(n)-e,(l-=u(n)-e)<r&&(r=l=(r+l)/2),(h-=c(n)-e)<s&&(s=h=(s+h)/2),t(n,r,s,l,h))}return s.round=function(t){return arguments.length?(n=!!t,s):n},s.size=function(t){return arguments.length?(e=+t[0],r=+t[1],s):[e,r]},s.tile=function(n){return arguments.length?(t=Hl(n),s):t},s.padding=function(t){return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()},s.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:Xl(+t),s):o},s.paddingOuter=function(t){return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()},s.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:Xl(+t),s):a},s.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:Xl(+t),s):u},s.paddingBottom=function(t){return arguments.length?(c="function"==typeof t?t:Xl(+t),s):c},s.paddingLeft=function(t){return arguments.length?(f="function"==typeof t?t:Xl(+t),s):f},s},t.treemapBinary=function(t,n,e,r,i){var o,a,u=t.children,c=u.length,f=new Array(c+1);for(f[0]=a=o=0;o<c;++o)f[o+1]=a+=u[o].value;!function t(n,e,r,i,o,a,c){if(n>=e-1){var s=u[n];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=c)}for(var l=f[n],h=r/2+l,d=n+1,p=e-1;d<p;){var v=d+p>>>1;f[v]<h?d=v+1:p=v}h-f[d-1]<f[d]-h&&n+1<d&&--d;var g=f[d]-l,y=r-g;if(a-i>c-o){var _=(i*y+a*g)/r;t(n,d,g,i,o,_,c),t(d,e,y,_,o,a,c)}else{var b=(o*y+c*g)/r;t(n,d,g,i,o,a,b),t(d,e,y,i,b,a,c)}}(0,c,t.value,n,e,r,i)},t.treemapDice=Ql,t.treemapResquarify=dh,t.treemapSlice=fh,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?fh:Ql)(t,n,e,r,i)},t.treemapSquarify=hh,t.tsv=ia,t.tsvFormat=Wo,t.tsvFormatBody=Zo,t.tsvFormatRows=Qo,t.tsvParse=Vo,t.tsvParseRows=$o,t.utcDay=jd,t.utcDays=Xd,t.utcFriday=Kd,t.utcFridays=op,t.utcHour=Id,t.utcHours=Hd,t.utcMillisecond=fd,t.utcMilliseconds=sd,t.utcMinute=Yd,t.utcMinutes=Fd,t.utcMonday=$d,t.utcMondays=np,t.utcMonth=up,t.utcMonths=cp,t.utcSaturday=Jd,t.utcSaturdays=ap,t.utcSecond=dd,t.utcSeconds=pd,t.utcSunday=Vd,t.utcSundays=tp,t.utcThursday=Qd,t.utcThursdays=ip,t.utcTuesday=Wd,t.utcTuesdays=ep,t.utcWednesday=Zd,t.utcWednesdays=rp,t.utcWeek=Vd,t.utcWeeks=tp,t.utcYear=fp,t.utcYears=sp,t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.variance=c,t.version="5.12.0",t.voronoi=function(){var t=ib,n=ob,e=null;function r(r){return new Yb(r.map(function(e,i){var o=[Math.round(t(e,i,r)/Lb)*Lb,Math.round(n(e,i,r)/Lb)*Lb];return o.index=i,o.data=e,o}),e)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(n){return arguments.length?(t="function"==typeof n?n:rb(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:rb(+t),r):n},r.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},r.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],r):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},r},t.window=ct,t.xml=ua,t.zip=function(){return k(arguments)},t.zoom=function(){var n,e,r=$b,i=Wb,o=Jb,a=Qb,u=Kb,c=[0,1/0],f=[[-1/0,-1/0],[1/0,1/0]],s=250,l=Fe,h=I("start","zoom","end"),d=500,p=150,v=0;function g(t){t.property("__zoom",Zb).on("wheel.zoom",M).on("mousedown.zoom",N).on("dblclick.zoom",A).filter(u).on("touchstart.zoom",T).on("touchmove.zoom",S).on("touchend.zoom touchcancel.zoom",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function y(t,n){return(n=Math.max(c[0],Math.min(c[1],n)))===t.k?t:new Hb(n,t.x,t.y)}function _(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Hb(t.k,r,i)}function b(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function m(t,n,e){t.on("start.zoom",function(){x(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){x(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,o=x(t,r),a=i.apply(t,r),u=null==e?b(a):"function"==typeof e?e.apply(t,r):e,c=Math.max(a[1][0]-a[0][0],a[1][1]-a[0][1]),f=t.__zoom,s="function"==typeof n?n.apply(t,r):n,h=l(f.invert(u).concat(c/f.k),s.invert(u).concat(c/s.k));return function(t){if(1===t)t=s;else{var n=h(t),e=c/n[2];t=new Hb(e,u[0]-n[0]*e,u[1]-n[1]*e)}o.zoom(null,t)}})}function x(t,n,e){return!e&&t.__zooming||new w(t,n)}function w(t,n){this.that=t,this.args=n,this.active=0,this.extent=i.apply(t,n),this.taps=0}function M(){if(r.apply(this,arguments)){var t=x(this,arguments),n=this.__zoom,e=Math.max(c[0],Math.min(c[1],n.k*Math.pow(2,a.apply(this,arguments)))),i=Bt(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=n.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(n.k===e)return;t.mouse=[i,n.invert(i)],Cr(this),t.start()}Vb(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},p),t.zoom("mouse",o(_(y(n,e),t.mouse[0],t.mouse[1]),t.extent,f))}}function N(){if(!e&&r.apply(this,arguments)){var n=x(this,arguments,!0),i=Rt(t.event.view).on("mousemove.zoom",function(){if(Vb(),!n.moved){var e=t.event.clientX-u,r=t.event.clientY-c;n.moved=e*e+r*r>v}n.zoom("mouse",o(_(n.that.__zoom,n.mouse[0]=Bt(n.that),n.mouse[1]),n.extent,f))},!0).on("mouseup.zoom",function(){i.on("mousemove.zoom mouseup.zoom",null),jt(t.event.view,n.moved),Vb(),n.end()},!0),a=Bt(this),u=t.event.clientX,c=t.event.clientY;Ht(t.event.view),Gb(),n.mouse=[a,this.__zoom.invert(a)],Cr(this),n.start()}}function A(){if(r.apply(this,arguments)){var n=this.__zoom,e=Bt(this),a=n.invert(e),u=n.k*(t.event.shiftKey?.5:2),c=o(_(y(n,u),e,a),i.apply(this,arguments),f);Vb(),s>0?Rt(this).transition().duration(s).call(m,c,e):Rt(this).call(g.transform,c)}}function T(){if(r.apply(this,arguments)){var e,i,o,a,u=t.event.touches,c=u.length,f=x(this,arguments,t.event.changedTouches.length===c);for(Gb(),i=0;i<c;++i)a=[a=Yt(this,u,(o=u[i]).identifier),this.__zoom.invert(a),o.identifier],f.touch0?f.touch1||f.touch0[2]===a[2]||(f.touch1=a,f.taps=0):(f.touch0=a,e=!0,f.taps=1+!!n);n&&(n=clearTimeout(n)),e&&(f.taps<2&&(n=setTimeout(function(){n=null},d)),Cr(this),f.start())}}function S(){if(this.__zooming){var e,r,i,a,u=x(this,arguments),c=t.event.changedTouches,s=c.length;for(Vb(),n&&(n=clearTimeout(n)),u.taps=0,e=0;e<s;++e)i=Yt(this,c,(r=c[e]).identifier),u.touch0&&u.touch0[2]===r.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===r.identifier&&(u.touch1[0]=i);if(r=u.that.__zoom,u.touch1){var l=u.touch0[0],h=u.touch0[1],d=u.touch1[0],p=u.touch1[1],v=(v=d[0]-l[0])*v+(v=d[1]-l[1])*v,g=(g=p[0]-h[0])*g+(g=p[1]-h[1])*g;r=y(r,Math.sqrt(v/g)),i=[(l[0]+d[0])/2,(l[1]+d[1])/2],a=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],a=u.touch0[1]}u.zoom("touch",o(_(r,i,a),u.extent,f))}}function k(){if(this.__zooming){var n,r,i=x(this,arguments),o=t.event.changedTouches,a=o.length;for(Gb(),e&&clearTimeout(e),e=setTimeout(function(){e=null},d),n=0;n<a;++n)r=o[n],i.touch0&&i.touch0[2]===r.identifier?delete i.touch0:i.touch1&&i.touch1[2]===r.identifier&&delete i.touch1;if(i.touch1&&!i.touch0&&(i.touch0=i.touch1,delete i.touch1),i.touch0)i.touch0[1]=this.__zoom.invert(i.touch0[0]);else if(i.end(),2===i.taps){var u=Rt(this).on("dblclick.zoom");u&&u.apply(this,arguments)}}}return g.transform=function(t,n,e){var r=t.selection?t.selection():t;r.property("__zoom",Zb),t!==r?m(t,n,e):r.interrupt().each(function(){x(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},g.scaleBy=function(t,n,e){g.scaleTo(t,function(){var t=this.__zoom.k,e="function"==typeof n?n.apply(this,arguments):n;return t*e},e)},g.scaleTo=function(t,n,e){g.transform(t,function(){var t=i.apply(this,arguments),r=this.__zoom,a=null==e?b(t):"function"==typeof e?e.apply(this,arguments):e,u=r.invert(a),c="function"==typeof n?n.apply(this,arguments):n;return o(_(y(r,c),a,u),t,f)},e)},g.translateBy=function(t,n,e){g.transform(t,function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),f)})},g.translateTo=function(t,n,e,r){g.transform(t,function(){var t=i.apply(this,arguments),a=this.__zoom,u=null==r?b(t):"function"==typeof r?r.apply(this,arguments):r;return o(jb.translate(u[0],u[1]).scale(a.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,f)},r)},w.prototype={start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){kt(new Ib(g,t,this.that.__zoom),h.apply,h,[t,this.that,this.args])}},g.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:Fb(+t),g):a},g.filter=function(t){return arguments.length?(r="function"==typeof t?t:Fb(!!t),g):r},g.touchable=function(t){return arguments.length?(u="function"==typeof t?t:Fb(!!t),g):u},g.extent=function(t){return arguments.length?(i="function"==typeof t?t:Fb([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),g):i},g.scaleExtent=function(t){return arguments.length?(c[0]=+t[0],c[1]=+t[1],g):[c[0],c[1]]},g.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],g):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]},g.constrain=function(t){return arguments.length?(o=t,g):o},g.duration=function(t){return arguments.length?(s=+t,g):s},g.interpolate=function(t){return arguments.length?(l=t,g):l},g.on=function(){var t=h.on.apply(h,arguments);return t===h?g:t},g.clickDistance=function(t){return arguments.length?(v=(t=+t)*t,g):Math.sqrt(v)},g},t.zoomIdentity=jb,t.zoomTransform=Xb,Object.defineProperty(t,"__esModule",{value:!0})});

!function(t,e){"function"==typeof define&&define.amd?define([],function(){return t.Swipe=e(),t.Swipe}):"object"==typeof module&&module.exports?module.exports=e():t.Swipe=e()}(this,function(){var e,W="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,Y=W.document;function Swipe(r,a){"use strict";var s,t,u={},l={},c=(a=a||{}).auto||0,e=!1,n=function(){},v=function(t){setTimeout(t||n,0)},i=function(t){return!!t&&("boolean"!=typeof t.cancelable||t.cancelable)},d={addEventListener:!!W.addEventListener,passiveEvents:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});W.addEventListener("testEvent",null,t),W.removeEventListener("testEvent",null,t)}catch(t){e=!1}return e}(),touch:"ontouchstart"in W||W.DocumentTouch&&Y instanceof DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(Y.createElement("swipe"))};if(r){var f,h,m,p,E=r.children[0],y=parseInt(a.startSlide,10)||0,b=a.speed||300;a.continuous=void 0===a.continuous||a.continuous;var o,g,T,x=(g="direction",(o=r).currentStyle?T=o.currentStyle[g]:W.getComputedStyle&&(T=W.getComputedStyle(o,null).getPropertyValue(g)),"rtl"===T?"right":"left");a.autoRestart=void 0!==a.autoRestart&&a.autoRestart;var L=function(n,i){i=i||100;var o=null;function s(){o&&clearTimeout(o)}function t(){var t=this,e=arguments;s(),o=setTimeout(function(){o=null,n.apply(t,e)},i)}return t.cancel=s,t}(M),w={handleEvent:function(t){if(!e){switch(t.type){case"mousedown":case"touchstart":this.start(t);break;case"mousemove":case"touchmove":this.move(t);break;case"mouseup":case"mouseleave":case"touchend":this.end(t);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":this.transitionEnd(t);break;case"resize":L()}a.stopPropagation&&t.stopPropagation()}},start:function(t){var e;Q(t)?(e=t).preventDefault():e=t.touches[0],u={x:e.pageX,y:e.pageY,time:+new Date},s=void 0,l={},Q(t)?(E.addEventListener("mousemove",this,!1),E.addEventListener("mouseup",this,!1),E.addEventListener("mouseleave",this,!1)):(E.addEventListener("touchmove",this,!!d.passiveEvents&&{passive:!1}),E.addEventListener("touchend",this,!1))},move:function(t){var e;if(Q(t))e=t;else{if(1<t.touches.length||t.scale&&1!==t.scale)return;a.disableScroll&&i(t)&&t.preventDefault(),e=t.touches[0]}l={x:e.pageX-u.x,y:e.pageY-u.y},void 0===s&&(s=!!(s||Math.abs(l.x)<Math.abs(l.y))),s||(i(t)&&t.preventDefault(),N(),a.continuous?(C(j(y-1),l.x+h[j(y-1)],0),C(y,l.x+h[y],0),C(j(y+1),l.x+h[j(y+1)],0)):(l.x=l.x/(!y&&0<l.x||y===f.length-1&&l.x<0?Math.abs(l.x)/m+1:1),C(y-1,l.x+h[y-1],0),C(y,l.x+h[y],0),C(y+1,l.x+h[y+1],0)))},end:function(t){var e=+new Date-u.time,n=Number(e)<250&&20<Math.abs(l.x)||Math.abs(l.x)>m/2,i=!y&&0<l.x||y===f.length-1&&l.x<0;a.continuous&&(i=!1);var o=Math.abs(l.x)/l.x;s||(n&&!i?(y=o<0?(a.continuous?(R(j(y-1),-m,0),R(j(y+2),m,0)):R(y-1,-m,0),R(y,h[y]-m,b),R(j(y+1),h[j(y+1)]-m,b),j(y+1)):(a.continuous?(R(j(y+1),m,0),R(j(y-2),-m,0)):R(y+1,m,0),R(y,h[y]+m,b),R(j(y-1),h[j(y-1)]+m,b),j(y-1)),z(O(),f[y],o)):a.continuous?(R(j(y-1),-m,b),R(y,0,b),R(j(y+1),m,b)):(R(y-1,-m,b),R(y,0,b),R(y+1,m,b))),Q(t)?(E.removeEventListener("mousemove",w,!1),E.removeEventListener("mouseup",w,!1),E.removeEventListener("mouseleave",w,!1)):(E.removeEventListener("touchmove",w,!!d.passiveEvents&&{passive:!1}),E.removeEventListener("touchend",w,!1))},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)===y&&((c||a.autoRestart)&&X(),A(O(),f[y]))}};return M(),I(),{setup:M,slide:function(t,e){N(),P(t,e)},prev:function(){N(),function(){if(e)return;a.continuous?P(y-1):y&&P(y-1)}()},next:function(){N(),S()},restart:X,stop:N,getPos:O,disable:function(){N(),e=!0},enable:function(){e=!1,X()},getNumSlides:function(){return p},kill:function(){N(),r.style.visibility="",E.style.width="",E.style[x]="";var t=f.length;for(;t--;){d.transitions&&C(t,0,0);var e=f[t];if(e.getAttribute("data-cloned")){var n=e.parentElement;n.removeChild(e)}e.style.width="",e.style[x]="",e.style.webkitTransitionDuration=e.style.MozTransitionDuration=e.style.msTransitionDuration=e.style.OTransitionDuration=e.style.transitionDuration="",e.style.webkitTransform=e.style.msTransform=e.style.MozTransform=e.style.OTransform=""}D(),L.cancel()}}}function D(){d.addEventListener?(E.removeEventListener("touchstart",w,!!d.passiveEvents&&{passive:!0}),E.removeEventListener("mousedown",w,!1),E.removeEventListener("webkitTransitionEnd",w,!1),E.removeEventListener("msTransitionEnd",w,!1),E.removeEventListener("oTransitionEnd",w,!1),E.removeEventListener("otransitionend",w,!1),E.removeEventListener("transitionend",w,!1),W.removeEventListener("resize",w,!1)):W.onresize=null}function k(t){var e=t.cloneNode(!0);E.appendChild(e),e.setAttribute("data-cloned",!0),e.removeAttribute("id")}function M(t){if(null!=t)for(var e in t)a[e]=t[e];f=E.children,p=f.length;for(var n=0;n<f.length;n++)f[n].getAttribute("data-cloned")&&p--;if(f.length<2&&(a.continuous=!1),d.transitions&&a.continuous&&f.length<3&&(k(f[0]),k(f[1]),f=E.children),"right"===x)for(var i=0;i<f.length;i++)f[i].style.float="right";h=new Array(f.length),m=r.getBoundingClientRect().width||r.offsetWidth,E.style.width=f.length*m*2+"px";for(var o=f.length;o--;){var s=f[o];s.style.width=m+"px",s.setAttribute("data-index",o),d.transitions&&(s.style[x]=o*-m+"px",R(o,o<y?-m:y<o?m:0,0))}a.continuous&&d.transitions&&(R(j(y-1),-m,0),R(j(y+1),m,0)),d.transitions||(E.style[x]=y*-m+"px"),r.style.visibility="visible",D(),d.addEventListener?(d.touch&&E.addEventListener("touchstart",w,!!d.passiveEvents&&{passive:!0}),a.draggable&&E.addEventListener("mousedown",w,!1),d.transitions&&(E.addEventListener("webkitTransitionEnd",w,!1),E.addEventListener("msTransitionEnd",w,!1),E.addEventListener("oTransitionEnd",w,!1),E.addEventListener("otransitionend",w,!1),E.addEventListener("transitionend",w,!1)),W.addEventListener("resize",w,!1)):W.onresize=L}function S(){e||(a.continuous?P(y+1):y<f.length-1&&P(y+1))}function z(t,e,n){a.callback&&a.callback(t,e,n)}function A(t,e){a.transitionEnd&&a.transitionEnd(t,e)}function j(t){return(f.length+t%f.length)%f.length}function O(){var t=y;return p<=t&&(t-=p),t}function P(t,e){if(t="number"!=typeof t?parseInt(t,10):t,y!==t){if(d.transitions){var n=Math.abs(y-t)/(y-t);if(a.continuous){var i=n;(n=-h[j(t)]/m)!==i&&(t=-n*f.length+t)}for(var o=Math.abs(y-t)-1;o--;)R(j((y<t?t:y)-o-1),m*n,0);t=j(t),R(y,m*n,e||b),R(t,0,e||b),a.continuous&&R(j(t-n),-m*n,0)}else t=j(t),function(e,n,i){if(!i)return E.style[x]=n+"px";var o=+new Date,s=setInterval(function(){var t=+new Date-o;if(i<t)return E.style[x]=n+"px",(c||a.autoRestart)&&X(),A(O(),f[y]),void clearInterval(s);E.style[x]=(n-e)*(Math.floor(t/i*100)/100)+e+"px"},4)}(y*-m,t*-m,e||b);y=t,v(function(){z(O(),f[y],n)})}}function R(t,e,n){C(t,e,n),h[t]=e}function C(t,e,n){var i=f[t],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=n+"ms",o.webkitTransform=o.msTransform=o.MozTransform=o.OTransform=o.transform="translateX("+e+"px)")}function I(){(c=a.auto||0)&&(t=setTimeout(S,c))}function N(){c=0,clearTimeout(t)}function X(){N(),I()}function Q(t){return/^mouse/.test(t.type)}}return(W.jQuery||W.Zepto)&&((e=W.jQuery||W.Zepto).fn.Swipe=function(t){return this.each(function(){e(this).data("Swipe",new Swipe(e(this)[0],t))})}),Swipe});