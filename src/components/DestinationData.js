import { Component } from "react";
import mountain1 from "../assets/des-01.jpg";
import mountain2 from "../assets/des-02.jpg";
import mountain3 from "../assets/des-03.jpg";
import mountain4 from "../assets/des-04.jpg";
import "./Destination.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
