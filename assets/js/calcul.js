let num1 = parseInt(prompt("Input num1"));
let num2 = parseInt(prompt("Input num2"));
let oper = prompt("Input oper");

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function multiplicacion(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  if (num2 === 0) {
    return "Cant divide by 0";
  }
  return num1 / num2;
}

let result;

if (oper === "+") {
  result = suma(num1, num2);
} else if (oper === "-") {
  result = resta(num1, num2);
} else if (oper === "*") {
  result = multiplicacion(num1, num2);
} else if (oper === "/") {
  result = division(num1, num2);
} else {
  result = "Undefined operation";
}

console.log(`Result = ${result}`);
