import React from 'react'
import {useContext} from 'react'
import CryptoContext, {CrypCon} from '../context/CryptoContext'
const Header = () => {
	const {currency, setCurrency} = useContext(CrypCon)
	return (
		<header className='h-16 bg-zinc-900 flex items-center justify-between px-6'>
			<h2 className='text-amber-500 text-3xl font-bold inline-block h-10 cursor-pointer' >CryptoWeb</h2>
			<select name="currency" id="currency" className='bg-zinc-900 cursor-pointer outline rounded outline-1 p-2 text-md' 
			onChange={(e)=>setCurrency(e.target.value)} value={currency}>
				<option value="USD">USD</option>
				<option value="INR">INR</option>
			</select>
		</header>
	)
}

export default Header