import React from "react";
import Filter from './Filter';
import Tickets from "./Tickets";

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <main className="main">
          <Filter/>
          <Tickets/>
      </main>);
  }
}

export default Main;