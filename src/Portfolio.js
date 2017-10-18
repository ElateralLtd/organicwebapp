import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" name="portfolio">
                <div className="container">
                    <div className="row">
                        <h2 className="centered">What Special</h2>
                        <hr />
                        <div className="col-lg-8 col-lg-offset-2 centered">
                            <p className="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="grid overlay">
                                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio01.jpg" alt="" />
                                        <figcaption>
                                            <h5>Coco Cake</h5>
                                            <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 className="modal-title">Rose Cake</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p><img className="img-responsive" src="assets/img/portfolio/folio01-preview.jpg" alt="" /></p>
                                            <p>Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos porro veniam. An everti maiorum detracto mea. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="grid overlay">
                                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio02.jpg" alt="" />
                                        <figcaption>
                                            <h5>Green Tea</h5>
                                            <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="grid overlay">
                                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio03.jpg" alt="" />
                                        <figcaption>
                                            <h5>Cappuccino</h5>
                                            <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="grid overlay">
                                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio04.jpg" alt="" />
                                        <figcaption>
                                            <h5>Green Tea</h5>
                                            <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="grid overlay">
                                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio05.jpg" alt="" />
                                        <figcaption>
                                            <h5>Cookies</h5>
                                            <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="grid overlay">
                                    <figure> <img className="img-responsive" src="assets/img/portfolio/folio06.jpg" alt="" />
                                        <figcaption>
                                            <h5>Cake</h5>
                                            <a data-toggle="modal" href="#myModal" className="btn btn-default">More Details</a> </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}