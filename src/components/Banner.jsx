import React from 'react'
import Carousal from './Carousal'

const Banner = () => {
	return (
		<div style={{
			backgroundImage: 'url(https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)',
			backgroundPosition : 'center center',
		}}
		className='h-72 flex flex-col justify-around'
		>
	{/* the headlines and taglines*/}
			<div className='flex flex-col justify-center ' >
				<h1 className='text-[3rem] text-center font-extrabold' >TrackTrak</h1>
				<h4 className='text-center text-slate-300' >Tack you crypto holdings for FREE</h4>
			</div>
		<Carousal/>
		</div>
	)
}

export default Banner