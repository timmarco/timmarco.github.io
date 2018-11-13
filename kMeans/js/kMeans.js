function k_means(container) {
  this.container = container;


  // Defaults, but can be reset before chart is configured
  this.k = 3;
  this.size = {height:400,width:400};
  this.margins = {top:50,left:50,bottom:50,right:50};
  this.data = [];
  this.centroids = [];
  this.cluster_colors = ["red","green","blue","orange"];


  this.configure = function() {
    this.x = d3.scale.linear().domain([0,1]).range([this.margins.left,this.size.width - this.margins.right]);
    this.y = d3.scale.linear().domain([0,1]).range([this.size.height - this.margins.bottom,this.margins.top]);
  };

  this.draw_voronoi = function(centroids,colors,offset) {

    var p = this;


    var voronoi = d3.geom.voronoi()
      .clipExtent([[p.margins.left,p.margins.top], [p.size.width - p.margins.right,p.size.height - p.margins.top]])
      .x(function(d) { return p.x(d.x);})
      .y(function(d) { return p.y(d.y);});

    var color = d3.scale.category10();


    var group = this.chart.append("g");

    this.voronoi = group.selectAll("path")
      .data(voronoi(centroids))
      .enter()
      .append("path")
      .attr("class","voronoi")
      .attr("data-cluster",function(d,i) { return i ;})
      .attr("opacity",0)
      .attr("stroke","black")
      .attr("stroke-dasharray","8 8")
      .attr("fill",function(d,i) { return colors[i];})
      .attr("d", function(d) { return "M" + d.join("L") + "Z"; })
      .transition()
      .duration(function() { if(offset == 0) { return 0;} else { return 2000}})
      .delay(function(d,i) { if(offset == 0) { return 0;} else { return offset + (1000 * i)}})
      .attr("opacity",.25);

  }


  this.demo_centroids = function(which_data,initial_size) {

    var p = this;

    this.chart.selectAll(".centroid")
      .data(which_data)
      .enter()
      .append("circle")
      .attr("cx",function(d) { return show_centroids.x(d.x) } )
      .attr("cy",function(d) { return show_centroids.y(d.y) } )
      .attr("r",initial_size)
      .attr("data-cluster",function(d,i) { return i })
      .attr("fill",function(d,i) { return p.cluster_colors[i] })
      .attr("stroke","black")
      .attr("class","centroid");


    if(initial_size == 0) {
      this.chart.selectAll(".centroid")
        .transition()
        .delay(function(d,i) { return i * 1000})
        .duration(1000)
        .attr("r",10);
    }
  }


  this.draw_chart = function() {
    this.chart = d3.select(this.container).append("svg")
      .attr("height",this.size.height)
      .attr("width",this.size.width);
  }

  this.draw_axes = function() {
    var p = this;
    var x_pos = this.size.height - this.margins.top;



    // Add masks

    this.chart.append("rect")
      .attr("fill","white")
      .attr("x",0)
      .attr("y",0)
      .attr("width",p.margins.left)
      .attr("height",p.size.height);


    this.chart.append("rect")
      .attr("fill","white")
      .attr("x",0)
      .attr("y",0)
      .attr("width",p.size.width)
      .attr("height",p.margins.top);


    this.chart.append("rect")
      .attr("fill","white")
      .attr("x",0)
      .attr("y",p.size.height - p.margins.bottom)
      .attr("width",p.size.width)
      .attr("height",p.margins.bottom);


    this.chart.append("rect")
      .attr("fill","white")
      .attr("x",p.size.width - p.margins.right)
      .attr("y",0)
      .attr("width",p.margins.right)
      .attr("height",p.size.height);



    var x_axis = d3.svg.axis().scale(this.x).orient("bottom").tickFormat(d3.format("d"));
    this.chart.append("g")
    .call(x_axis)
    .attr("class","axis")
    .attr("transform","translate(0,"+x_pos+")");

    var y_pos = p.margins.left;
    var y_axis = d3.svg.axis().scale(this.y).orient("left").tickFormat(d3.format("d"));
    this.chart.append("g")
    .call(y_axis)
    .attr("class","axis")
    .attr("transform","translate("+y_pos+",0)");



  };

  this.label_axes = function() {
    this.chart.append("text")
      .attr("x",this.size.width / 2)
      .attr("y",this.size.height - (this.margins.top / 2))
      .attr("text-anchor","middle")
      .attr("font-size","10pt")
      .attr("font-weight","bold")
      .text("Economic");


    this.chart.append("text")
      .attr("x",this.margins.left - 15)
      .attr("y",this.size.height /2 )
      .attr("text-anchor","end")
      .attr("font-size","10pt")
      .attr("font-weight","bold")
      .text("Social");

  }

  this.plot_data = function(animate) {
    var p = this;

    if(!animate) {
      this.datapoints = this.chart.selectAll("circle")
        .data(p.data)
        .enter()
        .append("circle")
        .attr("cx",function(d) { return p.x(d.x) })
        .attr("cy",function(d) { return p.y(d.y) })
        .attr("r",3);
    } else {

      this.datapoints = this.chart.selectAll("circle")
        .data(p.data)
        .enter()
        .append("circle")
        .attr("cx",function(d) { return p.margins.left })
        .attr("cy",function(d) { return (p.size.height - p.margins.bottom) })
        .attr("r",3)
        .transition()
        .duration(500)
        .delay(function(d,i) { return i * 50 })
        .attr("cx",function(d) { return p.x(d.x) })
        .transition()
        .duration(500)
        .delay(function(d,i) { return 3000 + i * 100 })
        .attr("cy",function(d) { return p.y(d.y) });
    }
  };

  this.init_centroids = function() {
    for(var i = 0; i < this.k; i++) {
      var a_centroid = {x:Math.random(),y:Math.random()};
      this.centroids.push(a_centroid);
    }

  }

  this.draw_centroids = function() {
    var p = this;

    this.display_centroids = this.chart.selectAll(".centroid")
      .data(p.centroids)
      .enter()
      .append("circle")
      .attr("cx",function(d) { return p.x(d.x) })
      .attr("cy",function(d) { return p.y(d.y) })
      .attr("r",0)
      .attr("stroke","black")
      .attr("stroke-width",1)
      .attr("fill",function(d,i) { return p.cluster_colors[i] } );


    this.display_centroids
      .transition()
      .duration(1000)
      .delay(function(d,i) { return i * 250 } )
      .attr("r",9);
  }

  this.calculate_clusters = function() {
    var p = this;

    this.datapoints.each(function() {
      var xy = d3.select(this).data()[0];
      var distances = [];

      for(var c in p.centroids) {
        var x_dist = Math.pow(xy.x - p.centroids[c].x,2);
        var y_dist = Math.pow(xy.y - p.centroids[c].y,2);
        var the_dist = Math.pow(x_dist + y_dist,.5);
        distances.push(the_dist);
      }

      var this_cluster = least_distance(distances);

      d3.select(this).attr("data-cluster",this_cluster);
    });


  }

  this.update_cluster_display = function() {
    var p = this;

    for(var i = 0; i < this.k; i++) {
      var selector = "[data-cluster='"+i+"']";
      this.chart.selectAll(selector)
        .transition()
        .attr("fill",p.cluster_colors[i]);
    }

  };

  this.calculate_new_centroids = function() {
    var p = this;

    for(var i = 0; i < this.k; i++) {
      var x_t = 0;
      var y_t = 0;
      var n = 0;

      var selector = "[data-cluster='"+i+"']";
      this.chart.selectAll(selector)
        .each(function() {
          var xy = d3.select(this).data()[0];
          x_t += xy.x;
          y_t += xy.y;
          n+=1;

        });

        var new_x = x_t / n;
        var new_y = y_t / n;
        var new_centroid = {x:new_x,y:new_y};
        console.log(new_centroid);

      this.chart.append("circle")
        .attr("cx",function(d) { return p.x(new_centroid.x) })
        .attr("cy",function(d) {  return p.y(new_centroid.y) })
        .attr("r",10)
        .attr("fill","none")
        .attr("stroke","black")
        .attr("stroke-width",5);

    }


  }

  this.animate_new_centroid = function(cluster,the_delay,c_centroids) {

    var new_centroid = {x:0,y:0};
    var cluster_points = {x:0,y:0};
    var cluster_count = 0;


    //
    // This is inelegant
    //

    this.chart.selectAll(".voronoi")
      .each(function() {
        if(d3.select(this).attr("data-cluster") != cluster) {
          d3.select(this)
            .transition()
            .delay(the_delay)
            .duration(500)
            .attr("opacity",0)
            .transition()
            .delay(the_delay + 2000)
            .attr("opacity",.25);
        }
      });

    this.datapoints.each(function() {

      if(d3.select(this).attr("class") != "cluster_" + cluster) {
        d3.select(this)
          .transition()
          .delay(the_delay)
          .duration(500)
          .attr("r",0);

      }
    });



    this.chart.selectAll(".cluster_" +cluster)
      .each(function() {
        var point_data = d3.select(this).data()[0];
        cluster_points.x += point_data.x;
        cluster_points.y += point_data.y;
        cluster_count += 1;

      });

    new_centroid.x = cluster_points.x / cluster_count;
    new_centroid.y = cluster_points.y / cluster_count;

    c_centroids.push(new_centroid);

    var p = this;

    this.chart.selectAll(".cluster_" + cluster)
      .each(function() {
      var points = d3.select(this).data()[0];
        p.chart.append("line")
          .attr("x1",points.x)
          .attr("x2",new_centroid.x)
          .attr("y1",points.y)
          .attr("y2",new_centroid.y);
      })


    this.chart.selectAll(".centroid")
      .each(function(d,i) {
        if(i == cluster) {
          d3.select(this)
            .transition()
            .duration(1000)
            .delay(the_delay + 500)
            .attr("cx",p.x(new_centroid.x))
            .attr("cy",p.y(new_centroid.y))
            .attr("stroke","black");
        }
      });


    this.chart.append("circle")
      .attr("fill",this.cluster_colors[cluster])
      .attr("cx",this.x(new_centroid.x))
      .attr("cy",this.y(new_centroid.y))
      .attr("stroke","black")
      .attr("r",0)
      .transition()
      .duration(1000)
      .delay(the_delay + 500)
      .attr("r",2);

    this.chart.selectAll(".new_cluster_label").remove();




    this.datapoints
      .transition()
      .delay(the_delay + 2000)
      .duration(500)
      .attr("r",3);


  };

  this.assign_datapoints = function(initial_centroids) {
    var p = this;

    this.datapoints.each(function() {
      var point_x = d3.select(this).data()[0].x;
      var point_y = d3.select(this).data()[0].y;

      var distances = [];

      for(var i = 0; i < initial_centroids.length; i++) {
        var x_distance = Math.pow(point_x - initial_centroids[i].x,2);
        var y_distance = Math.pow(point_y - initial_centroids[i].y,2);
        var distance_vector = Math.pow(x_distance + y_distance,.2);
        distances.push(distance_vector);
      }

      var new_cluster = least_distance(distances);

      d3.select(this).attr("class","cluster_" +new_cluster);
      d3.select(this).attr("data-cluster",new_cluster);
      d3.select(this).attr("fill",p.cluster_colors[new_cluster]);
    });

  }


}
