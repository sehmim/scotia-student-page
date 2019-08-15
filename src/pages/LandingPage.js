import React, { Component } from 'react'

import "../styles/landing-page.sass";

const BG_IMG_URL = require('../assets/landing.jpg')

export default class LandingPage extends Component {
    render() {
        return (

            <div id="home" className="landing-page">
                <div className="landing-page-img-body">
                    <img className="landing-page-img-bg" src={BG_IMG_URL}></img>
                </div>
            </div >

        )
    }
}
