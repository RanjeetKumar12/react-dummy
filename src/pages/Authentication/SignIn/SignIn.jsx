import React from 'react'

import '../Autheticate.css'


const SignIn = () => {
    return (
        <div className="user-db-container">
            <div className="db-container">
                <div className="user-signUp-container">
                    <h2 className="form-title">Log in</h2>
                </div>
                <form className="signUp-form" id='form' onSubmit = {formHandler}>
                    <div className="form-ctrl">
                        <label className="form-label">Username or Email</label>
                        <input type="text" onChange = {changeHandler} className="form-field" placeholder="matoaShopper" id='username' />
                        <i className="fa-solid fa-circle-check succ-ic"></i>
                        <i className="fa-solid fa-circle-exclamation err-ic"></i>
                        <span className="form-msg"></span>
                    </div>
                    <div className="form-ctrl" id='form'>
                        <label className="form-label">Password</label>
                        <input type="password" className="form-field" placeholder="password" id='password' onChange = {changeHandler} value = {user.password}/>
                        <i className="fa-solid fa-circle-check succ-ic"></i>
                        <i className="fa-solid fa-circle-exclamation err-ic"></i>
                        <span className="form-msg"></span>
                        <button className="login-btn" id="login">Log In</button>
                    </div>

                    
                    <button className="action-btn login-btn guest-btn"><a href="signUp.html" className="login-link" onClick={guestUserHandler}>Login As Guest</a></button>
                    <button className="action-btn signUp-btn"><a href="signUp.html" className="login-link">Create New
                        Account</a></button>
                </form>
            </div>
        </div>
    )
}

export default SignIn