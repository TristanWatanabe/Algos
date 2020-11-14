/**
 * Variables:
 *      map - dictionary to keep track of numbers we've already seen
 *      pairs - number of good pairs in array
 * Loop through each number in array
 *      - If number is not in map, add to map and have it equal to 1
 *      - else, increment pairs by map[number] (since we can make that many more pairs if we discover an identical number)
 *          and then increment map[number] by 1
 * Return pairs
 */
