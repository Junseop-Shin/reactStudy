import React, { Component } from "react";
import ScrollBox from "./ScrollBox";
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
// const App = () => {
// return <EventPractice />;
// return <Say />;
// return <Counter />;
// return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
// };

export default App;
