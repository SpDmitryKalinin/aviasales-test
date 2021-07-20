import React from "react";
import Ticket from "./Ticket";
import {diffArrays} from "../utils/utils";


class Tickets extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          quantTickets: 5,
          viewTickets: [],
          prevViewTickets: []
        }
    }

    componentDidUpdate(){
        let copyCurrentTickets = this.props.currentTickets.slice();
        copyCurrentTickets.length = this.state.quantTickets;
        //Проверка на заполненность стейта currentTickets
        if(copyCurrentTickets[0]!==undefined){
            if(this.state.viewTickets.length === 0 || !diffArrays(copyCurrentTickets, this.state.prevViewTickets)){
                this.setState({
                    viewTickets: copyCurrentTickets,
                    prevViewTickets: this.state.viewTickets
                })
            }
        }
    }

    //Функция обновления стейта для показа большего количества билетов
    _moreViewTickets(){
        this.setState({
            quantTickets: this.state.quantTickets + 5
        })
    }

    render(){
      return(
        <section className="tickets">
            <div className="tickets__tabs">
                <input onChange={(e) => this.props.onChange(e.target.id)} className="tickets__radio" type="radio" id="cheap" value="cheap" name="choice" defaultChecked ></input>
                <label className="tickets__tab" for="cheap">
                    <h2 className="ticket__title">САМЫЙ ДЕШЕВЫЙ</h2>
                </label>


                <input onChange={(e) => this.props.onChange(e.target.id)} className="tickets__radio" type="radio" id="fast" value="fast" name="choice"></input>
                <label className="tickets__tab" for="fast">
                    <h2 className="ticket__title">САМЫЙ БЫСТРЫЙ</h2>
                </label>

                <input onChange={(e) => this.props.onChange(e.target.id)} className="tickets__radio" type="radio" id="optimal" value="optimal" name="choice"></input>
                <label className="tickets__tab" for="optimal">
                    <h2 className="ticket__title">ОПТИМАЛЬНЫЙ</h2>
                </label>
            </div>
            <section className="tickets__container">
                {
                    //Заполнение контейнера массивом билетов для отображения
                    this.state.viewTickets.map((item) => {
                        return <Ticket info ={item} key={item.carrier + item.price}/>
                    })
                }
            </section>
            <button className="tickets__button-more" onClick={this._moreViewTickets.bind(this)}>Показать еще 5 билетов!</button>
        </section>);
    }
  }
  
  export default Tickets;