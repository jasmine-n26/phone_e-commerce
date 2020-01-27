import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import '../App.scss'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="mynav navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link>
                    <img src={logo} alt="store" className="nav-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">محصولات</Link>
                    </li>
                </ul>
                <Link to="cart" className="ml-auto">
                    <button className="bluebutton mr-2">
                        <span>
                            <i className="fas fa-cart-plus"/>
                        </span>
                          خرید های من 
                    </button>
                </Link>
            </nav>
            
        )
    }
}

