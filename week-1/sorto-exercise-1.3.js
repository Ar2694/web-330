

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

/* Import header.js from the root directory*/
const header = require("../header.js");

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 1.3"));
console.log("");

function Cellphone(manufacturer, model, color, price) {  

    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){ 
        return this.price;
    };
    this.getModel = function(){
        return this.model;
    };
    this.getDetails = function(){
        return "Manufacturer: " +this.manufacturer +"\nModel: " + this.getModel() + "\nColor: " + this.color + 
        "\nPrice: " + this.getPrice(); 
    };

}
//Create a new cellphone object.
var cellphone = new Cellphone("Apple", "iPhone 11", "Black","$699");
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(cellphone.getDetails());



// end program