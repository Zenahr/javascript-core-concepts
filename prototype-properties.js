// Some shorthand code to make my life easier
const L = function(message) {return console.log(message)}
const T = function(object) {return console.table(object)}

// Constructors are written with capital letters by best practice
// Sidenote: Semicolons are optional because of a feature called Automatic Semicolon Insertion (ASI)

// Constructor definition
function User(first_name, last_name, age, occupation) {
    this.first_name = first_name
    this.last_name = last_name
    this.age = age
    this.occupation = occupation
}

const user = new User('Zenahr', 'Barzani', 23, 'male')
const user_one = new User('Jenny', 'McLaren', 21, 'female')

// Prototype properties
// Every property that we define via the prototype property of our object constructor will be available to use by the "dunder proto" property of the instantiated object
User.prototype.location = 'Berlin'

User.prototype.get_location = function () {return this.first_name + " " + this.last_name + " lives " + "in " + this.location}

// looking at the __proto__ attribute of our object reveals the newly added location property under the prototype domain.
T(user)
L(user) // Notice the new location attribute and get_location() function added to the protype object of the object instance
L(user.location) //returns the newly added location proto property
L(user.get_location())


T(user_one)
L(user_one)
L(user_one.location)
L(user_one.get_location())

// Let's add automatic email address creation functionality to our user objects!
User.prototype.email_domain = '@zenahr.com'
User.prototype.generate_email_address = function () {return this.first_name + this.last_name + this.email_domain}

// And check the email adresses of our users
L(user.generate_email_address())
L(user_one.generate_email_address())