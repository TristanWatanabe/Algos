/**
 * Variables:
 *      prehead: dummy listNode that holds sorted combined linked lists
 *      curr: pointer for prehead
 * Loop while l1 and l2 are not null
 *  - if l1's value is less than or equal to l2's value
 *      - have curr's next pointer equal to l1
 *      - move l1 forward
 *  - else
 *      - have curr's next pointer equal to l2
 *      - move l2 forward
 *  - move curr forward
 * Have curr's next pointer equal to either l1 or l2 (whichever one has remaining nodes)
 * Return prehead's next pointer
 */

const mergeTwoLists = (l1, l2) => {
  let prehead = new ListNode();
  let curr = prehead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 ? l1 : l2;
  return prehead.next;
};

/**
 * N - number of nodes in l1
 * M - number of nodes in l2
 * Time Complexity: O(N+M)
 * Space Complexity: O(1)
 */
