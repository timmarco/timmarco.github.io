function backgroundFour(svg) {
    var slide;

    slide = backgroundSlide({
      "svg":svg,
      "start":352,
      "duration":68
    });

    radialGradient({
      "svg":svg,
      "id":"bigSCloseup",
      "cx":"36%",
      "cy":"2%",
      "stops":[
        {"offset":"0%","color":"rgb(238,155,134)"},
        {"offset":"10%","color":"rgb(229,87,40)"},
        {"offset":"30%","color":"rgb(186,33,33)"},
        {"offset":"100%","color":"black"}
      ]
    });

    backgroundGroupMove({
        "svg":svg,
        elementGroup:slide.elementGroup,
        blurGroup:slide.blurGroup,
        path:"M 471.00822,110.86172 C 255.81035,75.598744 52.013812,-79.02404 -48.026013,-282.93448 -86.2834,-360.91471 -90.405,-408.0384 -90.405,-767.46988 l 0,-398.15512 59.1982,-90.8285 c 80.509487,-123.5271 136.78921,-170.6731 282.08811,-236.31 164.3242,-74.2314 377.12773,-87.2102 631.27211,-38.5024 168.22278,32.2411 191.22688,32.6791 234.85408,4.4727 l 48.3648,-31.2686 24.3237,230.2518 c 28.879,273.3681 30.2075,338.0577 6.9425,338.0577 -9.5599,0 -28.825,-25.2824 -42.8112,-56.1829 -89.4344,-197.5937 -253.34292,-311.5615 -448.08697,-311.5615 -131.16717,0 -227.37927,57.6308 -293.49975,175.8049 -204.00653,364.61156 -100.35753,972.14024 189.47314,1110.581608 113.17689,54.060737 162.37829,52.440646 233.28272,-7.678298 58.07377,-49.24082 58.09598,-49.36114 64.82742,-349.1145 5.87345,-261.54704 2.1567,-304.84777 -29.09047,-338.91713 -19.7033,-21.48325 -48.35606,-39.06001 -63.67288,-39.06001 -15.31671,0 -27.84874,-13.79052 -27.84874,-30.64549 0,-25.96314 50.6125,-30.64546 331.28263,-30.64546 188.6469,0 331.2825,8.11988 331.2825,18.85898 0,10.37243 -27.9519,46.43933 -62.1155,80.14923 l -62.1155,61.29098 0,349.86081 0,349.861525 53.6409,49.052085 c 29.5026,26.978865 47.5873,58.71786 40.1885,70.53029 -16.5655,26.44797 -777.13775,25.17725 -940.36708,-1.5711 z",
        delay:352,
        duration:68,
        ease:d3.easeLinear,
        strokeWidth:30,
        stroke:"url(#bigGCloseup)",
        transform:"scale(0.85) translate(260,85)"
    });


    radialGradient({
      "svg":svg,
      "id":"bigGCloseup",
      "cx":"36%",
      "cy":"97%",
      "stops":[
        {"offset":"0%","color":"rgb(238,155,134)"},
        {"offset":"20%","color":"rgb(229,87,40)"},
        {"offset":"30%","color":"rgb(112,20,20)"},
        {"offset":"100%","color":"black"}
      ]
    });

    backgroundGroupMove({
        "svg":svg,
        elementGroup:slide.elementGroup,
        blurGroup:slide.blurGroup,
        path:"m 315.25965,2742.459 c -19.29854,-3.8551 -153.25386,-22.537 -297.67916,-41.5162 -247.71602,-32.5522 -266.05016,-32.5474 -323.66989,0.078 -33.59361,19.0284 -64.51213,31.5942 -68.70828,27.925 -5.5992,-4.896 28.67314,-418.4831 57.94527,-699.2517 0.29298,-2.7806 19.00149,-5.0552 41.58224,-5.0552 28.61454,0 57.83214,37.4028 96.4227,123.4355 105.347267,234.8554 271.880511,342.21 552.58706,356.2218 279.44921,13.9495 432.75269,-96.6912 432.75269,-312.3223 0,-160.7319 -55.6869,-200.3935 -432.99603,-308.3962 C 2.0345404,1777.2495 -70.458893,1746.2533 -179.34146,1647.2023 -325.03718,1514.6621 -374.26299,1409.7587 -372.29513,1236.0068 -369.18871,961.73647 -230.81264,754.77114 18.33002,651.76225 262.46109,550.82533 610.75283,550.64351 947.14217,651.27741 c 132.08923,39.51618 145.73483,40.18569 199.40343,9.78725 71.541,-40.52151 71.4557,-42.76172 9.2533,242.92578 L 1107.0116,1128.0626 962.60017,1003.4922 C 788.21098,853.06374 650.613,799.68129 490.69382,820.41225 282.85506,847.35484 152.44891,1010.6144 222.30958,1156.4113 c 35.86583,74.8507 79.38584,94.8516 485.6432,223.1902 487.87072,154.1211 587.74312,218.0467 669.23922,428.3638 144.5019,372.9172 -118.3915,783.4034 -570.69972,891.1009 -128.21449,30.5289 -424.55732,56.6989 -491.23263,43.3807 z",
        delay:352,
        duration:68,
        ease:d3.easeLinear,
        strokeWidth:30,
        stroke:"url(#bigSCloseup)",
        transform:"scale(0.85) translate(-75,20)"
    });
}
