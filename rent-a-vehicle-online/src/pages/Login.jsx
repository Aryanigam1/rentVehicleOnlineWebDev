import React, {useContext, useState} from "react";
import login from "../assets/all-images/Login.jpeg";
import { NavLink, useNavigate } from "react-router-dom";

// import {UserContext} from  "../routers/Routers";

const Login = () => {
    
    // const context = useContext(contextValue);

    // const {state, dispatch} = useContext(UserContext);

    const history = useNavigate();
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    
    const loginUser = async (e) =>{
        e.preventDefault();

        const res = await fetch('/login',{
            method: "POST",
            headers:{
                "Content-Type": "application/json" 
            },
            body:JSON.stringify({
                email, password
            })
        });
        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Login");
        }
        else{
            dispatch({type:"USER", payload:true});
            window.alert("Login Successful");

            history.pushState("/");
        }
    }
  return (
    <>
    <section className="signin">
        <div className="container mt-5">
            <div className="signin-content">
               <div className="signin-image">
                    <figure>
                        <img src={login} alt="login pic" />
                    </figure>
                    <NavLink to="/register" className="signup-image-link">
                        Create an Account
                    </NavLink>
                </div>
                <div className="signin-form">
                    <h2 className="form-title">Sign In</h2>
                    <form method = "POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value = {email}
                                onChange={(e)=> setEmail(e.target.value)}
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                value = {password}
                                onChange={(e)=> setPassword(e.target.value)}
                                placeholder="Your Password"
                            />
                        </div>
                        <div className="form-group form-button">
                            <input
                                type="submit"
                                name="signin"
                                id="signin"
                                className="form-submit"
                                value="Log in"
                                onClick = {loginUser}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Login
