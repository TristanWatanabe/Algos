/**
 * Variables:
 *      ptr1 - ptr to keep track of first linkedlist
 *      ptr2 - ptr to keep track of second linkedlist
 *      carry - keeps track of carry
 *      sum - linkedlist containing sum
 *      curr - ptr for sum linkedlist
 * While loop while ptr1 or ptr2 or carry
 *      - have sum local variable add up ptr1, ptr2 and carry
 *      - if sum >= 10, set carry 1 and set sum to sum%10
 *        else carry equals zero
 *      - set curr.next to equal a new node with value of sum
 *      - update all pointers
 * Return sum.next
 */

//  class ListNode{
//      constructor(val, next){
//         this.val = val,
//         this.next = next
//      }
//  }

const addTwoNumbers = (l1, l2) => {
  let sum = new ListNode();
  let ptr1 = l1,
    ptr2 = l2,
    curr = sum;
  let carry = 0;
  while (ptr1 || ptr2 || carry) {
    let val1 = ptr1 ? ptr1.val : 0;
    let val2 = ptr2 ? ptr2.val : 0;
    //sum of all values
    let s = val1 + val2 + carry;
    //handle carry accordingly
    if (s >= 10) {
      carry = 1;
      s %= 10;
    } else {
      carry = 0;
    }
    //create new node for sum of column
    curr.next = new ListNode(s);
    //update pointers
    if (ptr1) ptr1 = ptr1.next;
    if (ptr2) ptr2 = ptr2.next;
    curr = curr.next;
  }
  return sum.next;
};

/**
 * N - number of nodes in L1
 * M - number of nodes in L2
 * Time Complexity: Max(N, M)
 * Space Complexity: Max(N, M)
 *
 */
