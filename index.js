/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const directions = ["E", "S", "W", "N"];

function readCell(matrix, row, col) { return matrix[col][row]}
function takeStep(direction, row, col) {
    switch (direction) {
        case "E":
            return [row, col + 1];
        case "S":
            return [row + 1, col];
        case "W":
            return [row, col - 1];
        case "N":
            return [row - 1, col];
        default:
            throw Error(`${direction} is not a legal direction.\nLegal directions are: ${directions.join(", ")}`);
    }
}

function turnRight(oldDirection) {
    const oldIndex = directions.indexOf(oldDirection);
    const newIndex = (oldIndex + 1) % directions.length;
    return directions[newIndex];
}

function movingHorizontally(direction) {
    return ['E', 'W'].includes(direction);
}


var spiralOrder = function(matrix) {
    const matrixWidth = matrix[0].length;
    const matrixHeight = matrix.length;
    const totalCells = matrixWidth * matrixHeight;
    let direction = "E";
    let rowsCovered = 0;
    let colsCovered = 0;
    let row = 0;
    let col = 0
    const output = [];
    while(output.length < totalCells) {
        let horizontal = movingHorizontally(direction)
        let stepsToTake = (horizontal ? matrixWidth - colsCovered : matrixHeight - rowsCovered) - 1;
        let stepsTaken = 0;
        while (stepsTaken >= stepsToTake) {
            const value = readCell(matrix, row, col);
            output.push(value);
            [row, col] = takeStep(direction, row, col);
            stepsTaken++
        }
        direction = turnRight(direction);
    }
    return output;

};