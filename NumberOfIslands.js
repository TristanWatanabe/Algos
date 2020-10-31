/**
 * Variables:
 *      count - number of islands in map
 *  Iterate over each cell in 2D array
        - if cell equals to 1
            - increment count variable
            - call helper function on current cell
 *  Return count
* 
* Helper Function: recursive function that updates original map if a cell is part of an island
    Base case: coordinates fall out of bounds or current cell is equal to Zero, return immediately
    Recursive case:
        - Update current cell value to equal 0 to mark cell as visited
        - call helper function for cells that are to the left, top, right and bottom of current cell
*/

const numIslands = grid => {
  if (!grid.length) return 0;
  let count = 0;
  let numRows = grid.length;
  let numCols = grid[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      //island detected
      if (grid[i][j] == 1) {
        count++;
        helper(i, j, grid);
      }
    }
  }
  return count;
};

const helper = (i, j, grid) => {
  //out of bounds
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
  //not land
  if (grid[i][j] == 0) return;
  //set to 0 to mark land as "visited"
  grid[i][j] = "0";
  //check if nearby cells are also part of island
  helper(i + 1, j, grid);
  helper(i - 1, j, grid);
  helper(i, j - 1, grid);
  helper(i, j + 1, grid);
};

/**
 * M - number of rows in map
 * N - number of coloumns in map
 * Time Complexity: O(M x N)
 * Space Complexity: O(M x N)
 *      - in case the map is filled with lands
 */
