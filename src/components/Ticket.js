import React from "react";
import logos7 from './../images/s7logo.svg'

class Ticket extends React.Component {
  constructor(props){
    super(props);
    this.price = this.props.info.price
    this.timeDurationDepart = this.props.info.segments[0].duration;
    this.timeDepart = this.props.info.segments[0].date.substr(12, 4);
    this.timeDurationArriv = this.props.info.segments[1].duration;
    this.timeArriv = this.props.info.segments[1].date.substr(12, 4);
    this.codeDepartFirst = this.props.info.segments[0].origin;
    this.codeDepartSecond = this.props.info.segments[0].destination;
    this.codeArrivFirst = this.props.info.segments[1].origin;
    this.codeArrivSecond = this.props.info.segments[1].destination;
    this.quantTransfDepart = this.props.info.segments[0].stops.length;
    this.quantTransfArriv = this.props.info.segments[1].stops.length;
    this.transArrayDepart = this.props.info.segments[0].stops;
    this.transArrayArriv = this.props.info.segments[1].stops;
  }

  render(){
      console.log(this.props.info);
      return(
        <div className="ticket">
            <div className="ticket__hat">
                <p className="ticket__price">{this.price} Р</p>
                <img className="ticket__logo" src={logos7} alt="Логотип компании S7 Airlines"></img>
            </div>
            <div className="ticket__info">
                <div className="ticket__times">
                    <h2 className="ticket__info-title">{this.codeDepartFirst} – {this.codeDepartSecond}</h2>
                    <p className="ticket__info-content">{this.timeDepart} – {this.infoTimes(this.timeDepart, this.timeDurationDepart)[0]+':'+this.infoTimes(this.timeDepart, this.timeDurationDepart)[1]}</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">В пути</h2>
                    <p className="ticket__info-content">{this.getTimeFromMins(this.timeDurationDepart)[0]+'ч ' + this.getTimeFromMins(this.timeDurationDepart)[1]+'м'}</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">{this.quantTransfDepart} пересадки</h2>
                    <p className="ticket__info-content">{String(this.transArrayDepart)}</p>
                </div>

                <div className="ticket__times">
                    <h2 className="ticket__info-title">{this.codeArrivFirst} – {this.codeArrivSecond}</h2>
                    <p className="ticket__info-content">{this.timeArriv} – {this.infoTimes(this.timeArriv, this.timeDurationArriv)[0]+':'+this.infoTimes(this.timeArriv, this.timeDurationArriv)[1]}</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">В пути</h2>
                    <p className="ticket__info-content">{this.getTimeFromMins(this.timeDurationArriv)[0]+'ч ' + this.getTimeFromMins(this.timeDurationArriv)[1]+'м'}</p>
                </div>

                <div className="ticket__duration">
                    <h2 className="ticket__info-title">{this.quantTransfArriv} пересадки</h2>
                    <p className="ticket__info-content">{String(this.transArrayArriv)}</p>
                </div>
            </div>
        </div>);
    }

    getTimeFromMins(mins)
    {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        if(minutes<10){
            minutes = '0'+minutes;
        }
        return [hours, minutes];
    }
    infoTimes(val, val2){
        let hours = Number(val.split(':')[0]);
        let minutes = Number(val.split(':')[1]);
        minutes = hours * 60 + minutes
        let result = minutes + val2;
        if(result >= 1440){
            result = result - 1440;
        }
        return this.getTimeFromMins(result);
    }
}

export default Ticket;