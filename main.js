//Sunrise Assignment

//Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Store images in variables
let clothCloud = document.getElementById("clothcloud-img");

//Let's draw some stuff using the graphics context (ctx)

// DRAW RECTANGLES
//Set the outline(stroke) and fill colors
//Use any valid css colors; name, rgb(), rgba(), hex #FF0033

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 800, 500); // Draw a filled rectangle

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(400, 450, 20, 0, 2 * Math.PI); // Half Circle (0 to PI)  with center (250, 500) and radius 20
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(0, 450, 800, 600); //Draw a filled square

//DRAW IMAGES
ctx.drawImage(clothCloud, 325, 250); // Draw image with top left corner of (200, 200)
ctx.drawImage(clothCloud, 365, 225); // Draw image with top left corner of (200, 350)5
