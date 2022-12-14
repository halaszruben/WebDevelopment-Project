import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://github.com/halaszruben/WebDevelopment-Project" className="navbar-brand">Github Repo</a>
                            <a href='http://localhost:3000/' style={{ marginLeft: "10px", marginRight: "10px" }}>Home</a>
                            <a href='http://localhost:3000/add-book' style={{ marginLeft: "10px", marginRight: "10px" }}>Add Books</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;