import React from 'react'

const Header = () => {
	return (
		<header className='h-16 bg-zinc-900 flex items-center justify-between px-6'>
			<h2 className='text-amber-500 text-3xl font-bold inline-block h-10 cursor-pointer' >CryptoWeb</h2>
			<select name="currency" id="currency" className='bg-zinc-900 cursor-pointer outline outline-1 p-2 text-md'>
				<option value="usd">USD</option>
				<option value="inr">INR</option>
			</select>
		</header>
	)
}

export default Header