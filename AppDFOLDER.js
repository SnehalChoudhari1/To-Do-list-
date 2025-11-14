function createGreeting(name){
    function sayHello(){
       console.log("Hello," +name)
    }
    return sayHello;
}
const greet = createGreeting("snehal")
greet();


// function addNumber(a,b){
//     return a+b
// }
// const result = addNumber(4,6);
// console.log(result);


// function showMessage(){
//     console.log("welcome snehal")
// }
// showMessage();


// function bankAccount(initialBalance) {
//     let balance = initialBalance;

//     function deposit(amount) {
//         balance += amount;
//         return balance;
//     }

//     function withdraw(amount) {
//         if (amount > balance) {
//             return "Insufficient balance";
//         }
//         balance -= amount;
//         return balance;
//     }

//     function checkBalance() {
//         return balance;
//     }

//     return { deposit, withdraw, checkBalance };
// }

// const myAccount = bankAccount(100);
// console.log(myAccount.deposit(50));     
// console.log(myAccount.withdraw(30));    
// console.log(myAccount.withdraw(200));   
// console.log(myAccount.checkBalance());




// function createCounter(count){
//     count = 0;

//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());



// function makeMultiplier(multiplier){
//     function multiply(num){
//         return num * multiplier;
//     }
//     return multiply;
// }

// const doubleFunc = makeMultiplier(2);
// const tripleFunc = makeMultiplier(3);

// const finalresult =doubleFunc(5)
// const result = tripleFunc(5)
// console.log(finalresult, result)



// function outerFunction(){
//     const outerValue= 10;

//     function innerFunction(){
//         const result = outerValue *2;
//         return result;
//     }
//     return innerFunction;
// }
// const closureFunc = outerFunction()
// const finalResult = closureFunc();
// console.log(finalResult);



// function mainCalculation(){
//     function addNumbers(a,b){
//         return a+b;
//     }
//     const sumResult=addNumbers(10,5);

//     function square(num){
//         return num*num;
//     }
//     return square(sumResult);

// }
//  const finalAnswer =mainCalculation();
// console.log(finalAnswer);



// function calculateResult(){
//     function multiply(a,b){
//         return a*b;
//     }
//     const mulResult= multiply(5,6)
//     return mulResult;
//     }
    
// const finalvalue = calculateResult();
// console.log(finalvalue);



// function addNumbers(a,b){
//     return a+b;
// }
// function squareNumber(num){
//     return num * num;
// }
//  const sumResult =addNumbers(4,3)
//  const finalResult=squareNumber(sumResult);
//  console.log(sumResult,finalResult);


// function addThenSquare(a,b){
//     let c= a+b;
//     let square = c*c;
//         return square;
//     }
// const result1 = addThenSquare(2,3);
// const result2 = addThenSquare(4,1);
// console.log(result1, result2);


// function getSquare(num){
//     return num * num;
// }   
// const result = getSquare(6);
// console.log(result);





// function multiplyNumbers(x, y){
//     let mul = x*y;
//     return mul;
// }
//  const result = multiplyNumbers(5,4);
//  console.log(result);


// function addNumbers(a,b){
//    let sum = a+b;
//     console.log(sum);
// }
// addNumbers(10,12);




// function printABC(){
//     console.log("ABC")
// }
// printABC();


