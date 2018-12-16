import React, { Component } from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Stat extends Component {
  state = {
    totalCommits: null
  };

  totalCommitsHandler = () => {};

  render() {
    const { classes, user } = this.props;
    let countCommit = 0;

    user.repositories.nodes.forEach(element => {
      if (element.defaultBranchRef != null) {
        console.log(element.defaultBranchRef.target.history.totalCount);
        countCommit += element.defaultBranchRef.target.history.totalCount;
      }
    });

    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Store />
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Store />
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>{countCommit}</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Store />
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Stat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Stat);
