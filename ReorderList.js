/**
 * Have a stack to hold each node in the list
 * Set each next pointer for a node to null
 * Initialize pointers low and high to 1 and stack length -1 respectively
 * Have variables curr set to head and i set to 0
 * Loop while i is less than number of nodes in stack
 *  - If i is even,
 *      - set curr's next pointer to point to stack at index high
 *      - decrement high
 *  - else:
 *      - set curr's next pointer to point to stack at index low
 *      - increment low
 *  - move curr forward
 *  - increment i
 * Return head
 *
 */

const reorderList = (head) => {
  let stack = [];
  let curr = head;
  //Populate stack with each node
  while (curr) {
    stack.push(curr);
    curr = curr.next;
  }
  //Prevents cycles from occurring
  for (let i = 0; i < stack.length; i++) {
    stack[i].next = null;
  }
  curr = head;
  let low = 1,
    high = stack.length - 1,
    i = 0;

  while (i < stack.length - 1) {
    if (i % 2 === 0) {
      curr.next = stack[high];
      high--;
    } else {
      curr.next = stack[low];
      low++;
    }
    i++;
    curr = curr.next;
  }
  return head;
};

/**
 * N - number of nodes in list
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
