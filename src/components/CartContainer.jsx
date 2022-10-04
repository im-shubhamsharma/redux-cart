import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { clear } from "../redux/action";
import { getTotalAmount } from "../redux/action";


const CartContainer = ({ cart = [], total, dispatch }) => {
  
  useEffect(()=>{
     dispatch(getTotalAmount());
  },[cart])



  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clear())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default connect(({cart, total})=>({cart, total}))(CartContainer);
