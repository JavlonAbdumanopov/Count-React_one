import React from "react";
class person extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div className="box">
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
      </div>
    );
  }
}

export default person;
