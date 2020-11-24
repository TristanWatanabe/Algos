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
