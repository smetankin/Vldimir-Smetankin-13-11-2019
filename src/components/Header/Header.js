import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";

function Header(){
        return(
            <header className={"header"}>
                <div className="header-title">
                    Herolo Weather task
                </div>
                <div className="nav">

                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>

                </div>
            </header>
        );
}
export default Header;
