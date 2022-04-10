import React, {useState, useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {CrypCon} from '../context/CryptoContext'
import {SingleCoin} from '../config/api'
import axios from 'axios'
import CoinInfo from './CoinInfo'

const Coinpage = () => {
	const {id} = useParams()
	const [coin, setCoin] = useState()
	const [loading, setLoading] = useState(true)
	const {currency,symbol} = useContext(CrypCon)

	const fetchCoin = async ()=>{
		const {data} = await axios.get(SingleCoin(id))
		setCoin(data)
		setLoading(false)
		// console.log(data)
		console.log(loading)
	}


	useEffect(() => {
		fetchCoin()
	}, [currency])

	return ( 
		<div></div>
	)
}

export default Coinpage