import React from 'react';

class Header extends React.Component{
    render() {
        return(
            <header>
                <div className="header-title">
                    Herolo Weather task
                </div>
                <div className="nav">
                    <a href="#">Home</a>
                    <a href="#">Favorites</a>
                </div>
            </header>
        );
    }
}
export default Header;
