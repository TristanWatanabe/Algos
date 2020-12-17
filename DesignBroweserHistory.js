/*
    Datastructure will hold two variables: current index and array of pages
    Visit: url
        if current index not equal to length of pages array
            delete every page that comes after the current index
        Push to pages array the new url
        Increment current index
    Back: steps
        if current index - steps is less than or equal to zero
            - set current index to zero
        else
            - set current index to equal current index - steps
        Return pages at current index
    Forward: steps
        if current index + steps greater than length of pages array
            - set current index to equal to length of pages array
        else 
            - set current index to equal to current index + steps
        Return pages at current index

*/
