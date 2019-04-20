/**
 * @author Michael Gamlem III
 */

/**
 * @description This function will average all elements of an array
 * @param values array of numbers
 * @returns average of values or null if error
 */

export function average(values) {
    var sum, average = 0;
    try {
        values.forEach(value => {
            sum += value;
        });
        average = sum/values.length();
    } catch (error) {
        console.error("ERROR: Unable to average values");
        average = null;
    }
    return average;
}
