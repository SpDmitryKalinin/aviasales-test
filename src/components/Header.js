import React from 'react';
import logo from './../images/logo.svg'

function Header(){
    return(
        <div className="header">
            <img src={logo} className="header__logo" alt="Логотип"/>
        </div>
    );
}

export default Header;