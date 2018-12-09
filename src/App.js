import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import HomePage from "./views/Home";

import "./App.css";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    const { REACT_APP_GITHUB_TOKEN } = process.env;

    operation.setContext(context => ({
      headers: {
        ...context.headers,
        Authorization: `Bearer ${REACT_APP_GITHUB_TOKEN}`
      }
    }));
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <HomePage />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
