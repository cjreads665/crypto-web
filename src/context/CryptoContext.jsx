import React from 'react'
import {createContext, useState,useEffect} from 'react'

const CrypCon = createContext()

const CryptoContext = ({children}) => {
	const [currency, setCurrency] = useState('inr')
	const [symbol, setSymbol] = useState('₹')
	const [query, setQuery] = useState()
	useEffect(() => {
		if(currency=='inr') setSymbol('₹')
			else setSymbol('$')
	}, [currency])

	return (
		<CrypCon.Provider value={{currency,symbol,setCurrency,query,setQuery}} >
			{children}
		</CrypCon.Provider>
	)
}

export default CryptoContext
export {CrypCon}