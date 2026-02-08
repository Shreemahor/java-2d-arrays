let outputDiv = null;
function initOutput() {
    if (!outputDiv) {
        outputDiv = document.createElement('div');
        outputDiv.id = 'gameOutput';
        outputDiv.style.cssText = 'background:#1e1e1e;color:#00ff00;font-family:monospace;padding:20px;margin:20px;border-radius:8px;white-space:pre-wrap;max-height:600px;overflow-y:auto;';
        document.body.appendChild(outputDiv);
    }
}
function displayOutput(text) {
    initOutput();
    outputDiv.textContent += text + '\n';
}

function prompt(message) {
    return new Promise(resolve => {
        let inputContainer = document.createElement('div');
        inputContainer.style.cssText = 'margin-top: 10px;';

        let label = document.createElement('label');
        label.textContent = message + ': ';
        label.style.cssText = 'color: #00ff00;';

        let input = document.createElement('input');
        input.type = 'text';
        input.style.cssText = 'background:#1e1e1e;color:#00ff00;font-family:monospace;border: 1px solid #00ff00;padding: 5px;';

        let button = document.createElement('button');
        button.textContent = 'Submit';
        button.style.cssText = 'margin-left: 5px; background:#2a2a2a;color:#00ff00;font-family:monospace;border: 1px solid #00ff00;padding: 5px;cursor:pointer;';

        button.onclick = () => {
            inputContainer.remove();
            resolve(input.value);
        };

        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        inputContainer.appendChild(button);

        initOutput();
        outputDiv.appendChild(inputContainer);
        input.focus();
    });
}

async function main() {
    let numberStr = await prompt("Enter the size of the Latin Square");
    let number = parseInt(numberStr);

    if (isNaN(number) || number <= 0) {
        displayOutput("Invalid input. Please enter a positive integer.");
        return;
    }

    let latin_square_array = latin_square(number);
    for_each_print(latin_square_array);
}

function latin_square(s) {
    let numbers_array = new Array(s);
    for (let i = 0; i < s; i++) {
        numbers_array[i] = i + 1;
    }
    let my_index = 0;

    let result = new Array(s);
    for (let n = 0; n < s; n++) {
        result[n] = new Array(s);
        for (let m = 0; m < s; m++) {
            result[n][m] = numbers_array[my_index];
            if (my_index < numbers_array.length - 1) {
                my_index++;
            } else {
                my_index = 0;
            }
        }
        my_index++;
        if (my_index >= s) { // Ensure my_index wraps around correctly if s is not a multiple of numbers_array.length (which it always is here)
            my_index = 0;
        }
    }
    return result;
}

function for_each_print(array) {
    for (let e of array) {
        let rowString = "";
        for (let j of e) {
            rowString += j + " ";
        }
        displayOutput(rowString.trim());
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initOutput();
    main();
});