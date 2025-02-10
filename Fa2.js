function getInputValues() {
  let firstNum = document.getElementById("myText").value;
  let secondNum = document.getElementById("myText2").value;

  if (isNaN(firstNum) || isNaN(secondNum) || firstNum === "" || secondNum === "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
    return null;
  }

  return {
    num1: parseFloat(firstNum),
    num2: parseFloat(secondNum),
  };
}

function add() {
  let values = getInputValues();
  if (!values) return;
  let sum = values.num1 + values.num2;
  document.getElementById("result").innerHTML = `The sum of ${values.num1} and ${values.num2} is ${sum}`;
}

function sub() {
  let values = getInputValues();
  if (!values) return;
  let difference = values.num1 - values.num2;
  document.getElementById("result").innerHTML = `The difference of ${values.num1} and ${values.num2} is ${difference}`;
}

function mul() {
  let values = getInputValues();
  if (!values) return;
  let product = values.num1 * values.num2;
  document.getElementById("result").innerHTML = `The product of ${values.num1} and ${values.num2} is ${product}`;
}

function div() {
  let values = getInputValues();
  if (!values) return;

  if (values.num2 === 0) {
    document.getElementById("result").innerHTML = "Division by zero is not allowed.";
    return;
  }

  let quotient = (values.num1 / values.num2).toFixed(2);
  document.getElementById("result").innerHTML = `The quotient of ${values.num1} and ${values.num2} is ${quotient}`;
}

function mod() {
  let values = getInputValues();
  if (!values) return;

  if (values.num2 === 0) {
    document.getElementById("result").innerHTML = "Modulo by zero is not allowed.";
    return;
  }

  let remainder = values.num1 % values.num2;
  document.getElementById("result").innerHTML = `The remainder of ${values.num1} and ${values.num2} is ${remainder}`;
}
