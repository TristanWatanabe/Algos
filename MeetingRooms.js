/**
 * Sort Array in ascending order
 * Loop starting from 1 to end of input
 *  - If start time of current meeting is less than end time of previous meeting
 *      - return false
 * Return true
 */

const canAttendMeetings = (meetings) => {
  meetings.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] < meetings[i - 1][1]) return false;
  }
  return true;
};
