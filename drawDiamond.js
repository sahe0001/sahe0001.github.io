function drawStep(){
  moveForward();
  turnLeft();
  moveForward();
}

function right(){
  turnLeft();
  turnLeft();
  turnLeft();
}

function drawSide(){
  drawStep();
  right();
  drawStep();
  right();
  drawStep();
  right();
  moveForward();
}

function drawDiamond(){
  drawSide();
  right();
  drawSide();
  right();
  drawSide();
  right();
  drawSide();
  right();
}

drawDiamond();
