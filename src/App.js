import React, { useState } from "react";
import Person from "./person";
import "./App.css";

// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: "Javohir", age: 22 },
//       { name: "Shaxzod", age: 20 },
//       { name: "Dilshod", age: 18 },
//     ],
//     otherState: "some other value",
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       person: [
//         { name: "John", age: "32" },
//         { name: "Doe", age: "28" },
//         { name: "Albert", age: "17" },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi,I`m a React</h1>
//       <p>lorem ipsum dolor sit amet</p>
//       <button className="btn" onClick={switchNameHandler}>
//         Click
//       </button>
//       <div className="container">
//         <Person
//           name={personState.person[0].name}
//           age={personState.person[0].age}
//         />
//         <Person
//           name={personState.person[1].name}
//           age={personState.person[1].age}
//         />
//         <Person
//           name={personState.person[2].name}
//           age={personState.person[2].age}
//         />
//       </div>
//     </div>
//   );
// };

class App extends React.Component {
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

export default App;
