import React, {Component} from 'react';
import './App.css';
import './components/reset.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Tell from './components/Tell'

export default class App extends Component {
    constructor(){
        super()

        this.state = {}
    }



    render(){
        return(
            <div>
                <Navbar/>
                <Welcome />
                <Greet/>
                <Tell/>
            </div>
        )
    }
}

