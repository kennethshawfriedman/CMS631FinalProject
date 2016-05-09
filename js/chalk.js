$(document).ready(chalkboard);

function chalkboard(){
	$('#chalkboard').remove();
	$('.chalk').remove();
	$('body').prepend('<div class="panel"><a class="link" target="_blank">Save</a></div>');
	$('body').prepend('<img src="img/bg.png" id="pattern" width=50 height=50>');
	$('body').prepend('<canvas id="chalkboard"></canvas>');
	$('body').prepend('<div class="chalk"></div>');
	
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
	var eraser = false;
	var xLast = 0;
	var yLast = 0;
	var brushDiameter = 7;
	var eraserWidth = 50;
	var eraserHeight = 100;
	
	var c=document.getElementById("chalkboard");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)';
	ctx.lineWidth = 10;
	ctx.moveTo(100,200);
	ctx.lineTo(100,600);
	ctx.stroke();

	var c=document.getElementById("chalkboard");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)';
	ctx.lineWidth = 10;
	ctx.moveTo(100,400);
	ctx.lineTo(1000,400);
	ctx.stroke();

	var c=document.getElementById("chalkboard");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)';
	ctx.lineWidth = 10;
	ctx.moveTo(1000,200);
	ctx.lineTo(1000,600);
	ctx.stroke();

	var canvas = document.getElementById("chalkboard");
	var ctx = canvas.getContext("2d");
	ctx.font = "20px Arial";
	ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
	ctx.fillText("0% Women",80,190);

	var canvas = document.getElementById("chalkboard");
	var ctx = canvas.getContext("2d");
	ctx.font = "20px Arial";
	ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
	ctx.fillText("100% Women",900,190);

	var canvas = document.getElementById("chalkboard");
	var ctx = canvas.getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
	ctx.fillText("What Percent of Faculty are Women?",300,50);
	
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
				if(eraser){
					erase(mouseX,mouseY);
				}else{
					count++;
    				sum+=mouseX;				
					draw(mouseX,mouseY);
					}
				}
		}else{
			$('.chalk').css('top',height-10);
			}
		});
	$(document).mousedown(function(evt){
		console.log("mousedown");
		mouseD = true;
		xLast = mouseX;
		yLast = mouseY;
		if(evt.button == 2){
			erase(mouseX,mouseY);
			eraser = true;
			$('.chalk').addClass('eraser');
		}else{
			if(!$('.panel').is(':hover')){
				draw(mouseX+1,mouseY+1);
			}	
			reset();	
		}
	});

	$(document).mouseup(function(evt){ 
		console.log("mouseup");
		mouseD = false;
		if(evt.button == 2){
			eraser = false;
			$('.chalk').removeClass('eraser');
		}
		showResult();
	});
	
	var showResult = function() {
		var average = sum/count;
		var guesspercent = (average-100)/900

		var c=document.getElementById("chalkboard");
		var ctx=c.getContext("2d");
		ctx.strokeStyle = 'rgba(2, 136, 77, 1.0)';
		ctx.fillStyle = 'rgba(2, 136, 77, 1.0)';
		ctx.fillRect(100,300,189,200);
		ctx.stroke();
		
		var canvas = document.getElementById("chalkboard");
		var ctx = canvas.getContext("2d");
		ctx.font = "15px Arial";
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		
		ctx.fillText("You guessed "+parseInt(guesspercent*100).toString()+"%", average, 150);
		
		var canvas = document.getElementById("chalkboard");
		var ctx = canvas.getContext("2d");
		ctx.font = "15px Arial";
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		ctx.fillText("Only 21% of MIT faculty are women", 160, 550);
		
		var infoResult;
		
		var guessInt = guesspercent*100;
		
		if (guessInt<21) {
			infoResult = "It's actually a little better than that.";
		} else if (guessInt > 21 && guessInt<45) {
			infoResult = "Surprisingly, it's worse than that.";
		} else if (guessInt > 45 && guessInt < 56) {
			infoResult = "You think it's around 50/50? Nope.";
		} else if (guessInt >56) {
			infoResult = "You think there are significantly more women than men? No no no.";
		} else {
			infoResult = guessInt.toString();
		}
		
		var canvas = document.getElementById("chalkboard");
		var ctx = canvas.getContext("2d");
		ctx.font = "20px Arial";
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		ctx.fillText(infoResult, 300, 700);
	}

	var reset = function(){
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
		ctx.strokeStyle = 'rgba(255,255,255,'+(0.4+Math.random()*0.2)+')';
		ctx.beginPath();
  		ctx.moveTo(xLast, yLast);		
  		ctx.lineTo(x, y);
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

	function erase(x,y){
		ctx.clearRect (x-0.5*eraserWidth,y-0.5*eraserHeight,eraserWidth,eraserHeight);
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