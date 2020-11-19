const maxLength = (arr) => {
  let max = 0;

  const traverse = (start, arr, str) => {
    if (start > arr.length) return;
    if (!isUnique(str)) return;
    let strLength = str.join("").length;
    max = Math.max(max, strLength);
    for (let i = start; i < arr.length; i++) {
      str.push(arr[i]);
      traverse(i + 1, arr, str);
      str.pop();
    }
  };

  const isUnique = (s) => {
    s = s.join("");
    let hash = {};
    for (const char of s) {
      if (hash[char] !== undefined) return false;
      else hash[char] = 1;
    }
    return true;
  };

  traverse(0, arr, []);
  return max;
};
