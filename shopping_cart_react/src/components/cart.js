import "../styles/cart.css";
const Cart = ({totals}) => {
  return (
    <div className="Shop">
      <div className="Checkout">
        <div>total:{totals}</div>
        <button>checkout</button>
      </div>
    </div>
  );
};

export default Cart;
