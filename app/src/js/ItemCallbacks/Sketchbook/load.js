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
