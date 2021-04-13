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
