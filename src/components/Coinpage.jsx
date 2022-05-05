import React, {useState, useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {CrypCon} from '../context/CryptoContext'
import {SingleCoin} from '../config/api'
import axios from 'axios'
import CoinInfo from './CoinInfo'
import parse from 'html-react-parser';

const Coinpage = () => {

//variables
	const {id} = useParams()
	const [coin, setCoin] = useState()
	const [loading, setLoading] = useState(true)
	const {currency,symbol} = useContext(CrypCon)
	const styles = {
		container: 'flex flex-col min-h-full items-center md:flex-row',
		get sidebar(){
			return this.container+' mt-8 md:mt-0 md:pt-0 h-[100%] md:flex-col'
		},
		get article(){
			return this.container+'mt-2 justify-around h-[30rem]'
		},
		priceChange: `text-base `,
		marketData: 'text-xl'
	}

//functions
	const fetchCoin = async ()=>{
		const {data} = await axios.get(SingleCoin(id))
		setCoin(data)
		setLoading(false)
		console.log(data)
	}

	function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

	useEffect(() => {
		fetchCoin()
	}, [currency])

	return ( 
		<div className='min-h-[60rem]'>
	{loading?<div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
	<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
	<p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
</div> : <div className={styles.container}>
			<div className={styles.sidebar}>
				<img src={coin?.image.large} alt={coin?.name} className='w-28 p-0 m-0'/>

				<article className={styles.article}>

					<h2 className='text-4xl font-bold'>{coin?.name} <span className='text-2xl text-bold text-zinc-500'>{coin.symbol.toUpperCase()}</span></h2>

					<h2 className='text-5xl'>{symbol}{numberWithCommas(coin?.market_data.current_price[currency])} 

					<span className={coin?.market_data.price_change_percentage_1h_in_currency[currency]>0? 'text-green-500 text-base' : 'text-red-500 text-base'}
					>{coin?.market_data.price_change_percentage_1h_in_currency[currency].toFixed(2)}%</span></h2>

					<p className='px-4 text-center'>
						{parse(coin?.description.en.split('. ')[0])}
					</p>

					<div className={styles.marketData}>
						<p><span className='font-bold'>Market Cap:</span> {symbol} {numberWithCommas(coin?.market_data.market_cap[currency])}</p>
					</div>
					<div className={styles.marketData}>
						<p><span className='font-bold'>Total Volume: </span>{symbol} {numberWithCommas(coin?.market_data.total_volume[currency])}</p>
					</div>
					<div className={styles.marketData}>
						<p>Rank: {coin?.coingecko_rank}</p>
					</div>
				</article>
			</div>

			<CoinInfo coin={coin} />
		</div> 
	}

		</div>
		
	)
}

export default Coinpage