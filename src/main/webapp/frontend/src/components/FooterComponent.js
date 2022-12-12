import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Free to use application, 2022 WebDevelopment DEIK Project</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;