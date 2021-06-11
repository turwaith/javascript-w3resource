function hasMatrixDiagonal(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if(i != j && matrix[i][j] === 1)
                return `[${matrix}] -> ${false}\n`;
        }        
    }
    return `[${matrix}] -> ${true}\n`;
}

var output = hasMatrixDiagonal([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) + hasMatrixDiagonal([[1, 0, 0], [0, 1, 0], [1, 0, 1]]);

setProblem(`Write a JavaScript program to check whether a given matrix is an identity matrix.
Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix,
of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere`);

setSolution(output);