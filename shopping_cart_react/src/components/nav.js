import "../styles/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_title">Beware of me Shop</div>
      <div>
        <ul className="nav_links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Shop">
            <li>Shop</li>
          </Link>
          <Link to="/Shop/Cart">
            <li>
              <img src={require("../images/shopping-cart.png")} />
            </li>
          </Link>
        </ul>
      </div>
      
    </div>
  );
};

export default Nav;
