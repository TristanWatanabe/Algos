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
