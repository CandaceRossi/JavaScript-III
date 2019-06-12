/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding
 * 2. Implicit Binding
 * 3. New Binding
 * 4. Explicit Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function hello(name) {
    return "Hello," + this;
    this;
}
console.log(hello('web 21'));

// Principle 2

// code example for Implicit Binding
let foodie = {
    name: "candace",
    age: 34,
    food: "Falafel",
    cook: function() {
        return `${this.name} loves to cook ${this.food}`;
    }
}
console.log(foodie.cook());

// Principle 3

// code example for New Binding
function CuteAnimal(cameo) {
    this.sound = 'pet me';
    this.cameo = cameo;
    this.speak = function() {
        console.log(this.sound + this.cameo);
        console.log(this);
    }
}
const kitty = new CuteAnimal('Meow');
const puppy = new CuteAnimal('Arf');
kitty.speak();
puppy.speak();

// Principle 4

// code example for Explicit Binding