import React, { Component } from "react";
import { Bar, Pie } from "react-chartjs-2";

class PieChart extends Component {
  state = {
    chartData: this.props.data
  };

  static defaultProps = {
    displayLegend: true,
    displayLegend: true,
    legendPosition: "left",
    location: "City"
  };

  render() {
    return (
      <div>
        <Pie
          data={this.state.chartData}
          width={100}
          height={50}
          option={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default PieChart;
