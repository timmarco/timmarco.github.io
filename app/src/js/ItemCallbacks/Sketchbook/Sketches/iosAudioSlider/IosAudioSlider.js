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
