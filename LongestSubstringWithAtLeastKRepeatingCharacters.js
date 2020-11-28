const longestSubstring = (s, k) => {
  const helper = (start, end, s, k) => {
    if (end < k) return 0;
    let hash = {};
    for (let i = start; i < end; i++) {
      const char = s[i];
      hash[char] ? hash[char]++ : (hash[char] = 1);
    }
    for (let i = start; i < end; i++) {
      const char = s[i];
      if (hash[char] < k) {
        return Math.max(helper(start, i, s, k), helper(i + 1, end, s, k));
      }
    }
    return end - start;
  };
  return helper(0, s.length, s, k);
};
