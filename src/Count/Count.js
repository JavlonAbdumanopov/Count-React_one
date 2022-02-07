import React from "react";
import "./Count.css";

class Count extends React.Component {
  state = {
    count: 0,
  };

  onClickCountPlus = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
    this.style.top = "15px";
  };
  onClickCountMin = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  onClickCountReset = () => {
    this.setState((state) => ({
      count: 0,
    }));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="box">
            <div className="box_title">
              <h1>{this.state.count}</h1>
            </div>
            <div className="box_count">
              <button
                onClick={this.onClickCountPlus}
                className="box_count_plus"
              >
                <p>+</p>
              </button>
              <button onClick={this.onClickCountMin} className="box_count_min">
                <p>-</p>
              </button>
              <button
                onClick={this.onClickCountReset}
                className="box_count_reset"
              >
                <p>Reset</p>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Count;
