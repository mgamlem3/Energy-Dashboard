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
    /**
     * @description This function will turn results from the database into three separate year arrays
     * @param {array: Number} values 
     * @param {object} NOW current date/time data from `server.js`
     * @returns object with three arrays (thisYear, lastYear, lastLastYear)
     */
    separateDataIntoYears : function(values, NOW) {
        var ret = {
            thisYear: [],
            lastYear: [],
            lastLastYear: []
        };

        values.forEach(entry => {
            if(entry.date >= NOW.today - Constants.THREE_YEARS_AGO && entry.date <= NOW.today - Constants.TWO_YEARS_AGO) {
                // three years old
                ret.lastLastYear.push(entry);
            } else if (entry.date >= NOW.today - Constants.TWO_YEARS_AGO && entry.date <= NOW.today - Constants.ONE_YEAR_AGO) {
                // two years old
                ret.lastYear.push(entry);                
            } else if (entry.date >= NOW.today - Constants.ONE_YEAR_AGO && entry.date <= NOW.today) {
                // one year old
                ret.thisYear.push(entry);
            } else {
                console.warn("Entry with date %s is not able to be parsed. Is it more than three years old?", entry.date);
            }
        });

        return ret;
    }
}
