import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const userLoginCredentials = {
  username: "foo",
  password: "bar"
}
const LoginPage = (props) => {
  let navigate = useNavigate();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const onSubmitHandler = () => {
    if(enteredUsername === userLoginCredentials.username && enteredPassword === userLoginCredentials.password){
      localStorage.setItem('userDetails', JSON.stringify(userLoginCredentials));
      navigate('/home');
    }
  }

  return (
	<div className="modal-dialog modal-login">
		<div className="modal-content">
			<div className="modal-header">				
				<h4 className="modal-title">Member Login</h4>
			</div>
			<div className="modal-body">
				<form onSubmit={onSubmitHandler}>
					<div className="form-group">
						<i className="fa fa-user"></i>
						<input 
            type="text" 
            className="form-control" 
            placeholder="Username"
            value={enteredUsername}
            onChange={(e) => setEnteredUsername(e.target.value)} 
            required="required" />
					</div>
					<div className="form-group">
						<i className="fa fa-lock"></i>
						<input 
            type="password" 
            className="form-control" 
            placeholder="Password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)} 
            required="required" />					
					</div>
					<div className="form-group">
						<input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" />
					</div>
				</form>				
				
			</div>
			<div className="modal-footer">
				<a href="#">Forgot Password?</a>
			</div>
		</div>
	</div>
  );
};

export default LoginPage;