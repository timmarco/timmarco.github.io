function ModelControls(options) {
  const controls = this;
  init(options);
  return controls;

  function init(options) {
    controls.parent = options.parent;
    controls.layout = controls.defineLayout();
    controls.svg = controls.addSvg();
    controls.zoom = controls.addZoom();
  }
}

function ModelDescription(options) {
  const description = this;
  init(options);
  return description;

  function init(options) {
    description.layout = description.defineLayout();

    description.svg = description.addSvg();

  }
}

function ModelDescriptionHeadline(options) {
  const headline = this;
  init(options);
  return headline;

  function init(options) {
    headline.parent = options.parent;
    headline.textString = options.model.name.join(" ");
    headline.coordinates = {"x":0,"y":0,"yStart":headline.parent.layout.size.height};

    headline.group = headline.addGroup();
    headline.rect = headline.addRect();
    headline.text = headline.addText();
    headline.resizeRect();
  }
}

function ModelDescriptionBody(options) {
  const body = this;
  init(options);
  return body;

  function init(options) {
    body.parent = options.parent;
    body.text = options.model.description;

    body.foreignObject = body.addForeignObject();
    body.htmlBody = body.addHtmlBody();
    body.div = body.addDiv();

  }
}

function ModelThumbnail(options) {
  const thumbnail = this;
  init(options);
  return thumbnail;

  function init(options) {
    thumbnail.headlineText = options.name;
    thumbnail.parent = options.parent;
    thumbnail.imagePath = options.imagePath;
    thumbnail.gltfPath = options.gltfPath;
    thumbnail.name = options.name;
    thumbnail.description = options.description;
    thumbnail.cameraPosition = options.cameraPosition;
    thumbnail.cameraRotation = options.cameraRotation;

    thumbnail.isActive = false;

    thumbnail.layout = thumbnail.defineLayout();
    thumbnail.style = thumbnail.defineStyle();

    thumbnail.svg = thumbnail.addSvg();
    thumbnail.layers = thumbnail.addLayers();
    thumbnail.headlines = thumbnail.addHeadline();
    thumbnail.image = thumbnail.addImage();

    thumbnail.layoutHeadline();
    thumbnail.scaleImage();



  }
}

function ModelViewer(options) {
  const viewer = this;
  init(options);
  return viewer;

  function init(options) {
    viewer.hasTransitionedIn = false;
    viewer.hasDragged = false;
    viewer.modelThumbnails = viewer.addModelThumbnails();
    viewer.threeContainer = viewer.addThreeContainer();
    viewer.description = viewer.addDescription();
    viewer.dragCallout = viewer.addDragCallout();
    viewer.currentModelPath =  "";
  }
}

function ThreeContainer(options) {
  const container = this;
  init(options);
  return container;

  function init(options) {
    container.parent = options.parent;
    container.constants = container.defineConstants();
    container.layout = container.defineLayout();
    container.loader = container.defineGltfLoader();

    container.scene = container.addScene();
    container.camera = container.addCamera();
    container.renderer = container.addRenderer();
    container.lights = container.addLights();
    container.empty = container.addEmpty();
    container.orbitControls = container.addOrbitControls();

    container.currentObject;

    container
      .update();

  }
}

ModelControls.prototype.defineLayout = function() {
  const controls = this;

  const layout = {};
  layout.size = {};
  layout.size.width = d3.select("#rightPane").node().getBoundingClientRect().width;
  layout.size.height = layout.size.width * 0.13125;

  return layout;
}

ModelControls.prototype.addSvg = function() {
  const controls = this;

  const svg = d3.select("#rightPane")
    .append("svg")
    .attr("width",controls.layout.size.width)
    .attr("height",controls.layout.size.height)
    .style("position","absolute")
    .style("left",0)
    .style("bottom",0)
    .style("background-color","red")
    .style("z-index",2);

  return svg;
}

ModelControls.prototype.addZoom = function() {
  const controls = this;

  const zoom = new ModelControlSlider({
    "parent":controls,
    "size":{
      "width":500,
      "height":50
    },
    "callback":function(value) {
      controls.parent.threeContainer
        .zoom(value);
    }
  });

  return zoom;
}

ModelDescription.prototype.defineLayout = function() {
  const description = this;
  const layout = {};

  layout.size = {};
  layout.size.width = d3.select("#rightPane").node().getBoundingClientRect().width;
  layout.size.height = layout.size.width * 0.13125;

  layout.safeAreas = {};

  layout.safeAreas.title = {};
  layout.safeAreas.title.x = 0;
  layout.safeAreas.title.y = layout.size.height / 6;
  layout.safeAreas.title.width = layout.size.width / 3;
  layout.safeAreas.title.height = layout.size.height * 2 / 3;

  layout.safeAreas.text = {};
  layout.safeAreas.text.x = layout.size.width / 3;
  layout.safeAreas.text.y = 0;
  layout.safeAreas.text.width = layout.size.width * 2 / 3;
  layout.safeAreas.text.height = layout.size.height;


  return layout;
}

ModelDescription.prototype.addSvg = function() {
  const description = this;

  const svg = d3.select("#rightPane")
    .append("svg")
    .attr("width",description.layout.size.width)
    .attr("height",description.layout.size.height)
    .style("position","absolute")
    .style("left",0)
    .style("top",0)
    .style("z-index",2);

  return svg;
}

ModelDescriptionHeadline.prototype.addGroup = function() {
  const headline = this;

  const group = headline.parent.svg
    .append("g")
    .attr("opacity",0)
    .attr("transform","translate(0,"+headline.parent.layout.size.height+")");

  return group;
}

ModelDescriptionHeadline.prototype.addRect = function() {
  const headline = this;

  const rect = headline.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("fill","black");

  return rect;
}

ModelDescriptionHeadline.prototype.addText = function() {
  const headline = this;

  const text = headline.group
    .append("text")
    .attr("font-size","2em")
    .attr("font-family","Oswald")
    .attr("font-weight",500)
    .attr("fill","white")
    .attr("text-anchor","start")
    .attr("dominant-baseline","hanging")
    .text(headline.textString);

  return text;
}

ModelDescriptionHeadline.prototype.resizeRect = function() {
  const headline = this;

  const textSize = headline.text.node().getBBox();

  headline.rect
    .attr("width",textSize.width + 20)
    .attr("height",textSize.height + 5);

  headline.text
    .attr("x",10)
    .attr("y",8);

  headline.coordinates.x = headline.parent.layout.safeAreas.title.width - textSize.width - 25;
  headline.group
    .attr("transform","translate("+headline.coordinates.x+","+headline.coordinates.yStart+")");

}

ModelDescription.prototype.updateModel = function(model) {
  const description = this;

  description.svg
    .selectAll("*")
    .remove();

  const body = new ModelDescriptionBody({
    "parent":description,
    "model":model
  });

  const headline = new ModelDescriptionHeadline({
    "parent":description,
    "model":model
  });

  body
    .transitionIn();

  headline
    .transitionIn();
}

ModelDescriptionBody.prototype.addDiv = function() {
  const body = this;
  const div = body.htmlBody
    .append("div")
    .style("padding-left","0.5em")
    .style("padding-right","0.5em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("border-left","1px solid orange")
    .html(body.text);

  return div;
}

ModelDescriptionBody.prototype.addForeignObject = function() {
  const body = this;

  const foreignObject = body.parent.svg
    .append("foreignObject")
    .attr("x",body.parent.layout.safeAreas.text.x)
    .attr("y",body.parent.layout.safeAreas.text.y + body.parent.layout.size.height)
    .attr("width",body.parent.layout.safeAreas.text.width)
    .attr("height",body.parent.layout.safeAreas.text.height)
    .attr("opacity",0);

  return foreignObject;
}

ModelDescriptionBody.prototype.addHtmlBody = function() {
  const body = this;
  const htmlBody = body.foreignObject
    .append("xhtml:body")
    .append("xhtml:body")
    .style("width","100%")
    .style("height","100%")
    .style("margin",0)
    .style("padding",0);

  return htmlBody;
}

ModelDescriptionHeadline.prototype.transitionIn = function(duration = 300, delay = 0, ease = d3.easeLinear) {
  const headline = this;

  headline.group
    .transition()
    .duration(duration)
    .delay(delay)
    .ease(ease)
    .attr("opacity",1)
    .attr("transform","translate("+headline.coordinates.x+","+headline.coordinates.y+")");

}

ModelDescriptionBody.prototype.transitionIn = function(duration = 300, delay = 200, ease = d3.easeLinear) {
  const description = this;

  description.foreignObject
    .transition()
    .duration(duration)
    .delay(delay)
    .ease(ease)
    .attr("y",description.parent.layout.safeAreas.text.y)
    .attr("opacity",1);
}

ModelThumbnail.prototype.activate = function() {
  const thumbnail = this;

  thumbnail.isActive = true;

  thumbnail.layers.headlineScale
    .transition()
    .duration(125)
    .attr("transform","scale(1.15)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(125)
    .attr("fill",thumbnail.style.activeColor);


  return thumbnail;
}

ModelThumbnail.prototype.deactivate = function() {
  const thumbnail = this;

  thumbnail.isActive = false;
  
  thumbnail.layers.headlineScale
    .transition()
    .duration(75)
    .attr("transform","scale(1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(75)
    .attr("fill",thumbnail.style.baseColor);

  return thumbnail;
}

ModelThumbnail.prototype.highlight = function() {
  const thumbnail = this;

  if(thumbnail.isActive)  { return }

  thumbnail.layers.headlineScale
    .transition()
    .duration(125)
    .attr("transform","scale(1.1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(125)
    .attr("fill",thumbnail.style.highlightColor);

  return thumbnail;
}

ModelThumbnail.prototype.unhighlight = function() {
  const thumbnail = this;

  if(thumbnail.isActive)  { return }

  thumbnail.layers.headlineScale
    .transition()
    .duration(75)
    .attr("transform","scale(1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(75)
    .attr("fill",thumbnail.style.baseColor);

  return thumbnail;
}

ModelThumbnail.prototype.defineLayout = function() {
  const thumbnail = this;
  const layout = {};

  const containerWidth = d3.select("#leftPane").node().getBoundingClientRect().width;

  layout.size = {};
  layout.size.width = containerWidth * 0.85;
  layout.size.height = containerWidth * 0.5625;

  layout.padding = {};
  layout.padding.left = layout.size.width / 12;
  layout.padding.top = layout.size.height / 12;


  return layout;
}

ModelThumbnail.prototype.defineStyle = function() {
    const thumbnail = this;
    const style = {};

    style.baseColor = "black";
    style.highlightColor = "#984BA3";
    style.activeColor = "#FE8000";

    return style;
}

ModelThumbnail.prototype.addHeadline = function() {
  const thumbnail = this;

  const headlines = [];

  thumbnail.headlineText.forEach((line) => {
    const group = thumbnail.layers.headlineOffset
      .append("g");
    const rect = thumbnail.addHeadlineRect(group);
    const text = thumbnail.addHeadlineText(group,line);
    const textSize = text.node().getBBox();

    rect
      .attr("width",textSize.width + 10)
      .attr("height",textSize.height + 2);

    text
      .attr("x",5)
      .attr("y",textSize.height / 2 + 2);

    headlines
      .push(group);
  });

  return headlines;
}

ModelThumbnail.prototype.addHeadlineRect = function(where) {
  const thumbnail = this;

  const rect = where
    .append("rect")
    .attr("fill",thumbnail.style.baseColor)
    .attr("x",0)
    .attr("y",0);

  return rect;
}

ModelThumbnail.prototype.addHeadlineText = function(where,text) {
  const thumbnail = this;

  const headline = where
    .append("text")
    .attr("fill","white")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","1em")
    .attr("font-family","Oswald")
    .attr("font-weight",500)
    .text(text);

  return headline;
}

ModelThumbnail.prototype.addImage = function() {
  const thumbnail = this;

  const image = thumbnail.layers.background
    .append("image")
    .attr("x",0)
    .attr("y",0)
    .attr("width",1920)
    .attr("height",1080)
    .attr("href",thumbnail.imagePath);
    
  return image;
}

ModelThumbnail.prototype.addLayers = function() {
  const thumbnail = this;

  const layers = {};
  layers.background = addSingleLayer(thumbnail.svg);

  layers.headlineScale = addSingleLayer(thumbnail.svg)
    .attr("transform","scale(1)");
  layers.headlineOffset = addSingleLayer(layers.headlineScale);
  layers.headline = addSingleLayer(layers.headlineOffset);


  return layers;

  function addSingleLayer(where) {
    return where
      .append("g")
      .attr("transform","translate(0,0)");
  }
}

ModelThumbnail.prototype.addSingleHeadline = function(text) {
  const thumbnail = this;



  return thumbnail;
}

ModelThumbnail.prototype.addSvg = function() {
  const thumbnail = this;

  const svg = d3.select("#leftPane")
    .append("svg")
    .attr("width",thumbnail.layout.size.width)
    .attr("height",thumbnail.layout.size.height)
    .attr("cursor","pointer")
    .on('mouseover',function() { thumbnail.highlight(); })
    .on('mouseout',function() { thumbnail.unhighlight(); })
    .on('click',function() { thumbnail.parent.selectModel(thumbnail); });

  return svg;
}

ModelThumbnail.prototype.layoutHeadline = function() {
  const thumbnail = this;

  let runningY = 0;
  thumbnail.headlines.forEach((group,index) => {
    const groupHeight = group.node().getBBox().height;

    group
      .attr("transform","translate(0,"+runningY+")");

    runningY += groupHeight;
  });


  thumbnail.layers.headlineOffset
    .attr("transform","translate("+thumbnail.layout.padding.left+","+thumbnail.layout.padding.top+")");

  return thumbnail;
}

ModelThumbnail.prototype.scaleImage = function() {
  const thumbnail = this;

  const imageScale = thumbnail.layout.size.width / 1920;

  thumbnail.layers.background
    .attr("transform","scale("+imageScale+")");

}

ModelViewer.prototype.addDescription = function() {
  const viewer = this;
  const description = new ModelDescription({});
  return description;
}

ModelViewer.prototype.addDragCallout = function() {
  const viewer = this;

  const callout = d3.select("#rightPane")
    .append("div")
    .style("width","100%")
    .style("height","5vh")
    .style("z-index",10)
    .style("position","absolute")
    .style("text-align","center")
    .style("bottom","-5vh");

  callout
    .append("div")
    .style("font-size","2em")
    .style("font-weight",500)
    .style("font-family","Oswald")
    .style("padding-left","1em")
    .style("padding-right","1em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("display","inline-block")
    .style("color","white")
    .style("background-color","#E31A1C")
    .html("CLICK AND DRAG TO ROTATE MODEL");

  return callout;
}

ModelViewer.prototype.addModelThumbnails = function() {
  const viewer = this;
  const thumbnails = [];

  thumbnails.push(new ModelThumbnail({
    "name":["ARDUINO","UNO"],
    "imagePath":"assets/thumbnails/arduino.jpg",
    "gltfPath":"assets/models/arduino.glb",
    "description":"A model of an Arduino Uno I created as part of a concept educational / training video. (1.87 MB)",
    "zoomRange":[0.129,0.439],
    "parent":viewer,
    "cameraPosition": {"x":0.01639015604046701,"y":0.06397744724113906,"z":0.03156335389506952},
    "cameraRotation":{"_x":-1.1124818467243944,"_y":0.22582893667430384,"_z":0.4260625036015186,"_order":"XYZ"}
  }));

  thumbnails.push(new ModelThumbnail({
    "name":["LAPTOP"],
    "imagePath":"assets/thumbnails/macbook.jpg",
    "gltfPath":"assets/models/macbook.glb",
    "description":"Model of my laptop created as part of the Arduino concept video (5.1 MB)",
    "zoomRange":[0.163,0.615],
    "parent":viewer,
    "cameraPosition": {"x":0.21586677917771854,"y":0.2405939950613473,"z":0.3997024560195606},
    "cameraRotation":{"_x":-0.541839421895039,"_y":0.43337320332920504,"_z":0.24758623209789848,"_order":"XYZ"}
  }));

  thumbnails.push(new ModelThumbnail({
    "name":["BREADBOARD"],
    "imagePath":"assets/thumbnails/breadboard.jpg",
    "gltfPath":"assets/models/breadboard.glb",
    "description":"A model of a breadboard created as part of the Arduino concept video (670 KB)",
    "zoomRange":[0.425,0.743],
    "parent":viewer,
    "cameraPosition": {"x":0.055705185806565374,"y":0.06482411441691625,"z":0.04054131795213848},
    "cameraRotation":{"_x":-1.0119059097312968,"_y":0.6296482969356019,"_z":0.7553113939983719,"_order":"XYZ"}
  }));

  thumbnails.push(new ModelThumbnail({
    "name":["CUTTING","MAT"],
    "imagePath":"assets/thumbnails/cuttingMat.jpg",
    "gltfPath":"assets/models/cuttingMat.glb",
    "description":"A craft cutting mat created as part of the Arduino concept video (1.5MB).",
    "zoomRange":[0.425,0.743],
    "parent":viewer,
    "cameraPosition":{"x":0.5758353069773661,"y":0.6837329475655082,"z":-0.007575375650116761},
    "cameraRotation":{"_x":-1.2507823720052051,"_y":0.09144619349122028,"_z":0.2688779657517847,"_order":"XYZ"}
  }));

  return thumbnails;
}

ModelViewer.prototype.addThreeContainer = function() {
  const viewer = this;
  const container = new ThreeContainer({"parent":viewer});
  return container;
}

ThreeContainer.prototype.defineConstants = function() {
  const container = this;
  const constants = {};

  // Dev / Prod Mode
  constants.IS_LOGGER_ENABLED = true;

  // Camera Setup
  constants.ASPECT_RATIO = constants.WIDTH / constants.HEIGHT;
  constants.CAMERA_START_X = 10;
  constants.CAMERA_START_Y = 1.5;
  constants.CAMERA_START_Z = -5;
  constants.NEAR = 0.001;
  constants.VIEW_ANGLE = 45;

  // Lighting and Views
  constants.PHYSICALLY_CORRECT_LIGHTS = true;
  constants.GAMMA_FACTOR = 2.2;
  constants.GAMMA_OUTPUT = true;
  constants.EXPOSURE = 1;
  constants.AMBIENT_LIGHT_INTENSITY = 1;
  constants.AMBIENT_LIGHT_COLOR = 0xffffff
  constants.DIRECT_LIGHT_INTENSITY = 1;
  constants.DIRECT_LIGHT_COLOR = 0xffffff;


  return constants;
}

ThreeContainer.prototype.defineGltfLoader = function() {
  const container = this;
  const loader = new THREE.GLTFLoader();
  return loader;
}

ThreeContainer.prototype.defineLayout = function() {
  const viewer = this;
  const layout = {};

  const containerSize = d3.select("#threeContainer").node().getBoundingClientRect();
  layout.size = {};
  layout.size.width = containerSize.width;
  layout.size.height = containerSize.height;

  layout.aspectRatio = layout.size.width / layout.size.height;


  return layout;
}

ModelViewer.prototype.hideDragCallout = function() {
  const viewer = this;
  viewer.hasDragged = true;

  console.log("HIDE DRAG CALLOUT?");
  
  viewer.dragCallout
    .transition()
    .duration(250)
    .style("bottom","-5vh");

  return viewer;
}

ModelViewer.prototype.selectModel = function(model) {
  const viewer = this;

  if(!viewer.hasTransitionedIn) {
      d3.select("canvas")
        .transition()
        .duration(500)
        .style("top","0px")
        .on('end',function(){
          viewer.currentModelPath = model.gltfPath;
          viewer.updateModel(model);
          d3.select("#splashContent").html("");
        });
      viewer.hasTransitionedIn = true;

      viewer.dragCallout
        .transition()
        .delay(750)
        .duration(550)
        .ease(d3.easeBack)
        .style("bottom","2.5vh");

  } else {
    if(viewer.currentModelPath != model.gltfPath)  {
      viewer.currentModelPath = model.gltfPath;
      viewer.updateModel(model);
    }
  }

  return viewer;
}

ModelViewer.prototype.updateModel = function(model) {
  const viewer = this;

  viewer.description
    .updateModel(model);

  viewer.threeContainer
    .displayModel(model);

  viewer.modelThumbnails.forEach((thumbnail) => {
    if(thumbnail.gltfPath == viewer.currentModelPath) {
      thumbnail
        .activate();
    } else {
      thumbnail
        .deactivate();
    }
  })

  return viewer;
}

ThreeContainer.prototype.addCamera = function() {
  const container = this;
  const camera = new THREE.PerspectiveCamera(
    75,
    container.layout.aspectRatio,
    container.constants.NEAR,
    container.constants.FAR
  );

  camera.position.z = 4;
  return camera;
}

ThreeContainer.prototype.addEmpty = function() {
  const container = this;
  const empty = new THREE.Object3D();

  container.scene
    .add(empty);

  return empty;
}

ThreeContainer.prototype.addLights = function() {
  const container = this;
  const lights = {};


  lights.key = new THREE.SpotLight(0xffffff);
  lights.key.position.set(0,5,0);
  lights.key.castShadow = true;
  lights.key.power = 50;

  lights.fill = new THREE.SpotLight(0xffffff);
  lights.fill.position.set(5,0,-2);
  lights.fill.castShadow = true;
  lights.fill.power = 50;

  container.scene.add(lights.key);
  container.scene.add(lights.fill);

  return lights;
}

ThreeContainer.prototype.addOrbitControls = function() {
  const container = this;
  const controls = new THREE.OrbitControls(container.camera,container.renderer.domElement);

  controls.addEventListener("change",function() {
    const rotation = {};
    rotation.x = container.camera.rotation.x;
    rotation.y = container.camera.rotation.y;
    rotation.z = container.camera.rotation.z;
    // console.log(JSON.stringify(container.camera.position));
    // console.log(JSON.stringify(container.camera.rotation));

  });

  return controls;
}

ThreeContainer.prototype.addRenderer = function() {
  const container = this;

  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(container.layout.size.width,container.layout.size.height);
  renderer.gammaFactor = container.constants.GAMMA_FACTOR;
  renderer.gammaOutput = container.constants.GAMMA_OUTPUT;
  renderer.exposure = container.constants.EXPOSURE;
  renderer.physicallyCorrectLights = container.constants.PHYSICALLY_CORRECT_LIGHTS;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xcccccc );

  const canvas = document.querySelector("#threeContainer")
    .appendChild(renderer.domElement);

  canvas.style.position = "absolute";
  canvas.style.left = 0;
  canvas.style.top = container.layout.size.height;


  return renderer;
}

ThreeContainer.prototype.addScene = function() {
  const container = this;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  return scene;
}

ThreeContainer.prototype.update = function() {
  const container = this;
  container.renderer.render(container.scene,container.camera);


  if(container.currentObject !== undefined){
    // container.currentObject.rotation.x += 0.01;
    // container.currentObject.rotation.y += 0.01;
  }

  requestAnimationFrame(() => { container.update() });
}

ThreeContainer.prototype.displayModel = function(model) {
  const container = this;

  container.orbitControls.reset();

  container.camera.position.x = model.cameraPosition.x;
  container.camera.position.y = model.cameraPosition.y;
  container.camera.position.z = model.cameraPosition.z;

  container.camera.rotation.x = model.cameraRotation.x;
  container.camera.rotation.y = model.cameraRotation.y;
  container.camera.rotation.z = model.cameraRotation.z;

  container.camera.frustumCalled = true;

  container
    .loadModel(model.gltfPath)
    .then((model) => {
      container.empty.children = [];
      container.currentObject = model.scene;
      container.empty.add(container.currentObject);
      container.empty.frustumCalled = true;
      container.orbitControls.update();
      container.lights.key.target = container.empty;
      container.lights.fill.target = container.empty;
    });

}

ThreeContainer.prototype.loadModel = function(modelPath) {
  const container = this;

  let promise = new Promise((resolve,reject) => {
    container.loader.load(
      modelPath,
      function(gltf) {
        resolve(gltf);
      },
      function(xhr) {

      },
      function(error) {
        scene.logger.error("ERROR LOADING MODEL", error);
      }
    )
  });

  return promise;
}

ThreeContainer.prototype.zoom = function(level) {
  const container = this;
  container.camera.position.z = level;
}
