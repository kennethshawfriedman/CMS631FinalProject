// Last updated August 2010 by Simon Sarris
// www.simonsarris.com
// sarris@acm.org
//
// Free to use and distribute at will
// So long as you are nice to people, etc


$('body').prepend('<div id="background"></div>');

function addText(text, xloc, yloc){
  var newElement = $("<p>", {class:"notation"});
  newElement.text(text);
  newElement.css({"left":xloc.toString()+"px", "top": yloc.toString()+"px"});
  $("body").append(newElement);
  questionTexts.push(newElement);
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

var paths = [];
var square = [{"x1":461.6000061035156,"y1":307.3999938964844,"x2":462.6000061035156,"y2":308.3999938964844},{"x1":462.6000061035156,"y1":308.3999938964844,"x2":462,"y2":339},{"x1":462,"y1":339,"x2":462,"y2":349},{"x1":462,"y1":349,"x2":462,"y2":357},{"x1":462,"y1":357,"x2":462,"y2":362},{"x1":462,"y1":362,"x2":461.20001220703125,"y2":367.3999938964844},{"x1":461.20001220703125,"y1":367.3999938964844,"x2":460.79998779296875,"y2":371.3999938964844},{"x1":460.79998779296875,"y1":371.3999938964844,"x2":460,"y2":375},{"x1":460,"y1":375,"x2":460.79998779296875,"y2":378.20001220703125},{"x1":460.79998779296875,"y1":378.20001220703125,"x2":460.79998779296875,"y2":380.6000061035156},{"x1":460.79998779296875,"y1":380.6000061035156,"x2":460.79998779296875,"y2":382.6000061035156},{"x1":460.79998779296875,"y1":382.6000061035156,"x2":460.79998779296875,"y2":383.79998779296875},{"x1":460.79998779296875,"y1":383.79998779296875,"x2":460.79998779296875,"y2":384.6000061035156},{"x1":460.79998779296875,"y1":384.6000061035156,"x2":460.79998779296875,"y2":385.3999938964844},{"x1":460.79998779296875,"y1":385.3999938964844,"x2":461.6000061035156,"y2":386.20001220703125},{"x1":461.6000061035156,"y1":386.20001220703125,"x2":462,"y2":387},{"x1":462,"y1":387,"x2":464,"y2":387},{"x1":464,"y1":387,"x2":466,"y2":387},{"x1":466,"y1":387,"x2":468.3999938964844,"y2":388.20001220703125},{"x1":468.3999938964844,"y1":388.20001220703125,"x2":470.79998779296875,"y2":388.20001220703125},{"x1":470.79998779296875,"y1":388.20001220703125,"x2":473.20001220703125,"y2":387.79998779296875},{"x1":473.20001220703125,"y1":387.79998779296875,"x2":476,"y2":387},{"x1":476,"y1":387,"x2":480,"y2":386},{"x1":480,"y1":386,"x2":486.79998779296875,"y2":386.20001220703125},{"x1":486.79998779296875,"y1":386.20001220703125,"x2":492.3999938964844,"y2":386.20001220703125},{"x1":492.3999938964844,"y1":386.20001220703125,"x2":496.3999938964844,"y2":386.20001220703125},{"x1":496.3999938964844,"y1":386.20001220703125,"x2":501.20001220703125,"y2":386.20001220703125},{"x1":501.20001220703125,"y1":386.20001220703125,"x2":506,"y2":386},{"x1":506,"y1":386,"x2":510,"y2":387},{"x1":510,"y1":387,"x2":513.2000122070312,"y2":387.3999938964844},{"x1":513.2000122070312,"y1":387.3999938964844,"x2":516,"y2":388},{"x1":516,"y1":388,"x2":518,"y2":389},{"x1":518,"y1":389,"x2":520.7999877929688,"y2":390.20001220703125},{"x1":520.7999877929688,"y1":390.20001220703125,"x2":522.7999877929688,"y2":391.3999938964844},{"x1":522.7999877929688,"y1":391.3999938964844,"x2":524.4000244140625,"y2":392.20001220703125},{"x1":524.4000244140625,"y1":392.20001220703125,"x2":526,"y2":393},{"x1":526,"y1":393,"x2":527.5999755859375,"y2":394.20001220703125},{"x1":527.5999755859375,"y1":394.20001220703125,"x2":528.7999877929688,"y2":394.6000061035156},{"x1":528.7999877929688,"y1":394.6000061035156,"x2":530,"y2":395},{"x1":530,"y1":395,"x2":532,"y2":395},{"x1":532,"y1":395,"x2":533.5999755859375,"y2":394.6000061035156},{"x1":533.5999755859375,"y1":394.6000061035156,"x2":535.2000122070312,"y2":393.79998779296875},{"x1":535.2000122070312,"y1":393.79998779296875,"x2":536.7999877929688,"y2":392.20001220703125},{"x1":536.7999877929688,"y1":392.20001220703125,"x2":538.4000244140625,"y2":389.79998779296875},{"x1":538.4000244140625,"y1":389.79998779296875,"x2":540.4000244140625,"y2":386.20001220703125},{"x1":540.4000244140625,"y1":386.20001220703125,"x2":541.5999755859375,"y2":382.20001220703125},{"x1":541.5999755859375,"y1":382.20001220703125,"x2":542.7999877929688,"y2":378.20001220703125},{"x1":542.7999877929688,"y1":378.20001220703125,"x2":543.5999755859375,"y2":374.6000061035156},{"x1":543.5999755859375,"y1":374.6000061035156,"x2":544,"y2":371},{"x1":544,"y1":371,"x2":544.7999877929688,"y2":366.6000061035156},{"x1":544.7999877929688,"y1":366.6000061035156,"x2":545.2000122070312,"y2":362.20001220703125},{"x1":545.2000122070312,"y1":362.20001220703125,"x2":545.5999755859375,"y2":358.6000061035156},{"x1":545.5999755859375,"y1":358.6000061035156,"x2":545.5999755859375,"y2":354.20001220703125},{"x1":545.5999755859375,"y1":354.20001220703125,"x2":546,"y2":350},{"x1":546,"y1":350,"x2":546,"y2":345},{"x1":546,"y1":345,"x2":546.7999877929688,"y2":336.20001220703125},{"x1":546.7999877929688,"y1":336.20001220703125,"x2":547.2000122070312,"y2":332.6000061035156},{"x1":547.2000122070312,"y1":332.6000061035156,"x2":547.5999755859375,"y2":329.3999938964844},{"x1":547.5999755859375,"y1":329.3999938964844,"x2":548,"y2":326},{"x1":548,"y1":326,"x2":548,"y2":323},{"x1":548,"y1":323,"x2":548,"y2":320},{"x1":548,"y1":320,"x2":548,"y2":318},{"x1":548,"y1":318,"x2":548,"y2":317},{"x1":548,"y1":317,"x2":548,"y2":315},{"x1":548,"y1":315,"x2":547.5999755859375,"y2":314.6000061035156},{"x1":547.5999755859375,"y1":314.6000061035156,"x2":547.5999755859375,"y2":313.79998779296875},{"x1":547.5999755859375,"y1":313.79998779296875,"x2":547,"y2":313},{"x1":547,"y1":313,"x2":546.7999877929688,"y2":312.20001220703125},{"x1":546.7999877929688,"y1":312.20001220703125,"x2":546.4000244140625,"y2":311.3999938964844},{"x1":546.4000244140625,"y1":311.3999938964844,"x2":546,"y2":310},{"x1":546,"y1":310,"x2":545.2000122070312,"y2":309.79998779296875},{"x1":545.2000122070312,"y1":309.79998779296875,"x2":543,"y2":309},{"x1":543,"y1":309,"x2":542,"y2":308},{"x1":542,"y1":308,"x2":539.5999755859375,"y2":307.79998779296875},{"x1":539.5999755859375,"y1":307.79998779296875,"x2":536.7999877929688,"y2":307.3999938964844},{"x1":536.7999877929688,"y1":307.3999938964844,"x2":534,"y2":307},{"x1":534,"y1":307,"x2":532,"y2":306},{"x1":532,"y1":306,"x2":530,"y2":306},{"x1":530,"y1":306,"x2":527.5999755859375,"y2":306.20001220703125},{"x1":527.5999755859375,"y1":306.20001220703125,"x2":525.5999755859375,"y2":305.79998779296875},{"x1":525.5999755859375,"y1":305.79998779296875,"x2":520.7999877929688,"y2":305.3999938964844},{"x1":520.7999877929688,"y1":305.3999938964844,"x2":516.4000244140625,"y2":305.3999938964844},{"x1":516.4000244140625,"y1":305.3999938964844,"x2":512,"y2":305},{"x1":512,"y1":305,"x2":506.79998779296875,"y2":304.6000061035156},{"x1":506.79998779296875,"y1":304.6000061035156,"x2":500,"y2":303},{"x1":500,"y1":303,"x2":494,"y2":303},{"x1":494,"y1":303,"x2":490.3999938964844,"y2":303.3999938964844},{"x1":490.3999938964844,"y1":303.3999938964844,"x2":488.3999938964844,"y2":303.3999938964844},{"x1":488.3999938964844,"y1":303.3999938964844,"x2":486.79998779296875,"y2":303.3999938964844},{"x1":486.79998779296875,"y1":303.3999938964844,"x2":485.6000061035156,"y2":303.3999938964844},{"x1":485.6000061035156,"y1":303.3999938964844,"x2":484.79998779296875,"y2":303.3999938964844},{"x1":484.79998779296875,"y1":303.3999938964844,"x2":484,"y2":303},{"x1":484,"y1":303,"x2":483.6000061035156,"y2":303.79998779296875}];


addPath(square);

var canvas;
var ctx;
var WIDTH;
var HEIGHT;
var INTERVAL = 20;  // how often, in milliseconds, we check to see if a redraw is needed

var isDrag = false;
var mx, my; // mouse coordinates


 // when set to true, the canvas will redraw everything
 // invalidate() just sets this to false right now
 // we want to call invalidate() whenever we make a change
var canvasValid = false;

// The node (if any) being selected.
// If in the future we want to select multiple objects, this will get turned into an array
var mySel; 

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
  canvas.onselectstart = function () { return false; }
  
  // fixes mouse co-ordinate problems when there's a border or padding
  // see getMouse for more detail
  if (document.defaultView && document.defaultView.getComputedStyle) {
    stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
  
  // make draw() fire every INTERVAL milliseconds
  setInterval(draw, INTERVAL);
  
  // set our events. Up and down are for dragging,
  // double click is for making new boxes
  canvas.onmousedown = myDown;
  canvas.onmouseup = myUp;
  canvas.ondblclick = myDblClick;
  
  // add custom initialization here:
  
  // add an orange rectangle
  addRect(200, 200, 40, 40, '#FFC02B');
  
  // add a smaller blue rectangle
  addRect(25, 90, 25, 25, '#2BB8FF');
}

//wipes the canvas context
function clear(c) {
  c.clearRect(0, 0, WIDTH, HEIGHT);
}


var pc = {
    x:200,
    y:200,
    r:100
  };

function pieChart(){

  drawChalkArc(ctx,200,200,107,0,2* Math.PI, false);
  drawChalkArc(ctx,200,200,100,0,Math.PI, true);
}

function drawHandle(){
  var mr = Math.sqrt((my*my+mx*mx));
  var y = my* pc.r/mr;
  var x = mx *pc.r/mr;
  drawChalkArc(ctx,pc.x+ x,pc.y+ y,20,0,2*Math.PI,true);
}

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
function draw() {
  if (canvasValid == false) {
    clear(ctx);
    
    // Add stuff you want drawn in the background all the time here
    
    // draw all boxes
    var l = boxes.length;
    for (var i = 0; i < l; i++) {
        drawshape(ctx, boxes[i], boxes[i].fill);
    }

    // draw all paths
    l = paths.length;
    for(var i =0; i < paths.length; i++){
      drawPath(ctx,paths[i]);
    }
    
    // draw selection
    // right now this is just a stroke along the edge of the selected box
    if (mySel != null) {
      ctx.strokeStyle = mySelColor;
      ctx.lineWidth = mySelWidth;
      ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
    }
    
    // Add stuff you want drawn on top all the time here
    pieChart();
    drawHandle();
    
    canvasValid = true;
  }
}

// Draws a single shape to a single context
// draw() will call this with the normal canvas
// myDown will call this with the ghost canvas
function drawshape(context, shape, fill) {
  context.fillStyle = fill;
  
  // We can skip the drawing of elements that have moved off the screen:
  if (shape.x > WIDTH || shape.y > HEIGHT) return; 
  if (shape.x + shape.w < 0 || shape.y + shape.h < 0) return;
  
  context.fillRect(shape.x,shape.y,shape.w,shape.h);
}

function drawPath(context, path){
  $.each(path.deltas, function(index, value){

      drawChalkLine(context, value.x1+path.xoffset,value.y1+path.yoffset, value.x2+path.xoffset, value.y2+path.yoffset);
    }); 
}

function drawChalkLine(context,x,y, x2,y2){
    context.lineWidth = brushDiameter;
    context.strokeStyle = 'rgba(0,255,255,'+(0.4+Math.random()*0.2)+')';
    context.beginPath();
    context.moveTo(x2, y2);   
    context.lineTo(x, y);
    context.stroke();
          
    // Chalk Effect
    var length = Math.round(Math.sqrt(Math.pow(x-x2,2)+Math.pow(y-y2,2))/(5/brushDiameter));
    var xUnit = (x-x2)/length;
    var yUnit = (y-y2)/length;
    for(var i=0; i<length; i++ ){
      var xCurrent = x2+(i*xUnit);  
      var yCurrent = y2+(i*yUnit);
      var xRandom = xCurrent+(Math.random()-0.5)*brushDiameter*1.2;     
      var yRandom = yCurrent+(Math.random()-0.5)*brushDiameter*1.2;
        context.clearRect( xRandom, yRandom, Math.random()*2+2, Math.random()+1);
    }
}

$("#canvas").mousemove(function(){
  console.log("mousemove");
});

function drawChalkArc(context,x,y,r,sAngle,eAngle, fill){
  context.lineWidth = brushDiameter;
  context.strokeStyle = 'rgba(0,255,255,'+(0.4+Math.random()*0.2)+')';
  context.beginPath(); 
  context.arc(x,y,r,sAngle,eAngle);
  if (fill){
    context.fillStyle="white";
    context.fill();
  }else{
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
function myMove(e){
  if (isDrag){
    getMouse(e);
    
    mySel.x = mx - offsetx;
    mySel.y = my - offsety;   
    
    // something is changing position so we better invalidate the canvas!
    invalidate();
  }
  invalidate();
}

// Happens when the mouse is clicked in the canvas
function myDown(e){
  getMouse(e);
  clear(gctx);
  var l = boxes.length;
  for (var i = l-1; i >= 0; i--) {
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

function myUp(){
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
}

// Sets mx,my to the mouse position relative to the canvas
// unfortunately this can be tricky, we have to worry about padding and borders
function getMouse(e) {
      var element = canvas, offsetX = 0, offsetY = 0;

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