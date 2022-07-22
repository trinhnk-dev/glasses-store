import React, { Component } from "react";
import ImageLeft from "./ImageLeft";
import ImageRight from "./ImageRight";

export class Image extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <ImageLeft />
        </div>
        <div className="col-6">
          <ImageRight />
        </div>
      </div>
    );
  }
}

export default Image;
