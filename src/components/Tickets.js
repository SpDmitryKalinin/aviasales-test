import React from "react";
import Ticket from "./Ticket";


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
        let arr = this.props.currentTickets.slice();
        arr.length = this.state.quantTickets;
        if(arr[0]!==undefined){
            if(this.state.viewTickets.length === 0 || !this.diff(arr, this.state.prevViewTickets)){
                this.setState({
                    viewTickets: arr,
                    prevViewTickets: this.state.viewTickets
                })
            }
        }
    }

    //Проверка на идентичность массивов

    diff(arr1, arr2) {
        if(arr1.length !== arr2.length){
            return false
        }
        for(let i=0; i<arr1.length; i++){
            if(arr1[i]!==arr2[i]){
                return false
            }
        }
        return true
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
                {
                    this.state.viewTickets.map((item => {
                        return <Ticket info ={item}/>
                    }))
                }
            </section>
            <button className="tickets__button-more">Показать еще 5 билетов!</button>
        </section>);
    }
  }
  
  export default Tickets;