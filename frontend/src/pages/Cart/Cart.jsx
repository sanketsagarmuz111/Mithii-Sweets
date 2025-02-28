import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs {item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    {" "}
                    X{" "}
                  </p> 
                </div>
                <hr />
              </div>
            );
          }
        })}
        <div className="cart-bottom">
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
                <p>Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 60}</p>
              </div>
            </div>
            <button onClick={()=> navigate("/order")}>PROCEED TO CHECKOUT</button>
          </div> 
          <div className="cart-promocode">
            <div>
              <p>If You have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
