import React from "react";
import Filter from './Filter';
import Tickets from "./Tickets";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      preload: false,
      currentTickets: [],
      sortTicket: [],
      filter: {
        all: false,
        withoutTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false,
      },
      prevFilter: {},
      topFilter: 'cheap'
    }
  }

  //Функция слушателя чекбоксов
  onChange(name, value, param){
    this.setState({filter:{[name]: value}});
    this._collectCurrentTickets(value, Number(param));
  }

  //Первоначальная загрузка билетов
  componentDidUpdate(){
    if(this.props.dataTickets.length !== 0 && this.state.preload === false && this.props.loadingDone){
      this.setState({
        currentTickets: this.props.dataTickets,
        preload: true
      }, () => this.sortTickets(this.state.topFilter))
    }
  }
  
  //Функция фильтра для количества пересадок
  _filterTickets(data, param){
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

  //Функция обновления стейта для билетов проходящих сортировку по количеству пересадок,
  //В колбеке вызов функции сортировки по дешевизне, цене и оптимальности

  _updateState(data){
    this.setState({
      currentTickets: data,
      prevFilter: this.state.filter
    }, () => this.sortTickets(this.state.topFilter));
  }

  //Функция для определения какие параметры установлены в фильтре и последующий вызов функции обновления стейта
  _collectCurrentTickets(condition, param){
    //Обработка для прерывания бесконечного цикла
    if(JSON.stringify(this.state.prevFilter)===JSON.stringify(this.state.filter)){
      return
    }
    //Обработка чекбокса "Все"
    if(condition === true && param === 9){
      let allTickets = Array.from(this.props.dataTickets);
      allTickets = allTickets.concat(this.state.currentTickets);
      this._updateState(allTickets);
      return
    }
    if(condition === false && param === 9){
      let currentTicketsLength = this.props.dataTicketsLength;
      let result = this.state.currentTickets.filter(function(item, i){
        if(i >= currentTicketsLength){
          return item
        }
      })
      this._updateState(result);
      return
    }
    //Обработка всех остальных чекбоксов
    if(condition === true){
      let collectTickets = this.state.currentTickets.concat(this._filterTickets(this.props.dataTickets, param));
      this._updateState(collectTickets);
    }
    if(condition === false){
      let deleteArray = this._filterTickets(this.state.currentTickets, param)
      let result = this.state.currentTickets.filter(item => !deleteArray.includes(item));
      this._updateState(result);
    }
  }

  //Функция обработки фильтра сверху
  sortTickets = (param) =>{
    let currentTicketsCopy = this.state.currentTickets.slice();
    switch(param){
      case 'cheap':    
      currentTicketsCopy.sort((prev, next) => prev.price - next.price);
        this.setState({
            sortTicket: currentTicketsCopy,
            topFilter: 'cheap'
        })
        break;
      case 'fast':
        currentTicketsCopy.sort((prev, next) => (prev.segments[0].duration + prev.segments[1].duration)  - (next.segments[0].duration + next.segments[1].duration));
        this.setState({
            sortTicket: currentTicketsCopy,
            topFilter: 'fast'
        })
        break;
      case 'optimal':
        currentTicketsCopy.sort((prev, next) => (prev.segments[0].stops.length + prev.segments[1].stops.length)  - (next.segments[0].stops.length + next.segments[1].stops.length));
        this.setState({
          sortTicket: currentTicketsCopy,
          topFilter: 'optimal'
        })
        break;
    }
  }

  render(){
    return(
      <main className="main">
          <Filter onChange = {this.onChange.bind(this)}/>
          <Tickets onChange ={this.sortTickets.bind(this)} currentTickets = {this.state.sortTicket}/>
      </main>);
  }
}

export default Main;