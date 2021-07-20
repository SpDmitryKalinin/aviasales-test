import React from "react";
import logos7 from './../images/s7logo.svg'
import {getTimeFromMins, infoTimes} from '../utils/utils.js'

class Ticket extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div className="ticket">
          <div className="ticket__hat">
              <p className="ticket__price">{this.props.info.price} Р</p>
              <img className="ticket__logo" src={logos7} alt="Логотип компании S7 Airlines"></img>
          </div>
          <div className="ticket__info">
            <div className="ticket__times">
              <h2 className="ticket__info-title">{this.props.info.segments[0].origin} – {this.props.info.segments[0].destination}</h2>
              <p className="ticket__info-content">{this.props.info.segments[0].date.substr(12, 4)} – {infoTimes(this.props.info.segments[0].date.substr(12, 4), this.props.info.segments[0].duration)[0]+':'+ infoTimes(this.props.info.segments[0].date.substr(12, 4), this.props.info.segments[0].duration)[1]}</p>
            </div>

            <div className="ticket__duration">
              <h2 className="ticket__info-title">В пути</h2>
              <p className="ticket__info-content">{getTimeFromMins(this.props.info.segments[0].duration)[0]+'ч ' + getTimeFromMins(this.props.info.segments[0].duration)[1]+'м'}</p>
            </div>

            <div className="ticket__duration">
              <h2 className="ticket__info-title">{this.props.info.segments[0].stops.length} пересадки</h2>
              <p className="ticket__info-content">{String(this.props.info.segments[0].stops)}</p>
            </div>

            <div className="ticket__times">
              <h2 className="ticket__info-title">{this.props.info.segments[1].origin} – {this.props.info.segments[1].destination}</h2>
              <p className="ticket__info-content">{this.props.info.segments[1].date.substr(12, 4)} – {infoTimes(this.props.info.segments[1].date.substr(12, 4), this.props.info.segments[1].duration)[0]+':'+ infoTimes(this.props.info.segments[1].date.substr(12, 4), this.props.info.segments[1].duration)[1]}</p>
            </div>

            <div className="ticket__duration">
              <h2 className="ticket__info-title">В пути</h2>
              <p className="ticket__info-content">{getTimeFromMins(this.props.info.segments[1].duration)[0]+'ч ' + getTimeFromMins(this.props.info.segments[1].duration)[1]+'м'}</p>
            </div>

            <div className="ticket__duration">
              <h2 className="ticket__info-title">{this.props.info.segments[1].stops.length} пересадки</h2>
              <p className="ticket__info-content">{String(this.props.info.segments[1].stops)}</p>
            </div>
          </div>
      </div>);
    }
}

export default Ticket;