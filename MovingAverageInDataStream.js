/** 
    Have datastructure variables
        -array of nums: push all values to this array
        -capacity: how much of the data we're counting
        -count: keeps track of how many values we've added to array
        -curr: ptr to the number that would be removed if at capacity
        -total: total of all numbers within capacity
    
    next:
        if count is equal to capacity
            -subtract nums[curr] from total
            -move curr ptr forward
        else 
            -increment count
        push val to array
        add new value to the total
        return total divided by count
 
 */

class MovingAverage {
  constructor(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.curr = 0; //index of next num to remove from array
    this.total = 0;
    this.nums = [];
  }

  next(val) {
    if (this.count === this.capacity) {
      this.total -= this.nums[this.curr];
      this.curr++;
    } else {
      this.count++;
    }
    this.nums.push(val);
    this.total += val;
    return this.total / this.count;
  }
}

/**
 * N - number of data inserted
 * Time Complexity: O(1)
 * Space Complexity: O(N)
 */
