const rearrangeBarcodes = (barcodes) => {
  const map = {};
  barcodes.forEach((num) => (map[num] = (map[num] || 0) + 1));
  const keys = Object.keys(map).sort((k1, k2) => map[k1] - map[k2]);
  let idx = 1;
  for (let num of keys) {
    let freq = map[num];

    for (let i = 0; i < freq; i++) {
      if (idx >= barcodes.length) idx = 0;
      barcodes[idx] = num;
      idx += 2;
    }
  }

  return barcodes;
};

/**
 * N - number of barcodes in array
 * Time Complexity: O(NLogN)
 * Space Complexity: O(N)
 */
