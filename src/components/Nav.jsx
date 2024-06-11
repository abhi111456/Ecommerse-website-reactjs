import { useRef } from "react";
import { BsCart } from "react-icons/bs";

import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
	const navRef = useRef();

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
    <a href="#" className="bscart"><BsCart/></a>
    <span>0</span>
  </div>
</header>
	);
}

export default Nav;