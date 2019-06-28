import React, { Component } from 'react'

import "../styles/landing-page.sass";


const BG_IMG_URL = 'https://s9.postimg.cc/73mqt4lq7/image.gif'
export default class LandingPage extends Component {
    render() {
        return (
            <div id="home" className="landing-page">
                <img style={{ alignContent: 'center' }} className="landing-page-img" src={BG_IMG_URL} alt="img" ></img>
            </div>
        )
    }
}
