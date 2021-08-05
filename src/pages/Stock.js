  
import stocks from '../data/Stocks'
import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import {Link} from 'react-router-dom'



const Stock = (props) => {
  
  const symbol = props.match.params.symbol;
  const[stock, setStock] = useState(null)

  const getStock=async()=>{
    console.log(process.env.REACT_APP_STOCK_URL+'/'+symbol)
    const response = await fetch(process.env.REACT_APP_STOCK_URL+"/"+symbol)
    const data= await response.json()
    console.log(data)
    setStock(data)
  }

  useEffect(()=>{getStock()} ,[])




  const loading=()=>{
    return(
      <>
        {/* <div className="searchBar">
         <form>
           <input type="text"/>
           <input type="submit"/>
         </form>
       </div> */}
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
              data: [stock[0].open, stock[0].dayLow, stock[0].dayHigh, stock[0].price],
              }
            ]
        }
        return (
          <>
            <div className="stockdisplay">
              <h1 className="stockname">{stock[0].name}</h1>
              <h2>{stock[0].symbol}</h2>
              <h2>Last Price {stock[0].price}</h2>
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

  return stock?loaded():loading()
};
export default Stock;