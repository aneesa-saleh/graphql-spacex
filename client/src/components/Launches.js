import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const renderLaunches = ({ loading, error, data }) => {
  if (loading) {
    return <h4>Loading...</h4>;
  } else if (error) {
    console.error(error);
    return <h4 style={{ color: "red" }}>An error occurred.</h4>;
  } else {
    return (
      <Fragment>
        {data.launches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </Fragment>
    );
  }
};

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {renderLaunches}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
