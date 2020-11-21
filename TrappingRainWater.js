/**
 * MAIN: height
 *  Variables:
 *      totalWater: amount of water that can be stored
 *  Loop through each bar and determine how much each bar can hold
 *      - find the max bar on the left side of current bar
 *      - find the max bar on the right side of current bar
 *      - determine the minimum between the two side's max
 *      - if the minimum is greater than current bar, increment totalWater by minimum - current bar
 *  Return current bar
 *
 * FindMax: start, end, height
 *  Variables:
 *      max: highest bar in range
 *  Loop from start to end
 *      - have max equal max between current bar and max
 *  Return max
 */
