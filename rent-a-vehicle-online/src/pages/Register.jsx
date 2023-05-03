import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import register from "../assets/all-images/Register.jpeg";

const Register = () => {
    
    const history = useNavigate();
    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    });

    let name, value;
    const handleInputs = (e) =>{
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    } 

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, phone,work, password, cpassword} = user;

        const res = await fetch("/register", {
            method:"POST",
            headers:{
                "Content-Type": "application/json" 
            },
            body:JSON.stringify({
                name, email, phone,work, password, cpassword
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration Successful");
            console.log("Registration Successful");

            history.pushState("/login");
        }
    }
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="off"
                                        value = {user.name}
                                        onChange = {handleInputs}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="off"
                                        value = {user.email}
                                        onChange = {handleInputs}
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        autoComplete="off"
                                        value = {user.phone}
                                        onChange = {handleInputs}
                                        placeholder="Your Phone"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="work"
                                        id="work"
                                        autoComplete="off"
                                        value = {user.work}
                                        onChange = {handleInputs}
                                        placeholder="Your Profession"
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
                                        value = {user.password}
                                        onChange = {handleInputs}
                                        placeholder="Your Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        id="cpassword"
                                        autoComplete="off"
                                        value = {user.cpassword}
                                        onChange = {handleInputs}
                                        placeholder="Confirm Your Password"
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input
                                        type="submit"
                                        name="signup"
                                        id="signup"
                                        className="form-submit"
                                        value="Register"
                                        onClick={PostData}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={register} alt="registration pic" />
                            </figure>
                            <NavLink to="/login" className="signup-image-link">
                                I am already register
                            </NavLink>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
