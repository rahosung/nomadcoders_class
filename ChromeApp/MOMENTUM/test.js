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

// Arrays
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // 요일 배열 생성 (string => array), 배열은 0 ~ n(배열의 속성 - 1) 의 인덱스 값을 가짐 

console.log(daysOfWeek); // 요일 출력
console.log(daysOfWeek[4]); // 배열에서 속성 값 출력

daysOfWeek.push("Sun"); //배열에 값 추가

console.log(daysOfWeek); // 추가한 값 포함 요일 출력

// Objects
// Object: 객체에 대한 속성(ex. 객체의 이름, 나이 등), List: 하나의 주제에 대한 속성(ex. 요일)
const player1 = {
    name: "hosung",
    points: 10,
    fat: true,
}; // player 객체 생성

console.log(player1); // 객체 출력
console.log(player1.name); // 객체.속성 값 출력
console.log(player1["name"]); // 객체["속성"] 값 출력

// 객체 자체의 타입을 변경시키는 건 오류(ex. player = false;), Constant 안의 속성값을 업데이트 하는 것은 오류 X
player1.fat = false; // 객체에 새로운 값 할당
player1.lastName = "rahosung"; // 객체에 새로운 속성 추가
player1.points = player1.points + 15; // 객체에 연산으로 새로운 값 할당 가능

console.log(player1); // 새로운 값 출력

// Functions part One
// 함수 선언식
function sayHello(nameOfPerson, age) { //argument(인수): 어떠한 정보를 Function에게 보내는 것
    console.log("Hello mt name is " + nameOfPerson + "and I'm " + age);
}

sayHello(); // 함수 실행
sayHello("hosung", 19); // 함수에 데이터를 보내고 실행

// Functions part Two
function plus(firstNumber, secondNember) { // argument의 이름은 사용자가 설정
    console.log(firstNumber + secondNember);
}

function divide(firstNumber, secondNember) { // argument는 함수 안에서만 존재
    console.log(firstNumber / secondNember);
}

// plus(); NaN: Not a Number(숫자가 아님)
plus(8, 60); // 순서대로 인자값 전달 firstNumber = 8, secondNember = 60
divide(98, 20); // 순서대로 인자값 전달 firstNumber = 98, secondNember = 20

// Object 속 Function
const player2 = {
    name: "hosung",
    sayHello: function (otherPersonName) { // 함수 선언식
        console.log("hello " + otherPersonName + " nice to meet you!");
    },
};

console.log(player2.name); // Object 속성 출력
player2.sayHello("hosung"); // Object 함수 출력

// Calculator
const calculator = { // 간단한 계산기 객체 만들기
    plus: function (a, b) { // Plus(더하기)
        console.log(a + b);
    },
    minus: function (a, b) { // Minus(빼기)
        console.log(a - b);
    },
    times: function (a, b) { // Times(곱하기)
        console.log(a * b);
    },
    divide: function (a, b) { // Divide(나누기)
        console.log(a / b);
    },
    power: function (a, b) { // Power(제곱)
        console.log(a ** b);
    },
};

calculator.plus(2, 3); // calculator 객체 plus 함수 실행
calculator.minus(2, 3); // calculator 객체 minus 함수 실행
calculator.times(2, 3); // calculator 객체 times 함수 실행
calculator.divide(2, 3); // calculator 객체 divide 함수 실행
calculator.power(2, 3); // calculator 객체 power 함수 실행

// Returns
 