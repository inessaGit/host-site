/*
https://www.educative.io/courses/master-the-javascript-interview/YQ5mZGN267W


*/

function rotateClockwise(matrix) {
    const newMatrix = matrix[0].map(() => []);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
        }
    }

    return newMatrix;
}