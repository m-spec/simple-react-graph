import * as React from "react";
import { render } from "react-dom";

import { Graph } from "./Graph.tsx";
import { Point } from "./point";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: []
    };
  }

  componentDidMount() {
    this.generatePoints();
  }

  generatePoints() {
    const points: Point[] = [];
    for (let i = 0; i < 100; i++) {
      points.push({
        x: Math.floor(Math.random() * 400 - 200),
        y: Math.floor(Math.random() * 400 - 200),
        z: Math.floor(Math.random() * 10 + 5),
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }

    this.setState({
      points: points
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Graph points={this.state.points} />
        </div>
        <button onClick={() => this.generatePoints()}>random</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
