import { useRef } from "react";
import { BsCart } from "react-icons/bs";
import React ,{useState,useEffect} from "react";
import "./Nav.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
	const navRef = useRef();

  const [totalQuantity,setTotalQuantity]=useState(0);
  const carts=useSelector(store => store.cart.items);
  useEffect(()=>{
    let quantity=0;
    carts.forEach(cart=>{
        quantity+=cart.quantity;
    });
    setTotalQuantity(quantity);
  })
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
  <h1 className="tour">ECO<span>MME</span>RSE</h1>
  <nav ref={navRef}>
    <a href="/#">HOME</a>
    <Link to="/about" className="text-mg">PRODUCTS</Link>
    <a href="/#">LOCATION</a>
    <a href="/#">CONTACT ME</a>
  </nav>
  <div className="end-elements">
  <Link to="/signup" className="btnn">Signup</Link>
    <Link to='/cart' className="bscart"><BsCart/></Link>
    <span>{totalQuantity}</span>
  </div>
</header>
	);
}

export default Nav;