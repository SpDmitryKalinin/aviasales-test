import React from "react";
import Filter from './Filter';
import Tickets from "./Tickets";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTickets: [],
      filter: {
        all: true,
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

  onChange(name, value){
    this.setState({filter:{[name]: value}});
  }

  componentDidUpdate(){
    console.log(this.state.prevFilter)
    if(this.state.filter.withoutTransfer){
      this.collectCurrentTickets(true, 0);
    }
    if(this.state.filter.oneTransfer){
      this.collectCurrentTickets(true, 1);
    }
    if(this.state.filter.twoTransfer){
      this.collectCurrentTickets(true, 2);
    }
    if(this.state.filter.threeTransfer){
      this.collectCurrentTickets(true, 3)
    }
    if(!this.state.filter.withoutTransfer){
      this.collectCurrentTickets(false, 0);
    }
    if(!this.state.filter.oneTransfer){
      this.collectCurrentTickets(false, 1);
    }
    if(!this.state.filter.twoTransfer){
      this.collectCurrentTickets(false, 2);
    }
    if(!this.state.filter.threeTransfer){
      this.collectCurrentTickets(false, 3)
    }
  }

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

  collectCurrentTickets(condition, param){
    if(JSON.stringify(this.state.prevFilter)===JSON.stringify(this.state.filter)){
      return
    }
    if(condition === true){
      let collectTickets = this.state.currentTickets.concat(this.filterTickets(this.props.dataTickets, param));
      this.setState({
        currentTickets: collectTickets,
        prevFilter: this.state.filter
      });
    }
    if(condition === false){
      console.log(this.filterTickets(this.state.currentTickets, param));
      //Продолжить код фильтра исключения билетов из. Удаление элементов одного массива из другого
    }
  }

  render(){
    console.log(this.state.currentTickets);
    return(
      <main className="main">
          <Filter onChange = {this.onChange.bind(this)}/>
          <Tickets/>
      </main>);
  }
}

export default Main;