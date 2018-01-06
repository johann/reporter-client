import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    labs: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/labs")
      .then(res => res.json())
      .then(json => {
        this.setState({
          labs: json
        });
      });
  }
  render() {
    const items = this.state.labs.map(lab => <li key={lab.id}>{lab.title}</li>);
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default App;
