//CREATIONAL DESIGN PATTERNS
//terdiri dari berbagai metode untuk membantu pengembang membuat objek.

//Builder
/**
 * Builder memungkinkan kita membangun objek menggunakan konstruksi objek langkah demi langkah. 
 * Hasilnya, pola ini sangat cocok untuk situasi saat kita ingin membuat objek dan hanya menerapkan fungsi yang diperlukan. 
 * Hasilnya, ini memungkinkan fleksibilitas yang lebih besar.

 */

//Step 1: Create a class reperesentation for our toy car:
class Car {
  constructor({model, company, size}) {
    this.model = model;
    this.company = company;
    this.size = size;
  }
}

Car.prototype.showDescription = function() {
  console.log(`${this.model} is made by ${this.company} and has an engine capacity of ${this.size} CC`);
}

Car.prototype.reduceSize = function() {
  const size = this.size - 2; //function to reduce the engine size of the car.
  this.size = size;
}

const matic = new Car({
  company: 'Honda',
  model: "matic",
  size: 1500
});

//finally, print out the properties of the car before and after reducing the size:
matic.showDescription();
console.log('reducing size....');
//reduce size of car twice
matic.reduceSize();
matic.reduceSize();
matic.showDescription();