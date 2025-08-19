// shows the input on display and validates inputs 
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

// displays the result calculated through the eval() method
function result() {
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'ERROR'
    }
}

// multiplies the input by -1
function reverse() {
    const display = document.querySelector('#display')
    display.value = display.value * -1
}

// cleans the display
function clean() {
    document.querySelector('#display').value = ''
}

// deletes the last input
function deleteLast() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

