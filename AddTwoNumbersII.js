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
