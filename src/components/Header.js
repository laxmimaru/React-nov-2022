import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            org:'edureka',
            keyword:'react'
        }

    }

    render() {
        console.log('org = ', this.state.org);
        return <div>
            <header >
                <center>
                    <h1>Edureka Developers hub</h1>
                    <h2 >Welcome to React training from {this.state.org}</h2>
                    <input /> <br/>
                    <span className='logo'>user input</span>
                    <hr />
                </center>
            </header>
        </div>

    }
}


/*const Header=()=>{

    return <div>
        <center>
            <h2>Edureka Developers hub</h2>
            <hr/>
        </center>
    </div>
}*/

export default Header;