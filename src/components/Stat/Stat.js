import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import avatar from "assets/img/faces/marc.jpg";
import CardAvatar from "components/Card/CardAvatar.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const Stat = props => {
  const { classes } = props;

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
            <h3 className={classes.cardTitle}>75</h3>
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
};

Stat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Stat);
