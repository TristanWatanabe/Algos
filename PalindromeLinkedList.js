/**
 * MAIN:
 *  Variables:
 *      numberOfNodes - total number of nodes in linked list
 *      p1 - points to head
 *      p2 - points to head of second half of linked list
 *      i - variable to keep track of where head of second list should be
 *  Loop through entire linked list to find total number of nodes
 *  If even numberOfNodes
 *      - Loop while i is less than half of numberOfNodes to find head of second linked list
 *  Else:
 *      - Loop while i is less than half of numberOfNodes rounded up to find head of second linked list
 *  Call reverse function to reverse p2
 *  Return the result of calling the compare function on p1 and p2
 *
 * REVERSE: head
 *  Variables:
 *      prev - previous node
 *      curr - current pointer
 *  Loop while curr is not null
 *      -Make correct connections to reverse linked list
 *  Return prev (as it is the head of the linked list now)
 *
 * COMPARE: list1, list2
 *  Loop while theres both list1 and list2 are not null
 *      - Compare the values of list1 and list2 and if they are not equal, return false
 *  Return true
 */

const isPalindrome = (head) => {
  let numberOfNodes = 0;
  let p1 = head;
  while (p1) {
    numberOfNodes++;
    p1 = p1.next;
  }
  p1 = head;
  let p2 = head;
  let i = 0;
  //if even number of nodes
  if (numberOfNodes % 2 === 0) {
    while (i < numberOfNodes / 2) {
      p2 = p2.next;
      i++;
    }
  } else {
    while (i < Math.ceil(numberOfNodes / 2)) {
      p2 = p2.next;
      i++;
    }
  }

  p2 = reverse(p2);
  return compare(p1, p2);
};

const reverse = (list) => {
  let curr = list;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const compare = (p1, p2) => {
  while (p1 && p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
};

/**
 * N - number of nodes in linked list
 * Time Complexity: O(N)
 * Space Complexity: O(1) : we modify the input linked list in place
 */
