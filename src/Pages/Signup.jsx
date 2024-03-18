import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const [name,setName] = useState();
	const [email,setEmail] = useState();
	const [password,setPassword] = useState();

	const navigate = useNavigate()

	const handleSubmit = (e) =>{
		e.preventDefault();
		axios.post('http://localhost:3001/register',{name,email,password})
		.then(result =>{console.log(result)
		navigate('/login')
		})
		.catch(err =>console.log(err))
	}
  return (
	<div className="main">
    <div className="signup-container">
      <h2 className="signup-heading text-cyan-400">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group flex items-center justify-center flex-col">
		<label htmlFor="name">Name:</label>
          <input type="name" id="name" className="input-field" placeholder='Enter the Name'  required  onChange={(e)=>setName(e.target.value)}  />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="input-field" placeholder='Enter the Email'  required onChange={(e)=>setEmail(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="input-field" placeholder="Enter the password"required onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
		</form>
		<p>Already Have an Account</p>
		<div className='flex items-center justify-center'>
		<Link to="/login" className='h-9 w-12 bg-blue-400 rounded-md flex items-center justify-center'>Login</Link>
		</div>
    
    </div>
	</div>
  );
};

export default Signup;
