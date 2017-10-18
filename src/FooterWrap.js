import React, { Component } from 'react';

export default class FooterWrap extends Component {
    render() {
        return (
            <div id="footerwrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8"> <span className="copyright">Copyright &copy; 2017</span> </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li><a href="#"><i className="fa fa-twitter"></i></a> </li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a> </li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a> </li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}