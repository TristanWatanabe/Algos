/*
    Edge Case: Empty input return empty array
    Sort the input by earliest start time
    Have variables min and max to keep track of current range interval that can potential expand
    Loop through each interval
        If the current interval's start time is within the min and max range
            max equals to max between max and current interval's end time
        Else
            push min and max to results array
            reset min and max to equal to current interval's start and end times
    Push the last min and max to the results array
    Return results
*/

const merge = (intervals) => {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let min = intervals[0][0];
  let max = intervals[0][1];
  let result = [];
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval[0] <= max) {
      max = Math.max(max, interval[1]);
    } else {
      result.push([min, max]);
      min = interval[0];
      max = interval[1];
    }
  }
  result.push([min, max]);
  return result;
};
