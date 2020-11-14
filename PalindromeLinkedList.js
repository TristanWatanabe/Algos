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
