let outputDiv = null;

function initOutput() {
    if (!outputDiv) {
        outputDiv = document.createElement('div');
        outputDiv.id = 'matrixOutput'; // Changed ID to be more specific
        outputDiv.style.cssText = 'background:#1e1e1e;color:#00ff00;font-family:monospace;padding:20px;margin:20px;border-radius:8px;white-space:pre-wrap;max-height:600px;overflow-y:auto;';
        document.body.appendChild(outputDiv);
    }
}

function displayOutput(text) {
    initOutput();
    outputDiv.textContent += text + '\n';
}

// Function to clear the output div
function clearOutput() {
    if (outputDiv) {
        outputDiv.textContent = '';
    }
}

// Function to create the matrix input UI
function createMatrixInput(rows, cols) {
    const matrixContainer = document.createElement('div');
    matrixContainer.id = 'matrixInputContainer';
    matrixContainer.style.marginBottom = '20px';

    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    for (let r = 0; r < rows; r++) {
        const row = table.insertRow();
        for (let c = 0; c < cols; c++) {
            const cell = row.insertCell();
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'matrix-cell';
            input.dataset.row = r;
            input.dataset.col = c;
            input.style.width = '50px';
            input.style.margin = '2px';
            input.style.padding = '5px';
            input.style.textAlign = 'center';
            input.value = '0'; // Default value
            cell.appendChild(input);
        }
    }
    matrixContainer.appendChild(table);
    return matrixContainer;
}

// Function to get the matrix values from the input fields
function getMatrixValues(rows, cols) {
    const matrix = [];
    for (let r = 0; r < rows; r++) {
        matrix[r] = [];
        for (let c = 0; c < cols; c++) {
            const input = document.querySelector(`.matrix-cell[data-row='${r}'][data-col='${c}']`);
            matrix[r][c] = parseInt(input.value) || 0; // Use 0 if input is invalid
        }
    }
    return matrix;
}

// --- Conversion of Java Logic ---

// Corresponds to Java's 'sum' method
function sumRowsAndColumns(matrix) {
    const numRows = matrix.length;
    if (numRows === 0) return;
    const numCols = matrix[0].length;

    displayOutput("--- Row Sums ---");
    for (let r = 0; r < numRows; r++) {
        let rowSum = 0;
        for (let c = 0; c < numCols; c++) {
            rowSum += matrix[r][c];
        }
        displayOutput(`Sum of row ${r}: ${rowSum}`);
    }

    displayOutput("--- Column Sums ---");
    for (let c = 0; c < numCols; c++) {
        let colSum = 0;
        for (let r = 0; r < numRows; r++) {
            colSum += matrix[r][c];
        }
        displayOutput(`Sum of column ${c}: ${colSum}`);
    }
}

// Corresponds to Java's 'mirror' method (corrected logic for row swapping)
function mirrorMatrix(matrix) {
    const numRows = matrix.length;
    if (numRows === 0) return;

    // Create a deep copy to avoid modifying the original matrix during the swap operations
    const mirroredMatrix = matrix.map(row => [...row]);

    for (let n = 0; n < Math.floor(numRows / 2); n++) {
        // Swap rows
        const temp = mirroredMatrix[n];
        mirroredMatrix[n] = mirroredMatrix[numRows - 1 - n];
        mirroredMatrix[numRows - 1 - n] = temp;
    }

    displayOutput("--- Mirrored Matrix ---");
    for (const row of mirroredMatrix) {
        displayOutput(row.join(" "));
    }
}

// --- User Interaction Logic ---

function main() {
    clearOutput();
    initOutput();

    displayOutput("Welcome to the Matrix Operations Tool!");

    // Prompt for matrix dimensions
    const numRows = parseInt(prompt("Enter the number of rows for your matrix:"));
    const numCols = parseInt(prompt("Enter the number of columns for your matrix:"));

    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        displayOutput("Invalid dimensions entered. Please provide positive numbers for rows and columns.");
        return;
    }

    // Create and display the input table
    const matrixInputContainer = createMatrixInput(numRows, numCols);
    document.body.appendChild(matrixInputContainer);

    // Create buttons for actions
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '10px';

    const sumButton = document.createElement('button');
    sumButton.textContent = 'Sum Rows & Columns';
    sumButton.style.marginRight = '10px';
    sumButton.onclick = () => {
        clearOutput();
        const currentMatrix = getMatrixValues(numRows, numCols);
        displayOutput("--- Current Matrix ---");
        currentMatrix.forEach(row => displayOutput(row.join(" ")));
        sumRowsAndColumns(currentMatrix);
    };
    buttonContainer.appendChild(sumButton);

    const mirrorButton = document.createElement('button');
    mirrorButton.textContent = 'Mirror Matrix';
    mirrorButton.onclick = () => {
        clearOutput();
        const currentMatrix = getMatrixValues(numRows, numCols);
        displayOutput("--- Current Matrix ---");
        currentMatrix.forEach(row => displayOutput(row.join(" ")));
        mirrorMatrix(currentMatrix);
    };
    buttonContainer.appendChild(mirrorButton);

    document.body.appendChild(buttonContainer);
}

window.addEventListener('DOMContentLoaded', () => {
    // The initOutput is called inside main() now to ensure it's available when needed.
    // If you need it to be present immediately on load for other reasons, you can call it here:
    // initOutput();
    main();
});