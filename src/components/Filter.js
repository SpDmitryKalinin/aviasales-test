import React from "react";

class Filter extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return(
        <aside className="filter">
            <h2 className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
            <fieldset className="filter__boxes">
                
                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="all" name="filters" value="all"></input>
                    <label className="filter__checkbox-sign" for="all">Все</label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="notrans" name="filters" value="notrans"></input>
                    <label className="filter__checkbox-sign" for="notrans">Без пересадок</label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="onetrans" name="filters" value="onetrans"></input>
                    <label className="filter__checkbox-sign" for="onetrans">1 пересадка</label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="twotrans" name="filters" value="twotrans"></input>
                    <label className="filter__checkbox-sign" for="twotrans">2 пересадки</label>
                </div>

                <div className="filter__box">
                    <input className="filter__checkbox" type="checkbox" id="threetrans" name="filters" value="threetrans"></input>
                    <label className="filter__checkbox-sign" for="threetrans">3 пересадки</label>
                </div>
            </fieldset>
        </aside>);
    }
  }
  
  export default Filter;