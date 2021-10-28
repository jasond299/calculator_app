const number_button = document.querySelectorAll('[data-numbers]')
const decimal = document.querySelector('[data-period')
const operation_button = document.querySelectorAll('[data-operation]')
const equal_button = document.querySelector('[data-equal]')
const del_button = document.querySelector('[data-delete]')
const clear_button = document.querySelector('[data-clear]')
const upper = document.querySelector('[data-upper]')
const lower = document.querySelector('[data-lower]')


let upperdisplay = '';
let lowerdisplay = '0';

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


function operate(number1, number2, operation) {
    if (operation === '+') {
        //add(number1, number2);
        return number1 + number2;
    }
    if (operation === '-') {
        //subtract(number1, number2);
        return number1 - number2;
    }
    if (operation === 'x') {
        //multiply(number1, number2);
        return number1 * number2;
    }
    if (operation === '%') {
        //divide(number1, number2);
        return number1 / number2;
    }
}

function update_upperDisplay(x) {
    upperdisplay += x;
    upper.textContent = upperdisplay;

}

function update_lowerDisplay(x) {
    lowerdisplay += x;
    lower.textContent = lowerdisplay;

}


number_button.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.textContent);
        if (lowerdisplay === '0') {
            lowerdisplay = button.textContent;
            update_lowerDisplay('');
        }

        if (upperdisplay.charAt(upperdisplay.length - 2) === '+' ||
            upperdisplay.charAt(upperdisplay.length - 2) === '-' ||
            upperdisplay.charAt(upperdisplay.length - 2) === 'x' ||
            upperdisplay.charAt(upperdisplay.length - 2) === '÷') {

            lowerdisplay = '';
            update_lowerDisplay(button.textContent);


        }

        else {
            update_lowerDisplay(button.textContent);
        }

    })
})

operation_button.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.textContent);
        if (upperdisplay.charAt(upperdisplay.length - 1) === button.textContent) {
            return;
        }

        if (upperdisplay.charAt(upperdisplay.length - 1) === '+' ||
            upperdisplay.charAt(upperdisplay.length - 1) === '-' ||
            upperdisplay.charAt(upperdisplay.length - 1) === 'x' ||
            upperdisplay.charAt(upperdisplay.length - 1) === '÷') {

            upperdisplay = upperdisplay.slice(0, -1);
            upperdisplay = upperdisplay + ' ' + button.textContent + ' ';
            upper.textContent = upperdisplay;
        }

        upperdisplay = lowerdisplay;
        upperdisplay = upperdisplay + ' ' + button.textContent + ' ';
        upper.textContent = upperdisplay;



    })
})

clear_button.addEventListener('click', () => {
    lowerdisplay = '0';
    update_lowerDisplay('');
})


del_button.addEventListener('click', () => {
    if (lowerdisplay.length == 1) {
        if (lowerdisplay === '0') {
            return;
        }
        lowerdisplay = '0';
        update_lowerDisplay('');
    }
    else {
        lowerdisplay = lowerdisplay.slice(0, -1);
        update_lowerDisplay('');
    }
})

equal_button.addEventListener('click', () => {
    console.log("hello");
})

decimal.addEventListener('click', () => {
    if (lowerdisplay.indexOf('.') !== -1) {
        return;
    }
    else {
        update_lowerDisplay('.');
    }
})

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(6, 3));
console.log(operate(4, 5, '%'));