import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(''); 
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/create',{name,email,designation,number,gender})
      .then(response => {
        console.log('Submitted:', response.data);
      })
      .catch(error => {
        console.error('Error submitting:', error);
      });
  };

  return (
    <div className="absolute top-[20%] left-[30%]">
      <div className="h-[600px] w-[500px] bg-blue-200 rounded-md flex  items-center gap-4">
        <form action="submit" className="flex flex-col ml-4">
          <label htmlFor="name">Name:</label>
          <input type="name" id="name" className="input-field" placeholder='Enter the Name' required onChange={(e) => setName(e.target.value)} />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="input-field" placeholder='Enter the Email' required onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label htmlFor="number">Mobile_no:</label>
          <input type="number" id="number" className="input-field" placeholder='Enter the Mobile number' required onChange={(e) => setNumber(e.target.value)} /> 
          <br />
          <label htmlFor="designation">Designation:</label>
          <input type="designation" id="designation" className="input-field" required placeholder='Enter the role' onChange={(e) => setDesignation(e.target.value)} />
          <br />
          <div className="flex gap-3" id='gender'>
            <label onChange={(e) => setGender(e.target.value)}>Gender:</label>
            <label>
              <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
              Male
            </label>
            <label>
              <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
              Female
            </label>
            <label>
              <input type="radio" value="other" checked={gender === 'other'} onChange={handleGenderChange} />
              Other
            </label>
          </div>
          <br />
          <label htmlFor="courses" id='courses' value="courses"> Courses  <br />
            <input type="checkbox" />Degree
            <input type="checkbox" className="ml-3" />Diploma
          </label>

          <br />
          <label htmlFor="email">Upload Image:</label>
          <input type="file" id="image" className="input-field" required onChange={(e) => setImage(e.target.value)} />
        </form>
      </div>
      <Link to={'/home'} className="bg-green-300 w-[80px] rounded-md mt-2" onClick={handleSubmit}>Create</Link>

      <Link to={'/home'} className="bg-green-300 w-[80px] rounded-md mt-2 ml-4">Back</Link>
    </div>
  )
}

export default Create;
