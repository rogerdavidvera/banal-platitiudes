import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import styled from 'styled-components'

const Mydiv = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 background-color: papayawhip;
 height: 100vh;
`

class App extends Component{
  render(){
    return(
      <Mydiv>
      <div className="App">
        <h1> Banal Platitudes </h1>
      </div>
      </Mydiv>
    );
  }
}

export default hot(module)(App);
