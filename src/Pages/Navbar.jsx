import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Create from './Create'


const Navbar = ({username}) => {

	const [show,setShow] = useState(false);


	const navigate = useNavigate()
	const handleLogout = () => {
		axios.get('http://localhost:3001/logout')
			.then(res => {
				if (res.data.status) {
					navigate('/login')
				}
			}).catch(err => {
				console.log(err)
			})
	}


	return (

		<div>
			<header class="pb-6 bg-blue-200 lg:pb-0">
				<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">


					<nav class="flex items-center justify-between h-16 lg:h-20">
						<div class="flex-shrink-0">
							<a href="#" title="" class="flex">
								<img class="w-auto h-8 lg:h-10" src="data:image/png;base64,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" alt="" />
							</a>
						</div>

						<button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">


							<svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
							</svg>


							<svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

					

						<div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
							<a href="/home" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>


							<Link to={'/employelist'} title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Employee List </Link>

							<Link to={'/create'} title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Create Employee </Link>
						</div>

						{ username && <p>welcome,{username}</p>  }

						<Link to={'/login'}   className="h-[40px] w-[70px] bg-red-500 hover:bg-red-700 rounded-md ml-4 flex items-center justify-center" onClick={handleLogout}>LogOut</Link>
					</nav>



				</div>
			</header>

		</div>
	)
}

export default Navbar
