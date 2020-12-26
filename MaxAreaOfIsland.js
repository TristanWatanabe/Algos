/*   Traverse through grid and if a "1" is found, check it's top, bottom, left and right to see if there's any more "1"s (recursion)
    Recursion:
        Base Case: if out of bounds or grid is equal to zero or -1, return 0
        else: 
            if grid is equal to 1: increment count
        return count + recurse(top) + recurse(bottom) + recurse(left) + recurse(right)
*/
