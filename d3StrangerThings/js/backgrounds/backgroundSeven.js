function backgroundSeven() {
  var slide;

  slide = backgroundSlide({
    "transform":"translate(0,-332.3623)",
    "start":524,
    "duration":32,
    "fadeIn":32,
    "fadeOut":69
  });

  radialGradient({
    "id":"nCloseup",
    "cx":"85%",
    "cy":"0%",
    "stops":[
      {"offset":"0%","color":"rgb(246,109,66)"},
      {"offset":"30%","color":"rgb(225,42,39)"},
      {"offset":"100%","color":"rgb(103,18,18)"},
    ]
  });

  backgroundGroupMove({
      elementGroup:slide.elementGroup,
      blurGroup:slide.blurGroup,
      path:"m -42.75447,871.82452 c -1.870788,-3.02688 2.986116,-10.57457 10.827552,-16.82602 l 14.220086,-11.33711 0,-163.98603 0,-163.98603 -11.119171,-9.00554 c -22.319191,-18.0773 -14.995018,-19.77631 85.246977,-19.77631 98.314236,0 105.470276,1.48552 88.569636,18.38617 -10.93024,10.93039 -7.59499,19.15759 30.77476,75.91478 l 33.85308,50.0758 1.44475,-48.71432 c 1.74521,-58.84809 -0.5575,-69.63467 -16.40667,-76.8562 -6.72003,-3.06198 -12.21828,-8.54595 -12.21828,-12.18662 0,-5.11136 11.82368,-6.61961 51.88947,-6.61961 41.74457,0 51.88946,1.38421 51.88946,7.0797 0,3.89418 -4.26181,8.43278 -9.47067,10.08583 -17.70849,5.62037 -20.18045,28.18438 -20.18045,184.20513 l 0,150.47748 15.20173,14.20041 c 8.36098,7.8106 13.78931,16.48603 12.06302,19.27916 -4.48938,7.26403 -101.39256,6.75552 -101.39256,-0.53174 0,-3.0857 5.55959,-10.76336 12.35464,-17.06076 14.96566,-13.86932 16.2885,-36.77926 3.55289,-61.53054 -7.29907,-14.18558 -150.764942,-213.665 -165.113069,-229.57827 -2.620715,-2.90679 -3.83651,54.38857 -2.975936,140.24537 1.446284,144.2967 1.521004,145.20353 12.5741,152.53724 6.115552,4.05775 11.119172,10.44214 11.119172,14.18757 0,8.71051 -91.366129,9.95833 -96.704517,1.32046 z",
      delay:524,
      duration:120,
      ease:d3.easeLinear,
      strokeWidth:10,
      stroke:"url(#nCloseup)",
      transform:"translate(200,0)"
  });

  radialGradient({
    "id":"gCloseup",
    "cx":"-5%",
    "cy":"65%",
    "stops":[
      {"offset":"0%","color":"rgb(246,109,66)"},
      {"offset":"10%","color":"rgb(225,42,39)"},
      {"offset":"100%","color":"rgb(103,18,18)"},
    ]
  });

  backgroundGroupMove({
      elementGroup:slide.elementGroup,
      blurGroup:slide.blurGroup,
      path:"m 1155.5374,872.02321 c -48.8224,-8.10779 -95.0581,-43.65935 -117.7543,-90.5438 -8.6795,-17.92907 -9.6146,-28.76424 -9.6146,-111.40623 l 0,-91.54557 13.4304,-20.88392 c 18.2653,-28.40197 31.0336,-39.24222 63.9978,-54.33362 37.2806,-17.06762 85.5598,-20.05189 143.2181,-8.85277 38.165,7.41301 43.384,7.51401 53.2818,1.02873 l 10.9726,-7.18987 5.5184,52.9409 c 6.5519,62.8544 6.8532,77.72769 1.5751,77.72769 -2.1689,0 -6.5396,-5.81301 -9.7127,-12.91783 -20.2902,-45.43167 -57.4764,-71.63569 -101.6584,-71.63569 -29.7582,0 -51.586,13.25095 -66.5869,40.42185 -46.2834,83.83337 -22.7684,223.51906 42.9861,255.35017 25.6767,12.42981 36.8392,12.05775 52.9254,-1.76533 13.1753,-11.32165 13.1803,-11.34944 14.7075,-80.26997 1.3325,-60.13649 0.4893,-70.09197 -6.5998,-77.9254 -4.4701,-4.9398 -10.9707,-8.98099 -14.4456,-8.98099 -3.4749,0 -6.3181,-3.17071 -6.3181,-7.04599 0,-5.96954 11.4826,-7.04617 75.1588,-7.04617 42.7987,0 75.1587,1.86679 75.1587,4.33618 0,2.38482 -6.3415,10.67761 -14.0923,18.42834 l -14.0922,14.09216 0,80.4415 0,80.44185 12.1696,11.2785 c 6.6933,6.20297 10.7962,13.50048 9.1176,16.21643 -3.7582,6.08139 -176.3108,5.78913 -213.343,-0.36166 z",
      delay:524,
      duration:120,
      ease:d3.easeLinear,
      strokeWidth:10,
      stroke:"url(#gCloseup)",
      transform:"translate(-200,0)"
  });


}
