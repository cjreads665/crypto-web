import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import {TrendingCoins} from '../config/api'
import {CrypCon} from '../context/CryptoContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper'
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom'



const Carousal = () => {

	const {currency, symbol} = useContext(CrypCon)
	const [trending , setTrending] = useState([])
	const fetchTrendingCoins = async ()=>{
		const {data} = await axios.get(TrendingCoins(currency)) 
		setTrending(data)
	}
	
	const items = trending.map(coin=>{
		const link = `/coins/${coin.id}`
		const img = coin.image
		const profitLoss = `${coin.price_change_percentage_24h>=0? 'text-green-500' : 'text-red-500' }`
		return (
			
			<SwiperSlide key={uuidv4()}>
			<span >
			<Link to={link} className='flex flex-col items-center w-32'>
				<img className='w-2/4 text-center' src={img} alt=""/>
				<span className='text-center uppercase font-bold mt-2'>{coin.symbol}</span>	
				<span className='text-center capitalize'>{coin.id}</span>		
				<span className='text-center capitalize'>{symbol} {coin.current_price}</span>
				<span className={profitLoss} > {coin.price_change_percentage_24h.toFixed(3)}% </span>
			</Link>		
			</span>
			</SwiperSlide>
			)
	})


// console.log(window.innerWidth)
	useEffect(() => {
		fetchTrendingCoins()
	}, [currency])
	return (
		<div>
	<Swiper
	breakpoints={{
    0: {
      slidesPerView: 2,
    },
    480:{
    	slidesPerView:4,
    },
    768: {
      slidesPerView: 5,
    },

  }}
      spaceBetween={50}
     modules={[Autoplay]}
     autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
     loop={true}
    >
     {items}
    </Swiper>
		</div>
	)
}

export default Carousal