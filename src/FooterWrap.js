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
                                <li><a href="https://twitter.com/NESCAFE" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a> </li>
                                <li><a href="https://www.facebook.com/NescafeUK/?brand_redir=203900255471" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook" rel="nofollow" target="_blank"></i></a> </li>
                                <li><a href="https://plus.google.com/113558151418056090970" rel="noopener noreferrer" target="_blank"><i className="fa fa-google-plus" rel="nofollow" target="_blank"></i></a> </li>
                                <li><a href="https://www.linkedin.com/company/nestle-s-a-" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" rel="nofollow" target="_blank"></i></a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}