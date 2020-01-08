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
