import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
const MoreStockInfo=(props)=>{
  
  
  const symbol = props.match.params.symbol;
  const url =`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
  console.log("the symbol - ", symbol);

  const[stock, setStock] = useState(null)

  const getStock=async()=>{
    const response = await fetch(url)
    const data= await response.json()
    setStock(data)
    console.log(data)
  }

  useEffect(()=>{getStock()} ,[])
  const loaded = ()=>{  
     return(
      <>
        <h1>{symbol}</h1>
        <h2>{stock[0].companyName}</h2>
        <h2>CEO: {stock[0].ceo}</h2>
        <img src={stock[0].image}/>
        

      </>
    )}
  const loading =()=>{
    return(
      <h1>Please Return to Previous Page and Select a Stock</h1>
    )
  }


  return stock? loaded():loading
}
export default MoreStockInfo