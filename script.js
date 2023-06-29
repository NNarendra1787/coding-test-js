var NumbOne, NumbTwo;

function cal(){
    NumbOne = parseInt(document.getElementById('one').value);
    NumbTwo = parseInt(document.getElementById('two').value);

    if(NumbOne && NumbTwo){
        let ADDing = document.getElementById('resA');
        let A = document.getElementById('add');
        A.style.display = 'block'
        ADDing.style.display = 'block';

        let Subtrat = document.getElementById('resS');
        let S = document.getElementById('sub');
        S.style.display = 'block'
        Subtrat.style.display = 'block';

        let Multi = document.getElementById('resM');
        let M = document.getElementById('multi');
        M.style.display = 'block'
        Multi.style.display = 'block';

        let Divided = document.getElementById('resD');
        let d = document.getElementById('divi');
        d.style.display = 'block'
        Divided.style.display = 'block';

        let resA = NumbOne + NumbTwo;
        document.getElementById('add').value = resA;

        let resS = NumbOne - NumbTwo;
        document.getElementById('sub').value = resS;

        let resM = NumbOne * NumbTwo;
        document.getElementById('multi').value = resM;

        let resD = NumbOne / NumbTwo;
        document.getElementById('divi').value = resD;
    }
}

// Error Message Function
// function displayError(msg) {
//   resultText.innerHTML = msg;
// }

// // Result Function
// function displayResult([firstNumber, lastNumber], result) {
//   resultText.innerHTML =
//     'The result is : <span id="user-result">' + result + "</span>";
// }

// // Validating inputs
// function validateInputs() {
//   let errorMsg = "";
//   const firstNumber = parseFloat(document.getElementById("first-number").value);
//   const lastNumber = parseFloat(document.getElementById("second-number").value);
//   if (isNaN(firstNumber) || isNaN(lastNumber)) {
//     errorMsg = "Input values should be numbers and not empty.";
//   }
//   return {
//     values: [firstNumber, lastNumber],
//     errorMsg,
//   };
// }

// // Calclation Functions
// function addition([num1, num2]) {
//   return num1 + num2;
// }

// function subtraction([num1, num2]) {
//   return num1 - num2;
// }

// function multiply([num1, num2]) {
//   return num1 * num2;
// }

// function divide([num1, num2]) {
//   return num1 / num2;
// }

// // Main Function //
// const btnAdd = document.getElementById("add");
// const btnSub = document.getElementById("subtract");
// const btnMult = document.getElementById("multiply");
// const btnDiv = document.getElementById("divide");

// const buttons = [btnAdd, btnSub, btnMult, btnDiv];
// const resultText = document.getElementById("result-placeholder");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     const { errorMsg, values } = validateInputs();
//     if (errorMsg) {
//       displayError(errorMsg);
//       resultText.style.color = "aqua";
//     } else {
//       const results = [
//         addition(values),
//         subtraction(values),
//         multiply(values),
//         divide(values),
//       ];
//       const result = results[i];
//       displayResult(values, result);
//       resultText.style.color = "white";
//     }
//   });
// }
