import React, { Component } from 'react';

export default class Team extends Component {
    render() {
        return (
            <div id="team" name="team">
                <div className="container">
                    <div className="row centered">
                        <h2 className="centered">Meet Our Chef</h2>
                        <hr />
                        <div className="col-lg-8 col-lg-offset-2 centered">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                            <br />
                        </div>
                        <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team01.jpg" height="120px" width="120px" alt="" />
                            <h4><strong>Susan</strong></h4>
                            <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                            <a href="#twitter"><i className="fa fa-twitter"></i></a> <a href="#facebook"><i className="fa fa-facebook"></i></a> <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team02.jpg" height="120px" width="120px" alt="" />
                            <h4><b>Treena</b></h4>
                            <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                            <a href="#twitter"><i className="fa fa-twitter"></i></a> <a href="#facebook"><i className="fa fa-facebook"></i></a> <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team03.jpg" height="120px" width="120px" alt="" />
                            <h4><b>George</b></h4>
                            <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                            <a href="#twitter"><i className="fa fa-twitter"></i></a> <a href="#facebook"><i className="fa fa-facebook"></i></a> <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <div className="col-lg-3 centered"> <img className="img img-circle" src="assets/img/team/team04.jpg" height="120px" width="120px" alt="" />
                            <h4><b>Natasha</b></h4>
                            <p>Consectetuer eu nam. Saepe legendos vulputate eu quo, id mea comprehensam signifer.</p>
                            <a href="#twitter"><i className="fa fa-twitter"></i></a> <a href="#facebook"><i className="fa fa-facebook"></i></a> <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}