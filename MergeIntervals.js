/*
    Edge Case: Empty input return empty array
    Sort the input by earliest start time
    Have variables min and max to keep track of current range interval that can potential expand
    Loop through each interval
        If the current interval's start time is within the min and max range
            max equals to max between max and current interval's end time
        Else
            push min and max to results array
            reset min and max to equal to current interval's start and end times
    Push the last min and max to the results array
    Return results
*/
