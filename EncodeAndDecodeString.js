/**
  
  Encode:
    Input type is an array
    Since the input is a string from ASCII characters 0-256, then we can use ascii characters outside that range as our way of encoding the string
    Edge case: if string is empty, use charcode 257 to encode it
    else: use charcode 258 to encode the string and join the words together with that charcode

  Decode:
    Input is a string
    Edge case: if str is equal to charcode 257, return empty string
    else: return a split of the string removing the charcode 258 encoder

*/

const encode = (strs) => {
  if (!strs.length) return String.fromCharCode(257);
  let delimiter = String.fromCharCode(258);
  return strs.join(delimiter);
};

const decode = (s) => {
  let delimiter = String.fromCharCode(258);

  if (s === String.fromCharCode(257)) return [];
  return s.split(delimiter);
};
