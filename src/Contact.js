import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" name="contact">
                <div className="container">
                    <div className="row">
                        <h2 className="centered">Get In Touch</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <strong>Please give us your feedback!</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                            <form id="contact" method="post" className="form">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea className="form-control" id="message" name="message" placeholder="Message" rows="5"></textarea>
                                        <button className="btn btn-lg pull-left" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <i className="fa fa-map-marker fa-2x"></i>
                            <strong>Coffee Shop</strong>
                            <p>123 West Street<br />
                                Farnham, GU12 3AB</p>
                            <br />
                            <i className="fa fa-envelope-o fa-2x"></i>
                            <p>info@farnhamcoffeeshop.co</p>
                            <br />
                            <i className="fa fa-phone fa-2x"></i>
                            <p> +44 12345 678 901</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}