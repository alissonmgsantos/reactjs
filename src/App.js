import React, { Component } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import TimelineStore from "./logica/TimelineStore";
import { createStore } from "redux";

const timelineStore = new TimelineStore([]);

//REDUCER
function timeline(state=[],action){
  if(action.type === 'LISTAGEM'){
    return action.fotos;
  }
  return state;
} 
const store = createStore(timeline);


class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header />
          <Timeline login={this.props.params.login} store={store}/>
        </div>
      </div>
    );
  }
}

export default App;
