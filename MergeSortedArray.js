/**
 *  Variables:
 *      m = ptr for array nums1
 *      n = ptr for array nums2
 *  Decrement both m and n inputs so they act as ptrs for each array
 *  Loop starting from the end of nums1
 *      At each index in nums1, compare nums1 at ptr m and nums2 at ptr n
 *      If value at nums1 ptr m is greater than or equal to value at nums 2 ptr n OR there's no more value to evaluate in nums2
 *          - set value of nums1 at index i to equal nums1 at ptr m
 *          - decrement m
 *      Else:
 *          - set value of nums1 at index i to equal nums2 at ptr n
 *          - decrement n
 *  Return nums1
 */
