/**
 * Space Complexity:O(N)
 * Constructor:
 *      checkIns - table that keeps track of userId, checkInStation and checkInTime
 *      journeys - table that keeps track of total time and numberOfTrips from checkinStation - checkoutStation
 * Checkin: id, station, time
 *      Everytime there's a checkin, add to checkin table
 *      Time Complexity: O(1)
 * Checkout: id, station, time
 *      When there's a checkout, find that customer's checkin time and checkin station
 *      Create key formatted in checkinStation - checkoutStation and add/update journeys table
 *      Calculate new averageTime
 *      Delete from checkIns table the info of user who just checked out
 *      Time Complexity: O(1)
 * GetAverageTime: checkinStation, checkoutStation
 *      Return average time from checkinStation - checkoutStation
 *      Time Complexity:O(1)
 *
 *
 */

class UndergroundSystem {
  constructor() {
    this.checkIns = {};
    this.journeys = {};
  }

  checkIn(id, station, time) {
    this.checkIns[id] = { station, time };
  }
  checkOut(id, checkoutStation, time) {
    const checkinInfo = this.checkIns[id];
    const diff = time - checkinInfo.time;
    const journey = `${checkinInfo.station} - ${checkoutStation}`;
    //if there's previous info for checkInStation - checkOutStation, update
    if (this.journeys[journey]) {
      const j = this.journeys[journey];
      const newTotalTime = j.totalTime + diff;
      const newNumberOfTrips = j.numberOfTrips + 1;
      const newAverageTime = newTotalTime / newNumberOfTrips;
      this.journeys[journey] = {
        totalTime: newTotalTime,
        numberOfTrips: newNumberOfTrips,
        averageTime: newAverageTime
      };
    } else {
      this.journeys[journey] = {
        totalTime: diff,
        numberOfTrips: 1,
        averageTime: diff
      };
    }
    delete this.checkIns[id];
  }
  getAverageTime(checkinStation, checkoutStation) {
    return this.journeys[`${checkinStation} - ${checkoutStation}`].averageTime;
  }
}
