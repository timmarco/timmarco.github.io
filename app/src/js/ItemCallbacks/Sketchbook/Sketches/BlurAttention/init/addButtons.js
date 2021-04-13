BlurAttentionSketch.prototype.addButtons = function() {
  const blur = this;

  const forwardDuration = 150;
  const backwardDuration = 200;

  return [
    new BlurButton().move(0,0).fill(d3.schemeCategory10[0]).label("A"),
    new BlurButton().move(200,0).fill(d3.schemeCategory10[1]).label("B"),
    new BlurButton().move(400,0).fill(d3.schemeCategory10[2]).label("C"),
    new BlurButton().move(0,175).fill(d3.schemeCategory10[3]).label("D"),
    new BlurButton().move(200,175).fill(d3.schemeCategory10[4]).label("E"),
    new BlurButton().move(400,175).fill(d3.schemeCategory10[5]).label("F")
  ];

  function BlurButton() {
    const button = this;
    init(button);
    return button;

    function init() {
      button.translate = blur.buttonGroup
        .append("g")
        .on("mouseover",() => {
          blur
            .drawAttention(button);
        })
        .on("mouseout",() => {
          blur
            .reset();
        })

      button.scale = button.translate
        .append("g")
        .attr("transform","scale(1)");

      button.filtered = button.scale
        .append("g");

      button.rect = button.filtered
        .append("rect")
        .attr("x",-75)
        .attr("y",-75)
        .attr("width",150)
        .attr("height",150)
        .attr("rx",25)
        .attr("ry",25);

      button.textOutline = button.filtered
        .append("text")
        .attr("fill","none")
        .attr("stroke","#222")
        .attr("stroke-width",7)
        .attr("font-weight","bold")
        .attr("font-size","48pt")
        .attr("font-family","Oswald")
        .attr("dominant-baseline","middle")
        .attr("text-anchor","middle")
        .attr("y",5)
        .attr("cursor","default");

      button.text = button.filtered
        .append("text")
        .attr("fill","white")
        .attr("font-weight","bold")
        .attr("font-size","48pt")
        .attr("font-family","Oswald")
        .attr("dominant-baseline","middle")
        .attr("text-anchor","middle")
        .attr("y",5)
        .attr("cursor","default");


      button.move = function(x,y) {
        button.translate
          .attr("transform","translate("+x+","+y+")");
        return button;
      }

      button.label = function(string) {
        button.text.html(string);
        button.textOutline.html(string);
        return button;
      }

      button.fill = function(color) {
        button.rect
          .attr("fill",color);
        return button;
      }

      button.bringForward = function() {
        button.scale
          .transition()
          .duration(forwardDuration)
          .attr("transform","scale(1.15)");

        button.text
          .transition()
          .duration(forwardDuration + 75)
          .attr("transform","scale(1.75)");

        button.textOutline
          .transition()
          .duration(forwardDuration + 75)
          .attr("transform","scale(1.75)");


        button.filtered
          .attr("filter","none")

        return button;
      }

      button.sendBack = function() {
        button.scale
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(0.75)");

        button.filtered
          .attr("filter","url(#blur)");

        return button;
      }

      button.reset = function() {
        button.scale
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(1)");

        button.text
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(1)");

        button.textOutline
          .transition()
          .duration(backwardDuration)
          .attr("transform","scale(1)");

        button.filtered
          .attr("filter","none");

        return button;
      }
    }
  }

}
