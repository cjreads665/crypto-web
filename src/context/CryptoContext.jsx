import React from 'react'
import {createContext, useState,useEffect} from 'react'

const CrypCon = createContext()

const CryptoContext = ({children}) => {
	const [currency, setCurrency] = useState('INR')
	const [symbol, setSymbol] = useState('₹')

	useEffect(() => {
		if(currency=='INR') setSymbol('₹')
			else setSymbol('$')
	}, [currency])

	return (
		<CrypCon.Provider value={{currency,symbol,setCurrency}} >
			{children}
		</CrypCon.Provider>
	)
}

export default CryptoContext
export {CrypCon}