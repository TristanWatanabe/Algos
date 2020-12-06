/**
 * Edge Case: if rooms is empty return rooms
 * Use a queue to keep track of all gates and empty rooms we have seen
 * Populate queue with the coordinates of the gates(zeroes)
 * Traverse through the queue
    - for each location in queue, check its top, bottom, left and right
        - if the coordinates are out of bounds or they are not empty rooms, skip
        - else
            -update the value of top/bottom/left/right to be first of queue + 1
            -push top/left/bottom/right coordinates to queue
*/
