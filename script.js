function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
//this function grants to clean everything that has written
function clearDisplay() {
    document.getElementById('display').value = '';
}
//the function eval grants to convert a string to number and do the mathematical operation
function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}
