var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 2.2"));
console.log("");

var person = {
    getAge: function(){
        return this.age;
    }
};


var person1 = Object.create(person,{
    "age": {
        "value":"26"
    },
    "fullname": {
        "value":"John Doe"
    },
})


console.log("The person's full name is "+person1.fullname);
console.log("The person's age is "+person1.getAge());

// end program


