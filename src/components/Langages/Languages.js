import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Pie from "../Charts/Pie";
import generateData from "../../libs/utils";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Languages extends Component {
  state = {
    chartData: {}
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    const languages = this.props.languages;
    const result = generateData(languages.nodes);

    const label = [];
    const datas = [];
    const colors = [];

    result.forEach(val => {
      console.log("val", val);
      label.push(val.name);
      datas.push(val.commit);
      colors.push(val.color);
    });

    // > Set data here
    this.setState({
      chartData: {
        labels: label,
        datasets: [
          {
            data: datas,
            backgroundColor: colors
          }
        ]
      }
    });
  }

  render() {
    const { classes, languages } = this.props;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h1 className={classes.cardTitleWhite}>Languages</h1>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <Grid item xs={12} sm={6}>
                  <Pie data={this.state.chartData} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Pie data={this.state.chartData} />
                </Grid>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Languages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Languages);
