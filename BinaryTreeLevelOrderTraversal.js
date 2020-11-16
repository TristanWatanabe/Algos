/**
 * Variables:
 *      q - queue to hold nodes to be processed
 *      result - holds the values of nodes in the same level
 *  Loop while q is not empty
 *      - get size of q to determine current level
 *      - have array numsInLevel to store the node values at the current level
 *      - Loop from 0 to size
 *          - remove first element in q and store in a variable
 *          - push node value to numsInLevel
 *          - if node has a left child, push left child to q
 *          - if node has a right child, push right child to q
 *      - Push numsInLevel to result
 *  Return result
 */
