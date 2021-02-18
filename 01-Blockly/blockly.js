//Insert level 9 code below
moveForward();
moveForward();
moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();
while (notDone()) {
    moveForward();
  }
  while (notDone()) {
    moveForward();
    turnLeft();
    moveForward();
    turnRight();
  }
  moveForward();
moveForward();
turnLeft();
while (notDone()) {
  moveForward();
}
while (notDone()) {
    moveForward();
    if (isPathLeft()) {
      turnLeft();
    }
  }
  while (notDone()) {
    moveForward();
    if (isPathRight()) {
      turnRight();
    }
  }
  while (notDone()) {
    moveForward();
    if (isPathLeft()) {
      turnLeft();
    }
    if (isPathRight()) {
      turnRight();
    }
  }
  while (notDone()) {
    if (isPathForward()) {
      moveForward();
    } else {
      turnLeft();
    }
  }