// Javascript Assignment 1
//1. Write a program to find whether a given year is a leap year or not.
function leapYear(lYear){
    if(lYear%400===0 || lYear%100!==0 &&lYear%4===0) { //UtilizingJavaScript Logical Operators
        console.log(`${lYear}!Leap Year`)         // If,else method is used
    }
    else {
        console.log(`${lYear} not a Leap Year`)
    }
}
leapYear(2020)// calling function

/*2. Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/
function convertTemp(){
function convertFern(fern){
    let c = ((fern-32)/9)*5
        return c
    }
function convertCels(cels){
    let fern = ((cels*9/5)+32)
        return fern
    };

my_fern=convertFern(45)
my_cels=convertCels(60)
console.log(my_fern)
console.log(my_cels)
// 3./*Write a program to find the factorial of a number*/
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
}
factorial(5)
