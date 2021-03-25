/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments. done!
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

   const personMary = new Person("mary", 50);
   console.log (personMary);


Person.prototype.eat = function(){
    const someFood = [].lenght <= 10;//pushing an array to another array?
    this.stomach.push(someFood);
  } 

  Person.prototype.poop = function(){
    this.stomach = [];
  } 

  
  Person.prototype.toString = function(){
    return `${this.name},${this.age}`
  } 


  
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = tank;
    this.odometer = odometer;
  }

  const tank = 0;
  const odometer = 0;

  Car.prototype.fill = function(){
    if(tank = 0){
      return tank + 100;
    }
  }
  
  const carModel = new Car("chevy", 20);
  console.log(carModel);


  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

 function Baby(name,age,favoriteToy) {
   this.name = name;
   this.age = age;
   this.favoriteToy = favoriteToy;
  }

  function Dad(name,age,favoriteToy) {
    Baby.call(this,name,age,favoriteToy)
   }

  Baby.prototype.play = function(){
    console.log(`Playing with ${this.favoriteToy}`);
  }

 const babySubPerson = new Dad('dad',45,'motorcycle');

 Dad.prototype = Object.create(Baby.prototype);
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. if the this keyword is not called or nested then it will refer to the window as a global object.
    2.imlplicit binding is where if your using a method on an object whatever is left of the dot will get the this keyword.
    3. with constructors we use the new keyword to create a new object
    4. explicit binding you can point to another object depending on which keyword you use (call apply)
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}