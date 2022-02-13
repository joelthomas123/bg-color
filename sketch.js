
function setup() {
  createCanvas(400,400);
  block=createSprite(200,200,25,25)
  block.shapeColor="red"

}

function draw() 
{
  
  if (keyDown("right"))
  {background("blue");   
  }

  if (keyDown("left"))
  {background("yellow");   
  }

  if (keyDown("up"))
  {background("pink");   
  }

  if (keyDown("down"))
  {background("purple");   
  }
drawSprites()
}




