// Some shorthand code to make my life easier
const L = function(message) {return console.log(message)}
const T = function(object) {return console.table(object)}

// Constructors are written with capital letters by best practice
// Sidenote: Semicolons are optional because of a feature called Automatic Semicolon Insertion (ASI)

// Constructor definition
function User(firstName, lastName, age, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
}

// Calling constructors create object instances based on the properties defined in the function head (function parameters)

// Constructor call
var user_one = new User('Zenahr', 'Barzani', 23, 'nerd')
var user_two = new User('Lily', 'Peterson', 25, 'singer songwriter')

// Print both objects in a pretty way using the console.table() function
T(user_one)
T(user_two)