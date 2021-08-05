import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { assignDetails } from '../redux-toolkit/stockSlice'

const MoreStockInfo=(props)=>{
  
  const dispatch = useDispatch();
  const symbol = useSelector((state)=>state.stockInfo.symbol)
  const details = useSelector((state=>state.stockInfo.details))

  const[moreInfo, setMoreInfo] = useState(null)

  const getInfo=async()=>{
    const response = await fetch(process.env.REACT_APP_STOCK_DETAILS_URL+symbol)
    const data= await response.json()
    setMoreInfo(data)
  }
 
  useEffect(()=>{getInfo()} ,[])
  dispatch(assignDetails(moreInfo))

  const loaded = ()=>{  
     return(
      <>
        <h1>{symbol}</h1>
        <h2>{details[0].companyName}</h2>
        <h2>CEO: {details[0].ceo}</h2>
        <img src={details[0].image} alt={`company logo for ${details[0].companyName}`}/>
        

      </>
    )}
  const loading =()=>{
    return(
      <h1>Please Return to Previous Page and Select a Stock</h1>
    )
  }


  return details? loaded():loading()
}
export default MoreStockInfo