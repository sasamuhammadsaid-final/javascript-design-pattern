//CREATIONAL DESIGN PATTERNS
//terdiri dari berbagai metode untuk membantu pengembang membuat objek.

//Factory
/**
 * Factory adalah pola untuk membuat objek yang memungkinkan kontrol lebih besar atas pembuatan objek. 
 * Metode ini cocok untuk kasus-kasus di mana kita ingin menjaga logika pembuatan objek terpusat di satu tempat.
 */

//use the factory JavaScript design pattern:
//Step 1: Create an interface for our object. In this case, we want to create a car
const createCar = ({company, model, size}) => ({
  // the properties of the car: 
  company,
  model,
  size,
  //a function that prints out the car's properties:
  showDescription() {
    console.log(`The all new ${model} is build by ${company} and has an engine capacity of ${size} CC`);
  }
});

//Use the 'createCar' interface to create a car
const challenger = createCar({
  company: "Dodge",
  model: "Challenger",
  size: 6162
})

challenger.showDescription();