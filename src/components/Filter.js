import React from "react";

class Filter extends React.Component {
    constructor(props){
      super(props);
    }

    onChangeHandler = e =>{
        this.props.onChange(e.target.id, e.target.checked);

    }

    render(){
      return(
        <aside className="filter">
            <h1 className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            <fieldset className="filter__boxes">
                
                <div className="filter__box">
                    <input onChange={this.onChangeHandler} className="filter__checkbox" type="checkbox" id="all" name="filters"></input>
                    <label className="filter__checkbox-sign" for="all"><p className="filter__checkbox-text">Все</p></label>
                </div>

                <div className="filter__box">
                    <input onChange={this.onChangeHandler} className="filter__checkbox" type="checkbox" id="withoutTransfer" name="filters"></input>
                    <label className="filter__checkbox-sign" for="withoutTransfer"><p className="filter__checkbox-text">Без пересадок</p></label>
                </div>

                <div className="filter__box">
                    <input onChange={this.onChangeHandler} className="filter__checkbox" type="checkbox" id="oneTransfer" name="filters"></input>
                    <label className="filter__checkbox-sign" for="oneTransfer"><p className="filter__checkbox-text">1 пересадка</p></label>
                </div>

                <div className="filter__box">
                    <input onChange={this.onChangeHandler} className="filter__checkbox" type="checkbox" id="twoTransfer" name="filters"></input>
                    <label className="filter__checkbox-sign" for="twoTransfer"><p className="filter__checkbox-text">2 пересадки</p></label>
                </div>

                <div className="filter__box">
                    <input onChange={this.onChangeHandler} className="filter__checkbox" type="checkbox" id="threeTransfer" name="filters"></input>
                    <label className="filter__checkbox-sign" for="threeTransfer"><p className="filter__checkbox-text">3 пересадки</p></label>
                </div>
            </fieldset>
        </aside>);
    }
  }
  
  export default Filter;