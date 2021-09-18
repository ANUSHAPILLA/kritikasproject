
var bg
function  preload(params) {
    bgi=loadImage("mainbg.png")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    bg=createSprite(0,0,displayWidth,displayHeight)
    bg.addImage(bgi)
}
function draw(){
    background("white");
    drawSprites()
}

