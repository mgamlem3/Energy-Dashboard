/**
 * @author Michael Gamlem III
 * @description This file defines constants used throughout the server
 */

/* eslint-disable no-magic-numbers */

module.exports = {

    /**
     * @description Dates
     */

    THREE_YEARS_AGO : function() {
        return 365*3; 
    },
    TWO_YEARS_AGO : function() {
        return 365*2; 
    },
    ONE_YEAR_AGO : function() {
        return 365; 
    },
    MONTH_LENGTH : function() {
        return 30;
    },
    DAYS_BETWEEN_CALCULATION : function() {
        return (1000 * 60 * 60 * 24);
    },

    /**
     * @description number bases
     */

    BASE_TEN : function() {
        return 10;
    }
    
};
