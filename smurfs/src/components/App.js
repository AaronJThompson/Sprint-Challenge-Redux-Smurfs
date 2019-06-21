import React, { Component } from 'react';
import SmurfList from './smurfs/SmurfList';
import SmurfForm from './smurfs/SmurfForm';
import styled from 'styled-components';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
    font-weight: normal;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Smurfs</Title>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
