import React from "react";


class NavBar extends React.Component{
    render = () => {
        return (
            <nav className="navbar navbar-light bg-light">
              <span className="navbar-brand mb-0 h1">Navbar</span>
              <span className="badge m-2 bg-danger">{this.props.counters.length}</span>
            </nav>
        );
    }
}

export default NavBar;