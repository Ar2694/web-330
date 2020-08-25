var header = require('../header.js');
/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 24 August 2020
; Modified By: Arlix Sorto
; Description: The Singleton Pattern
;===========================================
*/ 
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 3.3"));
console.log("");

//Database singleton class
var DatabaseSingleton = (function () {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initalized!");
        return postgresDatabase;
    }

    return{
        getIntance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

//create two instances objects.
function DatabaseSingletonTest(){
    var database1 =  DatabaseSingleton.getIntance();
    var database2 = DatabaseSingleton.getIntance();

    console.log("Same database instance? " + (database1 === database2))
}
DatabaseSingletonTest();
// end program