import React, { useRef, useState, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const navRef = useRef();

    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector((store) => store.cart.items);

    useEffect(() => {
        let quantity = 0;
        carts.forEach((cart) => {
            quantity += cart.quantity;
        });
        setTotalQuantity(quantity);
    }, [carts]);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h1 className="tour">
                ECO<span>MME</span>RSE
            </h1>
            <nav ref={navRef}>
                <Link to="/#" onClick={showNavbar}>HOME</Link>
                <Link to="/about" className="text-mg" onClick={showNavbar}>PRODUCTS</Link>
                <Link to="/#" onClick={showNavbar}>LOCATION</Link>
                <Link to="/#" onClick={showNavbar}>CONTACT ME</Link>
                <button className="nav-close-btn" onClick={showNavbar}>
                    &#10005;
                </button>
            </nav>
            <div className="end-elements">
                <Link to="/signup" className="btnn">Signup</Link>
                <Link to='/cart' className="bscart">
                    <BsCart />
                    <span>{totalQuantity}</span>
                </Link>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                &#9776;
            </button>
        </header>
    );
}

export default Nav;
