import React from "react";
import Filter from './Filter';
import Tickets from "./Tickets";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTickets: [],
      filter: {
        all: false,
        withoutTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false,
      },
      prevFilter: {},
      faster: false,
      cheaper: false,
      optimal: false
    }
  }

  //Функцию слушателя чекбоксов
  onChange(name, value, param){
    this.setState({filter:{[name]: value}});
    this.collectCurrentTickets(value, Number(param));
  }

  //Функция фильтра для количества пересадок
  filterTickets(data, param){
    let result = data.filter(item =>{
      let tmp = 0;
      if(item.segments[0].stops.length <= param && item.segments[1].stops.length <= param){
        tmp = item.segments[0].stops.length + item.segments[1].stops.length;
        if(tmp === param){
          return item;
        }
      }
    })
    return result;
  }

  updateState(data){
    this.setState({
      currentTickets: data,
      prevFilter: this.state.filter
    });
  }

  collectCurrentTickets(condition, param){
    if(JSON.stringify(this.state.prevFilter)===JSON.stringify(this.state.filter)){
      return
    }
    if(condition === true && param === 9){
      let all = Array.from(this.props.dataTickets);
      all = all.concat(this.state.currentTickets);
      this.updateState(all);
      return
    }

    if(condition === false && param === 9){
      let arr = this.state.currentTickets;
      let len = this.props.dataTicketsLength;
      let result = arr.filter(function(item, i){
        if(i >= len){
          return item
        }
      })
      this.updateState(result);
      return
    }

    if(condition === true){
      let collectTickets = this.state.currentTickets.concat(this.filterTickets(this.props.dataTickets, param));
      this.updateState(collectTickets);
    }
    if(condition === false){
      let deleteArray = this.filterTickets(this.state.currentTickets, param)
      let result = this.state.currentTickets.filter(item => !deleteArray.includes(item));
      this.updateState(result);
    }
  }

  render(){
    return(
      <main className="main">
          <Filter onChange = {this.onChange.bind(this)}/>
          <Tickets currentTickets = {this.state.currentTickets}/>
      </main>);
  }
}

export default Main;