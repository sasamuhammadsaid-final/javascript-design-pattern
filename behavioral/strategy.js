//BEHAVIORAL DESIGN PATTERNS
//Kategori ini berfokus pada bagaimana berbagai komponen dalam suatu program berkomunikasi satu sama lain.

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