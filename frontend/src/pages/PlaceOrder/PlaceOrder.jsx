import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const[data,setData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    street:"", 
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value

    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async(event)=>{
    event.preventDefault()
    let orderItems = []; 
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems, 
      amount:getTotalCartAmount() + 2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }
    else{
      alert("Error")
    }
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount() === 0 ){
      navigate('/cart') 
    }
  },[token])

  return ( 
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="first Name" />
          <input name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email address" />
        <input name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip code" />
          <input name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
        <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 60}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 60}
              </p>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
