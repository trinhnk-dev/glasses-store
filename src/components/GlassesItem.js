import React, { Component } from "react";
import g1 from "../assets/glassesImage/g1.jpg";
import g2 from "../assets/glassesImage/g2.jpg";
import g3 from "../assets/glassesImage/g3.jpg";
import g4 from "../assets/glassesImage/g4.jpg";
import g5 from "../assets/glassesImage/g5.jpg";
import g6 from "../assets/glassesImage/g6.jpg";
import g7 from "../assets/glassesImage/g7.jpg";
import g8 from "../assets/glassesImage/g8.jpg";
import g9 from "../assets/glassesImage/g9.jpg";
import "./glassesitem.css";

export class GlassesItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2 img-item">
          <img src={g1} />
        </div>
        <div className="col-2 img-item">
          <img src={g2} />
        </div>
        <div className="col-2 img-item">
          <img style={{ marginTop: 40 }} src={g3} />
        </div>
        <div className="col-2 img-item">
          <img style={{ marginTop: 40 }} src={g4} />
        </div>
        <div className="col-2 img-item">
          <img style={{ marginTop: 25 }} src={g5} />
        </div>
        <div className="col-2 img-item">
          <img style={{ marginTop: 25 }} src={g6} />
        </div>
        <div className="col-2 img-item">
          <img src={g7} />
        </div>
        <div className="col-2 img-item">
          <img style={{ marginTop: 25 }} src={g8} />
        </div>
        <div className="col-2 img-item">
          <img style={{ marginTop: 25 }} src={g9} />
        </div>
      </div>
    );
  }
}

export default GlassesItem;
