// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
switch(rover.direction){

  case "N":
    rover.direction = "W";
    break;

  case "W":
    rover.direction = "S";
    break;

  case "S":
    rover.direction = "E";
    break;

  case "E":
    rover.direction = "N";
    break;
}
console.log("turnLeft was called, Rover direction is " + rover.direction) 
}


function turnRight(rover){
  console.log("turnRight was called!");
switch(rover.direction){

    case "N":
      rover.direction = "E";
      break;
  
    case "W":
      rover.direction = "N";
      break;
  
    case "S":
      rover.direction = "W";
      break;
  
    case "E":
      rover.direction = "S";
      break;
  }
  console.log("turnRight was called, Rover direction is " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")

  if(rover.direction == "N") {
    rover.y = (y-1);
  } else if (rover.direction == "S") {
    rover.y = (y+1);
  } else if (rover.direction == "W") {
    rover.x = (x-1);
  } else if (rover.direction == "E") {
    rover.x = (x+1);
  }
  console.log("moveForward was called, Rover position is: " + rover.x + ", " + rover.y);
}
var commands = ["r","f","f","r","f","f","l","f","r","f","f"];

for (var i = 0; i <= commands.length; i++) {

  if(i=="f"){
  console.log(moveForward);
}
  else if (i=="r"){
  console.log(turnRight);
}
else {
  console.log(turnLeft);
}
  }

  console.log(rover.travelLog);