/*
    Datastructure will hold two variables: current index and array of pages
    Visit: url
        if current index not equal to length of pages array
            delete every page that comes after the current index
        Push to pages array the new url
        Increment current index
    Back: steps
        if current index - steps is less than or equal to zero
            - set current index to zero
        else
            - set current index to equal current index - steps
        Return pages at current index
    Forward: steps
        if current index + steps greater than length of pages array
            - set current index to equal to length of pages array
        else 
            - set current index to equal to current index + steps
        Return pages at current index

*/

class BrowserHistory {
  constructor(homepage) {
    this.currIdx = 0;
    this.pages = [homepage];
  }

  visit(url) {
    if (this.currIdx !== this.pages.length - 1) {
      this.pages = this.pages.slice(0, this.currIdx + 1);
    }
    this.pages.push(url);
    this.currIdx++;
  }

  back(steps) {
    if (this.currIdx - steps <= 0) {
      this.currIdx = 0;
    } else {
      this.currIdx = this.currIdx - steps;
    }
    return this.pages[this.currIdx];
  }

  forward(steps) {
    if (this.currIdx + steps > this.pages.length - 1) {
      this.currIdx = this.pages.length - 1;
    } else {
      this.currIdx = this.currIdx + steps;
    }
    return this.pages[this.currIdx];
  }
}

/**
 * N - number of websites visited
 * Time Complexity: O(1)
 * Space Complexity: O(N)
 */
