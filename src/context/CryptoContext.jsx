import React from 'react'
import {createContext, useState} from 'react'

const CrypCon = createContext()

const CryptoContext = ({children}) => {
	const [currency, setCurrency] = useState('INR')
	const [symbol, symbol] = useState(initialState)
	return (
		<CrypCon.Provider>
			{children}
		</CrypCon.Provider>
	)
}
const CryptoState = ()=>{
	return useContext(CrypCon)
}

export default CryptoContext

export {CryptoState}