/**
 * Constructor:
 *      mainStack - array of all numbers pushed to stack
 *      minStack - array of numbers with smallest on top
 * Push: number
 *      Push number to mainStack
 *      If minStack is empty, push number to minStack
 *      else push number to minStack if current number is less than or equal to number at top of minStack
 * Top:
 *      Return top of mainStack
 * Pop:
 *      Pop number on top of mainStack
 *      If number on top of mainStack is equal to number on top of minStack, pop minStack as well
 * GetMin:
 *      Return top of minStack
 */

class MinStack {
  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }

  push(num) {
    this.mainStack.push(num);
    if (!this.minStack.length || num <= this.minStack[this.minStack.length - 1])
      this.minStack.push(num);
  }

  pop() {
    const top = this.mainStack[this.mainStack.length - 1];
    this.mainStack.pop();
    if (this.minStack[this.minStack.length - 1] === top) this.minStack.pop();
  }

  top() {
    return this.mainStack[this.mainStack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(N)
 */
