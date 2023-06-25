import React from 'react'
import './login.css'

const login = () => {
    return (
        <>
            <div className="container">
                <div className="log">
                    <div className="heading">
                        Login
                    </div>
                    <div className="details">
                        <label for="mail">E-mail</label>
                        <input type="email" id="mail" className="id" placeholder="      Enter email" required></input>
                        <label for="pass">Password </label>
                        <input type="password" id="pass" className="id" placeholder="       Enter password" required></input>
                    </div>
                    <div className="check">
                        <input type="checkbox" id="checkbox"></input>
                        <label for="checkbox">Show Password</label>
                    </div>
                    <div className="btn">
                        <input type="submit" value="SIGN IN"></input>
                    </div>
                    <div className="for">
                        Forgot <a href="#">Username</a> / <a href="#"> Password</a> ?
                        <div className="dont">Don't have an account? <a href="#"> Sign up</a> </div>
                    </div>
                </div>
            </div>

</>
    )
}

export default login