import React from 'react'
import {useContext, useEffect} from 'react'
import CryptoContext, {CrypCon} from '../context/CryptoContext'
import AuthenModal from './Authentication/AuthenModal'
import UserSideBar from './Authentication/UserSideBar'

const Header = () => {
	const {currency, setCurrency,user} = useContext(CrypCon)
	console.log(user)
	return (
		<header className='h-16 bg-zinc-900 flex items-center justify-between px-6'>
			<a href={'/'}>
			<h2 className='text-amber-500 text-3xl font-bold inline-block h-10 cursor-pointer' >TrackTrak</h2>
			</a>
			<select name="currency" id="currency" className='bg-zinc-900 cursor-pointer outline rounded outline-1 p-2 text-md' 
			onChange={(e)=>setCurrency(e.target.value)} value={currency}>
				<option value="usd">USD</option>
				<option value="inr">INR</option>
			</select>
			{user? <UserSideBar/>: <AuthenModal/>}
		</header>
	)
}

export default Header