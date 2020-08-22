var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/
/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 3.2"));
console.log("");
// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}
function Oracle(properties) {
    this.username = properties.username || "or-admin";
    this.password = properties.password || "or-s3cret";
    this.server = properties.server || "localhost:5000";
    this.version = properties.version || 5.6
}

function Informix(properties) { 
    this.username = properties.username || "in-admin";
    this.password = properties.password || "in-s3cret";
    this.server = properties.server || "localhost:3000";
 }

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: "sorto123",
    password: "mypassword"
});

var inforfmixFactory = new DatabaseFactory();

var informix = inforfmixFactory.createDatabase({
    databaseType: 'Informix',
    username: "123sorto",
    password: "secretPassword"
});

Oracle.prototype.output = function () {
    return 'Oracle {'+
            '\n   username: ' + this.username +
            '\n   password: ' + this.password +
            '\n   server: ' + this.server +
            '\n   version: ' + this.version +
            '\n}';
}


Informix.prototype.output = function () {
    return 'Informix {'+
            '\n   username: ' + this.username +
            '\n   password: ' + this.password +
            '\n   server: ' + this.server +
            '\n}';
}



console.log(oracle.output());
console.log("");
console.log(informix.output());
// end program



