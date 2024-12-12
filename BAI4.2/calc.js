function display(val) {
    const result = document.getElementById('result');
    result.value += val;
}

function solve() {
    try {
        const result = document.getElementById('result');
        result.value = eval(result.value);
    } catch (error) {
        alert('Invalid Expression');
        clearScreen();
    }
}

function clearScreen() {
    document.getElementById('result').value = '';
}
