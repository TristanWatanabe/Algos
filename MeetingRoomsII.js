/**
 * Variables:
 *      start- array of meeting start times
 *      end - arry of meeting end times
 *      startPtr - pointer to which start meeting is being processed
 *      endPtr - pointer to which end meeting is being processed
 *      numRooms - number of rooms needed to accomodate all meetings
 *  Sort meetings by start time and store values in start
 *  Sort meetings by end time and store values in end
 *  Loop while startPtr is less than start meetings length
 *      - increment numRooms since we assume each start meeting requires it's own room
 *      - if start meeting is greater than or equal the current end meeting being looked at
 *          - decrement numRooms because that means we can reuse a room
 *          - increment endPtr because that means a meeting has ended and the room was reused
 *      - increment startPtr to look at next meeting
 *  Return numRooms
 */
