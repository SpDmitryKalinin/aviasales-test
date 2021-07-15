import React from "react";

class Filter extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return(
        <aside className="filter">
            <h1 className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            <fieldset className="filter__boxes">
                
                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="all" name="filters" value="all"></input>
                    <label className="filter__checkbox-sign" for="all"><p className="filter__checkbox-text">Все</p></label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="notrans" name="filters" value="notrans"></input>
                    <label className="filter__checkbox-sign" for="notrans"><p className="filter__checkbox-text">Без пересадок</p></label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="onetrans" name="filters" value="onetrans"></input>
                    <label className="filter__checkbox-sign" for="onetrans"><p className="filter__checkbox-text">1 пересадка</p></label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="twotrans" name="filters" value="twotrans"></input>
                    <label className="filter__checkbox-sign" for="twotrans"><p className="filter__checkbox-text">2 пересадки</p></label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="threetrans" name="filters" value="threetrans"></input>
                    <label className="filter__checkbox-sign" for="threetrans"><p className="filter__checkbox-text">3 пересадки</p></label>
                </div>
            </fieldset>
        </aside>);
    }
  }
  
  export default Filter;