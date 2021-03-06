// Last updated August 2010 by Simon Sarris
// www.simonsarris.com
// sarris@acm.org
//
// Free to use and distribute at will
// So long as you are nice to people, etc
var TYPE = {
	INTRO: 0,
	PIECHART: 1,
	TWOAXIS: 2,
	SLIDER:3,
	FINAL:4
};

var colors = {
	white: "#FFFFFF",
	green: "#228B22",
	cyan: "#00FFFF",
	yellow: "#FFFF00",
	orange: "#FFC02B",
	red: ""
};

document.onselectstart = function(){ return false; };

s1p = 400; //slider 1 position
s2p = 400; //slider 2 position
// pipercent = 50;
var sliderSubmitCheck = false;
var graphSubmit = false;
var savePath = [];

function addText(text, xloc, yloc, style){
	var newElement = $("<p>", {class:"notation"});
	newElement.text(text);
	newElement.css({"left":xloc.toString()+"px", "top": yloc.toString()+"px"});
	$("body").append(newElement);
	questionTexts.push(newElement);
	if(style){
		newElement.css(style);
	}
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

//Box object to hold data for all drawn rects
function Box() {
	this.x = 0;
	this.y = 0;
	this.w = 1; // default width and height?
	this.h = 1;
	this.fill = '#444444';
}

//Initialize a new Box, add it, and invalidate the canvas
function addRect(x, y, w, h, fill) {
	var rect = new Box;
	rect.x = x;
	rect.y = y;
	rect.w = w
	rect.h = h;
	rect.fill = fill;
	boxes.push(rect);
	invalidate();
}

function Path() {
	this.deltas = [];
	this.xoffset = 0;
	this.yoffset = 0;
}

function addPath(deltas){
	var path = new Path();
	path.deltas = deltas;
	paths.push(path);
	invalidate();
}
// holds all our rectangles
var boxes = [];
var questionTexts = [];

var paths = [];
var square = [{"x1":461.6000061035156,"y1":307.3999938964844,"x2":462.6000061035156,"y2":308.3999938964844},{"x1":462.6000061035156,"y1":308.3999938964844,"x2":462,"y2":339},{"x1":462,"y1":339,"x2":462,"y2":349},{"x1":462,"y1":349,"x2":462,"y2":357},{"x1":462,"y1":357,"x2":462,"y2":362},{"x1":462,"y1":362,"x2":461.20001220703125,"y2":367.3999938964844},{"x1":461.20001220703125,"y1":367.3999938964844,"x2":460.79998779296875,"y2":371.3999938964844},{"x1":460.79998779296875,"y1":371.3999938964844,"x2":460,"y2":375},{"x1":460,"y1":375,"x2":460.79998779296875,"y2":378.20001220703125},{"x1":460.79998779296875,"y1":378.20001220703125,"x2":460.79998779296875,"y2":380.6000061035156},{"x1":460.79998779296875,"y1":380.6000061035156,"x2":460.79998779296875,"y2":382.6000061035156},{"x1":460.79998779296875,"y1":382.6000061035156,"x2":460.79998779296875,"y2":383.79998779296875},{"x1":460.79998779296875,"y1":383.79998779296875,"x2":460.79998779296875,"y2":384.6000061035156},{"x1":460.79998779296875,"y1":384.6000061035156,"x2":460.79998779296875,"y2":385.3999938964844},{"x1":460.79998779296875,"y1":385.3999938964844,"x2":461.6000061035156,"y2":386.20001220703125},{"x1":461.6000061035156,"y1":386.20001220703125,"x2":462,"y2":387},{"x1":462,"y1":387,"x2":464,"y2":387},{"x1":464,"y1":387,"x2":466,"y2":387},{"x1":466,"y1":387,"x2":468.3999938964844,"y2":388.20001220703125},{"x1":468.3999938964844,"y1":388.20001220703125,"x2":470.79998779296875,"y2":388.20001220703125},{"x1":470.79998779296875,"y1":388.20001220703125,"x2":473.20001220703125,"y2":387.79998779296875},{"x1":473.20001220703125,"y1":387.79998779296875,"x2":476,"y2":387},{"x1":476,"y1":387,"x2":480,"y2":386},{"x1":480,"y1":386,"x2":486.79998779296875,"y2":386.20001220703125},{"x1":486.79998779296875,"y1":386.20001220703125,"x2":492.3999938964844,"y2":386.20001220703125},{"x1":492.3999938964844,"y1":386.20001220703125,"x2":496.3999938964844,"y2":386.20001220703125},{"x1":496.3999938964844,"y1":386.20001220703125,"x2":501.20001220703125,"y2":386.20001220703125},{"x1":501.20001220703125,"y1":386.20001220703125,"x2":506,"y2":386},{"x1":506,"y1":386,"x2":510,"y2":387},{"x1":510,"y1":387,"x2":513.2000122070312,"y2":387.3999938964844},{"x1":513.2000122070312,"y1":387.3999938964844,"x2":516,"y2":388},{"x1":516,"y1":388,"x2":518,"y2":389},{"x1":518,"y1":389,"x2":520.7999877929688,"y2":390.20001220703125},{"x1":520.7999877929688,"y1":390.20001220703125,"x2":522.7999877929688,"y2":391.3999938964844},{"x1":522.7999877929688,"y1":391.3999938964844,"x2":524.4000244140625,"y2":392.20001220703125},{"x1":524.4000244140625,"y1":392.20001220703125,"x2":526,"y2":393},{"x1":526,"y1":393,"x2":527.5999755859375,"y2":394.20001220703125},{"x1":527.5999755859375,"y1":394.20001220703125,"x2":528.7999877929688,"y2":394.6000061035156},{"x1":528.7999877929688,"y1":394.6000061035156,"x2":530,"y2":395},{"x1":530,"y1":395,"x2":532,"y2":395},{"x1":532,"y1":395,"x2":533.5999755859375,"y2":394.6000061035156},{"x1":533.5999755859375,"y1":394.6000061035156,"x2":535.2000122070312,"y2":393.79998779296875},{"x1":535.2000122070312,"y1":393.79998779296875,"x2":536.7999877929688,"y2":392.20001220703125},{"x1":536.7999877929688,"y1":392.20001220703125,"x2":538.4000244140625,"y2":389.79998779296875},{"x1":538.4000244140625,"y1":389.79998779296875,"x2":540.4000244140625,"y2":386.20001220703125},{"x1":540.4000244140625,"y1":386.20001220703125,"x2":541.5999755859375,"y2":382.20001220703125},{"x1":541.5999755859375,"y1":382.20001220703125,"x2":542.7999877929688,"y2":378.20001220703125},{"x1":542.7999877929688,"y1":378.20001220703125,"x2":543.5999755859375,"y2":374.6000061035156},{"x1":543.5999755859375,"y1":374.6000061035156,"x2":544,"y2":371},{"x1":544,"y1":371,"x2":544.7999877929688,"y2":366.6000061035156},{"x1":544.7999877929688,"y1":366.6000061035156,"x2":545.2000122070312,"y2":362.20001220703125},{"x1":545.2000122070312,"y1":362.20001220703125,"x2":545.5999755859375,"y2":358.6000061035156},{"x1":545.5999755859375,"y1":358.6000061035156,"x2":545.5999755859375,"y2":354.20001220703125},{"x1":545.5999755859375,"y1":354.20001220703125,"x2":546,"y2":350},{"x1":546,"y1":350,"x2":546,"y2":345},{"x1":546,"y1":345,"x2":546.7999877929688,"y2":336.20001220703125},{"x1":546.7999877929688,"y1":336.20001220703125,"x2":547.2000122070312,"y2":332.6000061035156},{"x1":547.2000122070312,"y1":332.6000061035156,"x2":547.5999755859375,"y2":329.3999938964844},{"x1":547.5999755859375,"y1":329.3999938964844,"x2":548,"y2":326},{"x1":548,"y1":326,"x2":548,"y2":323},{"x1":548,"y1":323,"x2":548,"y2":320},{"x1":548,"y1":320,"x2":548,"y2":318},{"x1":548,"y1":318,"x2":548,"y2":317},{"x1":548,"y1":317,"x2":548,"y2":315},{"x1":548,"y1":315,"x2":547.5999755859375,"y2":314.6000061035156},{"x1":547.5999755859375,"y1":314.6000061035156,"x2":547.5999755859375,"y2":313.79998779296875},{"x1":547.5999755859375,"y1":313.79998779296875,"x2":547,"y2":313},{"x1":547,"y1":313,"x2":546.7999877929688,"y2":312.20001220703125},{"x1":546.7999877929688,"y1":312.20001220703125,"x2":546.4000244140625,"y2":311.3999938964844},{"x1":546.4000244140625,"y1":311.3999938964844,"x2":546,"y2":310},{"x1":546,"y1":310,"x2":545.2000122070312,"y2":309.79998779296875},{"x1":545.2000122070312,"y1":309.79998779296875,"x2":543,"y2":309},{"x1":543,"y1":309,"x2":542,"y2":308},{"x1":542,"y1":308,"x2":539.5999755859375,"y2":307.79998779296875},{"x1":539.5999755859375,"y1":307.79998779296875,"x2":536.7999877929688,"y2":307.3999938964844},{"x1":536.7999877929688,"y1":307.3999938964844,"x2":534,"y2":307},{"x1":534,"y1":307,"x2":532,"y2":306},{"x1":532,"y1":306,"x2":530,"y2":306},{"x1":530,"y1":306,"x2":527.5999755859375,"y2":306.20001220703125},{"x1":527.5999755859375,"y1":306.20001220703125,"x2":525.5999755859375,"y2":305.79998779296875},{"x1":525.5999755859375,"y1":305.79998779296875,"x2":520.7999877929688,"y2":305.3999938964844},{"x1":520.7999877929688,"y1":305.3999938964844,"x2":516.4000244140625,"y2":305.3999938964844},{"x1":516.4000244140625,"y1":305.3999938964844,"x2":512,"y2":305},{"x1":512,"y1":305,"x2":506.79998779296875,"y2":304.6000061035156},{"x1":506.79998779296875,"y1":304.6000061035156,"x2":500,"y2":303},{"x1":500,"y1":303,"x2":494,"y2":303},{"x1":494,"y1":303,"x2":490.3999938964844,"y2":303.3999938964844},{"x1":490.3999938964844,"y1":303.3999938964844,"x2":488.3999938964844,"y2":303.3999938964844},{"x1":488.3999938964844,"y1":303.3999938964844,"x2":486.79998779296875,"y2":303.3999938964844},{"x1":486.79998779296875,"y1":303.3999938964844,"x2":485.6000061035156,"y2":303.3999938964844},{"x1":485.6000061035156,"y1":303.3999938964844,"x2":484.79998779296875,"y2":303.3999938964844},{"x1":484.79998779296875,"y1":303.3999938964844,"x2":484,"y2":303},{"x1":484,"y1":303,"x2":483.6000061035156,"y2":303.79998779296875}];

var uYears = [1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010];
var fYears = [1985,1990,1995,2000,2005,2010];

var undergrad = [2,2.5,7,15,17,25.5,32.5,35.5,41.0,42.0,45.5];
var faculty = [7,10,13,15.5,18,21];

var mode = 0; // var mode = TYPE.SLIDER;


var isSet = false;

// addPath(square);

var canvas;
var ctx;
var WIDTH;
var HEIGHT;
var INTERVAL = 20; // how often, in milliseconds, we check to see if a redraw is needed

var isDrag = false;
var mx, my; // mouse coordinates


// when set to true, the canvas will redraw everything
// invalidate() just sets this to false right now
// we want to call invalidate() whenever we make a change
var canvasValid = false;

// The node (if any) being selected.
// If in the future we want to select multiple objects, this will get turned into an array
var mySel;
var mouseD = false;

// The selection color and width. Right now we have a red selection with a small width
var mySelColor = '#CC0000';
var mySelWidth = 2;

// we use a fake canvas to draw individual shapes for selection testing
var ghostcanvas;
var gctx; // fake canvas context

// since we can drag from anywhere in a node
// instead of just its x/y corner, we need to save
// the offset of the mouse when we start dragging.
var offsetx, offsety;

// Padding and border style widths for mouse offsets
var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;

var brushDiameter = 7;

// initialize our canvas, add a ghost canvas, set draw loop
// then add everything we want to intially exist on the canvas
function init() {
	canvas = document.getElementById('canvas');
	HEIGHT = canvas.height;
	WIDTH = canvas.width;
	ctx = canvas.getContext('2d');
	ghostcanvas = document.createElement('canvas');
	ghostcanvas.height = HEIGHT;
	ghostcanvas.width = WIDTH;
	gctx = ghostcanvas.getContext('2d');


	//fixes a problem where double clicking causes text to get selected on the canvas
	canvas.onselectstart = function() {
		return false;
	}

	// fixes mouse co-ordinate problems when there's a border or padding
	// see getMouse for more detail
	if (document.defaultView && document.defaultView.getComputedStyle) {
		stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10) || 0;
		stylePaddingTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10) || 0;
		styleBorderLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10) || 0;
		styleBorderTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10) || 0;
	}

	// make draw() fire every INTERVAL milliseconds
	setInterval(draw, INTERVAL);

	// set our events. Up and down are for dragging,
	// double click is for making new boxes
	canvas.onmousedown = myDown;
	canvas.onmouseup = myUp;
	// canvas.ondblclick = myDblClick;

	$("#canvas").mousemove(function(e) {
		myMove(e);
	});

	var percentValue = 0;
	var angleValue = 0;
	targetValue = "22%";

	var percentText = $("<p>", {
		id: "percent",
		class: "notation"
	});
	percentText.css({
		"left": "800px",
		"top": "300px"
	});
	percentText.text(percentValue.toString());
	$("body").prepend(percentText);
	questionTexts.push(percentText);

	// add an orange rectangle
	addRect(200, 200, 40, 40, '#FFC02B');

	// add a smaller blue rectangle
	addRect(25, 90, 25, 25, '#2BB8FF');
}

//wipes the canvas context
function clear(c) {
	c.clearRect(0, 0, WIDTH, HEIGHT);
	$.each(questionTexts, function(index, value) {
		value.remove();
	});
}

var pc = {
	x: 500,
	y: 200,
	r: 100
};

function pieChart() {
	if ($("#feedback").length == 0) {
		var feedback = $("<p>", {
			id: "feedback",
			class: "notation"
		});
		feedback.css({
			"left": "600px",
			"top": "300px"
		});
		$("body").append(feedback);
	}
	drawChalkArc(ctx, pc.x, pc.y, 107, 0, 2 * Math.PI, false);
}

function drawHandle() {
	if (!isSet) {
		var dx = mx - pc.x;
		var dy = my - pc.y;
		angleValue = Math.atan2(-dx, dy) - Math.PI;
		// percentValue = angleValue;
		percentValue = parseInt(Math.round((angleValue * 100 / (2 * Math.PI) + 100)));
		$("#percent").text(percentValue + "%");
		pipercent = percentValue;
		drawChalkArc(ctx, pc.x, pc.y, 100, 0, angleValue, true);
	} else {
		drawChalkArc(ctx, pc.x, pc.y, 100, 0, angleValue, true);
	}

}

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
function draw() {
	if (canvasValid == false) {
		clear(ctx);

		// Add stuff you want drawn in the background all the time here

		// draw all boxes
		var l = boxes.length;
		// for (var i = 0; i < l; i++) {
		//     drawshape(ctx, boxes[i], boxes[i].fill);
		// }

		// draw all paths
		// l = paths.length;
		// for(var i =0; i < paths.length; i++){
		//   drawPath(ctx,paths[i]);
		// }

		// draw selection
		// right now this is just a stroke along the edge of the selected box
		if (mySel != null) {
			ctx.strokeStyle = mySelColor;
			ctx.lineWidth = mySelWidth;
			ctx.strokeRect(mySel.x, mySel.y, mySel.w, mySel.h);
		}

		// Add stuff you want drawn on top all the time here
		console.log(mode);
		switch (mode) {
			case TYPE.INTRO:
				var titleElement = $("<div>");
				titleElement.css({
					  position: "fixed",
					  top: "50%",
					  left: "50%",
					  "z-index": "4",
					  transform: "translate(-50%, -50%)"});
				titleElement.append($("<p>").text("TODAY'S LECTURE:"));
				titleElement.append($("<p>").text("Gender Disparity at MIT"));
				var instructionText = $("<p>");
				instructionText.css({"font-size": "150%", color:colors.orange});
				instructionText.text("Let's see what you think about the current status of undergradaute women at MIT.");
				titleElement.append(instructionText);

				$("body").append(titleElement);
				questionTexts.push(titleElement);

				nextReveal();
				break;
			case TYPE.PIECHART:
				pieChart();
				drawHandle();
				addText("Question 1 of 3",0,0);
				addText("What fraction of presidents of the technology clubs do you think are women?", 100, 50, {color: colors.orange});
				
				addText("Your Guess:", 800, 200);

				if (isSet) {
					addText("Actual:", 100, 200);
					addText(targetValue, 125, 230, {color:"red"});
					
					drawChalkArc(ctx, pc.x, pc.y, 100, 0,0.22*2*Math.PI, true, "red");
					addText("Your guess was off by "+(pipercent-22).toString()+"%", 800, 350);
					nextReveal();
				} else {
					addText("Click to Set", 100, 150, {color:colors.cyan});
					var position = [100,250];
					var size = [200,50]
					var tailPercent = 0.75;
					var thickness = 25;
					drawArrow(ctx,position[0], position[1], size[0], size[1], thickness, tailPercent, colors.cyan);
					// $("#feedback").text("");
					// addText(percentValue+"%", 800, 300, {color:"white"});
				}
				addText(percentValue+"%", 825, 230, {color:"white"});
				
				
				break;
			case TYPE.TWOAXIS:
				addText("Question 2 of 3",0,0);
				var chartLength = [700,500];
				var chartOrigin = [100,600];
				var arrowDim = [70,20];
				var graphDim = {
					xmin: 1960,
					xmax: 2010,
					ymin: 0,
					ymax: 100
				};

				drawChalkLine(ctx,chartOrigin[0],chartOrigin[1],chartOrigin[0],chartOrigin[1]-chartLength[1]); // y axis
				drawChalkLine(ctx,100,100,120,130); //arrow head
				drawChalkLine(ctx,100,100,80,130);
				drawChalkLine(ctx,chartOrigin[0],chartOrigin[1],chartOrigin[0]+chartLength[0] + 50,chartOrigin[1]); // x axis
				drawChalkLine(ctx,850,600,820,chartOrigin[1]+arrowDim[1]);// arrow head
				drawChalkLine(ctx,850,600,820,580);
				// addText("mouseposition:"+mx+","+ my, 600,600,"#00FFFF");

				var chalkStick = $("<div>", {class:"chalk"});
				$('body').prepend(chalkStick);
				questionTexts.push(chalkStick);
				$(document).mousemove(function(evt){
				mouseX = evt.pageX;
				mouseY = evt.pageY;
				if(mouseY<HEIGHT && mouseX<WIDTH){
					$('.chalk').css('left',(mouseX-0.5*brushDiameter)+'px');
					$('.chalk').css('top',(mouseY-0.5*brushDiameter)+'px');
					if(mouseD){			
						drawChalk(mouseX,mouseY);
					}
				}else{
					$('.chalk').css('top',HEIGHT-10);
					}
				});

				$(document).mousedown(function(evt){
					console.log("mousedown");

					mouseD = true;
					xLast = mouseX;
					yLast = mouseY;
					
					
						mouseX = evt.pageX;
						mouseY = evt.pageY;
						if (mouseX>=940 && mouseX <=1060 && mouseY >=240 && mouseY <=305) {
							graphSubmit = !graphSubmit;
							invalidate();
						}
	

					// if(!$('.panel').is(':hover')){
					// 	drawChalk(mouseX+1,mouseY+1);
					// }


					
				});

				$(document).mouseup(function(evt){ 
					mouseD = false;
				});

				function yearToX(year){
					return chartOrigin[0]+ ((year - graphDim.xmin)/(graphDim.xmax - graphDim.xmin) )*chartLength[0];
				};

				function toYear(x){
					return (x-chartOrigin[0])/chartLength[0] * (graphDim.xmax-graphDim.xmin) + graphDim.xmin;
				}

				function toData(y){
					return (y - chartOrigin[1])/chartLength[1] * (graphDim.ymax-graphDim.ymin) + graphDim.ymin;
				}

				function dataToY(data){
					return chartOrigin[1] - ((data- graphDim.ymin)/(graphDim.ymax - graphDim.ymin) )*chartLength[1];
				};

				function drawGraphData(xData,yData, gColor){
					for(var i = 0; i < xData.length-1;i++){
						drawChalkLine(ctx,yearToX(xData[i]),dataToY(yData[i]),yearToX(xData[i+1]),dataToY(yData[i+1]),gColor);
					}
				}


				drawGraphData(uYears,undergrad,"#FFFF00"); //undergrad

				//Title
				addText("Given this plot of the percent of the undergraduate population that are women, draw the line that you think represents the percent of the faculty population that are women.", chartOrigin[0] + 70 , (chartOrigin[1] - chartLength[1])/2,{color:colors.orange, width:"40%"});
				
				// X label
				addText("Year", (chartOrigin[0] + chartLength[0])/2, chartOrigin[1]+ 50,{color:"#00FFFF"});

				// y label
				addText("Percentage", (chartOrigin[0] - 150 ), chartOrigin[1] - (chartLength[1])/2, {transform: "rotate(-90deg)", color:"#00FFFF"});

				//axis values
				for(var i = 0; i < uYears.length; i++){
					addText(uYears[i],yearToX(uYears[i]) - 30, chartOrigin[1]);
				}

				for (var i = 1; i <10; i++){
					var p = i*10;
					addText(p+"%-",chartOrigin[0]- 50,dataToY(p)- 15);
				}

				//Draw a dotted line at 50%
				var lines = 20;
				var sPoint = chartOrigin[0];
				var sLength = chartLength[0]/lines;
				for (var i = 0; i <lines; i++){
					drawChalkLine(ctx,sPoint,dataToY(50), sPoint + sLength-50 ,dataToY(50),"#00FFFF");
					sPoint = sPoint + sLength;
				}

				//legend
				var legendOrigin = [chartOrigin[0]+ chartLength[0],chartOrigin[1] - chartLength[1]];
				var yMarker = legendOrigin[1] + 50;
				var yStep = 30;
				var lineLength = 100;
				var textOffset = {x: 110};
				addText("Legend:",legendOrigin[0], legendOrigin[1],{color:colors.cyan});

				drawChalkLine(ctx,legendOrigin[0], yMarker, legendOrigin[0]+ lineLength, yMarker,colors.yellow);
				addText("Undergrad", legendOrigin[0]+ textOffset.x, yMarker-10,{color:colors.yellow, "font-size":"100%"});
				yMarker = yMarker +yStep;

				drawChalkLine(ctx,legendOrigin[0], yMarker, legendOrigin[0]+ lineLength, yMarker,colors.white);
				addText("Your Guess Faculty", legendOrigin[0]+ textOffset.x, yMarker-10,{color:colors.white, "font-size":"100%"});
				yMarker = yMarker +yStep;
				
				if (graphSubmit){
					drawChalkLine(ctx,legendOrigin[0], yMarker, legendOrigin[0]+ lineLength, yMarker,colors.green);
					addText("Actual Faculty *", legendOrigin[0]+ textOffset.x, yMarker-10,{color:colors.green, "font-size":"100%"});
					drawGraphData(fYears,faculty,"#228B22");// faculty
					addText("Retry", 955, 260, {"color":'#FFFF00'});
					drawChalkLine(ctx, 940, 240, 1060, 240,'#FFFF00');
					drawChalkLine(ctx, 940, 305, 1060, 305,'#FFFF00');
					drawChalkLine(ctx, 940, 240, 940, 305,'#FFFF00');
					drawChalkLine(ctx, 1060, 240, 1060, 305,'#FFFF00');
					var filteredPath = cropLineToPlot(savePath,chartOrigin,chartLength);
					playback(filteredPath,colors.white);
					var average = parseInt(-1*toData(averageValue(filteredPath)));
					var facultyTarget = 14;
					var margin = 3;
					var responseText = "TEMP";
					if(average < facultyTarget - margin){
						responseText = "Good try, but there are actually more women faculty than that, but it's still a low number.";
					}else if(average >facultyTarget +margin){
						responseText = "Good try, but unfortunately there are far less women faculty than that.";

					}else{
						responseText = "You guessed about the right percentage of women faculty.";
					}
					responseText += " Many female students feel that even fewer mentorship opportunities exist that meet the needs of women."
					addText(responseText ,900,350,{color:colors.orange, width:"25%", "font-size": "110%"});
					addText("*There is limited data on a short range for this series",700,400,{color:colors.green,width:"10%", "font-size": "100%"});
					nextReveal();
				}else{
					savePath = []
					addText("Submit", 955, 260, {"color":'#FFFF00'});
					drawChalkLine(ctx, 940, 240, 1060, 240,'#FFFF00');
					drawChalkLine(ctx, 940, 305, 1060, 305,'#FFFF00');
					drawChalkLine(ctx, 940, 240, 940, 305,'#FFFF00');
					drawChalkLine(ctx, 1060, 240, 1060, 305,'#FFFF00');	
				}
				
				




				break;
			case TYPE.SLIDER: //KSF
				addText("Question 3 of 3",0,0);
				addText("When comparing themselves to peers, what percent of men and women do you think do not feel capable at MIT?", 100, 50,{color:colors.orange,width:"40%"});
				drawChalkLine(ctx,100,300,800,300); // x axis 1
				drawChalkLine(ctx,100,500,800,500); // x axis 2
				addText("0%", 70, 260);
				addText("25%", 810, 260);
				addText("0%", 70, 460);
				addText("25%", 810, 460);
				length = 100;
				drawBox(ctx, s1p, 250, length);
				addText("Men", s1p+20, 255);
				drawBox(ctx, s2p, 450, length);
				addText("Women", s2p, 455);
				
				addText(parseInt((s1p-100)*1.17/28.0).toString(), s1p+30, 305);
				addText(parseInt((s2p-100)*1.17/28.0).toString(), s2p+30, 505);
				
				addText("Move both sliders, then hit submit to compare to the actual results.", 900, 100, {'font-size':'100%', 'max-width':'200px', 'color':'#00FFFF'});
				addText("Submit", 955, 260, {"color":'#FFFF00'});
				
				drawChalkLine(ctx, 940, 240, 1060, 240,'#FFFF00');
				drawChalkLine(ctx, 940, 305, 1060, 305,'#FFFF00');
				drawChalkLine(ctx, 940, 240, 940, 305,'#FFFF00');
				drawChalkLine(ctx, 1060, 240, 1060, 305,'#FFFF00');
// 				drawBox(ctx, 950, 225, 100);

				$(document).mousedown(function(evt){
					mouseD = true;
					
					if (!sliderSubmitCheck) {
						mouseX = evt.pageX;
						mouseY = evt.pageY;
						if (mouseX>=940 && mouseX <=1060 && mouseY >=240 && mouseY <=305) {
							showSliderResults(ctx)
						}
					}
					
				});
				
				$(document).mouseup(function(evt){
					mouseD = false;
				});
				
				$(document).mousemove(function(evt){
					if (mouseD) {
						mouseX = evt.pageX;
						mouseY = evt.pageY;
						if (mouseY <= 350 && mouseY >= 250 && mouseX <= 700 && mouseX >= 100) {
							invalidate();
							s1p = mouseX;
						} else if (mouseY <= 550 && mouseY >= 450 && mouseX <= 700 && mouseX >= 100) {
							invalidate();
							s2p = mouseX;
						}
					}
				});
				break;
			case TYPE.FINAL:
				addText("Gender Disparity @ MIT: Help draw the future",0,0,{color:colors.orange,"font-size":"400%", left:"50%", width:"75%","text-align":"center", transform:"translate(-50%,0)"});
				// drawChalkLine()
				var titleElement = $("<div>");
				titleElement.css({
					  position: "fixed",
					  top: "55%",
					  left: "50%",
					  width: "80%",
					  "z-index": "4",
					  transform: "translate(-50%, -50%)"});
				var finalText = $("<p>Now you have a better understanding of the status of gender disparity at MIT. The new <span style=\"color:cyan\">VP of Student Life</span> wants to hear what you think.</p>");
				finalText.css({"font-size": "200%"});
				titleElement.append(finalText);
				var linkText = $("<p>").text("Write Suzy Nelson and advocate to close the gap on gender disparity at MIT.");
				linkText.css({color:"cyan", "margin-top": "100px", "margin-left": "450px"});
				titleElement.append($("<a>",{href:"https://welcomesuzy.wordpress.com/write/"}).append(linkText));
				$("body").append(titleElement);
				questionTexts.push(titleElement);
				var position = [200,450];
				var size = [300,100]
				var tailPercent = 0.75;
				var thickness = 50;
				drawArrow(ctx,position[0], position[1], size[0], size[1], thickness, tailPercent, colors.orange);
				break;
		}
		canvasValid = true;
	}
}

function showSliderResults(ctx) {
	drawBox(ctx, 319, 250, 100, "#FF0000");
	drawBox(ctx, 620, 450, 100, "#FF0000");
	
	percent1 = parseInt((s1p-100)*1.17/28.0);
	percent2 = parseInt((s2p-100)*1.17/28.0);
	diff = (percent2)/percent1;
	
	var response;
	
	if (diff>1) {
		if (diff>2.1 && diff < 2.5) {
			response ="Yeah, you get the problem."
		} else {
			response = "You understand more women feel this way, but your ratio is off."
		}
	} else {
		response = "Actually, a much higher percentage of women feel this way than men."
		//actually women feel much less capable
	}
	response += " Over 20% of women do not feel capable compared to their peers. This is 2x higher than in men.";
	addText(response, 900, 360, {"font-size":"100%", "color":"red"})
	nextReveal();
}

function nextMode(){
	mode++;
	invalidate();
}

// Draws a single shape to a single context
// draw() will call this with the normal canvas
// myDown will call this with the ghost canvas
function drawshape(context, shape, fill) {
	context.fillStyle = fill;

	// We can skip the drawing of elements that have moved off the screen:
	if (shape.x > WIDTH || shape.y > HEIGHT) return;
	if (shape.x + shape.w < 0 || shape.y + shape.h < 0) return;

	context.fillRect(shape.x, shape.y, shape.w, shape.h);
}

function drawPath(context, path) {
	$.each(path.deltas, function(index, value) {

		drawChalkLine(context, value.x1 + path.xoffset, value.y1 + path.yoffset, value.x2 + path.xoffset, value.y2 + path.yoffset);
	});
}

function drawChalkLine(context, x, y, x2, y2,color) {
	context.lineWidth = brushDiameter;
	if(color){
		color = hexToRgb(color);
	}else{
		color = {
			r:0,
			g:255,
			b:255
		};
	}
	
	context.strokeStyle = 'rgba('+color.r+','+color.g+','+color.b+',' + (0.4 + Math.random() * 0.2) + ')';
	context.beginPath();
	context.moveTo(x2, y2);
	context.lineTo(x, y);
	context.stroke();

	// Chalk Effect
	var length = Math.round(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)) / (5 / brushDiameter));
	var xUnit = (x - x2) / length;
	var yUnit = (y - y2) / length;
	for (var i = 0; i < length; i++) {
		var xCurrent = x2 + (i * xUnit);
		var yCurrent = y2 + (i * yUnit);
		var xRandom = xCurrent + (Math.random() - 0.5) * brushDiameter * 1.2;
		var yRandom = yCurrent + (Math.random() - 0.5) * brushDiameter * 1.2;
		context.clearRect(xRandom, yRandom, Math.random() * 2 + 2, Math.random() + 1);
	}
}

function drawChalk(x,y){
		ctx.strokeStyle = 'rgba(255, 255, 255,'+(0.4+Math.random()*0.2)+')';
		ctx.beginPath();
  		ctx.moveTo(xLast, yLast);		
  		ctx.lineTo(x, y);
  		savePath.push({"x1":xLast,"y1": yLast, "x2":x, "y2":y});
  		ctx.stroke();
          
  		// Chalk Effect
		var length = Math.round(Math.sqrt(Math.pow(x-xLast,2)+Math.pow(y-yLast,2))/(5/brushDiameter));
		var xUnit = (x-xLast)/length;
		var yUnit = (y-yLast)/length;
		for(var i=0; i<length; i++ ){
			var xCurrent = xLast+(i*xUnit);	
			var yCurrent = yLast+(i*yUnit);
			var xRandom = xCurrent+(Math.random()-0.5)*brushDiameter*1.2;			
			var yRandom = yCurrent+(Math.random()-0.5)*brushDiameter*1.2;
    		ctx.clearRect( xRandom, yRandom, Math.random()*2+2, Math.random()+1);
			}

		xLast = x;
		yLast = y;
	}

function playback(savedShape, color){
	$.each(savedShape, function(index, value){
		drawChalkLine(ctx,value.x1,value.y1, value.x2, value.y2, color);
	});
};

function cropLineToPlot(savedShape, chartOrigin, chartLength){
	var filteredShape = [];
	$.each(savedShape, function(index,value){
		if(!( value.x1 <= chartOrigin[0] ||
			value.x1 >= (chartOrigin[0] + chartLength[0]) ||
			value.y1 >=chartOrigin[1] || 
			value.y1 <= chartOrigin[1] - chartLength[1])){
			filteredShape.push(value);
		}
	});
	return filteredShape;
}

function averageValue(savedShape){
	var sum = 0;
	$.each(savedShape, function(index, value){
		sum+= value.y1;
	});
	return sum/savedShape.length;
}

function slope(value){
	return (value.y1 - value.y2)/(value.x2 -value.x1);
}

function maxValue(savedShape) {
	var max = 0;
	$.each(savedShape, function(index, value){
		if( value.y2 < max){
			max = value.y2;
		}
		if( value.y1 < max){
			max = value.y1;
		}
	});

	return max;
}

function drawBox(context, x, y, length, color) {
	drawChalkLine(context, x, y, x, y+length, color);
	drawChalkLine(context, x, y+length, x+length, y+length, color);
	drawChalkLine(context, x+length, y+length, x+length, y, color);
	drawChalkLine(context, x+length, y, x, y, color);
}

function drawRect(context, x, y, xlength, ylength, color) {
	drawChalkLine(context, x, y, x, y+ylength, color);
	drawChalkLine(context, x, y+ylength, x+xlength, y+ylength, color);
	drawChalkLine(context, x+xlength, y+ylength, x+xlength, y, color);
	drawChalkLine(context, x+xlength, y, x, y, color);
}

function drawArrow(context,x,y, xlen, ylen, thickness, tailPercent,color){
	var one = [x,(ylen-thickness)/2+y];
	var two = [x,one[1]+thickness];
	var three = [(tailPercent*xlen) + x,two[1]];
	var four = [three[0], three[1]+ (ylen-thickness)/2];
	var five = [x+xlen,y+ ylen/2];
	var six = [four[0],y];
	var seven = [three[0], y + (ylen-thickness)/2];

	drawChalkLine(context, one[0],one[1],two[0],two[1], color);
	drawChalkLine(context, two[0],two[1],three[0],three[1], color);
	drawChalkLine(context, three[0],three[1],four[0],four[1], color);
	drawChalkLine(context, four[0],four[1],five[0],five[1], color);
	drawChalkLine(context, five[0],five[1],six[0],six[1], color);
	drawChalkLine(context, six[0],six[1],seven[0],seven[1], color);
	drawChalkLine(context, seven[0],seven[1],one[0],one[1], color);

	
}

function drawChalkArc(context, x, y, r, sAngle, eAngle, fill, color) {
	if (!color) {
		color = "white";
	}
	var angleOffset = -Math.PI/2;
	context.lineWidth = brushDiameter;
	context.strokeStyle = 'rgba(0,255,255,' + (0.4 + Math.random() * 0.2) + ')';
	context.beginPath();
	if (fill) {
		context.moveTo(x, y);
		context.arc(x, y, r, sAngle +angleOffset, eAngle + angleOffset);
		context.closePath();
		context.fillStyle = color;
		context.fill();
	} else {
		context.arc(x, y, r, sAngle + angleOffset, eAngle + angleOffset);
		context.stroke();
	}


	// Chalk Effect
	// var length = Math.round(Math.sqrt(Math.pow(x-,2)+Math.pow(y-y2,2))/(5/brushDiameter));
	// var xUnit = (x-x2)/length;
	// var yUnit = (y-y2)/length;
	// for(var i=0; i<length; i++ ){
	//   var xCurrent = x2+(i*xUnit);  
	//   var yCurrent = y2+(i*yUnit);
	//   var xRandom = xCurrent+(Math.random()-0.5)*brushDiameter*1.2;     
	//   var yRandom = yCurrent+(Math.random()-0.5)*brushDiameter*1.2;
	//     context.clearRect( xRandom, yRandom, Math.random()*2+2, Math.random()+1);
	// }
}

// Happens when the mouse is moving inside the canvas
function myMove(e) {
	switch (mode) {
		case TYPE.PIECHART:
			if (!isSet) {
				getMouse(e);
				invalidate();
			}
			break;
		case TYPE.TWOAXIS:
				getMouse(e);
				// invalidate();
			break;
		case TYPE.SLIDER:
				getMouse(e);
			break
	}


}

// Happens when the mouse is clicked in the canvas
function myDown(e) {
	switch (mode) {
		case TYPE.PIECHART:
			if (isSet) {
				// setInterval( function(){
				//   angleV
				//   if(angleValue){

				//   }
				// },500); 
			}
			isSet = !isSet;
			// else{
			//   $("#feedback").text("You think that there are __ percent!");
			// }
			break;
		case TYPE.TWOAXIS:
			break;
		case TYPE.SLIDER:
			break
	}
	getMouse(e);
	clear(gctx);
	var l = boxes.length;
	for (var i = l - 1; i >= 0; i--) {
		// draw shape onto ghost context
		drawshape(gctx, boxes[i], 'black');

		// get image data at the mouse x,y pixel
		var imageData = gctx.getImageData(mx, my, 1, 1);
		var index = (mx + my * imageData.width) * 4;

		// if the mouse pixel exists, select and break
		if (imageData.data[3] > 0) {
			mySel = boxes[i];
			offsetx = mx - mySel.x;
			offsety = my - mySel.y;
			mySel.x = mx - offsetx;
			mySel.y = my - offsety;
			isDrag = true;
			canvas.onmousemove = myMove;
			invalidate();
			clear(gctx);
			return;
		}

	}
	// havent returned means we have selected nothing
	mySel = null;
	// clear the ghost canvas for next time
	clear(gctx);
	// invalidate because we might need the selection border to disappear
	invalidate();
}

function nextReveal(){
	var position = [800,600];
	var size = [200,100];
	var thickness = 50;
	var tailPercent = .75;
	drawArrow(ctx,position[0], position[1], size[0], size[1], thickness, tailPercent, colors.orange);
	addText("Next",position[0]+ size[0]/2, position[1]+size[1]/2,{transform:"translate(-50%,-50%)", color: colors.orange, "font-size": "200%"});

	$(document).mousedown(function(evt){

		mouseX = evt.pageX;
		mouseY = evt.pageY;
		if (mouseX>=position[0] && mouseX <=(position[0]+size[0]) && mouseY >=position[1] && mouseY <=(position[1] + size[1])) {
			nextMode();
		}
	

					
				});
	// var nextButton = $("<div>",{id:"next", class:"abs nextButton", src:"arrow.png", onclick:"nextMode()"});
	// $("body").append(nextButton);
	// questionTexts.push(nextButton);
};
function myUp() {
	isDrag = false;
	canvas.onmousemove = null;
}

// adds a new node
function myDblClick(e) {
	getMouse(e);
	// for this method width and height determine the starting X and Y, too.
	// so I left them as vars in case someone wanted to make them args for something and copy this code
	var width = 20;
	var height = 20;
	addRect(mx - (width / 2), my - (height / 2), width, height, '#77DD44');
}

function invalidate() {
	canvasValid = false;
	$(document).off();
}

// Sets mx,my to the mouse position relative to the canvas
// unfortunately this can be tricky, we have to worry about padding and borders
function getMouse(e) {
	var element = canvas,
		offsetX = 0,
		offsetY = 0;

	if (element.offsetParent) {
		do {
			offsetX += element.offsetLeft;
			offsetY += element.offsetTop;
		} while ((element = element.offsetParent));
	}

	// Add padding and border style widths to offset
	offsetX += stylePaddingLeft;
	offsetY += stylePaddingTop;

	offsetX += styleBorderLeft;
	offsetY += styleBorderTop;

	mx = e.pageX - offsetX;
	my = e.pageY - offsetY
}

// If you dont want to use <body onLoad='init()'>
// You could uncomment this init() reference and place the script reference inside the body tag
//init();