var newHeight = 45;
var newWidth = 45;
//setup function executes once
function setup(){
    createCanvas(600,400);
    background(100,150,150);
}

//draw functions loops forever
function draw(){
     if(mouseIsPressed){
 noStroke();
fill(66,244,235);
 ellipse(mouseX,mouseY,newWidth,newHeight);


    }
   
}