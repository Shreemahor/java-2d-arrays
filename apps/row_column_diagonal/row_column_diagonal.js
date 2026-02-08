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

async function main() {
    const rows = parseInt(prompt("Enter the number of rows for the matrix:"));
    const cols = parseInt(prompt("Enter the number of columns for the matrix:"));

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        displayOutput("Invalid input. Please enter positive numbers for rows and columns.");
        return;
    }

    const matrix = [];
    displayOutput("Generating random matrix...");
    for (let n = 0; n < rows; n++) {
        matrix[n] = [];
        let rowString = "";
        for (let m = 0; m < cols; m++) {
            matrix[n][m] = Math.floor(Math.random() * 2); // Generates 0 or 1
            rowString += matrix[n][m] + " ";
        }
        displayOutput(rowString.trim());
    }

    const choice = prompt("Do you want to:\n1. Find the largest row/column of 1's\n2. Find the sum of the major diagonal\nEnter 1 or 2:");

    if (choice === '1') {
        findLargestRowCol(matrix);
    } else if (choice === '2') {
        findDiagonalSum(matrix);
    } else {
        displayOutput("Invalid choice. Please enter 1 or 2.");
    }
}

function findLargestRowCol(mat) {
    let largestRowCount = 0;
    let largestRowIndex = -1;

    for (let i = 0; i < mat.length; i++) {
        let currentRowSum = 0;
        for (let j = 0; j < mat[i].length; j++) {
            currentRowSum += mat[i][j];
        }
        if (currentRowSum > largestRowCount) {
            largestRowCount = currentRowSum;
            largestRowIndex = i;
        }
    }
    displayOutput(`The index of the first row with the most 1's is ${largestRowIndex}`);

    let largestColCount = 0;
    let largestColIndex = -1;

    for (let col = 0; col < (mat.length > 0 ? mat[0].length : 0); col++) {
        let currentColSum = 0;
        for (let row = 0; row < mat.length; row++) {
            if (mat[row] && mat[row][col] !== undefined) {
                currentColSum += mat[row][col];
            }
        }
        if (currentColSum > largestColCount) {
            largestColCount = currentColSum;
            largestColIndex = col;
        }
    }
    displayOutput(`The index of the first column with the most 1's is ${largestColIndex}`);
}

function findDiagonalSum(mat) {
    // For diagonal sum, we'll use a consistent size assumption or a min of rows/cols
    // based on the original Java code's 'mat.length' and 'r.length' in sum_diagonal.
    // Let's assume we want the sum of the main diagonal up to the smaller dimension.
    const displayMatrixForDiagonal = [];
    let diagonalSum = 0;
    let place = 0;

    displayOutput("Matrix for diagonal sum calculation:");
    for (let n = 0; n < mat.length; n++) {
        let rowString = "";
        for (let m = 0; m < mat[n].length; m++) {
            // Using random doubles for this part to mimic the original Java
            const randomDouble = Math.floor(Math.random() * 100) / 100.0;
            mat[n][m] = randomDouble; // Overwriting the 0/1 matrix with doubles
            rowString += mat[n][m].toFixed(2) + " ";
        }
        displayOutput(rowString.trim());
    }

    // Recalculate the diagonal sum on the newly generated double matrix
    for (let r = 0; r < mat.length; r++) {
        if (mat[r] && mat[r][place] !== undefined) {
            diagonalSum += mat[r][place];
            if (place < mat[r].length - 1) {
                place++;
            } else {
                break; // Stop if we reach the end of the row's columns
            }
        } else {
            break; // Stop if the row or the specific element doesn't exist
        }
    }

    displayOutput(`The sum of the major diagonal is ${diagonalSum.toFixed(2)}`);
}

// Event listener to ensure initOutput is called and main runs when the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initOutput();
    // The original Java code had two separate main methods.
    // In JavaScript, we'll combine them into one flow, allowing the user to choose.
    // If you intended for them to run independently, we'd need separate calls.
    main();
});