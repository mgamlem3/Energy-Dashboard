// modified from: https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274

/* eslint-disable no-console */

const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 5001;
const app = express();
app.use(cors());
const router = express.Router();
const dbRoute = "mongodb://localhost:27017/energy-dashboard-test";

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:")); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

/**
 * @deprecated As of now has no use
 * @description Returns entirety of the database
 */
router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

/**
 * @description This method updates data in the database by over-writing it
 */
router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findOneAndUpdate(id, update, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

/**
 * @description This method removes data from the database
 */
router.delete("/deleteData", (req, res) => {
    // const { id } = req.body;
    // Data.findOneAndDelete(id, err => {
    //     if (err) return res.send(err);
    //     return res.json({ success: true });
    // });
    res.status = 405;
    return res.json({
        success: false,
        error: "Data is not able to be deleted"
    })
});

/**
 * @description This method adds new data to the database
 */
router.post("/putData", (req, res) => {
    let data = new Data();

    const { date, buildingName, peakDemand, peakTime, monthlyConsumption } = req.body;
    if (!buildingName) { // eslint-disable-line no-magic-numbers
        console.error("Error no building name specified");
        res.statusCode = 400;
        res.statusMessage = "empty building field";
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }

    // fill fields
    data.date = date;
    data.building = buildingName;
    data.peakDemand = peakDemand;
    data.peakTime = peakTime;
    data.monthlyConsumption = monthlyConsumption;

    // save object
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        res.statusCode = 201;
        return res.json({ success: true });
    });
});

/**
 * @description this function will get the most recent entry for a building
 */
router.get("/mostRecent", (req, res) => {
    const LIMIT = 1;
    const building = req.query.building;

    if(!building) {
        res.status = 400;
        return res.json({
            success: false,
            error: "building is not defined"
        });
    }

    var query = Data.find({building: building}).sort({_id: -1}).limit(LIMIT);

    query.exec(function (err, result) {
        if(err) {
            res.status = 500;
            return res.json({
                success: false,
                error: err
            });
        } else if (result == null) {
            res.status = 404;
            return res.json({
                success: true,
                mesage: "no data found with this query"
            });
        }
        res.status = 200;
        return res.json({
            success: true,
            data: result
        }); 
    });
});

/**
 * @description this function will get the most recent entry for a building
 */
router.get("/mostRecentMultiple", (req, res) => {
    const building = req.query.building;
    const count = parseInt(req.query.count, 10);

    if(!building || !count) {
        res.status = 400;
        return res.json({
            success: false,
            error: "improper query parameters"
        });
    }

    var query = Data.find({building: building}).sort({_id: -1}).limit(count);

    query.exec(function (err, result) {
        if(err) {
            res.status = 500;
            return res.json({
                success: false,
                error: err
            });
        } else if (result == null) {
            res.status = 404;
            return res.json({
                success: true,
                mesage: "no data found with this query"
            });
        }
        res.status = 200;
        return res.json({
            success: true,
            data: result
        }); 
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
