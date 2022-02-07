import React from "react";
import "../src";
import Link from "../components/Link";
class Sidebar extends React.Component {
  clickHandler = () => {
    alert("clicked");
  };
  render() {
    const { title, data } = this.props;
    return (
      <>
        <h1>Analitic</h1>
        <p>
          {title}, {data.name}
        </p>
        <Link data={{ url: "myURL", title: "myTitle", isActive: "true" }} />
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default Sidebar;
