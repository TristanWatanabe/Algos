/**
 * Variables:
 *      map - mapping that has key value pair of node - copy of node
 *      curr - ptr to input linked list
 * Loop while curr is not null
 *      - add to map a created copy of node with node as key
 *      - move curr ptr to next node
 * Set curr ptr back to head of linked list
 * Loop while curr is not null
 *      - get reference to copy of node
 *      - set copy's next ptr to equal to map at node.next
 *      = set copyy's random ptr to equal to map at node.random
 * Return map at head
 */

//  class Node{
//      constructor(val, next, random){
//          this.val = val
//          this.next = next
//          this.random = random
//      }
//  }

const copyRandomList = (head) => {
  let map = new Map();
  let curr = head;
  //populate map with copies of each node in linked list
  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }
  curr = head;
  //Connect the copy nodes together
  while (curr) {
    let copy = map.get(curr);
    copy.next = map.get(curr.next) ? map.get(curr.next) : null;
    copy.random = map.get(curr.random) ? map.get(curr.random) : null;
    curr = curr.next;
  }
  return map.get(head);
};
