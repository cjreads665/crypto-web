import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import {TrendingCoins} from '../config/api'
import {CrypCon} from '../context/CryptoContext'
import AliceCarousel from 'react-alice-carousel';

const Carousal = () => {

	const {currency, symbol} = useContext(CrypCon)
	const [trending , setTrending] = useState([])
	const fetchTrendingCoins = async ()=>{
		const {data} = await axios.get(TrendingCoins(currency)) 
		setTrending(data)
	}
	const responsiveObj = {
		0:{
			items: 2,
		},
		512:{
			items: 4,
		},
	}
	console.log(trending)
	const items = trending.map(coin=>{
		const link = `/coins/${coin.id}`
		const img = coin.image
		const profitLoss = `${coin.price_change_percentage_24h>=0? 'text-green-500' : 'text-red-500' }`
		return (
			<a href={link}>
			<span className='flex flex-col items-center'>
				<img className='w-16 text-center' src={img} alt=""/>
				<span className='text-center uppercase font-bold mt-2'>{coin.symbol}</span>	
				<span className='text-center capitalize'>{coin.id}</span>		
				<span className='text-center capitalize'>{symbol} {coin.current_price}</span>
				<span className={profitLoss} > {coin.price_change_percentage_24h.toFixed(3)}% </span>		
			</span>
			</a>
			)
	})


	useEffect(() => {
		fetchTrendingCoins()
	}, [currency])
	return (
		<div>
			{/*<AliceCarousel
			mouseTracking
			infinite
			autoPlayInterval={1000}
			animationDuration={1500}
			disableDotsControls
			responsive={responsiveObj}
			autoPlay
			items={items}
			disableButtonsControls
			className="h-8 mt-8"
			/>*/}
		</div>
	)
}

export default Carousal