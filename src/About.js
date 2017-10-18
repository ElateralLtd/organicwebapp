import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div id="about" name="about">
                <div className="container">
                    <div className="row white">
                        <h2 className="centered">Our Shop</h2>
                        <hr />
                        <div className="col-md-6"><img className="img-responsive" src="assets/img/about/about1.jpg" align="" alt="about us" /></div>
                        <div className="col-md-6">
                            <h3>Who we are</h3>
                            <p>Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos porro veniam. An everti maiorum detracto mea. Eu eos dicam voluptaria, erant bonorum albucius et per, ei sapientem accommodare est. Saepe dolorum constituam ei vel. Te sit malorum ceteros repudiandae, ne tritani adipisci vis.</p>
                            <h3>Why choose us?</h3>
                            <p>Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos porro veniam. An everti maiorum detracto mea. Eu eos dicam voluptaria, erant bonorum albucius et per, ei sapientem accommodare est. Saepe dolorum constituam ei vel.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}