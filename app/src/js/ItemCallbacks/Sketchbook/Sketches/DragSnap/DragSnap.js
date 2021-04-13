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
