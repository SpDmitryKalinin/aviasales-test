import React from "react";
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="page">
        <Header/>
        <Main/>
      </div>);
  }
}

export default App;
