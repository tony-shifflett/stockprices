import stocks from "../data/Stocks";
import {Link} from 'react-router-dom'

const Dashboard = () => {
  console.log(stocks);
  return (
    <div className="stock">
    {stocks.map((stock, index)=>{
        const {name, symbol} = stock

        return (
            <Link key={index} to={`/stock/${symbol}`}>
                <h2>{name}</h2>
            </Link>)
    })}
</div>
  )
};
export default Dashboard;