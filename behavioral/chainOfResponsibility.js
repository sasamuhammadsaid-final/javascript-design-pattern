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