import React, { Component } from "react";
import Content from "./Content";

export class Home extends Component {
  render() {
    return (
      <div>
        <Content glasses={this.glasses} />
      </div>
    );
  }
}

export default Home;
