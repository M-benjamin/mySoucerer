import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const Header = props => {
  const { classes, name, avatar } = props;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card profile>
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <CardBody profile>
            <h1 className={classes.cardCategory}>{name}</h1>
            <h4 className={classes.cardTitle}>Alec Thompson</h4>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Header);
