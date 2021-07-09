import stockData from "./stockData";
import {Link} from 'react-router-dom'

const Dashboard = () => {
  console.log(stockData);
  return (
    <div className="stock">
    {stockData.map((stock, index)=>{
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