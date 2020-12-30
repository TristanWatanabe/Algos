/*
    Have ptr prev and curr
    Loop through curr
    If curr's value equals to val
        if prev is not equal to null
            - set prev.next to equal curr.next
            - curr to equal curr.next
        else (means that the head equals value)
            - set head to equal head.next
            - curr= head
    else 
        - set prev to equal curr
        - set curr= curr.next

*/
