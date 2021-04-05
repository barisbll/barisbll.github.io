import React from "react";
import Homepage from "./pages/homepage.js";
import "./App.css"

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
  return (
    <div className="App">
      <Homepage />
    </div>
  );
  }

}

export default App;
