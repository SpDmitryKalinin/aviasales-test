import React from "react";
import Ticket from "./Ticket";


class Tickets extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return(
        <section className="tickets">
            <div className="tickets__tabs">
                <label className="tickets__tab" for="cheap">
                    <input className="tickets__radio" type="radio" id="cheap" value="cheap" name="choice"></input>
                    <h2 className="ticket__title">САМЫЙ ДЕШЕВЫЙ</h2>
                </label>

                <label className="tickets__tab" for="fast">
                    <input className="tickets__radio" type="radio" id="fast" value="fast" name="choice"></input>
                    <h2 className="ticket__title">САМЫЙ БЫСТРЫЙ</h2>
                </label>

                <label className="tickets__tab" for="optimal">
                    <input className="tickets__radio" type="radio" id="optimal" value="optimal" name="choice"></input>
                    <h2 className="ticket__title">ОПТИМАЛЬНЫЙ</h2>
                </label>
            </div>
            <section className="tickets__container">
                <Ticket/>
                <Ticket/>
                <Ticket/>
            </section>
            <button className="tickets__button-more">Показать еще 5 билетов!</button>
        </section>);
    }
  }
  
  export default Tickets;