import React from "react";
import logos7 from './../images/s7logo.svg'

class Ticket extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className="ticket">
            <div className="ticket__hat">
                <p className="ticket__price">13 400 Р</p>
                <img className="ticket__logo" src={logos7} alt="Логотип компании S7 Airlines"></img>
            </div>
            <div className="ticket__info">
                <div className="ticket__times">
                    <h2 className="ticket__info-title">MOW – HKT</h2>
                    <p className="ticket__info-content">10:45 – 08:00</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">В пути</h2>
                    <p className="ticket__info-content">21ч 15м</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">2 пересадки</h2>
                    <p className="ticket__info-content">HKG, JNB</p>
                </div>

                <div className="ticket__times">
                    <h2 className="ticket__info-title">MOW – HKT</h2>
                    <p className="ticket__info-content">10:45 – 08:00</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">В пути</h2>
                    <p className="ticket__info-content">21ч 15м</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">2 пересадки</h2>
                    <p className="ticket__info-content">HKG, JNB</p>
                </div>
            </div>
        </div>);
  }
}

export default Ticket;