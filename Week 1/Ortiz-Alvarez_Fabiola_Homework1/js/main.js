/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
// Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
// Use Modernizr to verify that your browser supports canvas, include a fallback message

 ********************************************/
 //if(Modernizr.canvas){


 //}else {
	 //alert("Browse doesn't support Canvas!!!");
//}

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

if(Modernizr.canvas){

var theCanvas = document.getElementById("Canvas1");
var ctx = theCanvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.fillStyle = "rgb(68, 100, 255)";
ctx.strokeRect(0, 0, 50, 100);
ctx.fillRect(0, 0, 50, 100);

}else {
	alert("Your browser does not support Canvas!");
}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
if (Modernizr.canvas) {
	var Canvas2 = document.getElementById("Canvas2");
	var ctx2 = Canvas2.getContext("2d");

	ctx2.fillStyle = "rgba(255, 50, 68, 0.5)";
	ctx2.strokeStyle = "black";

	ctx2.beginPath();
	ctx2.arc(50, 50, 30, 0, 2*Math.PI, true);
	ctx2.fill();
	ctx2.stroke();

}else {
	alert("Your browser does not support Canvas!");
}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

if (Modernizr.canvas) {
	var Canvas3 = document.getElementById("Canvas3");
	var ctx3 = Canvas3.getContext("2d");

	ctx3.translate(50, 50);

	for (var i = 5; i--;) {
		ctx3.lineTo(0, 25);
		ctx3.translate(0, 25);
		ctx3.rotate((Math.PI * 2 / 10));
		ctx3.lineTo(0, - 25);
		ctx3.translate(0, - 25);
		ctx3.rotate(-(Math.PI * 6 / 10));
	}
	ctx3.lineTo(0, 25);
	ctx3.closePath();
	ctx3.strokeStyle = "black";
	ctx3.lineWidth = 5;
	ctx3.stroke();
	ctx3.fillStyle = "red";
	ctx3.fill();

}else {
	alert("Your browser does not support Canvas!");
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

if (Modernizr.canvas) {
	var Canvas4 = document.getElementById("Canvas4");
	var ctx4 = Canvas4.getContext("2d");

	ctx4.strokeStyle = "black";
	ctx4.lineWidth = 2;
	ctx4.beginPath();
	ctx4.moveTo(50, 175);
	ctx4.bezierCurveTo(50, 100, 175, 100, 175, 175);
	ctx4.stroke();

	ctx4.strokeStyle = "black";

	ctx4.beginPath();
	ctx4.moveTo(175, 174);
	ctx4.lineTo(145, 160);

	ctx4.moveTo(145, 160);
	ctx4.lineTo(115, 174);

	ctx4.moveTo(115, 174);
	ctx4.lineTo(85, 160);

	ctx4.moveTo(85, 160);
	ctx4.lineTo(50, 175);
	ctx4.stroke();

}else {
	alert("Your browser does not support Canvas!");
}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

if (Modernizr.canvas) {
	var Canvas5 = document.getElementById("Canvas5");
	var ctx5 = Canvas5.getContext("2d");

	var text = "This class is giving me a headache!!!";

	ctx5.font = "18pt Verdana";
	ctx5.fillStyle = "black";
	ctx5.strokeStyle = "red";
	ctx5.fillText(text, 25, 50);
	ctx5.strokeText(text, 25, 50);

}else {
	alert("Your browser does not support Canvas!");
}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

if (Modernizr.canvas) {
	var Canvas6 = document.getElementById("Canvas6");
	var ctx6 = Canvas6.getContext("2d");

	var srcLogo = document.getElementById("logo");
	ctx6.drawImage(srcLogo, 0, 0);

	ctx6.drawImage(srcLogo, 0, 1100, 1650, 544);

	ctx6.drawImage(srcLogo, 310, 200, 800, 300, 1800, 1300, 800, 300 );

}else {
	alert("Your browser does not support Canvas!");
}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

if (Modernizr.canvas) {
	var Canvas7 = document.getElementById("Canvas7");
	var ctx7 = Canvas7.getContext("2d");

	var linGrd = ctx7.createLinearGradient(20, 20, 50, 280);

	linGrd.addColorStop(0, "#000");
	linGrd.addColorStop(.75, "#3A5F0B");
	linGrd.addColorStop(1, "#727b84");

	ctx7.fillStyle = linGrd;
	ctx7.fillRect(0, 0, 600, 500);

	var moon = ctx7.createRadialGradient(65, 75, 15, 15, 75, 100);

	moon.addColorStop(0, "#828282");
	moon.addColorStop(.5, "#E5E5E5");
	moon.addColorStop(1, "#DB2929");

	ctx7.fillStyle = moon;

	ctx7.beginPath();
	ctx7.arc(75, 75, 50, 0, 2*Math.PI);
	ctx7.fill();
	ctx7.stroke();

	var srcVader = document.getElementById("vader");
	var srcYoda = document. getElementById("yoda");

	ctx7.drawImage(srcVader, 275, 225, 304.5, 271.775);
	ctx7.drawImage(srcYoda, 0, 225, 193.914, 269.892);

	var wars = "Star Wars Ultimate Battle!";

	ctx7.font = "30pt Verdana";
	ctx7.fillStyle = "yellow";
	ctx7.strokeStyle = "black";
	ctx7.fillText(wars, 25, 50);
	ctx7.strokeText(wars, 25, 50);

}else {
	alert("Your browser does not support Canvas!");
}
