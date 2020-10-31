/**
 * Use a stack to keep track of which node to traverse to next
 * Variables:
 *      prev - keeps track of the previous node checked
 * Use while loop while there's still nodes to check in stack
 *      - pop from stack
 *      - connect the current node's prev pointer to prev variable
 *      - if prev is not null, connect the next pointer of prev variable to current node
 *      - if current node has a node.next, add that node to stack
 *      - if current node has a node.child, add that node to stack (this means the child will always be processed first
 *        since we're using a stack datastructure)
 *      - set node.child to null
 *      - set prev to current node
 */

// class Node{
//     constructor(val, prev, next, child){
//         this.val = val
//         this.prev = prev
//         this.next = next
//         this.child = child
//     }
// }

const flatten = head => {
  if (!head) return head;
  let stack = [head];
  let prev = null;
  while (stack.length) {
    let curr = stack.pop();
    //make connections
    curr.prev = prev;
    if (prev) prev.next = curr;
    //add nodes to stack
    if (curr.next) stack.push(curr.next);
    if (curr.child) stack.push(curr.child);
    //update node
    curr.child = null;
    //update prev
    prev = curr;
  }
  return head;
};

/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * N - number of nodes in linked list
 */
