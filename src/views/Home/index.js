import React from "react";
import { Query } from "react-apollo";
import Header from "../../components/Header/Header";
import Stat from "../../components/Stat/Stat";
import Overview from "../../components/Overview/Overview";
import Languages from "../../components/Langages/Languages";
import Repositories from "../../components/Repositories/Repositories";
import { GET_ALL_DATA_GIHUB } from "../../queries";
import Loader from "components/Loader/Loader";

const HomePage = () => {
  const variables = {
    login: "M-benjamin",
    totalRepos: 35
  };

  return (
    <Query
      query={GET_ALL_DATA_GIHUB}
      fetchPolicy="cache-and-network"
      variables={variables}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div className="load">
              <Loader />
            </div>
          );
        }
        return (
          <div className="App">
            <div className="background" />
            <div className="background2">
              <Header name={data.user.name} avatar={data.user.avatarUrl} />
              <Stat data={data.user} />
              <Overview data={data.user.repositories} />
              <Languages languages={data.user.repositories} />
              <Repositories />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default HomePage;
