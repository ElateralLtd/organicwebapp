import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        return (
            <div id="services" name="services">
                <div className="container">
                    <div className="row">
                        <h2 className="centered">WHAT WE OFFER</h2>
                        <hr />
                        <div className="col-lg-8 col-lg-offset-2">
                            <p className="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                        <div className="col-lg-4 callout"> <i className="fa fa-cubes fa-3x"></i>
                            <h3>COFFEE</h3>
                            <p>Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu vim oratio conclusionemque, vel at errem nominavi delicatissimi.</p>
                        </div>
                        <div className="col-lg-4 callout"> <i className="fa fa-flask fa-3x"></i>
                            <h3>TEA</h3>
                            <p>Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu vim oratio conclusionemque, vel at errem nominavi delicatissimi.</p>
                        </div>
                        <div className="col-lg-4 callout"> <i className="fa fa-life-ring fa-3x"></i>
                            <h3>CAKES</h3>
                            <p>Erat imperdiet dissentias ea usu, alia aliquid corrumpit ea qui. Eu vim oratio conclusionemque, vel at errem nominavi delicatissimi.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}