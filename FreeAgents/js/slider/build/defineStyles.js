/* jshint esversion:6 */
Slider.prototype.defineStyles = function(presetStyles) {
  const slider = this;
  let styles = slider.defaulter(presetStyles,{});

  styles.sliderTrackColor = "#aaa";
  styles.sliderTrackHeight = 5;
  styles.circleRadius = 5;
  styles.circleFill = "black";
  styles.circleStroke = "#eee";
  styles.circleStrokeWidth = 1;

  styles.highlightFillColor = "#ed553b";
  styles.highlightStrokeColor = "black";
  styles.highlightFillStrokeWidth = 2;
  styles.highlightCircleRadius = 7;

  styles.glowCircleDefaultOpacity = 1.0;
  styles.glowCircleDefaultRadius = 7;
  styles.glowCircleFill = "#ed553b";

  styles.glowCircleDefaultOpacity = 1;
  styles.glowCircleDefaultRadius = 5;
  styles.glowCircleFill = "#ed553b";

  styles.glowDelay = 0;
  styles.glowDuration = 1500;
  styles.glowCircleEndOpacity = 0;
  styles.glowCircleEndRadius = 15;
  styles.glowCircleEndFill = "#ed553b";


  return styles;
};
