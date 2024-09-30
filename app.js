function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operation = document.getElementById('operation').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    }

    document.getElementById('result').innerText = 'Výsledek: ' + result;
}