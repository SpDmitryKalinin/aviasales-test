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
    this.initSearchId();
  }

  //Получение searhId
  initSearchId(){
    api.getSearchId().then(res =>{
      this.collectData(res.searchId);
    })
    .catch(res =>{
      console.log(`Ошибка: ${res}`)
    }) 
  }

  //Получение посылок билетов и формирование одного массива из всех посылок
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
      //Обработка ошибок
      if(res === 500){
        console.log(`Ошибка: ${res}`)
        this.collectData(id);
      }
      if(res === 404){
        this.setState({dataTickets: []});
        console.log(`Ошибка: ${res}`)
        this.initSearchId();
      }
    })
  }

  render(){
    return(
      <div className="page">
        <Header/>
        <Main dataTickets = {this.state.dataTickets} dataTicketsLength ={this.state.dataTickets.length} loadingDone ={this.state.done}/>
      </div>);
  }


}

export default App;
