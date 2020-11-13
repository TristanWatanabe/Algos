/**
 * MAIN: graph
 * Variables:
 *      target - length of graph minus 1
 *      paths - array of all possible paths from 0 to target
 * Call backtrack function passing index 0, [0](starting path), target, paths, graph
 * Return paths
 *
 * BACKTRACK: index, path, target, paths, graph
 *  Base Case: if index is equal to target, push path to paths
 *  Else:
 *      Loop through each neighbor in paths at index
 *          - push current value to path
 *          - call backtrack again with current value as index now, path, target, paths, graph
 *          - pop from path in order to backtrack and explore another path
 */
