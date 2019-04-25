/**
 * @author Michael Gamlem III
 */

const Constants = require("./constants");

module.exports = {    

    /**
     * @description This function will create graph labels from datapoints given by the database
     * @param {array: Database Entry} values array of Database Entries
     * @param {String} kind kind of label to generate (year, month, hour, day)
     */

    createDatapointLabels : function(values, kind = "year") {
        var labels = [];
        
        if (kind == "year") {
            values.forEach(entry => {
                try {
                    var label = entry.date.getMonth() + "/" + entry.date.getYear();
                    labels.push(label);
                } catch (e) {
                    console.error("Error Creating label %s", e);
                }
            });
        } else if (kind == "month") {
            values.forEach(entry => {
                try {
                    var label = entry.date.getMonth() + "/" + entry.date.getDay();
                    labels.push(label);
                } catch (e) {
                    console.error("Error Creating label %s", e);
                }
            });
        } else if (kind == "hour") {
            values.forEach(entry => {
                try {
                    var label = entry.date.getHour() + ":" + entry.date.getMinute();
                    labels.push(label);
                } catch (e) {
                    console.error("Error Creating label %s", e);
                }
            });
        } 

        return labels;
    },

    /**
     * @description This function will turn results from the database into three separate year arrays
     * @param {array: Object(database result)} values 
     * @param {object} NOW current date/time data from `server.js`
     * @returns object with three arrays of monthly averages for each year (thisYear, lastYear, lastLastYear)
     */

    getMonthAverages : function(values, NOW) {
        var ret = {
            thisYear: [],
            lastYear: [],
            lastLastYear: []
        };

        // sort all datapoints into proper year
        try {
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
        } catch (e) {
            console.error("Error while processing data and sorting into years." + e);
        }

        //get average for each month of the year
        ret = getMonthlyAverages(ret);

        return ret;
    },

    /**
     * @description This function will turn results from the database into one array of daily averages
     * @param {array: Object(database result)} values 
     * @param {object} NOW current date/time data from `server.js`
     * @returns object with one array of daily average energy use
     */

    getDayAverages : function(values, NOW) {
        var thisMonth = [];

        // get results for this month
        try {

            // current day that is being processed
            var currentDay = values[0].date;
            var tempVals = [];
            values.forEach(entry => {
                if (entry.date <= NOW.today && entry.date >= NOW.today - Constants.MONTH_LENGTH) {
                    if (entry.date == currentDay) {
                        tempVals.push(entry.peakDemand);
                    } else if (entry.date != currentDay) {
                        thisMonth.push(average(tempVals));
                        currentDay = entry.date;
                        tempVals = [];
                        tempVals.push(entry.peakDemand);
                    }
                }
            });
        } catch (e) {
            console.error("Error while processing data and sorting into years." + e);
        }

        return thisMonth;
    }, 

    }
    
};

/**
 * @description The below functions are used internally to this file and should not be exported
 */

/**
 * @description This function will average all elements of an array
 * @param {array: Number} values array of numbers
 * @returns average of values or null if error
 * @private
 */

function average(values) {
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

/**
 * @description This function is meant to convert all entries from a month into averages that will be returned to the `getMonthAverages()` function. It is not intended to be called by anything else.
 * @param {Object: 3 arrays} arrays must be in the shape of the `ret` object from `getMonthAverages()` above 
 * @returns three arrays with monthly averaged values. (If no data can be found for the month, a zero is entered).
 * @private
 */

function getMonthlyAverages(arrays) {
    var currentMonth = arrays[0].date.getMonth();
    var vals = [];
    var ret = {
        thisYear: [],
        lastYear: [],
        lastLastYear: [],
    };
    arrays.thisYear.forEach(element => {
        if (element.date.getMonth() == currentMonth) {
            vals.push(element.date.peakDemand);
        } else {
            currentMonth = element.date.getMonth();
            ret.thisYear.push(average(vals));
        }
    });
    arrays.lastYear.forEach(element => {
        vals = [];
        if (element.date.getMonth() == currentMonth) {
            vals.push(element.date.peakDemand);
        } else {
            currentMonth = element.date.getMonth();
            ret.lastYear.push(average(vals));
        }
    });
    arrays.lastLastYear.forEach(element => {
        vals = [];
        if (element.date.getMonth() == currentMonth) {
            vals.push(element.date.peakDemand);
        } else {
            currentMonth = element.date.getMonth();
            ret.lastLastYear.push(average(vals));
        }
    });

    return ret;
}
