
			$(document).ready(function() {

				var albers = d3.geo.albersUsa()
					.scale([700]);

				var path = d3.geo.path()
					.projection(albers);

				var svg = d3.select("#the_map")
							.append("svg")
							.attr("width",800)
							.attr("height",500);


				var choro = d3.scale.quantize().domain([5.640,37.751]).range(["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"]);
				var state_data = {
		Alabama:{employment:30750,per_thousand:16.556,mean_hourly:19.58,annual_mean:40730,total:1252447500},
		Alaska:{employment:2890,per_thousand:8.878,mean_hourly:26.00,annual_mean:54070,total:156262300},
		Arizona:{employment:22780,per_thousand:9.017,mean_hourly:19.51,annual_mean:40580,total:924412400},
		Arkansas:{employment:33610,per_thousand:29.003,mean_hourly:17.47,annual_mean:36350,total:1221723500},
		California:{employment:127330,per_thousand:8.422,mean_hourly:20.86,annual_mean:43380,total:5523575400},
		Colorado:{employment:25490,per_thousand:10.767,mean_hourly:21.44,annual_mean:44600,total:1136854000},
		Connecticut:{employment:12580,per_thousand:7.641,mean_hourly:22.31,annual_mean:46410,total:583837800},
		Delaware:{employment:3760,per_thousand:8.863,mean_hourly:20.52,annual_mean:42680,total:160476800},
		Florida:{employment:70320,per_thousand:9.174,mean_hourly:17.64,annual_mean:36700,total:2580744000},
		Georgia:{employment:50820,per_thousand:12.758,mean_hourly:19.50,annual_mean:40560,total:2061259200},
		Hawaii:{employment:3450,per_thousand:5.640,mean_hourly:20.95,annual_mean:43570,total:150316500},
		Idaho:{employment:12080,per_thousand:19.233,mean_hourly:17.91,annual_mean:37250,total:449980000},
		Illinois:{employment:66890,per_thousand:11.601,mean_hourly:21.90,annual_mean:45550,total:3046839500},
		Indiana:{employment:48740,per_thousand:16.778,mean_hourly:20.37,annual_mean:42360,total:2064626400},
		Iowa:{employment:37410,per_thousand:24.733,mean_hourly:19.93,annual_mean:41450,total:1550644500},
		Kansas:{employment:19730,per_thousand:14.514,mean_hourly:19.91,annual_mean:41410,total:817019300},
		Kentucky:{employment:27960,per_thousand:15.462,mean_hourly:19.33,annual_mean:40220,total:1124551200},
		Louisiana:{employment:23540,per_thousand:12.289,mean_hourly:18.68,annual_mean:38850,total:914529000},
		Maine:{employment:9170,per_thousand:15.631,mean_hourly:18.14,annual_mean:37720,total:345892400},
		Maryland:{employment:19630,per_thousand:7.674,mean_hourly:20.38,annual_mean:42390,total:832115700},
		Massachusetts:{employment:22760,per_thousand:6.851,mean_hourly:23.06,annual_mean:47970,total:1091797200},
		Michigan:{employment:50030,per_thousand:12.282,mean_hourly:19.15,annual_mean:39840,total:1993195200},
		Minnesota:{employment:33630,per_thousand:12.317,mean_hourly:20.65,annual_mean:42960,total:1444744800},
		Mississippi:{employment:22250,per_thousand:20.335,mean_hourly:18.65,annual_mean:38790,total:863077500},
		Missouri:{employment:39820,per_thousand:14.893,mean_hourly:19.65,annual_mean:40860,total:1627045200},
		Montana:{employment:6430,per_thousand:14.510,mean_hourly:21.19,annual_mean:44070,total:283370100},
		Nebraska:{employment:26080,per_thousand:27.655,mean_hourly:20.28,annual_mean:42180,total:1100054400},
		Nevada:{employment:9710,per_thousand:8.159,mean_hourly:22.55,annual_mean:46900,total:455399000},
		"New Hampshire":{employment:6690,per_thousand:10.662,mean_hourly:19.53,annual_mean:40620,total:271747800},
		"New Jersey":{employment:40950,per_thousand:10.582,mean_hourly:22.66,annual_mean:47120,total:1929564000},
		"New Mexico":{employment:9370,per_thousand:11.892,mean_hourly:19.62,annual_mean:40810,total:382389700},
		"New York":{employment:54190,per_thousand:6.150,mean_hourly:22.41,annual_mean:46610,total:2525795900},
		"North Carolina":{employment:49990,per_thousand:12.402,mean_hourly:18.57,annual_mean:38620,total:1930613800},
		"North Dakota":{employment:16630,per_thousand:37.751,mean_hourly:24.43,annual_mean:50810,total:844970300},
		Ohio:{employment:66860,per_thousand:12.856,mean_hourly:20.13,annual_mean:41870,total:2799428200},
		Oklahoma:{employment:24340,per_thousand:15.433,mean_hourly:19.31,annual_mean:40150,total:977251000},
		Oregon:{employment:21330,per_thousand:12.671,mean_hourly:19.34,annual_mean:40230,total:858105900},
		Pennsylvania:{employment:72590,per_thousand:12.840,mean_hourly:20.80,annual_mean:43260,total:3140243400},
		"Rhode Island":{employment:2770,per_thousand:5.975,mean_hourly:19.77,annual_mean:41130,total:113930100},
		"South Carolina":{employment:22580,per_thousand:12.036,mean_hourly:19.41,annual_mean:40380,total:911780400},
		"South Dakota":{employment:7550,per_thousand:18.460,mean_hourly:18.70,annual_mean:38900,total:293695000},
		Tennessee:{employment:48610,per_thousand:17.680,mean_hourly:19.75,annual_mean:41080,total:1996898800},
		Texas:{employment:165650,per_thousand:14.752,mean_hourly:20.02,annual_mean:41640,total:6897666000},
		Utah:{employment:20420,per_thousand:15.942,mean_hourly:21.15,annual_mean:43990,total:898275800},
		Vermont:{employment:3880,per_thousand:12.904,mean_hourly:20.21,annual_mean:42040,total:163115200},
		Virginia:{employment:36510,per_thousand:10.006,mean_hourly:18.98,annual_mean:39470,total:1441049700},
		Washington:{employment:30060,per_thousand:10.371,mean_hourly:21.19,annual_mean:44070,total:1324744200},
		"West Virginia":{employment:11180,per_thousand:15.796,mean_hourly:18.00,annual_mean:37430,total:418467400},
		Wisconsin:{employment:46080,per_thousand:16.892,mean_hourly:19.94,annual_mean:41480,total:1911398400},
		Wyoming:{employment:6980,per_thousand:24.686,mean_hourly:23.31,annual_mean:48480,total:338390400}
	}

    var svgGroup = svg.append("g").attr("transform","translate(-100,0)");

					d3.json("us-states.json", function(json) {





						svgGroup.selectAll("path")
						   .data(json.features)
						   .enter()
						   .append("path")
						   .attr("d", path)
						   .attr("fill",function(d) {
								if(state_data[d.properties.name]) {
									var the_val = state_data[d.properties.name].per_thousand;
									return choro(the_val);
								}
						   })
						   .attr("stroke","#000")
						   .attr("stroke-width",.5)


						//
						// Add in overlays to make sure that the state outlines pop
						//

						svgGroup.selectAll(".overlay")
							.data(json.features)
							.enter()
							.append("path")
							.attr("fill","rgba(0,0,0,0)")
							.attr("stroke","orange")
							.attr("stroke-width",0)
							.attr("d",path)
							.on('mouseenter',function(d) {
								console.log(d3.mouse(this));
								console.log(d3.event);
								var the_state = d.properties.name;

								$("#topline").html(the_state);
								$("#percent").html(round_it(state_data[the_state].per_thousand / 10) + "%");
								$("#employment").html(thousands(state_data[the_state].employment));
								$("#total").html("$" + millions(state_data[the_state].total) + " MM");

								d3.select(this).transition()
                  .duration(125)
									.attr("stroke","orange")
									.attr("stroke-width",3)

								var mouse = d3.mouse(this);
								$("#tooltip").show().css({'left':mouse[0] + 25,'top':d3.event.layerY + 25});

							})
							.on('mouseout',function(d) {
								d3.select(this).transition()
									.attr("stroke","#000")
									.attr("stroke-width",.0)

								$("#tooltip").hide();
							})


					});



					var bar_data = [
						{label:"Fuel Costs",v:.645,t:"vehicle"},
						{label:"Lease / Purchase",v:.163,t:"vehicle"},
						{label:"Repair & Maintainance",v:.148,t:"vehicle"},
						{label:"Truck Insurance",v:.064,t:"vehicle"},
						{label:"Permits and Licenses",v:.026,t:"vehicle"},
						{label:"Tires",v:.041,t:"vehicle"},
						{label:"Tolls",v:.019,t:"vehicle"},
						{label:"Wages",v:.440,t:"driver"},
						{label:"Benefits",v:.129,t:"driver"}
					];

					var def_colors = ["#08519c","#08519c","#08519c","#08519c","#08519c","#08519c","#08519c","#6baed6","#6baed6"];

					var the_bar = new bar_chart("#initial_bar",bar_data,def_colors);
					the_bar.draw_chart();


			});




	function bar_chart(container,data,colors) {
		this.container = container;
		this.data = data;
		this.colors = colors;


		this.width = 800;
		this.height = 300;


		this.margin = {left:200, right:100, top:0, bottom:30};
		this.bar_area = (this.height - this.margin.top - this.margin.bottom) / this.data.length;
		this.bar_height = .5 * this.bar_area;

		this.draw_chart = function() {
			this.chart = d3.select(this.container).append('svg:svg')
				.attr('width',this.width)
				.attr('height',this.height);


			this.x = d3.scale.linear()
				.domain([0,1])
				.range([this.margin.left,this.width - this.margin.right - this.margin.left]);


			this.x_axis = d3.svg.axis()
				.ticks(2)
				.scale(this.x)
				.orient("bottom");


			var group = this.chart.selectAll("g").append("g")
				.data(this.data);


			var parent = this;

			this.bars = group.enter()
				.append("rect")
				.attr("width",function(d) { return parent.x(d.v)})
				.attr("x",this.margin.left)
				.attr("height",this.bar_height)
				.attr("class",function(d) { return d.team})
				.attr("y",function(d,i) { return parent.margin.top + (i * parent.bar_area)} )
				.attr("fill",function(d,i) {
					return parent.colors[i];
				})
				.on("mouseover",function(d) {

				});

			this.labels = group.enter()
				.append("text")
				.attr("x",this.margin.left - 5)
				.attr("y",function(d,i) { return parent.margin.top + (i * parent.bar_area) + (parent.bar_height)})
				.attr("text-anchor","end")
				.text(function(d) { return d.label })
				.attr("cursor","default")
				.attr("font-size","12pt")
				.on('mouseover',function(d) {

				});

			this.labels = group.enter()
				.append("text")
				.attr("x",function(d) {
					return parent.margin.left + parent.x(d.v) + 4;
				})
				.attr("y",function(d,i) { return parent.margin.top + (i * parent.bar_area) + (parent.bar_height)})
				.attr("text-anchor","start")
				.text(function(d) { return "$" +d.v })
				.attr("cursor","default")
				.attr("font-size","12pt")
				.on('mouseover',function(d) {
					console.log(d.name);
				});







		};
	}

			function thousands(x) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

			function round_it(num) {
				return Math.round(num * 100) / 100;
			}

			function millions(v) {
				return thousands(Math.round(v / 1000000));
			}
