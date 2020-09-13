var bullet, wall,thickness;
var speed,weight;
var damage=0;

function setup() 
{
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,100,20);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  
  wall=createSprite(1300,200,thickness,height/2);
  wall.shapeColor='rgb(255,255,255)';

}

function draw()
{
  background(0);  

  if(isTouching(bullet, wall))
  {
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if (damage<10)
    {
      wall.shapeColor="green";
    }
    else
    {
      wall.shapeColor="red";
    }
  }

  //bullet.debug=true;
  //wall.debug=true;

  drawSprites();

  //text(damage,50,100);
}