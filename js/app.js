//Variables that stablish the size of the SVG element
var margin={top: 10, left: 10, bottom: 10, right: 10};
var width1=parseInt(d3.select('#map_container').style('width'));
var width=width1-margin.left-margin.right;
var mapRatio= .445;
var height=width*mapRatio;

//Color scale
var color=d3.scaleThreshold()
	.domain([ -0.5, 0.5, 2, 5, 7.5, 8.5])
	.range(["#E1E1E1", "#979797", "#C4F7CB", "#98CB9F", "#6C9F74", "#407349", "#14481E"]);


//SVG Creation
var svg = d3.select( "#map_container" )
	.append( "svg" )
	.attr( "width", width )
	.attr( "height", height )
	.attr("class", "map");


//********************************************* PROJECTIONS ************************************************************//

//*************************************** GENERAL ***********************************************************//
var AzEqualArea = d3.geoAzimuthalEqualArea()
	.scale( width*3.5 )
	.rotate( [0,0] )
	.center( [16.7, 50.8] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath = d3.geoPath()
	.projection( AzEqualArea );


//*************************************** HAMBURG ***********************************************************//
var AzEqualArea_hamburg = d3.geoAzimuthalEqualArea()
	.scale( width*15 )
	.rotate( [0,0] )
	.center( [11.5, 53.4] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath_hamburg = d3.geoPath()
	.projection( AzEqualArea_hamburg );


//*************************************** Rheinland ***********************************************************//
var AzEqualArea_Rheinland = d3.geoAzimuthalEqualArea()
	.scale( width*12 )
	.rotate( [0,0] )
	.center( [9.2, 49.9] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath_Rheinland = d3.geoPath()
	.projection( AzEqualArea_Rheinland );


//*************************************** Bayern ***********************************************************//
var AzEqualArea_Bayern = d3.geoAzimuthalEqualArea()
	.scale( width*6.8 )
	.rotate( [0,0] )
	.center( [14.6, 48.8] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath_Bayern = d3.geoPath()
	.projection( AzEqualArea_Bayern );


//*************************************** Nordrhein ***********************************************************//
var AzEqualArea_Nordrhein = d3.geoAzimuthalEqualArea()
	.scale( width*9.5 )
	.rotate( [0,0] )
	.center( [10, 51.5] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath_Nordrhein = d3.geoPath()
	.projection( AzEqualArea_Nordrhein );


//*************************************** Baden-Württemberg ***********************************************************//
var AzEqualArea_Baden = d3.geoAzimuthalEqualArea()
	.scale( width*11 )
	.rotate( [0,0] )
	.center( [11, 48.6] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath_Baden = d3.geoPath()
	.projection( AzEqualArea_Baden );


//*************************************** Hessen ***********************************************************//
var AzEqualArea_Hessen = d3.geoAzimuthalEqualArea()
	.scale( width*11.5 )
	.rotate( [0,0] )
	.center( [11, 50.5] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath_Hessen = d3.geoPath()
	.projection( AzEqualArea_Hessen );


//*************************************** Niedersachsen ***********************************************************//
var AzEqualArea_Niedersachsen = d3.geoAzimuthalEqualArea()
	.scale( width*7.4 )
	.rotate( [0,0] )
	.center( [12.15, 52.5] )
	.translate( [width/2,height/2] );

//GeoPath that aplies the projection to all elements
var geoPath_Niedersachsen = d3.geoPath()
	.projection( AzEqualArea_Niedersachsen );


//***************************************************BASEMAP***************************************************************
var zoom=false;
//g element containing europe polygons with renewable electricity values
var regions = svg.append( "g" ).attr("id", "regions");

//Create path elements that will contain each polygon
regions.selectAll( "path" )
	.data(regions_json.features)
	.enter()
	.append("path")
	.attr("fill", function(d) {
			return color(d.properties.color)
			})
	.attr("stroke", "#FFF")
	.attr("stroke-width", 1)
	.on("mouseover", function(d) {
		if(d.properties.color>0){
			d3.select(this.parentNode.appendChild(this)).attr("stroke", "#000").attr("stroke-width", 2);
		}
	})
	.on("mouseout", function(d) {
		if(d.properties.color>0){
			d3.select(this).attr("stroke", "#FFF").attr("stroke-width", 1);
		}
	})
	.on("click", function(d) {
		generate_cards(d.properties.name)
		if(zoom==false) {
			if(d.properties.name=="Hamburg") {
				zoom=true;
				d3.selectAll("path")
					.attr( "d", geoPath_hamburg );
				update_companies(AzEqualArea_hamburg);
			}

			if(d.properties.name=="Rheinland-Pfalz") {
				zoom=true;
				d3.selectAll("path")
					.attr( "d", geoPath_Rheinland );
				update_companies(AzEqualArea_Rheinland);
			}

			if(d.properties.name=="Bayern") {
				zoom=true;
				d3.selectAll("path")
					.attr( "d", geoPath_Bayern );
				update_companies(AzEqualArea_Bayern);
			}

			if(d.properties.name=="Nordrhein-Westfalen") {
				zoom=true;
				d3.selectAll("path")
					.attr( "d", geoPath_Nordrhein );
				update_companies(AzEqualArea_Nordrhein);
			}

			if(d.properties.name=="Baden-Württemberg") {
				zoom=true;
				d3.selectAll("path")
					.attr( "d", geoPath_Baden );
				update_companies(AzEqualArea_Baden);
			}

			if(d.properties.name=="Hessen") {
				zoom=true;
				d3.selectAll("path")
					.attr( "d", geoPath_Hessen );
				update_companies(AzEqualArea_Hessen);
			}

			if(d.properties.name=="Niedersachsen") {
				zoom=true;
				d3.selectAll("path")
					.attr( "d", geoPath_Niedersachsen );
				update_companies(AzEqualArea_Niedersachsen);
			}
			Plotly.newPlot('myDiv', dataABC, layout);

		}
		else {
			zoom=false;
			d3.selectAll("path")
				.attr( "d", geoPath );
			update_companies(AzEqualArea);
			Plotly.newPlot('myDiv', dataABC, layout);
		}
	})
	.attr( "d", geoPath );


//*****************************************************SYMBOLS***************************************************************
selection="Sector";
var color_symbols = d3.scaleOrdinal()
			  .domain(['Alkali metal/mining','Automobile','Aviation','Bank','Chemistry','Chemistry/health','Chemistry/pharma','Consumer goods','Cosmetics','Finance','Gas/plant construction','Health/pharma','Insurance','Logistic','Machine construction','Material producer','Pharma','Provider','Semiconductor','Software','Sporting goods','Steel','Technology','Telecommunication','Trade',                     'Automobile','Building','Industry','Insurance & finance','Logistic','Pharmaceutical industry','Provision','Software development','Technology','Trade','Traffic'])
			  .range(['#a6cee3',                '#1f78b4','#b2df8a','#33a02c','#fb9a99',     '#e31a1c',           '#fdbf6f',       '#ff7f00',    '#cab2d6', '#6a3d9a'      ,'#ffff99'           ,'#b15928',     '#8dd3c7', '#ffffb3',      '#bebada'             ,'#fb8072',    '#80b1d3','#fdb462',  '#b3de69',     '#fccde5',    '#053061',   '#bc80bd', '#ccebc5',   '#ffed6f',      '#b2182b',                       '#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99']);

var color_uppersector = d3.scaleOrdinal()
  .domain(['Automobile','Building','Industry','Insurance & finance','Logistic','Pharmaceutical industry','Provision','Software development','Technology','Trade','Traffic'])
  .range(['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99']);

//Circle elements containing symbols with circle values
var companies=svg.append("g").attr("id", "companies");
var infinity=999999999;
companies.selectAll("circle")
	.data(companies_json.features)
	.enter()
	.append("circle")
	.attr("class", "symbol")
	.attr("id", function(d){
		return d.properties.Nombre;
	})
	.attr("cx", function(d) {
			return AzEqualArea(d.geometry.coordinates)[0];
		})
	.attr("cy", function(d) {
			return AzEqualArea(d.geometry.coordinates)[1]-Math.sqrt(((width/15)/(2.1*Math.PI))*d.properties.Profits);
		})
	.attr("r", function(d) {
			return Math.sqrt(((width/15)/(2.1*Math.PI))*d.properties.Profits);
		})
	.attr("fill", function(d) {
			return color_symbols(d.properties[selection])
			})
	.attr("stroke", "#000")
	.attr("z-index", function(d) {
			return 100-d.properties.Profits;
		});

function update_companies(projection){
	companies.selectAll("circle").remove();
	open=false;

	companies.selectAll("circle")
		.data(companies_json.features)
		.enter()
		.append("circle")
		.attr("class", "symbol")
		.attr("id", function(d){
			return d.properties.Nombre;
		})
		.attr("cx", function(d) {
				return projection(d.geometry.coordinates)[0];
			})
		.attr("cy", function(d) {
				return projection(d.geometry.coordinates)[1]-Math.sqrt(((width/15)/(2.1*Math.PI))*d.properties.Profits);
			})
		.attr("r", function(d) {
				return Math.sqrt(((width/15)/(2.1*Math.PI))*d.properties.Profits);
			})
		.attr("fill", function(d) {
				return color_symbols(d.properties[selection])
				})
		.attr("stroke", "#000")
		.attr("z-index", function(d) {
				return 100-d.properties.Profits;
			})
		.on("mouseover", function(d){
			d3.select(this).attr("stroke", "#FFF")
			d3.select(this).append("svg:title").text(d.properties.Profits)
		})
		.on("mouseout", function(d){
			d3.select(this).attr("stroke", "#000")
		})
		.on("click", function(d){
			if(open==false && zoom==true){
				open=true;
				//*************************** BAYERN *******************************//
				if(d.properties.Region=="Bayern" && (d.properties.Nombre=="Infineon" || d.properties.Nombre=="Linde" || d.properties.Nombre=="MAN" || d.properties.Nombre=="Munich_RE" || d.properties.Nombre=="BMW" || d.properties.Nombre=="Allianz")){
					d3.selectAll("#Infineon")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
					d3.selectAll("#Linde")
						.transition().duration(500)
						.attr("transform", "translate(50,30)");
					d3.selectAll("#MAN")
						.transition().duration(500)
						.attr("transform", "translate(50,-30)");
					d3.selectAll("#Munich_RE")
						.transition().duration(500)
						.attr("transform", "translate(0,-50)");
					d3.selectAll("#BMW")
						.transition().duration(500)
						.attr("transform", "translate(-70,-40)");
					d3.selectAll("#Allianz")
						.transition().duration(500)
						.attr("transform", "translate(-70,70)");
				}
				//*************************** HESSEN *******************************//
				if(d.properties.Region=="Hessen" && (d.properties.Nombre=="Deutsche_Börse" || d.properties.Nombre=="Commerzbank" || d.properties.Nombre=="Deutsche_Bank")){
					d3.selectAll("#Deutsche_Börse")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
					d3.selectAll("#Commerzbank")
						.transition().duration(500)
						.attr("transform", "translate(30,-30)");
					d3.selectAll("#Deutsche_Bank")
						.transition().duration(500)
						.attr("transform", "translate(-40,10)");
				}
				if(d.properties.Region=="Hessen" && (d.properties.Nombre=="Fresenius_Medical_Care" || d.properties.Nombre=="Fresenius")){
					d3.selectAll("#Fresenius_Medical_Care")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
					d3.selectAll("#Fresenius")
						.transition().duration(500)
						.attr("transform", "translate(30,-30)");
				}
				//*************************** NORDHEIN-WESTFALEN *******************************//
				if(d.properties.Region=="Nordrhein-Westfalen" && (d.properties.Nombre=="Henkel" || d.properties.Nombre=="ThyssenKrupp" || d.properties.Nombre=="Metro" || d.properties.Nombre=="Eon")){
					d3.selectAll("#Henkel")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
					d3.selectAll("#ThyssenKrupp")
						.transition().duration(500)
						.attr("transform", "translate(-50,50)");
					d3.selectAll("#Metro")
						.transition().duration(500)
						.attr("transform", "translate(-90,-20)");
					d3.selectAll("#Eon")
						.transition().duration(500)
						.attr("transform", "translate(-30,-90)");
				}
				if(d.properties.Region=="Nordrhein-Westfalen" && (d.properties.Nombre=="Deutsche_Lufthansa" || d.properties.Nombre=="Bayer")){
					d3.selectAll("#Deutsche_Lufthansa")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
					d3.selectAll("#Bayer")
						.transition().duration(500)
						.attr("transform", "translate(20,-20)");
				}
				if(d.properties.Region=="Nordrhein-Westfalen" && (d.properties.Nombre=="Deutsche_Post" || d.properties.Nombre=="Deutsche_Telekom")){
					d3.selectAll("#Deutsche_Post")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
					d3.selectAll("#Deutsche_Telekom")
						.transition().duration(500)
						.attr("transform", "translate(50,-50)");
				}
				
			}
			else {
				open=false;
				if(d.properties.Region=="Bayern" && (d.properties.Nombre=="Infineon" || d.properties.Nombre=="Linde" || d.properties.Nombre=="MAN" || d.properties.Nombre=="Munich_RE" || d.properties.Nombre=="BMW" || d.properties.Nombre=="Allianz")){
					d3.selectAll("circle")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
				}
				if(d.properties.Region=="Hessen" && (d.properties.Nombre=="Deutsche_Börse" || d.properties.Nombre=="Commerzbank" || d.properties.Nombre=="Deutsche_Bank")){
					d3.selectAll("circle")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
				}
				if(d.properties.Region=="Hessen" && (d.properties.Nombre=="Fresenius_Medical_Care" || d.properties.Nombre=="Fresenius")){
					d3.selectAll("circle")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
				}
				if(d.properties.Region=="Nordrhein-Westfalen" && (d.properties.Nombre=="Henkel" || d.properties.Nombre=="ThyssenKrupp" || d.properties.Nombre=="Metro" || d.properties.Nombre=="Eon")){
					d3.selectAll("circle")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
				}
				if(d.properties.Region=="Nordrhein-Westfalen" && (d.properties.Nombre=="Deutsche_Lufthansa" || d.properties.Nombre=="Bayer")){
					d3.selectAll("circle")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
				}
				if(d.properties.Region=="Nordrhein-Westfalen" && (d.properties.Nombre=="Deutsche_Post" || d.properties.Nombre=="Deutsche_Telekom")){
					d3.selectAll("circle")
						.transition().duration(500)
						.attr("transform", "translate(0,0)");
				}
			}
			
		});
};


//*****************************************************LEGEND***************************************************************
//Choropleth legend
var chorop_legend = d3.select('#legend')
  	.append('ul')
    .attr('class', 'list-inline');

var keys = chorop_legend.selectAll('li')
    .data(color.range());
    
var chorop = ["ND", "0", "1", "3", "7", "8", "9"];

keys.enter()
	.append('li')
    .attr('class', 'key')
    .style('border-top-color', String)
    .text(function(d, i){
    	return chorop[i];
    });


//Sector legend
sector_names = ['Alkali metal/mining','Automobile','Aviation','Bank','Chemistry','Chemistry/health','Chemistry/pharma','Consumer goods','Cosmetics','Finance','Gas/plant construction','Health/pharma','Insurance','Logistic','Machine construction','Material producer','Pharma','Provider','Semiconductor','Software','Sporting goods','Steel','Technology','Telecommunication','Trade'];
symbol_color=['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928','#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#053061','#bc80bd','#ccebc5','#ffed6f','#b2182b'];

//title sector
d3.select('#legend')
	.append("h2")
	.attr("id", "legend_sector_title");
document.getElementById("legend_sector_title").innerHTML="Sector Type";

var symbol_color_legend_sector = d3.select('#legend')
  	.append('ul')
  	.attr('id', 'symbol_color_legend_sector')
    .attr('class', 'list-inline');

keys = symbol_color_legend_sector
	.selectAll('li')
    .data(symbol_color);
    

keys.enter()
	.append('li')
    .attr('class', 'key')
    .style('border-top-color', String)
    .text(function(d, i){
    	return sector_names[i];
    });

uppersector = ['Automobile','Building','Industry','Insurance & finance','Logistic','Pharmaceutical industry','Provision','Software development','Technology','Trade','Traffic'];
symbol_color=['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99'];
var symbol_color_legend_uppersector = d3.select('#legend')
  	.append('ul')
  	.attr('id', 'symbol_color_legend_uppersector')
    .attr('class', 'list-inline');

keys = symbol_color_legend_uppersector
	.selectAll('li')
    .data(symbol_color);
    

keys.enter()
	.append('li')
    .attr('class', 'key')
    .style('border-top-color', String)
    .text(function(d, i){
    	return uppersector[i];
    });

var margin_rstat={top: 10, left: 10, bottom: 10, right: 10}
var width_rstat1=parseInt(d3.select('#legend').style('width'))
var width_rstat=width1-margin.left-margin.right
var mapRatio= .1
var height_rstat=width_rstat*mapRatio;

var max_circle=126.9;
var min_circle=2.1;

d3.select('#legend')
	.append("h2")
	.attr("id", "legend_circle_title");
document.getElementById("legend_circle_title").innerHTML="Company Turnover (Millions of €)";

var circle_legend=d3.select("#legend")
	.append("svg")
	.attr( "width", width_rstat )
	.attr( "height", height_rstat/1.4 )
	.attr("id", "circles")
	.attr("class", "circles");

circle_legend
	.append("circle")
	.attr("cx", function(d) {
			return width_rstat/4.5+((width/1000)*max_circle/10);
		})
	.attr("cy", function(d) {
			return height_rstat/4.5+((width/1000)*max_circle/10);
		})
	.attr("r", function(d) {
			return Math.sqrt(((width/15)/(2.1*Math.PI))*max_circle);
		})
	.attr("fill", "#81BEF7")
	.attr("stroke", "#000");

circle_legend
	.append("circle")
	.attr("cx", function(d) {
			return width_rstat/4.4+((width/1000)*8);
		})
	.attr("cy", function(d) {
			return height_rstat/3.14+((width/1000)*8);
		})
	.attr("r", function(d) {
			return Math.sqrt(((width/15)/(2.1*Math.PI))*80);
		})
	.attr("fill", "#81BEF7")
	.attr("stroke", "#000");

circle_legend
	.append("circle")
	.attr("cx", function(d) {
			return width_rstat/4.32+((width/1000)*4);
		})
	.attr("cy", function(d) {
			return height_rstat/2.4+((width/1000)*4);
		})
	.attr("r", function(d) {
			return Math.sqrt(((width/15)/(2.1*Math.PI))*40);
		})
	.attr("fill", "#81BEF7")
	.attr("stroke", "#000");

circle_legend
	.append("circle")
	.attr("cx", function(d) {
			return width_rstat/4.285+((width/1000)*min_circle);
		})
	.attr("cy", function(d) {
			return height_rstat/1.82+((width/1000)*min_circle);
		})
	.attr("r", function(d) {
			return Math.sqrt(((width/15)/(2.1*Math.PI))*min_circle);
		})
	.attr("fill", "#81BEF7")
	.attr("stroke", "#000");

circle_legend
	.append("line")
	.attr("x1", function(d) {
			return width_rstat/4.5+((width/1000)*max_circle/10);
		})
	.attr("y1", function(d) {
			return height_rstat/3.15-Math.sqrt(((width/15)/(2.1*Math.PI))*100);
		})
	.attr("x2", function(d) {
			return width_rstat/4.5+((width/1000)*max_circle/10)+width_rstat/20;
		})
	.attr("y2", function(d) {
			return height_rstat/3.15-Math.sqrt(((width/15)/(2.1*Math.PI))*100);
		})
	.style("stroke", "#000");

circle_legend
	.append("text")
	.attr("x", function(d) {
			return width_rstat/4.5+((width/1000)*max_circle/10)+width_rstat/20;
		})
	.attr("y", function(d) {
			return height_rstat/3-Math.sqrt(((width/15)/(2.1*Math.PI))*100);
		})
	.text(max_circle.toPrecision(5)+" Millions of €")
	.attr("font-size", "1vw");

circle_legend
	.append("line")
	.attr("x1", function(d) {
			return width_rstat/4.65+((width/1000)*20);
		})
	.attr("y1", function(d) {
			return height_rstat/2.5-Math.sqrt(((width/15)/(2.1*Math.PI))*80);
		})
	.attr("x2", function(d) {
			return width_rstat/4.65+((width/1000)*20)+width_rstat/20;
		})
	.attr("y2", function(d) {
			return height_rstat/2.5-Math.sqrt(((width/15)/(2.1*Math.PI))*80);
		})
	.style("stroke", "#000");

circle_legend
	.append("text")
	.attr("x", function(d) {
			return width_rstat/4.65+((width/1000)*20)+width_rstat/20;
		})
	.attr("y", function(d) {
			return height_rstat/2.35-Math.sqrt(((width/15)/(2.1*Math.PI))*80);
		})
	.text("20.00"+" Millions of €")
	.attr("font-size", "1vw");

circle_legend
	.append("line")
	.attr("x1", function(d) {
			return width_rstat/4.45+((width/1000)*10);
		})
	.attr("y1", function(d) {
			return height_rstat/2.19-Math.sqrt(((width/15)/(2.1*Math.PI))*40);
		})
	.attr("x2", function(d) {
			return width_rstat/4.45+((width/1000)*10)+width_rstat/20;
		})
	.attr("y2", function(d) {
			return height_rstat/2.19-Math.sqrt(((width/15)/(2.1*Math.PI))*40);
		})
	.style("stroke", "#000");

circle_legend
	.append("text")
	.attr("x", function(d) {
			return width_rstat/4.45+((width/1000)*10)+width_rstat/20;
		})
	.attr("y", function(d) {
			return height_rstat/2.1-Math.sqrt(((width/15)/(2.1*Math.PI))*40);
		})
	.text("10.00"+" Millions of €")
	.attr("font-size", "1vw");

circle_legend
	.append("line")
	.attr("x1", function(d) {
			return width_rstat/4.3+((width/1000)*min_circle);
		})
	.attr("y1", function(d) {
			return height_rstat/1.76-Math.sqrt(((width/15)/(2.1*Math.PI))*min_circle);
		})
	.attr("x2", function(d) {
			return width_rstat/4.3+((width/1000)*min_circle)+width_rstat/20;
		})
	.attr("y2", function(d) {
			return height_rstat/1.76-Math.sqrt(((width/15)/(2.1*Math.PI))*min_circle);
		})
	.style("stroke", "#000");

circle_legend
	.append("text")
	.attr("x", function(d) {
			return width_rstat/4.3+((width/1000)*min_circle)+width_rstat/20;
		})
	.attr("y", function(d) {
			return height_rstat/1.7-Math.sqrt(((width/15)/(2.1*Math.PI))*min_circle);
		})
	.text(min_circle.toPrecision(3)+" Millions of €")
	.attr("font-size", "1vw");


//************************************* SELECTION OPTIONS ********************************************//
d3.select("#select_statistics").on("change",update_barchart_visibility);
			update_barchart_visibility();
function update_barchart_visibility(){
	if(d3.select("#select_statistics").property("checked")){
		d3.selectAll("#general").style("display", "block");
	}
	else{
		d3.selectAll("#general").style("display", "none");
	}
}

d3.select("#select_cards").on("change",update_cards_visibility);
			update_cards_visibility();
function update_cards_visibility(){
	if(d3.select("#select_cards").property("checked")){
		d3.selectAll("#cards").style("display", "block");
		alert("Click on a Region for generating the information cards")
	}
	else{
		d3.selectAll("#cards").style("display", "none");
	}
}


//********************************* SECTOR / UPPER SECTOR *******************************************//
d3.select("#radio_button").on("change",update_right_section);
			update_right_section();
			
function update_right_section(){
	if(d3.select('input[name="choose"]:checked').node().value=="Sector_option"){
		showABC()
		selection="Sector"
		sector_names = ['Alkali metal/mining','Automobile','Aviation','Bank','Chemistry','Chemistry/health','Chemistry/pharma','Consumer goods','Cosmetics','Finance','Gas/plant construction','Health/pharma','Insurance','Logistic','Machine construction','Material producer','Pharma','Provider','Semiconductor','Software','Sporting goods','Steel','Technology','Telecommunication','Trade'];
		symbol_color=['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928','#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#053061','#bc80bd','#ccebc5','#ffed6f','#b2182b'];
		d3.selectAll(".symbol")
			.transition().duration(500)
			.attr("fill", function(d) {
				return color_symbols(d.properties.Sector);
				})
		d3.selectAll('#symbol_color_legend_sector')
    		.style('display','block')
    	d3.selectAll('#symbol_color_legend_uppersector')
    		.style('display','none')
	}
	else {
		showABC_upper()
		selection="Upper_sectors"
		uppersector = ['Automobile','Building','Industry','Insurance & finance','Logistic','Pharmaceutical industry','Provision','Software development','Technology','Trade','Traffic'];
		symbol_color=['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99'];
		d3.selectAll(".symbol")
			.transition().duration(500)
			.attr("fill", function(d) {
				return color_symbols(d.properties.Upper_sectors);
				})
		d3.selectAll('#symbol_color_legend_sector')
    		.style('display','none')
    	d3.selectAll('#symbol_color_legend_uppersector')
    		.style('display','block')
	}
}

function generate_cards(region){
	d3.selectAll("#card").remove();
	for (i=0; i<Object.keys(companies_json.features).length; i++) {
		check_region=companies_json.features[i].properties.Region;
		if(region==check_region){
			//Card container
			var card=d3.selectAll("#card_container")
						.append("section")
						.attr("id", "card")
						.attr("class", "card");
			card.append("h2").attr("id", "card_title_"+companies_json.features[i].properties.Nombre);
			document.getElementById("card_title_"+companies_json.features[i].properties.Nombre).innerHTML="Company Name: "+companies_json.features[i].properties.Nombre;
			
			//Left side of the card
			var left_card=card.append("section")
						.attr("id", "left_card")
						.attr("class", "left_card");
			//Sector and upper sector
			var sector=left_card.append("div")
						.attr("id", "sector")
						.attr("class", "sector");
			sector.append("h3").attr("id", "sector_title_"+companies_json.features[i].properties.Nombre);
			document.getElementById("sector_title_"+companies_json.features[i].properties.Nombre).innerHTML="Sector: "+companies_json.features[i].properties.Sector;
			sector.append("h3").attr("id", "uppersector_title_"+companies_json.features[i].properties.Nombre);
			document.getElementById("uppersector_title_"+companies_json.features[i].properties.Nombre).innerHTML="Upper-Sector: "+companies_json.features[i].properties.Upper_sectors;
			//Region and city
			var location=left_card.append("div")
						.attr("id", "location")
						.attr("class", "location");
			location.append("h3").attr("id", "region_title_"+companies_json.features[i].properties.Nombre);
			document.getElementById("region_title_"+companies_json.features[i].properties.Nombre).innerHTML="Region: "+companies_json.features[i].properties.Region;
			location.append("h3").attr("id", "city_title_"+companies_json.features[i].properties.Nombre);
			document.getElementById("city_title_"+companies_json.features[i].properties.Nombre).innerHTML="City: "+companies_json.features[i].properties.City;
			
			//Right side of the card
			var right_card=card.append("section")
						.attr("id", "right_card")
						.attr("class", "right_card");
			//Dax value
			var dax=right_card.append("div")
						.attr("id", "dax")
						.attr("class", "dax");
			dax.append("h3").attr("id", "Dax_value_"+companies_json.features[i].properties.Nombre);
			document.getElementById("Dax_value_"+companies_json.features[i].properties.Nombre).innerHTML="Company Turnover: "+companies_json.features[i].properties.Profits+" Millions of €";

			//Symbol
			var svg_card = dax
				.append( "svg" )
				.attr( "width", width/9 )
				.attr( "height", height/6.9 )
				.attr("class", "map");
						var symbol_svg=dax.append("g").attr("id", "companies");
			svg_card.append("circle")
				.attr("class", "symbol_card")
				.attr("cx", width/10)
				.attr("cy", height/15)
				.attr("r", function(d) {
						return Math.sqrt(((width/15)/(2.1*Math.PI))*companies_json.features[i].properties.Profits);
					})
				.attr("fill", function(d) {
						if(d3.select('input[name="choose"]:checked').node().value=="Sector_option"){
							return color_symbols(companies_json.features[i].properties.Sector)
						}
						else{
							return color_symbols(companies_json.features[i].properties.Upper_sectors)
						}
						
						})
				.attr("stroke", "#000");
				}
	}

}

$(document).ready(function(){
	alert('Click on a Region to Zoom In, after that click on the overlapping symbols to spread them. Hover the symbols to see the DAX value.');
});