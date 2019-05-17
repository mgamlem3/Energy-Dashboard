import React from "react";
var Chart = require("chart.js");

class PieGraph extends React.Component {
    constructor(props) {
        super(props);

        this.kwh = [];
        this.labels = [];

        //this.kwh = [1789, 1548, 1900];
        //this.labels = ["Robinson", "Aquatic-Center", "HUB"];
    }
    componentDidMount() {
        const context = this.context;

        this.pieChart = new Chart(context, {
            type: "pie",
            data: {
                labels: this.labels,
                datasets: [
                  {
                      label: "Energy Usage (Kw/hr)",
                        data: this.kwh,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(7, 38, 209, 0.2)",
                          "rgba(34, 245, 187, 0.2)"
                      ]
                  }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Daily Energy Usage (Kw/hr)'
                },
            }
        });
    }

    fixEmpty(element) {
        try {  
            if (element === undefined || element === [] || element === null) {
                element = 1;
                return element;
            }
        } catch (e) {
          console.warn("unable to fix element: " + e);
        }
    }

    editBuilding(incomingData, incomingLabel) {
        const empty = -1;
        var inKwh = -1;
        var index = 0;

        incomingData = this.fixEmpty(incomingData);

        while(index < this.labels.length){
            if (incomingLabel == this.labels[index]) 
                inKwh = index;
            index++;
        }

        if (inKwh == empty){
            this.kwh.push(incomingData);
            this.labels.push(incomingLabel);
      
        } else {
            var tempData = [];
            var tempLabels = [];
            var numCount = this.labels.length - empty;
            var stackLength = 0;
            while (numCount > inKwh) {
                tempData.push(this.kwh[numCount]);
                tempLabels.push(this.labels[numCount]);
                this.kwh.pop();
                this.labels.pop();
                numCount--;
                stackLength++;
            }
            this.kwh.pop();
            this.labels.pop();
            const offset = 1;
            const empty = 0;
            while (stackLength > empty){
                this.kwh.push(tempData[stackLength-offset]);
                this.labels.push(tempLabels[stackLength-offset]);
                stackLength--;                
            }
        }
          
        this.pieChart.update();
    }

    render() {
        return (
            <div>
                <canvas
                  style={{ width: 500, height: 300 }}
                  ref={context => (this.context = context)}
                />
            </div>
        );
    }
}

export default PieGraph;
