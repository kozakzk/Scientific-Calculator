
function showInDisplay(value) {
    const display = document.querySelector('#display');
    const operators = ['+', '-', '*', '/', '%', '(', ')'];

    // validation to secure the correct use of the arithmetic operators
    if (operators.includes(value)) {
        const lastChar = display.value.slice(-1);

        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + value;
            return;
        }
    }

    // validation to secure the correct use of "." (has to be improved)
    if (value == ".") {
        const parts = display.value.split(/[\+\-\*\/%]/);
        const lastNumber = parts[parts.length - 1];
        if (lastNumber.includes(".")) {
            return;
        }
    }

    display.value += value;
}

// function to calculate the result or display an error if not possible 
function result() {
    const display = document.querySelector('#display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'ERROR';
    }
}

// function that multiplies values by -1
function invert() {
    const display = document.querySelector('#display');
    display.value = display.value * -1;
}

// clears the display
function clean() {
    document.querySelector('#display').value = '';
}

// delete last input
function deleteLast() {
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
}

function pi() {
    display.value += 3.141592653589793;
}

function euler() {
    display.value += 2.718281828459045;
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

//function 
function sqrt() {
    display.value = Math.sqrt(display.value, 2);
}

// square
function pow() {
    display.value = Math.pow(display.value, 2);
}

// calculates the log using 10 as base
function log() {
    display.value = Math.log10(display.value);
}

// recursive factorial function
function factorial() {
    var i, num, f;
    f = 1;
    num = display.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;

    display.value = f;
}

// x (times 10 powered to y)
function exp() {
    var num;
    num = display.value;
    
    resultado = num * Math.pow(10, y);
    return resultado;
}

// returns the absolute value of the number
function mod() {
    display.value = Math.abs(display.value);
}

// calculates the log with euler's constant as base
function ln(){
    display.value = Math.log(display.value);
}

// function to calculate the reversed number (1/number)
function reverse(){
    const display = document.querySelector('#display');
    display.value = 1/(display.value);
}
