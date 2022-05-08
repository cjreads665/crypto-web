import React from 'react'
import Login from './Login'
import {Link,Outlet} from 'react-router-dom'

const SignUpLogIn = () => {
	return (
		<div className='h-screen overflow-hidden flex flex-col items-center justify-center bg-zinc-900'>
		<section className=''>
	<ul className="flex flex-wrap mt-24 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li className="mr-2">
        <Link to='/signuplogin' className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Login</Link>
    </li>
    <li className="mr-2">
        <Link to='/signuplogin/signup' className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Sign Up</Link>
    </li>
</ul>
		</section>
		<Outlet/>

		</div>
	)
}

export default SignUpLogIn