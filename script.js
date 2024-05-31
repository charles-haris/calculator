//this function grants to write the first number, the operator and the second number
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
//this function grants to clean everything that has written
function clearDisplay() {
    document.getElementById('display').value = '';
}
//this function grants to calculate the first number and the second number
function calculate() {
    var expression = document.getElementById('display').value;
    //the function eval grants to convert a string to number and do the mathematical operation
    var result = eval(expression);
    document.getElementById('display').value = result;
}
