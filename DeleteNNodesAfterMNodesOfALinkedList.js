/*
    Main:
    Have a count variable equal to 1 at first because we're pointing at the head already
    While loop while curr is not null
        If count equals to m
            get the next node to connect this node with
            reset count back to equal 1
        else 
            increment count
        Move pointer forward
    Return head
            
    GetNextNode helper function: n, node
        - return a node that's n distance away from current node passed
*/

const deleteNodes = (head, m, n) => {
  let count = 1;
  let curr = head;
  while (curr) {
    if (count === m) {
      curr.next = getNext(n, curr);
      count = 1;
    } else {
      count++;
    }
    curr = curr.next;
  }
  return head;
};

const getNext = (n, curr) => {
  for (let i = 0; i <= n; i++) {
    if (!curr) break;
    curr = curr.next;
  }

  return curr;
};

/**
 * N - number of nodes in Linked List
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
