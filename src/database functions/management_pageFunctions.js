/**
 * @author Michael Gamlem III
 */

 import { API_URL } from "../resources/common-text-resources";

/**
 * @async
 * @param cost new cost for power
 * @description This function will update the most recent cost for power
 */

export function getPowerCost() {
    var url = new URL(API_URL+"/powerCost");
    
    return new Promise(resolve => {
        fetch(url)
            .then(data => data.json())
            .then(res => {
                resolve(res);
            });
    });
}

/**
 * @async
 * @param cost new cost for power
 * @description This function will update the most recent cost for power
 */

export function updatePowerCost(cost) {
    axios.post(API_URL+"/putData", {
        cost: cost
    });
}