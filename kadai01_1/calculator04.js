var result = document.getElementById('result');
function del() {
    result.value = '';
}
function display(element) {
    result.value = result.value + element.value;
}
function calculate() {
    result.value = Function('return ('+result.value+');')();
}