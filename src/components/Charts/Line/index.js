import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  state = {
    chartData: this.props.data
  };

  static defaultProps = {
    displayLegend: true,
    legendPosition: "left",
    location: "City"
  };

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          width={100}
          height={50}
          option={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

export default LineChart;
