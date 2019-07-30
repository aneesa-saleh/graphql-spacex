import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import logo from './spacex.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App container">
      <img
        src={logo} alt="SpaceX"
        style={{width: "200px", margin: "30px 0" }}
      />
      <Launches />
    </div>
    </ApolloProvider>
  );
}

export default App;
