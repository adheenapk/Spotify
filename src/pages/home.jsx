import React from 'react'
import './home.css'
import spot from '../assets/spot.png'

const Home = () => {
    return (
        <>
            <nav className="navbar">
                <div className="image">
                    <img src={spot}></img></div>
                <div className="rightside">
                    <ul>
                        <li>Premium</li>
                        <li>Help</li>
                        <li>Download</li>
                        <li>|</li>
                        <li>Sign in</li>
                        <li>Log In</li>
                    </ul>
                </div>
            </nav>
            <div className="container1">

                <div className="circle1">
                    <div className="music">Music for everyone.</div>
                    <div className="mill">Millions of songs.No credit card needed.</div>
                    <div className="sub"><input type="submit" value="GET SPOTIFY FREE"></input></div>
                </div>

                <div className="circle2">

                </div>
                <div className="circle3">

                </div>
                <div class="circle4">
                </div>
            </div>
        </>
    )
}

export default Home