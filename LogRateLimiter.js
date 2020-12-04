/**
 *  Constructor:
 *      logs - hash table with key-val pair of message-timestamp
 *  shouldPrint: message, timestamp
 *      - if the message is in the hash table and the last time message was called was less than 10 seconds ago,
 *          - return false
 *      - else update/add message to logs hash table with timestamp
 *      - return true
 */

class Logger {
  constructor() {
    this.logs = {};
  }
  shouldPrintMessage(timestamp, message) {
    if (this.logs[message] !== undefined && timestamp - this.logs[message] < 10)
      return false;
    this.logs[message] = timestamp;
    return true;
  }
}
