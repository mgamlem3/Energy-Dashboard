import React from "react";
var Chart = require("chart.js");

class PieGraph extends React.Component {
    constructor(props) {
        super(props);

        this.kwh = [273, 297, 189];
        this.labels = ["Duvall", "Oliver", "Baldwin-Jenkins"];
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
                        data: this.kwh, // eslint-disable-line no-magic-numbers
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

    editBuilding(newData, newLabel) {
        this.kwh += newData;
        this.labels += newLabel;
        this.pieChart.data.labels.push(newLabel);
        this.pieChart.data.datasets.forEach((dataset) => {
            dataset.data.push(newData);
        });        
          
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
