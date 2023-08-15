// Your First JS Project
alert("hi");

// Basic Data Type
// Integer
1 + 1;
// String
"My name is" + "hosung";

// Variables
// console에 출력 (Integer, String = "", '', ``)
console.log(123);
console.log("123");

// 연산 값 console에 출력 (+ = 더하기, - = 더하기, * = 곱하기, / = 나누기, % = 나머지)
console.log(2 + 5);

// Const and let
// const (constant: 상수), let (let: 변수)
const num1 = 5;
const num2 = "2";

// JS camelCase(낙타 등처럼 보임) 표기법
let myName = "hosung";
const veryLongVariableName = 0;

// Variables를 활용한 연산 값 console에 출력
console.log(num1 - num2);

// 문자열 출력
console.log("Hello, " + myName); // Variable 활용

// 새로운 값 할당
myName = "rahosung";

console.log("Your new name is " + myName);

// Booleans
// True : 참, False : 거짓, Null : 비어있는 값, Undefined : 정의되지 않은 값
const amIFat = false;
let something; // Undefined

console.log(something, amIFat);

// Arrays
// 요일 배열 생성 (string => array), 배열은 0 ~ n(배열의 속성 - 1) 의 인덱스 값을 가짐 
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(daysOfWeek);
console.log(daysOfWeek[4]);

//배열에 값 추가
daysOfWeek.push("Sun");

console.log(daysOfWeek);

// Objects
// Object: 객체에 대한 속성(ex. 객체의 이름, 나이 등), List: 하나의 주제에 대한 속성(ex. 요일)
const player1 = {
    name: "hosung",
    points: 10,
    fat: true,
}; // player 객체 생성

// 객체, 객체.속성, 객체["속성"] 출력
console.log(player1);
console.log(player1.name);
console.log(player1["name"]);

// 객체 자체의 타입을 변경시키는 건 오류(ex. player = false;), Constant 안의 속성값을 업데이트 하는 것은 오류 X
player1.fat = false;
player1.lastName = "rahosung";
player1.points = player1.points + 15;

console.log(player1);

// Functions part One
// Argument(인수): 어떠한 정보를 Function에게 보내는 것
function sayHello(nameOfPerson, age) {
    console.log("Hello mt name is " + nameOfPerson + "and I'm " + age);
}

// 함수 실행, 인자값 담아서 실행
sayHello();
sayHello("hosung", 19);

// Functions part Two
function plus(firstNumber, secondNember) {
    console.log(firstNumber + secondNember);
}

// Argument는 함수 안에서만 존재
function divide(firstNumber, secondNember) {
    console.log(firstNumber / secondNember);
}

// NaN: Not a Number(숫자가 아님)
plus();

// 순서대로 인자값 전달 firstNumber = 20, secondNember = 4
plus(20, 4);
divide(20, 4);

// Object 속 Function
const player2 = {
    name: "hosung",
    sayHello: function (otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you!");
    },
};

console.log(player2.name);

// Object 함수 실행
player2.sayHello("hosung");

// Returns
// return 사용 시 값 반환
const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

// 함수 실행 및 반환 값 출력
const plusResult = calculator.plus(2, 3);

console.log(plusResult);

// Conditionals
const age = parseInt(prompt("How old are you?"));

console.log(age);
