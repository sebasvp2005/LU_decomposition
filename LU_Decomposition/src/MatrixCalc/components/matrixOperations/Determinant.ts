export class Determinant {
  getCofactor(matrix: number[][], temp: number[][], p: number, q: number, n: number): void {
      let i = 0, j = 0;
      for (let row = 0; row < n; row++) {
          for (let col = 0; col < n; col++) {
              if (row !== p && col !== q) {
                  temp[i][j++] = matrix[row][col];
                  if (j === n - 1) {
                      j = 0;
                      i++;
                  }
              }
          }
      }
  }

  determinantOfMatrix(matrix: number[][], n: number): number {
      let D = 0;

      if (n === 1)
          return matrix[0][0];

      let temp: number[][] = new Array(n);
      for (let i = 0; i < n; i++) {
          temp[i] = new Array(n).fill(0);
      }
      let sign = 1;

      for (let i = 0; i < n; i++) {
          this.getCofactor(matrix, temp, 0, i, n);
          D += sign * matrix[0][i] * this.determinantOfMatrix(temp, n - 1);
          sign = -sign;
      }
      return D;
  }
}
