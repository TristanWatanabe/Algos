/**
 * Variables
 *      prev - keeps track of previous node
 *      curr - keeps track of current node
 * Loop while curr is not null
 *      - store curr.next to a variable next
 *      - set curr.next to equal prev
 *      - set prev to equal curr
 *      - set curr to equal next
 * Return prev
 *
 */

class ListNode {
  constructor(val, next) {
    (this.val = val), (this.next = next);
  }
}

const reverseList = head => {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/**
 * N - number of nodes in linked list
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
