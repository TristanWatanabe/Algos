/**
 * Variables:
 *      left - pointer for left side for binary search
 *      right - pointer for right side for binary search, start at length - k
 * Cases: if the number we're looking for is less than the first element in array, return array sublist from zero to k
 *        if the number we're looking for is greater than the last element in array, return array sublist from arr length - k
 * Loop while left is less than right
 *  - calculate mid index by adding left and right and then dividing by 2
 *  - if x minus array at mid is greater than array at mid + k minus x
 *      - move left pointer to equal mid + 1
 *  - else:
 *      - move right pointer to equal mid
 * Return array sublist from left to left + k
 */
