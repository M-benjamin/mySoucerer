import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Line from "../Charts/Line";
import generateData from "../../libs/utils";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Overview extends Component {
  state = {
    chartData: {}
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    let { finalData, listDate } = generateData(this.props.data.nodes);
    this.setState({
      chartData: {
        labels: listDate,
        datasets: finalData
      }
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h1 className={classes.cardTitleWhite}>Overview</h1>
            </CardHeader>
            <CardBody>
              <Line data={this.state.chartData} />
            </CardBody>
            <CardFooter />
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Overview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Overview);
