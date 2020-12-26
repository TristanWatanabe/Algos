/*   Traverse through grid and if a "1" is found, check it's top, bottom, left and right to see if there's any more "1"s (recursion)
    Recursion:
        Base Case: if out of bounds or grid is equal to zero or -1, return 0
        else: 
            if grid is equal to 1: increment count
        return count + recurse(top) + recurse(bottom) + recurse(left) + recurse(right)
*/

const maxAreaOfIsland = (grid) => {
  let max = 0;
  let numRows = grid.length;
  let numCols = grid[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === 1) {
        let count = traverse(i, j, numRows, numCols, grid);
        max = Math.max(count, max);
      }
    }
  }
  return max;
};

const traverse = (i, j, numRows, numCols, grid) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= numRows ||
    j >= numCols ||
    grid[i][j] === 0 ||
    grid[i][j] === -1
  )
    return 0;
  if (grid[i][j] === 1) {
    grid[i][j] = -1;

    return (
      1 +
      traverse(i + 1, j, numRows, numCols, grid) +
      traverse(i - 1, j, numRows, numCols, grid) +
      traverse(i, j + 1, numRows, numCols, grid) +
      traverse(i, j - 1, numRows, numCols, grid)
    );
  }
};

/**
 * N - number of rows in grid
 * M - number of columns in grid
 * Time Complexity: O(N*M)
 * Space Complexity: O(N*M)
 */
