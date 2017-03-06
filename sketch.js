var newHeight = 20;
var newWidth = 20;
//setup function executes once
function setup(){
    createCanvas(600,400);
    background(100,150,150);
}

//draw functions loops forever
function draw(){
    if(mouseIsPressed){
 noStroke();
fill(55,114,85);
 ellipse(mouseX,mouseY,newWidth,newHeight);

    }
   
}