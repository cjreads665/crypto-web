import React,{useState, useContext, useEffect} from 'react'
import {CoinList} from '../config/api'
import {CrypCon} from '../context/CryptoContext'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;

const CoinsTable = () => {

	//variable declarations
	const {currency,symbol,query,setQuery,coins, setCoins,loading, setLoading,fetchCoins} = useContext(CrypCon)
	let [list, setList] = useState()
	const [search, setSearch] = useState('')
	let path = `/search/${search}`

	//functions
	useEffect(()=>{
		fetchCoins()
	},[currency])

	return (
		<div className='flex justify-around flex-col items-center font-sans h-[30rem] mt-4'>
			
			<div className='flex flex-row'>

				<input type="text"
			className='bg-zinc-800 h-12 rounded p-4'
			placeholder='Search coin' 
			onChange={(e)=>{
				setSearch(e.target.value.toLowerCase())
			}}
			 />

			 <div className='bg-[#3d80b8] h-full rounded w-10 flex justify-center items-center'>
			 <ConditionalLink to={path} condition={search!==''}>
			<button><i className="fa-solid fa-magnifying-glass"></i>
			</button>
			</ConditionalLink>
			 </div>
			</div>
			
			<h3 className='text-2xl' >Coins Listed By Market Cap</h3>
			{/* table */}
			 <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full mx-6 mt-2">
			
			 {loading? <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
	<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
	<p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
</div> : 

	<table className="w-full md:w-[95%] md:ml-12 md:p-4 text-left text-gray-500 dark:text-gray-400 m-1">
			 {/*text-amber-500*/}
        <thead className="text-xs text-yellow-500 text-center uppercase bg-neutral-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-2 ">
                    Coin
                </th>
                <th scope="col" className="p-2 ">
                    Price
                </th>
                <th scope="col" className="p-2">
                    24h Change
                </th>
                <th scope="col" className="p-2">
                    Market Cap
                </th>
            </tr>
        </thead>
        <tbody className='text-center	'>
        
        {
        	coins?.map(coin=>{
        	// console.log(coin)
        	let change =coin.price_change_percentage_24h
        	let changeStyles = `${change>0?'text-green-500' : 'text-red-500'}`
        	let path = `coins/${coin.name.toLowerCase()}`
        	
        	return  <tr className="bg-neutral-800 text-white border-b dark:bg-gray-800 dark:border-gray-700 font-intert" key={coin.symbol}>

                <th scope="row" className=" font-medium p-3 dark:text-white md:w-64">
                    <Link to={path}> <img src={coin.image} alt={coin.name} className='w-1/4 mx-auto'/>{coin.name} <span className='text-xs text-slate-500'>{coin.symbol.toUpperCase()}</span></Link>
                </th>
                <td className="">
                    {symbol+coin.current_price}
                </td>
                <td className={changeStyles}>
                   {change}%
                </td>
                <td className="">
                    {symbol}{coin.market_cap}
                </td>
            
            </tr>
        }) }
        </tbody>
    </table>}
			
</div>

			
		</div>
	)
}

export default CoinsTable