import React from "react";
import "./login.css"
function Login() {
    return (
        <div className="container">
            <div className="logo">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" id="logo" />
            </div>
            <div className="form-box">
                <div className="form">
                    <form action="" className="login-form">
                        <table className="form-table">
                            <thead id="Signin">
                               Signin
                            </thead>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="">Email:</label></td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">Password:</label></td>
                                </tr>
                                <tr>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td><button id="Submit">Submit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <p id="p-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatibus nesciunt quo modi a molestias dolorem delectus, tenetur mollitia necessitatibus est quos officiis error aperiam quas! In pariatur sunt delectus.
                </p>
            </div>
            <div className="create-account">
                <p>New to website</p>
                <button>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login