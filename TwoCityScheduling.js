/**
 * Variables:
 *      total - total of minimum cost to fly each person to a city
 * Modify input array and add a 3rd column to each person which will stand as
 *  weighted value (cost of going to A minus cost of going to B)
 * Sort input array by weighted value in ascending order so we know that the people in the first half of array should go
 *  to city A. Since we sorted by weighted value, a low value means that going to city A will be way cheaper.
 * Loop through each person in input array
 *      If i is greater than half of length of array minus 1, then that means the person should go to city B
 *          - increment total by the cost of going to city B
 *      Else, means that the person should go to city A
 *          - increment total by the cost of going to city A
 * Return total
 */

const twoCitySchedCost = (costs) => {
  let total = 0;
  costs = costs
    .map((person) => [person[0], person[1], person[0] - person[1]])
    .sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < costs.length; i++) {
    let person = costs[i];
    //person goes to cityB
    if (i > costs.length / 2 - 1) {
      total += person[1];
    }
    //person goes to cityA
    else {
      total += person[0];
    }
  }
  return total;
};

/**
 * N - number of people in input array
 * Time Complexity: O(NlogN) sorting dominates solution
 * Space Complexity: O(1)
 */
