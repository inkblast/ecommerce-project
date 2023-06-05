import React ,{useEffect ,useState} from "react";
import data from "./data.json";
import axios from "axios";

export default function Cards() {

    let [count, setCount] = useState(null);
    let [cartItems,setCartItems] =useState(count)
  
    const add =(n,p,q) => {
      
        console.log(n,p,q)
     
        axios.post('http://127.0.0.1:8000/cart/cartcreate/',{p_name:n,p_price:p,amount:q})
          .then(function (response) {
            console.log(response);
            setCartItems(count ++)
            console.log(cartItems)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
    fetchData();
    }, [cartItems]);
  
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/cart/count/'); // Replace with your server-side API endpoint
            const { count } = response.data; // Assuming the API returns the count value as "count"
            setCount(count);
             
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleClick = () => {

    }

  return (
    <div>
        <a href="/cart">cart{count}</a>
      {data.map((item, i) => (
        <div key={i}>
          <h2>{item.fname}</h2>
          <div>
            <p>{item.key}</p>
            <p>{item.price}</p>
            <button onClick={()=>add(item.fname,item.price,item.amount)} >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
