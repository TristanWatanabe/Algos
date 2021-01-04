/*
    Have a stack that stores a stack of [node, parent, level]
    Have found array to store nodes that matched either x or y
    
    Loop while stack has nodes in it
    Have variable size so we can use that to loop over nodes in the same level
        If current node value  equals to x or y
            if not parent,
                -return false since that means a match occured at the root
            else: push to found array [node, parent, level]
        If we've found 2 nodes to match x and y compare them
            if their parents are the same or they are not in the same level in tree
                - return false
            return true
    if node has a left, push [left, parent, level+1]
    if node has a right, push [right, parent, level+1]

*/
