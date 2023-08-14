// Your First JS Project
alert("hi");

// Basic Data Type
1 + 1 // Integer
"My name is" + "hosung" // String

// Variables
console.log(123); // console에 출력 (Integer)
console.log("123"); // console에 출력 (String = "")
console.log('123'); // console에 출력 (String = '')
console.log(`123`); // console에 출력 (String = ``)

console.log(2 + 5); // 연산 값 console에 출력 (+ = 더하기)
console.log(2 - 5); // 연산 값 console에 출력 (- = 더하기)
console.log(2 * 5); // 연산 값 console에 출력 (* = 곱하기)
console.log(2 / 5); // 연산 값 console에 출력 (/ = 나누기)
console.log(2 % 5); // 연산 값 console에 출력 (% = 나머지)

// Const and let
// const (constant: 상수), let (let: 변수)
const num1 = 5;
const num2 = "2";

let myName = "hosung"; //JS camelCase(낙타 등처럼 보임) 표기법
const veryLongVariableName = 0; //JS camelCase(낙타 등처럼 보임) 표기법

console.log(num1 - num2); // Variables를 활용한 연산 값 console에 출력 (- = 더하기)
console.log(num1 * num2); // Variables를 활용한 연산 값 console에 출력 (* = 곱하기)
console.log(num1 + num2); // Variables를 활용한 연산 값 console에 출력 (+ = 더하기)
console.log(num1 / num2); // Variables를 활용한 연산 값 console에 출력 (/ = 나누기)
console.log(num1 % num2); // Variables를 활용한 연산 값 console에 출력 (% = 나머지)

console.log("Hello, " + "hosung") // 문자열 출력
console.log("Hello, " + myName) // Variable을 활용한 문자열 출력

myName = "rahosung"; // 새로운 값 할당

console.log("Your new name is " + myName); // 새롭게 할당된 값 출력

// Booleans
// True : 참, False : 거짓, Null : 비어있는 값, Undefined : 정의되지 않은 값

const amIFat = false; // false 값 할당
let something; // Undefined 정의되지 않음

console.log(something, amIFat); // undefined, false 출력
