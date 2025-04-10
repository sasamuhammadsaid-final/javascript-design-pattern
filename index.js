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

//STRUCTURAL DESIGN PATTERNS

//Adapter
/**
 * Metode adaptor memungkinkan objek dengan interface yang saling bertentangan untuk bekerja sama. 
 * Contoh kasus penggunaan yang bagus untuk pola ini adalah ketika kita ingin mengadaptasi kode lama ke basis kode baru tanpa memperkenalkan perubahan yang merusak:
 */

//create an array with two fields: 
//'name' of a band and the number of 'sold' albums
const groupsWithSoldAlbums = [
  {name: "Twice", sold: 23},
  {name: "Blackpink", sold: 23},
  {name: "Aespa", sold: 40},
  {name: "NewJeans", sold: 45},
];

console.log("Before: ");
console.log(groupsWithSoldAlbums);

//now we want to add this object to the 'groupsWithSoldAlbums' 
//problem: Our array can't accept the 'revenue' field
// we want to change this field to 'sold'
var illit = {name: "illit", revenue: 300};
const COST_PER_ALBUM = 30;
const convertToAlbumsSold = (group) => {
  //make a copy of the object and change its properties
  const tempGroup = { name: group.name, sold: 0 };
  tempGroup.sold = parseInt(group.revenue / COST_PER_ALBUM);
  return tempGroup;
}

//use our adapter to make a compatible copy of the 'illit' object:
illit = convertToAlbumsSold(illit);
//now that our interfaces are compatible, we can add this object to the array
groupsWithSoldAlbums.push(illit);
console.log("After:");
console.log(groupsWithSoldAlbums);

//Decorator
/**
 * Pola desain dekorator memungkinkan Anda menambahkan metode dan properti baru ke objek setelah pembuatan. 
 * Ini berguna saat kita ingin memperluas kemampuan komponen selama runtime.
 */

//file name: decorator-pattern.js
//Step 1: Create an interface
class MusicArtist {
  constructor({ name, members }) {
    this.name = name;
    this.members = members;
  }
  displayMembers() {
    console.log(
      "Group name",
      this.name,
      " has",
      this.members.length,
      " members:"
    );
    this.members.map((item) => console.log(item));
  }
}
//Step 2: Create another interface that extends the functionality of MusicArtist
class PerformingArtist extends MusicArtist {
  constructor({ name, members, eventName, songName }) {
    super({ name, members });
    this.eventName = eventName;
    this.songName = songName;
  }
  perform() {
    console.log(
      this.name +
        " is now performing at " +
        this.eventName +
        " They will play their hit song " +
        this.songName
    );
  }
}
//create an instance of PerformingArtist and print out its properties:
const akmu = new PerformingArtist({
  name: "Akmu",
  members: ["Suhyun", "Chanhyuk"],
  eventName: "MNET",
  songName: "Hero",
});
akmu.displayMembers();
akmu.perform();

//BEHAVIORAL DESIGN PATTERNS
//Kategori ini berfokus pada bagaimana berbagai komponen dalam suatu program berkomunikasi satu sama lain.

//Chain of Responsibility
/**
 * Pola desain Rantai Tanggung Jawab memungkinkan permintaan diteruskan melalui rantai komponen. 
 * Saat program menerima permintaan, komponen dalam rantai tersebut akan menanganinya atau meneruskannya hingga program menemukan penangan yang sesuai.
 */

//Real-world situation: Event management of a concert
//implement COR JavaScript design pattern:
//Step 1: Create a class that will process a request
class Leader {
  constructor(responsibility, name) {
    this.responsibility = responsibility;
    this.name = name;
  }

  //the 'setNext' function will pass the request to the next component in the chain.
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(responsibility) {
    //switch to the next handler and throw an error message:
    if(this.nextHandler) {
      console.log(`${this.name} cannot handle operation: ${responsibility}`);
      return this.nextHandler.handle(responsibility);
    }
    return false;
  }
}

//create two components to handle certain requests of a concert
//first component: Handle the lighting of the concert:
class LightsEnginnerLead extends Leader {
  constructor(name) {
    super("Light Management", name);
  }

  handle(responsibility) {
    //if 'LightsEngineerLead' gets the responsibility(request) to handle lights,
    //then they will handle it
    if(responsibility == 'Lights') {
      console.log(`The Lights are now being handled by ${this.name}`);
      return;
    }
    //otherwise, pass it to the next component.
    return super.handle(responsibility);
  }
}

//second component: Handle the sound management of the event:
class SoundEngineerLead extends Leader {
  constructor(name) {
    super("Sound Management",name);
  }

  handle(responsibility) {
    //if 'SoundEngineerLead' gets the responsibility to handle sounds,
    // they will handle it
    if(responsibility == 'Sound') {
      console.log(`the sound stage is now being handled by ${this.name}`);
      return;
    }
    //otherwise, forward this request down the chain:
    return super.handle(responsibility);
  }
}

//create two instances to handle the lighting and sounds of an event:
const minji = new LightsEnginnerLead("Minji");
const danielle = new SoundEngineerLead("Danielle");
//set 'danielle' to be the next handler component in the chain.
minji.setNext(danielle);
minji.handle("Sound");
//Minji can handle Lights, so we expect it to be processed
minji.handle("Lights");

//Strategy
/**
 * Metode desain perilaku strategis memungkinkan Anda menentukan kumpulan algoritme dan bertukar di antara algoritme tersebut selama waktu proses. 
 * Pola ini berguna untuk aplikasi navigasi. 
 * Aplikasi ini dapat memanfaatkan pola ini untuk beralih di antara rute untuk berbagai jenis pengguna (bersepeda, mengemudi, atau berlari).
 */

//situation: Build a calculator app that executes an operation between 2 numbers.
//depending on the user input, change between division and modulus operations
class CalculationStrategy {
  performExecution(a, b) {}
}

//create an algorithm for division
class DivisionStrategy extends CalculationStrategy {
  performExecution(a, b) {
    return a/b;
  }
}

//create another algorithm for performing modulus
class ModuloStrategy extends CalculationStrategy {
  performExecution(a, b) {
    return a % b;
  }
}

//this class will help the program switch between our algorithms:
class StrategyManager {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  executeStrategy(a, b) {
    return this.strategy.performExecution(a, b);
  }
}

const moduloOperation = new ModuloStrategy();
const divisionOperation = new DivisionStrategy();
const strategyManager = new StrategyManager();

//use the division algorithm to divide two numbers:
strategyManager.setStrategy(divisionOperation);
let result = strategyManager.executeStrategy(20, 4);
console.log(`Result is : ${result}`);

//switch to the modulus strategy to perform modulus:
strategyManager.setStrategy(moduloOperation);
result = strategyManager.executeStrategy(20, 4);
console.log(`Result of modulo is : ${result}`);

//Observer
/**
 * Pola desain pengamat memungkinkan Anda menentukan mekanisme langganan untuk memberi tahu objek yang berlangganan tentang peristiwa apa pun yang terjadi pada objek yang diamati. 
 * Contoh penting dari pola ini adalah React's useEffect Hook, yang berjalan setiap kali variabel tertentu bermutasi.
 */

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("the value of count has changed");
  }, [count]);
  //the count variable is a dependency of the useEffect Hook
  // this means 
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {count % 2 === 0 ? <p>is even </p> : <p>Not even </p>}
    </>
  );
}

export default App;