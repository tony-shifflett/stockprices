import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { assignStock, assignSymbol } from '../redux-toolkit/stockSlice'


const Stock = (props) => {

  const[stock, setStock] = useState(null)

  const getStock=async()=>{
    const response = await fetch(process.env.REACT_APP_STOCK_URL+props.match.params.symbol)
    const data= await response.json()
    setStock(data)
  }

  useEffect(()=>{getStock()},[])

  const dispatch = useDispatch();
  dispatch(assignSymbol(props.match.params.symbol))
  const symbol = useSelector((state)=>state.stockInfo.symbol);
  dispatch(assignStock(stock))
  const stockInfo = useSelector((state)=>state.stockInfo.stockData);

  const loading=()=>{
    return(
      <>
       <h1>Loading...</h1>
      </>
    )
  }

  const loaded=()=>{
    // https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
     try{
        const state = {
          labels: ['Open Price', 'Daily Low',
                    'Daily High', 'Close Price'],
          datasets: [
            {
              label: 'Price',
              fill: false,
              lineTension: 0,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: [stockInfo[0].open, stockInfo[0].dayLow, stockInfo[0].dayHigh, stockInfo[0].price],
              }
            ]
        }
        return (
          <>
            <div className="stockdisplay">
              <h1 className="stockname">{stockInfo[0].name}</h1>
              <h2>{stockInfo[0].symbol}</h2>
              <h2>Last Price {stockInfo[0].price}</h2>
            </div>
            <div>
                <Line
                  data={state}
                  options={{
                    title:{
                      display:true,
                      text:'Price Change',
                      fontSize:20
                    },
                    legend:{
                      display:true,
                      position:'right'
                    }
                  }}
                />
            </div>
            <Link to={`/MoreStockInfo/${symbol}`}>
                <h2>See More Info</h2>
            </Link>
          </>
        )
     }catch{
              return (
              <>
                <p>This page indicates some portion of the data<br/>
                   is missing or an error occured in processing</p>
              </>
              )
            }
  }

  return stockInfo?loaded():loading()
};
export default Stock;