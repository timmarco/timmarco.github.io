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
