function strip_plot(container,data) {
	this.container = container;
	this.data = data;

	this.radius = 3;
	this.default_style = "fill:#000;opacity:.25;stroke-width:1;stroke:black";

	this.height = 75;
	this.width = 500;

	this.margin_left = 10;
	this.margin_right = 10;
	this.margin_bottom = 35;
	this.margin_top = 20;

	this.fill = "rgba(0,0,0,.5)";

	this.invert = false;


	this.show_quintiles = true;


	this.configure = function() {


		var temp_order = this.data.map(function(d) { return d.x;}).sort(sort_number);


		function sort_number(a,b) {
			return a-b;
		}


		this.min = temp_order[0];
		this.max = temp_order[this.data.length - 1];

		if(!this.invert) {
			this.x = d3.scale.linear().domain([this.min,this.max]).range([this.margin_left,this.width - this.margin_right]);
		} else {
			this.x = d3.scale.linear().domain([this.max,this.min]).range([this.margin_left,this.width - this.margin_right]);
		}


		if(this.show_quintiles) {
			if(!this.invert) {
				this.quartiles = [
					[d3.quantile(temp_order,0.25),d3.quantile(temp_order,0.5)],
					[d3.quantile(temp_order,0.5),d3.quantile(temp_order,0.75)]

				];
			} else {
				this.quartiles = [
					[d3.quantile(temp_order,0.75),d3.quantile(temp_order,0.5)],
					[d3.quantile(temp_order,0.5),d3.quantile(temp_order,0.25)]

				];

			}

			this.median = d3.quantile(temp_order,0.5);

		}

		return this;
	};


	this.option = function(attr,val) {
		this[attr] = val;
		return this;
	};


	this.draw = function() {

		var p = this;


		this.configure();

		this.tooltip = true;



		this.chart = d3.select(this.container)
			.append("svg")
			.attr("height",this.height)
			.attr("width",this.width);

		this.tooltip = d3.select(this.container)
			.append("div")
			.attr("class","tooltip");

		this.x_axis = d3.svg.axis()
			.scale(this.x)
			.orient("bottom")
			.ticks(4);

		var x_pos = this.height - this.margin_bottom;
		this.chart.append("g")
			.attr('class','axis')
			.attr("transform","translate(0," + x_pos + ")")
			.call(this.x_axis);


		this.median_line = this.chart.append("line")
			.attr("x1",this.x(this.median))
			.attr("x2",this.x(this.median))
			.attr("y1",this.margin_top)
			.attr("y2",this.height - this.margin_bottom)
			.attr("stroke","red")
			.attr("stroke-width",2);



		this.boxes = this.chart.selectAll("rect")
			.data(this.quartiles)
			.enter()
			.append("rect")
			.attr("x",function(d) { return p.x(d[0]) ;})
			.attr("y",this.margin_top)
			.attr("width",function(d) { return p.x(d[1]) - p.x(d[0]) ;})
			.attr("height",this.height - this.margin_top - this.margin_bottom)
			.attr("stroke","none")
			.attr("fill","rgba(0,0,0,.15)");


		var y_pos = this.margin_top + (this.height - this.margin_top - this.margin_bottom) /	2;


		this.points = this.chart.selectAll("circle")
			.data(this.data)
			.enter()
			.append("circle")
			.attr("class",function(d) { return d.id;} )
			.attr("cx",function(d) { return p.x(d.x) ;} )
			.attr("cy",y_pos)
			.attr("r",function(d) { if(d.r) { return d.r;} else {return p.radius;} })
			.attr("fill",function(d) { if(d.fill) { return d.fill; } else { return p.fill; } })
			.on('mousemove',function(d) {
				if(p.tooltip) {
					if(!d.fill) {
						d3.select(this)
							.attr("opacity",1)
							.attr("r",6);
						}
				}

				p.show_tooltip(d);
			})
			.on('mouseout',function(d) {
				if(!d.fill) {
					d3.select(this).transition()
						.attr("style",p.default_style)
						.attr("r",p.radius);
					}

				p.tooltip.style("display","none");
			});



		this.label = this.chart.append("text")
			.attr("x",this.width / 2)
			.attr("y",this.height)
			.attr("text-anchor","middle")
			.attr("font-size","10pt")
			.text(this.label);



		return this;
	};

  this.setTitle = function(title) {
    this.tooltipTitle = title;
    return this;
  };


	this.show_tooltip = function(d) {

    var name = d.label;
    var value = d.x;
    var tooltipString = "<div class='player'>" + name + "</div><div class='metric_label'>" + this.tooltipTitle + "</div><div class='metric_value'>" + value + "</div>";

    this.tooltip
      .style("display","block")
      .style("top",d3.event.pageY - 20)
      .style("left",d3.event.pageX + 15);

    this.tooltip.html(tooltipString);

	};



}
