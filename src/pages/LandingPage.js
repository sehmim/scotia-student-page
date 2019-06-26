import React, { Component } from 'react'


import "../styles/landing-page.sass";
const BG_IMG_URL = 'https://images3.alphacoders.com/122/thumb-1920-1225.jpg'
export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <img style={{ alignContent: 'center' }} className="landing-page-img" src={BG_IMG_URL} alt="img" ></img>
            </div>
        )
    }
}
