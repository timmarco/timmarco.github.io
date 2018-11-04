


			$(document).ready(function() {

				var babip_line = d3.select("#babip_line")
					.append("svg")
					.attr("height",200)
					.attr("width",600);

				babip_line.append("text")
					.attr("x",25)
					.attr("y",125)
					.attr("text-anchor","middle")
					.attr("class","axis_label")
					.text("BABIP");

				var babip_y = d3.scale.linear().domain([.22,.34]).range([180,50]);
				var babip_x = d3.scale.linear().domain([1990,1999]).range([100,550]);

				var maddux = [
					{year:1990,babip:.296},
					{year:1991,babip:.274},
					{year:1992,babip:.252},
					{year:1993,babip:.269},
					{year:1994,babip:.253},
					{year:1995,babip:.244},
					{year:1996,babip:.280},
					{year:1997,babip:.280},
					{year:1998,babip:.262},
					{year:1999,babip:.324}
				];

				var martinez = [
					{year:1992,babip:.273},
					{year:1993,babip:.274},
					{year:1994,babip:.277},
					{year:1995,babip:.268},
					{year:1996,babip:.290},
					{year:1997,babip:.258},
					{year:1998,babip:.270},
					{year:1999,babip:.323}
				];


				var johnson = [
					{year:1990,babip:.247},
					{year:1991,babip:.282},
					{year:1992,babip:.279},
					{year:1993,babip:.273},
					{year:1994,babip:.296},
					{year:1995,babip:.301},
					{year:1996,babip:.294},
					{year:1997,babip:.281},
					{year:1998,babip:.320},
					{year:1999,babip:.292}
				];


				console.log(babip_x(1999));

				var babip_line_gen = d3.svg.line()
					.x(function(d) { return babip_x(d.year) })
					.y(function(d) { return babip_y(d.babip) });


				babip_line.append("path")
					.attr("d",babip_line_gen(maddux))
					.attr("fill","none")
					.attr("stroke","#0E3386")
					.attr("stroke-width",3);


				babip_line.append("path")
					.attr("d",babip_line_gen(martinez))
					.attr("fill","none")
					.attr("stroke","#BD3039")
					.attr("stroke-width",3);


				babip_line.append("path")
					.attr("d",babip_line_gen(johnson))
					.attr("fill","none")
					.attr("stroke","#006C67")
					.attr("stroke-width",3);


				babip_x_axis = d3.svg.axis().scale(babip_x).orient("bottom").tickFormat(d3.format("d"));

				babip_y_axis = d3.svg.axis().scale(babip_y).orient("left").ticks(4);

				babip_line.append("g")
					.call(babip_x_axis)
					.attr("class","axis")
					.attr("transform","translate(0,180)");

				babip_line.append("g")
					.call(babip_y_axis)
					.attr("class","axis")
					.attr("transform","translate(100,0)");





















				var example_scatter = d3.select("#example_scatter")
						.append("svg")
						.attr("height",400)
						.attr("width",800);

				var example_x = d3.scale.linear().domain([.23,.34]).range([100,300]);
				var example_y = d3.scale.linear().domain([.23,.34]).range([300,100]);



				var example_x_axis = d3.svg.axis()
						.scale(example_x)
						.orient("bottom")
						.ticks(2);

				example_scatter.append("g")
					.call(example_x_axis)
					.attr("class","axis")
					.attr("transform","translate(0,300)");


				var example_y_axis = d3.svg.axis()
					.scale(example_y)
					.orient("left")
					.ticks(2);

				example_scatter.append("g")
					.call(example_y_axis)
					.attr("class","axis")
					.attr("transform","translate(100,0)");



				example_scatter.append("text")
					.attr("x",0)
					.attr("y",205)
					.attr("text-anchor","start")
					.attr("class","axis_label")
					.text("2014 BABIP");


				example_scatter.append("text")
					.attr("x",200)
					.attr("y",345)
					.attr("text-anchor","middle")
					.attr("class","axis_label")
					.text("2013 BABIP");



				var circle_data = [];

				for(i=0;i<47;i++) {
					var x_val = random_num(.23,.34);
					var y_val = random_num(.23,.34);
					circle_data.push({x:x_val,y:y_val});
				}

				example_scatter
					.append("text")
					.attr("x",25)
					.attr("y",50)
					.attr("class","chart_title")
					.text("Visualizing the Degree of Correlation");


				var random_label = example_scatter
					.append("text")
					.attr("y",310)
					.attr("x",405)
					.attr("font-size","10pt")
					.attr("opacity",1)
					.text("Totally Random");


				var cor_label = example_scatter
					.append("text")
					.attr("y",100)
					.attr("x",405)
					.attr("font-size","10pt")
					.attr("opacity",.1)
					.text("Perfectly Correlated")


				var r_values = d3.scale.linear().domain([1,0]).range([100,300]);

				var r_axis = d3.svg.axis()
					.scale(r_values)
					.orient("left")
					.ticks(2);

				example_scatter.append("g")
					.call(r_axis)
					.attr("class","axis")
					.attr("transform","translate(400,0)");


				var indicator = example_scatter
					.append("circle")
					.attr("cx",400)
					.attr("cy",300)
					.attr("fill","red")
					.attr("r",4);

				var circles = example_scatter.selectAll(".circles")
					.data(circle_data)
					.enter()
					.append("circle")
						.attr("cx",function(d) { return example_x(d.x)})
						.attr("cy",function(d) { return example_y(d.y)})
						.attr("r",3)
						.attr("fill","#a8ddb5");



				animate_correlation();

				function animate_correlation() {
					indicator.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("cy",100)
						.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("cy",300);

					random_label.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("opacity",.1)
						.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("opacity",1);

					cor_label.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("opacity",1)
						.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("opacity",.1);



					circles.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("cy",function(d) { return example_y(d.x)})
						.attr("fill","#43a2ca")
						.transition()
						.duration(1000)
						.transition()
						.duration(3000)
						.attr("cy",function(d) { return example_y(d.y)})
						.attr("fill","#a8ddb5")
						.each("end",animate_correlation);
				}





				var babip_data = [{"name":"Mark Buehrle","2014_babip":"0.316","2013_babip":"0.305"},{"name":"Bartolo Colon","2014_babip":"0.307","2013_babip":"0.294"},{"name":"A.J. Burnett","2014_babip":"0.302","2013_babip":"0.305"},{"name":"Kyle Lohse","2014_babip":"0.268","2013_babip":"0.276"},{"name":"R.A. Dickey","2014_babip":"0.263","2013_babip":"0.265"},{"name":"John Lackey","2014_babip":"0.305","2013_babip":"0.281"},{"name":"Dan Haren","2014_babip":"0.276","2013_babip":"0.302"},{"name":"Zack Greinke","2014_babip":"0.311","2013_babip":"0.276"},{"name":"Clayton Kershaw","2014_babip":"0.278","2013_babip":"0.231"},{"name":"Jorge de la Rosa","2014_babip":"0.263","2013_babip":"0.303"},{"name":"Jeremy Guthrie","2014_babip":"0.294","2013_babip":"0.296"},{"name":"Adam Wainwright","2014_babip":"0.267","2013_babip":"0.305"},{"name":"Lance Lynn","2014_babip":"0.290","2013_babip":"0.314"},{"name":"Rick Porcello","2014_babip":"0.298","2013_babip":"0.315"},{"name":"Max Scherzer","2014_babip":"0.315","2013_babip":"0.239"},{"name":"David Price","2014_babip":"0.306","2013_babip":"0.298"},{"name":"Ervin Santana","2014_babip":"0.319","2013_babip":"0.267"},{"name":"Jeff Samardzija","2014_babip":"0.283","2013_babip":"0.314"},{"name":"Hiroki Kuroda","2014_babip":"0.279","2013_babip":"0.282"},{"name":"C.J. Wilson","2014_babip":"0.306","2013_babip":"0.300"},{"name":"Edinson Volquez","2014_babip":"0.263","2013_babip":"0.325"},{"name":"Jordan Zimmermann","2014_babip":"0.302","2013_babip":"0.271"},{"name":"Felix Hernandez","2014_babip":"0.238","2013_babip":"0.313"},{"name":"Jon Lester","2014_babip":"0.299","2013_babip":"0.300"},{"name":"Cole Hamels","2014_babip":"0.295","2013_babip":"0.295"},{"name":"Chris Tillman","2014_babip":"0.267","2013_babip":"0.269"},{"name":"Madison Bumgarner","2014_babip":"0.296","2013_babip":"0.231"},{"name":"Kyle Kendrick","2014_babip":"0.290","2013_babip":"0.306"},{"name":"Scott Feldman","2014_babip":"0.291","2013_babip":"0.238"},{"name":"Julio Teheran","2014_babip":"0.267","2013_babip":"0.288"},{"name":"Ian Kennedy","2014_babip":"0.315","2013_babip":"0.295"},{"name":"James Shields","2014_babip":"0.295","2013_babip":"0.298"},{"name":"Wily Peralta","2014_babip":"0.295","2013_babip":"0.293"},{"name":"Eric Stults","2014_babip":"0.296","2013_babip":"0.302"},{"name":"Yovani Gallardo","2014_babip":"0.294","2013_babip":"0.299"},{"name":"Justin Verlander","2014_babip":"0.317","2013_babip":"0.316"},{"name":"Wade Miley","2014_babip":"0.317","2013_babip":"0.296"},{"name":"Doug Fister","2014_babip":"0.262","2013_babip":"0.332"},{"name":"Bud Norris","2014_babip":"0.279","2013_babip":"0.333"},{"name":"Travis Wood","2014_babip":"0.320","2013_babip":"0.238"},{"name":"Mike Leake","2014_babip":"0.298","2013_babip":"0.285"},{"name":"Stephen Strasburg","2014_babip":"0.315","2013_babip":"0.263"},{"name":"Shelby Miller","2014_babip":"0.236","2013_babip":"0.280"},{"name":"Chris Sale","2014_babip":"0.280","2013_babip":"0.289"},{"name":"Jose Quintana","2014_babip":"0.318","2013_babip":"0.283"},{"name":"Hisashi Iwakuma","2014_babip":"0.287","2013_babip":"0.232"}];



				var babip_spark = d3.select("#babip_spark")
					.append("svg")
					.attr("width",100)
					.attr("height",25);

				var babip_y = d3.scale.linear()
					.domain([.23,.34])
					.range([25,0]);


				var babip_line = babip_spark
					.append("line")
					.attr("x1",0)
					.attr("x2",100)
					.attr("y1",babip_y(.23))
					.attr("y2",babip_y(.34))
					.attr("stroke-width",2)
					.attr("stroke","blue");


				var real_scatter = d3.select("#real_babip_scatter")
					.append("svg")
					.attr("width",800)
					.attr("height",500);

				var real_circles = real_scatter.selectAll("circle")
					.data(babip_data)
					.enter()
					.append("circle")
					.attr("cx",function(d) { return example_x(d['2013_babip'])})
					.attr("cy",function(d) { return example_y(d['2014_babip'])})
					.attr("r",3)
					.attr("cursor","pointer")
					.on('mouseover',function(d) {
						d3.select(this).transition().attr("r",5);
						$("#tooltip_name").html(d.name);
						$("#2013_babip").html(d['2013_babip']);
						$("#2014_babip").html(d['2014_babip']);
						babip_line.attr("y1",babip_y(d['2013_babip']));
						babip_line.attr("y2",babip_y(d['2014_babip']));
						console.log(.5 * $("#tooltip").height());
						var xp = d3.event.pageX + 15;
						var yp = d3.event.pageY - $("#tootip").height();
						$("#tooltip").show().css({'left':xp,'top':yp});
					})
					.on('mouseout',function() {
						d3.select(this).transition().attr("r",3);
						$("#tooltip").hide();
					});



				real_scatter
					.append("text")
					.attr("x",25)
					.attr("y",50)
					.attr("class","chart_title")
					.text("Actual Data");



				real_scatter.append("g")
					.call(example_x_axis)
					.attr("class","axis")
					.attr("transform","translate(0,300)");


				real_scatter.append("g")
					.call(example_y_axis)
					.attr("class","axis")
					.attr("transform","translate(100,0)");

				real_scatter.append("g")
					.call(r_axis)
					.attr("class","axis")
					.attr("transform","translate(400,0)");



				real_scatter
					.append("circle")
					.attr("cx",400)
					.attr("cy",r_values(.21))
					.attr("fill","red")
					.attr("r",4);


				real_scatter
					.append("text")
					.attr("y",310)
					.attr("x",405)
					.attr("font-size","10pt")
					.attr("opacity",.79)
					.text("Totally Random");


				real_scatter
					.append("text")
					.attr("y",100)
					.attr("x",405)
					.attr("font-size","10pt")
					.attr("opacity",.21)
					.text("Perfectly Correlated")





			});


			function random_num(min,max) {
				return Math.random() * (max - min) + min ;
			}
