/**
 * LRU CACHE:
 * Constructor:
 *      count - number of keys currently in the cache
 *      cache - hash table that keeps track of current valid cache keys
 *      capacity - number of keys that cache can hold
 *      linkedlist - datastructure to keep track of LRU keys
 * Get: key
 *  - update linkedlist by finding where this node is and moving it to tail
 *  - return cache[key] if exist, else return -1
 * Put: key, val
 *  - if key already exists in cache, update linkedlist and update cache
 *  - else:
 *      - if count less than capacity
 *            - increment count
 *      - else
 *            - remove head from linked list
 *            - delete from cache the least recently used key
 *      - add key-value pair to cache
 *      - add to tail of linked list
 *
 *  LINKED LIST:
 *  Constructor:
 *      head - pointer to least recently used key
 *      tail - pointer to most recently used key
 *  Add: node
 *      - if head is null, set head and tail to equal Node(key)
 *      - else
 *          -set tail.next to equal Node(key)
 *          -set tail pointer to equal Node(key)
 *  Update: key
 *      - Moves the node to the tail of the linked list
 *      - check if key is the head, if yes move head to equal head.next and tail to equal head
 *      - check if key is already at tail, if yes, return
 *      - else
 *          - find where the node is in the linked list
 *          - once found, move it to the tail of linked list
 *  Remove:
 *      - remove head of linked list
 *  GetHead:
 *      - return head of linked list
 *
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  update(key) {
    if (this.tail.val === key) return;
    if (this.head.val === key) {
      let newNode = new Node(key);
      this.head = this.head.next;
      this.add(newNode);
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        if (curr.val === key) {
          prev.next = curr.next;
          curr.next = null;
          break;
        }
        prev = curr;
        curr = curr.next;
      }
      this.add(curr);
    }
  }
  remove() {
    this.head = this.head.next;
  }
  getHead() {
    return this.head;
  }
}

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.list = new LinkedList();
    this.count = 0;
  }

  get(key) {
    if (this.cache[key]) {
      this.list.update(key);
      return this.cache[key];
    }
    return -1;
  }

  put(key, val) {
    if (this.cache[key]) {
      this.list.update(key);
      this.cache[key] = val;
    } else {
      let nodeToAdd = new Node(key);

      if (this.count < this.capacity) {
        this.count++;
      } else {
        let head = this.list.getHead();
        this.list.remove();
        delete this.cache[head.val];
      }
      this.list.add(nodeToAdd);
      this.cache[key] = val;
    }
  }
}

/**
 * N - max capacity of cache
 * Time Complexity: average case: O(1), worst case: O(N)
 * Space Complexity: O(N)
 */
