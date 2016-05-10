$(document).ready(chalkboard);
var savedGesture = [];
var square = [{"x1":461.6000061035156,"y1":307.3999938964844,"x2":462.6000061035156,"y2":308.3999938964844},{"x1":462.6000061035156,"y1":308.3999938964844,"x2":462,"y2":339},{"x1":462,"y1":339,"x2":462,"y2":349},{"x1":462,"y1":349,"x2":462,"y2":357},{"x1":462,"y1":357,"x2":462,"y2":362},{"x1":462,"y1":362,"x2":461.20001220703125,"y2":367.3999938964844},{"x1":461.20001220703125,"y1":367.3999938964844,"x2":460.79998779296875,"y2":371.3999938964844},{"x1":460.79998779296875,"y1":371.3999938964844,"x2":460,"y2":375},{"x1":460,"y1":375,"x2":460.79998779296875,"y2":378.20001220703125},{"x1":460.79998779296875,"y1":378.20001220703125,"x2":460.79998779296875,"y2":380.6000061035156},{"x1":460.79998779296875,"y1":380.6000061035156,"x2":460.79998779296875,"y2":382.6000061035156},{"x1":460.79998779296875,"y1":382.6000061035156,"x2":460.79998779296875,"y2":383.79998779296875},{"x1":460.79998779296875,"y1":383.79998779296875,"x2":460.79998779296875,"y2":384.6000061035156},{"x1":460.79998779296875,"y1":384.6000061035156,"x2":460.79998779296875,"y2":385.3999938964844},{"x1":460.79998779296875,"y1":385.3999938964844,"x2":461.6000061035156,"y2":386.20001220703125},{"x1":461.6000061035156,"y1":386.20001220703125,"x2":462,"y2":387},{"x1":462,"y1":387,"x2":464,"y2":387},{"x1":464,"y1":387,"x2":466,"y2":387},{"x1":466,"y1":387,"x2":468.3999938964844,"y2":388.20001220703125},{"x1":468.3999938964844,"y1":388.20001220703125,"x2":470.79998779296875,"y2":388.20001220703125},{"x1":470.79998779296875,"y1":388.20001220703125,"x2":473.20001220703125,"y2":387.79998779296875},{"x1":473.20001220703125,"y1":387.79998779296875,"x2":476,"y2":387},{"x1":476,"y1":387,"x2":480,"y2":386},{"x1":480,"y1":386,"x2":486.79998779296875,"y2":386.20001220703125},{"x1":486.79998779296875,"y1":386.20001220703125,"x2":492.3999938964844,"y2":386.20001220703125},{"x1":492.3999938964844,"y1":386.20001220703125,"x2":496.3999938964844,"y2":386.20001220703125},{"x1":496.3999938964844,"y1":386.20001220703125,"x2":501.20001220703125,"y2":386.20001220703125},{"x1":501.20001220703125,"y1":386.20001220703125,"x2":506,"y2":386},{"x1":506,"y1":386,"x2":510,"y2":387},{"x1":510,"y1":387,"x2":513.2000122070312,"y2":387.3999938964844},{"x1":513.2000122070312,"y1":387.3999938964844,"x2":516,"y2":388},{"x1":516,"y1":388,"x2":518,"y2":389},{"x1":518,"y1":389,"x2":520.7999877929688,"y2":390.20001220703125},{"x1":520.7999877929688,"y1":390.20001220703125,"x2":522.7999877929688,"y2":391.3999938964844},{"x1":522.7999877929688,"y1":391.3999938964844,"x2":524.4000244140625,"y2":392.20001220703125},{"x1":524.4000244140625,"y1":392.20001220703125,"x2":526,"y2":393},{"x1":526,"y1":393,"x2":527.5999755859375,"y2":394.20001220703125},{"x1":527.5999755859375,"y1":394.20001220703125,"x2":528.7999877929688,"y2":394.6000061035156},{"x1":528.7999877929688,"y1":394.6000061035156,"x2":530,"y2":395},{"x1":530,"y1":395,"x2":532,"y2":395},{"x1":532,"y1":395,"x2":533.5999755859375,"y2":394.6000061035156},{"x1":533.5999755859375,"y1":394.6000061035156,"x2":535.2000122070312,"y2":393.79998779296875},{"x1":535.2000122070312,"y1":393.79998779296875,"x2":536.7999877929688,"y2":392.20001220703125},{"x1":536.7999877929688,"y1":392.20001220703125,"x2":538.4000244140625,"y2":389.79998779296875},{"x1":538.4000244140625,"y1":389.79998779296875,"x2":540.4000244140625,"y2":386.20001220703125},{"x1":540.4000244140625,"y1":386.20001220703125,"x2":541.5999755859375,"y2":382.20001220703125},{"x1":541.5999755859375,"y1":382.20001220703125,"x2":542.7999877929688,"y2":378.20001220703125},{"x1":542.7999877929688,"y1":378.20001220703125,"x2":543.5999755859375,"y2":374.6000061035156},{"x1":543.5999755859375,"y1":374.6000061035156,"x2":544,"y2":371},{"x1":544,"y1":371,"x2":544.7999877929688,"y2":366.6000061035156},{"x1":544.7999877929688,"y1":366.6000061035156,"x2":545.2000122070312,"y2":362.20001220703125},{"x1":545.2000122070312,"y1":362.20001220703125,"x2":545.5999755859375,"y2":358.6000061035156},{"x1":545.5999755859375,"y1":358.6000061035156,"x2":545.5999755859375,"y2":354.20001220703125},{"x1":545.5999755859375,"y1":354.20001220703125,"x2":546,"y2":350},{"x1":546,"y1":350,"x2":546,"y2":345},{"x1":546,"y1":345,"x2":546.7999877929688,"y2":336.20001220703125},{"x1":546.7999877929688,"y1":336.20001220703125,"x2":547.2000122070312,"y2":332.6000061035156},{"x1":547.2000122070312,"y1":332.6000061035156,"x2":547.5999755859375,"y2":329.3999938964844},{"x1":547.5999755859375,"y1":329.3999938964844,"x2":548,"y2":326},{"x1":548,"y1":326,"x2":548,"y2":323},{"x1":548,"y1":323,"x2":548,"y2":320},{"x1":548,"y1":320,"x2":548,"y2":318},{"x1":548,"y1":318,"x2":548,"y2":317},{"x1":548,"y1":317,"x2":548,"y2":315},{"x1":548,"y1":315,"x2":547.5999755859375,"y2":314.6000061035156},{"x1":547.5999755859375,"y1":314.6000061035156,"x2":547.5999755859375,"y2":313.79998779296875},{"x1":547.5999755859375,"y1":313.79998779296875,"x2":547,"y2":313},{"x1":547,"y1":313,"x2":546.7999877929688,"y2":312.20001220703125},{"x1":546.7999877929688,"y1":312.20001220703125,"x2":546.4000244140625,"y2":311.3999938964844},{"x1":546.4000244140625,"y1":311.3999938964844,"x2":546,"y2":310},{"x1":546,"y1":310,"x2":545.2000122070312,"y2":309.79998779296875},{"x1":545.2000122070312,"y1":309.79998779296875,"x2":543,"y2":309},{"x1":543,"y1":309,"x2":542,"y2":308},{"x1":542,"y1":308,"x2":539.5999755859375,"y2":307.79998779296875},{"x1":539.5999755859375,"y1":307.79998779296875,"x2":536.7999877929688,"y2":307.3999938964844},{"x1":536.7999877929688,"y1":307.3999938964844,"x2":534,"y2":307},{"x1":534,"y1":307,"x2":532,"y2":306},{"x1":532,"y1":306,"x2":530,"y2":306},{"x1":530,"y1":306,"x2":527.5999755859375,"y2":306.20001220703125},{"x1":527.5999755859375,"y1":306.20001220703125,"x2":525.5999755859375,"y2":305.79998779296875},{"x1":525.5999755859375,"y1":305.79998779296875,"x2":520.7999877929688,"y2":305.3999938964844},{"x1":520.7999877929688,"y1":305.3999938964844,"x2":516.4000244140625,"y2":305.3999938964844},{"x1":516.4000244140625,"y1":305.3999938964844,"x2":512,"y2":305},{"x1":512,"y1":305,"x2":506.79998779296875,"y2":304.6000061035156},{"x1":506.79998779296875,"y1":304.6000061035156,"x2":500,"y2":303},{"x1":500,"y1":303,"x2":494,"y2":303},{"x1":494,"y1":303,"x2":490.3999938964844,"y2":303.3999938964844},{"x1":490.3999938964844,"y1":303.3999938964844,"x2":488.3999938964844,"y2":303.3999938964844},{"x1":488.3999938964844,"y1":303.3999938964844,"x2":486.79998779296875,"y2":303.3999938964844},{"x1":486.79998779296875,"y1":303.3999938964844,"x2":485.6000061035156,"y2":303.3999938964844},{"x1":485.6000061035156,"y1":303.3999938964844,"x2":484.79998779296875,"y2":303.3999938964844},{"x1":484.79998779296875,"y1":303.3999938964844,"x2":484,"y2":303},{"x1":484,"y1":303,"x2":483.6000061035156,"y2":303.79998779296875}];

function chalkboard(){
	// Remove the placeholder and create the chalkboard
	$('#chalkboard').remove();
	$('.chalk').remove();

	$('body').prepend('<div id="background"></div>');
	$('body').prepend('<canvas id="chalkboard"></canvas>');

	$('body').prepend('<div class="chalk"></div>');

	// create a button to wipe the board for testing
	$("body").prepend($("<input>", {type: "button", id:"wipe"}));
	var wipe = $("#wipe");
	wipe.text("WIPE");
	wipe.click( function(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		playback(square);
	});
	
	// The chalkboard view
	var canvas = document.getElementById("chalkboard");
	$('#chalkboard').css('width',$(window).width());
	$('#chalkboard').css('height',$(window).height());
	canvas.width = $(window).width();
	canvas.height = $(window).height();
	
	var ctx = canvas.getContext("2d");
	
	var width = canvas.width;
	var height = canvas.height;
	var mouseX = 0;
	var mouseY = 0;
	var mouseD = false;
	var xLast = 0;
	var yLast = 0;
	var brushDiameter = 7;
	ctx.lineWidth = brushDiameter;
	ctx.lineCap = 'round';
	
	var questionTexts = [];
	var chalkPaths = [];

	function addText(text, xloc, yloc){
		var newElement = $("<p>", {class:"notation"});
		newElement.text(text);
		newElement.css({"left":xloc.toString()+"px", "top": yloc.toString()+"px"});
		$("body").append(newElement);
		questionTexts.push(newElement);
	};

	function playback(savedShape){
		$.each(savedShape, function(index, value){
			drawChalkLine(value.x1,value.y1, value.x2, value.y2);
		});
	};
	
	var pieChart = function(){

	};
	var	twoAxisChart = function(){};
	var barGraph = function(){};

	var drawSliderQuestion = function(xloc,yloc, width){
		ctx.lineWidth = 10;
		var left = xloc;
		var top = yloc;
		var scaleWidth = 900;
		var scaleHeight = 200;
		var right = left+scaleWidth;
		var bottom = top+scaleHeight;
		var mid = top+scaleHeight/2;

		drawChalkLine(left,top,left,bottom);
		drawChalkLine(right,top,right,bottom);
		drawChalkLine(left,mid,right,mid);

		// The old way of doing things for property reference
		// ctx.beginPath();
		// ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)';
		// ctx.lineWidth = 10;
		// ctx.moveTo(100,400);
		// ctx.lineTo(1000,400);
		// ctx.stroke();
	};
	

	var drawQuestion = function (){
		ctx.font = "20px Arial";
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		ctx.fillText("0% Women",80,190);
		// var leftNotation = $("<p>", {id:"description-left",class: "notation"})
		// $('body').append(leftNotation);
		// leftNotation.text("0% Women");
		// leftNotation.css({"left":"80px", "top": "190px"});

		ctx.font = "20px Arial";
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		ctx.fillText("100% Women",900,190);

		ctx.font = "30px Arial";
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		ctx.fillText("What Percent of Faculty are Women?",300,50);
		ctx.fillText("Draw a line to show your belief.",350,100);
		
	}

	
		
	$('#chalkboard').css('cursor','none');
	document.onselectstart = function(){ return false; };
	ctx.fillStyle = 'rgba(255,255,255,0.5)';	
	ctx.strokeStyle = 'rgba(255,255,255,0.5)';	
    ctx.lineWidth = brushDiameter;
	ctx.lineCap = 'round';

	var patImg = document.getElementById('pattern');

	var sum = 0;
	var count = 0;
	document.addEventListener('touchmove', function(evt) {
		console.log("touchmove");
        var touch = evt.touches[0];
        mouseX = touch.pageX;
        mouseY = touch.pageY;
        count++;
        sum+=mouseX;
        if (mouseY < height && mouseX < width) {
            evt.preventDefault();
            $('.chalk').css('left', mouseX + 'px');
            $('.chalk').css('top', mouseY + 'px');
            //$('.chalk').css('display', 'none');
            if (mouseD) {
                draw(mouseX, mouseY);
            }
        }
    }, false);
    document.addEventListener('touchstart', function(evt) {
        //evt.preventDefault();
        console.log("touchstart");
        var touch = evt.touches[0];
        reset();	
        mouseD = true;
        mouseX = touch.pageX;
        mouseY = touch.pageY;
        xLast = mouseX;
        yLast = mouseY;
        draw(mouseX + 1, mouseY + 1);
    }, false);
    document.addEventListener('touchend', function(evt) {
    	console.log('touchend');
        mouseD = false;
        
        showResult();	

   
    }, false);
    $('#chalkboard').css('cursor','none');
	ctx.fillStyle = 'rgba(255,255,255,0.5)';	
	ctx.strokeStyle = 'rgba(255,255,255,0.5)';	
    ctx.lineWidth = brushDiameter;
	ctx.lineCap = 'round';
	
	$(document).mousemove(function(evt){
		console.log("mousemove");
		mouseX = evt.pageX;
		mouseY = evt.pageY;
		if(mouseY<height && mouseX<width){
			$('.chalk').css('left',(mouseX-0.5*brushDiameter)+'px');
			$('.chalk').css('top',(mouseY-0.5*brushDiameter)+'px');
			if(mouseD){
				count++;
				sum+=mouseX;				
				draw(mouseX,mouseY);
			}
			
		}else{
			$('.chalk').css('top',height-10);
			}
		});
	$(document).mousedown(function(evt){
		console.log("mousedown");

		// playback
		mouseD = true;
		xLast = mouseX;
		yLast = mouseY;
		
		if(!$('.panel').is(':hover')){
			draw(mouseX+1,mouseY+1);
		}	
		reset();	
		
	});

	$(document).mouseup(function(evt){ 
		console.log("mouseup");
		mouseD = false;
		showResult();
	});
	
	var showResult = function() {
		var average = sum/count;
		var guesspercent = (average-100)/900

		// var c=document.getElementById("chalkboard");
		// var ctx=c.getContext("2d");
		// ctx.strokeStyle = 'rgba(2, 136f, 77, 1.0)';
		// ctx.fillStyle = 'rgba(2, 136, 77, 1.0)';
		// ctx.fillRect(100,300,189,200);
		// ctx.stroke();
		
		// var canvas = document.getElementById("chalkboard");
		// var ctx = canvas.getContext("2d");
		// ctx.font = "15px Arial";
		// ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		
		// ctx.fillText("You guessed "+parseInt(guesspercent*100).toString()+"%", average, 150);
		
		// var canvas = document.getElementById("chalkboard");
		// var ctx = canvas.getContext("2d");
		// ctx.font = "15px Arial";
		// ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		// ctx.fillText("Only 21% of MIT faculty are women", 160, 550);
		
		// var infoResult;
		
		// var guessInt = guesspercent*100;
		
		// if (guessInt<21) {
		// 	infoResult = "It's actually a little better than that.";
		// } else if (guessInt > 21 && guessInt<45) {
		// 	infoResult = "Surprisingly, it's worse than that.";
		// } else if (guessInt > 45 && guessInt < 56) {
		// 	infoResult = "You think it's around 50/50? Nope.";
		// } else if (guessInt >56) {
		// 	infoResult = "You think there are significantly more women than men? No no no.";
		// } else {
		// 	infoResult = guessInt.toString();
		// }
		
		// var canvas = document.getElementById("chalkboard");
		// var ctx = canvas.getContext("2d");
		// ctx.font = "20px Arial";
		// ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		// ctx.fillText(infoResult, 300, 700);
	}

	var reset = function(){
		savedGesture = [];
		sum = 0;
		count = 0;
		average = 0;
	}

	$(document).keyup(function(evt){
		if(evt.keyCode == 32){
			ctx.clearRect(0,0,width,height);
			layPattern();
		}
	});

	$(document).keyup(function(evt){
		if(evt.keyCode == 83){
			changeLink();
		}
	});

	document.oncontextmenu = function() {return false;};
         
	function draw(x,y){
		ctx.strokeStyle = 'rgba(2, 136, 77,'+(0.4+Math.random()*0.2)+')';
		ctx.beginPath();
  		ctx.moveTo(xLast, yLast);		
  		ctx.lineTo(x, y);
  		savedGesture.push({"x1":xLast,"y1": yLast, "x2":x, "y2":y});
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

	function drawChalkLine(x,y, x2,y2,color){

		ctx.strokeStyle = 'rgba(255,255,255,'+(0.4+Math.random()*0.2)+')';
		ctx.beginPath();
  		ctx.moveTo(x2, y2);		
  		ctx.lineTo(x, y);
  		ctx.stroke();
          
  		// Chalk Effect
		var length = Math.round(Math.sqrt(Math.pow(x-x2,2)+Math.pow(y-y2,2))/(5/brushDiameter));
		var xUnit = (x-x2)/length;
		var yUnit = (y-y2)/length;
		for(var i=0; i<length; i++ ){
			var xCurrent = x2+(i*xUnit);	
			var yCurrent = y2+(i*yUnit);
			var xRandom = xCurrent+(Math.random()-0.5)*brushDiameter*1.2;			
			var yRandom = yCurrent+(Math.random()-0.5)*brushDiameter*1.2;
    		ctx.clearRect( xRandom, yRandom, Math.random()*2+2, Math.random()+1);
			}
	}

	function drawChalkArc(){

	}

	$('.link').click(function(evt){

		$('.download').remove();

		var imgCanvas = document.createElement('canvas');
		var imgCtx = imgCanvas.getContext("2d");
		var pattern = imgCtx.createPattern(patImg,'repeat');

		imgCanvas.width = width;
		imgCanvas.height = height;

		imgCtx.fillStyle = pattern;
		imgCtx.rect(0,0,width,height);
		imgCtx.fill();

		var layimage = new Image;
		layimage.src = canvas.toDataURL("image/png");

		setTimeout(function(){

			imgCtx.drawImage(layimage,0,0);

			var compimage = imgCanvas.toDataURL("image/png");//.replace('image/png','image/octet-stream');

			$('.panel').append('<a href="'+compimage+'" download="chalkboard.png" class="download">Download</a>');
			$('.download').click(function(){
				IEsave(compimage);
			});
		
		}, 500);


	});

	function IEsave(ctximage){
		setTimeout(function(){
			var win = window.open();
			$(win.document.body).html('<img src="'+ctximage+'" name="chalkboard.png">');
		},500);
	}

	$(window).resize(function(){
		// chalkboard();
	});

} 