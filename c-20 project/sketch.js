var body,r,g,b ;

function setup(){
    createCanvas(400,400);

    body=createSprite(200,200,10,10);
    body.color="red";
}

function draw(){
    background(r,g,b);

    body.x=World.mouseX;
    body.y=World.mouseY;
    r=200;
    b=body.x;
    g=body.y;
    body.display();
    drawSprites();
}