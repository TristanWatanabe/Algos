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
