const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
    {
<<<<<<< HEAD
        date: String,
        building: String,
        peakDemand: String,
        peakTime: String,
        weeklyConsumption: String,
=======
        id: Number,
        date: String,
        building: String,
        peakDemand: Number,
        peakTime: String,
        monthlyConsumption: Number,
>>>>>>> 520a534... add database functions to be used throughout application
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
