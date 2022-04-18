import React from 'react'
import {useContext, useEffect} from 'react'
import CryptoContext, {CrypCon} from '../context/CryptoContext'
const Header = () => {
	const {currency, setCurrency} = useContext(CrypCon)
	console.log(currency)
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
		</header>
	)
}

export default Header