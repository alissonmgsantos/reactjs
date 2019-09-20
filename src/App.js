import React from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div id="root">
      <div data-reactroot="" className="main">
        <Header />
        <Timeline></Timeline>
      </div>
    </div>
  );
}

export default App;
