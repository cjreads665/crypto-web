import React from 'react'
import {createContext, useState,useEffect} from 'react'
import axios from 'axios'
import {CoinList} from '../config/api'
const CrypCon = createContext()

const CryptoContext = ({children}) => {
	const [currency, setCurrency] = useState('inr')
	const [symbol, setSymbol] = useState('₹')
	const [query, setQuery] = useState()
	const [coins, setCoins] = useState([])
	const [loading, setLoading] = useState(true)
	const [user,setUser] = useState(null)
	const fetchCoins = async ()=>{
		const {data} = await axios.get(CoinList(currency))
		// console.log(data)
		setCoins(data)
		setLoading(false)
	}

	useEffect(() => {
		if(currency=='inr') setSymbol('₹')
			else setSymbol('$')
	}, [currency])

	return (
		<CrypCon.Provider value={{currency,symbol,setCurrency,query,setQuery,coins, setCoins,loading, setLoading,fetchCoins}} >
			{children}
		</CrypCon.Provider>
	)
}

export default CryptoContext
export {CrypCon}