import React, {Component} from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            display: false
        }

        this.handleSlide = this.handleSlide.bind(this)
    }

    handleSlide(){
        this.setState({
            display: !this.state.display
        })
    }


    render(){
        console.log(this.state.display)
        return(
            <div>
                <div className='navbar'>
                    <h1 className='app-name'>Start Bootstrap</h1>

                    <div className='navbar-icon' onClick={this.handleSlide}>MENU &#9776;</div>
                    <div className='navbar-button-container'>
                        <button className='navbar-button'>SERVICES</button>
                        <button className='navbar-button'>PORTFOLIO</button>
                        <button className='navbar-button'>ABOUT</button>
                        <button className='navbar-button'>TEAM</button>
                        <button className='navbar-button'>CONTACT</button>
                    </div>
                    <div className={this.state.display ? 'dropdown' : 'hidden'}>
                        <button className='navbar-button'>SERVICES</button>
                        <button className='navbar-button'>PORTFOLIO</button>
                        <button className='navbar-button'>ABOUT</button>
                        <button className='navbar-button'>TEAM</button>
                        <button className='navbar-button'>CONTACT</button>
                    </div>
                </div>
            </div>
        )
    }
}
