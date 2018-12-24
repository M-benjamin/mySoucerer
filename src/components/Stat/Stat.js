import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardFooter from "components/Card/CardFooter.jsx";
import generateData from "../../libs/utils";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Stat extends Component {
  render() {
    const { classes, data } = this.props;
    let { result } = generateData(data.repositories.nodes);
    let totalCommit = 0;
    let totalLineOfCode = 0;
    let repos = data.repositories.totalCount;
    let followers = data.followers.totalCount;
    let following = data.following.totalCount;

    result.forEach(res => {
      if (res != null) {
        totalCommit += res.commit;
        totalLineOfCode += res.codes;
      }
    });

    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="warning" stats icon />
            <CardFooter stats>
              <p className={classes.cardCategory}>Commits</p>
              <h3 className={classes.cardTitle}>{totalCommit}</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="primary" stats icon />
            <CardFooter stats>
              <p className={classes.cardCategory}>Repos</p>
              <h3 className={classes.cardTitle}>{repos}</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon />
            <CardFooter stats>
              <p className={classes.cardCategory}>Lines of code</p>
              <h3 className={classes.cardTitle}>{totalLineOfCode}</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="danger" stats icon />
            <CardFooter stats>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>{followers}</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="info" stats icon />
            <CardFooter stats>
              <p className={classes.cardCategory}>Following</p>
              <h3 className={classes.cardTitle}>{following}</h3>
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
