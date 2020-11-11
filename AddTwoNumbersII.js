/**
 * Variables:
 *      s1 - stack to hold values of first linked list
 *      s2 - stack to hold values of second linked list
 *      sumStack - stack to hold values of sum of the two linked lists
 *      result - linked list of sum of first and second linked lists
 *      p1 - pointer to first linked list
 *      p2 - pointer to second linked list
 *      curr - pointer to result linked list
 *      carry - value of carry over when doing addition
 * Loop through both linked lists and add the values of each node to each respective stack
 * Loop through while s1 and s2 have values in their stacks and also while carry is not zero
 *      - add the values that are popped from s1 and s2 and also add carry
 *      - if the sum is in double digits
 *          - set sum to equal sum modular 10
 *          - set carry to 1
 *      - else, set carry to 0
 *      - push sum to sumStack
 * Loop while sumStack has values
 *      - set curr.next to equal to a new node with the value that's popped out of sumStack
 *      - move curr pointer to next
 * Return result.next
 */

const addTwoNumbers = (l1, l2) => {
  let s1 = [],
    s2 = [],
    sumStack = [];
  let p1 = l1,
    p2 = l2;
  let result = new ListNode();
  let carry = 0;
  let curr = result;

  while (p1 || p2) {
    if (p1) {
      s1.push(p1.val);
      p1 = p1.next;
    }
    if (p2) {
      s2.push(p2.val);
      p2 = p2.next;
    }
  }
  while (s1.length || s2.length || carry) {
    let val1 = s1.length ? s1.pop() : 0;
    let val2 = s2.length ? s2.pop() : 0;
    let sum = val1 + val2 + carry;
    if (sum > 9) {
      sum %= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    sumStack.push(sum);
  }
  while (sumStack.length) {
    let sumNode = new ListNode(sumStack.pop());
    curr.next = sumNode;
    curr = curr.next;
  }

  return result.next;
};

/**
 * N - number of nodes in linked list 1
 * M - number of nodes in linked list 2
 * Time Complexity: O(N+M)
 * Space Complexity: O(N+M)
 */
