/**
 * Variables
 *       queue - array that holds the next node to be processed
 *            - each index holds an array with format [node, level in tree]
 *  Loop while queue is not empty
 *      - variable size to keep track of queue size BEFORE adding each nodes children
 *          - this allows us to navigate the tree by level
 *      - For Loop from 0 to size
 *      - if queue is not empty and the first node in queue is in the same level as current node
 *          - connect current node's next pointer to the first node in queue
 *      - Push current node's left and right nodes onto queue
 *          - with level + 1 to indicate that they are in another level of the tree
 *  Return input root
 */

/**
 * N - number of nodes in tree
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
