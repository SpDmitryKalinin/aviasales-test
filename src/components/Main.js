import React from "react";
import Filter from './Filter';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <main className="main">
          <Filter/>
      </main>);
  }
}

export default Main;