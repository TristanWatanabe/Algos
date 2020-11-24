/**
 * Variables:
 *      hash: hash table with key value pair of parent-children processes
 *      result: array to hold process id's that are killed
 *      processesToKill: stack to hold the process that need to be killed
 * Loop through from index 0 to ppid length
 *      - add parent key and it's children to hash
 * Loop through while there's still elements in processesToKill stack
 *      - pop from processesToKill stack
 *      - if the current process that was popped is a parent, push its children to processesToKill stack
 *      - push current process to result
 * Return result
 */

const killProcess = (pid, ppid, kill) => {
  let hash = {};
  let result = [];
  let processesToKill = [kill];
  for (let i = 0; i < ppid.length; i++) {
    const parent = ppid[i],
      child = pid[i];
    hash[parent] ? hash[parent].push(child) : (hash[parent] = [child]);
  }
  while (processesToKill.length) {
    const process = processesToKill.pop();
    //push children in processes to kill stack
    if (hash[process]) processesToKill.push(...hash[process]);
    result.push(process);
  }
  return result;
};

/**
 * N - number of processes
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
