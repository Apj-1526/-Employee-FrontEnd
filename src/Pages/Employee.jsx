import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

const Employee = () => {
	const [users,setUsers] = useState([])
	useEffect(()=>{
		axios.get('http://localhost:3001/getUsers')
		.then(users =>setUsers(users.data))
		.catch(err =>console.log(err))
	},[])

  return (
	<div className="w-[100vh] flex justify-center items-center absolute top-[30%] left-[20%]">
		<div className="w-[550px]">
	  <table className="bg-cyan-300 border border-black">
		<thead >
			<tr>
				<th>
					Name
				</th>
				<th>
					email
				</th>
				<th>
					Mobile_no
				</th>
				<th>
					gender
				</th>
			</tr>
		</thead>
		<tbody>
			{
				users.map(user =>{
				return<tr className="border border-black">
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.number}</td>
						<td>{user.gender}</td>
					</tr>
				})
			}
		</tbody>
	  </table>
	  <Link to={'/home'} className="w-[40px] h-[30px] bg-red-500 rounded-sm">Back</Link>
	  </div>
	  
	</div>
  )
}

export default Employee
