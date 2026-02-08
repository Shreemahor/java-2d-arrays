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

function main() {
    let min = prompt("Enter the minimum value for random numbers:");
    let max = prompt("Enter the maximum value for random numbers:");

    let random_array = random2Darray(8, 99, parseInt(min), parseInt(max));

    let sum = return_sum(random_array);
    displayOutput(`\nSum: ${sum}`);

    // The Java code had a hardcoded calculation of (4 * 5 * 1.0) for the average divisor.
    // It seems like a potential error, as it doesn't dynamically use the matrix dimensions.
    // For now, I'm replicating it exactly. If you intended to use the actual matrix dimensions
    // for the average, we'd need to adjust this part.
    let divisor = (4 * 5 * 1.0);
    displayOutput(`Average: ${sum / divisor}`);
}

function random2Darray(r, c, min, max) {
    let result = new Array(r);
    for (let n = 0; n < result.length; n++) {
        result[n] = new Array(c);
        for (let m = 0; m < c; m++) {
            // Generate random number between min (inclusive) and max (inclusive)
            result[n][m] = Math.floor(Math.random() * (max - min + 1)) + min;
            displayOutput(`${result[n][m]} `);
        }
        displayOutput(""); // Newline after each row
    }
    return result;
}

function return_sum(array) {
    let sum = 0;
    for (let e of array) {
        for (let n of e) {
            sum += n;
        }
    }
    return sum;
}

window.addEventListener('DOMContentLoaded', () => {
    initOutput();
    main();
});