import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

import Header from "../../components/Header/Header";
import Stat from "../../components/Stat/Stat";
import Overview from "../../components/Overview/Overview";
import Languages from "../../components/Langages/Languages";
import Repositories from "../../components/Repositories/Repositories";
import { GET_ALL_DATA_GIHUB } from "../../queries";

const HomePage = () => (
  <Query query={GET_ALL_DATA_GIHUB}>
    {({ loading, error, data }) => {
      if (loading) {
        return <span>WAIT</span>;
      }
      return (
        <div className="App">
          <h1>{data.user.name}</h1>
          <div className="background" />
          <div className="background2">
            <Header />
            <Stat />
            <Overview />
            <Languages />
            <Repositories />
          </div>
        </div>
      );
    }}
  </Query>
);

export default HomePage;
