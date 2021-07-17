import React from "react";
import Header from './Header';
import Main from './Main';
import api from './../utils/Api';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataTickets: [],
      done: false
    }
  }

  componentDidMount(){
    this.datainit();
  }

  render(){
    return(
      <div className="page">
        <Header/>
        <Main dataTickets = {this.state.dataTickets}/>
      </div>);
  }

  datainit(){
    this.initSearchId();
  }

  initSearchId(){
    api.getSearchId().then(res =>{
      this.collectData(res.searchId);
    }); 
  }

  collectData(id){
    api.getTicketsData(id).then(res => {
      let collectTickets = this.state.dataTickets;
      let fullTickets = collectTickets.concat(res.tickets);
      this.setState({dataTickets: fullTickets});
      if(res.stop){
        this.setState({done: true});
        return
      }
      this.collectData(id);
    })
    .catch(res =>{
      console.log(res);
      this.collectData(id);
    })
  }

  show(){
    console.log(this.state.dataTickets); //Продолжить код
  }
}

export default App;
