import React, { Component } from 'react';

export default class HeaderWrap extends Component {
    render() {
        return (
            <div id="home-section">
                <div id="headerwrap" name="home">
                    <header className="clearfix tb">
                        <div className="tb-cell text-center">
                            <i class="fa fa-heart-o icon"></i>
                            <h1>Coffee - Makes you Love</h1>
                            <p>A Lot Can Happen Over Coffee, Its Awesome!!! </p>
                            <a href="#portfolio" className="smoothScroll btn btn-lg">Today's Special</a>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}