/**
 * Variables:
 *  q - queue used for BFS
 *  hash - hash table to store column value (key-val pair of column-array of numbers in that column)
 *  min - minimum column value
 *  max - maximum column value
 *  result - array that holds level order of binary tree
 * Loop while q is not empty
 *  - set curr to be first element in queue
 *  - check if current column is less than min and adjust appropriately
 *  - check if current column is greater than max and adjust appropriately
 *  - if current node has a left, push it to q with its column value being col - 1
 *  - if current node has a right, push it to q with its column value being col + 1
 *  - if hash[col] exists, push current node value to it
 *  - else: create a new key-val pair of hash[col] equal to an array with current node value as first element
 * Loop from min to max
 *  - push to result array the value at hash[index]
 */
