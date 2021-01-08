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
