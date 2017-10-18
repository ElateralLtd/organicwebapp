import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div id="navbar-main"> 
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="pull-left logo">
                                <a className="" href="#home"><img src="assets/img/logo.png" alt="Coffee Shop Logo" /></a>
                            </div>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav pull-right">
                                <li><a href="#home-section" className="smoothScroll">Welcome</a></li>
                                <li><a href="#services" className="smoothScroll">We Offer</a></li>
                                <li><a href="#about" className="smoothScroll"> Our Shop</a></li>
                                <li><a href="#portfolio" className="smoothScroll"> Special</a></li>
                                <li><a href="#team" className="smoothScroll"> Chef Team</a></li>
                                <li><a href="#contact" className="smoothScroll"> Get In Touch</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}