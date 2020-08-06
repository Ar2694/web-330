var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 1.4"));
console.log("");

function Car(model){
this.model = model;
}

Car.prototype.start = function(){
console.log("Car added to the racetrack!");
}
function Truck(model,year){
this.model = model;
this.year = year;
}
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}
function Jeep(model, year, color){
this.model = model;
this.year = year;
this.color = color;
}
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
}


var racetrack = [];

function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

var car = new Car("Focus");

var truck = new Truck("F-150", "2019");
var jeep = new Jeep("Grand Cherokee", "2019", "Blue");

//Create new objects
driveIt(truck);
driveIt(car);
driveIt(jeep);

console.log("\n-- The following vehicles have been added to the racetrack --");
for(var i = 0; i < racetrack.length; i++){
  
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}
// end program



