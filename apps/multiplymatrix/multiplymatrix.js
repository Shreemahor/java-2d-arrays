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
    // Get dimensions from user
    let rows1 = parseInt(prompt("Enter the number of rows for the first matrix:"));
    let cols1 = parseInt(prompt("Enter the number of columns for the first matrix:"));
    let rows2 = parseInt(prompt("Enter the number of rows for the second matrix:"));
    let cols2 = parseInt(prompt("Enter the number of columns for the second matrix:"));

    // Validate if matrices can be multiplied
    if (cols1 !== rows2) {
        displayOutput("Error: The number of columns in the first matrix must match the number of rows in the second matrix for multiplication.");
        return;
    }

    // Create and populate matrices with random values
    let mat1 = [];
    for (let i = 0; i < rows1; i++) {
        mat1[i] = [];
        for (let j = 0; j < cols1; j++) {
            mat1[i][j] = Math.floor(Math.random() * 10); // Random numbers between 0 and 9
        }
    }

    let mat2 = [];
    for (let i = 0; i < rows2; i++) {
        mat2[i] = [];
        for (let j = 0; j < cols2; j++) {
            mat2[i][j] = Math.floor(Math.random() * 10); // Random numbers between 0 and 9
        }
    }

    displayOutput("Matrix 1:");
    print_2d_array(mat1);
    displayOutput("Matrix 2:");
    print_2d_array(mat2);

    // Initialize the product matrix with zeros
    let product = new Array(rows1);
    for (let i = 0; i < rows1; i++) {
        product[i] = new Array(cols2).fill(0);
    }

    // Perform matrix multiplication
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) { // cols1 is equal to rows2
                product[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }

    displayOutput("Product Matrix:");
    print_2d_array(product);
}

function print_2d_array(array) {
    for (let i = 0; i < array.length; i++) {
        let rowString = "";
        for (let j = 0; j < array[i].length; j++) {
            rowString += array[i][j] + " ";
        }
        displayOutput(rowString.trim());
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initOutput();
    main();
});