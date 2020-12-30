/*
    Have ptr prev and curr
    Loop through curr
    If curr's value equals to val
        if prev is not equal to null
            - set prev.next to equal curr.next
            - curr to equal curr.next
        else (means that the head equals value)
            - set head to equal head.next
            - curr= head
    else 
        - set prev to equal curr
        - set curr= curr.next

*/

var removeElements = function (head, val) {
  let prev = null;
  let curr = head;
  while (curr) {
    if (curr.val === val) {
      if (prev) {
        prev.next = curr.next;
        curr = curr.next;
      } else {
        head = head.next;
        curr = head;
      }
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};

/**
 * N - number of elements in linked list
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
