import React,{useState, useContext} from 'react'
import {CoinList} from '../config/api'
import {CrypCon} from '../context/CryptoContext'


const CoinsTable = () => {
	const [coins, setCoins] = useState([])
	const [loading, setLoading] = useState(false)
	const {currency, symbol} = useContext(CrypCon)
	const fetchCoins = async ()=>{
		const {data} = await axios.get(CoinList)
		setCoins(data)
		setLoading(false)
	}
	return (
		<div>
			sa
		</div>
	)
}

export default CoinsTable