import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [name,setName] = useState();
	const [email,setEmail] = useState();
	const [password,setPassword] = useState();
	const [username,setUserName] = useState('')

	const navigate = useNavigate()

	const handleSubmit = (e) =>{
		e.preventDefault();
		axios.post('http://localhost:3001/login',{name,email,password})
		.then(result =>{
			console.log(result)
			if(result.data === "Success") {
				setUserName(result.data)
				navigate('/home')
				alert("Success!!")
			}else{
				alert("User not Exist!!  please Create a Account")
			}
		
		})
		.catch(err =>console.log(err))
	}
  return (
	<div className="main">
    <div className="signup-container">
      <h1 className="signup-heading text-cyan-400 text-2xl"><strong>Log In</strong></h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="input-field mb-2 ml-8" placeholder='Enter the Email'  required onChange={(e)=>setEmail(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="input-field" placeholder="Enter the password"required onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="submit-btn">LogIn</button>
		</form>
			<p>Don't have an Account</p>	
			<Link to={'/register'} className="bg-green-300 rounded-sm w-[150px]h-[150px]">SignUp</Link>
    
    </div>
	</div>
  );
};

export default Login;
