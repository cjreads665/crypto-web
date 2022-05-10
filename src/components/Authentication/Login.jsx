import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'


const Login = () => {
	let [email,setEmail] =useState('')
	let [password,setPassword] = useState('')
	
	const handleSubmit = async(e) =>{
		e.preventDefault()
		if(!email || !password){
	toast.error("Please fill both email and password")
	return;
		}
		try{
        const result = await signInWithEmailAndPassword(auth,email,password)
		toast.success('Signed In Successfully!')
		console.log(result)

		}catch(err){
		toast.error("Something went wrong!")
		}
	}



	return (
		<div className='min-h-screen'>
			<section className='  '>
				<div className=" flex flex-col justify-center sm:py-12  bg-zinc-900">
  <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 className="font-bold text-center text-2xl mb-5 capitalize">Log in to your account</h1>  
    <div className="backdrop-filter bg-zinc-700 shadow w-full rounded-lg text-black" >
      <form className="px-5 py-7" onSubmit={handleSubmit}>
        <label className="font-semibold text-sm text-white pb-1 block">E-mail</label>
        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
         />
        <label className="font-semibold text-sm text-white pb-1 block">Password</label>
        <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
         />
        <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
            <span className="inline-block mr-2">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </form>
      <div className="py-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-center sm:text-left whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span className="inline-block ml-1">Forgot Password</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-center sm:text-left whitespace-nowrap">
          <Link to='/'>
             <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="inline-block ml-1">Back to Homepage</span>
            </button>	
          </Link>

          </div>
        </div>
      </div>
  </div>
</div>
			</section>
		</div>
	)
}

export default Login