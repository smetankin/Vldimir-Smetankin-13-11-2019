import React from 'react';
import "./header.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends React.Component{
    render() {
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
}
export default Header;
