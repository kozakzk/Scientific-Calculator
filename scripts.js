
function showInDisplay(value) {
    const display = document.querySelector('#display');
    const operators = ['+', '-', '*', '/', '%'];


    if (operators.includes(value)) {
        const lastChar = display.value.slice(-1);

        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + value;
            return;
        }
    }


    if (value == ".") {
        const parts = display.value.split(/[\+\-\*\/%]/);
        const lastNumber = parts[parts.length - 1];
        if (lastNumber.includes(".")) {
            return;
        }
    }

    display.value += value;
}


function result() {
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'ERROR'
    }
}


function reverse() {
    const display = document.querySelector('#display')
    display.value = display.value * -1
}


function clean() {
    document.querySelector('#display').value = ''
}


function deleteLast() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

function pi() {
    display.value += 3.14159;
}

function euler() {
    display.value += 2.718;
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

function sqrt() {
    display.value = Math.sqrt(display.value, 2);
}

function pow() {
    display.value = Math.pow(display.value, 2);
}

function log() {
    display.value = Math.log10(display.value)
}

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

function exp() {
    display.value = Math.exp(display.value)
}

function mod() {
    display.value = Math.abs(display.value)
}

function ln(){
    display.value = Math.log(display.value)
}
