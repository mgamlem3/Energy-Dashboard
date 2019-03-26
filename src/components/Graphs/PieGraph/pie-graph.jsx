import React from "react";
var Chart = require("chart.js");

class PieGraph extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const context = this.context;

        var myChart = new Chart(context, {
            type: "pie",
            data: {
                labels: ["Duvall", "Oliver", "Baldwin-Jenkins"],
                datasets: [
                  {
                      label: "Energy Usage (Kw/hr)",
                        data: [273, 297, 189], // eslint-disable-line no-magic-numbers
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)"
                      ]
                  }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Daily Energy Usage'
                },
            }
        });
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
