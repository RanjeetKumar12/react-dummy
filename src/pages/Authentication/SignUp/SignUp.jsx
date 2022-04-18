import React from 'react'
import '../Autheticate.css'

const SignUp = () => {
  return (
    <div className="user-db-container">
        <div className="db-container">
            <div className="user-form-container">
                <h2 className="form-title">Create Account</h2>
            </div>
            <form className="signUp-form" id='form'>
                <div className="form-ctrl">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-field" placeholder="matoaShopper" id='username'/>
                    <i className="fa-solid fa-circle-check succ-ic"></i>
                    <i className="fa-solid fa-circle-exclamation err-ic"></i>
                    <span className="form-msg"></span>
                </div>
                <div className="form-ctrl" id='form'>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-field" placeholder="matoaShopper@yourmail.com" id='email'/>
                    <i className="fa-solid fa-circle-check succ-ic"></i>
                    <i className="fa-solid fa-circle-exclamation err-ic"></i>
                    <span className="form-msg"></span>
                </div>
                <div className="form-ctrl" id='form'>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-field" placeholder="password" id='password'/>
                    <i className="fa-solid fa-circle-check succ-ic"></i>
                    <i className="fa-solid fa-circle-exclamation err-ic"></i>
                    <span className="form-msg"></span>
                </div>
                <div className="form-ctrl" id='form'>
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-field" placeholder="re-enter password" id='repasswd'/>
                    <i className="fa-solid fa-circle-check succ-ic"></i>
                    <i className="fa-solid fa-circle-exclamation err-ic"></i>
                    <span className="form-msg"></span>
                </div>
                <button className="signUp-btn">Create Account</button>

                <button className="action-btn login-btn"><a href="login.html" className="login-link">Log In</a></button>

            </form>
        </div>
    </div>
  )
}

export default SignUp