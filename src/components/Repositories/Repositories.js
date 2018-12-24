import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { Panel, PanelGroup, Button, Badge } from "react-bootstrap";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { GET_ALL_REPO_PAGINATION_GIHUB } from "../../queries";
import Loader from "components/Loader/Loader";

const LIMIT_OF_ROW = 5;
class Repositories extends Component {
  state = {
    hasNext: true
  };

  render() {
    const { classes } = this.props;

    const variables = {
      login: "M-benjamin",
      cursor: null,
      prev: null,
      limit: LIMIT_OF_ROW
    };

    return (
      <Query
        query={GET_ALL_REPO_PAGINATION_GIHUB}
        fetchPolicy="cache-and-network"
        variables={variables}
      >
        {({ loading, error, data: { user }, fetchMore }) => {
          if (loading) {
            return (
              <div className="load">
                <Loader />
              </div>
            );
          }

          const { pageInfo, nodes } = user.repositories;

          return (
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card chart>
                  <CardHeader color="success">
                    <h1 className={classes.cardTitleWhite}>Repositories</h1>
                  </CardHeader>
                  <CardBody>
                    <PanelGroup accordion id="accordion-example">
                      {nodes.map((repo, index) => {
                        return (
                          <Panel key={index} eventKey={index}>
                            <Panel.Heading>
                              <Panel.Title toggle>{repo.name}</Panel.Title>
                            </Panel.Heading>

                            <Panel.Body collapsible>
                              <h6>
                                Commits:
                                {
                                  repo.defaultBranchRef.target.history
                                    .totalCount
                                }
                              </h6>
                              <hr />
                              <h6>
                                Primary Language: {repo.primaryLanguage.name}
                              </h6>
                              <hr />
                              <h6>Languages: </h6>
                              {repo.languages.nodes.map((lang, index) => {
                                const colorBabge = {
                                  backgroundColor: lang.color
                                };
                                return (
                                  <Card
                                    key={index}
                                    style={{ width: "100px", padding: "5px" }}
                                  >
                                    <h6>{lang.name}</h6>
                                    <Badge style={colorBabge} />
                                  </Card>
                                );
                              })}
                              <hr />
                              <h6>Collaborators: </h6>
                              {repo.collaborators.nodes.map((col, index) => {
                                return (
                                  <Card
                                    key={index}
                                    style={{ width: "150px", padding: "5px" }}
                                  >
                                    <h6>{col.name}</h6>
                                  </Card>
                                );
                              })}
                            </Panel.Body>
                          </Panel>
                        );
                      })}
                    </PanelGroup>
                    <Button
                      onClick={() => {
                        if (pageInfo.hasNextPage) {
                          fetchMore({
                            variables: {
                              cursor: pageInfo.endCursor
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                              if (!fetchMoreResult) {
                                return prev;
                              }

                              return {
                                ...prev,
                                user: {
                                  ...prev.user,
                                  repositories: {
                                    ...prev.user.repositories,
                                    ...fetchMoreResult.user.repositories,
                                    nodes: [
                                      ...prev.user.repositories.nodes,
                                      ...fetchMoreResult.user.repositories.nodes
                                    ]
                                  }
                                }
                              };
                            }
                          });
                        }
                      }}
                    >
                      Load more
                    </Button>
                    <Button
                      onClick={() => {
                        if (pageInfo.hasPreviousPage) {
                          fetchMore({
                            variables: {
                              prev: pageInfo.startCursor
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                              return Object.assign({}, prev, {
                                user: { ...fetchMoreResult.user }
                              });
                            }
                          });
                        }
                      }}
                    >
                      Hide
                    </Button>
                  </CardBody>
                  <CardFooter chart />
                </Card>
              </GridItem>
            </GridContainer>
          );
        }}
      </Query>
    );
  }
}

Repositories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Repositories);
