//CREATIONAL DESIGN PATTERNS
//terdiri dari berbagai metode untuk membantu pengembang membuat objek.

//Singleton
/**
 * Singleton memastikan bahwa definisi kelas atau objek tidak dapat diubah. 
 * Pola ini cocok untuk situasi di mana Anda ingin memastikan bahwa properti objek tetap sama selama runtime.
 */

//class definition of a car:
class Mobil {
  constructor({model, company, size}) {
    this.model = model;
    this.company = company;
    this.size = size;
  }
}

//create a Car instance and 'freeze' it.
const manual = new Car({
  company: "Hyundai",
  model: "Stargazer",
  size: 1800
});

Object.freeze(manual);
manual.company = 'BMW';
//check if the property has changed
console.log(`The manufacturer for the stargazer is ${manual.company}`);