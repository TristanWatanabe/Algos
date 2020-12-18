/*
    contructor:    
        have a dictionary that stores timestamp: hits
    
    hits
        add to dictionary if timestamp doesnt exist, if it does, increment count
        
    getHits
        convert the dictionary into an array
        return total hits for every element that's within the range of timestamp-300 and timestamp

*/

class HitCounter {
  constructor() {
    this.timestamps = {};
  }

  hit(timestamp) {
    this.timestamps[timestamp]
      ? this.timestamps[timestamp]++
      : (this.timestamps[timestamp] = 1);
  }

  getHits(timestamp) {
    let min = timestamp - 300 > 0 ? timestamp - 300 : 0;
    let arr = Object.entries(this.timestamps).filter(
      (hit) => Number(hit[0]) > min && Number(hit[0]) <= timestamp
    );
    return arr.reduce((sum, hit) => sum + hit[1], 0);
  }
}
